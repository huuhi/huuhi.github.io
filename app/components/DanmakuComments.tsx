'use client'

import { useState, useEffect, useRef } from 'react'

interface Comment {
  id: number
  text: string
  color: string
}

export default function DanmakuComments() {
  const [comments, setComments] = useState<Comment[]>([])
  const [newComment, setNewComment] = useState('')
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const storedComments = localStorage.getItem('comments')
    if (storedComments) {
      setComments(JSON.parse(storedComments))
    }
  }, [])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const animateComment = (comment: Comment) => {
      const element = document.createElement('div')
      element.textContent = comment.text
      element.style.position = 'absolute'
      element.style.whiteSpace = 'nowrap'
      element.style.color = comment.color
      element.style.top = `${Math.random() * 90}%`
      element.style.right = '-100%'
      element.style.transition = 'transform 10s linear'
      container.appendChild(element)

      setTimeout(() => {
        element.style.transform = 'translateX(-200%)'
      }, 100)

      setTimeout(() => {
        container.removeChild(element)
      }, 10000)
    }

    comments.forEach(animateComment)

    const interval = setInterval(() => {
      comments.forEach(animateComment)
    }, 10000)

    return () => clearInterval(interval)
  }, [comments])

  const addComment = () => {
    if (newComment.trim()) {
      const comment: Comment = {
        id: Date.now(),
        text: newComment,
        color: `hsl(${Math.random() * 360}, 100%, 50%)`
      }
      const updatedComments = [...comments, comment]
      setComments(updatedComments)
      localStorage.setItem('comments', JSON.stringify(updatedComments))
      setNewComment('')
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      addComment()
    }
  }

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">留言板</h2>
      <div ref={containerRef} className="relative h-64 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden mb-4">
        {/* Comments will be dynamically added here */}
      </div>
      <div className="flex">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          onKeyPress={handleKeyPress}
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

