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
    <section id="filosofia" className="bg-ink py-28 lg:py-44">
      <div className="max-w-7xl mx-auto px-6 lg:px-24">

        <div className="mb-20 lg:mb-28">
          <p className="text-[11px] tracking-[0.35em] text-sage uppercase mb-6">{t('phil.label')}</p>
          <h2 className="font-serif font-light text-cream leading-[0.95]" style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}>
            {h2Lines.map((line, i) => <span key={i} className="block">{line}</span>)}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-6">
          {pillars.map((v) => (
            <div key={v.num} className="border-t border-white/10 pt-10">
              <span className="font-serif font-light leading-none block mb-10 select-none" style={{ color: 'rgba(255,255,255,0.05)', fontSize: '5rem' }}>
                {v.num}
              </span>
              <h3 className="font-serif font-light text-cream text-3xl mb-2">{v.title}</h3>
              <p className="text-sage text-xs tracking-[0.15em] italic mb-6">{v.subtitle}</p>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>{v.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-28 lg:mt-36 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1920&q=80"
            alt="Paisaje de la sierra española"
            className="w-full object-cover"
            style={{ maxHeight: '60vh' }}
          />
        </div>

      </div>
    </section>
  )
}
