'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface Article {
  slug: string
  frontMatter: {
    title: string
    date: string
    excerpt: string
  }
}

export default function ArticleList() {
  const [articles, setArticles] = useState<Article[]>([])

  useEffect(() => {
    fetch('/api/articles')
      .then(res => res.json())
      .then(data => setArticles(data))
  }, [])

  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">最新文章</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link 
              href={`/articles/${article.slug}`} 
              key={article.slug}
              className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 mt-2">{article.frontMatter.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{article.frontMatter.excerpt}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{article.frontMatter.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

