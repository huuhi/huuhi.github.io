import Link from 'next/link'

export default function ProjectsAndLinks() {
  const friendlyLinks = [
    { name: "GitHub", url: "https://github.com" },
    { name: "Stack Overflow", url: "https://stackoverflow.com" },
    { name: "MDN Web Docs", url: "https://developer.mozilla.org" },
  ]

  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">我的项目</h2>
            <Link href="/projects" className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              查看我的项目
            </Link>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">友情链接</h2>
            <ul className="space-y-2">
              {friendlyLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

