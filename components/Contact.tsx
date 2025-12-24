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
                  className="flex items-center space-x-4 p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-xl border border-gray-800 hover:border-white transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={32} className="text-white" />
                  <div className="text-left">
                    <p className="text-white font-semibold text-lg">
                      {link.name}
                    </p>
                    <p className="text-gray-400 text-sm">{link.label}</p>
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
