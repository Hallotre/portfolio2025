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
    slug: 'javascript-frameworks'
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
    slug: 'semester-project-2'
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
    slug: 'exam-project-2'
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
    slug: 'halloween-games'
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
    slug: 'skiben-site'
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
    slug: 'varden-gym'
  }
}

export const projectsArray = Object.values(projects) 