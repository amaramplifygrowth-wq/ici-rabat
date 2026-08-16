import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { ViewMode, Language } from '../types';
import { Menu, X, Compass, Globe, Clock, ChevronRight } from 'lucide-react';

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
    <header id="app-header" className="w-full bg-[#FAF8F5] border-b border-[#E5DFD5] sticky top-0 z-50 transition-colors">
      {/* Top Utility Bar: Live Rabat Time & Language Switcher */}
      <div className="border-b border-[#EBE5DB] bg-[#F4EFEA] text-[13px] tracking-wide text-[#55657E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-medium text-[#182338] tracking-widest text-xs uppercase flex items-center gap-1.5">
              <span className="inline-block w-2 h-2 rounded-full bg-[#D95D39] animate-pulse"></span>
              {t.locationHeader}
            </span>
            <span className="hidden sm:inline-block text-[#B0A79C]">•</span>
            <span className="hidden sm:flex items-center gap-1.5 font-normal text-xs text-[#55657E]">
              <Clock className="w-3.5 h-3.5 text-[#8E7E73]" />
              {currentTime}
            </span>
          </div>

          {/* Language Switcher */}
          <div className="flex items-center gap-1" id="language-switcher">
            <Globe className="w-3.5 h-3.5 text-[#8E7E73] me-1" />
            <div className="flex items-center bg-[#EAE2D8] p-0.5 rounded-full">
              {languages.map((lang) => {
                const isActive = language === lang.code;
                return (
                  <button
                    key={lang.code}
                    id={`lang-btn-${lang.code}`}
                    onClick={() => setLanguage(lang.code)}
                    className={`px-2.5 py-0.5 text-xs font-semibold rounded-full transition-all duration-150 cursor-pointer ${
                      isActive
                        ? 'bg-[#182338] text-white shadow-xs'
                        : 'text-[#55657E] hover:text-[#182338]'
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex flex-col items-center text-center">
          {/* Logo - Standalone Fraunces element, no overlap */}
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            id="brand-logo-btn"
            className="group cursor-pointer focus:outline-hidden mb-2"
          >
            <div className="flex flex-col items-center">
              <span className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight text-[#182338] group-hover:text-[#D95D39] transition-colors duration-200">
                {t.siteTitle}
              </span>
              <span className="text-[11px] sm:text-xs font-medium tracking-[0.25em] text-[#8E7E73] uppercase mt-1">
                {t.tagline}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 mt-5 pt-3 border-t border-[#EBE5DB] w-full justify-center">
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
                      ? 'text-[#D95D39]'
                      : 'text-[#182338] hover:text-[#D95D39]'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="text-[10px] uppercase tracking-normal px-2 py-0.5 rounded-full bg-[#EAE2D8] text-[#8E7E73] font-medium border border-[#DDD5C9]">
                      {item.badge}
                    </span>
                  )}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D95D39] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden w-full justify-between items-center mt-3 pt-2 border-t border-[#EBE5DB]">
            <span className="text-xs uppercase font-bold tracking-wider text-[#D95D39]">
              {navItems.find((i) => (i.id === 'home' && currentPath === '/') || (i.id !== 'home' && currentPath.startsWith(i.path)))?.label || t.siteTitle}
            </span>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#182338] hover:bg-[#EBE5DB] rounded-md transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E5DFD5] bg-[#F7F4EE] px-4 py-4 space-y-2 animate-fadeIn">
          {navItems.map((item) => {
            const isActive = (item.id === 'home' && currentPath === '/') || (item.id !== 'home' && currentPath.startsWith(item.path));
            return (
              <button
                key={item.id}
                id={`mobile-nav-link-${item.id}`}
                onClick={() => handleNavClick(item.path)}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-[#182338] text-white'
                    : 'text-[#182338] hover:bg-[#EBE5DB]'
                }`}
              >
                <span>{item.label}</span>
                <div className="flex items-center gap-2">
                  {item.badge && (
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                      isActive ? 'bg-[#2E3C56] text-white' : 'bg-[#EAE2D8] text-[#8E7E73]'
                    }`}>
                      {item.badge}
                    </span>
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
