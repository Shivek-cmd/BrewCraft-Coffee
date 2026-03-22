import type { Metadata } from 'next'
import './globals.css'
import GTM, { GTMNoScript } from '@/components/GTM'
import { SITE_CONFIG } from '@/constants'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || SITE_CONFIG.gtmId

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: ['coffee', 'cold brew', 'premium coffee', 'coffee subscription', 'artisan coffee', 'India', 'BrewCraft'],
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    type: 'website',
    locale: SITE_CONFIG.locale,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.description,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630, alt: SITE_CONFIG.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.description,
    images: [SITE_CONFIG.ogImage],
    creator: '@brewcraftcoffee',
  },
  alternates: { canonical: SITE_CONFIG.url },
  verification: { google: 'your-google-verification-code' },
}

const themeScript = `(function(){document.documentElement.setAttribute('data-theme','dark')})()`

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" className="scroll-smooth">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <GTM gtmId={GTM_ID} />
        <link rel="icon" href="/icons/favicon.ico" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <meta name="theme-color" content={SITE_CONFIG.themeColor} />
      </head>
      <body className="grain antialiased">
        <GTMNoScript gtmId={GTM_ID} />
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 bg-primary text-bg px-4 py-2 rounded-md text-sm font-medium">
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
