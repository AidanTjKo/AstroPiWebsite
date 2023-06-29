import Head from 'next/head'

import { TeamCards } from '@/components/TeamCards'

export default function ourTeam() {
  return (
    <>
      <Head>
        <title>Our Team</title>
        <meta
          name="description"
          content="Our Experiment"
        />
      </Head>
      <TeamCards />
    </>
  )
}