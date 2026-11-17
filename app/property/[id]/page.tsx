import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Bath, BadgeCheck, BedDouble, Check, MapPin, Maximize, Sofa } from 'lucide-react'
import Enquiry from '@/components/Enquiry'
import ListingCard from '@/components/ListingCard'
import { getListing, listings, priceLabel } from '@/lib/data'

export function generateStaticParams() {
  return listings.map((l) => ({ id: l.id }))
}

export default function PropertyPage({ params }: { params: { id: string } }) {
  const l = getListing(params.id)
  if (!l) notFound()
  const similar = listings.filter((x) => x.id !== l.id && x.purpose === l.purpose).slice(0, 3)
  const facts = [
    { icon: BedDouble, label: 'Bedrooms', value: l.beds },
    { icon: Bath, label: 'Bathrooms', value: l.baths },
    { icon: Maximize, label: 'Super area', value: `${l.area.toLocaleString('en-IN')} ft²` },
    { icon: Sofa, label: 'Furnishing', value: l.furnishing },
  ]

  return (
    <div className="container-x py-8">
      <Link href="/#listings" className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900"><ArrowLeft className="h-4 w-4" /> Back to results</Link>

      <div className="mt-5 grid h-[420px] grid-cols-4 grid-rows-2 gap-3 overflow-hidden rounded-3xl">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={l.images[0]} alt={l.title} className="col-span-4 row-span-2 h-full w-full object-cover md:col-span-3" />
        {l.images.slice(1).map((src) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img key={src} src={src.replace('w=1200', 'w=600')} alt="" className="hidden h-full w-full object-cover md:block" />
        ))}
      </div>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_380px]">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-bold text-brand-700">{l.type}</span>
            {l.verified && <span className="flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700"><BadgeCheck className="h-3.5 w-3.5" /> Verified by NayaState</span>}
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">Posted by {l.postedBy}</span>
          </div>
          <h1 className="mt-4 font-display text-4xl font-extrabold text-slate-900">{l.title}</h1>
          <p className="mt-2 flex items-center gap-1 text-slate-500"><MapPin className="h-4 w-4" />{l.locality}, {l.city}</p>
          <p className="mt-5 font-display text-4xl font-extrabold text-brand-700">{priceLabel(l)}</p>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {facts.map(({ icon: Icon, label, value }) => (
              <div key={label} className="rounded-2xl bg-slate-50 p-4"><Icon className="h-5 w-5 text-brand-600" /><p className="mt-3 text-xs text-slate-500">{label}</p><p className="font-semibold text-slate-900">{value}</p></div>
            ))}
          </div>

          <h2 className="mt-10 font-display text-xl font-bold text-slate-900">About this property</h2>
          <p className="mt-3 leading-relaxed text-slate-600">{l.description}</p>

          <h2 className="mt-10 font-display text-xl font-bold text-slate-900">Amenities</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {l.amenities.map((a) => <p key={a} className="flex items-center gap-2 text-slate-700"><span className="grid h-6 w-6 place-items-center rounded-full bg-brand-100 text-brand-700"><Check className="h-3.5 w-3.5" /></span>{a}</p>)}
          </div>

          <h2 className="mt-10 font-display text-xl font-bold text-slate-900">Location</h2>
          <div className="relative mt-4 h-64 overflow-hidden rounded-3xl bg-gradient-to-br from-brand-50 via-sky-50 to-emerald-50">
            <svg className="absolute inset-0 h-full w-full opacity-40" viewBox="0 0 400 200" preserveAspectRatio="none">
              <path d="M0 140 Q 100 100 200 130 T 400 110" stroke="#94a3b8" strokeWidth="6" fill="none" />
              <path d="M120 0 L 160 200" stroke="#cbd5e1" strokeWidth="4" /><path d="M280 0 L 250 200" stroke="#cbd5e1" strokeWidth="4" />
            </svg>
            <span className="absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-full place-items-center rounded-full bg-brand-600 text-white shadow-xl ring-8 ring-brand-500/20"><MapPin className="h-6 w-6" /></span>
          </div>
        </div>

        <Enquiry title={l.title} price={l.price} purpose={l.purpose} />
      </div>

      {similar.length > 0 && (
        <section className="mt-20">
          <h2 className="mb-6 font-display text-2xl font-extrabold text-slate-900">Similar properties</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{similar.map((s) => <ListingCard key={s.id} l={s} />)}</div>
        </section>
      )}
    </div>
  )
}
