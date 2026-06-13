// components/ui/icon.tsx
import * as React from 'react'
import { cn } from '@/lib/utils'

import type { IconName } from '../types/icons.type'

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName
  size?: number | string
  color?: string
  className?: string
}

const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ name, size = 24, color = 'currentColor', className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={color}
        className={cn(className)}
        {...props}
      >
        <use href={`/icons/icons.svg#${name}`} />
      </svg>
    )
  }
)

Icon.displayName = 'Icon'

export { Icon }
