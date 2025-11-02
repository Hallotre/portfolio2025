import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Haywood | Creative Developer",
  description: "Transforming ideas into beautiful, functional digital experiences with modern web technologies. Specializing in React, Next.js, and TypeScript.",
  keywords: ["portfolio", "developer", "web development", "design", "creative", "Toby Haywood", "React", "Next.js", "TypeScript", "Frontend Developer"],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
      },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Haywood | Creative Developer",
    description: "Transforming ideas into beautiful, functional digital experiences with modern web technologies.",
    type: "website",
  },
  authors: [{ name: "Toby Haywood" }],
  creator: "Toby Haywood",
  publisher: "Toby Haywood",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#000000" />
      </head>
      <body className="antialiased overflow-x-hidden">
        <div className="relative min-h-screen">
          {/* Background effects */}
          <div className="fixed inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-gray-900" />
            <div className="absolute inset-0 grid-pattern opacity-[0.02]" />
          </div>
          
          {children}
        </div>
      </body>
    </html>
  );
}
