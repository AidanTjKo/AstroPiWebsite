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
import gravityTimeDilation from '@/images/photos/gravityTimedilation.png'
import velocityTimeDilation from '@/images/gifs/invertedTimeDilation.gif'
import equations from '@/images/photos/equationsWhite.png'

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
        <title>Our Experiment</title>
        <meta
          name="description"
          content="Our Experiment"
        />
      </Head>
      <Container className="mt-16 sm:mt-16">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20 bg-black">
            <div className="max-w-xs px-2 lg:max-w-none">
              <Image
                src={blackhole}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-auto rotate-3 rounded-2xl object-cover bg-black py-20"
              />
              <Image
                src={gravityTimeDilation}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-auto rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
              <Image
                src={velocityTimeDilation}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="absolute aspect-auto rounded-2xl 0 object-cover bg-black py-4 right-48"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Our Experiment
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p className="py-16">
              Time dilation, a key concept in Einstein&apos;s theories of relativity, 
              describes how time can appear to &apos;slow down&apos; or &apos;speed up&apos; depending
              on certain conditions. There are two primary types of time dilation:
              gravitational time dilation and velocity (or kinematic) time dilation.
              </p>
              <p className="py-10">
              <span className="font-bold">Gravitational Time Dilation:</span> According to Einstein&apos;s theory of General 
              Relativity, gravity can distort the fabric of spacetime. This results in 
              gravitational time dilation, where time moves slower in stronger gravitational 
              fields. So, a clock closer to a massive object (like a planet or a star) will 
              run slower than a clock that is located further away.


              </p>
              <p className="py-16">
              <span className="font-bold">Velocity Time Dilation:</span> This form of time dilation arises from Einstein &apos;s 
              Special Theory of Relativity. It occurs due to differences in relative velocity 
              between two observers. If one observer is moving relative to another observer, 
              the moving observer &apos;s clock will seem to run slower. This effect becomes particularly 
              significant as the relative velocity approaches the speed of light.
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
      <div style={{width:"10wh"}} className="bg-white">
                  <p className="text-4xl pt-28 font-medium  px-48 leading-10 text-center text-slate-500 ">How is this relevant to the ISS?</p>
                  <p className="text-3xl pt-20 pb-32  px-48 leading-10 text-center text-slate-500">
                  In the context of the International Space Station (ISS), both types of time dilation 
                  are relevant. The ISS is moving at high speeds relative to an observer on Earth 
                  (velocity time dilation), and it&apos;s also further from the center of the Earth and 
                  thus experiences less gravitational pull (gravitational time dilation).
                  </p>
                  <hr class="w-11/12 h-0.5 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
                  <p className="text-4xl py-14 font-medium  px-48 leading-10 text-center text-slate-500 ">Application</p>
                  <p className="text-3xl pb-56  px-48 leading-10 text-center text-slate-500">
                  To find the total time dilation effect on the ISS, we need to combine both types of
                  time dilation. This is done by adding the individual effects. It&apos;s important to note 
                  that because the effects are very small, they don&apos;t simply add linearly. Instead, we 
                  have to use the principles of Einstein&apos;s relativity to properly combine them, giving 
                  a more accurate estimation of the overall time dilation experienced aboard the ISS.
                  </p>
                  <Image
                    src={equations}
                    alt=""
                    sizes="(min-width: 1024px) 32rem, 20rem"
                    className="aspect-auto  rounded-2xl object-cover bg-white"
                  />
      </div>
    </>
  )
}
