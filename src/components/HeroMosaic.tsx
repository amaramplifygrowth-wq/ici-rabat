import React from 'react';
import { Article } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, Clock, MapPin, Sparkles } from 'lucide-react';
import { EditorialPhotoCollage } from './EditorialPhotoCollage';

interface HeroMosaicProps {
  article: Article;
  onSelectArticle: (article: Article) => void;
}

export const HeroMosaic: React.FC<HeroMosaicProps> = ({ article, onSelectArticle }) => {
  const { getLocalized, isRtl, t } = useLanguage();

  return (
    <section id="hero-feature" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
      {/* 
        CRITICAL ARCHITECTURE:
        Left / Right grid (or top/bottom responsive) ensuring the asymmetric 
        photo collage is distinct and separate. NO text overlaps photos.
      */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        
        {/* Editorial Text Column (Takes 6 cols) */}
        <div className="lg:col-span-6 flex flex-col justify-center order-2 lg:order-1">
          {/* Category Tag & Meta Header */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold uppercase tracking-wider bg-[#D95D39]/10 text-[#D95D39] border border-[#D95D39]/20 rounded-full">
              {getLocalized(article.categoryLabel)}
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-[#6F645A] font-medium">
              <MapPin className="w-3.5 h-3.5 text-[#D95D39]" />
              {getLocalized(article.location)}
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-[#6F645A] font-medium">
              <Clock className="w-3.5 h-3.5 text-[#8E7E73]" />
              {getLocalized(article.readTime)} {t.minRead}
            </span>
          </div>

          {/* Confident Oversized Fraunces Title (Weights max 700) */}
          <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight text-[#182338] leading-[1.15] mb-5">
            {getLocalized(article.title)}
          </h1>

          {/* Editorial Subtitle / Excerpt */}
          <p className="text-base sm:text-lg text-[#445065] leading-relaxed mb-6 font-normal">
            {getLocalized(article.excerpt)}
          </p>

          {/* Author Byline & Call to Action */}
          <div className="pt-4 border-t border-[#E8E1D7] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="w-11 h-11 rounded-full object-cover border-2 border-[#E5DFD5] shadow-xs"
                referrerPolicy="no-referrer"
              />
              <div>
                <p className="text-xs uppercase tracking-wider text-[#8E7E73] font-medium">
                  {t.writtenBy}
                </p>
                <p className="text-sm font-bold text-[#182338]">
                  {article.author.name}
                </p>
              </div>
            </div>

            {/* Read Article Button */}
            <button
              id="hero-read-btn"
              onClick={() => onSelectArticle(article)}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#182338] hover:bg-[#D95D39] text-white text-sm font-semibold rounded-lg shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer group"
            >
              <span>{t.readArticle}</span>
              <ArrowRight
                className={`w-4 h-4 transform group-hover:translate-x-1 transition-transform ${
                  isRtl ? 'rotate-180 group-hover:-translate-x-1' : ''
                }`}
              />
            </button>
          </div>
        </div>

        {/* 
          Standardized Asymmetric Overlapping Photo Collage Column (Takes 6 cols) 
          PURE VISUALS: Absolutely NO text or badges superimposed over images!
        */}
        <div className="lg:col-span-6 relative order-1 lg:order-2">
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
        </div>

      </div>
    </section>
  );
};
