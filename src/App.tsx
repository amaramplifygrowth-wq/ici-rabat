import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useParams, Navigate, useLocation } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { ViewMode, Article } from './types';
import { ARTICLES_DATA } from './data/articles';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SEOHead } from './components/SEOHead';
import { InstallPrompt } from './components/InstallPrompt';

// Route-level code splitting: each of these is only needed on the routes
// that render it, so it ships as its own chunk instead of bloating the
// single main bundle every visitor downloads regardless of which page
// they land on (most real-world entries are a single article page from a
// Google search, not the homepage — this keeps that first load lean).
const PosterHero = lazy(() => import('./components/PosterHero').then((m) => ({ default: m.PosterHero })));
const HeroMosaic = lazy(() => import('./components/HeroMosaic').then((m) => ({ default: m.HeroMosaic })));
const WayfindingBanner = lazy(() => import('./components/WayfindingBanner').then((m) => ({ default: m.WayfindingBanner })));
const HorecaSection = lazy(() => import('./components/HorecaSection').then((m) => ({ default: m.HorecaSection })));
const OrderSection = lazy(() => import('./components/OrderSection').then((m) => ({ default: m.OrderSection })));
const ArticleDetail = lazy(() => import('./components/ArticleDetail').then((m) => ({ default: m.ArticleDetail })));
const CategoryPage = lazy(() => import('./components/CategoryPage').then((m) => ({ default: m.CategoryPage })));
const NotFoundPage = lazy(() => import('./components/NotFoundPage').then((m) => ({ default: m.NotFoundPage })));

// 1. Helper component to auto-redirect legacy hash URLs to clean path-based URLs
function LegacyHashRedirectHandler() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const rawHash = window.location.hash.replace('#', '').split('?')[0];
      if (rawHash) {
        if (['horeca', 'commander', 'evenements', 'lifestyle', 'sortir', 'about'].includes(rawHash)) {
          navigate(`/${rawHash}`, { replace: true });
        } else {
          const matchedArticle = ARTICLES_DATA.find((a) => a.slug === rawHash);
          if (matchedArticle) {
            navigate(`/${matchedArticle.category}/${matchedArticle.slug}`, { replace: true });
          }
        }
      }
    }
  }, [navigate, location]);

  return null;
}

// 2. Homepage View Component
function HomePage() {
  const navigate = useNavigate();
  const heroArticle = ARTICLES_DATA.find((a) => a.isFeaturedHero) || ARTICLES_DATA[0];

  const handleSelectArticle = (article: Article) => {
    navigate(`/${article.category}/${article.slug}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <SEOHead currentView="home" />

      {/* 1. Full-bleed Pop Art / Riso Cover Poster */}
      <PosterHero
        onExplore={() => {
          document.getElementById('horeca-guide-section')?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* 2. Asymmetric Photo Collage Hero */}
      <HeroMosaic
        article={heroArticle}
        onSelectArticle={handleSelectArticle}
      />

      {/* 2. Consolidated Horeca Guide Grid */}
      <HorecaSection
        articles={ARTICLES_DATA}
        onSelectArticle={handleSelectArticle}
        onViewAllHoreca={() => {
          navigate('/horeca');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        showAll={false}
      />

      {/* 3. Solid Color Wayfinding Separator Banner */}
      <WayfindingBanner
        onExploreHoreca={() => {
          navigate('/horeca');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />
    </>
  );
}

// 3. Category Page Wrapper Component
function CategoryRouteWrapper({ view }: { view: ViewMode }) {
  const navigate = useNavigate();

  const handleSelectArticle = (article: Article) => {
    navigate(`/${article.category}/${article.slug}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <SEOHead currentView={view} />
      <CategoryPage
        view={view}
        articles={ARTICLES_DATA}
        onSelectArticle={handleSelectArticle}
        onNavigateHome={() => {
          navigate('/');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onNavigate={(targetView: ViewMode) => {
          navigate(targetView === 'home' ? '/' : `/${targetView}`);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />
    </>
  );
}

// 3b. "Commander" Direct-Order Directory Route Component
function OrderRouteWrapper() {
  const navigate = useNavigate();

  const handleSelectArticle = (article: Article) => {
    navigate(`/${article.category}/${article.slug}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <SEOHead currentView="commander" />
      <OrderSection articles={ARTICLES_DATA} onSelectArticle={handleSelectArticle} />
    </>
  );
}

// 4. Article Detail Route Component
function ArticleDetailRouteWrapper() {
  const { category, slug } = useParams<{ category: string; slug: string }>();
  const navigate = useNavigate();

  const article = ARTICLES_DATA.find((a) => a.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  if (!article) {
    return <NotFoundPage />;
  }

  return (
    <>
      <SEOHead currentView="article" article={article} />
      <ArticleDetail
        article={article}
        allArticles={ARTICLES_DATA}
        onBack={() => {
          navigate(`/${article.category}`);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onSelectArticle={(selected) => {
          navigate(`/${selected.category}/${selected.slug}`);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />
    </>
  );
}

// 5. Fallback for root-level article slugs (e.g., /indian-flavors-agdal -> /horeca/indian-flavors-agdal)
function RootSlugFallback() {
  const { slug } = useParams<{ slug: string }>();
  const matched = ARTICLES_DATA.find((a) => a.slug === slug);

  if (matched) {
    return <Navigate to={`/${matched.category}/${matched.slug}`} replace />;
  }

  // Not an article or valid category -> show the illustrated 404 instead of
  // silently bouncing back to home (a broken link should say so).
  return <NotFoundPage />;
}

// Main App Layout
function AppLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FBF1D8] cream-grain-bg text-[#141B33] selection:bg-[#FF4B12] selection:text-white">
      {/* Legacy hash listener */}
      <LegacyHashRedirectHandler />

      {/* Top Header */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-grow">
        <Suspense fallback={null}>
          <Routes>
            {/* 1. Homepage */}
            <Route path="/" element={<HomePage />} />

            {/* 2. Categories */}
            <Route path="/horeca" element={<CategoryRouteWrapper view="horeca" />} />
            <Route path="/commander" element={<OrderRouteWrapper />} />
            <Route path="/evenements" element={<CategoryRouteWrapper view="evenements" />} />
            <Route path="/lifestyle" element={<CategoryRouteWrapper view="lifestyle" />} />
            <Route path="/sortir" element={<CategoryRouteWrapper view="sortir" />} />
            <Route path="/about" element={<CategoryRouteWrapper view="about" />} />

            {/* 3. Category + Article Slug (Clean SEO Paths) */}
            <Route path="/:category/:slug" element={<ArticleDetailRouteWrapper />} />

            {/* 4. Single segment fallback (legacy slugs or 404s) */}
            <Route path="/:slug" element={<RootSlugFallback />} />

            {/* 5. Wildcard fallback */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>

      {/* Footer */}
      <Footer />

      {/* "Add to Home Screen" banner — Android gets a real 1-tap install prompt, iOS gets instructions */}
      <InstallPrompt />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <AppLayout />
      </LanguageProvider>
    </BrowserRouter>
  );
}
