import Link from 'next/link'
import { title } from 'process'

const projects = [
  {
    id: 1,
    title: '个人博客项目',
    description: '使用 Next.js 和 Tailwind CSS 构建的个人博客网站',
    image: 'img/background2.jpg',
    github: 'https://github.com/yourusername/blog',
    demo: 'https://your-blog-demo.com'
  },
  {
    id:2,
    title:'小鸟飞行游戏',
    description:'使用Java语言编写的小游戏',
    image:'/img/bird.png',
    github:'https://github.com/huuhi/BirdGame',
    demo:'https://pan.quark.cn/s/ea736ef1f425'
  }
  // 添加更多项目...
]

export default function ProjectList() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">我的项目</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <Link 
            href={`/projects/${project.id}`}
            key={project.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

