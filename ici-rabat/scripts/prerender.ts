import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { ARTICLES_DATA } from '../src/data/articles';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://ici-rabat.pages.dev';

// Official social profiles — tells Google these accounts and the site are
// the same real-world entity ("Ici Rabat"), which feeds into how/whether
// a knowledge panel or brand search result gets built. Add more handles
// here as new official accounts (Facebook, TikTok, ...) go live.
const ORGANIZATION_SAME_AS = ['https://www.instagram.com/icirabatmagazine/'];
const DIST_DIR = path.resolve(__dirname, '../dist');
const TEMPLATE_PATH = path.join(DIST_DIR, 'index.html');

interface RouteMeta {
  path: string;
  title: string;
  description: string;
  image: string;
  type: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  authorName?: string;
  jsonLd?: object;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function generateHtmlForRoute(template: string, meta: RouteMeta): string {
  const canonicalUrl = meta.path === '' ? `${BASE_URL}/` : `${BASE_URL}/${meta.path}`;
  const frUrl = meta.path === '' ? `${BASE_URL}/?lang=fr` : `${BASE_URL}/${meta.path}?lang=fr`;
  const arUrl = meta.path === '' ? `${BASE_URL}/?lang=ar` : `${BASE_URL}/${meta.path}?lang=ar`;
  const enUrl = meta.path === '' ? `${BASE_URL}/?lang=en` : `${BASE_URL}/${meta.path}?lang=en`;
  const xDefaultUrl = canonicalUrl;

  let html = template;

  // 1. Replace <title>
  html = html.replace(/<title>.*?<\/title>/is, `<title>${escapeHtml(meta.title)}</title>`);

  // 2. Remove existing meta description, og tags, twitter tags, canonical, hreflangs
  html = html.replace(/<meta\s+name="description"\s+content=".*?"\s*\/?>/gi, '');
  html = html.replace(/<meta\s+property="og:[^"]*"\s+content=".*?"\s*\/?>/gi, '');
  html = html.replace(/<meta\s+name="twitter:[^"]*"\s+content=".*?"\s*\/?>/gi, '');
  html = html.replace(/<link\s+rel="canonical"\s+href=".*?"\s*\/?>/gi, '');
  html = html.replace(/<link\s+rel="alternate"\s+hreflang=".*?"\s+href=".*?"\s*\/?>/gi, '');
  html = html.replace(/<script\s+type="application\/ld\+json">.*?<\/script>/gis, '');

  // 3. Construct new head tags block
  const headTags = `
    <!-- Pre-rendered SEO Meta Tags -->
    <meta name="description" content="${escapeHtml(meta.description)}" />
    <link rel="canonical" href="${canonicalUrl}" />
    <link rel="alternate" hreflang="fr" href="${frUrl}" />
    <link rel="alternate" hreflang="ar" href="${arUrl}" />
    <link rel="alternate" hreflang="en" href="${enUrl}" />
    <link rel="alternate" hreflang="x-default" href="${xDefaultUrl}" />

    <!-- Open Graph / Facebook / WhatsApp -->
    <meta property="og:type" content="${meta.type}" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="og:title" content="${escapeHtml(meta.title)}" />
    <meta property="og:description" content="${escapeHtml(meta.description)}" />
    <meta property="og:image" content="${escapeHtml(meta.image)}" />
    <meta property="og:site_name" content="Ici Rabat" />
    <meta property="og:locale" content="fr_FR" />

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="${canonicalUrl}" />
    <meta name="twitter:title" content="${escapeHtml(meta.title)}" />
    <meta name="twitter:description" content="${escapeHtml(meta.description)}" />
    <meta name="twitter:image" content="${escapeHtml(meta.image)}" />
    ${meta.publishedTime ? `<meta property="article:published_time" content="${meta.publishedTime}" />` : ''}
    ${meta.modifiedTime ? `<meta property="article:modified_time" content="${meta.modifiedTime}" />` : ''}
    ${meta.authorName ? `<meta property="article:author" content="${escapeHtml(meta.authorName)}" />` : ''}
    ${
      meta.jsonLd
        ? `<script type="application/ld+json">\n${JSON.stringify(meta.jsonLd, null, 2)}\n</script>`
        : ''
    }
  `;

  // Insert before </head>
  html = html.replace('</head>', `${headTags}\n  </head>`);
  return html;
}

async function runPrerender() {
  console.log('🚀 Starting Static Pre-rendering for Ici Rabat...');

  if (!fs.existsSync(TEMPLATE_PATH)) {
    console.error(`❌ Error: Template file not found at ${TEMPLATE_PATH}. Run "vite build" first.`);
    process.exit(1);
  }

  const template = fs.readFileSync(TEMPLATE_PATH, 'utf-8');
  const defaultImage = `${BASE_URL}/og-cover.jpg`;

  const routes: RouteMeta[] = [];

  // 1. Homepage
  routes.push({
    path: '',
    title: 'Ici Rabat | Magazine Urbain & Horeca',
    description: "Magazine en ligne trilingue dédié à l'art de vivre, la gastronomie et la culture de Rabat.",
    image: defaultImage,
    type: 'website',
    jsonLd: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebSite',
          '@id': `${BASE_URL}/#website`,
          url: `${BASE_URL}/`,
          name: 'Ici Rabat',
          alternateName: ['Ici Rabat Magazine', 'ici-rabat'],
          description: "Magazine urbain et guide de référence de la capitale marocaine.",
          publisher: { '@id': `${BASE_URL}/#organization` },
          inLanguage: ['fr', 'ar', 'en']
        },
        {
          '@type': 'Organization',
          '@id': `${BASE_URL}/#organization`,
          name: 'Ici Rabat',
          alternateName: ['Ici Rabat Magazine'],
          url: `${BASE_URL}/`,
          logo: `${BASE_URL}/icon-512.png`,
          sameAs: ORGANIZATION_SAME_AS
        }
      ]
    }
  });

  // Breadcrumb name shown for each category in Google's search-result
  // breadcrumb trail (Home > Category > Article) — kept short, not the
  // full SEO <title>.
  const CATEGORY_BREADCRUMB_LABEL: Record<string, string> = {
    horeca: 'Horeca & Tables',
    commander: 'Commander',
    evenements: 'Événements',
    lifestyle: 'Lifestyle',
    sortir: 'Sortir',
    about: 'À Propos'
  };

  function breadcrumbList(items: { name: string; url: string }[]) {
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.url
      }))
    };
  }

  // 2. Fixed Category Pages
  routes.push({
    path: 'horeca',
    title: 'Guide Horeca & Bonnes Tables à Rabat | Ici Rabat',
    description: 'Découvrez les meilleures tables, restaurants d’auteurs et cafés de spécialité à Rabat (Agdal, Hassan, Souissi, Oudayas).',
    image: defaultImage,
    type: 'website',
    jsonLd: breadcrumbList([
      { name: 'Accueil', url: `${BASE_URL}/` },
      { name: CATEGORY_BREADCRUMB_LABEL.horeca, url: `${BASE_URL}/horeca` }
    ])
  });

  routes.push({
    path: 'commander',
    title: 'Commander Directement dans les Restaurants de Rabat | Ici Rabat',
    description: "Commandez directement auprès des restaurants de Rabat qui gèrent eux-mêmes leurs livraisons, sans commission d'application tierce.",
    image: defaultImage,
    type: 'website',
    jsonLd: breadcrumbList([
      { name: 'Accueil', url: `${BASE_URL}/` },
      { name: CATEGORY_BREADCRUMB_LABEL.commander, url: `${BASE_URL}/commander` }
    ])
  });

  routes.push({
    path: 'evenements',
    title: 'Événements & Agenda Culturel à Rabat | Ici Rabat',
    description: 'Festivals d’exception, biennales d’art contemporain et soirées musicales dans les lieux historiques de la capitale.',
    image: defaultImage,
    type: 'website',
    jsonLd: breadcrumbList([
      { name: 'Accueil', url: `${BASE_URL}/` },
      { name: CATEGORY_BREADCRUMB_LABEL.evenements, url: `${BASE_URL}/evenements` }
    ])
  });

  routes.push({
    path: 'lifestyle',
    title: 'Lifestyle & Design Rbati | Ici Rabat',
    description: 'Boutiques de créateurs, ateliers de poterie à Salé, artisanat d’avant-garde et maisons d’hôtes confidentielles.',
    image: defaultImage,
    type: 'website',
    jsonLd: breadcrumbList([
      { name: 'Accueil', url: `${BASE_URL}/` },
      { name: CATEGORY_BREADCRUMB_LABEL.lifestyle, url: `${BASE_URL}/lifestyle` }
    ])
  });

  routes.push({
    path: 'sortir',
    title: 'Sortir à Rabat : Bars, Rooftops & Clubs | Ici Rabat',
    description: 'Bars à cocktails, rooftops et lounges à Rabat — la rubrique nocturne d’Ici Rabat, adresses vérifiées bientôt disponibles.',
    image: defaultImage,
    type: 'website',
    jsonLd: breadcrumbList([
      { name: 'Accueil', url: `${BASE_URL}/` },
      { name: CATEGORY_BREADCRUMB_LABEL.sortir, url: `${BASE_URL}/sortir` }
    ])
  });

  routes.push({
    path: 'about',
    title: "À Propos d'Ici Rabat | Magazine Urbain",
    description: 'Ligne éditoriale indépendante, engagement pour le patrimoine rbati et curation exigeante des adresses incontournables.',
    image: defaultImage,
    type: 'website',
    jsonLd: breadcrumbList([
      { name: 'Accueil', url: `${BASE_URL}/` },
      { name: CATEGORY_BREADCRUMB_LABEL.about, url: `${BASE_URL}/about` }
    ])
  });

  // 3. Dynamic Articles from articles.ts (Automatically scales with new articles)
  for (const article of ARTICLES_DATA) {
    const articlePath = `${article.category}/${article.slug}`;
    const articleUrl = `${BASE_URL}/${articlePath}`;
    const articleImage = article.heroImage || defaultImage;

    // Build Schema.org Graph for Article
    const schemaGraph: any[] = [
      {
        '@type': 'NewsArticle',
        '@id': `${articleUrl}/#article`,
        isPartOf: {
          '@type': 'WebSite',
          name: 'Ici Rabat',
          url: `${BASE_URL}/`
        },
        headline: article.title.fr,
        description: article.excerpt.fr,
        image: [articleImage],
        datePublished: article.publishedAt || '2026-08-16',
        dateModified: article.publishedAt || '2026-08-16',
        inLanguage: 'fr',
        author: {
          '@type': 'Person',
          name: article.author?.name || 'Rédaction Ici Rabat',
          jobTitle: article.author?.role?.fr || 'Chroniqueur Urbain'
        },
        publisher: {
          '@type': 'Organization',
          name: 'Ici Rabat',
          url: `${BASE_URL}/`
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': articleUrl
        }
      }
    ];

    if (article.businessDetails) {
      const biz = article.businessDetails;
      const bizType = article.category === 'horeca' ? 'Restaurant' : 'LocalBusiness';
      const bizAddress = typeof biz.address === 'string' ? biz.address : ((biz.address as any)?.fr || '');
      const bizSchema: any = {
        '@type': bizType,
        '@id': `${articleUrl}/#business`,
        name: biz.name,
        address: {
          '@type': 'PostalAddress',
          streetAddress: bizAddress,
          addressLocality: 'Rabat',
          addressRegion: 'Rabat-Salé-Kénitra',
          addressCountry: 'MA'
        }
      };

      if (biz.priceLevel) {
        bizSchema.priceRange = biz.priceLevel;
      }
      if (biz.phone) {
        bizSchema.telephone = biz.phone;
      }
      if (biz.websiteUrl) {
        bizSchema.url = biz.websiteUrl;
      }
      if (biz.servesCuisine) {
        bizSchema.servesCuisine = biz.servesCuisine;
      }
      if (biz.aggregateRating) {
        bizSchema.aggregateRating = {
          '@type': 'AggregateRating',
          ratingValue: biz.aggregateRating.ratingValue,
          reviewCount: biz.aggregateRating.reviewCount || 100,
          bestRating: biz.aggregateRating.bestRating || 5
        };
      }

      schemaGraph.push(bizSchema);
    }

    if (article.faq && article.faq.length > 0) {
      schemaGraph.push({
        '@type': 'FAQPage',
        mainEntity: article.faq.map((item) => ({
          '@type': 'Question',
          name: item.question.fr,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer.fr
          }
        }))
      });
    }

    schemaGraph.push({
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: `${BASE_URL}/` },
        {
          '@type': 'ListItem',
          position: 2,
          name: CATEGORY_BREADCRUMB_LABEL[article.category] || article.categoryLabel.fr,
          item: `${BASE_URL}/${article.category}`
        },
        { '@type': 'ListItem', position: 3, name: article.title.fr, item: articleUrl }
      ]
    });

    const pubDate = article.publishedAt || '2026-08-16';
    const pageTitle = typeof article.metaTitle === 'string'
      ? article.metaTitle
      : (article.metaTitle?.fr || `${article.title.fr} | Ici Rabat`);
    const pageDescription = typeof article.metaDescription === 'string'
      ? article.metaDescription
      : (article.metaDescription?.fr || article.excerpt.fr);

    routes.push({
      path: articlePath,
      title: pageTitle,
      description: pageDescription,
      image: articleImage,
      type: 'article',
      publishedTime: pubDate,
      modifiedTime: pubDate,
      authorName: article.author?.name || 'Ici Rabat',
      jsonLd: {
        '@context': 'https://schema.org',
        '@graph': schemaGraph
      }
    });
  }

  // 4. Generate all HTML files
  let generatedCount = 0;

  for (const route of routes) {
    const renderedHtml = generateHtmlForRoute(template, route);

    let targetFile: string;
    if (route.path === '') {
      targetFile = TEMPLATE_PATH; // Update root index.html with homepage tags
    } else {
      const routeDir = path.join(DIST_DIR, route.path);
      fs.mkdirSync(routeDir, { recursive: true });
      targetFile = path.join(routeDir, 'index.html');
    }

    fs.writeFileSync(targetFile, renderedHtml, 'utf-8');
    generatedCount++;
    console.log(`  ✓ Generated [${route.type}]: ${route.path === '' ? '/' : '/' + route.path}`);
  }

  console.log(`\n✨ Static pre-rendering completed successfully! Generated ${generatedCount} static routes.`);

  // 5. Sitemap — generated from this same `routes` list so it can never go
  // stale again (it used to be a hand-maintained public/sitemap.xml that
  // silently fell behind every time a new page was added).
  generateSitemap(routes);
}

