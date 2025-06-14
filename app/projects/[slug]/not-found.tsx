'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="container-modern text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="gradient-text">404</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Project Not Found
          </h2>
          
          <p className="text-gray-300 text-lg mb-8 max-w-md mx-auto">
            The project you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="btn btn-primary">
              Back to Portfolio
            </Link>
            <Link href="/#projects" className="btn btn-secondary">
              View All Projects
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 