'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Github, Linkedin, Mail, FileText } from 'lucide-react'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/fangbangru',
      label: 'github.com/fangbangru',
    },
    {
      name: 'Website',
      icon: Linkedin,
      href: 'https://bangruifang.com',
      label: 'bangruifang.com',
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:fangbangrui@gmail.com',
      label: 'fangbangrui@gmail.com',
    },
    {
      name: 'Resume',
      icon: FileText,
      href: '/Bangrui_Fang_Resume.pdf',
      label: 'Download Resume',
    },
  ]

  return (
    <section id="contact" className="min-h-screen py-20 px-6" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <div className="section-number text-center">[05.]</div>
          <h2 className="text-5xl md:text-7xl font-bold mb-8">
            get in touch
          </h2>
          <p className="text-2xl md:text-3xl text-gray-400 mb-12">
            Open to new opportunities and collaborations
          </p>

          <motion.div
            className="grid md:grid-cols-2 gap-6 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {socialLinks.map((link, index) => {
              const Icon = link.icon
              return (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center space-x-4 p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300 overflow-hidden relative"
                  whileHover={{ scale: 1.03, y: -4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10 flex items-center space-x-4 w-full">
                    <div className="p-3 bg-gray-800/50 rounded-lg group-hover:bg-blue-500/20 transition-colors duration-300">
                      <Icon size={28} className="text-white group-hover:text-blue-400 transition-colors duration-300" />
                    </div>
                    <div className="text-left flex-1">
                      <p className="text-white font-semibold text-lg group-hover:text-blue-400 transition-colors duration-300">
                        {link.name}
                      </p>
                      <p className="text-gray-400 text-sm">{link.label}</p>
                    </div>
                    <svg className="w-5 h-5 text-gray-600 group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </motion.a>
              )
            })}
          </motion.div>

          <motion.div
            className="pt-12 border-t border-gray-800"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-gray-500 text-sm">
              © 2024 Bangrui Fang. All rights reserved.
            </p>
            <p className="text-gray-600 text-xs mt-2">
              Built with Next.js, React, Tailwind CSS, and Framer Motion
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
