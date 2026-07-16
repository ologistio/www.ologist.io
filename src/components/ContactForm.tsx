'use client'

import { useId, useState } from 'react'

import { Button } from '@/components/Button'
import { FadeIn } from '@/components/FadeIn'

function TextInput({
  label,
  ...props
}: React.ComponentPropsWithoutRef<'input'> & { label: string }) {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        type="text"
        id={id}
        {...props}
        placeholder=" "
        className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950"
      >
        {label}
      </label>
    </div>
  )
}

type Status = 'idle' | 'submitting' | 'success' | 'error'

export function ContactForm() {
  let [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('submitting')

    let formData = new FormData(event.currentTarget)
    let payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      company: formData.get('company'),
      phone: formData.get('phone'),
      message: formData.get('message'),
    }

    try {
      let res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <FadeIn className="lg:order-last">
      <form onSubmit={handleSubmit}>
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Work inquiries
        </h2>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput label="Name" name="name" autoComplete="name" required />
          <TextInput
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
            required
          />
          <TextInput
            label="Company"
            name="company"
            autoComplete="organization"
          />
          <TextInput label="Phone" type="tel" name="phone" autoComplete="tel" />
          <TextInput label="Message" name="message" />
        </div>
        <Button
          type="submit"
          className="mt-10"
          disabled={status === 'submitting' || status === 'success'}
        >
          {status === 'submitting' ? 'Sending...' : 'Let’s work together'}
        </Button>
        {status === 'success' && (
          <p className="mt-4 text-base text-neutral-600" role="status">
            Thanks - we’ve got your message and will be in touch soon.
          </p>
        )}
        {status === 'error' && (
          <p className="mt-4 text-base text-red-600" role="alert">
            Something went wrong. Please try again or email us directly.
          </p>
        )}
      </form>
    </FadeIn>
  )
}
