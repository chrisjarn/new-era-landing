import Image from 'next/image'
import Link from 'next/link'

export function FounderNote() {
  return (
    <div className="dark:bg-elevated-surface flex flex-col gap-4 rounded-lg border border-gray-200/50 bg-[#FFFDF9] p-4 shadow md:p-8 lg:-mx-4 lg:p-12 xl:-mx-6 2xl:-mx-8 dark:border-gray-800">
      <div className="mb-4 flex flex-col gap-1.5 md:mb-6 lg:mb-8">
        <p className="font-mono text-amber-950/60 dark:text-gray-500">Founder memo</p>
        <p className="font-mono text-amber-950/60 dark:text-gray-500">
          {new Date().toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          })}
        </p>
        <p className="font-mono text-amber-950/60 dark:text-gray-500">Campsite Software Co.</p>
      </div>

      <p className="leading-[1.8] text-amber-950 dark:text-gray-100">Work communication is broken.</p>

      <p className="leading-[1.8] text-amber-950 dark:text-gray-100">
        People spend half their day bouncing between channels and chats, wading through a mess of half-formed messages
        and FOMO-inducing interruptions. We&apos;ve collectively confused motion for progress.
      </p>

      <p className="leading-[1.8] text-amber-950 dark:text-gray-100">
        But there&apos;s a better way to work. With Campsite, teams are:
      </p>

      <ul className="ml-4 list-disc">
        <li className="pl-2 leading-[1.8] text-amber-950 dark:text-gray-100">Writing more, and writing better</li>
        <li className="pl-2 leading-[1.8] text-amber-950 dark:text-gray-100">
          Having deeper, more thoughtful discussions
        </li>
        <li className="pl-2 leading-[1.8] text-amber-950 dark:text-gray-100">
          Automatically building a rich archive of company knowledge
        </li>
      </ul>

      <p className="leading-[1.8] text-amber-950 dark:text-gray-100">
        If you&apos;re ready to leave behind noisy chats and the illusion of progress in favor of meaningful discussions and
        real productivity, Campsite is ready for you.
      </p>

      <div className="mt-8 flex flex-col gap-4">
        <Link href="#" target="_blank" className="mt-4 flex items-center gap-4 md:mt-6 lg:mt-8">
          <Image
            src="/img/team/brian.jpeg"
            width={80}
            height={80}
            alt="Brian Lovin"
            className="h-11 w-11 rounded-full"
          />
          <div className="flex flex-col">
            <p className="text-amber-950 dark:text-gray-400">Brian Lovin</p>
            <p className="text-amber-950 dark:text-gray-400">Co-founder &amp; CEO</p>
          </div>
        </Link>
      </div>
    </div>
  )
}
