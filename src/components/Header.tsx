import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { ViewMode, Language } from '../types';
import { Menu, X, Compass, Globe, Clock, ChevronRight } from 'lucide-react';
import bientotSticker from '../assets/images/stickers/sticker_bientot.png';

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

  const navItems: { id: ViewMode; path: string; label: string; badge?: string }[] = [
    { id: 'home', path: '/', label: t.navHome },
    { id: 'horeca', path: '/horeca', label: t.navHoreca },
    { id: 'evenements', path: '/evenements', label: t.navEvents, badge: t.comingSoonBadge },
    { id: 'lifestyle', path: '/lifestyle', label: t.navLifestyle, badge: t.comingSoonBadge },
    { id: 'about', path: '/about', label: t.navAbout },
  ];

  const handleNavClick = (path: string) => {
    navigate(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const languages: { code: Language; label: string; flagLabel: string }[] = [
    { code: 'fr', label: 'FR', flagLabel: 'Français' },
    { code: 'ar', label: 'العربية', flagLabel: 'العربية' },
    { code: 'en', label: 'EN', flagLabel: 'English' }
  ];

  return (
    <header id="app-header" className="w-full bg-[#FBF1D8] border-b-2 border-[#141B33] sticky top-0 z-50 transition-colors">
      {/* Top Utility Bar: Live Rabat Time & Language Switcher */}
      <div className="border-b-2 border-[#141B33] bg-[#F6E6B8] text-[13px] tracking-wide text-[#4A3F2E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-medium text-[#141B33] tracking-widest text-xs uppercase flex items-center gap-1.5">
              <span className="inline-block w-2 h-2 rounded-full bg-[#FF4B12] animate-pulse"></span>
              {t.locationHeader}
            </span>
            <span className="hidden sm:inline-block text-[#9C8B5C]">•</span>
            <span className="hidden sm:flex items-center gap-1.5 font-normal text-xs text-[#4A3F2E]">
              <Clock className="w-3.5 h-3.5 text-[#7A6842]" />
              {currentTime}
            </span>
          </div>

          {/* Language Switcher */}
          <div className="flex items-center gap-1" id="language-switcher">
            <Globe className="w-3.5 h-3.5 text-[#7A6842] me-1" />
            <div className="flex items-center bg-[#E3CE93] p-0.5 rounded-full">
              {languages.map((lang) => {
                const isActive = language === lang.code;
                return (
                  <button
                    key={lang.code}
                    id={`lang-btn-${lang.code}`}
                    onClick={() => setLanguage(lang.code)}
                    className={`px-2.5 py-0.5 text-xs font-semibold rounded-full transition-all duration-150 cursor-pointer ${
                      isActive
                        ? 'bg-[#141B33] text-white riso-shadow-sm'
                        : 'text-[#4A3F2E] hover:text-[#141B33]'
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 sm:py-5">
        <div className="flex flex-col items-center text-center">
          {/* Logo - Refined mobile scale (30-40% smaller on mobile for optimal visual balance) */}
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            id="brand-logo-btn"
            className="group cursor-pointer focus:outline-hidden mb-1 sm:mb-2"
          >
            <div
              className="flex flex-col items-center px-4 py-2 sm:px-6 sm:py-3 rounded-full"
              style={{
                background: 'conic-gradient(from 220deg, #FF2D78, #FFD400, #FF4B12, #0B3D91, #FF2D78)',
                padding: '3px',
              }}
            >
              <div className="flex flex-col items-center bg-[#FBF1D8] rounded-full px-4 py-2 sm:px-6 sm:py-3">
                <span className="font-heading font-bold text-[22px] sm:text-4xl md:text-5xl tracking-tight text-[#141B33] group-hover:text-[#FF4B12] transition-colors duration-200">
                  {t.siteTitle}
                </span>
                <span className="text-[9.5px] sm:text-xs font-medium tracking-[0.2em] sm:tracking-[0.25em] text-[#7A6842] uppercase mt-0.5 sm:mt-1">
                  {t.tagline}
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 mt-5 pt-3 border-t-2 border-[#141B33] w-full justify-center">
            {navItems.map((item) => {
              const isActive = (item.id === 'home' && currentPath === '/') || (item.id !== 'home' && currentPath.startsWith(item.path));
              return (
                <Link
                  key={item.id}
                  to={item.path}
                  id={`nav-link-${item.id}`}
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className={`group relative text-sm tracking-wider uppercase font-semibold transition-all py-1 px-1 flex items-center gap-2 ${
                    isActive
                      ? 'text-[#FF4B12]'
                      : 'text-[#141B33] hover:text-[#FF4B12]'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <img
                      src={bientotSticker}
                      alt={item.badge}
                      className="h-6 w-auto -rotate-6 drop-shadow-sm"
                    />
                  )}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#FF4B12] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Main Bar: Visible Color Accent & Prominent Menu Toggle */}
          <div className="flex md:hidden w-full justify-between items-center mt-2.5 pt-2 border-t-2 border-[#141B33]">
            {/* Visible Active Accent Badge */}
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#FF4B12]/10 text-[#FF4B12] border border-[#FF4B12]/25 font-bold text-[11px] tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF4B12]" />
              <span>
                {navItems.find((i) => (i.id === 'home' && currentPath === '/') || (i.id !== 'home' && currentPath.startsWith(i.path)))?.label || t.siteTitle}
              </span>
            </div>

            {/* Prominent High-Contrast Hamburger Button */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#141B33] hover:bg-[#FF4B12] text-white rounded-none text-xs font-bold riso-shadow-sm active:scale-95 transition-all cursor-pointer"
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
        <div className="md:hidden border-t-2 border-[#FF4B12] bg-[#F6E6B8] px-4 py-4 space-y-2 riso-shadow transition-all animate-fadeIn">
          {navItems.map((item) => {
            const isActive = (item.id === 'home' && currentPath === '/') || (item.id !== 'home' && currentPath.startsWith(item.path));
            return (
              <button
                key={item.id}
                id={`mobile-nav-link-${item.id}`}
                onClick={() => handleNavClick(item.path)}
                className={`w-full flex items-center justify-between px-3.5 py-3 rounded-none text-sm font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#141B33] text-white border-s-4 border-[#FF4B12] riso-shadow-sm'
                    : 'text-[#141B33] hover:bg-[#E3CE93] bg-white/60 border-2 border-[#141B33]'
                }`}
              >
                <div className="flex items-center gap-2">
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#FF4B12]" />}
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
    </header>
  );
};
