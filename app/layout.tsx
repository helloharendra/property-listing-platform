import type { Metadata } from 'next'
import { Inter, Manrope } from 'next/font/google'
import './globals.css'
import { ContactProvider, DemoBar } from '@/components/ContactModal'
import Header from '@/components/Header'
import { contact } from '@/lib/contact'

const sans = Inter({ subsets: ['latin'], variable: '--font-sans' })
const display = Manrope({ subsets: ['latin'], variable: '--font-display', weight: ['600', '700', '800'] })

export const metadata: Metadata = {
  title: 'NayaState – Property Listing Platform Demo | Naya Prayog Technologies',
  description: 'Premium real estate / property listing portal UI demo with search, filters, listing pages, EMI calculator and enquiries. Contact Naya Prayog Technologies for the complete project.',
}

const APP = 'NayaState'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <body className="font-sans">
        <ContactProvider appName={APP}>
          <DemoBar appName={APP} />
          <Header />
          <main>{children}</main>
          <footer className="mt-24 bg-slate-950 py-14 text-slate-400">
            <div className="container-x flex flex-col justify-between gap-6 md:flex-row">
              <div>
                <p className="font-display text-2xl font-extrabold text-white">Naya<span className="text-brand-400">State</span></p>
                <p className="mt-2 max-w-sm text-sm">Discover, list and manage properties. A real estate platform concept by Naya Prayog Technologies.</p>
              </div>
              <div className="text-sm">
                <p>{contact.email}</p><p>{contact.phone}</p>
                <a href="https://nayaprayog.com/nayastate/" className="text-brand-400 hover:underline">nayaprayog.com/nayastate</a>
              </div>
            </div>
          </footer>
        </ContactProvider>
      </body>
    </html>
  )
}
