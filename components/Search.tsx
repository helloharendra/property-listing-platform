'use client'

import { useState } from 'react'
import { Building2, MapPin, Search as SearchIcon, SlidersHorizontal } from 'lucide-react'
import { cities, listings } from '@/lib/data'
import ListingCard from './ListingCard'

const types = ['Any type', 'Apartment', 'Villa', 'Independent House', 'Studio', 'Penthouse']

export default function Search() {
  const [purpose, setPurpose] = useState<'Buy' | 'Rent'>('Buy')
  const [city, setCity] = useState(cities[0])
  const [type, setType] = useState(types[0])
  const [beds, setBeds] = useState(0)
  const [verified, setVerified] = useState(false)

  const results = listings.filter((l) =>
    l.purpose === purpose && (city === cities[0] || l.city === city) && (type === types[0] || l.type === type) && l.beds >= beds && (!verified || l.verified),
  )

  return (
    <>
      {/* Hero with search */}
      <section className="relative overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=75" alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/60 to-slate-950/20" />
        <div className="container-x relative py-24 sm:py-32">
          <div className="max-w-2xl animate-fade-up">
            <p className="eyebrow text-brand-300">India&apos;s smart property portal</p>
            <h1 className="mt-4 font-display text-5xl font-extrabold leading-[1.05] text-white sm:text-6xl">Find a home you&apos;ll <span className="text-brand-300">love</span> to live in.</h1>
            <p className="mt-5 text-lg text-slate-200">2.4 lakh+ verified listings from owners, agents and builders across 40 cities.</p>
          </div>
          <div className="mt-10 max-w-4xl rounded-3xl bg-white p-3 shadow-2xl animate-fade-up [animation-delay:150ms]">
            <div className="flex gap-1 px-2 pt-1">
              {(['Buy', 'Rent'] as const).map((p) => (
                <button key={p} onClick={() => setPurpose(p)} className={`rounded-full px-5 py-2 text-sm font-semibold transition ${purpose === p ? 'bg-brand-600 text-white' : 'text-slate-500 hover:bg-slate-100'}`}>{p}</button>
              ))}
            </div>
            <div className="mt-2 grid gap-2 md:grid-cols-[1fr_1fr_auto]">
              <label className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-3"><MapPin className="h-5 w-5 text-brand-600" /><select value={city} onChange={(e) => setCity(e.target.value)} className="w-full bg-transparent text-sm font-medium outline-none">{cities.map((c) => <option key={c}>{c}</option>)}</select></label>
              <label className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-3"><Building2 className="h-5 w-5 text-brand-600" /><select value={type} onChange={(e) => setType(e.target.value)} className="w-full bg-transparent text-sm font-medium outline-none">{types.map((t) => <option key={t}>{t}</option>)}</select></label>
              <a href="#listings" className="btn-primary rounded-2xl px-8 py-3.5"><SearchIcon className="h-5 w-5" /> Search</a>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section id="listings" className="container-x mt-14 scroll-mt-20">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-3xl font-extrabold text-slate-900">{results.length} properties to {purpose.toLowerCase()}</h2>
            <p className="text-sm text-slate-500">{city === cities[0] ? 'Across India' : `in ${city}`}{type !== types[0] ? ` · ${type}` : ''}</p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <SlidersHorizontal className="h-4 w-4 text-slate-400" />
            {[0, 2, 3, 4].map((b) => (
              <button key={b} onClick={() => setBeds(b)} className={`rounded-full px-4 py-2 text-sm font-semibold transition ${beds === b ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}>{b ? `${b}+ BHK` : 'Any BHK'}</button>
            ))}
            <label className="ml-2 flex cursor-pointer items-center gap-2 text-sm font-medium text-slate-600"><input type="checkbox" checked={verified} onChange={(e) => setVerified(e.target.checked)} className="h-4 w-4 accent-teal-600" /> Verified only</label>
          </div>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((l) => <ListingCard key={l.id} l={l} />)}
        </div>
        {!results.length && <p className="rounded-3xl bg-slate-50 py-16 text-center text-slate-500">No properties match these filters. Try another city or BHK.</p>}
      </section>
    </>
  )
}
