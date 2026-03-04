import { PageContainer } from '@/components/Layouts/PageContainer'
import { Footer } from '@/components/Footer'
import { SiteNavigationBar } from '@/components/SiteNavigationBar'

interface Props {
  children: React.ReactNode
}

export function PageLayout({ children }: Props) {
  return (
    <div className="relative flex flex-1 flex-col">
      <SiteNavigationBar />
      <PageContainer>{children}</PageContainer>
      <div className="flex-1" />
      <Footer />
    </div>
  )
}
