interface Props {
  children: React.ReactNode
}

export function PageContainer({ children }: Props) {
  return <main className="flex flex-1 flex-col">{children}</main>
}
