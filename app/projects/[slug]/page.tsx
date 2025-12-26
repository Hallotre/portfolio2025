'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { projects } from '@/lib/projects'
import { use, useState } from 'react'

export default function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const project = projects[slug]
  const [copied, setCopied] = useState(false)

  if (!project) {
    notFound()
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <>
      {/* Navigation */}
      <motion.nav 
        className="fixed top-0 left-0 right-0 z-50 glass-nav"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container-fluid">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-3 group">
              <motion.span 
                className="text-[#8b6f47] text-xl"
                whileHover={{ x: -4 }}
              >
                ←
              </motion.span>
              <span className="text-2xl font-bold text-[#8b6f47]">HAYWOOD</span>
            </Link>
            
            <motion.button
              onClick={copyToClipboard}
              className="px-5 py-2.5 glass-card rounded font-medium text-sm hover:bg-[#8b6f47]/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {copied ? '✓ Copied!' : 'Share Project'}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        
        <div className="container-fluid relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.h1 
              className="heading-massive mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[#8b6f47]">{project.title}</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {project.shortDescription}
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-neon"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">View Live Site →</span>
              </motion.a>
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-neon"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View on GitHub
              </motion.a>
            </motion.div>

            <motion.div 
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {project.tech.map((tech) => (
                <motion.span
                  key={tech}
                  className="px-4 py-2 bg-[#8b6f47]/10 text-[#a88d65] rounded text-sm font-medium border border-[#8b6f47]/20"
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Image - Full Width Showcase */}
      <section className="py-20 bg-[#1a1a1a]">
        <div className="container-fluid">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <div className="relative rounded overflow-hidden border border-[#8b6f47]/20 image-zoom-container">
              <div className="relative w-full aspect-video">
                {project.image ? (
                  <>
                    <Image
                      src={project.image}
                      alt={project.imageCaption}
                      fill
                      className="object-cover object-top image-zoom"
                      sizes="(max-width: 1200px) 100vw, 1200px"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  </>
                ) : (
                  <div className={`w-full h-full bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                    <div className="text-center text-white p-8">
                      <div className="text-8xl mb-6 floating">📚</div>
                      <div className="text-3xl font-bold mb-3">Project Screenshot</div>
                      <div className="text-xl opacity-80">Coming soon</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <motion.p 
              className="text-gray-500 text-center italic mt-8 text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              {project.imageCaption}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Project Description - Split Layout Style */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-dots opacity-10" />
        
        <div className="container-fluid relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="badge mb-8">Project Overview</span>
              <h2 className="heading-large mb-10">
                <span className="text-[#8b6f47]">About This Project</span>
              </h2>
              <div className="text-gray-400 text-lg leading-relaxed space-y-6 whitespace-pre-line">
                {project.detailedDescription}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reflections - Card Grid */}
      <section className="section-padding relative bg-[#1a1a1a]">
        <div className="absolute inset-0 bg-grid opacity-10" />
        
        <div className="container-fluid relative z-10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="badge mb-6">Reflection</span>
              <h2 className="heading-large">
                <span className="text-[#8b6f47]">Key Insights & Learnings</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Strengths */}
              <motion.div 
                className="card-bento"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#8b6f47]/20 flex items-center justify-center text-2xl">
                    ✓
                  </div>
                  <h3 className="text-2xl font-bold text-white">Strengths</h3>
                </div>
                <ul className="space-y-4">
                  {project.reflections.strengths.map((strength) => (
                    <motion.li 
                      key={strength.substring(0, 30)} 
                      className="text-gray-400 leading-relaxed pl-4 border-l-2 border-[#8b6f47]/30"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                    >
                      {strength}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Improvements */}
              <motion.div 
                className="card-bento"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#a88d65]/20 flex items-center justify-center text-2xl">
                    ↑
                  </div>
                  <h3 className="text-2xl font-bold text-white">Improvements</h3>
                </div>
                <ul className="space-y-4">
                  {project.reflections.improvements.map((improvement) => (
                    <motion.li 
                      key={improvement.substring(0, 30)} 
                      className="text-gray-400 leading-relaxed pl-4 border-l-2 border-[#a88d65]/30"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                    >
                      {improvement}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Learnings */}
              <motion.div 
                className="card-bento"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#d4af37]/20 flex items-center justify-center text-2xl">
                    ★
                  </div>
                  <h3 className="text-2xl font-bold text-white">Learnings</h3>
                </div>
                <ul className="space-y-4">
                  {project.reflections.learnings.map((learning) => (
                    <motion.li 
                      key={learning.substring(0, 30)} 
                      className="text-gray-400 leading-relaxed pl-4 border-l-2 border-[#d4af37]/30"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                    >
                      {learning}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-fluid">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="heading-section mb-8">
              <span className="text-[#8b6f47]">Explore More Projects</span>
            </h3>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/#work" className="btn-neon">
                  <span className="relative z-10">View All Projects</span>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/#contact" className="btn-outline-neon">
                  Get In Touch
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-[#8b6f47]/20">
        <div className="container-fluid">
          <div className="text-center">
            <p className="text-gray-500">
              © 2025 Toby Haywood. Crafted with Next.js & Framer Motion.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
