'use client'

import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { ArrowRightCircleIcon, SmartSummaryIcon, CheckCircleFilledIcon, BellIcon } from '@/components/ui/Icons'
import { CustomerLogos } from '@/components/Home/CustomerLogos'
import { PageTitle } from '@/components/Layouts/PageHead'
import { WidthContainer } from '@/components/Layouts/WidthContainer'
import { FounderNote } from './FounderNote'
import { FAQ } from './HomeFAQ'
import { Testimonial } from './Testimonial'
import { Avatar } from '@/components/ui/Avatar'

export function Manifesto() {
  return (
    <div className="w-full overflow-hidden">
      <WidthContainer className="max-w-2xl gap-4 pt-12 md:pt-16 lg:pt-20 lg:text-center xl:pt-24 2xl:pt-28">
        <PageTitle className="leading-[1]">Teamwork, meet deep work</PageTitle>

        <SectionText className="text-wrap text-[clamp(1.1rem,_2vw,_1.4rem)] font-medium">
          The new standard for thoughtful team communication — replace noisy chats with focused, organized posts.
        </SectionText>

        <div className="mt-2">
          <CTA />
        </div>

        <CustomerLogos />
      </WidthContainer>

      <Screenshots />

      <WidthContainer className="isolate max-w-2xl gap-20 py-12 md:gap-24 md:py-16 lg:gap-28 lg:py-20 xl:gap-32 xl:py-24 2xl:gap-32 2xl:py-28">
        <Section>
          <SectionHeading className="lg:text-center">Posts are the sweet spots between chat and docs</SectionHeading>
          <PostsGraphic />
        </Section>

        <Section>
          <SectionHeading className="lg:text-center">
            Posts keep team communication transparent, decisive, and async-friendly
          </SectionHeading>

          <div className="flex flex-col gap-6 py-6">
            {/* Summarize */}
            <div className="grid gap-4 md:grid-cols-2 md:gap-5 lg:gap-6">
              <div className="bg-tertiary-surface flex transform select-none items-center justify-center rounded-xl border border-gray-200/50 p-4 md:aspect-video dark:border-transparent dark:bg-gray-900">
                <div className="bg-elevated-surface flex w-full items-start gap-3 rounded-lg border border-gray-200/50 px-3 py-2 shadow dark:border-gray-700 dark:bg-gray-800">
                  <SmartSummaryIcon size={32} />
                  <div className="flex flex-1 flex-col">
                    <span className="text-sm font-medium">Show summary</span>
                    <span className="text-tertiary text-sm">34 comments</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-3 md:flex-col md:justify-center md:gap-1">
                <div className="flex flex-col gap-1.5">
                  <p className="text-base font-medium">Summarize</p>
                  <p className="text-tertiary text-balance text-base leading-[1.4]">
                    Recap long discussions with one-click smart summaries
                  </p>
                </div>
              </div>
            </div>

            {/* Resolve */}
            <div className="grid gap-4 md:grid-cols-2 md:gap-5 lg:gap-6">
              <div className="bg-tertiary-surface transform select-none overflow-hidden rounded-xl border border-gray-200/50 pl-4 pt-4 md:aspect-video md:pl-5 md:pt-5 dark:border-transparent dark:bg-gray-900">
                <div className="bg-elevated-surface flex h-full w-full flex-col gap-1 rounded-tl-lg border-l border-t border-gray-200/50 p-4 shadow dark:border-gray-700 dark:bg-gray-800">
                  <Badge className="mb-2.5 h-auto self-start rounded-full py-2 pl-[9px] pr-3.5" color="green">
                    <span className="flex items-center gap-2">
                      <CheckCircleFilledIcon size={14} />
                      <span className="-mb-[0.5px] text-[11px] tracking-wide">Resolved</span>
                    </span>
                  </Badge>
                  <span className="min-w-[300px] text-sm font-medium">Marketing site launch plan</span>
                  <div className="flex flex-col gap-2.5 py-2">
                    <div className="bg-quaternary-surface h-2 w-[90%] rounded-full" />
                    <div className="bg-quaternary-surface h-2 w-[60%] rounded-full" />
                    <div className="bg-quaternary-surface h-2 w-[75%] rounded-full" />
                  </div>
                </div>
              </div>
              <div className="flex gap-3 md:flex-col md:justify-center md:gap-1">
                <div className="flex flex-col gap-1.5">
                  <p className="text-base font-medium">Resolve</p>
                  <p className="text-tertiary text-balance text-base leading-[1.4]">
                    Close the loop with magically-generated resolutions
                  </p>
                </div>
              </div>
            </div>

            {/* Follow up */}
            <div className="grid gap-4 md:grid-cols-2 md:gap-5 lg:gap-6">
              <div className="bg-tertiary-surface relative flex transform select-none flex-col gap-3 overflow-hidden rounded-xl border border-gray-200/50 pl-4 pt-4 md:aspect-video dark:border-transparent dark:bg-gray-900">
                <div className="bg-elevated-surface flex w-[700px] flex-none rounded-tl-lg border-l border-t border-gray-200/50 shadow dark:border-gray-700 dark:bg-gray-800">
                  <div className="flex h-full w-[320px] flex-col border-r border-gray-200/50 dark:border-gray-700">
                    <div className="flex items-center gap-0.5 border-b border-gray-200/50 p-2 dark:border-gray-700">
                      <Button variant="plain" size="sm">Inbox</Button>
                      <Button variant="flat" size="sm">Follow up</Button>
                    </div>
                    <div className="flex flex-col gap-px p-1.5">
                      <div className="flex select-none gap-3 rounded-lg p-2 pr-2.5">
                        <Avatar src="/img/team/alexandru.png" name="Alexandru" size="sm" />
                        <div className="flex flex-1 flex-col gap-0.5">
                          <span className="text-sm text-amber-500">Follow up in 1h</span>
                          <span className="text-sm font-medium">Q2 Investor Update</span>
                          <div className="flex flex-col gap-2.5 py-2">
                            <div className="bg-quaternary-surface h-2 w-[90%] rounded-full" />
                            <div className="bg-quaternary-surface h-2 w-[60%] rounded-full" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-3 md:flex-col md:justify-center md:gap-1">
                <div className="flex flex-col gap-1.5">
                  <p className="text-base font-medium">Follow up</p>
                  <p className="text-tertiary text-balance text-base leading-[1.4]">
                    Set a reminder to revisit any conversation
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Testimonial
            link="https://x.com/benedictfritz"
            byline="Benedict Fritz, Co-founder at Arrows"
            avatar="/img/home/benedict.jpg"
          >
            <span>
              <Highlight>Campsite is the perfect tool for async communication.</Highlight> Working in Slack can feel
              suffocating. Campsite gives your thoughts the room to breathe that they need.
            </span>
          </Testimonial>
        </Section>

        <Section>
          <SectionHeading className="lg:text-center">
            Connect the dots between posts and easily reference past decisions
          </SectionHeading>

          <ConnectTheDotsGraphic />

          <Testimonial
            link="https://x.com/ryanolsonk"
            byline="Ryan Olson, CTO at Retro"
            avatar="/img/home/ryanolson.jpg"
          >
            <span>
              Campsite is like the office for our remote team. It&apos;s a delightful space where we jam on ideas and{' '}
              <Highlight>keep everyone updated on work-in-progress.</Highlight>
            </span>
          </Testimonial>
        </Section>

        <Section>
          <SectionHeading className="lg:text-center">
            Follow teams &amp; projects without drowning in notifications
          </SectionHeading>

          <KnowledgeSilosGraphic />

          <Testimonial
            link="https://x.com/peer_rich"
            byline="Peer Richelsen, Co-founder at Cal.com"
            avatar="/img/home/peer.jpg"
          >
            <span>
              We went from Slack to Twist to Threads and finally found the best async-first tool for our remote team.{' '}
              <Highlight>Campsite allows us to be more mindful with posts without distracting everyone.</Highlight> It&apos;s
              a huge productivity bonus over Slack.
            </span>
          </Testimonial>
        </Section>

        <Section>
          <SectionHeading className="lg:text-center">
            Direct messages and quick calls for everything in-between
          </SectionHeading>
          <CallsChatGraphic />
        </Section>

        <Section className="gap-8">
          <FounderNote />
          <CTA />
        </Section>

        <Section>
          <SectionHeading>Common questions</SectionHeading>
          <FAQ />
        </Section>
      </WidthContainer>
    </div>
  )
}

