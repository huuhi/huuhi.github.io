const links = [
  {
    title: 'GitHub',
    url: 'https://github.com',
    description: '全球最大的代码托管平台',
    icon: '/img/github.png'
  },
  // 添加更多链接...
]

export default function LinksPage() {
  return (
    <main className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold mb-8">友情链接</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={link.icon}
                alt={link.title}
                className="w-12 h-12 mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">{link.title}</h2>
              <p className="text-gray-600 dark:text-gray-300">{link.description}</p>
            </a>
          ))}
        </div>
      </div>
    </main>
  )
}

