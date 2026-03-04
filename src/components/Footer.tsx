import Link from 'next/link'
import { cn } from '@/lib/utils'
import { CampsiteIcon } from '@/components/SiteNavigationBar'
import { WidthContainer } from '@/components/Layouts/WidthContainer'
import { XIcon, LinkedInIcon, ThreadsIcon, GithubIcon } from '@/components/ui/Icons'

export function Footer() {
  return (
    <>
      <div className="relative hidden dark:block">
        <div className="absolute bottom-0 left-0 right-0 z-30 h-px bg-gradient-to-r from-white via-neutral-200 to-white dark:from-gray-950 dark:via-gray-750 dark:to-gray-950" />
      </div>

      <div className="flex w-full justify-center border-t py-12 md:py-16 lg:py-20 2xl:py-24 dark:border-transparent">
        <WidthContainer className="grid grid-cols-1 gap-12 sm:grid-cols-5 sm:gap-6">
          <div className="flex flex-col gap-6 sm:col-span-2">
            <Link href="/" className="text-primary select-none">
              <div className="flex items-center gap-1.5">
                <CampsiteIcon />
                <span className="text-primary text-lg font-semibold">Campsite</span>
              </div>
            </Link>
            <div className="flex items-center gap-4">
              {[
                { icon: <XIcon />, label: 'X/Twitter', href: '#' },
                { icon: <ThreadsIcon />, label: 'Threads', href: '#' },
                { icon: <LinkedInIcon />, label: 'LinkedIn', href: '#' },
                { icon: <GithubIcon />, label: 'GitHub', href: '#' },
              ].map((social) => (
                <Link
                  key={social.label}
                  className="text-quaternary hover:text-primary text-sm"
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{social.label}</span>
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          <FooterSection>
            <FooterSectionHeading>Product</FooterSectionHeading>
            <FooterSectionLinks>
              <FooterLink href="/pricing">Pricing</FooterLink>
              <FooterLink href="/blog">Blog</FooterLink>
              <FooterLink href="/changelog">Changelog</FooterLink>
            </FooterSectionLinks>
          </FooterSection>

          <FooterSection>
            <FooterSectionHeading>Apps &amp; integrations</FooterSectionHeading>
            <FooterSectionLinks>
              <FooterLink href="#">Desktop app</FooterLink>
              <FooterLink href="#">API Docs</FooterLink>
              <FooterLink href="#">Linear</FooterLink>
              <FooterLink href="#">Zapier</FooterLink>
              <FooterLink href="#">Figma</FooterLink>
              <FooterLink href="#">Cal.com</FooterLink>
            </FooterSectionLinks>
          </FooterSection>

          <div className="flex flex-col gap-12">
            <FooterSection>
              <FooterSectionHeading>About</FooterSectionHeading>
              <FooterSectionLinks>
                <FooterLink href="/contact">Contact</FooterLink>
                <FooterLink href="#">Status</FooterLink>
                <FooterLink href="/privacy">Privacy</FooterLink>
                <FooterLink href="/terms">Terms</FooterLink>
                <FooterLink href="#">DPA</FooterLink>
                <FooterLink href="#">Cookies</FooterLink>
              </FooterSectionLinks>
            </FooterSection>

            <FooterSection>
              <FooterSectionHeading>Resources</FooterSectionHeading>
              <FooterSectionLinks>
                <FooterLink href="#">Slack glossary</FooterLink>
              </FooterSectionLinks>
            </FooterSection>
          </div>
        </WidthContainer>
      </div>
    </>
  )
}

function FooterSection(props: React.HTMLProps<HTMLDivElement>) {
  return <div className="col-span-1 flex flex-col gap-1" {...props} />
}

function FooterSectionHeading({ children, ...props }: React.HTMLProps<HTMLDivElement>) {
  return (
    <div className="text-primary py-1 text-sm font-medium" {...props}>
      {children}
    </div>
  )
}

function FooterSectionLinks(props: React.HTMLProps<HTMLDivElement>) {
  return <div className="col-span-2 -mx-1 flex flex-wrap gap-2 sm:flex-col" {...props} />
}

function FooterLink({ href, className, children, ...rest }: React.HTMLProps<HTMLAnchorElement>) {
  if (!href) return null
  return (
    <Link href={href} className={cn('text-tertiary hover:text-primary p-1 text-sm', className)} {...rest}>
      {children}
    </Link>
  )
}
