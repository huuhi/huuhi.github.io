'use client'

import { useState, useEffect } from 'react'

export default function Hero() {
  const [text, setText] = useState('')
  const fullText = '欢迎来到我的博客！'

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      setText(fullText.slice(0, index))
      index++
      if (index > fullText.length) {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative h-screen">
      <img
        src="/placeholder.svg?height=1080&width=1920"
        alt="Hero background"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <h1 className="text-white text-4xl md:text-6xl font-bold">
          {text}
        </h1>
      </div>
    </div>
  )
}

