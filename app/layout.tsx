import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Toby Haywood | Portfolio",
  description: "A showcase of creative development work featuring modern design and innovative solutions.",
  keywords: ["portfolio", "developer", "web development", "design", "creative", "Toby Haywood"],
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
    title: "Portfolio | Creative Developer",
    description: "A showcase of creative development work featuring modern design and innovative solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-black text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
