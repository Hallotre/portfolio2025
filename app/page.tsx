'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { projectsArray } from '@/lib/projects'

export default function Home() {
  const { scrollYProgress } = useScroll()
  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1])

  // Animation variants for better performance
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

  const hoverScale = {
    scale: 1.05,
    transition: { type: "spring", stiffness: 300, damping: 20 }
  }

  const skills = {
    "Frontend Frameworks": ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS"],
    "Styling & UI": ["Tailwind CSS", "CSS Modules", "Responsive Design", "Framer Motion"],
    "Backend": ["Node.js", "Supabase", "MySQL"],
    "Tools & Workflow": ["Github", "Vite", "Figma", "VS Code", "Cursor", "Netlify/Vercel"]
  }

  return (
    <>
      {/* Navigation */}
      <motion.nav 
        className="fixed top-0 left-0 right-0 z-50 p-4"
        style={{ opacity: headerOpacity }}
      >
        <div className="container-modern">
          <motion.div 
            className="glass rounded-2xl p-4"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center justify-between">
              <motion.div 
                className="text-xl font-bold gradient-text"
                whileHover={{ scale: 1.05 }}
              >
                Portfolio
              </motion.div>
              <div className="hidden md:flex space-x-8">
                {['About', 'Projects', 'Skills', 'Contact'].map((item, index) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-white transition-colors"
                    whileHover={{ y: -2 }}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    {item}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated Background */}
        <motion.div 
          className="absolute inset-0 opacity-30"
          animate={{ 
            background: [
              "radial-gradient(circle at 20% 50%, #3b82f6 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, #8b5cf6 0%, transparent 50%)",
              "radial-gradient(circle at 40% 80%, #06b6d4 0%, transparent 50%)"
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
        />
        
        <div className="container-modern text-center relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
          >
            <motion.h1 
              className="text-6xl md:text-8xl font-bold mb-6"
              variants={fadeInUp}
            >
              <span className="gradient-text">Creative</span>
              <br />
              Developer
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Crafting beautiful, functional, and user-centered digital experiences
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={fadeInUp}
            >
              <motion.a 
                href="#projects"
                className="btn btn-primary"
                whileHover={hoverScale}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.a>
              <motion.a 
                href="#contact"
                className="btn btn-secondary"
                whileHover={hoverScale}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container-modern">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="gradient-text">Me</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I&apos;m a passionate developer with expertise in modern web technologies. 
                I love creating digital experiences that are not only beautiful but also 
                functional and accessible.
              </p>
                              <p className="text-gray-300 text-lg leading-relaxed">
                  When I&apos;m not coding, you can find me gaming, exploring new tech trends, 
                  or just relaxing with a good series. I believe in maintaining a healthy 
                  work-life balance while staying curious about the ever-evolving world of technology.
                </p>
            </motion.div>
            
            <motion.div 
              className="relative flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-80 h-80 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 p-1">
                <div className="w-full h-full rounded-full bg-black p-2 flex items-center justify-center">
                  <div className="relative w-72 h-72 rounded-full overflow-hidden">
                    <Image
                      src="/portrait.png"
                      alt="Portrait of developer"
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 80vw, 320px"
                      priority
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container-modern">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              A showcase of my recent work and creative explorations. Click on any project to learn more about the development process and self-assessment.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {projectsArray.map((project) => (
              <motion.div
                key={project.title}
                variants={fadeInUp}
              >
                <Link href={`/projects/${project.slug}`}>
                  <motion.div
                    className={`card h-full group ${project.slug === 'semester-project-2' ? 'opacity-80 border-amber-500/30' : 'cursor-pointer'}`}
                    whileHover={project.slug === 'semester-project-2' ? {} : {
                      y: -10,
                      boxShadow: "0 20px 40px rgba(168, 85, 247, 0.15)",
                      borderColor: "rgba(168, 85, 247, 0.5)"
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                      {project.image ? (
                        <Image
                          src={project.image}
                          alt={project.imageCaption}
                          fill
                          className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      ) : (
                        <div className={`w-full h-full bg-gradient-to-r ${project.gradient} flex items-center justify-center`}>
                          <div className="text-center text-white">
                            <div className="text-2xl mb-2">📚</div>
                            <div className="text-sm font-medium">Under Development</div>
                          </div>
                        </div>
                      )}
                      {project.slug === 'semester-project-2' && (
                        <div className="absolute top-3 right-3 bg-amber-500 text-black px-2 py-1 rounded-full text-xs font-semibold">
                          Under Resit
                        </div>
                      )}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.shortDescription}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="text-blue-400 text-sm font-medium hover:text-blue-300 transition-colors">
                      Read more →
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container-modern">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Skills & <span className="gradient-text">Technologies</span>
            </h2>
          </motion.div>
          
          <motion.div 
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {Object.entries(skills).map(([category, skillList]) => (
              <motion.div
                key={category}
                className="card"
                variants={fadeInUp}
                whileHover={{
                  y: -5,
                  boxShadow: "0 15px 30px rgba(59, 130, 246, 0.1)"
                }}
              >
                <h3 className="text-xl font-bold mb-4 gradient-text">{category}</h3>
                <div className="space-y-2">
                  {skillList.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      className="flex items-center justify-between p-2 rounded bg-gray-800/50"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: skillIndex * 0.1 }}
                    >
                      <span className="text-gray-300">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container-modern text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let&apos;s <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let&apos;s discuss your next project.
            </p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
              variants={staggerChildren}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.button 
                className="btn btn-primary"
                variants={fadeInUp}
                whileHover={hoverScale}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
              <motion.button 
                className="btn btn-secondary"
                variants={fadeInUp}
                whileHover={hoverScale}
                whileTap={{ scale: 0.95 }}
              >
                Download CV
              </motion.button>
            </motion.div>
            
            <motion.div 
              className="flex justify-center space-x-6"
              variants={staggerChildren}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {['GitHub', 'LinkedIn', 'Twitter'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  className="text-gray-400 hover:text-white text-lg"
                  variants={fadeInUp}
                  whileHover={{ y: -3, color: "#ffffff" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {social}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="container-modern text-center">
          <motion.p 
            className="text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            © 2025 Portfolio. Built with Next.js and Framer Motion.
          </motion.p>
        </div>
      </footer>
    </>
  )
}
