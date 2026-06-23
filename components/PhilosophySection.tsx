'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function PhilosophySection() {
  const { t } = useLanguage()
  const h2Lines = t('phil.h2').split('\n')

  const pillars = [
    { num: '01', title: t('phil.01.title'), subtitle: t('phil.01.subtitle'), body: t('phil.01.body') },
    { num: '02', title: t('phil.02.title'), subtitle: t('phil.02.subtitle'), body: t('phil.02.body') },
    { num: '03', title: t('phil.03.title'), subtitle: t('phil.03.subtitle'), body: t('phil.03.body') },
  ]

  return (
    <section id="filosofia" className="bg-cream border-t border-stone/10 py-36 lg:py-56">
      <div className="max-w-7xl mx-auto px-8 lg:px-20">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-24 lg:mb-36">
          <div>
            <p className="text-[9px] tracking-[0.38em] uppercase text-stone/50 mb-10">
              {t('phil.label')}
            </p>
            <h2
              className="font-serif font-light text-ink leading-[0.9]"
              style={{ fontSize: 'clamp(3rem, 6vw, 6rem)' }}
            >
              {h2Lines.map((line, i) => <span key={i} className="block">{line}</span>)}
            </h2>
          </div>
        </div>

        {/* Three pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-stone/10">
          {pillars.map((v) => (
            <div key={v.num} className="bg-cream pt-8 pb-0 lg:pr-12">
              <p className="font-serif font-light text-stone/20 leading-none mb-8 select-none"
                style={{ fontSize: '3.5rem' }}>
                {v.num}
              </p>
              <h3 className="font-serif font-light text-ink text-2xl lg:text-3xl mb-2">{v.title}</h3>
              <p className="text-stone/50 text-[11px] tracking-[0.1em] italic mb-6">{v.subtitle}</p>
              <p className="text-stone text-sm leading-relaxed">{v.body}</p>
            </div>
          ))}
        </div>

        {/* Full-bleed landscape image — below pillars, outside container */}
      </div>

      {/* Full-width image, edge to edge */}
      <div className="mt-24 lg:mt-36 overflow-hidden" style={{ maxHeight: '55vh' }}>
        <img
          src="https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1920&q=80"
          alt="Paisaje de la sierra española"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  )
}
