'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

interface ExperienceItem {
  role: string
  company: string
  period: string
  description: string[]
}

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const experiences: ExperienceItem[] = [
    {
      role: 'Firmware & Software Engineer Intern',
      company: 'Phase Advanced Sensor Systems Corp.',
      period: 'April 2025 - August 2025',
      description: [
        'Developed iOS app communicating with hardware phase sensors over Apple Lightning interface using SwiftUI and ExternalAccessory framework',
        'Designed command/response protocol and state machine for safe command transmission, sensor status reading, and connection recovery',
        'Implemented binary decoding and calibration pipeline using C++/Swift interoperability to convert raw frequency data into calibrated pressure and temperature values',
        'Optimized performance by moving heavy decoding work to background queues, preventing UI freezing during large sensor log processing',
        'Built dashboard-style screens with charts, tables, and configuration pages, added JSON/CSV export for easy data exploration and sharing',
      ],
    },
    {
      role: 'Robot Competition Team Member',
      company: 'Sumbot McMaster University',
      period: 'December 2024',
      description: [
        'Collaborated with a team of 4 members to plan and execute a robotics design and development project',
        'Developed robot functionality using Arduino and C++ programming, including sensor integration and control algorithms',
        'Partnered with teammate to write and debug robot code, focusing on sensor integration, motor control, and overall system functionality',
        'Facilitated team meetings, fostering communication and collaborative problem-solving throughout the project',
      ],
    },
  ]

  return (
    <section id="experience" className="min-h-screen py-20 px-6" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <div className="section-number">[02.]</div>
          <h2 className="text-5xl md:text-7xl font-bold mb-12">
            experience
          </h2>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="group relative border-l-2 border-gray-800 hover:border-blue-500 pl-8 pb-12 transition-colors duration-500"
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                {/* Timeline dot */}
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gray-800 border-4 border-[#0a0a0a] group-hover:bg-blue-500 group-hover:scale-125 transition-all duration-300" />
                
                {/* Content card */}
                <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 p-6 rounded-xl border border-gray-800 group-hover:border-blue-500/30 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/10">
                <div className="mb-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-gradient-blue transition-all duration-300">
                    {exp.role}
                  </h3>
                  <div className="flex flex-col md:flex-row md:items-center md:space-x-4 text-gray-400">
                    <span className="text-lg font-semibold text-blue-400">{exp.company}</span>
                    <span className="hidden md:inline text-gray-600">•</span>
                    <span className="text-sm font-mono text-gray-500">{exp.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 text-gray-400">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="flex items-start group/item">
                      <span className="mr-3 mt-1.5 text-blue-400 group-hover/item:text-cyan-400 transition-colors">▹</span>
                      <span className="leading-relaxed group-hover/item:text-gray-300 transition-colors">{desc}</span>
                    </li>
                  ))}
                </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
