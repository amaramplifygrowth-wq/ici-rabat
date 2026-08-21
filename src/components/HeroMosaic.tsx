import React from 'react';
import { Article } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, Clock, MapPin, Sparkles } from 'lucide-react';
import { EditorialPhotoCollage } from './EditorialPhotoCollage';
import { ScrollReveal } from './ScrollReveal';

interface HeroMosaicProps {
  article: Article;
  onSelectArticle: (article: Article) => void;
}

export const HeroMosaic: React.FC<HeroMosaicProps> = ({ article, onSelectArticle }) => {
  const { getLocalized, isRtl, t } = useLanguage();

  return (
    <section id="hero-feature" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-8 pb-12 sm:pb-16">
      {/* 
        CRITICAL ARCHITECTURE:
        Left / Right grid (or top/bottom responsive) ensuring the asymmetric 
        photo collage is distinct and separate. NO text overlaps photos.
      */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
        
        {/* Editorial Text Column (Takes 6 cols) */}
        <div className="lg:col-span-6 flex flex-col justify-center order-2 lg:order-1">
          <ScrollReveal direction="up" distance={20}>
            {/* Category Tag & Meta Header */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4">
              <span className="pop-caption inline-flex items-center gap-1.5 px-3 py-1 text-[11px] sm:text-xs font-normal tracking-wider">
                {getLocalized(article.categoryLabel)}
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] sm:text-xs text-[#4A3F2E] font-medium">
                <MapPin className="w-3.5 h-3.5 text-[#FF4B12]" />
                {getLocalized(article.location)}
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] sm:text-xs text-[#4A3F2E] font-medium">
                <Clock className="w-3.5 h-3.5 text-[#7A6842]" />
                {getLocalized(article.readTime)} {t.minRead}
              </span>
            </div>

            {/* Balanced Editorial Title (30-40% smaller on mobile for harmonious balance with content) */}
            <h1 className="font-heading font-bold text-2xl sm:text-4xl md:text-5xl tracking-tight text-[#141B33] leading-[1.2] sm:leading-[1.15] mb-3.5 sm:mb-5">
              {getLocalized(article.title)}
            </h1>

            {/* Editorial Subtitle / Excerpt */}
            <p className="text-sm sm:text-lg text-[#4A3F2E] leading-relaxed mb-5 sm:mb-6 font-normal">
              {getLocalized(article.excerpt)}
            </p>

            {/* Author Byline & Call to Action */}
            <div className="pt-4 border-t-2 border-[#141B33] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <img
                  src={article.author.avatar}
                  alt={article.author.name}
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover border-2 border-[#E3CE93] riso-shadow-sm"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <p className="text-[10px] sm:text-xs uppercase tracking-wider text-[#7A6842] font-medium">
                    {t.writtenBy}
                  </p>
                  <p className="text-xs sm:text-sm font-bold text-[#141B33]">
                    {article.author.name}
                  </p>
                </div>
              </div>

              {/* Read Article Button */}
              <button
                id="hero-read-btn"
                onClick={() => onSelectArticle(article)}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-6 sm:py-3.5 bg-[#141B33] hover:bg-[#FF4B12] text-white text-xs sm:text-sm font-semibold rounded-none riso-shadow-sm hover:riso-shadow-magenta transition-all duration-200 cursor-pointer group"
              >
                <span>{t.readArticle}</span>
                <ArrowRight
                  className={`w-4 h-4 transform group-hover:translate-x-1 transition-transform ${
                    isRtl ? 'rotate-180 group-hover:-translate-x-1' : ''
                  }`}
                />
              </button>
            </div>
          </ScrollReveal>
        </div>

        {/* 
          Standardized Asymmetric Overlapping Photo Collage Column (Takes 6 cols) 
          PURE VISUALS: Absolutely NO text or badges superimposed over images!
        */}
        <div className="lg:col-span-6 relative order-1 lg:order-2">
          <ScrollReveal direction="up" delay={0.1} distance={20}>
            <EditorialPhotoCollage
              mainImage={article.heroImage}
              mainAlt={getLocalized(article.title)}
              overlayImage={
                article.heroOverlapImage ||
                article.galleryImages?.[1]?.url ||
                article.galleryImages?.[0]?.url ||
                article.heroImage
              }
              overlayAlt="Intérieur et ambiance"
              tertiaryImage={article.galleryImages?.[2]?.url}
              tertiaryAlt="Détails"
              caption={article.heroImageCaption}
            />
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
};
