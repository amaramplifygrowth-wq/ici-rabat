import React from 'react';
import { ArrowDown } from 'lucide-react';
import heroPoster from '../assets/images/hero_poster.jpg';
import badge100Rabat from '../assets/images/stickers/sticker_100rabat.webp';

interface PosterHeroProps {
  onExplore?: () => void;
}

export const PosterHero: React.FC<PosterHeroProps> = ({ onExplore }) => {
  return (
    <section
      id="poster-hero"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 pb-4 sm:pb-6"
    >
      <div className="relative">
        {/* Comic-panel framed cover illustration */}
        <div className="comic-border-lg riso-shadow-orange overflow-hidden rounded-none bg-[#141B33]">
          <img
            src={heroPoster}
            alt="Ici Rabat Magazine — La ville. Ses gens. Nos histoires."
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Decorative halftone corner accents, echoing the illustration's own dot-screen */}
        <div className="hidden sm:block absolute -top-4 -right-4 w-20 h-20 text-[#FF2D78] halftone-dots-lg pointer-events-none -z-10" />
        <div className="hidden sm:block absolute -bottom-4 -left-4 w-20 h-20 text-[#0B3D91] halftone-dots-lg pointer-events-none -z-10" />

        {/* Seal badge, stamped onto the frame corner */}
        <img
          src={badge100Rabat}
          alt="100% Rabat"
          className="absolute -top-6 -right-4 sm:-top-8 sm:-right-8 w-20 sm:w-28 h-auto rotate-12 drop-shadow-xl"
        />

        {/* Scroll cue */}
        {onExplore && (
          <button
            onClick={onExplore}
            className="pop-caption absolute left-1/2 -bottom-5 -translate-x-1/2 inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-normal cursor-pointer hover:-translate-y-0.5 hover:translate-x-[-50%] transition-transform"
          >
            <span>Découvrir le magazine</span>
            <ArrowDown className="w-4 h-4" />
          </button>
        )}
      </div>
    </section>
  );
};
