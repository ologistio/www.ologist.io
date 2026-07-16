import { type Metadata } from 'next'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How Ologist Ltd collects, uses and protects personal data, and your rights under UK data protection law.',
  alternates: { canonical: '/privacy' },
}

function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="mt-12 first:mt-0">
      <h2 className="font-display text-2xl font-semibold text-neutral-950">
        {title}
      </h2>
      <div className="mt-6 space-y-6 text-base text-neutral-600">{children}</div>
    </section>
  )
}

export default function Privacy() {
  return (
    <>
      <PageIntro eyebrow="Privacy" title="Privacy Policy">
        <p>
          This policy explains how Ologist Ltd collects and uses personal data,
          and the rights you have under UK data protection law.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="mx-auto max-w-3xl">
          <Section title="Who we are">
            <p>
              Ologist Ltd (registered in England and Wales, company number
              14258560) is the data controller for the personal data described
              in this policy.
            </p>
            <p>
              Our registered office is 1 Victoria Court, Bank Square, Morley,
              Leeds LS27 9SE, United Kingdom. Our trading address is The Leeming
              Building, Leeds LS2 7HZ, United Kingdom.
            </p>
          </Section>

          <Section title="What data we collect">
            <p>
              When you contact us through the enquiry form or by email, we
              collect the details you provide, such as your name, email address,
              company, phone number and message.
            </p>
            <p>
              We measure how the site is used with privacy-first, cookieless
              analytics. This produces aggregated statistics only and does not
              identify individual visitors or set tracking cookies.
            </p>
          </Section>

          <Section title="How we use your data">
            <p>
              We use enquiry details to respond to you and to discuss potential
              work. We use aggregated analytics to understand how the site
              performs and to improve it.
            </p>
          </Section>

          <Section title="Legal basis">
            <p>
              We rely on our legitimate interests in responding to enquiries and
              running our business, and on your consent where you choose to
              contact us. Aggregated, cookieless analytics relies on our
              legitimate interest in maintaining and improving the site.
            </p>
          </Section>

          <Section title="Cookies">
            <p>
              We do not use advertising or tracking cookies. Our analytics is
              cookieless, so no consent banner is required for it.
            </p>
          </Section>

          <Section title="Sharing and processors">
            <p>
              Our site is hosted on Vercel, which also provides the cookieless
              analytics. Vercel processes technical data on our behalf as a data
              processor. We do not sell personal data.
            </p>
          </Section>

          <Section title="Data retention">
            <p>
              We keep enquiry correspondence for as long as needed to deal with
              your request and to maintain our business records, then delete it.
            </p>
          </Section>

          <Section title="Your rights">
            <p>
              Under UK GDPR you have the right to access, correct, delete or
              restrict the use of your personal data, to object to processing,
              and to data portability. To exercise these rights, contact us via
              our{' '}
              <Link
                href="/contact"
                className="text-neutral-950 underline hover:text-neutral-700"
              >
                contact page
              </Link>{' '}
              or write to us at our registered office above.
            </p>
            <p>
              You also have the right to complain to the Information
              Commissioner&apos;s Office (ICO) at ico.org.uk.
            </p>
          </Section>
        </div>
      </Container>
    </>
  )
}
