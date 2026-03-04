'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils'

export interface ButtonProps {
  children?: React.ReactNode
  className?: string
  variant?: 'base' | 'primary' | 'flat' | 'plain' | 'brand' | 'text' | 'none'
  size?: 'sm' | 'base' | 'large'
  href?: string
  onClick?: () => void
  fullWidth?: boolean
  round?: boolean
  iconOnly?: React.ReactNode | boolean
  accessibilityLabel?: string
  rightSlot?: React.ReactNode
  target?: string
  rel?: string
}

const variantClasses: Record<string, string> = {
  base: 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-750 shadow-sm',
  primary: 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100',
  flat: 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700',
  plain: 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100',
  brand: 'bg-gradient-to-b from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 shadow-sm',
  text: 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 underline-offset-2',
  none: '',
}

const sizeClasses: Record<string, string> = {
  sm: 'px-2.5 py-1 text-xs',
  base: 'px-3 py-1.5 text-sm',
  large: 'px-4 py-2.5 text-base',
}

export function Button({
  children,
  className,
  variant = 'base',
  size = 'base',
  href,
  onClick,
  fullWidth,
  round,
  iconOnly,
  accessibilityLabel,
  rightSlot,
  target,
  rel,
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 font-medium transition-colors duration-100 select-none',
    round ? 'rounded-full' : 'rounded-lg',
    variantClasses[variant],
    sizeClasses[size],
    fullWidth && 'w-full',
    iconOnly && 'p-2',
    className
  )

  const content = (
    <>
      {typeof iconOnly === 'object' ? iconOnly : children}
      {rightSlot && <span className="flex items-center">{rightSlot}</span>}
    </>
  )

  if (href) {
    return (
      <Link href={href} className={classes} target={target} rel={rel} aria-label={accessibilityLabel}>
        {content}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={classes} aria-label={accessibilityLabel}>
      {content}
    </button>
  )
}
