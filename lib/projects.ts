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
    shortDescription: 'E-commerce application built with React, TypeScript, and Vite',
    detailedDescription: `E-commerce platform built with React 18, TypeScript, and Vite. Features product browsing, shopping cart, checkout process, and authentication.

Technical stack includes React Context API for state management, custom hooks for business logic, CSS Modules for styling, and TypeScript for type safety. Responsive design works across all device sizes.

Built with Vite for fast development and optimized production builds. Includes error handling, form validation, and clean component architecture.`,
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
    title: 'Pawsitive - Pet Adoption Platform',
    shortDescription: 'Pet adoption platform built with Next.js, TypeScript, and Tailwind CSS',
    detailedDescription: `Pet adoption platform connecting families with adoptable pets. Built with Next.js App Router, TypeScript, and Tailwind CSS.

Features real-time search, filtering by size/age/type, detailed pet profiles, and pagination. Admin dashboard with authentication allows managing pet listings with full CRUD operations. Authentication combines Noroff API validation with encrypted session management.

Technical implementation includes custom React hooks with cleanup, skeleton loading states, advanced filtering system, role-based access control, and WCAG 2.1 AA accessibility compliance. Mobile-first responsive design.`,
    image: '/pawsitive.png',
    imageCaption: 'Pawsitive - Modern pet adoption platform with admin management system',
    liveUrl: 'https://pawsitive-pet-adoption.vercel.app',
    githubUrl: 'https://github.com/Hallotre/pawsitive',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Noroff API', 'React Hooks', 'Session Management', 'Vercel'],
    gradient: 'from-orange-500 to-amber-500',
    slug: 'semester-project-2',
    reflections: {
      strengths: [
        'Implemented hybrid authentication system combining API validation with secure local session management',
        'Built comprehensive CRUD operations with role-based access control for admin features',
        'Created custom React hooks with proper cleanup to prevent race conditions and memory leaks',
        'Achieved WCAG 2.1 AA accessibility compliance with semantic HTML, ARIA labels, and keyboard navigation'
      ],
      improvements: [
        'Developed advanced filtering system with real-time search and debounced API calls for performance',
        'Enhanced user experience with skeleton loading states and comprehensive error handling',
        'Implemented encrypted session persistence with 7-day expiry for secure authentication',
        'Built responsive mobile-first design with breakpoints for mobile, tablet, and desktop devices'
      ],
      learnings: [
        'Mastered Next.js App Router architecture with protected routes and middleware authentication',
        'Learned advanced TypeScript patterns for type-safe API integration and data validation',
        'Gained expertise in accessibility standards and implementing WCAG 2.1 AA compliance',
        'Developed skills in session management, encryption, and secure authentication flows'
      ]
    }
  },
  'exam-project-2': {
    title: 'Holidaze - Accommodation Booking Platform',
    shortDescription: 'Booking platform with customer and admin interfaces built with Next.js',
    detailedDescription: `Accommodation booking platform with dual interfaces for customers and venue managers. Built with Next.js App Router, React, and TypeScript.

Customer features include venue browsing, filtering, calendar-based booking, and profile management. Admin features include venue creation/editing, booking management, and CRUD operations with role-based access control.

Technical stack: Zustand and React Query for state management, React Hook Form with Zod validation, Tailwind CSS, Radix UI components, and Mapbox GL for location visualization. Responsive design with accessibility compliance.`,
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
  },
  'halloween-games': {
    title: 'Halloween Games - Spooky Game Suggester',
    shortDescription: 'Community voting platform for horror game suggestions built for Twitch streamer',
    detailedDescription: `Web application for Twitch streamer Skibens' community to suggest and vote on horror games for Halloween streams. Built with Next.js, TypeScript, and Tailwind CSS.

Features Twitch OAuth authentication via NextAuth.js, game search with Steam API integration including fuzzy matching and typo tolerance, voting system with real-time counting, and admin panel for moderation. Uses Supabase for database and authentication.

Viewers submit game suggestions, community votes on favorites, and streamer moderates submissions. All integrated with Twitch accounts for user management.`,
    image: '/halloweenpage.png',
    imageCaption: 'Halloween Games - Spooky game suggestion platform for streamers',
    liveUrl: 'https://skibenshalloween.vercel.app',
    githubUrl: 'https://github.com/Hallotre/halloween-games',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'NextAuth.js', 'Supabase', 'Steam API', 'Vercel'],
    gradient: 'from-orange-500 to-red-500',
    slug: 'halloween-games',
    reflections: {
      strengths: [
        'Successfully implemented Twitch OAuth authentication with NextAuth.js for secure user access',
        'Created an intuitive voting system with real-time updates and user-friendly interface',
        'Integrated smart Steam API search with typo tolerance and fuzzy matching algorithms',
        'Built comprehensive admin panel for content moderation and community management'
      ],
      improvements: [
        'Enhanced search algorithm with better ranking and relevance scoring',
        'Improved user experience with better game discovery and filtering options',
        'Added comprehensive analytics dashboard for streamer insights',
        'Optimized database queries for better performance with large datasets'
      ],
      learnings: [
        'Mastered NextAuth.js configuration for OAuth providers like Twitch',
        'Learned advanced Supabase patterns for real-time data and RLS policies',
        'Gained experience with third-party API integration and rate limiting strategies',
        'Developed skills in building community-driven features with voting and moderation systems'
      ]
    }
  },
  'skiben-site': {
    title: 'Skiben Site - Video Submission Platform',
    shortDescription: 'Video submission and moderation platform for streamers built with Next.js and Supabase',
    detailedDescription: `Platform for streamers to collect and moderate video submissions from viewers. Built with Next.js 14 App Router, TypeScript, and Supabase.

Supports YouTube and TikTok video submissions with role-based access control (Viewer, Moderator, Streamer, Admin). Features real-time updates via Supabase subscriptions, Twitch OAuth authentication, moderation dashboard, and contest management system.

Technical implementation includes Next.js App Router, Supabase PostgreSQL with Row Level Security policies, Twitch authentication integration, and comprehensive moderation logging. Four-tier permission system for different user roles.`,
    image: '/skibenspage.png',
    imageCaption: 'Skiben Site - Video submission platform for streamers with Twitch authentication',
    liveUrl: 'https://skiben-site.vercel.app',
    githubUrl: 'https://github.com/Hallotre/skiben-site',
    tech: ['Next.js 14', 'TypeScript', 'Supabase', 'Twitch OAuth', 'Tailwind CSS', 'PostgreSQL', 'Vercel'],
    gradient: 'from-purple-500 to-indigo-500',
    slug: 'skiben-site',
    reflections: {
      strengths: [
        'Successfully integrated Twitch OAuth authentication with Supabase for secure user management',
        'Implemented comprehensive role-based access control with four user tiers (Viewer, Moderator, Streamer, Admin)',
        'Built real-time updates using Supabase subscriptions for live content moderation',
        'Created robust Row Level Security (RLS) policies for database security and data protection'
      ],
      improvements: [
        'Developed advanced moderation logging system to track all content review actions',
        'Enhanced user experience with intuitive dashboards for different user roles',
        'Implemented contest management system to organize video submissions by events',
        'Added comprehensive metadata tracking for video submissions including timestamps and sources'
      ],
      learnings: [
        'Mastered Supabase authentication integration with third-party OAuth providers like Twitch',
        'Learned advanced PostgreSQL features including RLS policies and complex table relationships',
        'Gained expertise in building scalable role-based permission systems',
        'Developed skills in real-time data synchronization and WebSocket management with Supabase'
      ]
    }
  },
  'varden-gym': {
    title: 'Varden Gym - Modern Fitness Website',
    shortDescription: 'Website for a 24/7 gym in Karmsund, Norway, built with vanilla HTML, CSS, and JavaScript',
    detailedDescription: `Website concept for Varden Gym, a fitness center in Karmsund, Norway. Built entirely with vanilla HTML5, CSS3, and JavaScript - no frameworks or libraries.

The site features five pages: home, about, pricing, gallery, and contact. Responsive design works across mobile, tablet, and desktop using CSS Grid and Flexbox. Dark theme with bronze accents matches the gym's branding.

Technical implementation includes semantic HTML5 markup, CSS custom properties for consistent theming, mobile-first responsive layouts, lazy loading for images, and form validation with vanilla JavaScript. The design uses full-screen hero sections, generous spacing, and the Inter font family.

Displays key information: 349 NOK/month membership, 24/7 access with QR entry, and no binding contracts. All built without framework dependencies.`,
    image: '/vardengym.png',
    imageCaption: 'Varden Gym - Modern fitness website with image-first design approach',
    liveUrl: 'https://varden-gym.vercel.app',
    githubUrl: 'https://github.com/Hallotre/VardenGym',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Flexbox', 'CSS Grid', 'Responsive Design'],
    gradient: 'from-amber-600 to-yellow-500',
    slug: 'varden-gym',
    reflections: {
      strengths: [
        'Demonstrated mastery of vanilla web technologies without relying on frameworks',
        'Created professional, production-ready design with image-first approach',
        'Built fully responsive layouts using modern CSS Grid and Flexbox techniques',
        'Implemented semantic HTML5 with accessibility considerations and SEO optimization'
      ],
      improvements: [
        'Applied premium design system with generous spacing and sophisticated color palette',
        'Optimized performance with lazy loading images and minimal JavaScript footprint',
        'Created consistent user experience across all pages with reusable CSS patterns',
        'Designed mobile-first responsive layouts that scale elegantly to desktop'
      ],
      learnings: [
        'Gained deep understanding of CSS Grid and Flexbox for complex responsive layouts',
        'Learned to create professional designs without framework dependencies',
        'Developed skills in performance optimization and web standards best practices',
        'Improved understanding of modern CSS features like custom properties and clamp()'
      ]
    }
  }
}

export const projectsArray = Object.values(projects) 