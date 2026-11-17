import { img } from './utils'

// Sample listings for the UI demo. The complete project manages listings, owners, agents & leads from the admin panel.
export type Listing = {
  id: string
  title: string
  locality: string
  city: string
  purpose: 'Buy' | 'Rent'
  type: 'Apartment' | 'Villa' | 'Independent House' | 'Studio' | 'Penthouse'
  price: number
  beds: number
  baths: number
  area: number
  furnishing: string
  postedBy: 'Owner' | 'Agent' | 'Builder'
  verified: boolean
  images: string[]
  amenities: string[]
  description: string
}

const g = (...ids: string[]) => ids.map((i) => img(i, 1200))

export const listings: Listing[] = [
  { id: 'skyline-3bhk-noida', title: '3 BHK in Skyline Residency', locality: 'Sector 150', city: 'Noida', purpose: 'Buy', type: 'Apartment', price: 12500000, beds: 3, baths: 3, area: 1850, furnishing: 'Semi-furnished', postedBy: 'Builder', verified: true, images: g('1545324418-cc1a3fa10c00', '1522708323590-d24dbb6b0267', '1502672260266-1c1ef2d93688'), amenities: ['Swimming pool', 'Gym', 'Clubhouse', '24×7 security', 'Power backup', 'Kids play area'], description: 'East-facing corner apartment on the 14th floor with an unobstructed golf-course view, modular kitchen and two covered parking slots.' },
  { id: 'palm-grove-villa', title: '5 BHK Luxury Villa, Palm Grove', locality: 'Golf Course Road', city: 'Gurugram', purpose: 'Buy', type: 'Villa', price: 48000000, beds: 5, baths: 6, area: 5200, furnishing: 'Fully furnished', postedBy: 'Agent', verified: true, images: g('1613490493576-7fde63acd811', '1600607687939-ce8a6c25118c', '1600585154340-be6161a56a0c'), amenities: ['Private pool', 'Home theatre', 'Garden', 'Smart home', 'Servant quarters', 'EV charging'], description: 'A contemporary villa with double-height living, private pool, landscaped garden and Italian marble throughout.' },
  { id: 'lakeview-2bhk-powai', title: '2 BHK with Lake View', locality: 'Powai', city: 'Mumbai', purpose: 'Rent', type: 'Apartment', price: 85000, beds: 2, baths: 2, area: 1100, furnishing: 'Fully furnished', postedBy: 'Owner', verified: true, images: g('1522708323590-d24dbb6b0267', '1502672260266-1c1ef2d93688', '1545324418-cc1a3fa10c00'), amenities: ['Lake view', 'Gym', 'Lift', 'Covered parking', 'Gas pipeline'], description: 'Bright, airy home overlooking Powai lake. Walking distance to Hiranandani Gardens and the IT parks.' },
  { id: 'green-meadows-house', title: '4 BHK Independent House', locality: 'Whitefield', city: 'Bengaluru', purpose: 'Buy', type: 'Independent House', price: 32000000, beds: 4, baths: 4, area: 3600, furnishing: 'Semi-furnished', postedBy: 'Owner', verified: false, images: g('1568605114967-8130f3a36994', '1564013799919-ab600027ffc6', '1580587771525-78b9dba3b914'), amenities: ['Private garden', 'Terrace', 'Solar panels', 'Rainwater harvesting'], description: 'Spacious family home in a gated layout with a sun-lit terrace and garden, close to international schools.' },
  { id: 'koregaon-studio', title: 'Designer Studio Loft', locality: 'Koregaon Park', city: 'Pune', purpose: 'Rent', type: 'Studio', price: 32000, beds: 1, baths: 1, area: 620, furnishing: 'Fully furnished', postedBy: 'Agent', verified: true, images: g('1502672260266-1c1ef2d93688', '1522708323590-d24dbb6b0267', '1545324418-cc1a3fa10c00'), amenities: ['Wi-Fi', 'Housekeeping', 'Co-working lounge', 'Lift'], description: 'A stylish, move-in-ready studio in the heart of KP, ideal for working professionals.' },
  { id: 'courtyard-duplex', title: '4 BHK Courtyard Duplex', locality: 'Jubilee Hills', city: 'Hyderabad', purpose: 'Buy', type: 'Penthouse', price: 27500000, beds: 4, baths: 5, area: 3100, furnishing: 'Unfurnished', postedBy: 'Builder', verified: true, images: g('1600596542815-ffad4c1539a9', '1605276374104-dee2a0ed3cd6', '1600607687939-ce8a6c25118c'), amenities: ['Private terrace', 'Jacuzzi', 'Clubhouse', 'Concierge', 'Gym'], description: 'Sky-high duplex with an open courtyard, panoramic city views and a private terrace jacuzzi.' },
  { id: 'banjara-villa-rent', title: '3 BHK Villa with Garden', locality: 'Banjara Hills', city: 'Hyderabad', purpose: 'Rent', type: 'Villa', price: 145000, beds: 3, baths: 4, area: 2800, furnishing: 'Semi-furnished', postedBy: 'Owner', verified: true, images: g('1580587771525-78b9dba3b914', '1564013799919-ab600027ffc6', '1600585154340-be6161a56a0c'), amenities: ['Garden', 'Parking for 3', 'Power backup', 'Pet friendly'], description: 'Quiet villa in a leafy lane with a lush garden, ideal for families and expats.' },
  { id: 'modern-villa-goa', title: 'Modern 3 BHK Holiday Villa', locality: 'Assagao', city: 'Goa', purpose: 'Buy', type: 'Villa', price: 39000000, beds: 3, baths: 3, area: 3300, furnishing: 'Fully furnished', postedBy: 'Agent', verified: true, images: g('1600585154340-be6161a56a0c', '1613490493576-7fde63acd811', '1600607687939-ce8a6c25118c'), amenities: ['Infinity pool', 'Deck', 'Caretaker', 'Rental management'], description: 'Tropical-modern villa with an infinity pool, ready to earn through holiday rentals.' },
]

export const cities = ['All cities', ...Array.from(new Set(listings.map((l) => l.city)))]
export const getListing = (id: string) => listings.find((l) => l.id === id)

export const priceLabel = (l: Pick<Listing, 'price' | 'purpose'>) =>
  l.purpose === 'Rent'
    ? `₹${l.price.toLocaleString('en-IN')}/mo`
    : l.price >= 1e7 ? `₹${(l.price / 1e7).toFixed(2)} Cr` : `₹${(l.price / 1e5).toFixed(0)} L`
