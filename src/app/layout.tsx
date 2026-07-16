import { type Metadata } from 'next'
import localFont from 'next/font/local'
import { Analytics } from '@vercel/analytics/next'

import { RootLayout } from '@/components/RootLayout'
import { siteUrl } from '@/lib/site'

import '@/styles/tailwind.css'

// Self-hosted variable font. next/font emits a preload link and a stable
// className, removing the manual @font-face and its render-blocking behaviour.
const monaSans = localFont({
  src: '../fonts/Mona-Sans.var.woff2',
  display: 'swap',
  weight: '200 900',
  variable: '--font-mona-sans',
})

const defaultTitle = 'Ologist · Trusted by organisations where failure isn’t an option'
const defaultDescription =
  'Ologist helps institutions untangle ageing systems, awkward processes and years of technical baggage - with long-term engineering, not trend-chasing.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: '%s · Ologist',
    default: defaultTitle,
  },
  description: defaultDescription,
  // og/twitter title and description are intentionally omitted: Next fills them
  // from each page's resolved title/description, giving correct per-page shares.
  openGraph: {
    type: 'website',
    siteName: 'Ologist',
    locale: 'en_GB',
    url: '/',
  },
  twitter: {
    card: 'summary_large_image',
  },
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Ologist Ltd',
  url: siteUrl,
  logo: `${siteUrl}/icon.svg`,
  sameAs: [
    'https://www.linkedin.com/company/ologist-io/',
    'https://github.com/ologistio',
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'The Leeming Building',
    addressLocality: 'Leeds',
    postalCode: 'LS2 7HZ',
    addressCountry: 'GB',
  },
  founder: [
    { '@type': 'Person', name: 'Sarah-Jane Finch' },
    { '@type': 'Person', name: 'Josh Finch' },
  ],
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Ologist',
  url: siteUrl,
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en-GB"
      className={`${monaSans.variable} h-full bg-neutral-950 text-base antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <RootLayout>{children}</RootLayout>
        <Analytics />
      </body>
    </html>
  )
}
