import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Egere Ofejiro | Full-Stack Developer",
  description:
    "Portfolio of Egere Ofejiro, a frontend and full-stack developer building modern web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} bg-[var(--background)] text-[var(--foreground)] antialiased`}
      >
        <Navbar />

        <main className="min-h-screen pt-20">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
