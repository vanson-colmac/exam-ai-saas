import type { NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { exam_id, topic_id, count = 5 } = body

    // Call backend API
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/quizzes/generate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ exam_id, topic_id, count }),
    })

    const data = await response.json()
    return Response.json(data)
  } catch (error) {
    return Response.json({ error: 'Failed to generate quiz' }, { status: 500 })
  }
}
