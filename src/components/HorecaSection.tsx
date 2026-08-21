import React, { useState } from 'react';
import { Article } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { MapPin, Clock, ArrowUpRight, ArrowRight, UtensilsCrossed, Sparkles } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface HorecaSectionProps {
  articles: Article[];
  onSelectArticle: (article: Article) => void;
  onViewAllHoreca?: () => void;
  showAll?: boolean;
}

export const HorecaSection: React.FC<HorecaSectionProps> = ({
  articles,
  onSelectArticle,
  onViewAllHoreca,
  showAll = false,
}) => {
  const { getLocalized, isRtl, t } = useLanguage();
  const [selectedNeighborhood, setSelectedNeighborhood] = useState<string>('all');

  // Sort articles chronologically descending (newest published date first)
  const horecaArticles = [...articles]
    .filter((a) => a.category === 'horeca')
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

  const neighborhoods = [
    { id: 'all', label: t.filterAll },
    { id: 'hassan', label: 'Hassan' },
    { id: 'oudayas', label: 'Oudayas' },
    { id: 'agdal', label: 'Agdal' },
    { id: 'bouregreg', label: 'Bouregreg' },
    { id: 'souissi', label: 'Souissi' }
  ];

  const filteredArticles = selectedNeighborhood === 'all'
    ? horecaArticles
    : horecaArticles.filter((art) => {
        const loc = getLocalized(art.location).toLowerCase();
        return loc.includes(selectedNeighborhood);
      });

  const displayList = showAll ? filteredArticles : filteredArticles.slice(0, 9);

  return (
    <section id="horeca-guide-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6 sm:pt-14 sm:pb-8">
      <ScrollReveal direction="up" distance={16}>
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 pb-4 border-b-2 border-[#141B33]">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <UtensilsCrossed className="w-4 h-4 text-[#FF4B12]" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#FF4B12]">
                {t.navHoreca}
              </span>
            </div>
            <h2 className="font-heading font-bold text-2xl sm:text-4xl text-[#141B33]">
              {t.horecaSectionTitle}
            </h2>
          </div>
          <p className="text-xs sm:text-base text-[#4A3F2E] max-w-md mt-2 md:mt-0 font-normal">
            {t.horecaSectionSubtitle}
          </p>
        </div>

        {/* Neighborhood Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8 sm:mb-10" id="neighborhood-filter-bar">
          {neighborhoods.map((n) => {
            const isActive = selectedNeighborhood === n.id;
            return (
              <button
                key={n.id}
                id={`filter-nh-${n.id}`}
                onClick={() => setSelectedNeighborhood(n.id)}
                className={`px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-full transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#141B33] text-white riso-shadow-sm'
                    : 'bg-[#E3CE93] text-[#4A3F2E] hover:bg-[#E3CE93] hover:text-[#141B33]'
                }`}
              >
                {n.label}
              </button>
            );
          })}
        </div>
      </ScrollReveal>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {displayList.map((item, idx) => {
          return (
            <ScrollReveal
              key={item.id}
              direction="up"
              distance={24}
              delay={Math.min(idx * 0.06, 0.3)}
            >
              <div
                id={`horeca-card-${item.id}`}
                className="bg-[#FFFFFF] border-2 border-[#141B33] rounded-none overflow-hidden riso-shadow-sm hover:riso-shadow-magenta transition-all duration-300 flex flex-col justify-between group h-full"
              >
                {/* Photo Area with no overlapping text */}
                <div
                  className="relative aspect-[16/10] overflow-hidden bg-[#E3CE93] cursor-pointer"
                  onClick={() => onSelectArticle(item)}
                >
                  <img
                    src={item.heroImage}
                    alt={getLocalized(item.title)}
                    className="w-full h-full object-cover editorial-photo group-hover:scale-105 transition-transform duration-500 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  {/* Warm Editorial Color-Grading Overlay (8-10% intensity) */}
                  <div className="absolute inset-0 editorial-overlay z-10" />
                  {item.businessDetails?.priceLevel && (
                    <div className="absolute top-3 right-3 z-20 bg-[#FBF1D8]/95 text-[#141B33] font-bold text-xs px-2.5 py-1 rounded-md riso-shadow-sm border-2 border-[#141B33]">
                      {item.businessDetails.priceLevel}
                    </div>
                  )}
                  {item.isPartner && (
                    <div className="absolute top-3 left-3 z-20 -rotate-3">
                      <div className="pop-caption inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] sm:text-[11px] font-normal">
                        <Sparkles className="w-3 h-3" />
                        <span>{item.partnerLabel ? getLocalized(item.partnerLabel) : t.partnerLabel}</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Text Body */}
                <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs text-[#7A6842] font-medium mb-2.5 sm:mb-3">
                      <span className="flex items-center gap-1 text-[#FF4B12] font-bold">
                        <MapPin className="w-3.5 h-3.5" />
                        {getLocalized(item.location)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {getLocalized(item.readTime)}
                      </span>
                    </div>

                    <h3
                      onClick={() => onSelectArticle(item)}
                      className="font-heading font-bold text-lg sm:text-xl text-[#141B33] group-hover:text-[#FF4B12] transition-colors leading-snug mb-2.5 sm:mb-3 cursor-pointer"
                    >
                      {getLocalized(item.title)}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#4A3F2E] leading-relaxed line-clamp-3 mb-4 font-normal">
                      {getLocalized(item.excerpt)}
                    </p>

                    {/* Business Specialty Tag */}
                    {item.businessDetails?.specialty && (
                      <div className="bg-[#FBF1D8] border-2 border-[#141B33] rounded-md p-2.5 mb-4 text-xs text-[#4A3F2E]">
                        <span className="font-bold text-[#141B33] block mb-0.5">
                          {t.specialtyLabel} :
                        </span>
                        <span className="line-clamp-2">
                          {getLocalized(item.businessDetails.specialty)}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Footer Buttons */}
                  <div className="pt-4 border-t border-[#FFE9C2] flex items-center justify-between">
                    <button
                      onClick={() => onSelectArticle(item)}
                      className="text-xs font-bold text-[#141B33] hover:text-[#FF4B12] flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <span>{t.readArticle}</span>
                      <ArrowRight className={`w-3.5 h-3.5 ${isRtl ? 'rotate-180' : ''}`} />
                    </button>

                    {item.relatedBusinessUrl && (
                      <a
                        href={item.relatedBusinessUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-[#7A6842] hover:text-[#141B33] flex items-center gap-1"
                        title={t.visitWebsite}
                      >
                        <span>Web</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>

      {/* Optional "View All" button on Homepage */}
      {!showAll && onViewAllHoreca && (
        <div className="text-center mt-8 sm:mt-10 mb-2">
          <button
            id="view-all-horeca-btn"
            onClick={onViewAllHoreca}
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 border-2 border-[#141B33] text-[#141B33] hover:bg-[#141B33] hover:text-white font-bold text-xs sm:text-sm rounded-none transition-all duration-200 cursor-pointer riso-shadow-sm"
          >
            <span>{t.viewAllHoreca}</span>
            <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
          </button>
        </div>
      )}
    </section>
  );
};
