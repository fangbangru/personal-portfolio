'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="about" className="min-h-screen py-20 px-6" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <div className="section-number">[01.]</div>
          <h2 className="text-5xl md:text-7xl font-bold mb-12">
            about
          </h2>

          <div className="space-y-6 text-lg md:text-xl text-gray-400 leading-relaxed">
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              I&apos;m a second-year Computer Science student at{' '}
              <span className="text-white font-semibold">McMaster University</span> with a strong
              foundation in programming and software design. Currently maintaining a{' '}
              <span className="text-white font-semibold">3.6 GPA</span> while pursuing my
              Bachelor of Applied Science degree.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Proficient in <span className="text-white font-semibold">Java</span>,{' '}
              <span className="text-white font-semibold">Python</span>,{' '}
              <span className="text-white font-semibold">C++</span>, and{' '}
              <span className="text-white font-semibold">Swift</span>, with hands-on experience
              implementing algorithms, data structures, and object-oriented designs. Experienced in
              relational databases and SQL, software engineering practices, and mobile development.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Strong interest in software and mobile development, actively applying course
              concepts to real-world projects and internships. Passionate about creating
              efficient, user-friendly solutions and continuously learning new technologies.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
