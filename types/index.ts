export interface NavItem {
  label: string
  href: string
  dropdown?: NavItem[]
}

export interface SocialLink {
  platform: string
  href: string
  icon: string
}

export interface Service {
  name: string
  slug: string
  shortDesc: string
  icon: string
}

export interface Testimonial {
  name: string
  role: string
  quote: string
  avatar: string
  rating: number
}

export interface FAQ {
  q: string
  a: string
}

export interface Stat {
  value: string
  label: string
}

export interface PricingPlan {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  cta: string
  highlighted: boolean
}

export interface BlogPost {
  title: string
  slug: string
  excerpt: string
  date: string
  updatedAt?: string
  author: string
  authorImage?: string
  category: string
  tags: string[]
  ogImage?: string
  featured?: boolean
  readTime: string
}

export interface SiteConfig {
  name: string
  tagline: string
  description: string
  url: string
  gtmId: string
  locale: string
  themeColor: string
  ogImage: string
}
