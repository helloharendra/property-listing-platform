import Link from 'next/link'
import { Bath, BadgeCheck, BedDouble, MapPin, Maximize } from 'lucide-react'
import { priceLabel, type Listing } from '@/lib/data'

export default function ListingCard({ l }: { l: Listing }) {
  return (
    <Link href={`/property/${l.id}`} className="group block overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200/70 transition hover:-translate-y-1 hover:shadow-2xl">
      <div className="relative h-56 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={l.images[0].replace('w=1200', 'w=700')} alt={l.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent" />
        <div className="absolute left-4 top-4 flex gap-2">
          <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-slate-900 backdrop-blur">{l.purpose === 'Buy' ? 'For sale' : 'For rent'}</span>
          {l.verified && <span className="flex items-center gap-1 rounded-full bg-brand-600 px-3 py-1 text-xs font-bold text-white"><BadgeCheck className="h-3.5 w-3.5" /> Verified</span>}
        </div>
        <p className="absolute bottom-4 left-4 font-display text-2xl font-extrabold text-white">{priceLabel(l)}</p>
        <span className="absolute bottom-4 right-4 rounded-full bg-white/15 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur">{l.postedBy}</span>
      </div>
      <div className="p-5">
        <h3 className="font-display text-lg font-bold text-slate-900">{l.title}</h3>
        <p className="mt-1 flex items-center gap-1 text-sm text-slate-500"><MapPin className="h-4 w-4" />{l.locality}, {l.city}</p>
        <div className="mt-4 flex justify-between border-t border-slate-100 pt-4 text-sm text-slate-600">
          <span className="flex items-center gap-1.5"><BedDouble className="h-4 w-4 text-brand-600" />{l.beds} Beds</span>
          <span className="flex items-center gap-1.5"><Bath className="h-4 w-4 text-brand-600" />{l.baths} Baths</span>
          <span className="flex items-center gap-1.5"><Maximize className="h-4 w-4 text-brand-600" />{l.area.toLocaleString('en-IN')} ft²</span>
        </div>
      </div>
    </Link>
  )
}
