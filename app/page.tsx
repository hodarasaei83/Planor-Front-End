'use client'

import { FeaturesSection } from '@/features/landing/components/FeaturesSection'
import { HeroSection } from '@/features/landing/components/HeroSection'
import { Footer } from '@/features/shared/components/layout/Footer'
import { Header } from '@/features/shared/components/layout/Header'

export default function Page() {
  return (
    <>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <Footer />
    </>
  )
}
