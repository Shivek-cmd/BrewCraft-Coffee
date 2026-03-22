import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { breadcrumbSchema } from '@/lib/structured-data'
import { SITE_CONFIG } from '@/constants'

interface BreadcrumbItem { label: string; href: string }

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  const schema = breadcrumbSchema(
    items.map((i) => ({ name: i.label, url: `${SITE_CONFIG.url}${i.href}` }))
  )
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-subtle mb-8 flex-wrap">
        {items.map((item, i) => (
          <span key={item.href} className="flex items-center gap-1.5">
            {i > 0 && <ChevronRight className="w-3 h-3 opacity-40 flex-shrink-0" />}
            {i === items.length - 1
              ? <span className="text-muted">{item.label}</span>
              : <Link href={item.href} className="hover:text-primary transition-colors">{item.label}</Link>
            }
          </span>
        ))}
      </nav>
    </>
  )
}
