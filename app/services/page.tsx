import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Droplets, Coffee, RefreshCw, Store, FlaskConical, Building2 } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import CTA from '@/components/sections/CTA'
import { SERVICES, SITE_CONFIG } from '@/constants'
import { breadcrumbSchema } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: 'Our Products & Services',
  description: 'Explore BrewCraft Coffee\'s full range — cold brew bottles, fresh roasted beans, monthly subscriptions, custom blends, and corporate coffee supply.',
  alternates: { canonical: `${SITE_CONFIG.url}/services` },
  openGraph: {
    title: 'Products & Services | BrewCraft Coffee',
    description: 'Cold brew, fresh beans, subscriptions, custom blends and more — all crafted to perfection.',
    url: `${SITE_CONFIG.url}/services`,
    images: [{ url: `${SITE_CONFIG.url}/og/og-services.jpg`, width: 1200, height: 630 }],
  },
}

const iconMap: Record<string, React.ElementType> = {
  Droplets, Coffee, RefreshCw, Store, Beaker: FlaskConical, Building2,
}

const serviceDetails = [
  { slug: 'cold-brew-coffee-bottles', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80' },
  { slug: 'fresh-roasted-coffee-beans', image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=800&q=80' },
  { slug: 'monthly-coffee-subscription', image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80' },
  { slug: 'cafe-experience', image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80' },
  { slug: 'custom-coffee-blends', image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=800&q=80' },
  { slug: 'corporate-coffee-supply', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80' },
]

export default function ServicesPage() {
  const breadcrumbs = [
    { name: 'Home', url: SITE_CONFIG.url },
    { name: 'Services', url: `${SITE_CONFIG.url}/services` },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }} />

      {/* Header */}
      <section className="pt-40 pb-20 bg-bg">
        <div className="container-custom text-center">
          <AnimatedSection>
            <nav aria-label="Breadcrumb" className="flex justify-center items-center gap-2 text-xs text-subtle mb-8">
              <Link href="/" className="hover:text-muted transition-colors">Home</Link>
              <span>/</span>
              <span className="text-muted">Services</span>
            </nav>
            <p className="text-xs text-primary uppercase tracking-widest mb-5 font-medium">What We Offer</p>
            <h1 className="font-display mb-6 max-w-2xl mx-auto">
              Crafted for Every<br />
              <span className="text-gradient italic">Coffee Moment</span>
            </h1>
            <p className="text-muted text-xl max-w-xl mx-auto leading-relaxed">
              From your morning ritual to corporate boardrooms — BrewCraft has the perfect coffee solution.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services grid */}
      <section className="section-padding bg-bg-secondary">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, i) => {
              const Icon = iconMap[service.icon] || Coffee
              const detail = serviceDetails.find(d => d.slug === service.slug)
              return (
                <AnimatedSection key={service.slug} delay={i * 0.08}>
                  <Link href={`/services/${service.slug}`} className="group block card-glass rounded-xl overflow-hidden hover:border-[var(--color-border-hover)] transition-all duration-300 hover:-translate-y-1 h-full">
                    <div className="relative aspect-[16/9] overflow-hidden">
                      {detail && (
                        <>
                          <Image
                            src={detail.image}
                            alt={service.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-bg/80 to-transparent" />
                        </>
                      )}
                    </div>
                    <div className="p-7">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                          <Icon className="w-4 h-4 text-primary" />
                        </div>
                      </div>
                      <h2 className="font-display text-xl font-medium text-text group-hover:text-accent transition-colors mb-3">
                        {service.name}
                      </h2>
                      <p className="text-muted text-sm leading-relaxed mb-5">{service.shortDesc}</p>
                      <span className="inline-flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
                        Learn more <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </Link>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
