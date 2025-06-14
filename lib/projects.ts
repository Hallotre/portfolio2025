export interface ProjectReflections {
  strengths: string[]
  improvements: string[]
  learnings: string[]
}

export interface Project {
  title: string
  shortDescription: string
  detailedDescription: string
  image: string
  imageCaption: string
  liveUrl: string
  githubUrl: string
  tech: string[]
  gradient: string
  slug: string
  reflections: ProjectReflections
}

export const projects: Record<string, Project> = {
  'javascript-frameworks': {
    title: 'Ecom Store - React E-commerce Platform',
    shortDescription: 'Modern e-commerce application built with React, TypeScript, and Vite',
    detailedDescription: `A comprehensive e-commerce platform showcasing modern React development practices with TypeScript. This project demonstrates advanced frontend development skills including component architecture, state management, and responsive design.

Built with React 18, TypeScript, and Vite for optimal development experience and performance. The application features a complete shopping experience with product browsing, cart management, checkout process, and user authentication. The project emphasizes clean code architecture, type safety, and modern development workflows.

Key technical implementations include custom hooks for business logic, context API for state management, responsive design with CSS modules, and comprehensive error handling. The application demonstrates understanding of modern React patterns, performance optimization, and user experience design principles.`,
    image: '/ecomstore.png',
    imageCaption: 'Ecom Store - Modern React e-commerce platform with TypeScript',
    liveUrl: 'https://ecom-store-ca.netlify.app',
    githubUrl: 'https://github.com/Hallotre/ecom-store-ca',
    tech: ['React', 'TypeScript', 'Vite', 'CSS Modules', 'JavaScript', 'HTML5'],
    gradient: 'from-pink-500 to-violet-500',
    slug: 'javascript-frameworks',
    reflections: {
      strengths: [
        'Successfully implemented modern React patterns with TypeScript for enhanced type safety',
        'Created a scalable component architecture with reusable UI components',
        'Achieved excellent development experience using Vite for fast builds and hot reload',
        'Implemented responsive design that works seamlessly across all device sizes'
      ],
      improvements: [
        'Enhanced state management by implementing advanced patterns like custom hooks',
        'Improved code organization with better separation of concerns between components',
        'Added comprehensive error boundaries for better user experience during failures',
        'Optimized bundle size through code splitting and lazy loading techniques'
      ],
      learnings: [
        'Mastered TypeScript integration with React for better development experience',
        'Learned advanced Vite configuration and build optimization techniques',
        'Improved understanding of modern CSS methodologies and responsive design',
        'Gained experience with modern JavaScript ES6+ features and best practices'
      ]
    }
  },
  'semester-project-2': {
    title: 'Pawsitive Home - Pet Adoption Platform',
    shortDescription: 'Currently under resit - Pet adoption platform connecting loving families with rescue animals',
    detailedDescription: `Pawsitive Home is a comprehensive pet adoption platform being developed for Semester Project 2 of the Frontend Development course. This project is currently under resit and focuses on creating a user-friendly platform that connects potential pet owners with rescue animals in need of loving homes.

The platform will showcase modern frontend development skills using TypeScript for type safety and robust code architecture. The project emphasizes responsive design with Tailwind CSS, creating an intuitive user experience that works seamlessly across all devices.

Key features will include pet browsing and filtering, detailed pet profiles with photos and information, adoption application system, user registration and profiles, and search functionality to help families find their perfect companion. The project will demonstrate advanced frontend concepts while addressing a meaningful real-world need.

The application will be deployed on Vercel, ensuring fast loading times and reliable hosting. The design process includes comprehensive planning and prototyping in Figma to ensure an optimal user experience for both pet seekers and adoption centers.

**Status: Under Resit - Coming Soon**`,
    image: '',
    imageCaption: 'Pawsitive Home - Pet Adoption Platform (Under Resit)',
    liveUrl: '#',
    githubUrl: '#',
    tech: ['TypeScript', 'Tailwind CSS', 'Figma', 'Vercel'],
    gradient: 'from-cyan-500 to-blue-500',
    slug: 'semester-project-2',
          reflections: {
        strengths: [
          'Strong foundation in TypeScript for type-safe development and better code reliability',
          'Understanding of modern CSS frameworks like Tailwind for efficient styling',
          'Experience with design-to-development workflow using Figma for prototyping',
          'Knowledge of modern deployment platforms like Vercel for seamless hosting'
        ],
        improvements: [
          'Project currently under development during resit period',
          'Will incorporate feedback from previous assessments to improve user experience design',
          'Focus on implementing accessible design principles for inclusive pet adoption platform',
          'Enhanced responsive design to ensure optimal experience across all devices'
        ],
        learnings: [
          'Opportunity to work on a meaningful project that addresses real-world social needs',
          'Experience with TypeScript development for more robust frontend applications',
          'Understanding of user-centered design principles for adoption and matching systems',
          'Skills in creating emotionally engaging interfaces for pet adoption scenarios'
        ]
      }
  },
  'exam-project-2': {
    title: 'Holidaze - Accommodation Booking Platform',
    shortDescription: 'Comprehensive booking platform with dual customer and admin interfaces built with Next.js',
    detailedDescription: `Holidaze is a sophisticated accommodation booking platform developed as the final exam project for the Frontend Development course. This comprehensive application features both customer-facing booking functionality and admin-facing venue management capabilities.

Built with Next.js (App Router), React, and TypeScript, the platform demonstrates advanced full-stack frontend development skills. The project includes user authentication with role-based access control, venue management with CRUD operations, booking system with date selection, and interactive map integration using Mapbox GL.

The application showcases modern development practices including state management with Zustand and React Query, form handling with React Hook Form and Zod validation, responsive design with Tailwind CSS, and UI components built with Radix UI primitives. The project emphasizes accessibility compliance, performance optimization, and comprehensive user experience design.

Key features include venue browsing and filtering, calendar-based booking system, user profile management, venue creation and management for admin users, and location-based search with map visualization.`,
    image: '/holidaze.png',
    imageCaption: 'Holidaze - Full-featured accommodation booking platform with Next.js',
    liveUrl: 'https://holidaze-five.vercel.app',
    githubUrl: 'https://github.com/Hallotre/holidaze',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Zustand', 'React Query', 'React Hook Form', 'Zod', 'Mapbox GL', 'Radix UI'],
    gradient: 'from-green-500 to-emerald-500',
    slug: 'exam-project-2',
          reflections: {
        strengths: [
          'Successfully implemented complex user authentication with role-based access control',
          'Created comprehensive CRUD operations for venue management with image uploads',
          'Integrated advanced features like map visualization and calendar-based booking system',
          'Achieved excellent user experience with responsive design and accessibility compliance'
        ],
        improvements: [
          'Enhanced performance optimization through Next.js App Router and React Query caching',
          'Improved form validation and user feedback with React Hook Form and Zod schemas',
          'Strengthened type safety throughout the application with comprehensive TypeScript usage',
          'Added robust error handling and loading states for better user experience'
        ],
        learnings: [
          'Mastered Next.js App Router and modern React patterns for scalable applications',
          'Learned advanced state management with Zustand and React Query for optimal data flow',
          'Gained expertise in modern form handling and validation techniques',
          'Developed skills in integrating third-party services like Mapbox for enhanced functionality'
        ]
      }
  }
}

export const projectsArray = Object.values(projects) 