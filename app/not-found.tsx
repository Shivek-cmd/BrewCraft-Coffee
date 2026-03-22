import Link from 'next/link'
import { ArrowLeft, Coffee } from 'lucide-react'
import { NAV_LINKS } from '@/constants'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-bg relative overflow-hidden px-4">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/6 blur-[120px] rounded-full pointer-events-none" />

      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: 'radial-gradient(circle, var(--color-primary) 1px, transparent 1px)', backgroundSize: '32px 32px' }}
      />

      <div className="relative text-center max-w-lg">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-bg-elevated border border-border mb-8">
          <Coffee className="w-8 h-8 text-primary" />
        </div>

        {/* 404 */}
        <p className="font-display text-[10rem] leading-none text-bg-elevated select-none mb-0 -mt-4">
          404
        </p>

        <h1 className="font-display text-3xl md:text-4xl text-text mb-4 -mt-4">
          This page went <span className="text-gradient italic">cold brew</span>
        </h1>
        <p className="text-muted text-base leading-relaxed mb-10">
          Looks like this page took a long steep and never came back. Let&apos;s get you back to something warm.
        </p>

        {/* Links */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-primary hover:bg-[var(--color-primary-hover)] text-bg font-medium px-7 py-3.5 rounded-full text-sm transition-all hover:shadow-glow"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 border border-border hover:border-primary text-muted hover:text-primary px-7 py-3.5 rounded-full text-sm transition-all"
          >
            View our plans
          </Link>
        </div>

        {/* Quick links */}
        <div className="flex flex-wrap justify-center gap-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs text-subtle hover:text-muted transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
