import { notFound } from 'next/navigation'
import Link from 'next/link'
import { title } from 'process'
import { deserialize } from 'v8'
import { DESTRUCTION } from 'dns'
import { Content } from 'next/font/google'

const projects = [
  {
    id: 1,
    title: '个人博客项目',
    description: '使用 Next.js 和 Tailwind CSS 构建的个人博客网站',
    content: `
      这是一个使用 Next.js 和 Tailwind CSS 构建的个人博客网站。
      
      ## 主要功能
      - 响应式设计
      - 暗色模式支持
      - 文章管理
      - 项目展示
      
      ## 技术栈
      - Next.js
      - React
      - Tailwind CSS
      - TypeScript
    `,
    image: '/img/background1.jpg',
    github: 'https://github.com/yourusername/blog',
    demo: 'https://your-blog-demo.com'
  },
  {
    id:2,
    title:'小鸟飞行游戏',
    description:'使用Java语言编写的小游戏',
    content:
    `这是一个使用Java核心知识编写的小游戏，目的是复习Java基础
    ##主要功能
    -玩家通过WASD控制角色移动
    -q控制音乐
    -j发射子弹
    -e释放技能

    ##核心知识
    -面向对象编程
    -GUI编程
    -数据库
    -IO
    -多线程
    `,
    image:'/img/bird.png',
    github:'https://github.com/huuhi/BirdGame',
    demo:'https://pan.quark.cn/s/ea736ef1f425'
  }
  // 添加更多项目...
]

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find(p => p.id === parseInt(params.id))
  
  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen pt-20">
      <article className="max-w-4xl mx-auto px-4 py-12">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover rounded-lg mb-8"
        />
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <div className="flex gap-4 mb-8">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800"
          >
            GitHub
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-400"
          >
            在线演示
          </a>
        </div>
        <div className="prose dark:prose-invert max-w-none">
          {project.content}
        </div>
      </article>
    </main>
  )
}

