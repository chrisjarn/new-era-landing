'use client'

import { cn } from '@/lib/utils'

interface UITextProps {
  children: React.ReactNode
  className?: string
  element?: string
  size?: string
  weight?: string
  primary?: boolean
  secondary?: boolean
  tertiary?: boolean
  quaternary?: boolean
  inherit?: boolean
  id?: string
}

export function UIText({
  children,
  className,
  element = 'span',
  size,
  weight,
  primary,
  secondary,
  tertiary,
  quaternary,
  inherit,
  id,
}: UITextProps) {
  const classes = cn(
    'text-sm',
    size,
    weight,
    primary && 'text-primary',
    secondary && 'text-secondary',
    tertiary && 'text-tertiary',
    quaternary && 'text-quaternary',
    inherit && 'text-inherit',
    className
  )

  switch (element) {
    case 'h1': return <h1 id={id} className={classes}>{children}</h1>
    case 'h2': return <h2 id={id} className={classes}>{children}</h2>
    case 'h3': return <h3 id={id} className={classes}>{children}</h3>
    case 'p': return <p id={id} className={classes}>{children}</p>
    case 'div': return <div id={id} className={classes}>{children}</div>
    default: return <span id={id} className={classes}>{children}</span>
  }
}
