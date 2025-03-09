import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Robbin',
  description: 'This is my personal protfolio website i created for hobby i have a high skill in software engeering or website and application developement lets colab^',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
