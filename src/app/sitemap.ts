import { type MetadataRoute } from 'next'

import { siteUrl } from '@/lib/site'
import { loadArticles, loadCaseStudies } from '@/lib/mdx'

const staticRoutes = [
  '/',
  '/work',
  '/about',
  '/process',
  '/digital-permaculture',
  '/contact',
  '/privacy',
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let [caseStudies, articles] = await Promise.all([
    loadCaseStudies(),
    loadArticles(),
  ])

  let staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
  }))

  let contentEntries: MetadataRoute.Sitemap = [...caseStudies, ...articles].map(
    (entry) => ({
      url: `${siteUrl}${entry.href}`,
      lastModified: new Date(entry.date),
    }),
  )

  return [...staticEntries, ...contentEntries]
}
