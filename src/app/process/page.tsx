import { type Metadata } from 'next'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
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

      <Container className="mt-16">
        <FadeIn>
          <p className="max-w-3xl text-base text-neutral-600">
            Digital Permaculture rests on six principles, from &ldquo;let
            engineers engineer&rdquo; to &ldquo;flexible, not
            disposable&rdquo;. Each one is about growing systems, teams and
            practices that keep improving long after we have gone.
          </p>
          <div className="mt-8">
            <Button href="/digital-permaculture">
              Explore the principles
            </Button>
          </div>
        </FadeIn>
      </Container>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Our Process',
  description:
    'How Ologist works: aligning people, culture and technology to deliver lasting change and build cultures of Digital Permaculture.',
  alternates: { canonical: '/process' },
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
        <p>
          That&apos;s the thinking behind{' '}
          <Link
            href="/digital-permaculture"
            className="font-semibold text-neutral-950 underline hover:text-neutral-700"
          >
            Digital Permaculture
          </Link>
          .
        </p>
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
