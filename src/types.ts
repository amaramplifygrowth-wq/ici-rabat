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
  relatedBusinessName: string;
  relatedBusinessUrl: string;
  businessDetails?: BusinessDetails;
  isFeaturedHero?: boolean;
  isEditorialPick?: boolean;
  tags: LocalizedString[];
}

export type ViewMode = 'home' | 'horeca' | 'evenements' | 'lifestyle' | 'article' | 'about';
