import type { NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, password, name } = body

    // Call backend API
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, name }),
    })

    const data = await response.json()
    return Response.json(data)
  } catch (error) {
    return Response.json({ error: 'Signup failed' }, { status: 500 })
  }
}
