import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Student Housing',
  description: 'Created with v0 + Equipo de Student Housing',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
