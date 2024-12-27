import Link from 'next/link'

const articles = [
  { id: 1, title: '第一篇博客文章', excerpt: '这是第一篇博客文章的摘要...' },
  { id: 2, title: '第二篇博客文章', excerpt: '这是第二篇博客文章的摘要...' },
  { id: 3, title: '第三篇博客文章', excerpt: '这是第三篇博客文章的摘要...' },
]

export default function ArticleList() {
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8">最新文章</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <article key={article.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <img
              src={`/placeholder.svg?height=200&width=400&text=Article+${article.id}`}
              alt={article.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{article.excerpt}</p>
              <Link href={`/article/${article.id}`} className="text-primary hover:underline">
                阅读更多
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