export function SectionHeading({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <h3
      className={cn(
        'scroll-mt-20 text-balance text-[clamp(1.5rem,_3vw,_1.8rem)] font-semibold leading-[1.2] -tracking-[0.5px]',
        className
      )}
    >
      {children}
    </h3>
  )
}

export function SectionText({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p
      className={cn(
        'text-secondary text-balance text-[clamp(1rem,_2vw,_1.1rem)] leading-relaxed -tracking-[0.1px] md:-tracking-[0.2px] lg:-tracking-[0.3px] xl:-tracking-[0.4px]',
        className
      )}
    >
      {children}
    </p>
  )
}

export function Section({ children, className }: { children: React.ReactNode; className?: string }) {
  return <section className={cn('flex flex-col gap-4', className)}>{children}</section>
}

function CTA() {
  return (
    <div className="flex flex-col gap-2">
      <Button
        size="large"
        variant="brand"
        href="/start"
        rightSlot={<ArrowRightCircleIcon size={28} />}
        fullWidth
      >
        Start for free
      </Button>
      <p className="text-quaternary mt-1 text-balance text-center text-xs">
        14-day free trial, no credit card required. Up and running in two minutes.
      </p>
    </div>
  )
}

function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <span className="-mx-0.5 rounded bg-amber-100 decoration-clone px-0.5 text-amber-950 dark:bg-amber-500/20 dark:text-amber-100">
      {children}
    </span>
  )
}

