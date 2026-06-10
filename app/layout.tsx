import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './../styles/globals.css'
import { Providers } from '@/features/shared/providers/providers'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: 'Planor | مدیریت تسک‌ها و پروژه‌ها',
  description: 'ابزار حرفه‌ای برای مدیریت پروژه و تسک‌های تیمی',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={cn('h-full', 'antialiased', 'font-sans', inter.variable)}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
