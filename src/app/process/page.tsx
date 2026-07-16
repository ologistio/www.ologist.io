import { type Metadata } from 'next'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Our principles"
        title="Principles of Digital Permaculture"
      >
        <p>
          Over a decade of working with organisations across the public and
          private sectors, we&apos;ve identified common issues that hold them
          back. Often these issues seem insurmountable because technical
          organisations, by their nature, see them as technical problems with
          technical solutions. However, in our experience the solutions are most
          often cultural, not technical.
        </p>
        <p className="mt-4">
          Digital Permaculture is our guidestar. It sits at the intersection of
          People, Culture and Technology; bringing out the best in each.
        </p>
      </SectionIntro>

      <Container className="mt-24">
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
          <GridListItem title="Flexible, not disposible">
            Permaculture means thinking of problems in the long-term. Solutions
            should grow with the organisation over time, avoiding the
            anti-pattern of intermittent, costly overhauls.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Our Process',
  description:
    'Ologist works with our clients to design long-term digital practices, and build cultures of Digital Permaculture',
}

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="Our process" title="How we work">
        <p>
          Most organisations come to us with what appears to be a technical
          problem.
        </p>
        <p>
          Legacy systems. Slow delivery. Frustrated teams. Growing complexity.
        </p>
        <p>
          Technology is usually part of the picture, but it&apos;s rarely the
          whole picture.
        </p>
        <p>
          Over the years we&apos;ve found that lasting change happens when
          people, processes and technology improve together. Focusing on one
          while ignoring the others rarely works for long.
        </p>
        <p>That&apos;s the thinking behind Digital Permaculture.</p>
        <p>
          Building systems, teams and ways of working that continue improving
          long after a project is finished.
        </p>
      </PageIntro>

      <Values />

      <ContactSection />
    </>
  )
}
