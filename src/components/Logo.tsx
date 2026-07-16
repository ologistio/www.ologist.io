import clsx from 'clsx'
import Image from 'next/image'

import imageHaze from '@/images/ologist-logo-haze.png'
import imageWoodsmoke from '@/images/ologist-logo-woodsmoke.png'

// The logo is a 2.51:1 wordmark. Callers set the height (e.g. `h-8`); `w-auto`
// keeps the aspect ratio. `invert` picks the type colour for the background:
// haze (light) on dark, woodsmoke (dark) on light.
export function Logomark({
  className,
  invert = false,
}: {
  className?: string
  invert?: boolean
}) {
  return (
    <Image
      src={invert ? imageHaze : imageWoodsmoke}
      alt="Ologist"
      className={clsx('w-auto', className)}
    />
  )
}

export function Logo({
  className,
  invert = false,
}: {
  className?: string
  invert?: boolean
}) {
  return <Logomark className={className} invert={invert} />
}
