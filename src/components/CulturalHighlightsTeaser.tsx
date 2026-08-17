import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ViewMode } from '../types';
import { Sparkles, Calendar, ArrowRight, Layers } from 'lucide-react';
import { UPCOMING_SECTIONS } from '../data/articles';
import { ScrollReveal } from './ScrollReveal';

interface CulturalHighlightsTeaserProps {
  onNavigate: (view: ViewMode) => void;
}

export const CulturalHighlightsTeaser: React.FC<CulturalHighlightsTeaserProps> = ({ onNavigate }) => {
  const { getLocalized, isRtl, t } = useLanguage();

  const eventTeaser = UPCOMING_SECTIONS.evenements.curatedTeasers[0];
  const lifestyleTeaser = UPCOMING_SECTIONS.lifestyle.curatedTeasers[0];

  return (
    <section id="cultural-teasers-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <ScrollReveal direction="up" distance={16}>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 pb-4 border-b border-[#E5DFD5]">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Layers className="w-4 h-4 text-[#D95D39]" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#D95D39]">
                PROCHAINEMENT DANS ICI RABAT
              </span>
            </div>
            <h2 className="font-heading font-bold text-2xl sm:text-4xl text-[#182338]">
              Culture & Art de Vivre
            </h2>
          </div>
          <p className="text-xs sm:text-base text-[#6F645A] max-w-md mt-2 md:mt-0 font-normal">
            Un avant-goût des dossiers et rendez-vous culturels en cours d'élaboration par notre rédaction.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {/* Event Teaser Card */}
        <ScrollReveal direction="up" distance={20} delay={0.05}>
          <div
            onClick={() => onNavigate('evenements')}
            className="bg-white border border-[#E8E1D7] rounded-xl overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 cursor-pointer group flex flex-col justify-between h-full"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-[#182338]">
              <img
                src={eventTeaser.image}
                alt={getLocalized(eventTeaser.title)}
                className="w-full h-full object-cover editorial-photo group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 editorial-overlay z-10" />
              <div className="absolute top-3 right-3 z-20 bg-[#182338]/90 text-white text-[11px] font-semibold px-2.5 py-1 rounded-md border border-white/10">
                {t.navEvents} • {t.comingSoonBadge}
              </div>
            </div>
            <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between">
              <div>
                <span className="text-xs font-bold text-[#D95D39] uppercase tracking-wider block mb-2">
                  {getLocalized(eventTeaser.date)}
                </span>
                <h3 className="font-heading font-bold text-lg sm:text-xl text-[#182338] group-hover:text-[#D95D39] transition-colors leading-snug">
                  {getLocalized(eventTeaser.title)}
                </h3>
              </div>
              <div className="mt-5 sm:mt-6 pt-3 border-t border-[#F0EAE1] flex items-center justify-between text-xs font-semibold text-[#182338] group-hover:text-[#D95D39]">
                <span>Explorer la rubrique</span>
                <ArrowRight className={`w-3.5 h-3.5 ${isRtl ? 'rotate-180' : ''}`} />
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Lifestyle Teaser Card */}
        <ScrollReveal direction="up" distance={20} delay={0.12}>
          <div
            onClick={() => onNavigate('lifestyle')}
            className="bg-white border border-[#E8E1D7] rounded-xl overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 cursor-pointer group flex flex-col justify-between h-full"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-[#182338]">
              <img
                src={lifestyleTeaser.image}
                alt={getLocalized(lifestyleTeaser.title)}
                className="w-full h-full object-cover editorial-photo group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 editorial-overlay z-10" />
              <div className="absolute top-3 right-3 z-20 bg-[#182338]/90 text-white text-[11px] font-semibold px-2.5 py-1 rounded-md border border-white/10">
                {t.navLifestyle} • {t.comingSoonBadge}
              </div>
            </div>
            <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between">
              <div>
                <span className="text-xs font-bold text-[#D95D39] uppercase tracking-wider block mb-2">
                  {getLocalized(lifestyleTeaser.date)}
                </span>
                <h3 className="font-heading font-bold text-lg sm:text-xl text-[#182338] group-hover:text-[#D95D39] transition-colors leading-snug">
                  {getLocalized(lifestyleTeaser.title)}
                </h3>
              </div>
              <div className="mt-5 sm:mt-6 pt-3 border-t border-[#F0EAE1] flex items-center justify-between text-xs font-semibold text-[#182338] group-hover:text-[#D95D39]">
                <span>Explorer la rubrique</span>
                <ArrowRight className={`w-3.5 h-3.5 ${isRtl ? 'rotate-180' : ''}`} />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
