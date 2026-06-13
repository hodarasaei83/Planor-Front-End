'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const HeroSection = () => {
  return (
    <div className="h-[calc(100lvh-110px)] flex flex-col justify-center">
      <h1 className="scroll-m-20 text-center text-4xl font-bold text-balance">
        پلنور، مدیریت وظایف و
      </h1>
      <h1 className="scroll-m-20 text-center text-4xl font-bold text-balance text-primary mt-1">
        پروژه‌ها به صورت بصری{' '}
      </h1>
      <p className="leading-7 not-first:mt-6 text-center text-balance">
        پلنور یک فضای کاری آرامش‌بخش برای تیم‌ها است تا بدون استرس، پروژه‌ها را
        برنامه‌ریزی، پیگیری و همکاری کنند. ساده، بصری و لذت‌بخش.
      </p>
      <div className="flex items-center justify-center space-x-4 mt-7">
        <Button asChild size={'lg'}>
          <Link href="/login">شروع برنامه ریزی با پلنور</Link>
        </Button>
      </div>
    </div>
  )
}
