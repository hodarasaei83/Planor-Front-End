'use client'

import { Button } from '@/components/ui/button'
import { Icon } from '../../icons'

export const Footer = () => {
  return (
    <div className="flex justify-between items-center p-10 bg-secondary max-w-full">
      <div>
        <Button variant={'link'}>پشتیبانی</Button>
        <Button variant={'link'}>درباره ما</Button>
      </div>
      <div className="flex gap-1">
        <span className="text-muted-foreground">
          تمامی حقوق متعلق به تیم پلنور است
        </span>
        <Icon
          name="solar-copyright-outline"
          className="text-muted-foreground"
        />
      </div>
    </div>
  )
}
