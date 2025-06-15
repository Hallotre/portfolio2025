# Portfolio 2025

A modern, responsive personal portfolio website built with Next.js 15, showcasing creative development skills and projects with smooth animations and an elegant design.

## 🚀 Live Demo

Visit the live portfolio: [Portfolio 2025](https://your-portfolio-url.com)

## ✨ Features

- **Modern Design**: Clean, professional layout with glassmorphism effects
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Animations**: Beautiful animations powered by Framer Motion
- **Fast Performance**: Built with Next.js 15 and optimized for speed
- **Type Safe**: Full TypeScript implementation
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Accessible**: Built with accessibility best practices

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **UI**: React 19

### Development Tools
- **Package Manager**: npm
- **Linting**: ESLint
- **Code Formatting**: Built-in Next.js formatting
- **Development Server**: Turbopack (Next.js 15)

## 🏗️ Project Structure

```
portfolio2025-1/
├── app/
│   ├── globals.css          # Global styles and Tailwind configuration
│   ├── layout.tsx           # Root layout component
│   ├── page.tsx            # Main homepage with all sections
│   └── projects/           # Project-specific pages
├── lib/
│   └── projects.ts         # Project data and configurations
├── public/
│   ├── portrait.png        # Profile image
│   ├── holidaze.png        # Project screenshots
│   ├── ecomstore.png       # Project screenshots
│   └── [favicons]          # Various favicon files
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── next.config.ts         # Next.js configuration
```

## 🚦 Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/hallotre/portfolio2025-1.git
   cd portfolio2025-1
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the portfolio.

## 📝 Customization

### Adding Your Content

1. **Update Personal Information**
   - Edit the hero section in `app/page.tsx`
   - Replace `public/portrait.png` with your own photo
   - Update the about section with your information

2. **Add Your Projects**
   - Edit `lib/projects.ts` to add your project data
   - Add project images to the `public/` directory
   - Update project links and descriptions

3. **Customize Styling**
   - Modify global styles in `app/globals.css`
   - Adjust color schemes and animations as needed
   - Update the gradient colors to match your brand

4. **Update Metadata**
   - Edit `app/layout.tsx` for SEO meta tags
   - Update `site.webmanifest` for PWA configuration
   - Replace favicon files in the `public/` directory

## 🎨 Sections Included

- **Hero Section**: Eye-catching introduction with animated background
- **About**: Personal introduction and professional background
- **Projects**: Showcase of featured work with live demos and source code
- **Skills**: Technical skills organized by categories
- **Contact**: Contact information and social links

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)


## 🛠️ Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint to check for code issues

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
