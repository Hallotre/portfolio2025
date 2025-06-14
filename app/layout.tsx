import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio | Creative Developer",
  description: "A showcase of creative development work featuring modern design and innovative solutions.",
  keywords: ["portfolio", "developer", "web development", "design", "creative"],
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
