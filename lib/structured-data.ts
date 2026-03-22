import { SITE_CONFIG, CONTACT_INFO } from '@/constants'

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_CONFIG.name,
  url: SITE_CONFIG.url,
  logo: `${SITE_CONFIG.url}/icons/logo.png`,
  description: SITE_CONFIG.description,
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: CONTACT_INFO.phone,
    contactType: 'customer service',
    availableLanguage: 'English',
  },
  sameAs: [
    'https://instagram.com/brewcraftcoffee',
    'https://twitter.com/brewcraftcoffee',
    'https://linkedin.com/company/brewcraftcoffee',
  ],
}

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  url: SITE_CONFIG.url,
  name: SITE_CONFIG.name,
  description: SITE_CONFIG.description,
}

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'CafeOrCoffeeShop',
  name: SITE_CONFIG.name,
  url: SITE_CONFIG.url,
  telephone: CONTACT_INFO.phone,
  email: CONTACT_INFO.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Indiranagar',
    addressLocality: 'Bengaluru',
    addressRegion: 'Karnataka',
    postalCode: '560038',
    addressCountry: 'IN',
  },
  openingHours: 'Mo-Sa 08:00-22:00',
  priceRange: '₹₹',
  servesCuisine: 'Coffee',
  image: `${SITE_CONFIG.url}/og/og-default.jpg`,
}

export const faqSchema = (faqs: { q: string; a: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
})

export const articleSchema = (post: {
  title: string; excerpt: string; date: string
  updatedAt?: string; author: string; ogImage?: string; slug: string
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: post.title,
  description: post.excerpt,
  datePublished: post.date,
  dateModified: post.updatedAt || post.date,
  author: { '@type': 'Person', name: post.author },
  publisher: {
    '@type': 'Organization',
    name: SITE_CONFIG.name,
    logo: { '@type': 'ImageObject', url: `${SITE_CONFIG.url}/icons/logo.png` },
  },
  image: post.ogImage || `${SITE_CONFIG.url}/og/og-blog.jpg`,
  mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_CONFIG.url}/blog/${post.slug}` },
})

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: item.name,
    item: item.url,
  })),
})
