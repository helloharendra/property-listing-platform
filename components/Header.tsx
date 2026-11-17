'use client'

import Link from 'next/link'
import { Heart, Home, Plus, User } from 'lucide-react'
import { useContact } from './ContactModal'

export default function Header() {
  const { openContact } = useContact()
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/85 backdrop-blur-xl">
      <div className="container-x flex h-16 items-center gap-8">
        <Link href="/" className="flex items-center gap-2 font-display text-2xl font-extrabold tracking-tight text-slate-900">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-700 text-white shadow-lg shadow-brand-500/30"><Home className="h-5 w-5" /></span>
          Naya<span className="-ml-2 text-brand-600">State</span>
        </Link>
        <nav className="hidden gap-6 text-sm font-medium text-slate-600 md:flex">
          <Link href="/#listings" className="hover:text-slate-900">Buy</Link>
          <Link href="/#listings" className="hover:text-slate-900">Rent</Link>
          <button onClick={() => openContact('New Projects & Builders')} className="hover:text-slate-900">New projects</button>
          <button onClick={() => openContact('Agent Directory')} className="hover:text-slate-900">Find agents</button>
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <button onClick={() => openContact('Saved Properties')} className="hidden rounded-full p-2.5 text-slate-600 hover:bg-slate-100 sm:block" aria-label="Saved"><Heart className="h-5 w-5" /></button>
          <button onClick={() => openContact('User Login (Buyer / Owner / Agent)')} className="rounded-full p-2.5 text-slate-600 hover:bg-slate-100" aria-label="Login"><User className="h-5 w-5" /></button>
          <button onClick={() => openContact('Post Property Listing')} className="btn-primary py-2"><Plus className="h-4 w-4" /> Post property <span className="rounded bg-white/20 px-1.5 text-[10px]">FREE</span></button>
        </div>
      </div>
    </header>
  )
}
