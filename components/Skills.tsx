'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        'Java',
        'Python',
        'C++',
        'C',
        'Swift',
        'JavaScript',
        'Haskell',
        'PHP',
      ],
    },
    {
      title: 'Web Development',
      skills: [
        'HTML/CSS',
        'JavaScript',
        'SwiftUI',
        'Next.js',
        'React',
        'Tailwind CSS',
      ],
    },
    {
      title: 'Databases & Tools',
      skills: [
        'MySQL',
        'SQL',
        'Git',
        'Arduino',
        'MATLAB',
        'AutoCAD',
      ],
    },
    {
      title: 'Core Competencies',
      skills: [
        'Data Structures & Algorithms',
        'Object-Oriented Design',
        'Software Engineering',
        'Computer Architecture',
        'Concurrent Systems',
        'Databases',
      ],
    },
    {
      title: 'Development Practices',
      skills: [
        'Requirements Engineering',
        'Software Modeling',
        'Design Patterns',
        'Architectural Design',
        'Testing & Implementation',
        'Version Control',
      ],
    },
    {
      title: 'Mobile & Embedded',
      skills: [
        'iOS Development',
        'SwiftUI',
        'ExternalAccessory Framework',
        'Arduino Programming',
        'Sensor Integration',
        'Robotics',
      ],
    },
  ]

  return (
    <section id="skills" className="min-h-screen py-20 px-6" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <div className="section-number">[04.]</div>
          <h2 className="text-5xl md:text-7xl font-bold mb-12">
            skills
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 p-6 rounded-xl border border-gray-800 overflow-hidden hover:border-blue-500/50 transition-all duration-500"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.9 }
                }
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full" />
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <motion.span
                      key={i}
                      className="px-3 py-1.5 bg-gray-800/50 text-gray-300 text-sm rounded-lg hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-cyan-500/20 hover:text-white hover:border-blue-400/30 border border-transparent transition-all cursor-default"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
