'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function ConceptSection() {
  const { t } = useLanguage()
  const h2Lines = t('concept.h2').split('\n')

  return (
    <section id="concepto" className="bg-cream py-28 lg:py-44">
      <div className="max-w-7xl mx-auto px-6 lg:px-24">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-start">

          <div>
            <p className="text-[11px] tracking-[0.35em] text-sage uppercase mb-8">
              {t('concept.label')}
            </p>
            <h2 className="font-serif font-light text-ink leading-[0.95]" style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}>
              {h2Lines.map((line, i) => <span key={i} className="block">{line}</span>)}
            </h2>
          </div>

          <div className="lg:pt-24">
            <p className="text-stone text-lg lg:text-xl leading-relaxed mb-6">
              {t('concept.p1')}
            </p>
            <p className="text-stone text-base leading-relaxed mb-12">
              {t('concept.p2')}
            </p>
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-mist">
              <div>
                <p className="font-serif text-ink text-4xl lg:text-5xl font-light mb-1">{t('concept.stat1.value')}</p>
                <p className="text-[10px] text-stone tracking-[0.2em] uppercase">{t('concept.stat1.label')}</p>
              </div>
              <div>
                <p className="font-serif text-ink text-4xl lg:text-5xl font-light mb-1">{t('concept.stat2.value')}</p>
                <p className="text-[10px] text-stone tracking-[0.2em] uppercase">{t('concept.stat2.label')}</p>
              </div>
              <div>
                <p className="font-serif text-ink text-4xl lg:text-5xl font-light mb-1">{t('concept.stat3.value')}</p>
                <p className="text-[10px] text-stone tracking-[0.2em] uppercase">{t('concept.stat3.label')}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
