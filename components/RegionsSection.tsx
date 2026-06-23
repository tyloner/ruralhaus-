'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { TranslationKey } from '@/lib/translations'

const REGIONS: {
  id: string
  image: string
  nameKey: TranslationKey
  taglineKey: TranslationKey
  distanceKey: TranslationKey
}[] = [
  { id: 'gredos',      image: '/images/region-gredos.jpg',      nameKey: 'regions.gredos.name',      taglineKey: 'regions.gredos.tagline',      distanceKey: 'regions.gredos.distance' },
  { id: 'sierranorte', image: '/images/region-sierranorte.jpg', nameKey: 'regions.sierranorte.name', taglineKey: 'regions.sierranorte.tagline', distanceKey: 'regions.sierranorte.distance' },
  { id: 'guadarrama',  image: '/images/region-guadarrama.jpg',  nameKey: 'regions.guadarrama.name',  taglineKey: 'regions.guadarrama.tagline',  distanceKey: 'regions.guadarrama.distance' },
  { id: 'cantabria',   image: '/images/region-cantabria.jpg',   nameKey: 'regions.cantabria.name',   taglineKey: 'regions.cantabria.tagline',   distanceKey: 'regions.cantabria.distance' },
]

export default function RegionsSection() {
  const { t } = useLanguage()
  const h2Lines = t('regions.h2').split('\n')

  return (
    <section id="regiones" className="bg-cream border-t border-stone/10">

      {/* Section header */}
      <div className="max-w-7xl mx-auto px-8 lg:px-20 py-24 lg:py-36">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <h2
            className="font-serif font-light text-ink leading-[0.9]"
            style={{ fontSize: 'clamp(3rem, 6vw, 6rem)' }}
          >
            {h2Lines.map((line, i) => <span key={i} className="block">{line}</span>)}
          </h2>
          <p className="text-[9px] tracking-[0.35em] uppercase text-stone/50">
            {t('regions.label')}
          </p>
        </div>
      </div>

      {/* 2×2 image grid — hairline gaps, no overlays */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-stone/12">
        {REGIONS.map((region) => (
          <div key={region.id} className="bg-cream">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={region.image}
                alt={t(region.nameKey)}
                className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-[1.02]"
              />
            </div>
            <div className="px-8 lg:px-10 py-6 flex items-baseline justify-between gap-4">
              <div>
                <p className="font-serif font-light text-ink text-lg leading-snug mb-0.5">
                  {t(region.nameKey)}
                </p>
                <p className="text-[11px] text-stone/60 italic">{t(region.taglineKey)}</p>
              </div>
              <p className="text-[9px] tracking-[0.25em] uppercase text-stone/40 whitespace-nowrap flex-shrink-0">
                {t(region.distanceKey)}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="pb-24 lg:pb-36" />
    </section>
  )
}
