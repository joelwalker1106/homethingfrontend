export type ProductTab = 'hot' | 'new' | 'sale';
export type ProductBadge = 'hot' | 'new';

export interface NavLink {
  label: string;
  href: string;
  active?: boolean;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: 'shield' | 'truck' | 'card' | 'headset';
}

export interface CategoryItem {
  id: string;
  name: string;
  image: string;
  hidePrice?: boolean;
  sortOrder?: number;
}

export interface SpecItem {
  label: string;
  value: string;
}

export interface UsageStep {
  title: string;
  body: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FeatureCard {
  iconKey: string;
  title: string;
  description: string;
}

export interface Product {
  id: string;
  name: string;
  image: string;
  images?: string[];
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  badge?: ProductBadge;
  tabs: ProductTab[];
  category?: string;
  categoryName?: string;
  categoryLabel?: string;
  modelNumber?: string;
  summary?: string;
  description?: string;
  licenseNo?: string;
  hidePrice?: boolean;
  inquiryNote?: string;
  introTitle?: string;
  introBody?: string;
  introImage?: string;
  introBullets?: string[];
  usageSteps?: UsageStep[];
  faqs?: FaqItem[];
  featureCards?: FeatureCard[];
  ctaBannerTitle?: string;
  ctaBannerButton?: string;
  highlights?: string[];
  specs?: SpecItem[];
}

export interface PromoBanner {
  id: string;
  eyebrow: string;
  title: string;
  image: string;
  cta: string;
  tone: 'sale' | 'member';
}

export interface NewsItem {
  id: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
}

export interface FooterColumn {
  title: string;
  links: string[];
}
