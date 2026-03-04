import { cn } from '@/lib/utils'

const colorClasses: Record<string, string> = {
  default: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300',
  blue: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
  green: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300',
  brand: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300',
  orange: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300',
  amber: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300',
}

interface BadgeProps {
  children: React.ReactNode
  className?: string
  color?: string
}

export function Badge({ children, className, color = 'default' }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium',
        colorClasses[color] || colorClasses.default,
        className
      )}
    >
      {children}
    </span>
  )
}
