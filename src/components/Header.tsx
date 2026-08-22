import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { ViewMode, Language } from '../types';
import { Menu, X, Compass, Globe, Clock, ChevronRight, ShoppingBag } from 'lucide-react';
import bientotSticker from '../assets/images/stickers/sticker_bientot.webp';
import illustratedLogo from '../assets/images/stickers/logo_illustrated.webp';

interface HeaderProps {
  currentView?: ViewMode;
  onNavigate?: (view: ViewMode) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentView: propCurrentView }) => {
  const { language, setLanguage, isRtl, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState<string>('');
  const location = useLocation();
  const navigate = useNavigate();

  // Determine current active view from location pathname
  const currentPath = location.pathname;
  let activeView: ViewMode = 'home';
  if (currentPath === '/horeca' || currentPath.startsWith('/horeca/')) {
    activeView = currentPath === '/horeca' ? 'horeca' : 'article';
  } else if (currentPath === '/commander') {
    activeView = 'commander';
  } else if (currentPath === '/evenements') {
    activeView = 'evenements';
  } else if (currentPath === '/lifestyle') {
    activeView = 'lifestyle';
  } else if (currentPath === '/about') {
    activeView = 'about';
  }

  const currentView = propCurrentView || activeView;

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Rabat is in UTC+1 (WEST / CET equivalent timezone)
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Africa/Casablanca',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      };
      const dateOptions: Intl.DateTimeFormatOptions = {
        timeZone: 'Africa/Casablanca',
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      };

      const timeStr = new Intl.DateTimeFormat(language === 'ar' ? 'ar-MA' : language === 'fr' ? 'fr-FR' : 'en-GB', options).format(now);
      const dateStr = new Intl.DateTimeFormat(language === 'ar' ? 'ar-MA' : language === 'fr' ? 'fr-FR' : 'en-GB', dateOptions).format(now);

      setCurrentTime(`${dateStr} • ${timeStr} GMT+1`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000 * 60);
    return () => clearInterval(interval);
  }, [language]);

  const navItems: { id: ViewMode; path: string; label: string; badge?: string; accent?: boolean }[] = [
    { id: 'home', path: '/', label: t.navHome },
    { id: 'horeca', path: '/horeca', label: t.navHoreca },
    { id: 'commander', path: '/commander', label: t.navOrder, accent: true },
    { id: 'evenements', path: '/evenements', label: t.navEvents, badge: t.comingSoonBadge },
    { id: 'lifestyle', path: '/lifestyle', label: t.navLifestyle },
    { id: 'about', path: '/about', label: t.navAbout },
  ];

  const handleNavClick = (path: string) => {
    navigate(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const languages: { code: Language; label: string; flagLabel: string }[] = [
    { code: 'fr', label: 'FR', flagLabel: 'Français' },
    { code: 'ar', label: 'ع', flagLabel: 'العربية' },
    { code: 'en', label: 'EN', flagLabel: 'English' }
  ];

  return (
    <header id="app-header" className="w-full sticky top-0 z-50 transition-colors">
      <div className="bg-[#141B33] relative overflow-hidden">
        {/* Halftone texture wash so the header reads as part of the same
            riso-print system as the hero/banners below it, not a plain bar */}
        <div className="absolute inset-0 text-[#FF2D78] halftone-dots pointer-events-none opacity-20" />

        {/* Top Utility Bar: Live Rabat Time & Language Switcher */}
        <div className="relative border-b border-[#FF2D78]/40 text-[13px] tracking-wide text-[#D9C9A0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="font-medium text-white tracking-widest text-xs uppercase flex items-center gap-1.5">
                <span className="inline-block w-2 h-2 rounded-full bg-[#FF4B12] animate-pulse"></span>
                {t.locationHeader}
              </span>
              <span className="hidden sm:inline-block text-[#FF2D78]">•</span>
              <span className="hidden sm:flex items-center gap-1.5 font-normal text-xs text-[#D9C9A0]">
                <Clock className="w-3.5 h-3.5 text-[#FFD400]" />
                {currentTime}
              </span>
            </div>

            {/* Language Switcher — stamped comic buttons, not soft pills */}
            <div className="flex items-center gap-1.5" id="language-switcher">
              <Globe className="w-3.5 h-3.5 text-[#D9C9A0] me-1 hidden sm:block" />
              <div className="flex items-center gap-1">
                {languages.map((lang) => {
                  const isActive = language === lang.code;
                  return (
                    <button
                      key={lang.code}
                      id={`lang-btn-${lang.code}`}
                      onClick={() => setLanguage(lang.code)}
                      className={`px-2.5 py-1 text-xs font-bold rounded-none border-2 transition-all duration-150 cursor-pointer ${
                        isActive
                          ? 'bg-[#FFD400] text-[#141B33] border-[#141B33] riso-shadow-sm'
                          : 'bg-transparent text-[#D9C9A0] border-[#D9C9A0]/40 hover:border-[#FFD400] hover:text-[#FFD400]'
                      }`}
                      title={lang.flagLabel}
                    >
                      {lang.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Main Branding & Navigation Area */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col items-center text-center">
            {/* Logo — the full illustrated brand mark, not just a text wordmark */}
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              id="brand-logo-btn"
              className="group cursor-pointer focus:outline-hidden mb-2 flex items-center gap-3 sm:gap-4"
            >
              <img
                src={illustratedLogo}
                alt="Ici Rabat"
                className="w-14 h-14 sm:w-20 sm:h-20 rounded-full riso-shadow-orange group-hover:rotate-6 transition-transform duration-300 flex-shrink-0"
              />
              <div className="flex flex-col items-start">
                <span className="font-heading font-bold text-2xl sm:text-4xl md:text-5xl tracking-tight text-white group-hover:text-[#FFD400] transition-colors duration-200 leading-none">
                  {t.siteTitle}
                </span>
                <span className="text-[9.5px] sm:text-xs font-medium tracking-[0.2em] sm:tracking-[0.25em] text-[#FF9A6B] uppercase mt-1">
                  {t.tagline}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links — comic tabs, not underlined text */}
            <nav className="hidden md:flex items-center gap-3 mt-5 w-full justify-center flex-wrap">
              {navItems.map((item) => {
                const isActive = (item.id === 'home' && currentPath === '/') || (item.id !== 'home' && currentPath.startsWith(item.path));
                return (
                  <Link
                    key={item.id}
                    to={item.path}
                    id={`nav-link-${item.id}`}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className={`group relative text-sm tracking-wider uppercase font-bold transition-all px-4 py-2 flex items-center gap-2 border-2 ${
                      isActive
                        ? 'bg-[#FF4B12] text-white border-[#141B33] riso-shadow-sm'
                        : item.accent
                        ? 'bg-[#FFD400] text-[#141B33] border-[#141B33] riso-shadow-sm hover:bg-[#FF4B12] hover:text-white'
                        : 'bg-[#FBF1D8]/5 text-[#FBF1D8] border-[#FBF1D8]/25 hover:bg-[#FBF1D8] hover:text-[#141B33] hover:border-[#141B33]'
                    }`}
                  >
                    {item.accent && <ShoppingBag className="w-4 h-4" />}
                    <span>{item.label}</span>
                    {item.badge && (
                      <img
                        src={bientotSticker}
                        alt={item.badge}
                        className="h-6 w-auto -rotate-6 drop-shadow-sm"
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Main Bar: Visible Color Accent & Prominent Menu Toggle */}
            <div className="flex md:hidden w-full justify-between items-center mt-4">
              {/* Visible Active Accent Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#FF4B12] text-white border-2 border-[#141B33] font-bold text-[11px] tracking-wider uppercase riso-shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                <span>
                  {navItems.find((i) => (i.id === 'home' && currentPath === '/') || (i.id !== 'home' && currentPath.startsWith(i.path)))?.label || t.siteTitle}
                </span>
              </div>

              {/* Prominent High-Contrast Hamburger Button */}
              <button
                id="mobile-menu-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#FFD400] hover:bg-[#FF4B12] hover:text-white text-[#141B33] border-2 border-[#141B33] text-xs font-bold riso-shadow-sm active:scale-95 transition-all cursor-pointer"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? (
                  <>
                    <X className="w-4 h-4" />
                    <span>FERMER</span>
                  </>
                ) : (
                  <>
                    <Menu className="w-4 h-4" />
                    <span>MENU</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu with Rich Accent Lines */}
        {mobileMenuOpen && (
          <div className="relative md:hidden border-t-2 border-[#FFD400] bg-[#1B2540] px-4 py-4 space-y-2 riso-shadow transition-all animate-fadeIn">
            {navItems.map((item) => {
              const isActive = (item.id === 'home' && currentPath === '/') || (item.id !== 'home' && currentPath.startsWith(item.path));
              return (
                <button
                  key={item.id}
                  id={`mobile-nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.path)}
                  className={`w-full flex items-center justify-between px-3.5 py-3 rounded-none text-sm font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#FF4B12] text-white border-s-4 border-[#FFD400] riso-shadow-sm'
                      : item.accent
                      ? 'bg-[#FFD400] text-[#141B33] border-2 border-[#141B33] riso-shadow-sm'
                      : 'text-[#FBF1D8] hover:bg-[#FBF1D8]/10 bg-transparent border-2 border-[#FBF1D8]/25'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {isActive && <span className="w-2 h-2 rounded-full bg-[#FFD400]" />}
                    {item.accent && !isActive && <ShoppingBag className="w-4 h-4" />}
                    <span>{item.label}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {item.badge && (
                      <img
                        src={bientotSticker}
                        alt={item.badge}
                        className="h-5 w-auto -rotate-6"
                      />
                    )}
                    <ChevronRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Torn-paper transition into the cream page below */}
      <div className="zigzag-edge-bottom" />
    </header>
  );
};
