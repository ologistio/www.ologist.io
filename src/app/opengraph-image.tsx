import { ImageResponse } from 'next/og'

// Default social preview image, generated at build/request time and cached.
// Text-only (uses the built-in font) so it needs no design asset.
export const alt = 'Ologist - sustainable modernisation for institutions'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '96px',
          background: '#161616',
          color: '#F6F6F6',
        }}
      >
        <div style={{ fontSize: 128, fontWeight: 700, letterSpacing: '-0.03em' }}>
          Ologist
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 44,
            lineHeight: 1.25,
            color: '#a5a5a5',
            maxWidth: 900,
          }}
        >
          Your systems, but better. Sustainable modernisation for institutions
          where failure is not an option.
        </div>
      </div>
    ),
    { ...size },
  )
}
