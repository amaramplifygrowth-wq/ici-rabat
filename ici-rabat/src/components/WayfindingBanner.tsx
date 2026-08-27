import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Compass, ArrowRight, Utensils } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import dossierSticker from '../assets/images/stickers/sticker_dossier.webp';

interface WayfindingBannerProps {
  onExploreHoreca: () => void;
}

export const WayfindingBanner: React.FC<WayfindingBannerProps> = ({ onExploreHoreca }) => {
  const { t, isRtl } = useLanguage();

  return (
    <section
      id="wayfinding-separator"
      className="w-full bg-[#0B3D91] text-[#FBF1D8] my-10 sm:my-12 py-10 sm:py-16 relative overflow-hidden border-y-4 border-[#141B33]"
    >
      {/* Halftone dot decoration, comic-panel style corner accents */}
      <div className="absolute -top-6 -right-6 w-40 h-40 sm:w-56 sm:h-56 text-[#FFD400] halftone-dots-lg pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-40 h-40 sm:w-56 sm:h-56 text-[#FF2D78] halftone-dots-lg pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <ScrollReveal direction="up" distance={20}>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 sm:gap-8">

            {/* Wayfinding Narrative Block */}
            <div className="max-w-2xl">
              <div className="flex items-center gap-2.5 mb-3 sm:mb-4">
                <img
                  src={dossierSticker}
                  alt="Dossier spécial — Ici Rabat"
                  className="h-14 sm:h-16 w-auto -rotate-2 drop-shadow-lg"
                />
              </div>

              <h2 className="font-heading font-bold text-xl sm:text-3xl md:text-4xl leading-tight mb-3 sm:mb-4 text-white">
                {t.wayfindingHighlightTitle}
              </h2>

              <p className="text-[#8FCBFF] text-xs sm:text-base leading-relaxed font-normal">
                {t.wayfindingHighlightDesc}
              </p>
            </div>

            {/* Action Trigger */}
            <div className="flex-shrink-0">
              <button
                id="wayfinding-explore-btn"
                onClick={onExploreHoreca}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 sm:px-7 sm:py-4 bg-[#FBF1D8] text-[#0B3D91] hover:bg-[#FF4B12] hover:text-white font-bold text-xs sm:text-sm rounded-none riso-shadow hover:riso-shadow-magenta transition-all duration-200 cursor-pointer group"
              >
                <Utensils className="w-4 h-4 text-[#FF4B12] group-hover:text-white transition-colors" />
                <span>{t.wayfindingCta}</span>
                <ArrowRight
                  className={`w-4 h-4 transform group-hover:translate-x-1 transition-transform ${
                    isRtl ? 'rotate-180 group-hover:-translate-x-1' : ''
                  }`}
                />
              </button>
            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
