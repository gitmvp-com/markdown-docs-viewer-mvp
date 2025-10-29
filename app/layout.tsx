import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Documentation Viewer',
  description: 'A simple markdown documentation viewer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
