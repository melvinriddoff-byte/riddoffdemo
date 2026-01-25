import type { Metadata } from 'next'
import { Header, Footer } from '@/components'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Riddoff Technologies',
    template: '%s | Riddoff Technologies',
  },
  description: 'Building operational software and intelligent systems for modern businesses.',
  keywords: ['enterprise software', 'ERP', 'fleet management', 'automation', 'AI systems'],
  authors: [{ name: 'Riddoff Technologies' }],
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://riddoff.com',
    siteName: 'Riddoff Technologies',
    title: 'Riddoff Technologies',
    description: 'Building operational software and intelligent systems for modern businesses.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Riddoff Technologies',
    description: 'Building operational software and intelligent systems for modern businesses.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-16 md:pt-18">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
