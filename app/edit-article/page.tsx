'use client'

import { useState } from 'react'
import RichTextEditor from '../components/RichTextEditor'

export default function EditArticle() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 这里处理文章提交逻辑，例如发送到服务器或保存到本地存储
    console.log(JSON.stringify({ title, content }))
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">编辑文章</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="文章标题"
          className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
        />
        <RichTextEditor
          initialValue={content}
          onChange={setContent}
        />
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          提交文章
        </button>
      </form>
    </div>
  )
}

