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
    <footer id="app-footer" className="w-full bg-[#182338] text-[#FAF8F5] pt-12 pb-10 sm:pt-14 sm:pb-12 border-t-4 border-[#D95D39]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Newsletter Card */}
        <div className="bg-[#202E48] rounded-2xl p-8 sm:p-12 mb-16 border border-[#2E3C56]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6">
              <div className="flex items-center gap-2 text-[#D95D39] text-xs uppercase font-bold tracking-widest mb-2">
                <Mail className="w-4 h-4" />
                <span>LA GAZETTE HEBDOMADAIRE</span>
              </div>
              <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white mb-3 leading-tight">
                {t.newsletterTitle}
              </h3>
              <p className="text-sm text-[#9CAAC2] leading-relaxed font-normal">
                {t.newsletterSubtitle}
              </p>
            </div>

            <div className="lg:col-span-6">
              {subscribed ? (
                <div className="flex items-center gap-3 bg-[#234238] border border-[#3E6B5C] p-4 rounded-xl text-sm font-semibold text-white">
                  <CheckCircle2 className="w-5 h-5 text-[#86EFAC] flex-shrink-0" />
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
                    className="flex-grow px-4 py-3.5 bg-[#141C2D] border border-[#2E3C56] rounded-lg text-sm text-white placeholder-[#6C7E9C] focus:outline-hidden focus:border-[#D95D39]"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3.5 bg-[#D95D39] hover:bg-[#C04B28] text-white font-bold text-sm rounded-lg transition-colors cursor-pointer flex-shrink-0 shadow-md flex items-center justify-center gap-2"
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
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#2E3C56]">
          
          {/* Brand & Manifesto (6 cols) */}
          <div className="md:col-span-6 space-y-4">
            <h4 className="font-heading font-bold text-3xl text-white tracking-tight">
              {t.siteTitle}
            </h4>
            <p className="text-xs uppercase tracking-[0.2em] text-[#D95D39] font-semibold">
              {t.tagline}
            </p>
            <p className="text-sm text-[#9CAAC2] leading-relaxed max-w-md font-normal">
              {t.footerManifesto}
            </p>
          </div>

          {/* Rubriques (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-white">
              RUBRIQUES
            </p>
            <ul className="space-y-2 text-sm text-[#9CAAC2]">
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
                <span className="text-[10px] px-2 py-0.5 rounded bg-[#2E3C56] text-[#C4D4BF]">
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
                <span className="text-[10px] px-2 py-0.5 rounded bg-[#2E3C56] text-[#C4D4BF]">
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
            <div className="flex flex-col gap-2 text-sm text-[#9CAAC2]">
              <button
                onClick={() => setLanguage('fr')}
                className={`text-start flex items-center justify-between py-1 hover:text-white transition-colors ${
                  language === 'fr' ? 'text-[#D95D39] font-bold' : ''
                }`}
              >
                <span>Français (Édition principale)</span>
                {language === 'fr' && <span className="text-xs">●</span>}
              </button>
              <button
                onClick={() => setLanguage('ar')}
                className={`text-start flex items-center justify-between py-1 hover:text-white transition-colors ${
                  language === 'ar' ? 'text-[#D95D39] font-bold' : ''
                }`}
              >
                <span>العربية (النسخة العربية)</span>
                {language === 'ar' && <span className="text-xs">●</span>}
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`text-start flex items-center justify-between py-1 hover:text-white transition-colors ${
                  language === 'en' ? 'text-[#D95D39] font-bold' : ''
                }`}
              >
                <span>English (International)</span>
                {language === 'en' && <span className="text-xs">●</span>}
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Amplify Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7B8B9E]">
          <div>
            © {new Date().getFullYear()} {t.siteTitle}. {t.rightsReserved}
          </div>
          <div className="font-semibold text-[#D95D39] hover:text-white transition-colors">
            {t.poweredBy}
          </div>
        </div>

      </div>
    </footer>
  );
};
