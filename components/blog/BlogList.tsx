import BlogCard from './BlogCard'
import { BlogCardSkeleton } from '@/components/ui/Skeleton'
import type { BlogPost } from '@/types'

interface Props {
  posts: BlogPost[]
  loading?: boolean
}

export default function BlogList({ posts, loading = false }: Props) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 3 }).map((_, i) => <BlogCardSkeleton key={i} />)}
      </div>
    )
  }

  if (!posts.length) {
    return (
      <div className="text-center py-24">
        <p className="font-display text-2xl text-muted mb-2">No posts yet</p>
        <p className="text-subtle text-sm">Check back soon for fresh content.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <BlogCard key={post.slug} post={post} />
      ))}
    </div>
  )
}
