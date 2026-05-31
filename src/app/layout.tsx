import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rishal | Full-Stack Software Developer & Systems Engineer",
  description: "Explore the portfolio of Rishal, a professional Full-Stack Software Developer specializing in Next.js, Node.js, TypeScript, and high-performance cloud architectures. Browse interactive projects, technical experience, and get in touch.",
  keywords: ["Rishal", "Software Developer", "Full-Stack Engineer", "Next.js Portfolio", "React Developer", "TypeScript", "Node.js", "Web Developer"],
  authors: [{ name: "Rishal" }],
  creator: "Rishal",
  openGraph: {
    title: "Rishal | Full-Stack Software Developer Portfolio",
    description: "High-performance web applications, interactive tools, and robust system architectures by Rishal.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rishal | Full-Stack Software Developer",
    description: "Explore interactive projects and professional software solutions.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} data-theme="dark">
      <body>
        <div className="bg-glow-container" aria-hidden="true">
          <div className="bg-grid-overlay"></div>
        </div>
        {children}
      </body>
    </html>
  );
}

