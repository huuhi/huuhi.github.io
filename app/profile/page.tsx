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
var count=3;
export default function ProfilePage() {
  const [showContent, setShowContent] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [articles, setArticles] = useState<Article[]>([])

  useEffect(() => {
    if (showContent) {
      fetch('/api/private-articles')
        .then(res => res.json())
        .then(data => setArticles(data))
    }
  }, [showContent])


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (password === 'hzjweb'||count<=0) {
      setShowContent(true)
      localStorage.setItem('profile_authenticated', 'true')
    } else {
      count--;
      setError('密码错误，你还有'+count+'次机会')
      setPassword('')
    }
  }

  if (showContent) {
    return (
      <main className="min-h-screen pt-20">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">个人空间</h1>
          {articles.length > 0 ? (
            <div className="grid gap-8">
              {articles.map((article) => (
                <article key={article.slug} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                  <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                    <Link href={`/profile/articles/${article.slug}`}>
                      {article.frontMatter.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300">{article.frontMatter.excerpt}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{article.frontMatter.date}</p>
                </article>
              ))}
            </div>
          ) : (
            <p className="text-gray-600 dark:text-gray-300">暂无私密文章。</p>
          )}
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen pt-20">
      <div className="max-w-md mx-auto px-4 py-12">
        <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">请输入密码</h1>
          <div className="mb-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 text-gray-900 dark:text-white"
              placeholder="输入密码"
            />
          </div>
          {error && (
            <p className="text-red-500 mb-4">{error}</p>
          )}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-400"
          >
            确认
          </button>
        </form>
      </div>
    </main>
  )
}

