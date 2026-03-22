import type { Metadata } from 'next'
import Link from 'next/link'
import { Check, ArrowRight } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { PRICING_PLANS, SITE_CONFIG } from '@/constants'
import { breadcrumbSchema } from '@/lib/structured-data'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Pricing & Subscription Plans',
  description: 'Choose your BrewCraft Coffee subscription. From ₹799/month for occasional drinkers to ₹2,799 for the full connoisseur experience. Cancel anytime.',
  alternates: { canonical: `${SITE_CONFIG.url}/pricing` },
  openGraph: {
    title: 'Coffee Subscription Plans | BrewCraft Coffee',
    description: 'Starter, Ritual, or Connoisseur — find the subscription that matches your coffee ritual.',
    url: `${SITE_CONFIG.url}/pricing`,
    images: [{ url: `${SITE_CONFIG.url}/og/og-pricing.jpg`, width: 1200, height: 630 }],
  },
}

export default function PricingPage() {
  const breadcrumbs = [
    { name: 'Home', url: SITE_CONFIG.url },
    { name: 'Pricing', url: `${SITE_CONFIG.url}/pricing` },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }} />

      {/* Header */}
      <section className="pt-40 pb-20 bg-bg text-center">
        <div className="container-custom">
          <AnimatedSection>
            <nav aria-label="Breadcrumb" className="flex justify-center items-center gap-2 text-xs text-subtle mb-8">
              <Link href="/" className="hover:text-muted transition-colors">Home</Link>
              <span>/</span>
              <span className="text-muted">Pricing</span>
            </nav>
            <p className="text-xs text-primary uppercase tracking-widest mb-5 font-medium">Subscription Plans</p>
            <h1 className="font-display mb-6 max-w-2xl mx-auto">
              Your Ritual,<br />
              <span className="text-gradient italic">Your Plan</span>
            </h1>
            <p className="text-muted text-xl max-w-xl mx-auto leading-relaxed">
              Cancel or pause anytime. Every plan includes free delivery and our roast date guarantee.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="pb-32 bg-bg">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {PRICING_PLANS.map((plan, i) => (
              <AnimatedSection key={plan.name} delay={i * 0.1}>
                <div className={cn(
                  'relative rounded-2xl p-8 lg:p-10 flex flex-col h-full transition-all duration-300',
                  plan.highlighted
                    ? 'bg-bg-elevated border-2 border-primary shadow-glow'
                    : 'card-glass hover:border-[var(--color-border-hover)]'
                )}>
                  {plan.highlighted && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-primary text-bg text-xs font-medium px-4 py-1.5 rounded-full uppercase tracking-widest">
                        Most Popular
                      </span>
                    </div>
                  )}

                  {/* Plan header */}
                  <div className="mb-8">
                    <p className={cn('text-xs uppercase tracking-widest mb-3 font-medium', plan.highlighted ? 'text-accent' : 'text-primary')}>
                      {plan.name}
                    </p>
                    <div className="flex items-end gap-1 mb-3">
                      <span className="font-display text-5xl font-light text-text">{plan.price}</span>
                      <span className="text-muted mb-2 text-sm">{plan.period}</span>
                    </div>
                    <p className="text-muted text-sm">{plan.description}</p>
                  </div>

                  {/* Features */}
                  <ul className="flex flex-col gap-3 mb-8 flex-1">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm">
                        <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    href="/contact"
                    className={cn(
                      'group w-full inline-flex items-center justify-center gap-2 font-medium px-6 py-4 rounded-full transition-all duration-300 text-sm',
                      plan.highlighted
                        ? 'bg-primary hover:bg-[var(--color-primary-hover)] text-bg hover:shadow-glow'
                        : 'border border-border hover:border-primary text-muted hover:text-primary'
                    )}
                  >
                    {plan.cta}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Fine print */}
          <AnimatedSection className="text-center mt-12" delay={0.3}>
            <p className="text-subtle text-sm">
              All plans include free pan-India delivery · No lock-in · Cancel or pause anytime ·{' '}
              <Link href="/contact" className="text-primary hover:text-accent transition-colors">Questions? Talk to us</Link>
            </p>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
