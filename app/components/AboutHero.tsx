'use client'

import { useState, useEffect } from 'react'

export default function AboutHero() {
  const [text, setText] = useState('')
  const fullText = '关于我'

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
    <div className="relative h-screen flex items-center justify-center">
      <img src="/img/background1.jpg" alt="About" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <h1 className="text-4xl md:text-6xl text-white font-bold z-10">
        {text}
      </h1>
    </div>
  )
}

