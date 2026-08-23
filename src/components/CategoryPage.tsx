import React from 'react';
import { ViewMode, Article } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { UPCOMING_SECTIONS } from '../data/articles';
import { HorecaSection } from './HorecaSection';
import { ScrollReveal } from './ScrollReveal';
import {
  Sparkles,
  Mail,
  CheckCircle2,
  AlertCircle,
  Compass,
  ArrowRight,
  ArrowLeft,
  Utensils,
  Bell,
  Send,
  MapPin,
  Clock,
  GraduationCap
} from 'lucide-react';
import { useNewsletterSubscribe } from '../hooks/useNewsletterSubscribe';
import bannerEvenements from '../assets/images/banners/banner_evenements.jpg';
import bannerLifestyle from '../assets/images/banners/banner_lifestyle.jpg';
import bannerAbout from '../assets/images/banners/banner_about.jpg';
import illustrationNewsletter from '../assets/images/illustrations/illustration_newsletter.jpg';
import textureTile from '../assets/images/illustrations/texture_tile.jpg';
import mastheadTeam from '../assets/images/illustrations/masthead_team.png';

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
  const { email, setEmail, company, setCompany, status, submit } = useNewsletterSubscribe(view);

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
        <ScrollReveal direction="up" distance={12}>
          <img
            src={mastheadTeam}
            alt="L'équipe Ici Rabat — la ville, ses gens, nos histoires"
            className="w-full h-auto riso-shadow-orange mb-6 sm:mb-8 -rotate-1"
          />
        </ScrollReveal>

        <ScrollReveal direction="up" distance={16}>
          <div className="comic-border-lg riso-shadow-orange overflow-hidden rounded-none bg-[#141B33] mb-10 sm:mb-12">
            <img
              src={bannerAbout}
              alt=""
              className="w-full h-auto object-cover editorial-photo"
            />
          </div>
        </ScrollReveal>

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

  // If LIFESTYLE and real articles already exist for it: render an actual grid,
  // not the "coming soon" placeholder below (that stays reserved for the truly-empty case).
  if (view === 'lifestyle') {
    const lifestyleArticles = [...articles]
      .filter((a) => a.category === 'lifestyle')
      .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

    if (lifestyleArticles.length > 0) {
      return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
          <ScrollReveal direction="up" distance={16}>
            <div className="comic-border-lg riso-shadow-orange overflow-hidden rounded-none bg-[#141B33] mb-8 sm:mb-10">
              <img
                src={bannerLifestyle}
                alt=""
                className="w-full h-auto object-cover editorial-photo"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" distance={16}>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 pb-4 border-b-2 border-[#141B33]">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <GraduationCap className="w-4 h-4 text-[#FF4B12]" />
                  <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#FF4B12]">
                    {t.navLifestyle}
                  </span>
                </div>
                <h2 className="font-heading font-bold text-2xl sm:text-4xl text-[#141B33]">
                  {language === 'ar' ? 'أسلوب الحياة والحياة الطلابية' : language === 'en' ? 'Lifestyle & Student Life' : 'Lifestyle & Vie Étudiante'}
                </h2>
              </div>
              <p className="text-xs sm:text-base text-[#4A3F2E] max-w-md mt-2 md:mt-0 font-normal">
                {language === 'ar'
                  ? 'أدلة عملية وموثقة عن الحياة اليومية في الرباط، بعيداً عن الأدلة السياحية.'
                  : language === 'en'
                  ? "Practical, fact-checked guides to everyday life in Rabat, beyond the tourist brochures."
                  : "Des guides pratiques et vérifiés sur le quotidien à Rabat, loin des brochures touristiques."}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-14">
            {lifestyleArticles.map((item, idx) => (
              <ScrollReveal key={item.id} direction="up" distance={24} delay={Math.min(idx * 0.06, 0.3)}>
                <div className="bg-[#FFFFFF] border-2 border-[#141B33] rounded-none overflow-hidden riso-shadow-sm hover:riso-shadow-magenta transition-all duration-300 flex flex-col justify-between group h-full">
                  <div
                    className="relative aspect-[16/10] overflow-hidden bg-[#E3CE93] cursor-pointer"
                    onClick={() => onSelectArticle(item)}
                  >
                    <img
                      src={item.heroImage}
                      alt={getLocalized(item.title)}
                      className="w-full h-full object-cover editorial-photo group-hover:scale-105 transition-transform duration-500 ease-out"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 editorial-overlay z-10" />
                  </div>

                  <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between">
                    <div>
                      <div className="flex items-center justify-between text-xs text-[#7A6842] font-medium mb-2.5 sm:mb-3">
                        <span className="flex items-center gap-1 text-[#FF4B12] font-bold">
                          <MapPin className="w-3.5 h-3.5" />
                          {getLocalized(item.location)}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {getLocalized(item.readTime)}
                        </span>
                      </div>

                      <h3
                        onClick={() => onSelectArticle(item)}
                        className="font-heading font-bold text-lg sm:text-xl text-[#141B33] group-hover:text-[#FF4B12] transition-colors leading-snug mb-2.5 sm:mb-3 cursor-pointer"
                      >
                        {getLocalized(item.title)}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#4A3F2E] leading-relaxed line-clamp-3 mb-4 font-normal">
                        {getLocalized(item.excerpt)}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#FFE9C2] flex items-center justify-between">
                      <button
                        onClick={() => onSelectArticle(item)}
                        className="text-xs font-bold text-[#141B33] hover:text-[#FF4B12] flex items-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <span>{t.readArticle}</span>
                        <ArrowRight className={`w-3.5 h-3.5 ${isRtl ? 'rotate-180' : ''}`} />
                      </button>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      );
    }
  }

  // If ÉVÉNEMENTS, LIFESTYLE (still empty), or SORTIR: Render curated, polished
  // "Bientôt disponible" with preview teasers & clear navigation. Each view gets
  // its own explicit config lookup so a new rubriek never silently inherits
  // another one's placeholder banner/copy.
  const upcomingConfig =
    view === 'evenements'
      ? UPCOMING_SECTIONS.evenements
      : view === 'sortir'
      ? UPCOMING_SECTIONS.sortir
      : UPCOMING_SECTIONS.lifestyle;

  const isEvents = view === 'evenements';
  const isSortir = view === 'sortir';
  const upcomingBanner = isEvents ? bannerEvenements : isSortir ? bannerEvenements : bannerLifestyle;

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

      {/* Category Banner */}
      <ScrollReveal direction="up" distance={16}>
        <div className="comic-border-lg riso-shadow-orange overflow-hidden rounded-none bg-[#141B33] mb-8 sm:mb-10">
          <img
            src={upcomingBanner}
            alt=""
            className="w-full h-auto object-cover editorial-photo"
          />
        </div>
      </ScrollReveal>

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

      {/* Editorial Slow Journalism Guarantee Quote */}
      <ScrollReveal direction="up" distance={16}>
        <div
          className="relative overflow-hidden mb-12 sm:mb-14 p-5 sm:p-8 bg-[#FBF1D8] border-2 border-[#141B33] rounded-none flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
        >
          <div
            className="absolute inset-0 opacity-[0.08] pointer-events-none"
            style={{ backgroundImage: `url(${textureTile})`, backgroundSize: '220px 220px', backgroundRepeat: 'repeat' }}
          />
          <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#0B3D91] text-white flex-shrink-0 flex items-center justify-center riso-shadow-sm">
            <Compass className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div className="relative text-center sm:text-start flex-grow">
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
          <img
            src={illustrationNewsletter}
            alt=""
            className="w-24 h-24 sm:w-28 sm:h-28 comic-border rounded-full object-cover riso-shadow-sm mx-auto mb-4 sm:mb-5 -rotate-3"
          />
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#FFE0C7] border border-[#FFC79E] flex items-center justify-center text-[#FF4B12] mx-auto mb-3 sm:mb-4">
            <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>

          <h3 className="font-heading font-bold text-xl sm:text-3xl text-[#141B33] mb-2">
            {isEvents
              ? (language === 'ar' ? 'احصل على الأجندة الثقافية فور صدورها' : language === 'en' ? 'Receive the Cultural Agenda upon Release' : 'Recevez l\'Agenda Culturel dès sa parution')
              : isSortir
              ? (language === 'ar' ? 'اكتشف عناوين السهر أولاً' : language === 'en' ? 'Discover Rabat Nightlife First' : 'Découvrez les adresses Sortir en avant-première')
              : (language === 'ar' ? 'اكتشف دليل أسلوب الحياة أولاً' : language === 'en' ? 'Discover the Lifestyle Guide First' : 'Découvrez le Guide Lifestyle en avant-première')}
          </h3>

          <p className="text-xs sm:text-sm text-[#4A3F2E] mb-5 sm:mb-6 max-w-md mx-auto leading-relaxed">
            {language === 'ar'
              ? 'سجل بريدك الإلكتروني لتصلك النسخة الخاصة وتفاصيل العناوين الحصرية قبل نشرها للعموم.'
              : language === 'en'
              ? 'Sign up to receive the complete feature dossier and exclusive addresses directly in your inbox prior to public launch.'
              : 'Inscrivez-vous pour recevoir les adresses confidentielles et les dossiers complets directement dans votre boîte mail.'}
          </p>

          {status === 'success' ? (
            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-[#0B3D91] bg-[#DCEEFF] py-3 px-5 sm:py-3.5 sm:px-6 rounded-none border border-[#B8DBFF]">
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#0B3D91]" />
              <span>{t.newsletterSuccess}</span>
            </div>
          ) : (
            <form onSubmit={submit} className="flex flex-col sm:flex-row gap-2.5 max-w-md mx-auto">
              {/* Honeypot — invisible to real visitors, catches simple bots */}
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
              />
              <input
                type="email"
                required
                placeholder={t.newsletterPlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow px-4 py-3 sm:py-3.5 bg-[#FBF1D8] border-2 border-[#141B33] rounded-none text-xs sm:text-sm focus:outline-hidden focus:border-[#141B33] focus:bg-white text-[#141B33] disabled:opacity-60"
                disabled={status === 'loading'}
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="px-5 py-3 sm:px-6 sm:py-3.5 bg-[#141B33] hover:bg-[#FF4B12] disabled:hover:bg-[#141B33] disabled:opacity-70 text-white text-xs sm:text-sm font-bold rounded-none transition-colors cursor-pointer inline-flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>{status === 'loading' ? t.newsletterSending : t.notifyMe}</span>
              </button>
            </form>
          )}

          {status === 'error' && (
            <div className="mt-3 flex items-center justify-center gap-2 text-xs font-semibold text-[#CC2E00]">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{t.newsletterError}</span>
            </div>
          )}

          <div className="mt-4 flex items-center justify-center gap-2 text-[10px] sm:text-[11px] text-[#7A6842]">
            <span>{language === 'ar' ? 'بدون إعلانات مزعجة • إلغاء الاشتراك بنقرة واحدة' : 'Zéro spam • Désabonnement en un clic'}</span>
          </div>
        </div>
      </ScrollReveal>

    </div>
  );
};
