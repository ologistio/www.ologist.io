import { type Metadata } from 'next'
import Link from 'next/link'

import { Blockquote } from '@/components/Blockquote'
import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'

export const metadata: Metadata = {
  title: 'Digital Permaculture',
  description:
    'Digital Permaculture: designing systems, teams and cultures that grow and adapt with an organisation over time, instead of being replaced every few years.',
  alternates: { canonical: '/digital-permaculture' },
}

function Principles() {
  return (
    <>
      <SectionIntro
        eyebrow="Our principles"
        title="The principles of Digital Permaculture"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Over more than a decade working across the public and private sectors,
          we have found that the problems holding organisations back are most
          often cultural, not technical. These principles sit at the
          intersection of people, culture and technology, and bring out the best
          in each.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Let engineers engineer">
            Utilise engineers as the core driver of value and professional
            leadership in technical roles, allowing them to build a flexible,
            emergent practice within the organisation.
          </GridListItem>
          <GridListItem title="Ownership, not management">
            Ownership means taking responsibility for a programme, management
            means divesting that responsibility; organisations should foster a
            culture of voluntary and meaningful ownership.
          </GridListItem>
          <GridListItem title="Silos are an anti-pattern">
            Sharing knowledge is vital to Digital Permaculture; establishing
            practices for sharing expertise and responsibilities encourages
            resilience and interdisciplinary collaboration.
          </GridListItem>
          <GridListItem title="Diversity is good for everyone">
            The best teams are diverse and inclusive, it&apos;s as simple as
            that; and organisations need to go above and beyond to ask the hard
            questions and engage with non-traditional communities.
          </GridListItem>
          <GridListItem title="No lies; no pretending">
            No bums on seats. No warm bodies. Only diverse teams of skilled
            people making great things together. Transparency and collaboration
            is the only path to realising Digital Permaculture.
          </GridListItem>
          <GridListItem title="Flexible, not disposable">
            Permaculture means thinking of problems in the long-term. Solutions
            should grow with the organisation over time, avoiding the
            anti-pattern of intermittent, costly overhauls.
          </GridListItem>
        </GridList>
      </Container>
    </>
  )
}

function InPractice() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          Digital Permaculture in practice
        </h2>
        <p className="mt-6 max-w-3xl text-base text-neutral-600">
          The measure of the work is not the system we deliver, but what an
          organisation can do with it once we have gone.
        </p>
      </FadeIn>
      <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
        <FadeIn>
          <Blockquote
            author={{
              name: 'University of Sheffield',
              role: 'Oracle to AWS migration',
            }}
          >
            The migration took a year. Making it stick took two more. That is
            what we mean by Digital Permaculture: the job is not moving systems,
            it is leaving behind teams who can move their own.
          </Blockquote>
          <div className="mt-6">
            <Button href="/work/university-of-sheffield">
              Read the case study
            </Button>
          </div>
        </FadeIn>
        <FadeIn>
          <Blockquote
            author={{ name: 'NHS England', role: 'API platform' }}
          >
            Systems that keep improving after the people who built them have
            moved on. We are proud of the infrastructure. We are prouder of what
            got built on top of it after we left.
          </Blockquote>
          <div className="mt-6">
            <Button href="/work/nhs-england">Read the case study</Button>
          </div>
        </FadeIn>
      </div>
    </Container>
  )
}

export default function DigitalPermaculture() {
  return (
    <>
      <PageIntro eyebrow="Our philosophy" title="Digital Permaculture">
        <p>
          Digital Permaculture is the idea that technology, processes and
          engineering cultures should be designed to grow and adapt over time,
          rather than being replaced every few years.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            It is a coined term, and the philosophy Ologist was founded on.
            Systems built in a hurry, short-term decisions becoming permanent,
            and technology chosen for trends rather than outcomes all share the
            same root: they were never designed to evolve alongside the
            organisation using them.
          </p>
          <p>
            Digital Permaculture sits at the intersection of people, culture and
            technology. It treats a codebase, a team and a way of working as one
            living system that should keep improving long after a project ends,
            not a deliverable to be handed over and forgotten.
          </p>
          <p>
            For the detail of how we apply it on an engagement, see{' '}
            <Link
              href="/process"
              className="font-semibold text-neutral-950 underline hover:text-neutral-700"
            >
              our process
            </Link>
            .
          </p>
        </div>
      </PageIntro>

      <Principles />

      <InPractice />

      <ContactSection />
    </>
  )
}
