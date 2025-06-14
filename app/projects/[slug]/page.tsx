'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { projects } from '@/lib/projects'
import { use } from 'react'

export default function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const project = projects[slug]

  if (!project) {
    notFound()
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href)
    // You could add a toast notification here
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-4">
        <div className="container-modern">
          <div className="glass rounded-2xl p-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="text-xl font-bold gradient-text hover:scale-105 transition-transform">
                ← Back to Portfolio
              </Link>
              <button
                onClick={copyToClipboard}
                className="btn btn-secondary text-sm"
                title="Copy page link"
              >
                Share
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container-modern">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
            className="max-w-4xl mx-auto"
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              variants={fadeInUp}
            >
              <span className="gradient-text">{project.title}</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-300 mb-8"
              variants={fadeInUp}
            >
              {project.shortDescription}
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-4 mb-12"
              variants={fadeInUp}
            >
              {project.slug === 'semester-project-2' ? (
                <>
                  <div className="btn btn-primary opacity-50 cursor-not-allowed">
                    Coming After Resit
                  </div>
                  <div className="btn btn-secondary opacity-50 cursor-not-allowed">
                    Repository Pending
                  </div>
                </>
              ) : (
                <>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    View Live Site
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                  >
                    View on GitHub
                  </a>
                </>
              )}
            </motion.div>

            <motion.div 
              className="flex flex-wrap gap-2"
              variants={fadeInUp}
            >
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Project Image */}
      <section className="py-12">
        <div className="container-modern">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative w-full h-96 md:h-[500px] rounded-xl overflow-hidden mb-4 shadow-2xl">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.imageCaption}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1024px"
                  priority
                />
              ) : (
                <div className={`w-full h-full bg-gradient-to-r ${project.gradient} flex items-center justify-center`}>
                  <div className="text-center text-white">
                    <div className="text-6xl mb-4">📚</div>
                    <div className="text-xl font-medium">Project Under Development</div>
                    <div className="text-sm opacity-80 mt-2">Coming after resit completion</div>
                  </div>
                </div>
              )}
              {project.slug === 'semester-project-2' && (
                <div className="absolute top-6 right-6 bg-amber-500 text-black px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  Under Resit - Coming Soon
                </div>
              )}
            </div>
            <p className="text-gray-400 text-center italic">{project.imageCaption}</p>
          </motion.div>
        </div>
      </section>

      {/* Project Description */}
      <section className="py-12">
        <div className="container-modern">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="prose prose-invert prose-lg max-w-none"
            >
              <h2 className="text-3xl font-bold mb-6 gradient-text">Project Overview</h2>
              <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                {project.detailedDescription}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Self-Assessment Section */}
      <section className="py-12">
        <div className="container-modern">
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              className="text-3xl font-bold mb-12 text-center gradient-text"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Self-Assessment & Reflections
            </motion.h2>

            <motion.div 
              className="grid md:grid-cols-3 gap-8"
              variants={staggerChildren}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Strengths */}
              <motion.div className="card" variants={fadeInUp}>
                <h3 className="text-xl font-bold mb-4 text-green-400">Strengths</h3>
                <ul className="space-y-2">
                  {project.reflections.strengths.map((strength, index) => (
                    <li key={index} className="text-gray-300 text-sm leading-relaxed">
                      • {strength}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Improvements */}
              <motion.div className="card" variants={fadeInUp}>
                <h3 className="text-xl font-bold mb-4 text-blue-400">Improvements Made</h3>
                <ul className="space-y-2">
                  {project.reflections.improvements.map((improvement, index) => (
                    <li key={index} className="text-gray-300 text-sm leading-relaxed">
                      • {improvement}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Learnings */}
              <motion.div className="card" variants={fadeInUp}>
                <h3 className="text-xl font-bold mb-4 text-purple-400">Key Learnings</h3>
                <ul className="space-y-2">
                  {project.reflections.learnings.map((learning, index) => (
                    <li key={index} className="text-gray-300 text-sm leading-relaxed">
                      • {learning}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Navigation to Other Projects */}
      <section className="py-20">
        <div className="container-modern">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h3 
              className="text-2xl font-bold mb-8 gradient-text"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Explore Other Projects
            </motion.h3>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link href="/" className="btn btn-primary">
                View All Projects
              </Link>
              <Link href="/#contact" className="btn btn-secondary">
                Get In Touch
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
} 