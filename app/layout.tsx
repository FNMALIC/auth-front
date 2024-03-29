import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
// import Navbar from '@/components/common/Navbar'
// import Footer from '@/components/common/Footer'
import { Footer,Navbar } from '@/components/common'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Full Auth',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <div>
        {children}
        </div>
        <Footer/>
        </body>
    </html>
  )
}
