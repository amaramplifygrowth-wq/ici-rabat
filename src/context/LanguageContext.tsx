import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, LocalizedString } from '../types';

interface Translations {
  siteTitle: string;
  tagline: string;
  locationHeader: string;
  navHome: string;
  navHoreca: string;
  navEvents: string;
  navLifestyle: string;
  navAbout: string;
  comingSoonBadge: string;
  searchPlaceholder: string;
  filterAll: string;
  readArticle: string;
  minRead: string;
  publishedOn: string;
  writtenBy: string;
  editorialSelectionTitle: string;
  editorialSelectionSubtitle: string;
  horecaSectionTitle: string;
  horecaSectionSubtitle: string;
  viewAllHoreca: string;
  wayfindingHighlightTitle: string;
  wayfindingHighlightDesc: string;
  wayfindingCta: string;
  newsletterTitle: string;
  newsletterSubtitle: string;
  newsletterPlaceholder: string;
  newsletterButton: string;
  newsletterSuccess: string;
  backToArticles: string;
  visitWebsite: string;
  bookTable: string;
  businessInformation: string;
  addressLabel: string;
  hoursLabel: string;
  priceLabel: string;
  neighborhoodLabel: string;
  specialtyLabel: string;
  photoGallery: string;
  relatedStories: string;
  stayUpdated: string;
  footerManifesto: string;
  rightsReserved: string;
  poweredBy: string;
  comingSoonTitle: string;
  comingSoonDesc: string;
  notifyMe: string;
  aboutTitle: string;
  aboutDesc: string;
}

