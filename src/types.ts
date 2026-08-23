export type Language = 'fr' | 'ar' | 'en';

export interface LocalizedString {
  fr: string;
  ar: string;
  en: string;
}

export interface LocalizedParagraphs {
  fr: string[];
  ar: string[];
  en: string[];
}

export interface GalleryItem {
  url: string;
  caption: LocalizedString;
  credit?: string;
}

export interface BusinessDetails {
  name: string;
  category: LocalizedString;
  neighborhood: LocalizedString;
  address: string;
  priceLevel: '€' | '€€' | '€€€' | '€€€€';
  openingHours: LocalizedString;
  websiteUrl: string;
  instagramUrl?: string;
  phone?: string;
  specialty: LocalizedString;
  servesCuisine?: string;
  aggregateRating?: {
    ratingValue: number;
    reviewCount?: number;
    bestRating?: number;
  };
  whatsapp?: string;
  /**
   * Set to true only for restaurants that already run their own direct-order
   * channel (a WhatsApp catalog, their own ordering site, etc.). Drives
   * inclusion in the "Commander" directory — we never list a restaurant
   * there that can't actually take an order yet.
   */
  directOrderEnabled?: boolean;
  /** Where the "Commander" CTA sends the customer. Falls back to whatsapp/websiteUrl if omitted. */
  directOrderUrl?: string;
  /** Nightlife-specific practical info — used by "Sortir" venues (bars, clubs, lounges), left unset for restaurants. */
  musicGenre?: string;
  entryFee?: LocalizedString;
  dressCode?: LocalizedString;
  ageMinimum?: string;
}

export interface Article {
  id: string;
  slug: string;
  metaTitle?: LocalizedString | string;
  metaDescription?: LocalizedString | string;
  category: 'horeca' | 'evenements' | 'lifestyle' | 'sortir';
  categoryLabel: LocalizedString;
  title: LocalizedString;
  subtitle?: LocalizedString;
  excerpt: LocalizedString;
  body: LocalizedParagraphs;
  pullQuote?: {
    text: LocalizedString;
    author: LocalizedString;
  };
  heroImage: string;
  heroOverlapImage?: string;
  heroImageCaption: LocalizedString;
  galleryImages: GalleryItem[];
  publishedAt: string;
  readTime: LocalizedString;
  location: LocalizedString;
  author: {
    name: string;
    role: LocalizedString;
    avatar: string;
  };
  /** Only set for business-feature articles (e.g. an Amplify partner). Editorial/guide articles that aren't about one business omit these. */
  relatedBusinessName?: string;
  relatedBusinessUrl?: string;
  businessDetails?: BusinessDetails;
  isFeaturedHero?: boolean;
  isEditorialPick?: boolean;
  /** Marks a sponsored/partner feature (e.g. an Amplify client). Always show `partnerLabel` visibly — never blend partner content invisibly into organic editorial. */
  isPartner?: boolean;
  partnerLabel?: LocalizedString;
  tags: LocalizedString[];
  /**
   * Slugs of specific articles to feature in "related stories" instead of
   * just whatever was published most recently — lets us deliberately link
   * topically-related pieces to each other (e.g. the two student-guide
   * episodes, or a guide linking to the restaurants it names) for SEO
   * internal-linking and reader relevance. Falls back to most-recent when
   * omitted or when a slug can't be found.
   */
  relatedSlugs?: string[];
  /**
   * Optional Q&A pairs drawn from facts already stated in this article's
   * body (never invented separately) — rendered as FAQPage structured
   * data so Google can surface them as an expandable rich result for
   * question-shaped searches ("combien coûte...", "comment...").
   */
  faq?: { question: LocalizedString; answer: LocalizedString }[];
}

export type ViewMode = 'home' | 'horeca' | 'evenements' | 'lifestyle' | 'article' | 'about' | 'commander' | 'sortir';
