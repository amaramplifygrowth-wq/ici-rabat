import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Compass, ArrowRight, Utensils } from 'lucide-react';

interface WayfindingBannerProps {
  onExploreHoreca: () => void;
}

export const WayfindingBanner: React.FC<WayfindingBannerProps> = ({ onExploreHoreca }) => {
  const { t, isRtl } = useLanguage();

  return (
    <section
      id="wayfinding-separator"
      className="w-full bg-[#234238] text-[#FAF8F5] my-12 py-12 sm:py-16 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          
          {/* Wayfinding Narrative Block */}
          <div className="max-w-2xl">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D95D39]" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#D3DECE]">
                DOSSIER SPÉCIAL • ICI RABAT
              </span>
            </div>

            <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl leading-tight mb-4 text-white">
              {t.wayfindingHighlightTitle}
            </h2>

            <p className="text-[#C4D4BF] text-base leading-relaxed font-normal">
              {t.wayfindingHighlightDesc}
            </p>
          </div>

          {/* Action Trigger */}
          <div className="flex-shrink-0">
            <button
              id="wayfinding-explore-btn"
              onClick={onExploreHoreca}
              className="inline-flex items-center gap-3 px-7 py-4 bg-[#FAF8F5] text-[#234238] hover:bg-[#D95D39] hover:text-white font-bold text-sm rounded-lg shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer group"
            >
              <Utensils className="w-4 h-4 text-[#D95D39] group-hover:text-white transition-colors" />
              <span>{t.wayfindingCta}</span>
              <ArrowRight
                className={`w-4 h-4 transform group-hover:translate-x-1 transition-transform ${
                  isRtl ? 'rotate-180 group-hover:-translate-x-1' : ''
                }`}
              />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
