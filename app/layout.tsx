import clsx from 'clsx'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Ecommerce Next JS',
  description: 'Ecommerce project',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang='en'
      className={clsx('h-full bg-gray-50 antialiased', inter.variable)}
    >
      <body className='flex h-full flex-col'>
        <div className='flex min-h-full flex-col'>{children}</div>
      </body>
    </html>
  )
}
