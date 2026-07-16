import rehypeShiki from '@leafac/rehype-shiki'
import nextMDX from '@next/mdx'
import { Parser } from 'acorn'
import jsx from 'acorn-jsx'
import escapeStringRegexp from 'escape-string-regexp'
import * as path from 'path'
import { recmaImportImages } from 'recma-import-images'
import remarkGfm from 'remark-gfm'
import { remarkRehypeWrap } from 'remark-rehype-wrap'
import remarkUnwrapImages from 'remark-unwrap-images'
import shiki from 'shiki'
import { unifiedConditional } from 'unified-conditional'

// Security headers applied to page/document responses. Next's internal bundle
// assets (/_next/static, /_next/image) are excluded: they are same-origin and
// served with correct MIME types, and applying X-Content-Type-Options: nosniff
// to them causes the dev server to block chunks it serves as text/plain.
// No CSP here: this static marketing site relies on Next and framer-motion
// inline scripts/styles, so a strict CSP needs its own testing pass first.
const securityHeaders = [
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
]

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  // Hosts allowed to load /_next/* dev assets when the dev server is reached
  // over the LAN instead of localhost. Dev-only; ignored in production builds.
  allowedDevOrigins: ['localhost', '127.0.0.1', '192.168.1.3'],
  experimental: {
    // The dev-only Segment Explorer ships a client component from inside Next's
    // Yarn PnP .zip path that the RSC client manifest cannot resolve at runtime
    // ("Could not find the module ...segment-explorer-node.js"). Disabling it
    // removes the broken reference. No effect on production builds.
    devtoolSegmentExplorer: false,
  },
  async headers() {
    return [
      {
        source: '/((?!_next/static|_next/image).*)',
        headers: securityHeaders,
      },
    ]
  },
  async redirects() {
    return [
      // Client recanonicalised from NHS Digital to NHS England.
      {
        source: '/work/nhs-digital',
        destination: '/work/nhs-england',
        permanent: true,
      },
    ]
  },
}

function remarkMDXLayout(source, metaName) {
  let parser = Parser.extend(jsx())
  let parseOptions = { ecmaVersion: 'latest', sourceType: 'module' }

  return (tree) => {
    let imp = `import _Layout from '${source}'`
    let exp = `export default function Layout(props) {
      return <_Layout {...props} ${metaName}={${metaName}} />
    }`

    tree.children.push(
      {
        type: 'mdxjsEsm',
        value: imp,
        data: { estree: parser.parse(imp, parseOptions) },
      },
      {
        type: 'mdxjsEsm',
        value: exp,
        data: { estree: parser.parse(exp, parseOptions) },
      },
    )
  }
}

export default async function config() {
  let highlighter = await shiki.getHighlighter({
    theme: 'css-variables',
  })

  let withMDX = nextMDX({
    extension: /\.mdx$/,
    options: {
      recmaPlugins: [recmaImportImages],
      rehypePlugins: [
        [rehypeShiki, { highlighter }],
        [
          remarkRehypeWrap,
          {
            node: { type: 'mdxJsxFlowElement', name: 'Typography' },
            start: ':root > :not(mdxJsxFlowElement)',
            end: ':root > mdxJsxFlowElement',
          },
        ],
      ],
      remarkPlugins: [
        remarkGfm,
        remarkUnwrapImages,
        [
          unifiedConditional,
          [
            new RegExp(`^${escapeStringRegexp(path.resolve('src/app/articles'))}`),
            [[remarkMDXLayout, '@/app/articles/wrapper', 'article']],
          ],
          [
            new RegExp(`^${escapeStringRegexp(path.resolve('src/app/work'))}`),
            [[remarkMDXLayout, '@/app/work/wrapper', 'caseStudy']],
          ],
        ],
      ],
    },
  })

  return withMDX(nextConfig)
}
