import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { Calendar, Clock, ArrowLeft, ArrowRight } from 'lucide-react'
import { getAllPosts, getPostBySlug, getRelatedPosts } from '@/lib/mdx'
import { SITE_CONFIG } from '@/constants'
import { articleSchema, breadcrumbSchema } from '@/lib/structured-data'
import { formatDate } from '@/lib/utils'
import Breadcrumb from '@/components/ui/Breadcrumb'
import BlogCard from '@/components/blog/BlogCard'
import AnimatedSection from '@/components/ui/AnimatedSection'

interface Props { params: { slug: string } }

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const { frontmatter: post } = await getPostBySlug(params.slug)
    return {
      title: post.title,
      description: post.excerpt,
      alternates: { canonical: `${SITE_CONFIG.url}/blog/${params.slug}` },
      openGraph: {
        type: 'article',
        title: post.title,
        description: post.excerpt,
        url: `${SITE_CONFIG.url}/blog/${params.slug}`,
        publishedTime: post.date,
        authors: [post.author],
        images: [{ url: post.ogImage || `${SITE_CONFIG.url}/og/og-blog.jpg`, width: 1200, height: 630 }],
      },
      twitter: {
        card: 'summary_large_image',
        title: post.title,
        description: post.excerpt,
        images: [post.ogImage || `${SITE_CONFIG.url}/og/og-blog.jpg`],
      },
    }
  } catch {
    return {}
  }
}

export default async function BlogPostPage({ params }: Props) {
  let data
  try { data = await getPostBySlug(params.slug) }
  catch { notFound() }

  const { frontmatter: post, content } = data
  const related = getRelatedPosts(params.slug, post.tags || [], 3)
  const schema = articleSchema({ ...post, slug: params.slug })

  return (
    <div className="min-h-screen pt-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <Image
          src={post.ogImage || 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1920&q=80'}
          alt={post.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 container-custom pb-10">
          <span className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-primary/90 text-bg uppercase tracking-wider mb-4">
            {post.category}
          </span>
          <h1 className="font-display text-3xl md:text-5xl font-light text-text max-w-3xl leading-tight">
            {post.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="container-custom py-14">
        <div className="max-w-3xl">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Blog', href: '/blog' },
            { label: post.title, href: `/blog/${params.slug}` },
          ]} />

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-5 text-sm text-subtle mb-12 pb-8 border-b border-border">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />{formatDate(post.date)}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />{post.readTime}
            </span>
            <span className="text-muted font-medium">By {post.author}</span>
          </div>

          {/* MDX Content */}
          <div className="prose-custom">
            <MDXRemote source={content} />
          </div>

          {/* Tags */}
          {post.tags?.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-border">
              {post.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/blog/tag/${tag}`}
                  className="text-xs px-3 py-1 rounded-full border border-border text-muted hover:border-primary hover:text-primary transition-all"
                >
                  #{tag}
                </Link>
              ))}
            </div>
          )}

          {/* Nav */}
          <div className="flex items-center justify-between mt-10 pt-8 border-t border-border">
            <Link href="/blog" className="flex items-center gap-2 text-muted hover:text-primary transition-colors text-sm">
              <ArrowLeft className="w-4 h-4" /> All articles
            </Link>
            <Link href="/contact" className="flex items-center gap-2 text-primary hover:text-accent transition-colors text-sm font-medium">
              Get in touch <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="bg-bg-secondary section-padding">
          <div className="container-custom">
            <AnimatedSection className="mb-10">
              <h2 className="font-display text-3xl">More <span className="text-gradient italic">to Read</span></h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p) => <BlogCard key={p.slug} post={p} />)}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
