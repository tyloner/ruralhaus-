'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { TranslationKey } from '@/lib/translations'

const REGION_IMAGES = {
  gredos: '/images/region-gredos.jpg',
  sierranorte: '/images/region-sierranorte.jpg',
  guadarrama: '/images/region-guadarrama.jpg',
  cantabria: '/images/region-cantabria.jpg',
}

const REGIONS: {
  id: keyof typeof REGION_IMAGES
  nameKey: TranslationKey
  taglineKey: TranslationKey
  distanceKey: TranslationKey
  descKey: TranslationKey
}[] = [
  {
    id: 'gredos',
    nameKey: 'regions.gredos.name',
    taglineKey: 'regions.gredos.tagline',
    distanceKey: 'regions.gredos.distance',
    descKey: 'regions.gredos.desc',
  },
  {
    id: 'sierranorte',
    nameKey: 'regions.sierranorte.name',
    taglineKey: 'regions.sierranorte.tagline',
    distanceKey: 'regions.sierranorte.distance',
    descKey: 'regions.sierranorte.desc',
  },
  {
    id: 'guadarrama',
    nameKey: 'regions.guadarrama.name',
    taglineKey: 'regions.guadarrama.tagline',
    distanceKey: 'regions.guadarrama.distance',
    descKey: 'regions.guadarrama.desc',
  },
  {
    id: 'cantabria',
    nameKey: 'regions.cantabria.name',
    taglineKey: 'regions.cantabria.tagline',
    distanceKey: 'regions.cantabria.distance',
    descKey: 'regions.cantabria.desc',
  },
]

export default function RegionsSection() {
  const { t } = useLanguage()
  const h2Lines = t('regions.h2').split('\n')

  return (
    <section id="regiones" className="bg-ink">
      <div className="max-w-7xl mx-auto px-6 lg:px-24 pt-24 pb-12 lg:pt-32 lg:pb-16">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <h2 className="font-serif font-light text-cream leading-[0.95]" style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}>
            {h2Lines.map((line, i) => <span key={i} className="block">{line}</span>)}
          </h2>
          <p className="text-stone text-[11px] tracking-[0.25em] uppercase">{t('regions.label')}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2">
        {REGIONS.map((region, i) => (
          <div key={region.id} className="relative group overflow-hidden" style={{ aspectRatio: '4/3' }}>
            <img
              src={REGION_IMAGES[region.id]}
              alt={t(region.nameKey)}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/20 to-transparent" />
            <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/25 transition-colors duration-500" />

            <div className="absolute top-6 right-6 lg:top-8 lg:right-8">
              <span className="font-serif leading-none select-none" style={{ color: 'rgba(255,255,255,0.07)', fontSize: '5rem' }}>
                {String(i + 1).padStart(2, '0')}
              </span>
            </div>

            <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-10">
              <p className="text-white/50 text-[10px] tracking-[0.35em] uppercase mb-2 lg:mb-3">
                {t(region.distanceKey)}
              </p>
              <h3 className="font-serif font-light text-white text-2xl lg:text-3xl mb-2">
                {t(region.nameKey)}
              </h3>
              <p className="text-white/50 text-xs italic mb-0 group-hover:mb-3 transition-all duration-500">
                {t(region.taglineKey)}
              </p>
              <p className="text-sm leading-relaxed max-w-sm transition-all duration-500 overflow-hidden max-h-0 group-hover:max-h-32 text-white/0 group-hover:text-white/80">
                {t(region.descKey)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
