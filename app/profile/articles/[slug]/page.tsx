import fs from 'fs'
import path from 'path'
import { notFound } from 'next/navigation'
import { serialize } from 'next-mdx-remote/serialize'
import PrivateArticleContent from './PrivateArticleContent'

export default async function PrivateArticlePage({ params }: { params: { slug: string } }) {
  const { slug } = params
  const filePath = path.join(process.cwd(), 'private-articles', `${slug}.mdx`)

  if (!fs.existsSync(filePath)) {
    notFound()
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const mdxSource = await serialize(fileContent, { parseFrontmatter: true })

  return (
    <div className="pt-20">
      <PrivateArticleContent source={mdxSource} />
    </div>
  )
}

