import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import blackhole from '@/images/photos/blackhole.jpg'


function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function Experiment() {
  return (
    <>
      <Head>
        <title>About - Spencer Sharp</title>
        <meta
          name="description"
          content="Our Experiment"
        />
      </Head>
      <Container className="mt-16 sm:mt-16">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={blackhole}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-auto rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Our Experiment
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
              Time dilation, a key concept in Einstein&apos;s theories of relativity, 
              describes how time can appear to &apos;slow down&apos; or &apos;speed up&apos; depending
              on certain conditions. There are two primary types of time dilation:
              gravitational time dilation and velocity (or kinematic) time dilation.
              </p>
              <p>
              <span className="font-bold">Gravitational Time Dilation:</span> According to Einstein's theory of General 
              Relativity, gravity can distort the fabric of spacetime. This results in 
              gravitational time dilation, where time moves slower in stronger gravitational 
              fields. So, a clock closer to a massive object (like a planet or a star) will 
              run slower than a clock that is located further away.


              </p>
              <p>
              <span className="font-bold">Velocity Time Dilation:</span> This form of time dilation arises from Einstein's 
              Special Theory of Relativity. It occurs due to differences in relative velocity 
              between two observers. If one observer is moving relative to another observer, 
              the moving observer's clock will seem to run slower. This effect becomes particularly 
              significant as the relative velocity approaches the speed of light.
              </p>
              <p>
              In the context of the International Space Station (ISS), both types of time dilation 
              are relevant. The ISS is moving at high speeds relative to an observer on Earth 
              (velocity time dilation), and it's also further from the center of the Earth and 
              thus experiences less gravitational pull (gravitational time dilation).
              </p>
              <p>
              To find the total time dilation effect on the ISS, we need to combine both types of
              time dilation. This is done by adding the individual effects. It's important to note 
              that because the effects are very small, they don't simply add linearly. Instead, we 
              have to use the principles of Einstein's relativity to properly combine them, giving 
              a more accurate estimation of the overall time dilation experienced aboard the ISS.
              </p>
            </div>
          </div>
          {/* <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="#" icon={TwitterIcon}>
                Follow on Twitter
              </SocialLink>
              <SocialLink href="#" icon={InstagramIcon} className="mt-4">
                Follow on Instagram
              </SocialLink>
              <SocialLink href="#" icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href="#" icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:spencer@planetaria.tech"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                spencer@planetaria.tech
              </SocialLink>
            </ul>
          </div> */}
        </div>
      </Container>
    </>
  )
}
