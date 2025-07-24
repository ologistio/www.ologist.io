import { type Metadata } from 'next'
import Image from 'next/image'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import imageSarahFinch from '@/images/team/sarah-finch.jpg'
import imageJoshFinch from '@/images/team/josh-finch.jpg'
import imageLewisFord from '@/images/team/1655111981350.jpg'
import { loadArticles } from '@/lib/mdx'

function Culture() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our culture"
        title="Happiness first; Growth second"
        invert
      >
        <p>
          Ologist was founded with the goal of designing a place that we would want to work.
          No hustle, no grind, no trends, no BS; We build sustainable solutions to actual problems - all AM, no FM.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Work on what fascinates you" invert>
            We don&apos;t hire titles, we hire talent; our teams are free to work on
            the projects that make sense for their skillset.
          </GridListItem>
          <GridListItem title="No lies; no pretending" invert>
            No egos. No bums on seats. No warm bodies. Only teams of skilled
            people making great things. Everyone is an engineer.
          </GridListItem>
          <GridListItem title="Work to live, from anywhere" invert>
            We keep limited core hours and work async where possible, because
            what&apos;s the point of remote work if you&apos;re stuck at home?
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

const team = [
  {
    title: 'Leadership',
    people: [
      {
        name: 'Sarah-Jane Finch',
        role: 'Co-Founder / CEO',
        image: { src: imageSarahFinch },
      },
      {
        name: 'Josh Finch',
        role: 'Co-Founder / CTO',
        image: { src: imageJoshFinch },
      },
      //{
      //  name: 'Lewis Ford',
      //  role: 'Chief Operations Officer',
      //  image: { src: imageLewisFord },
      //},
    ],
  },
]

function Team() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-24">
        {team.map((group) => (
          <FadeInStagger key={group.title}>
            <Border as={FadeIn} />
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                  {group.title}
                </h2>
              </FadeIn>
              <div className="lg:col-span-3">
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                >
                  {group.people.map((person) => (
                    <li key={person.name}>
                      <FadeIn>
                        <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                          <Image
                            alt=""
                            {...person.image}
                            className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                          />
                          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                            <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                              {person.name}
                            </p>
                            <p className="mt-2 text-sm text-white">
                              {person.role}
                            </p>
                          </div>
                        </div>
                      </FadeIn>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInStagger>
        ))}
      </div>
    </Container>
  )
}

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Ologist are a digital transformation agency working with large institutions to solve big problems.'
}

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <>
      <PageIntro eyebrow="About us" title="We create digital permaculture">
        <p>
        Ologist are a digital transformation agency working with large institutions
        to solve big problems.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            Ologist was founded by Sarah-Jane and Josh Finch in 2020, after
            years of frustrations with the startup sector, with the goal
            of rejecting trend-chasing, disposable technology, and persuing
            our goal of Digital Permaculture.
          </p>
          <p>
            We work with large institutions - government departments, universities,
            local councils - to build long-term solutions to real problems. We&apos;re
            not here to push &quot;trendy&quot; tech-stacks or &quot;magic&quot; methodologies, just
            solid, proven engineering practices.
          </p>
          <p>
            We&apos;re also a great place to work. From our progressive compensation,
            flexible working and industry- leading training and development;
            we try to foster a culture brings out the best in engineers. 
          </p>
        </div>
      </PageIntro>
      {/* <Container className="mt-16">
        <StatList>
          <StatListItem value="35" label="Underpaid employees" />
          <StatListItem value="52" label="Placated clients" />
          <StatListItem value="$25M" label="Invoices billed" />
        </StatList>
      </Container> */}

      <Culture />

      <Team />

      <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="Books & Articles"
        intro="Our team of engineers, designers and developers have a lot to talk about. Insights into the work we're doing, good practices we've picked up along the way, and news about our open source projects."
        pages={blogArticles}
      />

      <ContactSection />
    </>
  )
}
