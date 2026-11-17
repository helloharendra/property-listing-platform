'use client'

import { useState } from 'react'
import { CalendarCheck, CheckCircle2, MessageCircle, Phone } from 'lucide-react'
import { useContact } from './ContactModal'
import { inr } from '@/lib/utils'

export default function Enquiry({ title, price, purpose }: { title: string; price: number; purpose: 'Buy' | 'Rent' }) {
  const { openContact } = useContact()
  const [sent, setSent] = useState(false)
  const [down, setDown] = useState(20)
  const [years, setYears] = useState(20)
  const rate = 8.5

  // Standard EMI formula: P·r·(1+r)^n / ((1+r)^n − 1)
  const P = price * (1 - down / 100)
  const r = rate / 12 / 100
  const n = years * 12
  const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)

  return (
    <aside className="space-y-6 lg:sticky lg:top-24 lg:h-fit">
      <div className="rounded-3xl bg-white p-6 shadow-xl ring-1 ring-slate-200/70">
        <p className="font-display text-lg font-bold text-slate-900">Interested in this property?</p>
        {sent ? (
          <div className="py-8 text-center">
            <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-500" />
            <p className="mt-3 font-semibold text-slate-900">Enquiry sent!</p>
            <p className="text-sm text-slate-500">The {purpose === 'Buy' ? 'seller' : 'owner'} will contact you shortly.</p>
          </div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setSent(true) }} className="mt-4 space-y-3">
            <input required placeholder="Your name" className="input" />
            <input required placeholder="Phone number" className="input" />
            <textarea rows={3} defaultValue={`Hi, I'm interested in "${title}". Please share more details.`} className="input resize-none" />
            <button className="btn-primary w-full py-3">Send enquiry</button>
          </form>
        )}
        <div className="mt-3 grid grid-cols-3 gap-2">
          <button onClick={() => openContact('Click-to-Call (Masked Numbers)')} className="btn-ghost px-2 text-xs"><Phone className="h-4 w-4" /> Call</button>
          <button onClick={() => openContact('WhatsApp Chat with Owner')} className="btn-ghost px-2 text-xs"><MessageCircle className="h-4 w-4" /> Chat</button>
          <button onClick={() => openContact('Book Site Visit')} className="btn-ghost px-2 text-xs"><CalendarCheck className="h-4 w-4" /> Visit</button>
        </div>
      </div>

      {purpose === 'Buy' && (
        <div className="rounded-3xl bg-slate-950 p-6 text-white">
          <p className="font-display text-lg font-bold">Home loan EMI</p>
          <p className="mt-4 text-4xl font-extrabold text-brand-300">{inr(emi)}<span className="text-sm font-medium text-slate-400"> /month</span></p>
          <p className="mt-1 text-xs text-slate-400">Loan {inr(P)} at {rate}% p.a.</p>
          <label className="mt-6 block text-xs text-slate-400">Down payment · <b className="text-white">{down}%</b></label>
          <input type="range" min={10} max={50} value={down} onChange={(e) => setDown(+e.target.value)} className="mt-2 w-full accent-teal-400" />
          <label className="mt-4 block text-xs text-slate-400">Tenure · <b className="text-white">{years} years</b></label>
          <input type="range" min={5} max={30} value={years} onChange={(e) => setYears(+e.target.value)} className="mt-2 w-full accent-teal-400" />
        </div>
      )}
    </aside>
  )
}
