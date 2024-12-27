import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export async function GET() {
  const files = fs.readdirSync(path.join(process.cwd(), 'private-articles'))

  const articles = files.map((filename) => {
    const slug = filename.replace('.mdx', '')
    const markdownWithMeta = fs.readFileSync(
      path.join(process.cwd(), 'private-articles', filename),
      'utf-8'
    )
    const { data: frontMatter } = matter(markdownWithMeta)
    return {
      slug,
      frontMatter: {
        title: frontMatter.title,
        date: frontMatter.date,
        excerpt: frontMatter.excerpt,
      },
    }
  })

  return NextResponse.json(articles)
}

