import './globals.css'
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: 'AI Genius',
  description: 'Template code for AI Genius Project',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}