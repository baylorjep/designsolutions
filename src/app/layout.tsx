import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Design Solutions',
  description: 'Beautiful, functional interior design solutions that transform spaces and inspire lives. View our portfolio of residential and commercial projects.',
  keywords: 'interior design, portfolio, residential design, commercial design, luxury interiors',
  authors: [{ name: 'Design Solutions' }],
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Design Solutions',
    description: 'Beautiful, functional interior design solutions that transform spaces and inspire lives.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
