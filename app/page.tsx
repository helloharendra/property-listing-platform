import { BadgeCheck, Building, Handshake, ShieldCheck } from 'lucide-react'
import Search from '@/components/Search'

const why = [
  { icon: BadgeCheck, title: 'Verified listings', text: 'Every listing is checked by our team before it goes live.' },
  { icon: Handshake, title: 'Zero brokerage options', text: 'Connect directly with owners for thousands of homes.' },
  { icon: ShieldCheck, title: 'Safe site visits', text: 'Book visits, chat and share documents securely.' },
  { icon: Building, title: 'New launches', text: 'Early access to RERA-approved builder projects.' },
]

export default function Home() {
  return (
    <>
      <Search />
      <section className="container-x mt-24">
        <div className="text-center"><p className="eyebrow">Why NayaState</p><h2 className="mt-3 font-display text-4xl font-extrabold text-slate-900">Property search, minus the stress</h2></div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {why.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-3xl bg-slate-50 p-7 transition hover:bg-brand-50">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-brand-600 shadow-sm"><Icon className="h-6 w-6" /></span>
              <p className="mt-5 font-display text-lg font-bold text-slate-900">{title}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
