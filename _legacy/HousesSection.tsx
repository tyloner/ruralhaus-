'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { TranslationKey } from '@/lib/translations'

const HOUSES: {
  nameKey: TranslationKey
  regionKey: TranslationKey
  sizeKey: TranslationKey
  landKey: TranslationKey
  descKey: TranslationKey
  image: string
  arch: string
}[] = [
  {
    nameKey: 'house.escondida.name',
    regionKey: 'house.escondida.region',
    sizeKey: 'house.escondida.size',
    landKey: 'house.escondida.land',
    descKey: 'house.escondida.desc',
    image: '/images/casa-la-escondida.jpg',
    arch: 'Piedra · Reserva Natural',
  },
  {
    nameKey: 'house.ria.name',
    regionKey: 'house.ria.region',
    sizeKey: 'house.ria.size',
    landKey: 'house.ria.land',
    descKey: 'house.ria.desc',
    image: '/images/casa-de-la-ria.jpg',
    arch: 'Piedra & Madera · Estuario',
  },
  {
    nameKey: 'house.maderera.name',
    regionKey: 'house.maderera.region',
    sizeKey: 'house.maderera.size',
    landKey: 'house.maderera.land',
    descKey: 'house.maderera.desc',
    image: '/images/casa-la-maderera.jpg',
    arch: 'Viga de Madera · Aldea',
  },
  {
    nameKey: 'house.estrellas.name',
    regionKey: 'house.estrellas.region',
    sizeKey: 'house.estrellas.size',
    landKey: 'house.estrellas.land',
    descKey: 'house.estrellas.desc',
    image: '/images/casa-estrellas.jpg',
    arch: 'Ladera Sur · Cielo Abierto',
  },
  {
    nameKey: 'house.caracol.name',
    regionKey: 'house.caracol.region',
    sizeKey: 'house.caracol.size',
    landKey: 'house.caracol.land',
    descKey: 'house.caracol.desc',
    image: '/images/casa-caracol.jpg',
    arch: 'Piedra · Costa Cantábrica',
  },
]

function HouseCard({
  house,
  index,
  t,
  large = false,
}: {
  house: (typeof HOUSES)[0]
  index: number
  t: (key: TranslationKey) => string
  large?: boolean
}) {
  return (
    <div className="relative group overflow-hidden h-full w-full cursor-pointer">
      {/* Photo */}
      <img
        src={house.image}
        alt={t(house.nameKey)}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
      />

      {/* Base gradient — always on */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/25 to-transparent" />
      {/* Hover gradient — enriches the base on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Top bar: arch tag + index */}
      <div className="absolute top-0 inset-x-0 flex items-start justify-between p-5 lg:p-6">
        <span className="text-white/35 text-[8px] tracking-[0.38em] uppercase leading-none pt-1">
          {house.arch}
        </span>
        <span
          className="font-serif select-none leading-none"
          style={{ color: 'rgba(255,255,255,0.055)', fontSize: large ? '7rem' : '5rem', lineHeight: 1 }}
        >
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      {/* Bottom content */}
      <div className="absolute inset-x-0 bottom-0 p-5 lg:p-7 flex flex-col">

        {/* Region */}
        <p className="text-white/30 text-[8px] tracking-[0.38em] uppercase mb-2 leading-none">
          {t(house.regionKey)}
        </p>

        {/* Name */}
        <h3
          className="font-serif font-light text-white leading-[1.05] mb-5"
          style={{ fontSize: large ? 'clamp(1.6rem, 2.5vw, 2.25rem)' : 'clamp(1.2rem, 1.8vw, 1.65rem)' }}
        >
          {t(house.nameKey)}
        </h3>

        {/* Specs row */}
        <div className="flex items-start gap-5 pb-4 border-b border-white/10 mb-4">
          <div>
            <p className="text-[7px] tracking-[0.28em] text-white/22 uppercase mb-1">{t('houses.spec.size')}</p>
            <p className="font-serif text-white/65 text-sm">{t(house.sizeKey)}</p>
          </div>
          <div className="w-px self-stretch bg-white/10 mt-1" />
          <div>
            <p className="text-[7px] tracking-[0.28em] text-white/22 uppercase mb-1">{t('houses.spec.land')}</p>
            <p className="font-serif text-white/65 text-sm leading-snug">{t(house.landKey)}</p>
          </div>
        </div>

        {/* Description — hover reveal */}
        <p
          className={`text-white/65 leading-relaxed mb-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 ease-out ${large ? 'text-xs' : 'text-[11px]'} line-clamp-3`}
        >
          {t(house.descKey)}
        </p>

        {/* CTA — hover reveal */}
        <a
          href="#contacto"
          className="inline-flex items-center gap-2 text-[9px] tracking-[0.28em] uppercase text-white/0 group-hover:text-white/60 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-500 delay-75 w-fit hover:text-white/90"
        >
          {t('houses.cta')}
          <svg
            className="w-3 h-3 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </div>
  )
}

export default function HousesSection() {
  const { t } = useLanguage()
  const h2Lines = t('houses.h2').split('\n')

  return (
    <section id="casas" className="bg-cream py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-24">

        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-14 lg:mb-20">
          <h2
            className="font-serif font-light text-ink leading-[0.95]"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}
          >
            {h2Lines.map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </h2>
          <div className="flex flex-col items-start lg:items-end gap-1">
            <p className="text-stone text-[11px] tracking-[0.25em] uppercase">{t('houses.label')}</p>
            <div className="flex items-center gap-2 mt-1">
              <div className="w-5 h-px bg-stone/40" />
              <span className="text-stone/50 text-[9px] tracking-[0.2em] uppercase">5 propiedades</span>
            </div>
          </div>
        </div>

        {/* Editorial grid — Row 1: featured (7/12) + tall (5/12) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-4">

          {/* Card 1 — featured large */}
          <div className="aspect-[4/5] lg:aspect-auto lg:col-span-7 lg:h-[580px]">
            <HouseCard house={HOUSES[0]} index={0} t={t} large />
          </div>

          {/* Card 2 — tall right */}
          <div className="aspect-[4/5] lg:aspect-auto lg:col-span-5 lg:h-[580px]">
            <HouseCard house={HOUSES[1]} index={1} t={t} />
          </div>

          {/* Cards 3–5 — three across */}
          {HOUSES.slice(2).map((house, i) => (
            <div key={house.nameKey} className="aspect-[4/5] lg:aspect-auto lg:col-span-4 lg:h-[430px]">
              <HouseCard house={house} index={i + 2} t={t} />
            </div>
          ))}
        </div>

        {/* Bottom rule */}
        <div className="flex items-center gap-6 mt-10 lg:mt-12">
          <div className="flex-1 h-px bg-stone/15" />
          <a
            href="#contacto"
            className="text-[9px] tracking-[0.3em] uppercase text-stone/60 hover:text-ink transition-colors duration-300 whitespace-nowrap"
          >
            Ver todas las casas
          </a>
          <div className="flex-1 h-px bg-stone/15" />
        </div>

      </div>
    </section>
  )
}
