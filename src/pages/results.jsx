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

export default function results() {
  return (
    <>
      <Head>
        <title>Our Results</title>
        <meta
          name="description"
          content="Software I use, gadgets I love, and other things I recommend."
        />
      </Head>
      <div style={{width:"10wh"}} className="bg-black mb-8">
        <p className="text-3xl font-bold tracking-tight text-zinc-800 mt-20 text-center dark:text-zinc-100 sm:text-4xl">Our First Obstacle</p>
          <p className="md:text-2xl text-xl pt-20  pb-12 md:pb-28 md:px-48 sm:px-auto leading-10 text-center text-slate-300">
          The data set obtained was smaller than initially planned, we adapted 
          our approach to work effectively with this limitation. Our custom-built 
          Python program extrapolated this data, allowing us to generate a 
          broader and more reliable data set from the available samples.
          </p>
      </div>

      <div class="relative overflow-x-auto shadow-md rounded-lg">
          <p className="text-white text-2xl text-center">ISS Results</p>
          <table class="w-1/2 m-auto text-sm text-left text-gray-400 border-gray-700 border my-10">
              <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
                  <tr>
                      <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                          datetime
                      </th>
                      <th scope="col" class="px-6 py-3">
                          yaw
                      </th>
                      <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                          angular_velocity
                      </th>
                      <th scope="col" class="px-6 py-3">
                          linear_velocity
                      </th>
                  </tr>
              </thead>
              <tbody>
                  <tr class="border-b border-gray-200 dark:border-gray-700">
                      <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                          12:10.8
                      </th>
                      <td class="px-6 py-4">
                          3.729
                      </td>
                      <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                          -0.001
                      </td>
                      <td class="px-6 py-4">
                          -6786.127
                      </td>
                  </tr>
                  <tr class="border-b border-gray-200 dark:border-gray-700">
                      <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                          12:16.9
                      </th>
                      <td class="px-6 py-4">
                          3.944
                      </td>
                      <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                          -0.005
                      </td>
                      <td class="px-6 py-4">
                          -33930.685
                      </td>
                  </tr>
                  <tr class="border-b border-gray-200 dark:border-gray-700">
                      <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                          12:23.0
                      </th>
                      <td class="px-6 py-4">
                          4.395
                      </td>
                      <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                          -0.004
                      </td>
                      <td class="px-6 py-4">
                          -27144.548
                      </td>
                  </tr>
                  <tr class="border-b border-gray-200 dark:border-gray-700">
                      <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                          12:29.0
                      </th>
                      <td class="px-6 py-4">
                          4.608
                      </td>
                      <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                          0.002
                      </td>
                      <td class="px-6 py-4">
                          13572.274
                      </td>
                  </tr>
                  <tr>
                      <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                          12:35.0
                      </th>
                      <td class="px-6 py-4">
                          3.814
                      </td>
                      <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                          -0.001
                      </td>
                      <td class="px-6 py-4">
                          -6786.137
                      </td>
                  </tr>
              </tbody>
          </table>
      </div>

      <div class="relative overflow-x-auto shadow-md rounded-lg pt-32">
          <p className="text-white text-2xl text-center">A Sample of our Extrapolated Results</p>
          <table class="w-1/2 m-auto text-sm text-left text-gray-400 border-gray-700 border my-10">
              <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
                  <tr>
                      <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                          datetime
                      </th>
                      <th scope="col" class="px-6 py-3">
                          yaw
                      </th>
                      <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                          angular_velocity
                      </th>
                      <th scope="col" class="px-6 py-3">
                          linear_velocity
                      </th>
                  </tr>
              </thead>
              <tbody>
                  <tr class="border-b border-gray-200 dark:border-gray-700">
                      <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                          17:12:11
                      </th>
                      <td class="px-6 py-4">
                          3.729
                      </td>
                      <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                          -0.001
                      </td>
                      <td class="px-6 py-4">
                          -6786.14
                      </td>
                  </tr>
                  <tr class="border-b border-gray-200 dark:border-gray-700">
                      <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                          17:12:17
                      </th>
                      <td class="px-6 py-4">
                          3.944
                      </td>
                      <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                          -0.005
                      </td>
                      <td class="px-6 py-4">
                          -33930.7
                      </td>
                  </tr>
                  <tr class="border-b border-gray-200 dark:border-gray-700">
                      <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                          17:12.23
                      </th>
                      <td class="px-6 py-4">
                          4.395
                      </td>
                      <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                          -0.004
                      </td>
                      <td class="px-6 py-4">
                          -27144.5
                      </td>
                  </tr>
                  <tr class="border-b border-gray-200 dark:border-gray-700">
                      <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                          17:12:29
                      </th>
                      <td class="px-6 py-4">
                          4.608
                      </td>
                      <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                          0.002
                      </td>
                      <td class="px-6 py-4">
                          13572.27
                      </td>
                  </tr>
                  <tr class="border-b border-gray-200 dark:border-gray-700">
                      <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                          17:12:35
                      </th>
                      <td class="px-6 py-4">
                          3.814
                      </td>
                      <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                          -0.001
                      </td>
                      <td class="px-6 py-4">
                          -6786.14
                      </td>
                  </tr>
                  <tr class="border-b border-gray-200 dark:border-gray-700">
                      <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                          ...
                      </th>
                      <td class="px-6 py-4">
                          ...
                      </td>
                      <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                          ...
                      </td>
                      <td class="px-6 py-4">
                          ...
                      </td>
                  </tr>
                  <tr class="border-b border-gray-200 dark:border-gray-700">
                      <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                          20:11:40
                      </th>
                      <td class="px-6 py-4">
                          25.276
                      </td>
                      <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                          0.001
                      </td>
                      <td class="px-6 py-4">
                          6786.137
                      </td>
                  </tr>
                  <tr class="border-b border-gray-200 dark:border-gray-700">
                      <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                          20:11:47
                      </th>
                      <td class="px-6 py-4">
                          15.297
                      </td>
                      <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                          0.003
                      </td>
                      <td class="px-6 py-4">
                          20358.41
                      </td>
                  </tr>
                  <tr class="border-b border-gray-200 dark:border-gray-700">
                      <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                          20:11:52
                      </th>
                      <td class="px-6 py-4">
                          15.307
                      </td>
                      <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                          0.002
                      </td>
                      <td class="px-6 py-4">
                          13572.27
                      </td>
                  </tr>
                  <tr>
                      <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                          20:11:59
                      </th>
                      <td class="px-6 py-4">
                          15.314
                      </td>
                      <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                          0.001
                      </td>
                      <td class="px-6 py-4">
                          6786.137
                      </td>
                  </tr>
                  <tr>
                      <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                          20:12:04
                      </th>
                      <td class="px-6 py-4">
                          15.319
                      </td>
                      <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                          0.001
                      </td>
                      <td class="px-6 py-4">
                          6786.137
                      </td>
                  </tr>

              </tbody>
          </table>
      </div>

      {/* <Link href='/timeline'>
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
      </Link> */}
    </>
  )
}
