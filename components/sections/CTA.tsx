import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-bg-secondary border-y border-border">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1920&q=80"
          alt="BrewCraft premium coffee experience"
          fill
          className="object-cover opacity-15"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bg-secondary via-bg-secondary/80 to-bg-secondary/60" />
      </div>

      {/* Glow */}
      <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative container-custom py-24 lg:py-32">
        <div className="max-w-2xl">
          <AnimatedSection>
            <p className="text-xs text-primary uppercase tracking-widest mb-5 font-medium">
              Start Today
            </p>
            <h2 className="font-display mb-6">
              Your Perfect Cup<br />
              <span className="text-gradient italic">Awaits You</span>
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-10 max-w-lg">
              Join 50,000+ coffee lovers who&apos;ve made BrewCraft a part of their daily ritual. Subscribe today and get your first batch at 20% off.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/pricing"
                className="group inline-flex items-center justify-center gap-2 bg-primary hover:bg-[var(--color-primary-hover)] text-bg font-medium px-8 py-4 rounded-full transition-all duration-300 hover:shadow-glow text-base"
              >
                Subscribe & Save 20%
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border border-border hover:border-[var(--color-border-hover)] text-text px-8 py-4 rounded-full transition-all duration-300 text-base"
              >
                Talk to us
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
