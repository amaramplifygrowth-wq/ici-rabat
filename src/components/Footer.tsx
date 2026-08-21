import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { ViewMode } from '../types';
import { Mail, CheckCircle2, ArrowRight, Globe } from 'lucide-react';

interface FooterProps {
  onNavigate?: (view: ViewMode) => void;
}

export const Footer: React.FC<FooterProps> = () => {
  const { t, language, setLanguage, isRtl } = useLanguage();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
    }
  };

  return (
    <footer id="app-footer" className="w-full bg-[#141B33] text-[#FBF1D8] pt-12 pb-10 sm:pt-14 sm:pb-12 border-t-4 border-[#FF4B12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Newsletter Card */}
        <div className="bg-[#1B2540] rounded-none p-8 sm:p-12 mb-16 border border-[#FF2D78]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6">
              <div className="flex items-center gap-2 text-[#FF4B12] text-xs uppercase font-bold tracking-widest mb-2">
                <Mail className="w-4 h-4" />
                <span>LA GAZETTE HEBDOMADAIRE</span>
              </div>
              <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white mb-3 leading-tight">
                {t.newsletterTitle}
              </h3>
              <p className="text-sm text-[#D9C9A0] leading-relaxed font-normal">
                {t.newsletterSubtitle}
              </p>
            </div>

            <div className="lg:col-span-6">
              {subscribed ? (
                <div className="flex items-center gap-3 bg-[#0B3D91] border border-[#2E6FD9] p-4 rounded-none text-sm font-semibold text-white">
                  <CheckCircle2 className="w-5 h-5 text-[#6FD3FF] flex-shrink-0" />
                  <span>{t.newsletterSuccess}</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    required
                    placeholder={t.newsletterPlaceholder}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-grow px-4 py-3.5 bg-[#0B0F1F] border border-[#FF2D78] rounded-none text-sm text-white placeholder-[#A08F68] focus:outline-hidden focus:border-[#FF4B12]"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3.5 bg-[#FF4B12] hover:bg-[#CC2E00] text-white font-bold text-sm rounded-none transition-colors cursor-pointer flex-shrink-0 riso-shadow flex items-center justify-center gap-2"
                  >
                    <span>{t.newsletterButton}</span>
                    <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>

        {/* Main Footer Links & Manifesto */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#FF2D78]">
          
          {/* Brand & Manifesto (6 cols) */}
          <div className="md:col-span-6 space-y-4">
            <h4 className="font-heading font-bold text-3xl text-white tracking-tight">
              {t.siteTitle}
            </h4>
            <p className="text-xs uppercase tracking-[0.2em] text-[#FF4B12] font-semibold">
              {t.tagline}
            </p>
            <p className="text-sm text-[#D9C9A0] leading-relaxed max-w-md font-normal">
              {t.footerManifesto}
            </p>
          </div>

          {/* Rubriques (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-white">
              RUBRIQUES
            </p>
            <ul className="space-y-2 text-sm text-[#D9C9A0]">
              <li>
                <Link
                  to="/"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="hover:text-white transition-colors"
                >
                  {t.navHome}
                </Link>
              </li>
              <li>
                <Link
                  to="/horeca"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="hover:text-white transition-colors"
                >
                  {t.navHoreca}
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Link
                  to="/evenements"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="hover:text-white transition-colors"
                >
                  {t.navEvents}
                </Link>
                <span className="text-[10px] px-2 py-0.5 rounded bg-[#FF2D78] text-[#8FCBFF]">
                  {t.comingSoonBadge}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Link
                  to="/lifestyle"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="hover:text-white transition-colors"
                >
                  {t.navLifestyle}
                </Link>
                <span className="text-[10px] px-2 py-0.5 rounded bg-[#FF2D78] text-[#8FCBFF]">
                  {t.comingSoonBadge}
                </span>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="hover:text-white transition-colors"
                >
                  {t.navAbout}
                </Link>
              </li>
            </ul>
          </div>

          {/* Languages & City Information (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-white">
              ÉDITIONS LINGUISTIQUES
            </p>
            <div className="flex flex-col gap-2 text-sm text-[#D9C9A0]">
              <button
                onClick={() => setLanguage('fr')}
                className={`text-start flex items-center justify-between py-1 hover:text-white transition-colors ${
                  language === 'fr' ? 'text-[#FF4B12] font-bold' : ''
                }`}
              >
                <span>Français (Édition principale)</span>
                {language === 'fr' && <span className="text-xs">●</span>}
              </button>
              <button
                onClick={() => setLanguage('ar')}
                className={`text-start flex items-center justify-between py-1 hover:text-white transition-colors ${
                  language === 'ar' ? 'text-[#FF4B12] font-bold' : ''
                }`}
              >
                <span>العربية (النسخة العربية)</span>
                {language === 'ar' && <span className="text-xs">●</span>}
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`text-start flex items-center justify-between py-1 hover:text-white transition-colors ${
                  language === 'en' ? 'text-[#FF4B12] font-bold' : ''
                }`}
              >
                <span>English (International)</span>
                {language === 'en' && <span className="text-xs">●</span>}
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Amplify Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#B7A87E]">
          <div>
            © {new Date().getFullYear()} {t.siteTitle}. {t.rightsReserved}
          </div>
          <div className="font-semibold text-[#FF4B12] hover:text-white transition-colors">
            {t.poweredBy}
          </div>
        </div>

      </div>
    </footer>
  );
};
