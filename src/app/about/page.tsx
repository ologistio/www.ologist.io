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
import imageSarahFinch from '@/images/team/sarah-finch.jpg'
import imageJoshFinch from '@/images/team/josh-finch.jpg'
import imageLewisFord from '@/images/team/lewis-ford.jpg'
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
      {
       name: 'Lewis Ford',
       role: 'Chief Operations Officer',
       image: { src: imageLewisFord },
      },
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
    'Ologist are a digital transformation agency working with large institutions to solve big problems.',
  alternates: { canonical: '/about' },
}

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <>
      <PageIntro eyebrow="About us" title="We create Digital Permaculture">
        <p>Ologist was founded in 2020 by Sarah-Jane and Josh Finch.</p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            After years working across startups, scale-ups and large
            organisations, we kept seeing the same pattern. Systems built in a
            hurry. Short-term decisions becoming permanent. Technology choices
            driven by trends rather than outcomes.
          </p>
          <p>
            Projects delivered successfully that nobody wanted to maintain. New
            technology replacing old technology without addressing the
            underlying issues. Teams inheriting systems they didn&apos;t
            understand and processes they couldn&apos;t change.
          </p>
          <p>Everything looked successful on paper.</p>
          <p>The reality was often very different.</p>
          <p>
            On the surface, many of these decisions seemed baffling. Systems
            that made no sense, processes that felt arbitrary, and decisions
            that appeared to have been made for no reason at all.
          </p>
          <p>
            Then came the moment we now look for in every organisation: the
            point where everything suddenly clicks, and you understand exactly
            why things ended up this way.
          </p>
          <p>
            That&apos;s where Digital Permaculture began. The idea that
            technology, processes and engineering cultures should be designed to
            grow and adapt over time, rather than being replaced every few
            years.
          </p>
          <p>
            Today, we work with universities, healthcare organisations,
            government departments and other institutions facing complex
            technical challenges.
          </p>
          <p>Not to introduce more change.</p>
          <p>To help make sense of the change that&apos;s already happening.</p>
        </div>
      </PageIntro>
      <Culture />

      <Team />

      {blogArticles.length > 0 && (
        <PageLinks
          className="mt-24 sm:mt-32 lg:mt-40"
          title="Books & Articles"
          intro="Our team of engineers, designers and developers have a lot to talk about. Insights into the work we're doing, good practices we've picked up along the way, and news about our open source projects."
          pages={blogArticles}
        />
      )}

      <ContactSection />
    </>
  )
}
