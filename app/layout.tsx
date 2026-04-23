import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { CookieBanner } from '@/components/cookie-banner'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Hungarian Horse Riding',
    template: '%s | Hungarian Horse Riding',
  },
  description:
    'A magyarországi lovas sport és a hagyományos lovaglás átfogó bemutatása. Történet, felszerelés, diszciplínák, technika és cikkek.',
  keywords: [
    'magyar lovaglás',
    'lovassport Magyarország',
    'lovas hagyományok',
    'díjlovaglás',
    'díjugratás',
    'csikós',
    'puszta',
    'hungarianhorseriding',
  ],
  authors: [{ name: 'Hungarian Horse Riding' }],
  metadataBase: new URL('https://hungarianhorseriding.com'),
  openGraph: {
    title: 'Hungarian Horse Riding',
    description: 'A magyarországi lovas sport és hagyományok hiteles forrása.',
    url: 'https://hungarianhorseriding.com',
    siteName: 'Hungarian Horse Riding',
    locale: 'hu_HU',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#1a3d2b',
  width: 'device-width',
  initialScale: 1,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="hu"
      className={`${cormorant.variable} ${inter.variable} bg-background`}
    >
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}
