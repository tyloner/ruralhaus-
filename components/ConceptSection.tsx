'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function ConceptSection() {
  const { t } = useLanguage()
  const h2Lines = t('concept.h2').split('\n')

  const stats = [
    { value: t('concept.stat1.value'), label: t('concept.stat1.label') },
    { value: t('concept.stat2.value'), label: t('concept.stat2.label') },
    { value: t('concept.stat3.value'), label: t('concept.stat3.label') },
  ]

  return (
    <section id="concepto" className="bg-cream border-t border-stone/10 py-36 lg:py-56">
      <div className="max-w-7xl mx-auto px-8 lg:px-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-0">

          {/* Left: label + headline */}
          <div className="lg:col-span-5">
            <p className="text-[9px] tracking-[0.38em] uppercase text-stone/50 mb-10">
              {t('concept.label')}
            </p>
            <h2
              className="font-serif font-light text-ink leading-[0.9]"
              style={{ fontSize: 'clamp(3rem, 6vw, 6rem)' }}
            >
              {h2Lines.map((line, i) => <span key={i} className="block">{line}</span>)}
            </h2>
          </div>

          {/* Right: prose + stats */}
          <div className="lg:col-span-6 lg:col-start-7 lg:pt-28">
            <p className="font-serif font-light text-ink text-xl lg:text-2xl leading-relaxed mb-6">
              {t('concept.p1')}
            </p>
            <p className="text-stone text-base leading-relaxed mb-16">
              {t('concept.p2')}
            </p>

            <div className="flex items-end gap-10 pt-8 border-t border-stone/12">
              {stats.map(({ value, label }) => (
                <div key={label}>
                  <p className="font-serif font-light text-ink leading-none mb-2"
                    style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)' }}>
                    {value}
                  </p>
                  <p className="text-[9px] tracking-[0.25em] uppercase text-stone/50">{label}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
