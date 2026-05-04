'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { TranslationKey } from '@/lib/translations'

// Replace any src with the path to your own photo once uploaded to /public/images/
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
    image: 'https://images.unsplash.com/photo-1568454537842-d933259bb258?auto=format&fit=crop&w=1400&q=80',
  },
  {
    nameKey: 'house.ria.name',
    regionKey: 'house.ria.region',
    sizeKey: 'house.ria.size',
    landKey: 'house.ria.land',
    descKey: 'house.ria.desc',
    image: 'https://images.unsplash.com/photo-1527030280862-64139ffd8054?auto=format&fit=crop&w=1400&q=80',
  },
  {
    nameKey: 'house.maderera.name',
    regionKey: 'house.maderera.region',
    sizeKey: 'house.maderera.size',
    landKey: 'house.maderera.land',
    descKey: 'house.maderera.desc',
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=1400&q=80',
  },
  {
    nameKey: 'house.estrellas.name',
    regionKey: 'house.estrellas.region',
    sizeKey: 'house.estrellas.size',
    landKey: 'house.estrellas.land',
    descKey: 'house.estrellas.desc',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1400&q=80',
  },
  {
    nameKey: 'house.caracol.name',
    regionKey: 'house.caracol.region',
    sizeKey: 'house.caracol.size',
    landKey: 'house.caracol.land',
    descKey: 'house.caracol.desc',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1400&q=80',
  },
]

export default function HousesSection() {
  const { t } = useLanguage()
  const h2Lines = t('houses.h2').split('\n')

  return (
    <section id="casas" className="bg-cream py-28 lg:py-44">
      <div className="max-w-7xl mx-auto px-6 lg:px-24">

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-24 lg:mb-32">
          <h2 className="font-serif font-light text-ink leading-[0.95]" style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}>
            {h2Lines.map((line, i) => <span key={i} className="block">{line}</span>)}
          </h2>
          <p className="text-stone text-[11px] tracking-[0.25em] uppercase">{t('houses.label')}</p>
        </div>

        <div className="space-y-28 lg:space-y-44">
          {HOUSES.map((house, i) => {
            const isEven = i % 2 === 0
            return (
              <div key={house.nameKey} className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">

                <div className={`overflow-hidden ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
                    <img
                      src={house.image}
                      alt={t(house.nameKey)}
                      className="w-full h-full object-cover hover:scale-[1.04] transition-transform duration-700 ease-out"
                    />
                  </div>
                </div>

                <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
                  <div className="flex items-center gap-5 mb-8">
                    <span className="font-serif font-light leading-none select-none" style={{ fontSize: '4rem', color: '#EAE5DC' }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="h-px flex-1 bg-mist" />
                  </div>

                  <p className="text-[10px] tracking-[0.35em] text-sage uppercase mb-4">
                    {t(house.regionKey)} · Cantabria & Asturias
                  </p>

                  <h3 className="font-serif font-light text-ink text-3xl lg:text-4xl mb-5">
                    {t(house.nameKey)}
                  </h3>

                  <p className="text-stone text-sm lg:text-base leading-relaxed mb-8">
                    {t(house.descKey)}
                  </p>

                  <div className="flex gap-10 mb-8 pb-8 border-b border-mist">
                    <div>
                      <p className="text-[10px] tracking-[0.2em] text-stone uppercase mb-1.5">{t('houses.spec.size')}</p>
                      <p className="font-serif text-ink text-xl">{t(house.sizeKey)}</p>
                    </div>
                    <div>
                      <p className="text-[10px] tracking-[0.2em] text-stone uppercase mb-1.5">{t('houses.spec.land')}</p>
                      <p className="font-serif text-ink text-xl leading-snug">{t(house.landKey)}</p>
                    </div>
                  </div>

                  <a
                    href="#contacto"
                    className="inline-flex items-center gap-3 text-[11px] tracking-[0.25em] text-ink uppercase hover:text-sage transition-colors"
                  >
                    {t('houses.cta')}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>

              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
