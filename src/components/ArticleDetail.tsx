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
  Utensils
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

  const relatedArticles = allArticles
    .filter((a) => a.id !== article.id)
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
      <div className="fixed top-0 left-0 right-0 h-[3.5px] bg-[#EAE2D8]/80 z-[70] pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-[#D95D39] via-[#E07A5F] to-[#D95D39] transition-[width] duration-100 ease-out shadow-[0_0_8px_rgba(217,93,57,0.5)]"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Top Navigation Bar & Breadcrumb */}
      <div className="flex items-center justify-between mb-6 sm:mb-8 pb-4 border-b border-[#E5DFD5]">
        <button
          id="article-back-btn"
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#182338] hover:text-[#D95D39] transition-colors cursor-pointer group"
        >
          <ArrowLeft className={`w-4 h-4 transform group-hover:-translate-x-1 transition-transform ${isRtl ? 'rotate-180 group-hover:translate-x-1' : ''}`} />
          <span>{t.backToArticles}</span>
        </button>

        <div className="flex items-center gap-2">
          <span className="text-[11px] sm:text-xs uppercase tracking-wider font-bold text-[#D95D39] bg-[#D95D39]/10 border border-[#D95D39]/20 px-3 py-1 rounded-full">
            {getLocalized(article.categoryLabel)}
          </span>
        </div>
      </div>

      {/* Article Header: Meta tags & Confident Fraunces Headline */}
      <header className="mb-8 sm:mb-10 text-center max-w-4xl mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-[11px] sm:text-xs font-semibold text-[#6F645A] mb-3 sm:mb-4">
          <span className="inline-flex items-center gap-1 text-[#D95D39] font-bold">
            <MapPin className="w-3.5 h-3.5" />
            {getLocalized(article.location)}
          </span>
          <span>•</span>
          <span className="inline-flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-[#8E7E73]" />
            {article.publishedAt}
          </span>
          <span>•</span>
          <span className="inline-flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-[#8E7E73]" />
            {getLocalized(article.readTime)} {t.minRead}
          </span>
        </div>

        {/* 
          IMPORTANT RULE: Headline is placed CLEANLY ABOVE photo with generous margin (mb-6). 
          Balanced mobile scale: text-2xl sm:text-4xl md:text-5xl lg:text-[3.25rem]
        */}
        <h1 className="font-heading font-bold text-2xl sm:text-4xl md:text-5xl lg:text-[3.25rem] text-[#182338] leading-[1.2] sm:leading-[1.18] tracking-tight mb-4 sm:mb-6">
          {getLocalized(article.title)}
        </h1>

        {article.subtitle && (
          <p className="text-base sm:text-xl text-[#55657E] font-normal leading-relaxed mb-6 sm:mb-8 max-w-3xl mx-auto">
            {getLocalized(article.subtitle)}
          </p>
        )}

        {/* Author Byline Box */}
        <div className="inline-flex items-center gap-3 bg-[#F4EFEA] border border-[#E8E1D7] px-4 py-2 sm:px-5 sm:py-2.5 rounded-full">
          <img
            src={article.author.avatar}
            alt={article.author.name}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover border border-[#D5CBC0]"
            referrerPolicy="no-referrer"
          />
          <div className="text-start">
            <p className="text-xs sm:text-sm font-bold text-[#182338]">
              {article.author.name}
            </p>
            <p className="text-[10px] sm:text-[11px] text-[#8E7E73] font-medium">
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
        <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-[#EAE2D8] aspect-[16/10] sm:aspect-[21/10]">
          <img
            src={article.heroImage}
            alt={getLocalized(article.title)}
            className="w-full h-full object-cover editorial-photo"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 editorial-overlay z-10" />
        </div>
        <p className="text-xs sm:text-sm text-[#8E7E73] italic mt-3 text-center sm:text-start px-2">
          {getLocalized(article.heroImageCaption)}
        </p>
      </div>

      {/* Article Body Content & Practical Info Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
        
        {/* Main Text Content (Takes 8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          {paragraphs.map((p, index) => {
            const isFirst = index === 0;
            // Place pull-quote naturally in the editorial rhythm (after paragraph 2)
            const showPullQuoteAfterThis = article.pullQuote && index === 1;

            return (
              <React.Fragment key={index}>
                <p
                  className={
                    isFirst
                      ? "drop-cap text-lg sm:text-xl text-[#222E42] leading-[1.8] font-normal"
                      : "text-base sm:text-lg text-[#334155] leading-[1.85] font-normal"
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

        {/* Business Practical Info Sidebar Box (Takes 4 cols) */}
        <div className="lg:col-span-4">
          <div className="sticky top-28 bg-[#FFFFFF] border-2 border-[#E5DFD5] rounded-2xl p-6 shadow-md">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#EBE4DA]">
              <Utensils className="w-5 h-5 text-[#D95D39]" />
              <h3 className="font-heading font-bold text-lg text-[#182338]">
                {t.businessInformation}
              </h3>
            </div>

            <div className="space-y-4 text-xs sm:text-sm">
              <div>
                <span className="font-bold text-[#182338] block mb-0.5">
                  {article.relatedBusinessName}
                </span>
                {article.businessDetails?.category && (
                  <span className="text-[#8E7E73] text-xs">
                    {getLocalized(article.businessDetails.category)}
                  </span>
                )}
              </div>

              {article.businessDetails?.address && (
                <div>
                  <span className="text-[11px] uppercase font-bold text-[#8E7E73] tracking-wider block">
                    {t.addressLabel}
                  </span>
                  <p className="text-[#445065] mt-0.5 leading-snug">
                    {article.businessDetails.address}
                  </p>
                </div>
              )}

              {article.businessDetails?.openingHours && (
                <div>
                  <span className="text-[11px] uppercase font-bold text-[#8E7E73] tracking-wider block">
                    {t.hoursLabel}
                  </span>
                  <p className="text-[#445065] mt-0.5 leading-snug">
                    {getLocalized(article.businessDetails.openingHours)}
                  </p>
                </div>
              )}

              {article.businessDetails?.priceLevel && (
                <div>
                  <span className="text-[11px] uppercase font-bold text-[#8E7E73] tracking-wider block">
                    {t.priceLabel}
                  </span>
                  <p className="font-bold text-[#182338] mt-0.5">
                    {article.businessDetails.priceLevel}
                  </p>
                </div>
              )}

              {article.businessDetails?.specialty && (
                <div>
                  <span className="text-[11px] uppercase font-bold text-[#8E7E73] tracking-wider block">
                    {t.specialtyLabel}
                  </span>
                  <p className="text-[#445065] mt-0.5 leading-snug">
                    {getLocalized(article.businessDetails.specialty)}
                  </p>
                </div>
              )}

              {/* Direct Link CTA Button to Business Website */}
              <div className="pt-3 border-t border-[#EBE4DA] space-y-2">
                <a
                  href={article.relatedBusinessUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="business-website-cta"
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#D95D39] hover:bg-[#C04B28] text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
                >
                  <span>{t.visitWebsite}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                {article.businessDetails?.phone && (
                  <a
                    href={`tel:${article.businessDetails.phone}`}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-[#F4EFEA] hover:bg-[#EAE2D8] text-[#182338] font-bold text-xs rounded-lg transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#D95D39]" />
                    <span>{article.businessDetails.phone}</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* 
        Horizontally Scrolling Photo Strip Gallery (when multiple images are present) 
      */}
      {article.galleryImages && article.galleryImages.length > 0 && (
        <section className="mb-20 pt-10 border-t border-[#E5DFD5]">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-[#D95D39]">
                PORTFOLIO PHOTOGRAPHIQUE
              </span>
              <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#182338]">
                {t.photoGallery}
              </h3>
            </div>

            {/* Carousel Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => scrollGallery('left')}
                className="p-2 rounded-full bg-[#EAE2D8] hover:bg-[#182338] hover:text-white text-[#182338] transition-colors cursor-pointer"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollGallery('right')}
                className="p-2 rounded-full bg-[#EAE2D8] hover:bg-[#182338] hover:text-white text-[#182338] transition-colors cursor-pointer"
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
                className="flex-shrink-0 w-80 sm:w-96 snap-start bg-white border border-[#E8E1D7] rounded-xl overflow-hidden shadow-md"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#182338]">
                  <img
                    src={img.url}
                    alt={getLocalized(img.caption)}
                    className="w-full h-full object-cover editorial-photo hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 editorial-overlay z-10" />
                </div>
                <div className="p-4 bg-[#FAF8F5]">
                  <p className="text-xs text-[#182338] font-semibold leading-snug">
                    {getLocalized(img.caption)}
                  </p>
                  {img.credit && (
                    <p className="text-[10px] text-[#8E7E73] mt-1">
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
        <section className="pt-12 border-t border-[#E5DFD5]">
          <div className="mb-8">
            <span className="text-xs uppercase tracking-widest font-bold text-[#D95D39]">
              DANS LE MÊME ESPRIT
            </span>
            <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#182338]">
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
                className="group bg-white border border-[#E8E1D7] rounded-xl overflow-hidden shadow-xs hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#EAE2D8]">
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
                    <span className="text-[11px] font-bold text-[#D95D39] block mb-1">
                      {getLocalized(rel.location)}
                    </span>
                    <h4 className="font-heading font-bold text-base text-[#182338] group-hover:text-[#D95D39] transition-colors leading-snug line-clamp-2">
                      {getLocalized(rel.title)}
                    </h4>
                  </div>
                  <div className="mt-3 pt-2 border-t border-[#F0EAE1] flex items-center justify-between text-xs font-semibold text-[#8E7E73]">
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
