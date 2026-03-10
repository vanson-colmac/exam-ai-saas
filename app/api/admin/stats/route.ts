import type { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    // Call backend API
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/stats`)
    const data = await response.json()
    return Response.json(data)
  } catch (error) {
    return Response.json({ error: 'Failed to load stats' }, { status: 500 })
  }
}