function Screenshots() {
  return (
    <WidthContainer className="py-8 md:py-12 lg:py-16">
      <div className="bg-tertiary-surface relative mx-auto flex aspect-video w-full max-w-5xl items-center justify-center overflow-hidden rounded-2xl border border-gray-200/50 shadow-lg dark:border-gray-800">
        <div className="flex flex-col items-center gap-3 p-8 text-center">
          <div className="bg-elevated-surface w-full max-w-md rounded-xl border border-gray-200/50 p-4 shadow dark:border-gray-700 dark:bg-gray-800">
            <div className="flex items-center gap-3">
              <Image alt="Brian" src="/img/team/brian.jpeg" width={40} height={40} className="h-10 w-10 rounded-full" />
              <div className="flex flex-1 flex-col gap-1 text-left">
                <span className="text-sm font-medium">What we&apos;re working on</span>
                <div className="flex items-center gap-2">
                  <span className="bg-quaternary-surface rounded px-1.5 py-0.5 text-[10px] font-semibold uppercase text-gray-500">34</span>
                  <span className="text-tertiary text-sm">Brian: Hey everyone, thanks for joining...</span>
                </div>
              </div>
              <span className="text-quaternary rounded-full border border-gray-200/50 px-2 py-0.5 text-xs dark:border-gray-700">
                Product
              </span>
            </div>
          </div>
          <div className="bg-elevated-surface w-full max-w-md rounded-xl border border-gray-200/50 p-4 opacity-60 shadow dark:border-gray-700 dark:bg-gray-800">
            <div className="flex items-center gap-3">
              <Image alt="Nick" src="/img/team/nick.jpeg" width={40} height={40} className="h-10 w-10 rounded-full" />
              <div className="flex flex-1 flex-col gap-1 text-left">
                <span className="text-sm font-medium">Improving blog post SEO</span>
                <div className="bg-quaternary-surface h-2 w-3/4 rounded-full" />
              </div>
            </div>
          </div>
          <div className="bg-elevated-surface w-full max-w-md rounded-xl border border-gray-200/50 p-4 opacity-40 shadow dark:border-gray-700 dark:bg-gray-800">
            <div className="flex items-center gap-3">
              <Image alt="Ryan" src="/img/team/ryan.jpg" width={40} height={40} className="h-10 w-10 rounded-full" />
              <div className="flex flex-1 flex-col gap-1 text-left">
                <span className="text-sm font-medium">Onboarding funnel analysis</span>
                <div className="flex items-center gap-2">
                  <Badge color="green" className="text-[10px]">Resolved</Badge>
                  <div className="bg-quaternary-surface h-2 flex-1 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </WidthContainer>
  )
}

