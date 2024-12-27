'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Image from 'next/image'

export default function Welcome() {
  const [text, setText] = useState('')
  const fullText = 'welcome to my web！'
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

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

  if (!mounted) return null

  const backgroundImage = resolvedTheme === 'dark' ? '/img/dark.jpg' : '/img/light.jpg'

  return (
    <div className="relative h-screen flex items-center justify-center">
      <Image 
        src={backgroundImage}
        alt="Welcome"
        layout="fill"
        objectFit="cover"
        priority
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <h1 className="text-4xl md:text-6xl text-white font-bold z-10">
        {text}
      </h1>
    </div>
  )
}

