import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DesignSolutions | Interior Design Portfolio",
  description: "Beautiful, modern interior design solutions for your home. Transform your space with elegant, thoughtful design.",
  keywords: "interior design, home design, modern interiors, luxury design, residential design",
  authors: [{ name: "DesignSolutions" }],
  openGraph: {
    title: "DesignSolutions | Interior Design Portfolio",
    description: "Beautiful, modern interior design solutions for your home.",
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
      <body className={inter.className}>
        <div className="min-h-screen bg-white">
          {children}
        </div>
      </body>
    </html>
  );
}
