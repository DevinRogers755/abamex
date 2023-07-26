import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollToTopButton from '@/components/ScrollToTopButton'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lubricantes Industriales Abamex',
  description: 'Lubricantes Industriales Abamex',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#F2F2F2]`}>
        <div className='relative z-50'><Navbar /></div>
        {children}
        <Footer />
        <ScrollToTopButton />
      </body>
    </html>
  )
}
