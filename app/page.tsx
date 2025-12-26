'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { projectsArray } from '@/lib/projects'
import { useState } from 'react'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  const contactInfo = {
    email: "tobyhaywood@proton.me",
    social: {
      github: "https://github.com/Hallotre",
      linkedin: "https://linkedin.com/in/tobyhaywood",
      X: "https://x.com/TobyHallotre"
    }
  }

  const skills = [
    { name: "React", category: "Frontend" },
    { name: "Next.js", category: "Framework" },
    { name: "TypeScript", category: "Language" },
    { name: "Tailwind CSS", category: "Styling" },
    { name: "Node.js", category: "Backend" },
    { name: "Supabase", category: "Database" },
    { name: "Framer Motion", category: "Animation" },
    { name: "Git & GitHub", category: "Version Control" }
  ]

  const stats = [
    { number: "5+", label: "Projects Completed" },
    { number: "2+", label: "Years Experience" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "∞", label: "Learning & Growing" }
  ]

  return (
    <>
      {/* Sticky Navigation */}
      <motion.nav 
        className="fixed top-0 left-0 right-0 z-50 glass-nav"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="container-fluid">
          <div className="flex items-center justify-between h-20">
            <Link href="/">
              <motion.div 
                className="text-2xl font-bold text-[#8b6f47]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                HAYWOOD
              </motion.div>
            </Link>
            
            <div className="hidden md:flex items-center gap-8">
              {['Work', 'About', 'Skills', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-400 hover:text-white transition-colors font-medium text-sm tracking-wide"
                  whileHover={{ y: -2 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
            
            <motion.a
              href="#contact"
              className="hidden md:block px-6 py-2.5 bg-[#8b6f47] text-white font-semibold rounded text-sm hover:bg-[#a88d65] transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Talk
            </motion.a>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container-fluid relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.span
                className="badge mb-6"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.3 }}
              >
                <span className="w-2 h-2 bg-[#8b6f47] rounded-full animate-pulse" />
                Frontend Developer
              </motion.span>
              
              <motion.h1 
                className="heading-massive mb-6 mt-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <span className="block text-white mb-4">CRAFTING DIGITAL</span>
                <span className="block text-[#8b6f47]">EXPERIENCES</span>
              </motion.h1>
              
              <motion.p
                className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Building modern web applications with elegant design and powerful functionality
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <motion.a 
                  href="#work"
                  className="btn-neon"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">View My Work</span>
                </motion.a>
                <motion.a 
                  href="#contact"
                  className="btn-outline-neon"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get In Touch
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section - Quick Facts */}
      <section className="py-20 md:py-24 relative">
        <div className="absolute inset-0 bg-[#1a1a1a]" />
        
        <div className="container-fluid relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-6 md:p-8 glass-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-[#8b6f47] mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-gray-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Split Layout */}
      <section id="about" className="section-padding relative">
        <div className="container-fluid relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
            {/* Image Side */}
            <motion.div
              className="relative order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative image-zoom-container rounded overflow-hidden" style={{ minHeight: '500px' }}>
                <div className="absolute inset-0 border border-[#8b6f47]/20" />
                <Image
                  src="/portrait.png"
                  alt="Toby Haywood"
                  fill
                  className="object-cover image-zoom"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </motion.div>

            {/* Content Side */}
            <motion.div
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="badge mb-6">About</span>
              
              <h2 className="heading-large mb-8">
                Toby <span className="text-[#8b6f47]">Haywood</span>
              </h2>
              
              <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                <p>
                  Frontend developer based in Norway, specializing in building modern web applications. 
                  I work primarily with React, Next.js, and TypeScript to create functional and responsive solutions.
                </p>
                <p>
                  My focus is on delivering clean, maintainable code and user-friendly interfaces. 
                  From e-commerce platforms to booking systems, I've built full-stack applications 
                  with authentication, databases, and third-party API integrations.
                </p>
                <p>
                  Recently completed Frontend Development at Noroff. I've worked on real-world projects 
                  for streamers and communities, and continue building with new technologies.
                </p>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <motion.a
                  href={contactInfo.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 glass-card hover-lift hover-glow rounded"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-gray-300 font-medium">GitHub</span>
                </motion.a>
                <motion.a
                  href={contactInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 glass-card hover-lift hover-glow rounded"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-gray-300 font-medium">LinkedIn</span>
                </motion.a>
                <motion.a
                  href={contactInfo.social.X}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 glass-card hover-lift hover-glow rounded"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-gray-300 font-medium">X (Twitter)</span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section id="work" className="section-padding relative bg-[#1a1a1a]">
        <div className="absolute inset-0 bg-dots opacity-20" />
        
        <div className="container-fluid relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="badge mb-6">Portfolio</span>
            <h2 className="heading-large mb-6">
              <span className="text-[#8b6f47]">Featured Projects</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              A collection of recent projects showcasing expertise in modern web development,
              from e-commerce platforms to booking systems
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto space-y-8">
            {[...projectsArray].reverse().map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/projects/${project.slug}`}>
                  <div className="card-bento group cursor-pointer">
                    <div className="flex flex-col md:flex-row gap-8">
                      {/* Project Image */}
                      <div className="relative w-full md:w-96 h-64 md:h-auto md:min-h-[280px] rounded overflow-hidden flex-shrink-0 image-zoom-container">
                        {project.image ? (
                          <>
                            <Image
                              src={project.image}
                              alt={project.imageCaption}
                              fill
                              className="object-cover object-top image-zoom"
                              sizes="(max-width: 768px) 100vw, 400px"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                          </>
                        ) : (
                          <div className={`w-full h-full bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                            <div className="text-center">
                              <div className="text-5xl mb-3">📚</div>
                              <div className="text-white font-semibold">In Development</div>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Project Info */}
                      <div className="flex-1 flex flex-col justify-center py-2">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-[#a88d65] transition-all">
                          {project.title}
                        </h3>
                        
                        <p className="text-gray-400 text-lg mb-6 leading-relaxed line-clamp-2">
                          {project.shortDescription}
                        </p>
                        
                        <div className="flex flex-wrap gap-3 mb-6">
                          {project.tech.slice(0, 5).map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1.5 bg-[#8b6f47]/10 text-[#a88d65] rounded text-sm font-medium border border-[#8b6f47]/20"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.tech.length > 5 && (
                            <span className="px-3 py-1.5 bg-[#2a2a2a] text-gray-400 rounded text-sm font-medium">
                              +{project.tech.length - 5} more
                            </span>
                          )}
                        </div>
                        
                        <div className="flex items-center text-[#8b6f47] font-semibold group-hover:text-[#a88d65] transition-all">
                          <span className="mr-2">View Project Details</span>
                          <motion.span
                            className="inline-block"
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            →
                          </motion.span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding relative">
        <div className="absolute inset-0 bg-grid opacity-20" />
        
        <div className="container-fluid relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="badge mb-6">Expertise</span>
            <h2 className="heading-large">
              <span className="text-[#8b6f47]">Tech Stack</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="card-spotlight"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative">
                  <div className="text-sm text-[#8b6f47] font-medium mb-2 uppercase tracking-wider">
                    {skill.category}
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {skill.name}
                  </h3>
                  <div className="w-12 h-0.5 bg-[#8b6f47] mt-3" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - CTA */}
      <section id="contact" className="section-padding relative bg-[#1a1a1a]">
        <div className="container-fluid relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="badge mb-6">Get in Touch</span>
              <h2 className="heading-large mb-8">
                Let's Build Something <span className="text-[#8b6f47]">Amazing</span>
              </h2>
              <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                Have a project in mind? Let's collaborate and bring your ideas to life
                with modern technology and thoughtful design.
              </p>

              <motion.a
                href={`mailto:${contactInfo.email}`}
                className="btn-neon inline-block text-lg mb-12"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">{contactInfo.email}</span>
              </motion.a>

              <div className="flex justify-center gap-6">
                <motion.a
                  href={contactInfo.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 glass-card rounded-full flex items-center justify-center hover-glow group"
                  whileHover={{ y: -4, scale: 1.1 }}
                  title="GitHub"
                >
                  <svg className="w-6 h-6 text-[#8b6f47] group-hover:text-[#a88d65] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </motion.a>
                
                <motion.a
                  href={contactInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 glass-card rounded-full flex items-center justify-center hover-glow group"
                  whileHover={{ y: -4, scale: 1.1 }}
                  title="LinkedIn"
                >
                  <svg className="w-6 h-6 text-[#8b6f47] group-hover:text-[#a88d65] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </motion.a>
                
                <motion.a
                  href={contactInfo.social.X}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 glass-card rounded-full flex items-center justify-center hover-glow group"
                  whileHover={{ y: -4, scale: 1.1 }}
                  title="X (Twitter)"
                >
                  <svg className="w-5 h-5 text-[#8b6f47] group-hover:text-[#a88d65] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-[#8b6f47]/20">
        <div className="container-fluid">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-500">
              © 2025 Toby Haywood. Crafted with Next.js & Framer Motion.
            </p>
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 bg-[#8b6f47] rounded-full animate-pulse" />
              <span className="text-gray-500">Available for work</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
