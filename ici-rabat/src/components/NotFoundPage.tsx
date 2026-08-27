import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, Utensils } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import illustration404 from '../assets/images/illustrations/illustration_404.jpg';

/**
 * Friendly illustrated 404 — used for the wildcard route and for an
 * unresolved article slug, instead of a silent redirect to home.
 */
export const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();

  const copy = {
    fr: {
      eyebrow: 'ERREUR 404',
      title: "Cette adresse n'existe pas (encore)",
      desc: "La page que vous cherchez a peut-être changé d'adresse, ou n'a jamais existé. Pendant ce temps, notre guide Horeca, lui, est bien réel.",
      home: "Retour à l'accueil",
      horeca: 'Voir le guide Horeca'
    },
    ar: {
      eyebrow: 'خطأ 404',
      title: 'هذا الرابط غير موجود (بعد)',
      desc: 'ربما تغير عنوان الصفحة التي تبحث عنها، أو أنها لم توجد أصلاً. في هذه الأثناء، دليل المطاعم لدينا موجود بالفعل.',
      home: 'العودة إلى الرئيسية',
      horeca: 'دليل المطاعم'
    },
    en: {
      eyebrow: 'ERROR 404',
      title: "This address doesn't exist (yet)",
      desc: "The page you're looking for may have moved, or never existed. Meanwhile, our Horeca guide is very much real.",
      home: 'Back to home',
      horeca: 'See the Horeca guide'
    }
  }[language];

  return (
    <div id="not-found-page" className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 text-center">
      <span className="pop-caption inline-block px-3 py-1 text-xs sm:text-sm font-normal -rotate-2 mb-6">
        {copy.eyebrow}
      </span>

      <div className="comic-border-lg riso-shadow-orange overflow-hidden rounded-none bg-[#141B33] mb-8">
        <img
          src={illustration404}
          alt=""
          className="w-full h-auto object-cover editorial-photo"
        />
      </div>

      <h1 className="font-heading font-bold text-2xl sm:text-4xl text-[#141B33] mb-3 sm:mb-4 leading-tight">
        {copy.title}
      </h1>
      <p className="text-sm sm:text-lg text-[#4A3F2E] max-w-xl mx-auto mb-8 sm:mb-10 leading-relaxed">
        {copy.desc}
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
        <button
          onClick={() => navigate('/')}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#141B33] hover:bg-[#FF4B12] text-white text-xs sm:text-sm font-bold rounded-none riso-shadow-sm transition-colors cursor-pointer"
        >
          <Home className="w-4 h-4" />
          <span>{copy.home}</span>
        </button>
        <button
          onClick={() => navigate('/horeca')}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#FBF1D8] hover:bg-[#F6E6B8] text-[#141B33] border-2 border-[#141B33] text-xs sm:text-sm font-bold rounded-none transition-colors cursor-pointer"
        >
          <Utensils className="w-4 h-4 text-[#FF4B12]" />
          <span>{copy.horeca}</span>
        </button>
      </div>
    </div>
  );
};
