import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: 'BuildRight Construction | Professional Construction Services',
    template: '%s | BuildRight Construction'
  },
  description: 'Professional construction services for residential and commercial projects. Quality workmanship, reliable service, and trusted results.',
  keywords: ['construction', 'residential construction', 'commercial construction', 'home renovation', 'building services'],
  authors: [{ name: 'BuildRight Construction' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://buildrightconstruction.com',
    siteName: 'BuildRight Construction',
    title: 'BuildRight Construction | Professional Construction Services',
    description: 'Professional construction services for residential and commercial projects.',
    images: [{
      url: 'https://images.unsplash.com/photo-1516216628859-9bccecab13ca',
      width: 1200,
      height: 630,
      alt: 'BuildRight Construction'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BuildRight Construction | Professional Construction Services',
    description: 'Professional construction services for residential and commercial projects.',
    images: ['https://images.unsplash.com/photo-1516216628859-9bccecab13ca']
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
