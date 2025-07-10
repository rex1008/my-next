import BlogList from '@/components/blogList'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "博客列表"
}

export default function Page() {
  return (
    <BlogList />
  )
}
