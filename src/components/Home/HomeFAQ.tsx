'use client'

import * as AccordionPrimitive from '@radix-ui/react-accordion'
import Link from 'next/link'
import { ChevronRightIcon } from '@/components/ui/Icons'

const FAQData = [
  {
    title: 'Can I try Campsite first?',
    description:
      'Yes — every Campsite organization starts with a 14-day free trial, no credit card required. If you need more time to make a decision, just let us know.',
  },
  {
    title: 'Do I need to leave Slack to use Campsite?',
    description:
      'No — many of our happiest customers use Campsite alongside Slack, where Campsite posts are used for thoughtful async conversations and Slack is used for ephemeral chat or customer support.',
  },
  {
    title: 'Can Campsite help my team consolidate tools?',
    description:
      'Yes — many of our customers have moved all of their internal communication to Campsite, consolidating tools like Slack, Notion, Zoom, and Loom.',
  },
  {
    title: 'Can I add guests to my organization?',
    description:
      'Yes — you can add as many guest roles to your organization as needed. Guest roles are free and do not count towards your bill.',
  },
  {
    title: 'Are there any limits to what my team can create or share?',
    description:
      'No limits — every paid Campsite organization includes unlimited posts, calls, docs, messages, and file uploads.',
  },
]

export function FAQ() {
  return (
    <AccordionPrimitive.Root type="single" collapsible className="flex flex-col gap-4">
      {FAQData.map((item) => (
        <FAQItem key={item.title.slice(0, 24)} title={item.title}>
          <p className="text-secondary text-[clamp(1rem,_2vw,_1.1rem)] leading-relaxed">{item.description}</p>
        </FAQItem>
      ))}
      <FAQItem title="I didn't see my question here...">
        <p className="text-secondary text-[clamp(1rem,_2vw,_1.1rem)] leading-relaxed">
          Still have more questions? Please{' '}
          <Link href="/contact" className="text-orange-500 underline-offset-2 hover:underline">
            get in touch
          </Link>
          .
        </p>
      </FAQItem>
    </AccordionPrimitive.Root>
  )
}

function FAQItem({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <AccordionPrimitive.Item value={title} className="flex flex-col">
      <AccordionPrimitive.Header className="flex">
        <AccordionPrimitive.Trigger asChild>
          <button className="flex w-full flex-1 items-center gap-2 text-left lg:-ml-8 [&[data-state=open]>span>svg]:rotate-90">
            <span className="text-quaternary opacity-50">
              <ChevronRightIcon strokeWidth="2" size={24} className="transition-transform duration-200" />
            </span>
            <span className="text-[clamp(1rem,_2vw,_1.1rem)] font-medium">{title}</span>
          </button>
        </AccordionPrimitive.Trigger>
      </AccordionPrimitive.Header>
      <AccordionPrimitive.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
        <div className="text-primary col-start-2 flex max-w-3xl flex-col gap-4 pl-8 pt-2 text-base leading-relaxed lg:pl-0">
          {children}
        </div>
      </AccordionPrimitive.Content>
    </AccordionPrimitive.Item>
  )
}
