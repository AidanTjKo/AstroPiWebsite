import Head from 'next/head'
import Link from 'next/link'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'


function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Our Results</title>
        <meta
          name="description"
          content="Software I use, gadgets I love, and other things I recommend."
        />
      </Head>
      <Link href='/timeline'>
        <section
          id="get-free-shares-today"
          className="relative overflow-hidden bg-white py-20 sm:py-28 transition-all delay-100 ease-in-out pointer-events-auto hover:invert cursor-pointer"
        >
          <div className="absolute left-20 top-1/2 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
            <CircleBackground color="#000" className="animate-spin-slower" />
          </div>
          <Container className="relative">
            <div className="mx-auto max-w-md sm:text-center">
              <h2 className="text-3xl font-medium tracking-tight text-black sm:text-4xl">
                The Timeline
              </h2>
              <p className="mt-4 text-lg text-gray-300">
              </p>
            </div>
          </Container>
        </section>
      </Link>
    </>
  )
}
