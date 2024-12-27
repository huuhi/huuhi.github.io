'use client'

import { useState } from 'react'
import RichTextEditor from './RichTextEditor'

export default function ArticleEditor() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 处理文章提交逻辑
    console.log({ title, content })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="文章标题"
        className="w-full p-2 border rounded"
      />
      <RichTextEditor
        initialValue={content}
        onChange={setContent}
      />
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
        提交文章
      </button>
    </form>
  )
}

