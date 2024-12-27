import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const type = searchParams.get('type')

  const directory = type === 'private' ? 'private-articles' : 'articles'
  const files = fs.readdirSync(path.join(process.cwd(), directory))

  const articles = files.map((filename) => {
    const slug = filename.replace('.mdx', '')
    const markdownWithMeta = fs.readFileSync(
      path.join(process.cwd(), directory, filename),
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

