'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Droplets, Coffee, RefreshCw, Store, FlaskConical, Building2 } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { SERVICES } from '@/constants'

const iconMap: Record<string, React.ElementType> = {
  Droplets, Coffee, RefreshCw, Store, FlaskConical, Building2,
}

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function Services() {
  return (
    <section className="section-padding bg-bg-secondary">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-16">
          <p className="text-xs text-primary uppercase tracking-widest mb-4 font-medium">What We Offer</p>
          <h2 className="font-display mb-4">
            Our <span className="text-gradient italic">Signature</span> Products
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            From cold brew bottles to corporate supply — every product is crafted with one goal: the perfect cup.
          </p>
        </AnimatedSection>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon] || Coffee
            return (
              <motion.div key={service.slug} variants={item}>
                <Link href={`/services/${service.slug}`} className="group block card-glass rounded-xl p-7 hover:border-[var(--color-border-hover)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-medium text-text mb-3 group-hover:text-accent transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed mb-5">{service.shortDesc}</p>
                  <span className="inline-flex items-center gap-1.5 text-primary text-sm font-medium group-hover:gap-2.5 transition-all">
                    Learn more <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>

        <AnimatedSection className="text-center mt-12" delay={0.2}>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 border border-border hover:border-primary text-muted hover:text-primary px-7 py-3 rounded-full text-sm transition-all duration-300"
          >
            View all products <ArrowRight className="w-4 h-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}
