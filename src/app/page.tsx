import { type Metadata } from 'next'
import Image, { type StaticImageData } from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoUoSLight from '@/images/clients/university-of-sheffield/logomark-light.png'
import logoNHSDDark from '@/images/clients/nhs-england/logo-colour-dark.png'
import logoNHSDLight from '@/images/clients/nhs-england/logo-colour-light.png'
import imageLaptop from '@/images/laptop.jpg'
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'

const clients: Array<[string, StaticImageData, string]> = [
  ['University of Sheffield', logoUoSLight, '/work/university-of-sheffield'],
  ['NHS England', logoNHSDLight, '/work/nhs-england'],
]

function Clients() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-56">
      <div className="-mx-6 rounded-4xl bg-neutral-950 px-6 pb-20 pt-12 sm:mx-0 sm:pb-32 sm:pt-20 md:px-12">
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            Trusted by organisations where failure isn’t an option.
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 flex flex-col items-center gap-y-10 sm:flex-row sm:justify-evenly"
          >
            {clients.map(([client, logo, href]) => (
              <li key={client}>
                <FadeIn>
                  <Link href={href} aria-label={`${client} case study`}>
                    <Image
                      src={logo}
                      alt={client}
                      className="h-20 w-auto sm:h-28"
                      unoptimized
                    />
                  </Link>
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </div>
    </Container>
  )
}

function CaseStudies({
  caseStudies,
}: {
  caseStudies: Array<MDXEntry<CaseStudy>>
}) {
  return (
    <>
      <SectionIntro
        title="Complex systems don’t fix themselves."
        className="mt-24 sm:mt-32 lg:mt-40 "
      >
        <p>
          The problems tend to build quietly. Duplicated systems, rushed handovers, manual workarounds and technology nobody really wants to touch anymore.
        </p>
        <p>
          Add years of workarounds and temporary fixes to that and even small problems become expensive, and difficult to untangle.
        </p>
        <p>
          That’s why we exist. We help institutions make meaningful technical change without creating more issues along the way.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <Image
                  src={caseStudy.logo}
                  alt={caseStudy.client}
                  className="h-16 w-16"
                  unoptimized
                />
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time
                    dateTime={caseStudy.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Case study</span>
                </p>
                <h3 className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0" />
                    {caseStudy.title}
                  </Link>
                </h3>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="The work behind the work."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          We work alongside your teams to build systems and ways of working
          that hold up over time, and keep working long after we&apos;ve moved
          on.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Building systems that still make sense decades later">
              Good practice shouldn’t be forgotten the second priorities change.

              Ologist was founded around the idea that systems, processes and engineering cultures should evolve alongside the organisations using them. We call this{' '}
              <Link
                href="/digital-permaculture"
                className="font-semibold text-neutral-950 underline hover:text-neutral-700"
              >
                Digital Permaculture
              </Link>
              .
            </ListItem>
            <ListItem title="Helping engineering teams work better together">
              Strong engineering practices are built through trust and clear ways of working.

              We work closely with engineering teams to reduce friction, improve communication and build practices that continue functioning long after a project ends.
            </ListItem>
            <ListItem title="Introducing change without introducing more problems">
Large-scale organisational change doesn’t happen overnight.

We help you build long lasting change in ways that are practical, sustainable and realistic for the people expected to work within it every day.

            </ListItem>
            <ListItem title="Modernising legacy systems without the chaos">
              Transformation implies a starting point, and Ologist understand the
              challenges that legacy systems and practice can pose; our approach
              includes uplifting legacy, instead of working around it.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata: Metadata = {
  description:
    'Ologist helps institutions untangle ageing systems, awkward processes and years of technical baggage - with long-term engineering, not trend-chasing.',
  alternates: { canonical: '/' },
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Your systems, but better.
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            We help institutions sort out ageing systems, awkward processes and the technical baggage that builds up over time.
          </p>
          <p className="mt-6 text-xl text-neutral-600">
            Ologist is a small team by design. That means fewer layers, more direct communication and experienced people doing the work properly.
          </p>
        </FadeIn>
      </Container>

      <Clients />

      <CaseStudies caseStudies={caseStudies} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'NHS England', logo: logoNHSDDark }}
      >
        We’re pleased with the progress we’ve made so far, especially with the
        overwhelmingly positive reaction we’ve had from our users.
      </Testimonial>

      <Services />

      <ContactSection />
    </>
  )
}
