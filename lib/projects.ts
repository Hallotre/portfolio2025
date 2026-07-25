export type ProjectFlare = 'concept' | 'personal' | 'client' | 'in-progress'

export const PROJECT_FLARE_LABELS: Record<ProjectFlare, string> = {
  concept: 'Concept',
  personal: 'Personal Project',
  client: 'Client Work',
  'in-progress': 'In Progress',
}

export interface Project {
  title: string
  shortDescription: string
  /** Supporting line for homepage cards: what made the project interesting */
  cardNote: string
  detailedDescription: string
  image: string
  imageCaption: string
  gallery?: { src: string; caption: string }[]
  liveUrl: string
  githubUrl?: string
  tech: string[]
  gradient: string
  slug: string
  businessType: string
  flare: ProjectFlare
  problem: string
  approach: string
  outcome: string
  role: string
  featured?: boolean
}

export const projects: Record<string, Project> = {
  skibathon: {
    title: 'Skibathon',
    shortDescription:
      'A live event hub for a Twitch subathon, with real-time goals, leaderboards, clips, and a mod dashboard behind the scenes.',
    cardNote:
      'Interesting as both a public event site and an ops tool: live counters, community goals, and moderator controls in one place.',
    detailedDescription:
      'SKIBATHON is the live companion site for Skiben’s subathon. Viewers follow sub progress, donation goals, leaderboards, and highlight clips, while mods manage the numbers and goals from a dedicated dashboard.',
    image: '/skibathon.png',
    imageCaption: 'Hero: live status, sub counter, next goal, and entry into the stream',
    gallery: [
      {
        src: '/skibathon-live.png',
        caption: 'Live view with embedded stream, chat, and Wall of Simp leaderboards',
      },
      {
        src: '/skibathon-goals.png',
        caption: 'Goals: sub and donation milestones with status tracking',
      },
      {
        src: '/skibathon-clips.png',
        caption: 'Tilbakeblikk: highlight clips with sorting and auto-updates',
      },
    ],
    liveUrl: 'https://skibathon.skiben.no/',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Realtime data'],
    gradient: 'from-fuchsia-500 to-violet-600',
    slug: 'skibathon',
    businessType: 'Live streamer event platform',
    flare: 'client',
    problem:
      'A long subathon needs a clear public hub for progress and goals, plus a reliable way for mods to correct counters, update leaderboard totals, and manage goals without chaos mid-stream.',
    approach:
      'Built a dark, high-energy public site for live status, goals, leaderboards, and clips, paired with a mod dashboard for editing the sub counter, donation totals (overall and per user on the leaderboard), and full CRUD for goals.',
    outcome:
      'The audience gets a focused live experience, and the mod team can keep numbers and goals accurate as the event moves.',
    role: 'Product structure, interface design, front-end build, and mod tooling',
    featured: true,
  },
  'varden-gym': {
    title: 'Varden Gym',
    shortDescription:
      'A business-facing website concept designed to feel more credible, modern, and visually aligned with the brand.',
    cardNote:
      'The focus here was on presentation, clarity, and giving the business a stronger first impression online.',
    detailedDescription:
      'Website concept for Varden Gym, a fitness center in Karmsund, Norway. The focus was a polished first impression, clear membership information, and a layout that works well on phones as well as desktops.',
    image: '/vardengym.png',
    imageCaption: 'Varden Gym: modern fitness website with a clear, image-led layout',
    liveUrl: 'https://varden-gym.vercel.app',
    githubUrl: 'https://github.com/Hallotre/VardenGym',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    gradient: 'from-amber-600 to-yellow-500',
    slug: 'varden-gym',
    businessType: 'Local fitness business',
    flare: 'concept',
    problem:
      'The business needed a website that felt current and trustworthy, with clear pricing, access details, and a stronger presence on mobile.',
    approach:
      'The redesign focused on clearer structure, stronger visual hierarchy, simpler messaging, and a polished responsive layout across five key pages.',
    outcome:
      'The final direction feels more professional, easier to trust, and better aligned with a modern gym brand.',
    role: 'Positioning, structure, visual design, and front-end build',
  },
  'skiben-site': {
    title: 'Skiben Site',
    shortDescription:
      'A video submission platform built around community participation, moderation, and a clearer workflow for streamer content.',
    cardNote:
      'Interesting for the role system, real-time updates, and making a multi-step community tool feel straightforward to use.',
    detailedDescription:
      'A platform for collecting and moderating video submissions from viewers. Built so the workflow stays clear for viewers, moderators, and the streamer.',
    image: '/skibenspage.png',
    imageCaption: 'Skiben Site: video submission and moderation for streamers',
    liveUrl: 'https://skiben-site.vercel.app',
    githubUrl: 'https://github.com/Hallotre/skiben-site',
    tech: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS'],
    gradient: 'from-purple-500 to-indigo-500',
    slug: 'skiben-site',
    businessType: 'Creator / community platform',
    flare: 'client',
    problem:
      'Viewer video submissions were hard to collect and moderate in one place without a messy process.',
    approach:
      'Built a focused web app with clear roles, simple submission flow, moderation tools, and real-time updates so the team can manage content without friction.',
    outcome:
      'A practical system that keeps submissions organized and makes moderation straightforward for the streamer team.',
    role: 'Product structure, interface design, and full front-end build',
  },
  'halloween-games': {
    title: 'Halloween Games',
    shortDescription:
      'A seasonal community voting site that helps a Twitch streamer choose Halloween games with the audience.',
    cardNote:
      'A more playful build, with themed interaction, voting, and making community input feel easy to follow.',
    detailedDescription:
      'A seasonal web app where viewers suggest and vote on horror games for Halloween streams.',
    image: '/halloweenpage.png',
    imageCaption: 'Halloween Games: community game suggestions and voting',
    liveUrl: 'https://skibenshalloween.vercel.app',
    githubUrl: 'https://github.com/Hallotre/halloween-games',
    tech: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS'],
    gradient: 'from-orange-500 to-red-500',
    slug: 'halloween-games',
    businessType: 'Community engagement tool',
    flare: 'client',
    problem:
      'The streamer needed a simple way for the community to suggest and vote on games without chaotic chat-only coordination.',
    approach:
      'Created a clean voting experience with search, submissions, and moderation, designed to feel fun without becoming hard to use.',
    outcome:
      'A focused seasonal tool that turns community input into a clear shortlist of games.',
    role: 'Concept, design, and front-end development',
  },
  'exam-project-2': {
    title: 'Holidaze',
    shortDescription:
      'An accommodation booking concept with clear browsing for guests and practical tools for venue managers.',
    cardNote:
      'Focused on dual interfaces, filtering, and keeping a denser product experience readable and calm.',
    detailedDescription:
      'A booking platform with separate flows for customers and venue managers, focused on clarity, filtering, and manageable admin tools.',
    image: '/holidaze.png',
    imageCaption: 'Holidaze: accommodation booking for guests and managers',
    liveUrl: 'https://holidaze-five.vercel.app',
    githubUrl: 'https://github.com/Hallotre/holidaze',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    gradient: 'from-green-500 to-emerald-500',
    slug: 'exam-project-2',
    businessType: 'Booking platform',
    flare: 'personal',
    problem:
      'Booking flows often feel cluttered. Guests need to find venues quickly; managers need a usable way to handle listings and bookings.',
    approach:
      'Designed dual interfaces with clear filtering, calendar booking, and admin management, prioritizing readability and responsive layout.',
    outcome:
      'A polished booking concept that presents venues clearly and keeps management tasks understandable.',
    role: 'Structure, interface design, and front-end build',
  },
  'semester-project-2': {
    title: 'Pawsitive',
    shortDescription:
      'A pet adoption site that makes browsing, filtering, and discovering pets feel calm and easy.',
    cardNote:
      'Strong emphasis on visual calm, usable filters, and letting the content lead the experience.',
    detailedDescription:
      'A pet adoption platform connecting families with adoptable pets, with search, filters, detailed profiles, and an admin area for listings.',
    image: '/pawsitive.png',
    imageCaption: 'Pawsitive: pet adoption browsing with clear filters',
    liveUrl: 'https://pawsitive-pet-adoption.vercel.app',
    githubUrl: 'https://github.com/Hallotre/pawsitive',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    gradient: 'from-orange-500 to-amber-500',
    slug: 'semester-project-2',
    businessType: 'Adoption / nonprofit-style platform',
    flare: 'personal',
    problem:
      'Finding the right pet online can feel overwhelming when listings are hard to filter and profiles are unclear.',
    approach:
      'Focused on calm presentation, useful filters, and clear pet profiles so visitors can browse with less friction.',
    outcome:
      'A friendly, readable adoption experience that keeps the focus on the pets and next steps.',
    role: 'UX structure, visual design, and front-end development',
  },
  'javascript-frameworks': {
    title: 'Ecom Store',
    shortDescription:
      'A clean e-commerce concept with product browsing, cart flow, and a checkout path that stays easy to follow.',
    cardNote:
      'About hierarchy, cart flow, and keeping a storefront concept organized without visual clutter.',
    detailedDescription:
      'An e-commerce application with product browsing, cart, checkout, and authentication, built as a clear, responsive storefront experience.',
    image: '/ecomstore.png',
    imageCaption: 'Ecom Store: product browsing and cart experience',
    liveUrl: 'https://ecom-store-ca.netlify.app',
    githubUrl: 'https://github.com/Hallotre/ecom-store-ca',
    tech: ['React', 'TypeScript', 'Vite', 'CSS Modules'],
    gradient: 'from-pink-500 to-violet-500',
    slug: 'javascript-frameworks',
    businessType: 'E-commerce concept',
    flare: 'personal',
    problem:
      'Online stores often bury products and checkout steps behind clutter. Shoppers need a straightforward path from browsing to purchase.',
    approach:
      'Built a focused product experience with clear hierarchy, cart state, and responsive layouts that stay usable on smaller screens.',
    outcome:
      'A storefront concept that feels organized, modern, and easy to navigate.',
    role: 'Interface design and front-end build',
  },
}

/** Homepage display order: mix of client-style and exploratory work */
export const homepageProjectOrder = [
  'skibathon',
  'varden-gym',
  'skiben-site',
  'halloween-games',
  'exam-project-2',
  'semester-project-2',
  'javascript-frameworks',
] as const

export const projectsArray = homepageProjectOrder.map((slug) => projects[slug])
