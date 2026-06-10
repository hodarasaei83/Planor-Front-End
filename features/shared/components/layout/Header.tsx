'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
// import { ThemeToggle } from '../ui/ThemeToggle'

export const Header = () => {
  return (
    <>
      <div className="flex justify-between items-center mx-9 my-4">
        <div className="flex items-center justify-between space-x-3">
          {/* <ThemeToggle /> */}
          <Button asChild size={'lg'}>
            <Link href="/register">کار با پلنور را شروع کنید</Link>
          </Button>
          <Button asChild variant={'secondary'} size={'lg'}>
            <Link href="/login">ورود</Link>
          </Button>
        </div>
        <Image src="/favicon.ico" width={100} height={100} alt="logo" />
      </div>
    </>
  )
}
