'use client'

import { useState, useEffect } from 'react'

const OperationTimer = () => {
  const [timeElapsed, setTimeElapsed] = useState('')

  useEffect(() => {
    const startDate = new Date('2024-12-27T00:00:00') // 设置您的网站开始运营的日期
    
    const updateTimer = () => {
      const now = new Date()
      const difference = now.getTime() - startDate.getTime()

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setTimeElapsed(`${days}天 ${hours}小时 ${minutes}分钟 ${seconds}秒`)
    }

    updateTimer()
    const timer = setInterval(updateTimer, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="bg-gray-100 dark:bg-gray-800 py-4 text-center">
      <p className="text-gray-600 dark:text-gray-300">
        本站已经运行了：{timeElapsed}
      </p>
    </div>
  )
}

export default OperationTimer
