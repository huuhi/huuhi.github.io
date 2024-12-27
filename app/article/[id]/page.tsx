import { notFound } from 'next/navigation'
import articles from '../../../public/articles.json'

export default function ArticlePage({ params }: { params: { id: string } }) {
  const article = articles.find(a => a.id === parseInt(params.id))
  
  if (!article) {
    notFound()
  }

  return (
    <main className="min-h-screen pt-20">
      <article className="max-w-4xl mx-auto px-4 py-12">
        <img 
          src={article.image} 
          alt={article.title} 
          className="w-full h-64 object-cover rounded-lg mb-8"
        />
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
          <div className="text-gray-600 dark:text-gray-400">
            <span>{article.date}</span>
          </div>
        </header>
        <div className="prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: article.content }} />
      </article>
    </main>
  )
}

