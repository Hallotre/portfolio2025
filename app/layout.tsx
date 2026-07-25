import type { Metadata } from "next";
import { Instrument_Serif, Manrope } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-heading",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Toby Haywood | Frontend developer & clean digital experiences",
  description:
    "Frontend developer based in Norway. A personal portfolio of design-minded web work, experiments, and selected freelance projects.",
  keywords: [
    "Toby Haywood",
    "frontend developer",
    "portfolio",
    "freelance",
    "Norway",
    "web design",
  ],
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
    title: "Toby Haywood | Frontend developer & clean digital experiences",
    description:
      "A personal portfolio of design-minded web work, experiments, and selected freelance projects.",
    type: "website",
  },
  authors: [{ name: "Toby Haywood" }],
  creator: "Toby Haywood",
  publisher: "Toby Haywood",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${instrumentSerif.variable} ${manrope.variable}`}
    >
      <head>
        <meta name="theme-color" content="#f5f1ea" />
      </head>
      <body className="antialiased overflow-x-hidden bg-[var(--color-bg)] text-[var(--color-text-primary)]">
        {children}
      </body>
    </html>
  );
}
