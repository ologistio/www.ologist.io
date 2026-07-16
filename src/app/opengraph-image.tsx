import { readFileSync } from 'fs'
import { join } from 'path'
import { ImageResponse } from 'next/og'

// Default social preview: the Ologist wordmark, tagline in Mona Sans, on the
// brand woodsmoke background. Assets are colocated and read from disk at build
// time (this route is statically prerendered). Generated once and cached.
export const alt = 'Ologist - sustainable modernisation for institutions'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

// Brand colours (see tailwind.config.ts).
const woodsmoke = '#161616'
const neutral300 = '#d3d3d3'

const assetDir = join(process.cwd(), 'src/app')

export default function Image() {
  const logo = readFileSync(join(assetDir, 'og-logo.png'))
  const monaSans = readFileSync(join(assetDir, 'og-mona-sans-medium.ttf'))

  const logoSrc = `data:image/png;base64,${logo.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '100px',
          background: woodsmoke,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={600} alt="Ologist" />
        <div
          style={{
            marginTop: 56,
            fontFamily: 'Mona Sans',
            fontSize: 46,
            lineHeight: 1.3,
            color: neutral300,
            maxWidth: 900,
          }}
        >
          Your systems, but better. Sustainable modernisation for institutions
          where failure is not an option.
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Mona Sans', data: monaSans, weight: 500, style: 'normal' },
      ],
    },
  )
}
