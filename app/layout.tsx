import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono, Outfit } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Geometric Seven Studio — Software Development & Digital Craftsmanship",
  description:
    "Geometric Seven Studio is a premium software development studio specializing in frontend engineering, backend architecture, and game development. We groom talent and build digital empires.",
  keywords: [
    "software development",
    "frontend development",
    "backend development",
    "game development",
    "Geometric Seven",
    "G7 Studio",
    "web development",
    "digital studio",
  ],
  authors: [{ name: "Geometric Seven Studio" }],
  openGraph: {
    title: "Geometric Seven Studio",
    description: "Premium Software Development & Digital Craftsmanship",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} ${outfit.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
