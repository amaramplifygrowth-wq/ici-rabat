import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useParams, Navigate, useLocation } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { ViewMode, Article } from './types';
import { ARTICLES_DATA } from './data/articles';
import { Header } from './components/Header';
import { PosterHero } from './components/PosterHero';
import { HeroMosaic } from './components/HeroMosaic';
import { WayfindingBanner } from './components/WayfindingBanner';
import { HorecaSection } from './components/HorecaSection';
import { ArticleDetail } from './components/ArticleDetail';
import { CategoryPage } from './components/CategoryPage';
import { Footer } from './components/Footer';
import { SEOHead } from './components/SEOHead';

// 1. Helper component to auto-redirect legacy hash URLs to clean path-based URLs
function LegacyHashRedirectHandler() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const rawHash = window.location.hash.replace('#', '').split('?')[0];
      if (rawHash) {
        if (['horeca', 'evenements', 'lifestyle', 'about'].includes(rawHash)) {
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

// 4. Article Detail Route Component
function ArticleDetailRouteWrapper() {
  const { category, slug } = useParams<{ category: string; slug: string }>();
  const navigate = useNavigate();

  const article = ARTICLES_DATA.find((a) => a.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  if (!article) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-24 text-center">
        <h2 className="font-heading font-bold text-3xl text-[#141B33] mb-4">
          Article non trouvé
        </h2>
        <p className="text-[#4A3F2E] mb-8">
          L'article demandé n'existe pas ou l'adresse a été modifiée.
        </p>
        <button
          onClick={() => navigate('/horeca')}
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#141B33] text-white font-bold text-sm rounded-none hover:bg-[#FF2D78] transition-colors cursor-pointer"
        >
          Retour au guide Horeca
        </button>
      </div>
    );
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

  // Not an article or valid category -> redirect to home
  return <Navigate to="/" replace />;
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
        <Routes>
          {/* 1. Homepage */}
          <Route path="/" element={<HomePage />} />

          {/* 2. Categories */}
          <Route path="/horeca" element={<CategoryRouteWrapper view="horeca" />} />
          <Route path="/evenements" element={<CategoryRouteWrapper view="evenements" />} />
          <Route path="/lifestyle" element={<CategoryRouteWrapper view="lifestyle" />} />
          <Route path="/about" element={<CategoryRouteWrapper view="about" />} />

          {/* 3. Category + Article Slug (Clean SEO Paths) */}
          <Route path="/:category/:slug" element={<ArticleDetailRouteWrapper />} />

          {/* 4. Single segment fallback (legacy slugs or 404s) */}
          <Route path="/:slug" element={<RootSlugFallback />} />

          {/* 5. Wildcard fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
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
