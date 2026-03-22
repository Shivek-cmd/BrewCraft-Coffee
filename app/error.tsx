'use client'
import { useEffect } from 'react'
import Link from 'next/link'
import { RefreshCw, ArrowLeft } from 'lucide-react'

export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => { console.error(error) }, [error])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-bg px-4 text-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-error/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="relative max-w-md">
        <p className="font-display text-[8rem] leading-none text-bg-elevated select-none mb-0">!</p>
        <h1 className="font-display text-3xl text-text mb-4 -mt-4">Something went wrong</h1>
        <p className="text-muted text-sm leading-relaxed mb-8">
          An unexpected error occurred. Don&apos;t worry — your coffee subscription is safe. Try refreshing or head back home.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 bg-primary text-bg font-medium px-6 py-3 rounded-full text-sm hover:shadow-glow transition-all"
          >
            <RefreshCw className="w-4 h-4" /> Try again
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 border border-border text-muted hover:text-primary hover:border-primary px-6 py-3 rounded-full text-sm transition-all"
          >
            <ArrowLeft className="w-4 h-4" /> Go home
          </Link>
        </div>
      </div>
    </div>
  )
}
