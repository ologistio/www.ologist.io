import { NextResponse } from 'next/server'

const FOLK_API_URL = 'https://api.folk.app/v1/people'

type ContactPayload = {
  name?: string
  email?: string
  company?: string
  phone?: string
  message?: string
}

export async function POST(request: Request) {
  const apiKey = process.env.FOLK_API_KEY
  if (!apiKey) {
    console.error('FOLK_API_KEY is not set')
    return NextResponse.json(
      { error: 'Server is not configured to accept submissions.' },
      { status: 500 },
    )
  }

  let body: ContactPayload
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  const name = body.name?.trim()
  const email = body.email?.trim()
  if (!name || !email) {
    return NextResponse.json(
      { error: 'Name and email are required.' },
      { status: 400 },
    )
  }

  const groupId = process.env.FOLK_GROUP_ID

  const person: Record<string, unknown> = {
    fullName: name,
    emails: [email],
  }
  if (body.phone?.trim()) person.phones = [body.phone.trim()]
  if (body.company?.trim()) person.companies = [{ name: body.company.trim() }]
  if (body.message?.trim()) person.description = body.message.trim()
  if (groupId) person.groups = [{ id: groupId }]

  const res = await fetch(FOLK_API_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(person),
  })

  if (!res.ok) {
    const detail = await res.text()
    console.error(`Folk API error ${res.status}: ${detail}`)
    return NextResponse.json(
      { error: 'Could not submit your message. Please try again.' },
      { status: 502 },
    )
  }

  return NextResponse.json({ ok: true })
}
