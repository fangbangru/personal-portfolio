'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Loader() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 1
      })
    }, 25)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: progress === 100 ? 0 : 1 }}
      transition={{ duration: 0.5, delay: progress === 100 ? 0.5 : 0 }}
    >
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-8xl font-bold mb-8 text-white">
          <span className="text-gradient">BANGRUI FANG</span>
        </h1>
        <div className="flex items-center justify-center space-x-4">
          <span className="text-2xl font-mono text-gray-400">LOADING</span>
          <motion.span
            className="text-2xl font-mono text-white"
            key={progress}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {String(progress).padStart(3, '0')}%
          </motion.span>
        </div>
      </motion.div>
      
      <motion.div
        className="absolute bottom-20 w-96 h-1 bg-gray-800 rounded-full overflow-hidden"
        initial={{ width: 0 }}
        animate={{ width: 384 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="h-full bg-white rounded-full"
          style={{ width: `${progress}%` }}
          transition={{ duration: 0.1 }}
        />
      </motion.div>
    </motion.div>
  )
}
