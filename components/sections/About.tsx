import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'

export default function About() {
  return (
    <section className="section-padding bg-bg">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <AnimatedSection direction="left" className="relative">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=800&q=80"
                alt="BrewCraft artisan coffee brewing process"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/60 to-transparent" />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-4 card-glass rounded-xl p-5 hidden lg:block">
              <p className="font-display text-3xl text-accent font-medium">2019</p>
              <p className="text-xs text-muted mt-1">Founded in Bengaluru</p>
            </div>
          </AnimatedSection>

          {/* Text side */}
          <AnimatedSection delay={0.15}>
            <p className="text-xs text-primary uppercase tracking-widest mb-4 font-medium">Our Story</p>
            <h2 className="font-display mb-6 text-text">
              Born From a Love<br />
              <span className="text-gradient italic">of Perfect Coffee</span>
            </h2>
            <div className="space-y-4 text-muted leading-relaxed mb-8">
              <p>
                BrewCraft started in 2019 in a small Bengaluru kitchen, with one obsession: what does perfect coffee actually taste like? We spent months sourcing beans from twelve countries, testing roast profiles, and perfecting our 18-hour cold brew process.
              </p>
              <p>
                Today, we&apos;re India&apos;s most loved premium coffee brand — but the obsession hasn&apos;t changed. Every batch we roast, every bottle we fill, every subscription we ship carries that same commitment to making your coffee ritual extraordinary.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6 mb-8 py-6 border-y border-border">
              {[
                { value: '50K+', label: 'Customers served' },
                { value: '12', label: 'Origin countries' },
                { value: '4.9★', label: 'Average rating' },
                { value: '48h', label: 'Farm to cup' },
              ].map((s) => (
                <div key={s.label}>
                  <p className="font-display text-2xl text-accent font-medium">{s.value}</p>
                  <p className="text-xs text-subtle mt-1 uppercase tracking-wider">{s.label}</p>
                </div>
              ))}
            </div>
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 text-primary hover:text-accent transition-colors font-medium"
            >
              Read our full story
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
