import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import CTA from '@/components/sections/CTA'
import { SITE_CONFIG } from '@/constants'
import { breadcrumbSchema } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn the story behind BrewCraft Coffee — how a kitchen experiment in Bengaluru became India\'s most loved premium coffee brand.',
  alternates: { canonical: `${SITE_CONFIG.url}/about` },
  openGraph: {
    title: 'About BrewCraft Coffee',
    description: 'From a small Bengaluru kitchen to 50,000+ customers — the BrewCraft story.',
    url: `${SITE_CONFIG.url}/about`,
    images: [{ url: `${SITE_CONFIG.url}/og/og-about.jpg`, width: 1200, height: 630 }],
  },
}

const values = [
  { title: 'Obsessive Freshness', desc: 'Every bag is roasted to order and shipped within 48 hours. We\'d rather roast less and roast fresh.' },
  { title: 'Ethical Sourcing', desc: 'Direct relationships with farmers in 12 countries. Fair prices, transparent supply chains, sustainable farming.' },
  { title: 'No Compromises', desc: 'We reject batches that don\'t meet our flavor standards. Consistency is earned, not assumed.' },
  { title: 'Coffee for Everyone', desc: 'From first-time cold brew drinkers to seasoned espresso connoisseurs — we brew for every palate.' },
]

export default function AboutPage() {
  const breadcrumbs = [
    { name: 'Home', url: SITE_CONFIG.url },
    { name: 'About', url: `${SITE_CONFIG.url}/about` },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }} />

      {/* Hero */}
      <section className="relative pt-40 pb-24 bg-bg overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1920&q=80"
            alt="BrewCraft coffee roasting process"
            fill className="object-cover opacity-20" sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bg/60 to-bg" />
        </div>
        <div className="relative container-custom text-center">
          <AnimatedSection>
            <nav aria-label="Breadcrumb" className="flex justify-center items-center gap-2 text-xs text-subtle mb-8">
              <Link href="/" className="hover:text-muted transition-colors">Home</Link>
              <span>/</span>
              <span className="text-muted">About</span>
            </nav>
            <p className="text-xs text-primary uppercase tracking-widest mb-5 font-medium">Our Story</p>
            <h1 className="font-display mb-6 max-w-3xl mx-auto">
              Born From a Love<br />
              <span className="text-gradient italic">of Perfect Coffee</span>
            </h1>
            <p className="text-muted text-xl max-w-2xl mx-auto leading-relaxed">
              Started in 2019 in a Bengaluru kitchen. Now brewing rituals for 50,000+ coffee lovers across India.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-bg">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80"
                  alt="BrewCraft founders crafting coffee"
                  fill className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.15} className="space-y-5">
              <p className="text-xs text-primary uppercase tracking-widest font-medium">How It Started</p>
              <h2 className="font-display text-3xl">The First Brew</h2>
              <p className="text-muted leading-relaxed">
                It started with a question: why does cafe coffee taste so much better than what we make at home? Our founder Arjun spent six months testing beans from twelve origins, four different roast levels, and two brewing methods before landing on the formula that became BrewCraft&apos;s signature cold brew.
              </p>
              <p className="text-muted leading-relaxed">
                The first batch sold out in 48 hours through Instagram. The second batch in 24. By 2021, BrewCraft had shipped to every major Indian city. By 2023, we had 50,000 customers and a flagship cafe in Indiranagar, Bengaluru.
              </p>
              <p className="text-muted leading-relaxed">
                The question that started it all still drives every decision we make. We&apos;re just a lot better at answering it now.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-bg-secondary">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-14">
            <p className="text-xs text-primary uppercase tracking-widest mb-4 font-medium">What We Stand For</p>
            <h2 className="font-display">Our <span className="text-gradient italic">Values</span></h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.1}>
                <div className="card-glass rounded-xl p-8 h-full">
                  <h3 className="font-display text-xl text-accent mb-3">{v.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
