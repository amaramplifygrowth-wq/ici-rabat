import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { LocalizedString } from '../types';

export interface EditorialPhotoCollageProps {
  /**
   * Primary image URL (e.g. article hero image)
   */
  mainImage: string;
  mainAlt?: string;
  /**
   * Overlapping secondary image URL (e.g. from galleryImages or secondary shot)
   */
  overlayImage?: string;
  overlayAlt?: string;
  /**
   * Optional tertiary image or fallback accent
   */
  tertiaryImage?: string;
  tertiaryAlt?: string;
  /**
   * Clean editorial caption below the collage
   */
  caption?: string | LocalizedString;
  className?: string;
  onClick?: () => void;
}

export const EditorialPhotoCollage: React.FC<EditorialPhotoCollageProps> = ({
  mainImage,
  mainAlt = 'Photo principale',
  overlayImage,
  overlayAlt = 'Détail et ambiance',
  tertiaryImage,
  tertiaryAlt = 'Ambiance',
  caption,
  className = '',
  onClick,
}) => {
  const { getLocalized, isRtl } = useLanguage();

  const captionText = caption
    ? typeof caption === 'string'
      ? caption
      : getLocalized(caption)
    : null;

  return (
    <div
      id="editorial-photo-collage"
      className={`relative w-full max-w-lg mx-auto lg:max-w-none pt-2 pb-8 ${className}`}
      onClick={onClick}
    >
      {/* Collage Container with Standardized Geometry & Padding for overlap */}
      <div className={`relative ${isRtl ? 'pl-8 sm:pl-10' : 'pr-8 sm:pr-10'}`}>
        {/* 1. Main Primary Photo (Fixed 4:3 Aspect Ratio) */}
        <div className="relative z-10 w-[84%] sm:w-[82%] rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-[#EAE2D8] aspect-[4/3]">
          <img
            src={mainImage}
            alt={mainAlt}
            className="w-full h-full object-cover editorial-photo hover:scale-105 transition-transform duration-700 ease-out"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 editorial-overlay z-10" />
        </div>

        {/* 2. Secondary Overlapping Photo (Fixed 1:1 Aspect Ratio, Fixed Bottom-Right Offset, Fixed White Border) */}
        {overlayImage && (
          <div
            className={`absolute -bottom-6 sm:-bottom-8 ${
              isRtl ? 'left-0 sm:left-2' : 'right-0 sm:right-2'
            } z-20 w-[46%] sm:w-[44%] rounded-xl overflow-hidden shadow-2xl border-4 border-white bg-[#EAE2D8] aspect-[1/1] transform hover:-translate-y-1 transition-transform duration-300`}
          >
            <img
              src={overlayImage}
              alt={overlayAlt}
              className="w-full h-full object-cover editorial-photo hover:scale-105 transition-transform duration-700 ease-out"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 editorial-overlay z-10" />
          </div>
        )}

        {/* 3. Optional Tertiary Accent Photo (Fixed Aspect Ratio, Offset Upper-Right) */}
        {tertiaryImage && (
          <div
            className={`absolute -top-3 ${
              isRtl ? '-left-2 sm:left-0' : '-right-2 sm:right-0'
            } z-15 w-[36%] sm:w-[34%] rounded-xl overflow-hidden shadow-lg border-4 border-white bg-[#EAE2D8] aspect-[4/3] hidden sm:block`}
          >
            <img
              src={tertiaryImage}
              alt={tertiaryAlt}
              className="w-full h-full object-cover editorial-photo hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 editorial-overlay z-10" />
          </div>
        )}

        {/* Decorative Framing Geometry */}
        <div
          className={`absolute -top-3 ${
            isRtl ? '-right-3' : '-left-3'
          } w-24 h-24 border-2 border-[#D95D39]/30 rounded-2xl -z-10`}
        />
        <div
          className={`absolute -bottom-3 ${
            isRtl ? 'right-10' : 'left-10'
          } w-32 h-32 bg-[#EBE4DA] rounded-2xl -z-10`}
        />
      </div>

      {/* Clean Sub-caption below the collage (Never overlaid over photos) */}
      {captionText && (
        <p className="text-[12px] text-[#8E7E73] italic text-center lg:text-start mt-8 sm:mt-10 px-1">
          {captionText}
        </p>
      )}
    </div>
  );
};
