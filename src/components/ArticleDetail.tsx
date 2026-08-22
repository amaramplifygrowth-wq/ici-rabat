import React, { useRef, useEffect, useState } from 'react';
import { Article } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { PullQuote } from './PullQuote';
import { ScrollReveal } from './ScrollReveal';
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  Clock,
  Calendar,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Share2,
  Bookmark,
  CheckCircle2,
  Compass,
  Phone,
  Instagram,
  Utensils,
  Sparkles
} from 'lucide-react';

interface ArticleDetailProps {
  article: Article;
  allArticles: Article[];
  onBack: () => void;
  onSelectArticle: (article: Article) => void;
}

export const ArticleDetail: React.FC<ArticleDetailProps> = ({
  article,
  allArticles,
  onBack,
  onSelectArticle,
}) => {
  const { getLocalized, isRtl, t, language } = useLanguage();
  const galleryScrollRef = useRef<HTMLDivElement>(null);
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const current = (window.scrollY / totalHeight) * 100;
        setReadingProgress(Math.min(100, Math.max(0, current)));
      }
    };

    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    updateScrollProgress();
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  const scrollGallery = (direction: 'left' | 'right') => {
    if (galleryScrollRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      galleryScrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const relatedArticles = [...allArticles]
    .filter((a) => a.id !== article.id)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, 3);

  const paragraphs = article.body[language] || article.body.fr;

  // Generate dynamic Schema.org JSON-LD structured data
  const currentTitle = getLocalized(article.title);
  const currentExcerpt = getLocalized(article.excerpt);
  const currentCategory = getLocalized(article.categoryLabel);
  const currentUrl = typeof window !== 'undefined' 
    ? `${window.location.origin}/${article.category}/${article.slug}` 
    : `https://ici-rabat.pages.dev/${article.category}/${article.slug}`;

  const schemaGraph: any[] = [
    {
      '@type': 'Article',
      '@id': `${currentUrl}#article`,
      isPartOf: {
        '@type': 'WebSite',
        name: 'Ici Rabat',
        url: typeof window !== 'undefined' ? window.location.origin : 'https://ici-rabat.pages.dev'
      },
      headline: currentTitle,
      description: currentExcerpt,
      datePublished: article.publishedAt,
      dateModified: article.publishedAt,
      inLanguage: language,
      image: article.heroImage,
      articleSection: currentCategory,
      author: {
        '@type': 'Person',
        name: article.author.name,
        jobTitle: getLocalized(article.author.role),
        image: article.author.avatar
      },
      publisher: {
        '@type': 'Organization',
        name: 'Ici Rabat',
        url: typeof window !== 'undefined' ? window.location.origin : 'https://ici-rabat.pages.dev'
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': currentUrl
      }
    }
  ];

  if (article.businessDetails) {
    const biz = article.businessDetails;
    const businessSchema: any = {
      '@type': article.category === 'horeca' ? 'Restaurant' : 'LocalBusiness',
      '@id': `${currentUrl}#business`,
      name: biz.name,
      image: article.heroImage,
      address: {
        '@type': 'PostalAddress',
        streetAddress: biz.address,
        addressLocality: getLocalized(biz.neighborhood) || 'Rabat',
        addressRegion: 'Rabat-Salé-Kénitra',
        addressCountry: 'MA'
      },
      priceRange: biz.priceLevel,
      url: biz.websiteUrl || article.relatedBusinessUrl
    };

    if (biz.servesCuisine) {
      businessSchema.servesCuisine = biz.servesCuisine;
    } else if (article.category === 'horeca') {
      businessSchema.servesCuisine = getLocalized(biz.category);
    }

    if (biz.phone) {
      businessSchema.telephone = biz.phone;
    }

    if (biz.openingHours) {
      businessSchema.openingHours = getLocalized(biz.openingHours);
    }

    if (biz.instagramUrl) {
      businessSchema.sameAs = businessSchema.sameAs || [];
      businessSchema.sameAs.push(biz.instagramUrl);
    }

    if (biz.whatsapp) {
      businessSchema.contactPoint = {
        '@type': 'ContactPoint',
        contactType: 'reservations & delivery',
        telephone: biz.whatsapp,
        url: `https://wa.me/${biz.whatsapp.replace(/[^0-9]/g, '')}`
      };
    }

    if (biz.aggregateRating) {
      businessSchema.aggregateRating = {
        '@type': 'AggregateRating',
        ratingValue: biz.aggregateRating.ratingValue,
        reviewCount: biz.aggregateRating.reviewCount || 100,
        bestRating: biz.aggregateRating.bestRating || 5.0,
        worstRating: 1.0
      };
    }

    schemaGraph.push(businessSchema);
    schemaGraph[0].about = {
      '@id': `${currentUrl}#business`
    };
  }

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': schemaGraph
  };

  // Inject script into document head dynamically and clean up on unmount
  useEffect(() => {
    const scriptId = `schema-ld-json-${article.id}`;
    let scriptElement = document.getElementById(scriptId) as HTMLScriptElement | null;
    
    if (!scriptElement) {
      scriptElement = document.createElement('script');
      scriptElement.id = scriptId;
      scriptElement.type = 'application/ld+json';
      document.head.appendChild(scriptElement);
    }
    
    scriptElement.textContent = JSON.stringify(structuredData);

    return () => {
      const el = document.getElementById(scriptId);
      if (el) {
        el.remove();
      }
    };
  }, [article, language]);

  return (
    <article id={`article-page-${article.slug}`} className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
      {/* 
        Sticky Reading Progress Indicator Bar 
        Measures exact reading progress and renders a vibrant terracotta accent bar at the top of the viewport
      */}
      <div className="fixed top-0 left-0 right-0 h-[3.5px] bg-[#E3CE93]/80 z-[70] pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-[#FF4B12] via-[#FF7A45] to-[#FF4B12] transition-[width] duration-100 ease-out shadow-[0_0_8px_rgba(217,93,57,0.5)]"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Top Navigation Bar & Breadcrumb */}
      <div className="flex items-center justify-between mb-6 sm:mb-8 pb-4 border-b-2 border-[#141B33]">
        <button
          id="article-back-btn"
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#141B33] hover:text-[#FF4B12] transition-colors cursor-pointer group"
        >
          <ArrowLeft className={`w-4 h-4 transform group-hover:-translate-x-1 transition-transform ${isRtl ? 'rotate-180 group-hover:translate-x-1' : ''}`} />
          <span>{t.backToArticles}</span>
        </button>

        <div className="flex items-center gap-2">
          {article.isPartner && (
            <div className="pop-caption inline-flex items-center gap-1.5 px-3 py-1 text-[10px] sm:text-[11px] font-normal -rotate-2">
              <Sparkles className="w-3 h-3" />
              <span>{article.partnerLabel ? getLocalized(article.partnerLabel) : t.partnerLabel}</span>
            </div>
          )}
          <span className="text-[11px] sm:text-xs uppercase tracking-wider font-bold text-[#FF4B12] bg-[#FF4B12]/10 border border-[#FF4B12]/20 px-3 py-1 rounded-full">
            {getLocalized(article.categoryLabel)}
          </span>
        </div>
      </div>

      {/* Article Header: Meta tags & Confident Fraunces Headline */}
      <header className="mb-8 sm:mb-10 text-center max-w-4xl mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-[11px] sm:text-xs font-semibold text-[#4A3F2E] mb-3 sm:mb-4">
          <span className="inline-flex items-center gap-1 text-[#FF4B12] font-bold">
            <MapPin className="w-3.5 h-3.5" />
            {getLocalized(article.location)}
          </span>
          <span>•</span>
          <span className="inline-flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-[#7A6842]" />
            {article.publishedAt}
          </span>
          <span>•</span>
          <span className="inline-flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-[#7A6842]" />
            {getLocalized(article.readTime)} {t.minRead}
          </span>
        </div>

        {/* 
          IMPORTANT RULE: Headline is placed CLEANLY ABOVE photo with generous margin (mb-6). 
          Balanced mobile scale: text-2xl sm:text-4xl md:text-5xl lg:text-[3.25rem]
        */}
        <h1 className="font-heading font-bold text-2xl sm:text-4xl md:text-5xl lg:text-[3.25rem] text-[#141B33] leading-[1.2] sm:leading-[1.18] tracking-tight mb-4 sm:mb-6">
          {getLocalized(article.title)}
        </h1>

        {article.subtitle && (
          <p className="text-base sm:text-xl text-[#4A3F2E] font-normal leading-relaxed mb-6 sm:mb-8 max-w-3xl mx-auto">
            {getLocalized(article.subtitle)}
          </p>
        )}

        {/* Author Byline Box */}
        <div className="inline-flex items-center gap-3 bg-[#F6E6B8] border-2 border-[#141B33] px-4 py-2 sm:px-5 sm:py-2.5 rounded-full">
          <img
            src={article.author.avatar}
            alt={article.author.name}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover border-2 border-[#141B33]"
            referrerPolicy="no-referrer"
          />
          <div className="text-start">
            <p className="text-xs sm:text-sm font-bold text-[#141B33]">
              {article.author.name}
            </p>
            <p className="text-[10px] sm:text-[11px] text-[#7A6842] font-medium">
              {getLocalized(article.author.role)}
            </p>
          </div>
        </div>
      </header>

      {/* 
        Hero Image: Clean frame with minimum 32px whitespace from title.
        NO text overlaid! Caption clearly below.
      */}
      <div className="mb-14">
        <div className="relative rounded-none overflow-hidden riso-shadow border-4 border-white bg-[#E3CE93] aspect-[16/10] sm:aspect-[21/10]">
          <img
            src={article.heroImage}
            alt={getLocalized(article.title)}
            className="w-full h-full object-cover editorial-photo"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 editorial-overlay z-10" />
        </div>
        <p className="text-xs sm:text-sm text-[#7A6842] italic mt-3 text-center sm:text-start px-2">
          {getLocalized(article.heroImageCaption)}
        </p>
      </div>

      {/* Article Body Content & Practical Info Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
        
        {/* Main Text Content (Takes 8 cols, or full width when there's no business sidebar) */}
        <div className={`${article.businessDetails ? 'lg:col-span-8' : 'lg:col-span-12 max-w-3xl mx-auto'} space-y-6`}>
          {paragraphs.map((p, index) => {
            const isFirst = index === 0;
            // Place pull-quote naturally in the editorial rhythm (after paragraph 2)
            const showPullQuoteAfterThis = article.pullQuote && index === 1;

            return (
              <React.Fragment key={index}>
                <p
                  className={
                    isFirst
                      ? "drop-cap text-lg sm:text-xl text-[#141B33] leading-[1.8] font-normal"
                      : "text-base sm:text-lg text-[#141B33] leading-[1.85] font-normal"
                  }
                >
                  {p}
                </p>
                {showPullQuoteAfterThis && (
                  <PullQuote
                    quote={article.pullQuote.text}
                    author={article.pullQuote.author}
                  />
                )}
              </React.Fragment>
            );
          })}

          {/* Fallback if article has only 1 paragraph */}
          {article.pullQuote && paragraphs.length <= 1 && (
            <PullQuote
              quote={article.pullQuote.text}
              author={article.pullQuote.author}
            />
          )}
        </div>

        {/* Business Practical Info Sidebar Box (Takes 4 cols) — only for business-feature articles */}
        {article.businessDetails && (
        <div className="lg:col-span-4">
          <div className="sticky top-28 bg-[#FFFFFF] border-2 border-[#E3CE93] rounded-none p-6 riso-shadow">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b-2 border-[#141B33]">
              <Utensils className="w-5 h-5 text-[#FF4B12]" />
              <h3 className="font-heading font-bold text-lg text-[#141B33]">
                {t.businessInformation}
              </h3>
            </div>

            <div className="space-y-4 text-xs sm:text-sm">
              <div>
                <span className="font-bold text-[#141B33] block mb-0.5">
                  {article.relatedBusinessName}
                </span>
                {article.businessDetails?.category && (
                  <span className="text-[#7A6842] text-xs">
                    {getLocalized(article.businessDetails.category)}
                  </span>
                )}
              </div>

              {article.businessDetails?.address && (
                <div>
                  <span className="text-[11px] uppercase font-bold text-[#7A6842] tracking-wider block">
                    {t.addressLabel}
                  </span>
                  <p className="text-[#4A3F2E] mt-0.5 leading-snug">
                    {article.businessDetails.address}
                  </p>
                </div>
              )}

              {article.businessDetails?.openingHours && (
                <div>
                  <span className="text-[11px] uppercase font-bold text-[#7A6842] tracking-wider block">
                    {t.hoursLabel}
                  </span>
                  <p className="text-[#4A3F2E] mt-0.5 leading-snug">
                    {getLocalized(article.businessDetails.openingHours)}
                  </p>
                </div>
              )}

              {article.businessDetails?.priceLevel && (
                <div>
                  <span className="text-[11px] uppercase font-bold text-[#7A6842] tracking-wider block">
                    {t.priceLabel}
                  </span>
                  <p className="font-bold text-[#141B33] mt-0.5">
                    {article.businessDetails.priceLevel}
                  </p>
                </div>
              )}

              {article.businessDetails?.specialty && (
                <div>
                  <span className="text-[11px] uppercase font-bold text-[#7A6842] tracking-wider block">
                    {t.specialtyLabel}
                  </span>
                  <p className="text-[#4A3F2E] mt-0.5 leading-snug">
                    {getLocalized(article.businessDetails.specialty)}
                  </p>
                </div>
              )}

              {/* Direct Link CTA Button to Business Website */}
              <div className="pt-3 border-t-2 border-[#141B33] space-y-2">
                <a
                  href={article.relatedBusinessUrl || article.businessDetails.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="business-website-cta"
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#FF4B12] hover:bg-[#CC2E00] text-white font-bold text-xs uppercase tracking-wider rounded-none riso-shadow-sm hover:riso-shadow-magenta transition-all duration-200"
                >
                  <span>{t.visitWebsite}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                {article.businessDetails?.phone && (
                  <a
                    href={`tel:${article.businessDetails.phone}`}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-[#F6E6B8] hover:bg-[#E3CE93] text-[#141B33] font-bold text-xs rounded-none transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#FF4B12]" />
                    <span>{article.businessDetails.phone}</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
        )}

      </div>

      {/*
        Horizontally Scrolling Photo Strip Gallery (when multiple images are present)
      */}
      {article.galleryImages && article.galleryImages.length > 0 && (
        <section className="mb-20 pt-10 border-t-2 border-[#141B33]">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-[#FF4B12]">
                PORTFOLIO PHOTOGRAPHIQUE
              </span>
              <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#141B33]">
                {t.photoGallery}
              </h3>
            </div>

            {/* Carousel Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => scrollGallery('left')}
                className="p-2 rounded-full bg-[#E3CE93] hover:bg-[#141B33] hover:text-white text-[#141B33] transition-colors cursor-pointer"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollGallery('right')}
                className="p-2 rounded-full bg-[#E3CE93] hover:bg-[#141B33] hover:text-white text-[#141B33] transition-colors cursor-pointer"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Photo Strip Scroll Container */}
          <div
            ref={galleryScrollRef}
            className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory py-2"
          >
            {article.galleryImages.map((img, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-80 sm:w-96 snap-start bg-white border-2 border-[#141B33] rounded-none overflow-hidden riso-shadow"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#141B33]">
                  <img
                    src={img.url}
                    alt={getLocalized(img.caption)}
                    className="w-full h-full object-cover editorial-photo hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 editorial-overlay z-10" />
                </div>
                <div className="p-4 bg-[#FBF1D8]">
                  <p className="text-xs text-[#141B33] font-semibold leading-snug">
                    {getLocalized(img.caption)}
                  </p>
                  {img.credit && (
                    <p className="text-[10px] text-[#7A6842] mt-1">
                      {img.credit}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Related Stories Section */}
      {relatedArticles.length > 0 && (
        <section className="pt-12 border-t-2 border-[#141B33]">
          <div className="mb-8">
            <span className="text-xs uppercase tracking-widest font-bold text-[#FF4B12]">
              DANS LE MÊME ESPRIT
            </span>
            <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#141B33]">
              {t.relatedStories}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map((rel) => (
              <div
                key={rel.id}
                onClick={() => {
                  onSelectArticle(rel);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="group bg-white border-2 border-[#141B33] rounded-none overflow-hidden riso-shadow-sm hover:riso-shadow-magenta transition-all cursor-pointer flex flex-col justify-between"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#E3CE93]">
                  <img
                    src={rel.heroImage}
                    alt={getLocalized(rel.title)}
                    className="w-full h-full object-cover editorial-photo group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 editorial-overlay z-10" />
                </div>
                <div className="p-4 flex flex-col flex-grow justify-between">
                  <div>
                    <span className="text-[11px] font-bold text-[#FF4B12] block mb-1">
                      {getLocalized(rel.location)}
                    </span>
                    <h4 className="font-heading font-bold text-base text-[#141B33] group-hover:text-[#FF4B12] transition-colors leading-snug line-clamp-2">
                      {getLocalized(rel.title)}
                    </h4>
                  </div>
                  <div className="mt-3 pt-2 border-t border-[#FFE9C2] flex items-center justify-between text-xs font-semibold text-[#7A6842]">
                    <span>{getLocalized(rel.readTime)}</span>
                    <ArrowRight className={`w-3.5 h-3.5 ${isRtl ? 'rotate-180' : ''}`} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

    </article>
  );
};
