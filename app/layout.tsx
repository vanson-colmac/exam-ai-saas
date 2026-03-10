import type { Metadata } from 'next'
import './globals.css'

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
      <body className="bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50">
        {children}
      </body>
    </html>
  )
}
