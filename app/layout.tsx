import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { PERSON } from "./lib/content";
import "./globals.css";

/* Self-hosted via next/font — no render-blocking external requests, no layout
   shift. Exposed as CSS variables consumed throughout globals.css. */
const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});
const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${PERSON.name} — ${PERSON.role}`,
  description:
    "Yu Ming Law — first-year Computer Science student at HKUST building " +
    "full-stack web platforms and cross-platform mobile apps used by 500+ people.",
  keywords: [
    "Yu Ming Law",
    "HKUST",
    "Computer Science",
    "Software Developer",
    "Full-stack",
    "Portfolio",
  ],
  authors: [{ name: PERSON.name }],
  openGraph: {
    title: `${PERSON.name} — ${PERSON.role}`,
    description:
      "Computer Science student at HKUST building practical software, " +
      "from full-stack web to mobile apps.",
    type: "website",
    locale: "en_US",
  },
  twitter: { card: "summary_large_image", title: `${PERSON.name}` },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${display.variable} ${mono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
