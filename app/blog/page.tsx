import type { Metadata } from 'next'
import { getAllPosts, getAllCategories } from '@/lib/mdx'
import { SITE_CONFIG } from '@/constants'
import BlogList from '@/components/blog/BlogList'
import AnimatedSection from '@/components/ui/AnimatedSection'
import Breadcrumb from '@/components/ui/Breadcrumb'

export const metadata: Metadata = {
  title: 'Coffee Blog — Brew Guides, Tips & Stories',
  description: 'Explore BrewCraft\'s coffee blog for brew guides, origin stories, subscription tips, and everything you need to elevate your coffee ritual.',
  alternates: { canonical: `${SITE_CONFIG.url}/blog` },
  openGraph: {
    title: 'Coffee Blog | BrewCraft Coffee',
    description: 'Brew guides, origin stories, and coffee rituals from the BrewCraft team.',
    url: `${SITE_CONFIG.url}/blog`,
    images: [{ url: `${SITE_CONFIG.url}/og/og-blog.jpg`, width: 1200, height: 630 }],
  },
}

export default function BlogPage() {
  const posts = getAllPosts()
  const categories = ['All', ...getAllCategories()]

  return (
    <div className="min-h-screen pt-24">
      <section className="section-padding">
        <div className="container-custom">
          <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog' }]} />

          <AnimatedSection className="mb-14">
            <p className="text-xs text-primary uppercase tracking-widest mb-4 font-medium">The BrewCraft Journal</p>
            <h1 className="font-display mb-4">
              Coffee <span className="text-gradient italic">Stories</span>
            </h1>
            <p className="text-muted text-lg max-w-xl">
              Brew guides, origin stories, and the rituals that make every cup worth drinking.
            </p>
          </AnimatedSection>

          {/* Category pills */}
          <AnimatedSection delay={0.1} className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <span
                key={cat}
                className="text-xs font-medium px-4 py-2 rounded-full border border-border text-muted hover:border-primary hover:text-primary transition-all cursor-pointer"
              >
                {cat}
              </span>
            ))}
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <BlogList posts={posts} />
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
