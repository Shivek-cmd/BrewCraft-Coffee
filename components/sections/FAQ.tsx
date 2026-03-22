'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { FAQS } from '@/constants'
import { faqSchema } from '@/lib/structured-data'
import AnimatedSection from '@/components/ui/AnimatedSection'

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="section-padding bg-bg">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }}
      />

      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 lg:gap-20">
          {/* Left */}
          <AnimatedSection direction="left" className="lg:sticky lg:top-32 lg:self-start">
            <p className="text-xs text-primary uppercase tracking-widest mb-4 font-medium">FAQ</p>
            <h2 className="font-display mb-6">
              Questions <br />
              <span className="text-gradient italic">Answered</span>
            </h2>
            <p className="text-muted leading-relaxed mb-8">
              Everything you need to know about BrewCraft Coffee — from sourcing to subscription, beans to blends.
            </p>
            <a
              href={`mailto:hello@brewcraftcoffee.in`}
              className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors text-sm font-medium"
            >
              Still have questions? Email us →
            </a>
          </AnimatedSection>

          {/* Right — Accordion */}
          <AnimatedSection delay={0.1}>
            <div className="flex flex-col divide-y divide-border">
              {FAQS.map((faq, i) => (
                <div key={i} className="py-6">
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="w-full flex items-start justify-between gap-4 text-left group"
                    aria-expanded={open === i}
                  >
                    <span className={`font-medium text-base transition-colors ${open === i ? 'text-accent' : 'text-text group-hover:text-accent'}`}>
                      {faq.q}
                    </span>
                    <span className="flex-shrink-0 w-6 h-6 rounded-full border border-border flex items-center justify-center mt-0.5 group-hover:border-primary transition-all">
                      {open === i
                        ? <Minus className="w-3 h-3 text-primary" />
                        : <Plus className="w-3 h-3 text-muted" />
                      }
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {open === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <p className="text-muted text-sm leading-relaxed pt-4 max-w-prose">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
