import React, { useState } from 'react';
import { ViewMode, Article } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { UPCOMING_SECTIONS } from '../data/articles';
import { HorecaSection } from './HorecaSection';
import { ScrollReveal } from './ScrollReveal';
import {
  Calendar,
  Sparkles,
  Mail,
  CheckCircle2,
  Compass,
  ArrowRight,
  ArrowLeft,
  Utensils,
  Bell,
  Layers,
  BookOpen,
  Send
} from 'lucide-react';

interface CategoryPageProps {
  view: ViewMode;
  articles: Article[];
  onSelectArticle: (article: Article) => void;
  onNavigateHome: () => void;
  onNavigate?: (view: ViewMode) => void;
}

export const CategoryPage: React.FC<CategoryPageProps> = ({
  view,
  articles,
  onSelectArticle,
  onNavigateHome,
  onNavigate,
}) => {
  const { getLocalized, t, isRtl, language } = useLanguage();
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubmitted(true);
    }
  };

  const handleGoHoreca = () => {
    if (onNavigate) {
      onNavigate('horeca');
    } else {
      onNavigateHome();
    }
  };

  // If HORECA view: render full directory view
  if (view === 'horeca') {
    return (
      <div className="pt-2 sm:pt-4">
        <HorecaSection
          articles={articles}
          onSelectArticle={onSelectArticle}
          showAll={true}
        />
      </div>
    );
  }

  // If ABOUT view: render manifesto and team
  if (view === 'about') {
    return (
      <div id="about-page" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <ScrollReveal direction="up" distance={20}>
          <div className="text-center mb-8 sm:mb-12">
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-bold text-[#FF4B12]">
              {language === 'ar' ? 'البيان التحريري' : language === 'en' ? 'EDITORIAL MANIFESTO' : 'MANIFESTE ÉDITORIAL'}
            </span>
            <h1 className="font-heading font-bold text-2xl sm:text-5xl text-[#141B33] mt-2 mb-3 sm:mb-4 leading-tight">
              {t.aboutTitle}
            </h1>
            <p className="text-sm sm:text-lg text-[#4A3F2E] max-w-2xl mx-auto font-normal">
              {t.aboutDesc}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" distance={24} delay={0.1}>
          <div className="bg-white border-2 border-[#141B33] rounded-none p-6 sm:p-12 riso-shadow-sm space-y-5 sm:space-y-6 text-[#141B33] leading-relaxed text-sm sm:text-lg">
            <p className="drop-cap">
              {language === 'ar'
                ? 'ليست الرباط مجرد عاصمة إدارية وحاضنة لتاريخ عريق، بل هي مدينة مفعمة بالحيوية والإبداع المعاصر. من ضفاف أبي رقراق إلى واجهات الآرت ديكو في وسط المدينة، ومن رياضات المدينة العتيقة إلى العناvindos المبتكرة في أكدال والسويسي، يزدهر فن عيش متفرد.'
                : language === 'en'
                ? "Rabat is not merely the seat of kingdom institutions and ancient heritage; it is a vibrant metropolis undergoing a creative renaissance. From the landscaped Bouregreg riverbanks to the Art Deco avenues of Hassan, from centuries-old Medina riads to daring culinary spaces in Agdal and Souissi, an inspiring art of living flourishes."
                : "Rabat n'est pas seulement le siège des institutions et le gardien d'un patrimoine séculaire ; c’est une métropole vivante en pleine effervescence créative. Des rives réaménagées du Bouregreg aux façades Art Déco du centre-ville, des riads intemporels de la Médina aux adresses avant-gardistes de l’Agdal et du Souissi, un nouvel art de vivre s'épanouit."}
            </p>
            <p>
              {language === 'ar'
                ? 'تأسست مجلة "هنا الرباط" من قناعة راسخة: تستحق العاصمة المغربية منبراً مستقلاً، رفيع الذوق وشغوفاً، ليروي حكايات موائدها السرية، وحرفييها المبدعين، ومواعيدها الثقافية الاستثنائية.'
                : language === 'en'
                ? 'Ici Rabat was born from a clear conviction: the Moroccan capital deserves an independent, passionate, and meticulously curated editorial tribune to document its hidden tables, master artisans, and standout cultural rendezvous.'
                : "Ici Rabat est né d'une conviction : la capitale marocaine mérite une tribune indépendante, bilingue et trilingue, exigeante et passionnée, pour raconter ses tables secrètes, ses artisans virtuoses, ses créateurs audacieux et ses rendez-vous culturels d'exception."}
            </p>
            
            <div className="my-6 sm:my-8 p-5 sm:p-6 bg-[#FBF1D8] border-s-4 border-[#0B3D91] rounded-r-xl">
              <p className="font-heading font-semibold text-base sm:text-xl text-[#141B33] italic">
                {language === 'ar'
                  ? '«تأمل المدينة بعيون من يحبها، وبشغف من يعيد اكتشافها كل يوم.»'
                  : language === 'en'
                  ? '“To observe the city with the eyes of those who love it, and the curiosity of those who reinvent it daily.”'
                  : '« Observer la ville avec le regard de ceux qui l\'aiment et la curiosité de ceux qui la réinventent chaque jour. »'}
              </p>
            </div>

            <div className="pt-5 sm:pt-6 border-t-2 border-[#141B33] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#7A6842]">
              <span>{language === 'ar' ? 'أُسست في الرباط، المغرب • ٢٠٢٦' : 'Fondé à Rabat, Maroc • 2026'}</span>
              <span className="font-bold text-[#141B33]">{t.wayfindingHighlightTitle}</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    );
  }

  // If ÉVÉNEMENTS or LIFESTYLE: Render curated, polished "Bientôt disponible" with preview teasers & clear navigation
  const upcomingConfig =
    view === 'evenements' ? UPCOMING_SECTIONS.evenements : UPCOMING_SECTIONS.lifestyle;

  const isEvents = view === 'evenements';

  return (
    <div id={`upcoming-page-${view}`} className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
      
      {/* Top Breadcrumb Navigation */}
      <div className="mb-6 sm:mb-8 flex items-center justify-between">
        <button
          onClick={onNavigateHome}
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#7A6842] hover:text-[#FF4B12] transition-colors cursor-pointer"
        >
          {isRtl ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
          <span>{t.navHome}</span>
        </button>

        <span className="text-[11px] sm:text-xs font-medium text-[#7A6842] bg-[#E3CE93]/60 px-3 py-1 rounded-full border-2 border-[#141B33]">
          {language === 'ar' ? 'إصدار الربيع ٢٠٢٦' : language === 'en' ? 'Spring 2026 Edition' : 'Édition Printemps 2026'}
        </span>
      </div>

      {/* Editorial Hero Header */}
      <ScrollReveal direction="up" distance={20}>
        <div className="bg-white border-2 border-[#141B33] rounded-none p-6 sm:p-12 riso-shadow-sm text-center mb-10 sm:mb-12 relative overflow-hidden">
          {/* Subtle Decorative Geometry */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#FFE0C7] rounded-full -z-0 opacity-70 pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-36 h-36 bg-[#DCEEFF] rounded-full -z-0 opacity-60 pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 text-[11px] sm:text-xs font-bold uppercase tracking-wider bg-[#FFE0C7] text-[#FF4B12] border border-[#FFC79E] rounded-full mb-3 sm:mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#FF4B12]" />
              <span>
                {language === 'ar'
                  ? 'ملف قيد الإعداد التحريري'
                  : language === 'en'
                  ? 'Curated Edition in Preparation'
                  : 'Dossier en Cours de Préparation'}
              </span>
            </div>

            <h1 className="font-heading font-bold text-2xl sm:text-5xl text-[#141B33] leading-tight mb-3 sm:mb-4">
              {getLocalized(upcomingConfig.title)}
            </h1>

            <p className="text-sm sm:text-lg text-[#4A3F2E] leading-relaxed mb-6 sm:mb-8">
              {getLocalized(upcomingConfig.subtitle)}
            </p>

            {/* Quick Action Buttons (Immediate Wayfinding to Horeca or VIP Alerts) */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2">
              <button
                onClick={handleGoHoreca}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#FF4B12] hover:bg-[#CC2E00] text-white text-xs sm:text-sm font-bold rounded-none riso-shadow-sm transition-colors cursor-pointer"
              >
                <Utensils className="w-4 h-4" />
                <span>{t.viewAllHoreca}</span>
                {isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
              </button>

              <a
                href="#newsletter-notification"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#FBF1D8] hover:bg-[#F6E6B8] text-[#141B33] border-2 border-[#141B33] text-xs sm:text-sm font-bold rounded-none transition-colors cursor-pointer"
              >
                <Bell className="w-4 h-4 text-[#FF4B12]" />
                <span>
                  {language === 'ar'
                    ? 'تنبيهي عند الإطلاق'
                    : language === 'en'
                    ? 'Notify Me at Launch'
                    : 'M\'avertir de la parution'}
                </span>
              </a>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Moodboard / Curated Upcoming Stories Preview */}
      <div className="mb-12 sm:mb-14">
        <div className="flex items-center justify-between mb-5 sm:mb-6 pb-2 border-b-2 border-[#141B33]">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#FF4B12]" />
            <h2 className="text-xs uppercase tracking-[0.2em] font-bold text-[#141B33]">
              {language === 'ar'
                ? 'عناوين الملفات الجاري توثيقها'
                : language === 'en'
                ? 'IN-PROGRESS EDITORIAL STORIES'
                : 'AVANT-PREMIÈRE DES DOSSIERS EN COURS'}
            </h2>
          </div>
          <span className="text-xs text-[#7A6842] italic hidden sm:inline">
            {language === 'ar' ? 'نصوص وصور حصرية قريباً' : 'Textes et photographies d\'auteurs'}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {upcomingConfig.curatedTeasers.map((teaser, idx) => (
            <ScrollReveal key={idx} direction="up" distance={20} delay={idx * 0.08}>
              <div className="bg-white border-2 border-[#141B33] rounded-none overflow-hidden riso-shadow-sm hover:riso-shadow-magenta transition-shadow flex flex-col justify-between group h-full">
                <div className="relative aspect-[16/10] overflow-hidden bg-[#141B33]">
                  <img
                    src={teaser.image}
                    alt={getLocalized(teaser.title)}
                    className="w-full h-full object-cover editorial-photo group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 editorial-overlay z-10" />
                  <div className="absolute top-3 right-3 z-20 bg-[#141B33]/90 text-white text-[11px] font-semibold px-3 py-1 rounded-md border border-white/10">
                    {getLocalized(teaser.badge)}
                  </div>
                </div>

                <div className="p-5 sm:p-7 flex flex-col flex-grow justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#FF4B12] uppercase tracking-wider mb-2">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{getLocalized(teaser.date)}</span>
                    </div>
                    <h3 className="font-heading font-bold text-lg sm:text-2xl text-[#141B33] leading-snug">
                      {getLocalized(teaser.title)}
                    </h3>
                  </div>

                  <div className="mt-5 sm:mt-6 pt-4 border-t border-[#FFE9C2] flex items-center justify-between text-xs text-[#7A6842]">
                    <span className="inline-flex items-center gap-1 text-[#0B3D91] font-bold">
                      <BookOpen className="w-3.5 h-3.5 text-[#0B3D91]" />
                      {language === 'ar' ? 'تحقيق ميداني قيد التحرير' : language === 'en' ? 'Reportage in Progress' : 'Reportage en immersion'}
                    </span>
                    <span className="font-medium text-[#141B33]">
                      {language === 'ar' ? 'الرباط' : 'Rabat & Salé'}
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Editorial Slow Journalism Guarantee Quote */}
      <ScrollReveal direction="up" distance={16}>
        <div className="mb-12 sm:mb-14 p-5 sm:p-8 bg-[#FBF1D8] border-2 border-[#141B33] rounded-none flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#0B3D91] text-white flex-shrink-0 flex items-center justify-center riso-shadow-sm">
            <Compass className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div className="text-center sm:text-start flex-grow">
            <h4 className="font-heading font-bold text-base sm:text-lg text-[#141B33] mb-1">
              {language === 'ar'
                ? 'ميثاق الجودة والتمهل التحريري'
                : language === 'en'
                ? 'Our Slow Journalism Commitment'
                : 'Notre engagement de journalisme indépendant'}
            </h4>
            <p className="text-xs sm:text-sm text-[#4A3F2E] leading-relaxed">
              {language === 'ar'
                ? 'نأخذ الوقت الكافي لزيارة الأماكن سراً، ولقاء المبدعين، وتوثيق قصص العاصمة بعيداً عن التسرع، لنقدم دليلاً يتمتع بأعلى درجات المصداقية.'
                : language === 'en'
                ? 'We take the deliberate time to explore on foot, meet master creators anonymously, and test every address to bring you stories with absolute integrity.'
                : 'Nous prenons le temps d\'arpenter la capitale, d\'échanger avec les artisans et d\'expérimenter chaque adresse pour vous offrir une sélection d\'une exigence absolue.'}
            </p>
          </div>
        </div>
      </ScrollReveal>

      {/* Interactive VIP Notification Card */}
      <ScrollReveal direction="up" distance={20}>
        <div
          id="newsletter-notification"
          className="bg-white border-2 border-[#E3CE93] rounded-none p-6 sm:p-10 text-center max-w-2xl mx-auto riso-shadow-sm relative"
        >
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#FFE0C7] border border-[#FFC79E] flex items-center justify-center text-[#FF4B12] mx-auto mb-3 sm:mb-4">
            <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>

          <h3 className="font-heading font-bold text-xl sm:text-3xl text-[#141B33] mb-2">
            {isEvents
              ? (language === 'ar' ? 'احصل على الأجندة الثقافية فور صدورها' : language === 'en' ? 'Receive the Cultural Agenda upon Release' : 'Recevez l\'Agenda Culturel dès sa parution')
              : (language === 'ar' ? 'اكتشف دليل أسلوب الحياة أولاً' : language === 'en' ? 'Discover the Lifestyle Guide First' : 'Découvrez le Guide Lifestyle en avant-première')}
          </h3>

          <p className="text-xs sm:text-sm text-[#4A3F2E] mb-5 sm:mb-6 max-w-md mx-auto leading-relaxed">
            {language === 'ar'
              ? 'سجل بريدك الإلكتروني لتصلك النسخة الخاصة وتفاصيل العناوين الحصرية قبل نشرها للعموم.'
              : language === 'en'
              ? 'Sign up to receive the complete feature dossier and exclusive addresses directly in your inbox prior to public launch.'
              : 'Inscrivez-vous pour recevoir les adresses confidentielles et les dossiers complets directement dans votre boîte mail.'}
          </p>

          {isSubmitted ? (
            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-[#0B3D91] bg-[#DCEEFF] py-3 px-5 sm:py-3.5 sm:px-6 rounded-none border border-[#B8DBFF]">
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#0B3D91]" />
              <span>{t.newsletterSuccess}</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2.5 max-w-md mx-auto">
              <input
                type="email"
                required
                placeholder={t.newsletterPlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow px-4 py-3 sm:py-3.5 bg-[#FBF1D8] border-2 border-[#141B33] rounded-none text-xs sm:text-sm focus:outline-hidden focus:border-[#141B33] focus:bg-white text-[#141B33]"
              />
              <button
                type="submit"
                className="px-5 py-3 sm:px-6 sm:py-3.5 bg-[#141B33] hover:bg-[#FF4B12] text-white text-xs sm:text-sm font-bold rounded-none transition-colors cursor-pointer inline-flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>{t.notifyMe}</span>
              </button>
            </form>
          )}

          <div className="mt-4 flex items-center justify-center gap-2 text-[10px] sm:text-[11px] text-[#7A6842]">
            <span>{language === 'ar' ? 'بدون إعلانات مزعجة • إلغاء الاشتراك بنقرة واحدة' : 'Zéro spam • Désabonnement en un clic'}</span>
          </div>
        </div>
      </ScrollReveal>

    </div>
  );
};
