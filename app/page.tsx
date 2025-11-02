'use client'

import { motion, useMotionValue } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { projectsArray } from '@/lib/projects'
import { useState, useEffect } from 'react'

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  useEffect(() => {
    setMounted(true)
    
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  const contactInfo = {
    email: "tobyhaywood@proton.me",
    social: {
      github: "https://github.com/Hallotre",
      linkedin: "https://linkedin.com/in/tobyhaywood",
      X: "https://x.com/TobyHallotre"
    }
  }

  const skills = [
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "TypeScript", icon: "📘" },
    { name: "Tailwind CSS", icon: "🎨" },
    { name: "Node.js", icon: "🟢" },
    { name: "Supabase", icon: "⚡" },
    { name: "Framer Motion", icon: "🎬" },
    { name: "Git & GitHub", icon: "🔀" }
  ]

  return (
    <>
      {/* Floating Navigation */}
      <motion.nav 
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-2xl px-6"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="glass-nav rounded-full px-8 py-4 flex items-center justify-between">
          <Link href="/">
            <motion.div 
              className="text-2xl font-bold text-gradient-emerald"
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
                className="text-gray-400 hover:text-emerald-400 transition-colors font-medium text-sm"
                whileHover={{ y: -2 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
          
          <motion.a
            href="#contact"
            className="hidden md:block px-6 py-2 bg-emerald-500 text-black font-semibold rounded-full text-sm hover:bg-emerald-400 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Hire Me
          </motion.a>
        </div>
      </motion.nav>

      {/* Hero Section with Spotlight */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 bg-grid opacity-30" />
        
        {/* Radial Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-radial-glow" />
        
        {/* Spotlight Effect */}
        {mounted && (
          <motion.div
            className="spotlight"
            style={{
              '--x': `${cursorPosition.x}px`,
              '--y': `${cursorPosition.y}px`,
            } as React.CSSProperties}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        )}
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-64 h-64 rounded-full"
              style={{
                left: `${20 + i * 15}%`,
                top: `${10 + i * 20}%`,
                background: `radial-gradient(circle, rgba(16, 185, 129, ${0.1 - i * 0.02}) 0%, transparent 70%)`,
                filter: 'blur(40px)',
              }}
              animate={{
                y: [0, -50, 0],
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
        
        <div className="container-fluid relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 glass-card mb-8"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.3 }}
            >
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-sm text-gray-400">Available for new projects</span>
            </motion.div>
            
            <motion.h1 
              className="heading-massive mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="block text-white">Building the</span>
              <span className="block text-gradient-emerald text-glow">Future of Web</span>
            </motion.h1>
            
            
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
                Let&apos;s Talk
              </motion.a>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* Featured Work - Bento Grid */}
      <section id="work" className="section-padding relative">
        <div className="absolute inset-0 bg-dots opacity-20" />
        
        <div className="container-fluid relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-emerald-400 font-semibold mb-4 block">Featured Work</span>
            <h2 className="heading-large mb-6">
              <span className="text-gradient-emerald">Selected Projects</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A collection of recent projects showcasing my expertise in modern web development
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-6">
            {[...projectsArray].reverse().map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/projects/${project.slug}`}>
                  <div className="card-bento group cursor-pointer overflow-hidden">
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Project Image */}
                      <div className="relative w-full md:w-80 h-48 md:h-auto md:min-h-[200px] rounded-xl overflow-hidden flex-shrink-0">
                        {project.image ? (
                          <>
                            <Image
                              src={project.image}
                              alt={project.imageCaption}
                              fill
                              className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
                              sizes="(max-width: 768px) 100vw, 320px"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60" />
                          </>
                        ) : (
                          <div className={`w-full h-full bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                            <div className="text-center">
                              <div className="text-4xl mb-2">📚</div>
                              <div className="text-white font-medium text-sm">In Development</div>
                            </div>
                          </div>
                        )}
                        
                        {project.slug === 'semester-project-2' && (
                          <div className="absolute top-3 right-3 px-3 py-1 bg-amber-500 text-black rounded-full text-xs font-bold">
                            Under Resit
                          </div>
                        )}
                      </div>

                      {/* Project Info */}
                      <div className="flex-1 flex flex-col justify-center">
                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gradient-emerald transition-all">
                          {project.title}
                        </h3>
                        
                        <p className="text-gray-400 mb-4 line-clamp-2">
                          {project.shortDescription}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tech.slice(0, 5).map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-xs font-medium border border-emerald-500/20"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.tech.length > 5 && (
                            <span className="px-3 py-1 bg-gray-800 text-gray-400 rounded-full text-xs font-medium">
                              +{project.tech.length - 5}
                            </span>
                          )}
                        </div>
                        
                        <div className="flex items-center text-emerald-400 text-sm font-semibold group-hover:gap-2 transition-all">
                          <span>View Project Details</span>
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

      {/* About Section */}
      <section id="about" className="section-padding relative">
        <div className="container-fluid relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image Side */}
            <motion.div
              className="relative order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-emerald-500/20 blur-3xl rounded-full" />
                
                <motion.div 
                  className="relative w-full max-w-md mx-auto"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="aspect-square rounded-3xl overflow-hidden border-2 border-emerald-500/30">
                    <Image
                      src="/portrait.png"
                      alt="Toby Haywood"
                      width={500}
                      height={500}
                      className="object-cover w-full h-full"
                      priority
                    />
                  </div>
                  
                  {/* Floating Badge */}
                  <motion.div 
                    className="absolute -bottom-4 -right-4 glass-card px-6 py-4"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", delay: 0.3 }}
                  >
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gradient-emerald">2+</div>
                      <div className="text-xs text-gray-400">Years Experience</div>
                    </div>
                  </motion.div>
                </motion.div>
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
              <span className="text-emerald-400 font-semibold mb-4 block">About Me</span>
              <h2 className="heading-large mb-6">
                Passionate About <span className="text-gradient-emerald">Creating</span>
              </h2>
              
              <div className="space-y-4 text-gray-400 text-lg">
                <p>
                  I&apos;m a creative developer who loves turning complex problems into simple,
                  beautiful, and intuitive digital experiences. With a strong foundation in
                  modern web technologies, I build applications that are both powerful and
                  delightful to use.
                </p>
                <p>
                  When I&apos;m not coding, you&apos;ll find me exploring the latest tech trends,
                  gaming, or enjoying a good series. I believe in continuous learning and
                  staying ahead of the curve in this ever-evolving field.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <motion.a
                  href={contactInfo.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 glass-card hover-lift hover-glow rounded-xl"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-gray-300">GitHub</span>
                </motion.a>
                <motion.a
                  href={contactInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 glass-card hover-lift hover-glow rounded-xl"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-gray-300">LinkedIn</span>
                </motion.a>
                <motion.a
                  href={contactInfo.social.X}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 glass-card hover-lift hover-glow rounded-xl"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-gray-300">X (Twitter)</span>
                </motion.a>
              </div>
            </motion.div>
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
            <span className="text-emerald-400 font-semibold mb-4 block">Skills</span>
            <h2 className="heading-large">
              <span className="text-gradient-emerald">Tech Stack</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="card-spotlight text-center group"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.05 }}
              >
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">{skill.icon}</div>
                <h3 className="text-base font-semibold text-white">{skill.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding relative">
        <div className="container-fluid relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-emerald-400 font-semibold mb-4 block">Get in Touch</span>
              <h2 className="heading-large mb-6">
                Let&apos;s Build Something <span className="text-gradient-emerald">Amazing</span>
              </h2>
              <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
                Have a project in mind? Let&apos;s collaborate and bring your ideas to life.
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
                  <svg className="w-6 h-6 text-emerald-400 group-hover:text-emerald-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
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
                  <svg className="w-6 h-6 text-emerald-400 group-hover:text-emerald-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
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
                  <svg className="w-5 h-5 text-emerald-400 group-hover:text-emerald-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800/50">
        <div className="container-fluid">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2025 Toby Haywood. Crafted with Next.js & Framer Motion.
            </p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-gray-500 text-sm">Available for work</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
