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
}[] = [
  {
    nameKey: 'house.escondida.name',
    regionKey: 'house.escondida.region',
    sizeKey: 'house.escondida.size',
    landKey: 'house.escondida.land',
    descKey: 'house.escondida.desc',
    image: '/images/casa-la-escondida.jpg',
  },
  {
    nameKey: 'house.ria.name',
    regionKey: 'house.ria.region',
    sizeKey: 'house.ria.size',
    landKey: 'house.ria.land',
    descKey: 'house.ria.desc',
    image: '/images/casa-de-la-ria.jpg',
  },
  {
    nameKey: 'house.maderera.name',
    regionKey: 'house.maderera.region',
    sizeKey: 'house.maderera.size',
    landKey: 'house.maderera.land',
    descKey: 'house.maderera.desc',
    image: '/images/casa-la-maderera.jpg',
  },
  {
    nameKey: 'house.estrellas.name',
    regionKey: 'house.estrellas.region',
    sizeKey: 'house.estrellas.size',
    landKey: 'house.estrellas.land',
    descKey: 'house.estrellas.desc',
    image: '/images/casa-estrellas.jpg',
  },
  {
    nameKey: 'house.caracol.name',
    regionKey: 'house.caracol.region',
    sizeKey: 'house.caracol.size',
    landKey: 'house.caracol.land',
    descKey: 'house.caracol.desc',
    image: '/images/casa-caracol.jpg',
  },
]

export default function HousesSection() {
  const { t } = useLanguage()
  const h2Lines = t('houses.h2').split('\n')

  return (
    <section id="casas" className="bg-cream py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-24">

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-14 lg:mb-20">
          <h2 className="font-serif font-light text-ink leading-[0.95]" style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}>
            {h2Lines.map((line, i) => <span key={i} className="block">{line}</span>)}
          </h2>
          <p className="text-stone text-[11px] tracking-[0.25em] uppercase">{t('houses.label')}</p>
        </div>

        {/* 3-column card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {HOUSES.map((house, i) => (
            <div
              key={house.nameKey}
              className="relative group overflow-hidden"
              style={{ aspectRatio: '3/4' }}
            >
              <img
                src={house.image}
                alt={t(house.nameKey)}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-transparent" />

              {/* Number watermark */}
              <div className="absolute top-5 right-5">
                <span
                  className="font-serif leading-none select-none"
                  style={{ color: 'rgba(255,255,255,0.06)', fontSize: '4.5rem' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>

              {/* Card content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <p className="text-white/40 text-[9px] tracking-[0.35em] uppercase mb-2">
                  {t(house.regionKey)}
                </p>
                <h3 className="font-serif font-light text-white text-xl lg:text-2xl mb-3">
                  {t(house.nameKey)}
                </h3>

                <div className="flex gap-6 mb-3 pb-3 border-b border-white/10">
                  <div>
                    <p className="text-[9px] tracking-[0.2em] text-white/30 uppercase mb-1">{t('houses.spec.size')}</p>
                    <p className="font-serif text-white/80 text-sm">{t(house.sizeKey)}</p>
                  </div>
                  <div>
                    <p className="text-[9px] tracking-[0.2em] text-white/30 uppercase mb-1">{t('houses.spec.land')}</p>
                    <p className="font-serif text-white/80 text-sm">{t(house.landKey)}</p>
                  </div>
                </div>

                <p className="text-white/0 group-hover:text-white/65 text-xs leading-relaxed overflow-hidden max-h-0 group-hover:max-h-20 transition-all duration-500 mb-0 group-hover:mb-3">
                  {t(house.descKey)}
                </p>

                <a
                  href="#contacto"
                  className="inline-flex items-center gap-2 text-[10px] tracking-[0.2em] text-white/40 group-hover:text-white/80 uppercase transition-colors duration-300"
                >
                  {t('houses.cta')}
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
