'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Github } from 'lucide-react'

interface Project {
  title: string
  category: string
  tags: string[]
  description: string
  achievements: string
  links: {
    demo?: string
    github?: string
  }
}

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const projects: Project[] = [
    {
      title: 'ToolHub - Developer Tools Collection',
      category: 'Web Application',
      tags: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'React', 'SSG'],
      description:
        'A comprehensive collection of free online developer tools designed for developers and designers. Features 20+ tools including JSON formatter, Base64 encoder/decoder, hash generator, JWT parser, password generator, text utilities, and QR code generator. Built with privacy-first approach - all processing happens locally in the browser with no data collection. Achieved 50,000+ monthly users with 4.9/5 user satisfaction rating.',
      achievements: '50,000+ monthly users • Featured on Product Hunt, Hacker News, Dev.to • 99.9% uptime • <100ms avg processing time',
      links: {
        demo: 'https://toolspark.tools',
        github: 'https://github.com/fangbangru/tools',
      },
    },
    {
      title: 'SiteCheck - Website Performance Monitor',
      category: 'DevOps Tool',
      tags: ['Shell', 'Bash', 'Homebrew', 'CLI', 'Monitoring'],
      description:
        'Professional command-line tool for comprehensive website performance testing and health monitoring. Features ping testing, HTTP status monitoring, performance metrics (DNS, TCP+TLS, TTFB), HTTPS testing, batch processing, and multiple output formats (JSON, CSV). Perfect for CI/CD pipelines, DevOps workflows, and automated monitoring. Available via Homebrew for easy installation.',
      achievements: 'MIT Licensed • Homebrew package • Multi-format output • CI/CD ready • Comprehensive network analysis',
      links: {
        github: 'https://github.com/fangbangru/homebrew-sitecheck',
      },
    },
  ]

  return (
    <section id="projects" className="min-h-screen py-20 px-6" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <div className="section-number">[03.]</div>
          <h2 className="text-5xl md:text-7xl font-bold mb-12">
            projects
          </h2>

          <div className="grid gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 p-8 rounded-2xl border border-gray-800 hover:border-gray-600 transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-3xl font-bold text-white">
                      {project.title}
                    </h3>
                    <div className="flex space-x-4">
                      {project.links.demo && (
                        <a
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-white transition-colors"
                        >
                          <ExternalLink size={24} />
                        </a>
                      )}
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-white transition-colors"
                        >
                          <Github size={24} />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 font-mono mb-4">
                    # {project.category}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      overview
                    </h4>
                    <p className="text-gray-400 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-gray-800">
                    <p className="text-green-400 font-semibold">
                      ✓ {project.achievements}
                    </p>
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