function PostsGraphic() {
  return (
    <div className="mb-4 mt-4 flex flex-col gap-6 lg:-mx-4 xl:-mx-6 2xl:-mx-8">
      <div className="group/posts relative flex items-center justify-center">
        <div className="bg-elevated-surface relative min-h-[68px] w-full select-none rounded-xl border border-gray-200/50 px-4 py-3 shadow-sm dark:border-gray-700">
          <div className="flex gap-3">
            <div className="mt-0.5">
              <Image alt="Brian" src="/img/team/brian.jpeg" width={80} height={80} className="h-10 w-10 rounded-full" />
            </div>
            <div className="flex flex-1 flex-row items-center gap-3">
              <div className="flex flex-1 items-center">
                <div className="flex flex-1 flex-col gap-0.5">
                  <span className="text-[15px] font-medium">What we&apos;re working on &middot; September 2024</span>
                  <div className="flex items-center">
                    <span className="mr-2 mt-px flex items-center justify-center self-start rounded bg-black/[0.04] px-1.5 py-0.5 text-[10px] font-semibold uppercase text-gray-500 dark:bg-white/10">
                      34
                    </span>
                    <span className="text-tertiary line-clamp-1 flex-1 text-sm">
                      Brian: Hey everyone, thanks for joining this space and sharing feedback!
                    </span>
                  </div>
                </div>
              </div>
              <span className="text-quaternary flex items-center gap-1 rounded-full border border-gray-200/50 px-2 py-0.5 text-xs dark:border-gray-700">
                Product
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ConnectTheDotsGraphic() {
  return (
    <div className="mb-2 flex flex-col items-center justify-center py-4 md:py-6">
      <div className="grid w-full max-w-lg gap-4">
        <div className="bg-elevated-surface rounded-xl border border-gray-200/50 p-4 shadow-sm dark:border-gray-700">
          <div className="flex items-center gap-3">
            <Image alt="Dan" src="/img/team/dan.jpg" width={40} height={40} className="h-8 w-8 rounded-full" />
            <div className="flex flex-col">
              <span className="text-sm font-medium">API migration plan</span>
              <span className="text-tertiary text-xs">Dan &middot; 2 days ago</span>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <svg width="2" height="24" viewBox="0 0 2 24" fill="none">
            <path d="M1 0V24" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="text-gray-300 dark:text-gray-600" />
          </svg>
        </div>
        <div className="bg-elevated-surface rounded-xl border border-gray-200/50 p-4 shadow-sm dark:border-gray-700">
          <div className="flex items-center gap-3">
            <Image alt="Brian" src="/img/team/brian.jpeg" width={40} height={40} className="h-8 w-8 rounded-full" />
            <div className="flex flex-col">
              <span className="text-sm font-medium">Q3 product roadmap</span>
              <span className="text-tertiary text-xs">Brian &middot; 1 week ago</span>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <svg width="2" height="24" viewBox="0 0 2 24" fill="none">
            <path d="M1 0V24" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="text-gray-300 dark:text-gray-600" />
          </svg>
        </div>
        <div className="bg-elevated-surface rounded-xl border border-gray-200/50 p-4 shadow-sm dark:border-gray-700">
          <div className="flex items-center gap-3">
            <Image alt="Ryan" src="/img/team/ryan.jpg" width={40} height={40} className="h-8 w-8 rounded-full" />
            <div className="flex flex-col">
              <span className="text-sm font-medium">Infrastructure improvements</span>
              <span className="text-tertiary text-xs">Ryan &middot; 2 weeks ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function KnowledgeSilosGraphic() {
  return (
    <div className="relative mb-2 flex flex-col items-center justify-center py-4 md:py-6 lg:flex-row lg:p-12 lg:py-10 xl:py-12">
      <div className="bg-elevated-surface relative flex min-w-[240px] -rotate-[4deg] flex-col gap-px rounded-xl border border-gray-200/50 p-2 shadow dark:border-gray-700 lg:translate-x-3">
        {['📈 Q4 growth', '⚙️ Engineering', '🔮 Design', '🚩 Announcements', '🎱 Watercooler'].map((item, i) => (
          <div
            key={item}
            className={cn(
              'flex select-none items-center gap-3 rounded-lg p-2',
              i === 0 ? 'bg-tertiary-surface dark:bg-gray-750' : 'text-quaternary'
            )}
          >
            <span className="text-sm">{item.split(' ')[0]}</span>
            <span className={cn('text-sm', i === 0 && 'font-medium')}>{item.split(' ').slice(1).join(' ')}</span>
          </div>
        ))}
      </div>

      <div className="bg-elevated-surface relative -mt-8 flex min-w-[280px] max-w-[320px] rotate-3 select-none flex-col gap-4 rounded-xl border border-gray-200/50 p-4 shadow md:mt-0 md:-translate-x-3 dark:border-gray-700">
        <div className="flex flex-col">
          <div className="bg-tertiary-surface mb-2 flex aspect-square items-center justify-center self-start rounded-lg p-1 dark:bg-white/5">
            <span className="text-xl">📈</span>
          </div>
          <span className="text-base font-semibold">Q4 growth</span>
          <div className="flex flex-col gap-2.5 py-2">
            <div className="bg-quaternary-surface h-1.5 w-[90%] rounded-full" />
            <div className="bg-quaternary-surface h-1.5 w-[70%] rounded-full" />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex -space-x-1">
            {['/img/team/alexandru.png', '/img/team/dan.jpg', '/img/team/nick.jpeg'].map((src) => (
              <Image key={src} src={src} alt="" width={24} height={24} className="h-6 w-6 rounded-full border-2 border-white dark:border-gray-850" />
            ))}
          </div>
          <span className="text-quaternary text-xs">+29</span>
        </div>

        <div className="flex items-center gap-1.5">
          <Button fullWidth size="sm">Join channel</Button>
          <Button variant="flat" size="sm" iconOnly={<BellIcon size={16} />} accessibilityLabel="Subscribe" />
        </div>
      </div>
    </div>
  )
}

function CallsChatGraphic() {
  return (
    <div className="mb-2 flex flex-col items-center justify-center py-4 md:py-6">
      <div className="grid w-full max-w-2xl gap-4 md:grid-cols-2">
        {/* DMs */}
        <div className="bg-elevated-surface flex flex-col rounded-xl border border-gray-200/50 shadow dark:border-gray-700">
          <div className="border-b border-gray-200/50 p-3 dark:border-gray-700">
            <span className="text-sm font-semibold">Messages</span>
          </div>
          {[
            { name: 'Alexandru', src: '/img/team/alexandru.png', msg: 'Sounds good, let me check...', time: '2m' },
            { name: 'Nick', src: '/img/team/nick.jpeg', msg: 'The new design looks great!', time: '15m' },
            { name: 'Ryan', src: '/img/team/ryan.jpg', msg: 'Can we sync on this later?', time: '1h' },
          ].map((dm) => (
            <div key={dm.name} className="flex items-center gap-3 border-b border-gray-200/50 p-3 last:border-0 dark:border-gray-700">
              <Image src={dm.src} alt={dm.name} width={32} height={32} className="h-8 w-8 rounded-full" />
              <div className="flex flex-1 flex-col">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{dm.name}</span>
                  <span className="text-quaternary text-xs">{dm.time}</span>
                </div>
                <span className="text-tertiary line-clamp-1 text-sm">{dm.msg}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Calls */}
        <div className="bg-elevated-surface flex flex-col rounded-xl border border-gray-200/50 shadow dark:border-gray-700">
          <div className="border-b border-gray-200/50 p-3 dark:border-gray-700">
            <span className="text-sm font-semibold">Quick call</span>
          </div>
          <div className="flex flex-1 flex-col items-center justify-center gap-4 p-6">
            <div className="flex -space-x-3">
              {['/img/team/brian.jpeg', '/img/team/dan.jpg', '/img/team/nick.jpeg', '/img/team/ryan.jpg'].map((src) => (
                <Image key={src} src={src} alt="" width={48} height={48} className="h-12 w-12 rounded-full border-2 border-white dark:border-gray-850" />
              ))}
            </div>
            <span className="text-tertiary text-sm">4 people in a call</span>
            <Button variant="brand" size="sm">Join call</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
