import React from 'react';
import { Quote } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { LocalizedString } from '../types';

interface PullQuoteProps {
  quote: string | LocalizedString;
  author?: string | LocalizedString;
  roleOrContext?: string | LocalizedString;
  variant?: 'centered' | 'bordered';
  className?: string;
}

export const PullQuote: React.FC<PullQuoteProps> = ({
  quote,
  author,
  roleOrContext,
  variant = 'centered',
  className = '',
}) => {
  const { getLocalized, isRtl } = useLanguage();

  const quoteText = typeof quote === 'string' ? quote : getLocalized(quote);
  const authorText = author ? (typeof author === 'string' ? author : getLocalized(author)) : null;
  const roleText = roleOrContext ? (typeof roleOrContext === 'string' ? roleOrContext : getLocalized(roleOrContext)) : null;

  return (
    <figure
      id="editorial-pull-quote"
      className={`my-12 sm:my-14 py-8 sm:py-10 px-4 sm:px-8 md:px-12 relative overflow-hidden transition-all ${className}`}
    >
      {/* Top Decorative Terracotta Accent with Subtle Divider Lines */}
      <div className="flex items-center justify-center gap-4 mb-6">
        <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-[#D95D39]/40" />
        <div className="w-10 h-10 rounded-full bg-[#FAF0EB] border border-[#F4DDD2] flex items-center justify-center text-[#D95D39] shadow-xs">
          <Quote className={`w-5 h-5 ${isRtl ? 'scale-x-[-1]' : ''}`} />
        </div>
        <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-[#D95D39]/40" />
      </div>

      {/* Main Large Italic Fraunces Quote Body */}
      <blockquote className="text-center">
        <p className="font-heading italic text-2xl sm:text-3xl md:text-[32px] text-[#182338] leading-[1.38] sm:leading-[1.42] tracking-tight max-w-3xl mx-auto font-normal">
          {quoteText}
        </p>
      </blockquote>

      {/* Attribution Details */}
      {(authorText || roleText) && (
        <figcaption className="mt-6 text-center">
          {authorText && (
            <cite className="font-sans font-bold text-xs sm:text-sm uppercase tracking-[0.18em] text-[#D95D39] not-italic block">
              — {authorText}
            </cite>
          )}
          {roleText && (
            <span className="text-xs text-[#7A6E63] font-medium tracking-normal mt-1 block">
              {roleText}
            </span>
          )}
        </figcaption>
      )}

      {/* Subtle Bottom Divider Accent */}
      <div className="mt-8 flex justify-center">
        <div className="h-[1.5px] w-16 bg-[#D95D39]/30 rounded-full" />
      </div>
    </figure>
  );
};