function priorityFor(route: RouteMeta): { priority: string; changefreq: string } {
  if (route.path === '') return { priority: '1.0', changefreq: 'daily' };
  if (route.path === 'horeca' || route.path === 'commander') {
    return { priority: '0.9', changefreq: 'daily' };
  }
  if (route.path === 'evenements' || route.path === 'lifestyle') {
    return { priority: '0.8', changefreq: 'weekly' };
  }
  if (route.path === 'about') return { priority: '0.5', changefreq: 'monthly' };
  if (route.type === 'article' && route.path.startsWith('horeca/')) {
    return { priority: '0.9', changefreq: 'weekly' };
  }
  if (route.type === 'article') return { priority: '0.7', changefreq: 'monthly' };
  return { priority: '0.6', changefreq: 'monthly' };
}

function generateSitemap(routes: RouteMeta[]): void {
  const today = new Date().toISOString().slice(0, 10);

  const urlEntries = routes
    .map((route) => {
      const loc = route.path === '' ? `${BASE_URL}/` : `${BASE_URL}/${route.path}`;
      const { priority, changefreq } = priorityFor(route);
      const lastmod = route.modifiedTime || route.publishedTime || today;

      const hreflangs = ['fr', 'ar', 'en']
        .map((lang) => {
          const href = route.path === '' ? `${BASE_URL}/?lang=${lang}` : `${BASE_URL}/${route.path}?lang=${lang}`;
          return `    <xhtml:link rel="alternate" hreflang="${lang}" href="${href}"/>`;
        })
        .join('\n');

      return `  <url>
    <loc>${loc}</loc>
${hreflangs}
    <xhtml:link rel="alternate" hreflang="x-default" href="${loc}"/>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
    })
    .join('\n\n');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">

${urlEntries}

</urlset>
`;

  fs.writeFileSync(path.join(DIST_DIR, 'sitemap.xml'), sitemap, 'utf-8');
  console.log(`  ✓ Generated sitemap.xml with ${routes.length} URLs`);
}

runPrerender().catch((err) => {
  console.error('❌ Prerender failed:', err);
  process.exit(1);
});
