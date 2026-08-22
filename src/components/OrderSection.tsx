import React, { useMemo, useState } from 'react';
import { Article } from '../types';
import { useLanguage } from '../context/LanguageContext';
import {
  ShoppingBag,
  Search,
  Star,
  MapPin,
  ExternalLink,
  MessageCircle,
  SearchX,
  Info,
  Sparkles,
} from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import bannerHoreca from '../assets/images/banners/banner_horeca.jpg';
import illustrationEmptyState from '../assets/images/illustrations/illustration_empty_state.jpg';

interface OrderSectionProps {
  articles: Article[];
  onSelectArticle: (article: Article) => void;
}

export const OrderSection: React.FC<OrderSectionProps> = ({ articles, onSelectArticle }) => {
  const { getLocalized, isRtl, t, language } = useLanguage();
  const [query, setQuery] = useState('');
  const [selectedCuisine, setSelectedCuisine] = useState<string>('all');

  // Only restaurants that already run their own direct-order channel — this
  // directory never lists a place that can't actually take the order.
  const orderableArticles = useMemo(
    () =>
      [...articles]
        .filter((a) => a.category === 'horeca' && a.businessDetails?.directOrderEnabled)
        .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()),
    [articles]
  );

  const cuisines = useMemo(() => {
    const set = new Set<string>();
    orderableArticles.forEach((a) => {
      if (a.businessDetails?.servesCuisine) set.add(a.businessDetails.servesCuisine);
    });
    return Array.from(set);
  }, [orderableArticles]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return orderableArticles.filter((a) => {
      const matchesCuisine =
        selectedCuisine === 'all' || a.businessDetails?.servesCuisine === selectedCuisine;
      if (!matchesCuisine) return false;
      if (!q) return true;
      const haystack = [
        a.businessDetails?.name,
        a.businessDetails?.servesCuisine,
        getLocalized(a.title),
        getLocalized(a.businessDetails?.specialty),
        getLocalized(a.businessDetails?.neighborhood),
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [orderableArticles, selectedCuisine, query, getLocalized]);

  const getOrderUrl = (article: Article): string | null => {
    const biz = article.businessDetails;
    if (!biz) return null;
    if (biz.directOrderUrl) return biz.directOrderUrl;
    if (biz.whatsapp) return `https://wa.me/${biz.whatsapp.replace(/[^0-9]/g, '')}`;
    if (biz.websiteUrl) return biz.websiteUrl;
    return null;
  };

  return (
    <div className="pt-2 sm:pt-4">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6 sm:pt-14 sm:pb-8">
        {/* Banner */}
        <ScrollReveal direction="up" distance={16}>
          <div className="comic-border-lg riso-shadow-orange overflow-hidden rounded-none bg-[#141B33] mb-8 sm:mb-10">
            <img src={bannerHoreca} alt="" className="w-full h-auto object-cover editorial-photo" />
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" distance={16}>
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-8 pb-4 border-b-2 border-[#141B33]">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <ShoppingBag className="w-4 h-4 text-[#FF4B12]" />
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#FF4B12]">
                  {t.navOrder}
                </span>
              </div>
              <h2 className="font-heading font-bold text-2xl sm:text-4xl text-[#141B33]">
                {t.orderPageTitle}
              </h2>
            </div>
            <p className="text-xs sm:text-base text-[#4A3F2E] max-w-md mt-2 md:mt-0 font-normal">
              {t.orderPageSubtitle}
            </p>
          </div>

          {/* Transparency disclaimer — never blend this model in silently */}
          <div className="flex items-start gap-2.5 bg-[#FBF1D8] border-2 border-[#141B33] rounded-none p-3.5 sm:p-4 mb-6 sm:mb-8 text-xs sm:text-sm text-[#4A3F2E]">
            <Info className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#0B3D91] flex-shrink-0 mt-0.5" />
            <span>{t.orderDisclaimer}</span>
          </div>

          {/* Search Bar */}
          <div className="relative mb-5 sm:mb-6">
            <Search className="absolute top-1/2 -translate-y-1/2 w-4 h-4 text-[#7A6842] rtl:right-4 ltr:left-4" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t.orderSearchPlaceholder}
              className={`w-full py-3 sm:py-3.5 bg-white border-2 border-[#141B33] rounded-none text-sm focus:outline-hidden focus:bg-[#FBF1D8] text-[#141B33] placeholder:text-[#7A6842] riso-shadow-sm ${
                isRtl ? 'pr-11 pl-4' : 'pl-11 pr-4'
              }`}
            />
          </div>

          {/* Cuisine Filter Pills */}
          {cuisines.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 mb-8 sm:mb-10">
              <button
                onClick={() => setSelectedCuisine('all')}
                className={`px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-full transition-all cursor-pointer ${
                  selectedCuisine === 'all'
                    ? 'bg-[#141B33] text-white riso-shadow-sm'
                    : 'bg-[#E3CE93] text-[#4A3F2E] hover:bg-[#E3CE93] hover:text-[#141B33]'
                }`}
              >
                {t.orderCuisineAll}
              </button>
              {cuisines.map((c) => {
                const isActive = selectedCuisine === c;
                return (
                  <button
                    key={c}
                    onClick={() => setSelectedCuisine(c)}
                    className={`px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-full transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#141B33] text-white riso-shadow-sm'
                        : 'bg-[#E3CE93] text-[#4A3F2E] hover:bg-[#E3CE93] hover:text-[#141B33]'
                    }`}
                  >
                    {c}
                  </button>
                );
              })}
            </div>
          )}
        </ScrollReveal>

        {/* Empty state */}
        {filtered.length === 0 && (
          <ScrollReveal direction="up" distance={16}>
            <div className="flex flex-col items-center text-center py-10 sm:py-14">
              <img
                src={illustrationEmptyState}
                alt=""
                className="w-32 h-32 sm:w-40 sm:h-40 comic-border rounded-full object-cover riso-shadow-sm mb-5 sm:mb-6"
              />
              <div className="flex items-center gap-2 text-[#FF4B12] mb-2">
                <SearchX className="w-4 h-4" />
                <span className="text-xs uppercase tracking-[0.2em] font-bold">{t.orderEmptyTitle}</span>
              </div>
              <p className="text-sm sm:text-base text-[#4A3F2E] max-w-sm">{t.orderEmptyDesc}</p>
            </div>
          </ScrollReveal>
        )}

        {/* Restaurant Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filtered.map((item, idx) => {
            const biz = item.businessDetails;
            const orderUrl = getOrderUrl(item);
            const isWhatsapp = orderUrl?.includes('wa.me');

            return (
              <ScrollReveal key={item.id} direction="up" distance={24} delay={Math.min(idx * 0.06, 0.3)}>
                <div
                  id={`order-card-${item.id}`}
                  className="bg-white border-2 border-[#141B33] rounded-none overflow-hidden riso-shadow-sm hover:riso-shadow-magenta transition-all duration-300 flex flex-col justify-between group h-full"
                >
                  {/* Photo */}
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
                    {biz?.priceLevel && (
                      <div className="absolute top-3 right-3 z-20 bg-[#FBF1D8]/95 text-[#141B33] font-bold text-xs px-2.5 py-1 rounded-md riso-shadow-sm border-2 border-[#141B33]">
                        {biz.priceLevel}
                      </div>
                    )}
                    <div className="absolute top-3 left-3 z-20 -rotate-3">
                      <div className="pop-caption inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] sm:text-[11px] font-normal">
                        <ShoppingBag className="w-3 h-3" />
                        <span>{t.navOrder}</span>
                      </div>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between">
                    <div>
                      <div className="flex items-center justify-between text-xs text-[#7A6842] font-medium mb-2.5 sm:mb-3">
                        <span className="flex items-center gap-1 text-[#FF4B12] font-bold">
                          <MapPin className="w-3.5 h-3.5" />
                          {getLocalized(biz?.neighborhood) || getLocalized(item.location)}
                        </span>
                        {biz?.aggregateRating && (
                          <span className="flex items-center gap-1 text-[#141B33] font-semibold">
                            <Star className="w-3.5 h-3.5 fill-[#FFD400] text-[#FFD400]" />
                            {biz.aggregateRating.ratingValue.toFixed(1)}
                          </span>
                        )}
                      </div>

                      <h3
                        onClick={() => onSelectArticle(item)}
                        className="font-heading font-bold text-lg sm:text-xl text-[#141B33] group-hover:text-[#FF4B12] transition-colors leading-snug mb-2 cursor-pointer"
                      >
                        {biz?.name || getLocalized(item.title)}
                      </h3>

                      {biz?.servesCuisine && (
                        <span className="inline-block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#0B3D91] bg-[#DCEEFF] border border-[#B8DBFF] px-2 py-0.5 rounded-full mb-3">
                          {biz.servesCuisine}
                        </span>
                      )}

                      {biz?.specialty && (
                        <p className="text-xs sm:text-sm text-[#4A3F2E] leading-relaxed line-clamp-2 mb-4 font-normal">
                          {getLocalized(biz.specialty)}
                        </p>
                      )}
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-col gap-2 pt-2">
                      {orderUrl && (
                        <a
                          href={orderUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#FF4B12] hover:bg-[#CC2E00] text-white text-xs sm:text-sm font-bold rounded-none riso-shadow-sm transition-colors cursor-pointer"
                        >
                          {isWhatsapp ? <MessageCircle className="w-4 h-4" /> : <ExternalLink className="w-4 h-4" />}
                          <span>{t.orderNowCta}</span>
                        </a>
                      )}
                      <button
                        onClick={() => onSelectArticle(item)}
                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-transparent hover:bg-[#FBF1D8] text-[#141B33] border-2 border-[#141B33] text-xs font-bold rounded-none transition-colors cursor-pointer"
                      >
                        <span>{t.orderDetailsCta}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Restaurant recruitment CTA */}
        <ScrollReveal direction="up" distance={16}>
          <div className="mt-10 sm:mt-14 relative overflow-hidden bg-[#141B33] border-2 border-[#141B33] rounded-none p-6 sm:p-10 text-center">
            <div className="absolute inset-0 text-[#FF2D78] halftone-dots pointer-events-none opacity-20" />
            <div className="relative">
              <Sparkles className="w-6 h-6 text-[#FFD400] mx-auto mb-3" />
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-white mb-2">
                {t.orderPartnerCtaTitle}
              </h3>
              <p className="text-xs sm:text-sm text-[#D9C9A0] max-w-md mx-auto mb-5">
                {t.orderPartnerCtaDesc}
              </p>
              <a
                href="mailto:contact@icirabat.ma?subject=Devenir%20partenaire%20-%20Commander"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#FFD400] hover:bg-white text-[#141B33] text-xs sm:text-sm font-bold rounded-none riso-shadow-sm transition-colors cursor-pointer"
              >
                <span>{t.orderPartnerCtaButton}</span>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};