const UI_TRANSLATIONS: Record<Language, Translations> = {
  fr: {
    siteTitle: "ICI RABAT",
    tagline: "Le magazine urbain & art de vivre de la capitale",
    locationHeader: "RABAT, MAROC",
    navHome: "Accueil",
    navHoreca: "Horeca & Tables",
    navEvents: "Événements",
    navLifestyle: "Lifestyle",
    navAbout: "À Propos",
    comingSoonBadge: "Bientôt",
    searchPlaceholder: "Rechercher une table, un quartier...",
    filterAll: "Tous les quartiers",
    readArticle: "Lire l'article",
    minRead: "de lecture",
    publishedOn: "Publié le",
    writtenBy: "Par",
    editorialSelectionTitle: "Sélection de la Rédaction",
    editorialSelectionSubtitle: "Nos tables coups de cœur, dénichées avec passion dans les venelles et avenues de Rabat.",
    horecaSectionTitle: "Le Guide Horeca",
    horecaSectionSubtitle: "Restaurants d'auteurs, cafés de spécialité et comptoirs solaires.",
    viewAllHoreca: "Explorer tout le guide Horeca",
    wayfindingHighlightTitle: "Printemps Culinaire Rbati 2026",
    wayfindingHighlightDesc: "Des rives du Bouregreg au quartier Souissi, une nouvelle vague de chefs et baristas redéfinit l'art de recevoir.",
    wayfindingCta: "Découvrir le dossier spécial",
    newsletterTitle: "La Gazette Hebdomadaire d'Ici Rabat",
    newsletterSubtitle: "Chaque jeudi matin, une table secrète, une ouverture exclusive et les coulisses de la capitale directement dans votre boîte mail.",
    newsletterPlaceholder: "Votre adresse e-mail",
    newsletterButton: "S'inscrire",
    newsletterSuccess: "Merci ! Vous êtes désormais inscrit à la gazette.",
    backToArticles: "Retour aux articles",
    visitWebsite: "Visiter le site web officiel",
    bookTable: "Réserver une table",
    businessInformation: "Informations pratiques",
    addressLabel: "Adresse",
    hoursLabel: "Horaires",
    priceLabel: "Gamme de prix",
    neighborhoodLabel: "Quartier",
    specialtyLabel: "Spécialité",
    photoGallery: "Galerie photographique",
    relatedStories: "À lire également",
    stayUpdated: "Restez informés",
    footerManifesto: "Ici Rabat est une publication indépendante dédiée à célébrer l'identité contemporaine, la richesse gastronomique et le patrimoine vivant de la capitale marocaine.",
    rightsReserved: "Tous droits réservés.",
    poweredBy: "Powered by Amplify Growth Studio",
    comingSoonTitle: "Bientôt disponible",
    comingSoonDesc: "Cette rubrique est actuellement en cours de préparation éditoriale. Notre équipe prépare une immersion soignée.",
    notifyMe: "M'avertir du lancement",
    aboutTitle: "À Propos d'Ici Rabat",
    aboutDesc: "Ici Rabat capture le pouls vibrant de la capitale impériale : entre héritage andalou, modernisme architectural et renouveau culinaire audacieux."
  },
  ar: {
    siteTitle: "هنا الرباط",
    tagline: "مجلة الحياة المعاصرة وفنون الطهي في العاصمة المغربية",
    locationHeader: "الرباط، المغرب",
    navHome: "الرئيسية",
    navHoreca: "المطاعم والمقاهي",
    navEvents: "الفعاليات",
    navLifestyle: "أسلوب الحياة",
    navAbout: "عن المجلة",
    comingSoonBadge: "قريباً",
    searchPlaceholder: "ابحث عن مطعم، مقهى، أو حي...",
    filterAll: "جميع الأحياء",
    readArticle: "قراءة المقال",
    minRead: "للقراءة",
    publishedOn: "نُشر في",
    writtenBy: "بقلم",
    editorialSelectionTitle: "مختارات هيئة التحرير",
    editorialSelectionSubtitle: "وجهاتنا المفضلة المختارة بعناية فائقة بين أزقة الرباط التاريخية وشوارعها الحديثة.",
    horecaSectionTitle: "دليل المذاق والضيافة",
    horecaSectionSubtitle: "مطابخ عصرية، مقاهي مختصة، وتجارب ذوقية استثنائية.",
    viewAllHoreca: "استكشف الدليل الكامل للمطاعم",
    wayfindingHighlightTitle: "ربيع المذاق الرباطي 2026",
    wayfindingHighlightDesc: "من ضفاف أبي رقراق إلى حي السويسي، جيل جديد من الطهاة يبتكر آفاقاً غير مسبوقة للضيافة المغربية.",
    wayfindingCta: "اكتشف الملف الخاص",
    newsletterTitle: "نشرة هنا الرباط الأسبوعية",
    newsletterSubtitle: "كل صباح خميس، نرسل لك عنواناً سرياً، وافتتاحاً حصرياً، وجولات في كواليس عاصمة الأنوار.",
    newsletterPlaceholder: "بريدك الإلكتروني",
    newsletterButton: "اشتراك",
    newsletterSuccess: "شكراً لك! تم تسجيل اشتراكك في النشرة بنجاح.",
    backToArticles: "العودة إلى المقالات",
    visitWebsite: "زيارة الموقع الإلكتروني الرسمي",
    bookTable: "حجز طاولة",
    businessInformation: "معلومات عملية",
    addressLabel: "العنوان",
    hoursLabel: "أوقات العمل",
    priceLabel: "مستوى الأسعار",
    neighborhoodLabel: "الحي",
    specialtyLabel: "الأطباق المميزة",
    photoGallery: "المعرض الفوتوغرافي",
    relatedStories: "مقالات ذات صلة",
    stayUpdated: "ابقَ على تواصل",
    footerManifesto: "هنا الرباط هي مجلة ثقافية وفندقية مستقلة تحتفي بالهوية المعاصرة، وفنون الطهي، والتراث الحي لعاصمة المملكة المغربية.",
    rightsReserved: "جميع الحقوق محفوظة.",
    poweredBy: "Powered by Amplify Growth Studio",
    comingSoonTitle: "قريباً على هنا الرباط",
    comingSoonDesc: "هذا القسم قيد الإعداد والتحرير حالياً. فريقنا يجهز لكم محتوى استثنائياً.",
    notifyMe: "أعلمني عند الإطلاق",
    aboutTitle: "عن مجلة هنا الرباط",
    aboutDesc: "نرصد نبض العاصمة الإدارية والثقافية: بين الإرث الأندلسي والنهضة المعمارية والابتكارات الذوقية الواعدة."
  },
  en: {
    siteTitle: "ICI RABAT",
    tagline: "The urban & lifestyle magazine of Morocco's capital",
    locationHeader: "RABAT, MOROCCO",
    navHome: "Home",
    navHoreca: "Horeca & Dining",
    navEvents: "Events",
    navLifestyle: "Lifestyle",
    navAbout: "About",
    comingSoonBadge: "Soon",
    searchPlaceholder: "Search for a restaurant, café, neighborhood...",
    filterAll: "All neighborhoods",
    readArticle: "Read Story",
    minRead: "read",
    publishedOn: "Published",
    writtenBy: "By",
    editorialSelectionTitle: "Editorial Selection",
    editorialSelectionSubtitle: "Our curated dining spots and hidden gems discovered across Rabat's historic alleys and boulevards.",
    horecaSectionTitle: "The Horeca Guide",
    horecaSectionSubtitle: "Author kitchens, specialty coffee roasters, and sun-drenched terrace tables.",
    viewAllHoreca: "Explore Complete Horeca Guide",
    wayfindingHighlightTitle: "Rabat Culinary Spring 2026",
    wayfindingHighlightDesc: "From the Bouregreg riverbanks to Souissi, a new generation of Moroccan chefs and baristas is rewriting hospitality.",
    wayfindingCta: "Discover Special Feature",
    newsletterTitle: "The Weekly Ici Rabat Gazette",
    newsletterSubtitle: "Every Thursday morning: a hidden table, an exclusive opening, and behind-the-scenes capital dispatches delivered to your inbox.",
    newsletterPlaceholder: "Your email address",
    newsletterButton: "Subscribe",
    newsletterSuccess: "Thank you! You are now subscribed to the gazette.",
    backToArticles: "Back to stories",
    visitWebsite: "Visit Official Website",
    bookTable: "Reserve a Table",
    businessInformation: "Practical Information",
    addressLabel: "Address",
    hoursLabel: "Opening Hours",
    priceLabel: "Price Range",
    neighborhoodLabel: "Neighborhood",
    specialtyLabel: "Signature Craft",
    photoGallery: "Photographic Gallery",
    relatedStories: "Related Stories",
    stayUpdated: "Stay Updated",
    footerManifesto: "Ici Rabat is an independent publication dedicated to celebrating the contemporary identity, culinary heritage, and vibrant lifestyle of Morocco's capital.",
    rightsReserved: "All rights reserved.",
    poweredBy: "Powered by Amplify Growth Studio",
    comingSoonTitle: "Coming Soon",
    comingSoonDesc: "This section is currently under editorial curation. Our team is crafting an immersive deep dive.",
    notifyMe: "Notify Me at Launch",
    aboutTitle: "About Ici Rabat",
    aboutDesc: "Ici Rabat captures the pulse of the royal capital: poised between Andalusian heritage, modernist avenues, and daring culinary craft."
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  isRtl: boolean;
  t: Translations;
  getLocalized: (obj?: LocalizedString | null) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const urlLang = params.get('lang') as Language;
      if (urlLang && ['fr', 'ar', 'en'].includes(urlLang)) {
        return urlLang;
      }
      const saved = localStorage.getItem('ici_rabat_lang') as Language;
      if (saved && ['fr', 'ar', 'en'].includes(saved)) {
        return saved;
      }
    }
    return 'fr';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('ici_rabat_lang', lang);
    }
  };

  const isRtl = language === 'ar';

  useEffect(() => {
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language, isRtl]);

  const getLocalized = (obj?: LocalizedString | null): string => {
    if (!obj) return '';
    return obj[language] || obj.fr || obj.en || '';
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        isRtl,
        t: UI_TRANSLATIONS[language],
        getLocalized
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
