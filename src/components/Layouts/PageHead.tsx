import { cn } from '@/lib/utils'

interface Props {
  title: string
  subtitle?: string
  children?: React.ReactNode
}

export function PageHead({ title, subtitle, children }: Props) {
  return (
    <div className="flex flex-col gap-4 lg:items-center lg:text-center">
      <PageTitle>{title}</PageTitle>
      {subtitle && <PageSubtitle>{subtitle}</PageSubtitle>}
      {children && <>{children}</>}
    </div>
  )
}

export function PageTitle({
  children,
  className,
  id,
}: {
  children: React.ReactNode
  className?: string
  id?: string
}) {
  return (
    <h1
      id={id}
      className={cn(
        'text-primary text-[clamp(2.4rem,_4vw,_4rem)] font-semibold text-balance leading-[1.1] -tracking-[1px] lg:-tracking-[1.8px]',
        className,
        id && 'scroll-mt-20'
      )}
    >
      {children}
    </h1>
  )
}

export function PageSubtitle({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <h2
      className={cn(
        'text-secondary max-w-5xl text-[clamp(1.1rem,_2vw,_1.4rem)] font-medium text-balance leading-relaxed -tracking-[0.1px] md:-tracking-[0.2px] lg:-tracking-[0.3px] xl:-tracking-[0.4px]',
        className
      )}
    >
      {children}
    </h2>
  )
}
