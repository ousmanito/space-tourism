import './globals.css'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar/Navbar'
import { barlow } from './fonts'


export const metadata: Metadata = {
  title: 'Space Challenge V2',
  description: 'FrontEndChallenge',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={barlow.className}>
        <Navbar/>
        {children}
        </body>
    </html>
  )
}
