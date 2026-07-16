import { type MetadataRoute } from 'next'

import { siteUrl } from '@/lib/site'

// Allow all crawlers, including AI crawlers (GPTBot, ClaudeBot, PerplexityBot,
// Google-Extended). The site wants maximum search and AI-answer visibility, so
// no user-agent is disallowed.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  }
}
