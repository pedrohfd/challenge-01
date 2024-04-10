import * as React from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'

import { cn } from '@/lib/utils'

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      'flex size-4 shrink-0 items-center justify-center rounded-full border-2 border-blue-500 transition-all hover:border-blue-600 hover:bg-blue-600 hover:bg-opacity-20 data-[state=checked]:border-violet-600 data-[state=checked]:bg-violet-600 data-[state=checked]:hover:border-violet-500 data-[state=checked]:hover:bg-violet-500',
      className,
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn('text-current flex items-center justify-center')}
    >
      <CheckIcon className="size-3.5" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
