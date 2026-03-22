'use client'
import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { STATS } from '@/constants'
import AnimatedSection from '@/components/ui/AnimatedSection'

function Counter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const duration = 1800
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 16)
    return () => clearInterval(timer)
  }, [isInView, target])

  return <span ref={ref}>{count.toLocaleString('en-IN')}{suffix}</span>
}

export default function Stats() {
  return (
    <section className="section-padding bg-bg relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: 'radial-gradient(circle, var(--color-primary) 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative container-custom">
        <AnimatedSection className="text-center mb-16">
          <p className="text-xs text-primary uppercase tracking-widest mb-4 font-medium">By the Numbers</p>
          <h2 className="font-display">The <span className="text-gradient italic">BrewCraft</span> Impact</h2>
        </AnimatedSection>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { value: 50000, suffix: '+', label: 'Happy Customers', sub: 'across India' },
            { value: 18, suffix: 'h+', label: 'Steep Time', sub: 'per cold brew batch' },
            { value: 12, suffix: '', label: 'Origin Countries', sub: 'single-origin sourcing' },
            { value: 49, suffix: '/5', label: 'Average Rating', sub: 'from 12,000+ reviews', divisor: 10 },
          ].map((s, i) => (
            <AnimatedSection key={s.label} delay={i * 0.1} className="text-center group">
              <div className="card-glass rounded-xl p-8 hover:border-[var(--color-border-hover)] transition-all duration-300 hover:-translate-y-1">
                <p className="font-display text-4xl lg:text-5xl text-accent font-light mb-2">
                  {s.divisor
                    ? <><Counter target={s.value} />{s.suffix}</>
                    : <><Counter target={s.value} />{s.suffix}</>
                  }
                </p>
                <p className="text-text font-medium text-base mb-1">{s.label}</p>
                <p className="text-subtle text-xs uppercase tracking-wider">{s.sub}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
