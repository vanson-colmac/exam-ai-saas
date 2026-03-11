import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Exam AI - Smart Learning Platform',
  description: 'Generate AI-powered exam questions and enhance your learning',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: '#fff', color: '#000', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
