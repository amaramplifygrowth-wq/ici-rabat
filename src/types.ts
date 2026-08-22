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
}

export interface Article {
  id: string;
  slug: string;
  metaTitle?: LocalizedString | string;
  metaDescription?: LocalizedString | string;
  category: 'horeca' | 'evenements' | 'lifestyle';
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
}

export type ViewMode = 'home' | 'horeca' | 'evenements' | 'lifestyle' | 'article' | 'about' | 'commander';
