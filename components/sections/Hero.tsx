'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1920&q=80"
          alt="BrewCraft premium coffee hero"
          fill
          className="object-cover scale-105"
          priority
          sizes="100vw"
        />
        {/* Multi-layer dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-bg/80 via-bg/60 to-bg" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg/70 via-transparent to-bg/40" />
      </div>

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/8 blur-[120px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 container-custom text-center flex flex-col items-center pt-24">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 border border-border bg-bg-elevated/60 backdrop-blur-sm text-accent text-xs uppercase tracking-[0.2em] px-4 py-2 rounded-full mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          Premium Artisan Coffee · India
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display font-light text-text mb-6 max-w-4xl"
        >
          Not Just Coffee.
          <br />
          <span className="text-gradient italic">It&apos;s a Ritual.</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Experience the art of coffee like never before. BrewCraft delivers bold flavors, smooth textures, and a premium coffee ritual designed for your everyday lifestyle.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <Link
            href="/pricing"
            className="group inline-flex items-center gap-2 bg-primary hover:bg-[var(--color-primary-hover)] text-bg font-medium px-8 py-4 rounded-full transition-all duration-300 hover:shadow-glow text-base"
          >
            Start Your Ritual
            <motion.span
              variants={{ hover: { x: 4 } }}
              className="group-hover:translate-x-1 transition-transform duration-200"
            >
              <ArrowRight className="w-4 h-4" />
            </motion.span>
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 border border-border hover:border-[var(--color-border-hover)] text-text text-base px-8 py-4 rounded-full transition-all duration-300 backdrop-blur-sm bg-white/5"
          >
            Explore Products
          </Link>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-8 mt-16 pt-8 border-t border-border"
        >
          {[
            { value: '50K+', label: 'Happy Customers' },
            { value: '18h', label: 'Cold Brew Steep Time' },
            { value: '12', label: 'Origin Countries' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-2xl md:text-3xl text-accent font-medium">{s.value}</p>
              <p className="text-xs text-subtle uppercase tracking-wider mt-1">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-5 h-5 text-subtle" />
        </motion.div>
      </motion.div>
    </section>
  )
}
