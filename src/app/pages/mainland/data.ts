import {
  CategoryItem,
  FeatureItem,
  FooterColumn,
  NewsItem,
  Product,
  PromoBanner,
} from './models';

export const FEATURES: FeatureItem[] = [
  {
    icon: 'shield',
    title: '安心購物',
    description: '所有商品均經過嚴格挑選',
  },
  {
    icon: 'truck',
    title: '快速到貨',
    description: '迅速為您排程送貨',
  },
  {
    icon: 'card',
    title: '多元支付',
    description: '支援多種付款方式',
  },
  {
    icon: 'headset',
    title: '專業客服',
    description: '線上客服迅速為您服務',
  },
];

export const CATEGORIES: CategoryItem[] = [
  { name: '血壓血糖', image: '/images/category-bp.png' },
  { name: '熱敷保暖', image: '/images/category-heat.jpg' },
  { name: '臥床照顧', image: '/images/category-bed.png' },
  { name: '行動輔具', image: '/images/category-mobility.png' },
  { name: '電療復健', image: '/images/category-electro.png' },
  { name: '呼吸治療', image: '/images/category-respiratory.jpg' },
  { name: '體重體脂', image: '/images/category-bodycomp.jpg' },
  { name: '健康管理', image: '/images/category-health.jpg' },
  { name: '護理工作', image: '/images/category-nursing.jpg' },
  { name: '保養食品', image: '/images/category-supplement.png' },
];

export const PRODUCTS: Product[] = [
  {
    id: 'bp-basic',
    name: 'Microlife BPA2 Basic 手臂式血壓計',
    image: '/images/product-bp-basic.png',
    price: 1680,
    originalPrice: 1980,
    rating: 4.8,
    reviewCount: 214,
    badge: 'hot',
    tabs: ['hot', 'sale'],
  },
  {
    id: 'wheelchair-km8522',
    name: '康揚 KM-8522 輕量化輪椅',
    image: '/images/product-wheelchair.png',
    price: 18800,
    originalPrice: 22800,
    rating: 4.9,
    reviewCount: 96,
    badge: 'hot',
    tabs: ['hot', 'sale'],
  },
  {
    id: 'apex-mattress',
    name: '雃博 Domus 3 交替式氣墊床',
    image: '/images/product-mattress.jpg',
    price: 12800,
    originalPrice: 15800,
    rating: 4.7,
    reviewCount: 73,
    badge: 'hot',
    tabs: ['hot', 'sale'],
  },
  {
    id: 'care-bed',
    name: '采唐居家用電動照顧床',
    image: '/images/product-carebed.png',
    price: 32800,
    rating: 4.8,
    reviewCount: 58,
    badge: 'hot',
    tabs: ['hot', 'new'],
  },
  {
    id: 'oxygen-5l',
    name: '5L 居家型製氧機',
    image: '/images/product-oxygen.jpg',
    price: 30000,
    originalPrice: 36000,
    rating: 4.6,
    reviewCount: 41,
    badge: 'hot',
    tabs: ['hot', 'sale'],
  },
  {
    id: 'neck-heat',
    name: '頸肩 U 型熱敷墊',
    image: '/images/product-heat.jpg',
    price: 1280,
    originalPrice: 1680,
    rating: 4.5,
    reviewCount: 187,
    badge: 'new',
    tabs: ['new', 'sale'],
  },
  {
    id: 'nebulizer',
    name: '雃博 Bestneb 壓縮噴霧器',
    image: '/images/product-nebulizer.jpg',
    price: 2680,
    rating: 4.6,
    reviewCount: 64,
    badge: 'new',
    tabs: ['new'],
  },
  {
    id: 'oximeter',
    name: 'Wellell 指夾式血氧機',
    image: '/images/product-oximeter.jpg',
    price: 980,
    originalPrice: 1280,
    rating: 4.4,
    reviewCount: 132,
    badge: 'new',
    tabs: ['new', 'sale'],
  },
  {
    id: 'olifuco',
    name: 'Hi-Q 褐立順 EX 益生菌',
    image: '/images/product-supplement.png',
    price: 1880,
    rating: 4.7,
    reviewCount: 89,
    badge: 'new',
    tabs: ['new'],
  },
  {
    id: 'commode',
    name: '扶手便盆椅（收納式）',
    image: '/images/product-commode.jpg',
    price: 1680,
    rating: 4.3,
    reviewCount: 54,
    badge: 'new',
    tabs: ['new'],
  },
];

export const PROMOS: PromoBanner[] = [
  {
    id: 'aids',
    tone: 'sale',
    eyebrow: '輔具優惠',
    title: '輪椅、氣墊床指定款享折扣',
    cta: '立即選購',
    image: '/images/promo-wheelchair.png',
  },
  {
    id: 'care',
    tone: 'member',
    eyebrow: '居家照顧',
    title: '電動床到府說明與保固諮詢',
    cta: '了解更多',
    image: '/images/promo-carebed.png',
  },
];

export const NEWS: NewsItem[] = [
  {
    id: 'n1',
    date: '2024.05.15',
    title: '夏季購物節開跑！全館滿額贈好禮',
    excerpt: '即日起至月底，消費滿額即可獲得限量好禮，還有專屬折扣券可以領取。',
    image: '/images/news-summer.png',
  },
  {
    id: 'n2',
    date: '2024.05.10',
    title: '全新 3C 專區上線，科技生活更簡單',
    excerpt: '精選最新數位商品，從耳機到筆電一次找齊，讓日常效率再升級。',
    image: '/images/news-tech.png',
  },
  {
    id: 'n3',
    date: '2024.05.05',
    title: '春季服飾新品上市，打造時尚穿搭',
    excerpt: '輕盈材質與柔和配色，幫你輕鬆完成這個季節的每一套造型。',
    image: '/images/news-fashion.png',
  },
];

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: '購物指南',
    links: ['新手上路', '付款方式', '配送說明', '退換貨政策'],
  },
  {
    title: '客戶服務',
    links: ['常見問題', '訂單查詢', '聯絡客服', '會員權益'],
  },
  {
    title: '關於我們',
    links: ['品牌故事', '招募人才', '合作提案', '媒體報導'],
  },
];
