'use client'

import { useState, useEffect } from 'react'

interface Comment {
  id: number
  text: string
  timestamp: number
}

export default function Comments() {
  const [comments, setComments] = useState<Comment[]>([])
  const [newComment, setNewComment] = useState('')

  useEffect(() => {
    const storedComments = localStorage.getItem('comments')
    if (storedComments) {
      setComments(JSON.parse(storedComments))
    }
  }, [])

  const addComment = () => {
    if (newComment.trim()) {
      const comment: Comment = {
        id: Date.now(),
        text: newComment,
        timestamp: Date.now()
      }
      const updatedComments = [...comments, comment]
      setComments(updatedComments)
      localStorage.setItem('comments', JSON.stringify(updatedComments))
      setNewComment('')
    }
  }

  return (
    <div className="mt-8 bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">留言板</h2>
      <div className="mb-4 max-h-60 overflow-y-auto">
        {comments.map((comment) => (
          <div key={comment.id} className="mb-2 p-2 bg-gray-100 dark:bg-gray-700 rounded">
            <p className="text-gray-800 dark:text-gray-200">{comment.text}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {new Date(comment.timestamp).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="flex-grow px-3 py-2 border rounded-l-md dark:bg-gray-700 dark:border-gray-600 text-gray-900 dark:text-white"
          placeholder="输入你的留言"
        />
        <button
          onClick={addComment}
          className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-400"
        >
          发送
        </button>
      </div>
    </div>
  )
}

