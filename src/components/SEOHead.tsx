import { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ViewMode, Article } from '../types';

interface SEOHeadProps {
  currentView: ViewMode;
  article?: Article | null;
}

export function SEOHead({ currentView, article }: SEOHeadProps) {
  const { language, getLocalized } = useLanguage();

  useEffect(() => {
    const origin = typeof window !== 'undefined' && window.location.origin
      ? window.location.origin
      : 'https://ici-rabat.pages.dev';

    // 1. Determine canonical base path and metadata
    let path = '';
    let pageTitle = 'Ici Rabat | Le Magazine Urbain & Horeca de la Capitale';
    let pageDesc = "Magazine en ligne trilingue dédié à l'art de vivre, la haute gastronomie, les cafés de spécialité et la culture de Rabat.";
    let pageImage = 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?q=80&w=1600&auto=format&fit=crop';

    if (currentView === 'article' && article) {
      path = `${article.category}/${article.slug}`;
      const title = getLocalized(article.title);
      const excerpt = getLocalized(article.excerpt);
      
      const customTitle = typeof article.metaTitle === 'string'
        ? article.metaTitle
        : (article.metaTitle ? getLocalized(article.metaTitle) : '');
      const customDesc = typeof article.metaDescription === 'string'
        ? article.metaDescription
        : (article.metaDescription ? getLocalized(article.metaDescription) : '');

      pageTitle = customTitle || `${title} | Ici Rabat`;
      pageDesc = customDesc || excerpt || pageDesc;
      if (article.heroImage) {
        pageImage = article.heroImage;
      }
    } else if (currentView === 'horeca') {
      path = 'horeca';
      pageTitle = language === 'ar'
        ? 'دليل المطاعم والمقاهي بالرباط | هنا الرباط'
        : language === 'en'
        ? 'Rabat Horeca & Dining Guide | Ici Rabat'
        : 'Le Guide Horeca & Tables de Rabat | Ici Rabat';
      pageDesc = language === 'ar'
        ? 'استكشف أفضل المطاعم والمقاهي المختصة والتجارب الذوقية الرفيعة في أحياء الرباط.'
        : language === 'en'
        ? 'Explore the finest dining establishments, specialty coffee bars, and authentic culinary benchmarks in Rabat.'
        : 'Découvrez les meilleures tables, restaurants d’auteurs et cafés de spécialité à Rabat (Agdal, Hassan, Souissi, Oudayas).';
    } else if (currentView === 'evenements') {
      path = 'evenements';
      pageTitle = language === 'ar'
        ? 'الأجندة الثقافية والفعاليات بالرباط | هنا الرباط'
        : language === 'en'
        ? 'Cultural Events & Agenda in Rabat | Ici Rabat'
        : 'Événements & Agenda Culturel à Rabat | Ici Rabat';
      pageDesc = 'Festivals d’exception, biennales d’art contemporain et soirées musicales dans les lieux historiques de la capitale.';
    } else if (currentView === 'lifestyle') {
      path = 'lifestyle';
      pageTitle = language === 'ar'
        ? 'أسلوب الحياة والتصميم الرباطي | هنا الرباط'
        : language === 'en'
        ? 'Lifestyle & Rabat Design | Ici Rabat'
        : 'Lifestyle & Design Rbati | Ici Rabat';
      pageDesc = 'Boutiques de créateurs, ateliers de poterie à Salé, artisanat d’avant-garde et maisons d’hôtes confidentielles.';
    } else if (currentView === 'about') {
      path = 'about';
      pageTitle = language === 'ar'
        ? 'عن مجلة هنا الرباط | Ici Rabat'
        : language === 'en'
        ? 'About Ici Rabat Magazine'
        : 'À Propos d’Ici Rabat | Magazine Urbain';
      pageDesc = 'Ici Rabat capture le pouls vibrant de la capitale impériale : entre héritage andalou, modernisme architectural et renouveau culinaire.';
    }

    // 2. Set Document Title
    document.title = pageTitle;

    // 3. Helper to update or create meta tags
    const setMetaTag = (attr: 'name' | 'property', key: string, content: string) => {
      let element = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, key);
        document.head.appendChild(element);
      }
      element.content = content;
    };

    // Update standard meta
    setMetaTag('name', 'description', pageDesc);

    // Clean Canonical URL (without any #)
    const canonicalUrl = path ? `${origin}/${path}` : `${origin}/`;
    setMetaTag('property', 'og:title', pageTitle);
    setMetaTag('property', 'og:description', pageDesc);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:image', pageImage);
    setMetaTag('property', 'og:type', currentView === 'article' ? 'article' : 'website');
    setMetaTag('property', 'og:site_name', 'Ici Rabat');
    setMetaTag('property', 'og:locale', language === 'ar' ? 'ar_MA' : language === 'en' ? 'en_US' : 'fr_FR');

    // Twitter Card Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', pageTitle);
    setMetaTag('name', 'twitter:description', pageDesc);
    setMetaTag('name', 'twitter:image', pageImage);

    // 4. Update / Inject Canonical Link Tag
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonicalUrl;

    // 5. Update / Inject Hreflang Tags (fr, ar, en, x-default)
    const hreflangMap: Record<string, string> = {
      'fr': path ? `${origin}/${path}?lang=fr` : `${origin}/?lang=fr`,
      'ar': path ? `${origin}/${path}?lang=ar` : `${origin}/?lang=ar`,
      'en': path ? `${origin}/${path}?lang=en` : `${origin}/?lang=en`,
      'x-default': canonicalUrl
    };

    Object.entries(hreflangMap).forEach(([langCode, targetHref]) => {
      let hrefLink = document.querySelector(`link[rel="alternate"][hreflang="${langCode}"]`) as HTMLLinkElement | null;
      if (!hrefLink) {
        hrefLink = document.createElement('link');
        hrefLink.rel = 'alternate';
        hrefLink.setAttribute('hreflang', langCode);
        document.head.appendChild(hrefLink);
      }
      hrefLink.href = targetHref;
    });

  }, [currentView, article, language, getLocalized]);

  return null;
}
