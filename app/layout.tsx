import type { Metadata } from 'next'
import './../styles/globals.css'
import { Providers } from '@/features/shared/providers/providers'
import { cn } from '@/lib/utils'
import localFont from 'next/font/local'

const iranyekan = localFont({
  src: [
    {
      path: './fonts/IRANYekanXFaNum-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/IRANYekanXFaNum-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/IRANYekanXFaNum-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/IRANYekanXFaNum-DemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/IRANYekanXFaNum-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-iranyekan',
  display: 'swap',
})

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
      className={cn('h-full', 'antialiased', 'font-sans', iranyekan.variable)}
    >
      <body className="min-h-full flex flex-col {iranyekan.variable}">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
