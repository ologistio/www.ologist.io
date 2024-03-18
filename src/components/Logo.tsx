import { useId } from 'react'
import clsx from 'clsx'
import Image from 'next/image'

import imageWhite from '@/images/ologist-logo-white.png'
import imageBlack from '@/images/ologist-logo-black.png'

export function Logomark({
  invert = false,
  ...props
}: React.ComponentPropsWithoutRef<'svg'> & {
  invert?: boolean
}) {
  let id = useId()
  if (invert) {
    return <Image src={imageBlack} width={64} alt="Ologist logo" />;
  } else {
    return <Image src={imageWhite} width={64} alt="Ologist logo" />;
  }
}

export function Logo({
  className,
  invert = false,
  fillOnHover = false,
  ...props
}: React.ComponentPropsWithoutRef<'svg'> & {
  invert?: boolean
  fillOnHover?: boolean
}) {
  return (
    <Logomark
      preserveAspectRatio="xMinYMid meet"
      invert={invert}
    />
  )
}
