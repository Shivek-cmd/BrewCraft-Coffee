import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import { getAllPosts } from '@/lib/mdx'
import { formatDate } from '@/lib/utils'
import AnimatedSection from '@/components/ui/AnimatedSection'

export default async function BlogPreview() {
  const posts = getAllPosts().slice(0, 3)

  if (posts.length === 0) return null

  return (
    <section className="section-padding bg-bg">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <AnimatedSection>
            <p className="text-xs text-primary uppercase tracking-widest mb-4 font-medium">From the Journal</p>
            <h2 className="font-display">
              Coffee <span className="text-gradient italic">Stories</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 text-muted hover:text-primary transition-colors text-sm font-medium"
            >
              View all articles
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {posts.map((post, i) => (
            <AnimatedSection key={post.slug} delay={i * 0.1}>
              <Link href={`/blog/${post.slug}`} className="group block card-glass rounded-xl overflow-hidden hover:border-[var(--color-border-hover)] transition-all duration-300 hover:-translate-y-1">
                {/* Image */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={post.ogImage || 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80'}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg/60 to-transparent" />
                  {/* Category badge */}
                  <span className="absolute top-4 left-4 bg-bg-elevated/80 backdrop-blur-sm text-accent text-xs px-3 py-1 rounded-full border border-border">
                    {post.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-subtle text-xs mb-3">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3 h-3" />
                      {formatDate(post.date)}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-medium text-text group-hover:text-accent transition-colors mb-2 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
