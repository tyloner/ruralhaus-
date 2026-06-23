'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { TranslationKey } from '@/lib/translations'

const TRACK_A_IMAGES = [
  { src: '/images/ref-cedar-platform.jpg',   alt: 'Cedar cabin on steel platform at dusk' },
  { src: '/images/ref-nordic-treehouse.jpg', alt: 'Elevated cabin in Nordic pine forest' },
  { src: '/images/ref-black-cube.jpg',       alt: 'Charred timber cabin in woodland' },
  { src: '/images/ref-cedar-hillside.jpg',   alt: 'Cedar cabin with walkway on hillside' },
]

const TRACK_A_BULLETS: TranslationKey[] = ['tracks.a.b1', 'tracks.a.b2', 'tracks.a.b3']
const TRACK_B_BULLETS: TranslationKey[] = ['tracks.b.b1', 'tracks.b.b2', 'tracks.b.b3']

function Check() {
  return (
    <svg className="w-3 h-3 flex-shrink-0 mt-0.5 text-sand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  )
}

function SpecRow({ timeLabel, time, costLabel, cost, productLabel, product }: {
  timeLabel: string; time: string
  costLabel: string; cost: string
  productLabel: string; product: string
}) {
  return (
    <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
      <div>
        <p className="text-white/25 text-[8px] tracking-[0.28em] uppercase mb-1.5">{timeLabel}</p>
        <p className="font-serif text-white/80 text-sm">{time}</p>
      </div>
      <div>
        <p className="text-white/25 text-[8px] tracking-[0.28em] uppercase mb-1.5">{costLabel}</p>
        <p className="font-serif text-white/80 text-sm">{cost}</p>
      </div>
      <div>
        <p className="text-white/25 text-[8px] tracking-[0.28em] uppercase mb-1.5">{productLabel}</p>
        <p className="font-serif text-white/80 text-xs leading-snug">{product}</p>
      </div>
    </div>
  )
}

export default function TracksSection() {
  const { t } = useLanguage()

  const h2Lines = t('tracks.h2').split('\n')

  return (
    <section id="producto" className="bg-ink py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-24">

        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16 lg:mb-24">
          <div>
            <p className="text-white/30 text-[10px] tracking-[0.38em] uppercase mb-5">
              {t('tracks.label')}
            </p>
            <h2
              className="font-serif font-light text-white leading-[0.92]"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}
            >
              {h2Lines.map((line, i) => (
                <span key={i} className="block">{line}</span>
              ))}
            </h2>
          </div>
          <p className="text-white/45 text-sm leading-relaxed max-w-sm lg:text-right">
            {t('tracks.sub')}
          </p>
        </div>

        {/* Two tracks side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-10 xl:gap-20">

          {/* ── TRACK A ── */}
          <div>
            {/* 2×2 image mosaic */}
            <div className="grid grid-cols-2 gap-1 mb-8">
              {TRACK_A_IMAGES.map((img) => (
                <div key={img.src} className="aspect-[3/4] overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-[1.05]"
                  />
                </div>
              ))}
            </div>

            {/* Track A content */}
            <div className="border-t border-white/10 pt-7">
              <div className="flex items-start gap-5 mb-6">
                <span
                  className="font-serif leading-none select-none flex-shrink-0"
                  style={{ fontSize: '5rem', lineHeight: 1, color: 'rgba(255,255,255,0.06)' }}
                >
                  A
                </span>
                <div className="pt-1">
                  <p className="text-sand text-[9px] tracking-[0.35em] uppercase mb-2">
                    {t('tracks.a.label')}
                  </p>
                  <h3 className="font-serif font-light text-white leading-tight mb-1" style={{ fontSize: 'clamp(1.5rem, 2.2vw, 2rem)' }}>
                    {t('tracks.a.title')}
                  </h3>
                  <p className="text-white/35 text-xs tracking-[0.12em]">
                    {t('tracks.a.subtitle')}
                  </p>
                </div>
              </div>

              <ul className="space-y-3.5 mb-8">
                {TRACK_A_BULLETS.map((key) => (
                  <li key={key} className="flex items-start gap-3 text-white/55 text-sm leading-snug">
                    <Check />
                    {t(key)}
                  </li>
                ))}
              </ul>

              <SpecRow
                timeLabel={t('tracks.a.time_label')}
                time={t('tracks.a.time')}
                costLabel={t('tracks.a.cost_label')}
                cost={t('tracks.a.cost')}
                productLabel={t('tracks.a.product_label')}
                product={t('tracks.a.product')}
              />
            </div>
          </div>

          {/* ── TRACK B ── */}
          <div>
            {/* Singular primary image — tall */}
            <div className="flex flex-col gap-1 mb-8">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="/images/ref-stone-cottage.jpg"
                  alt="Stone heritage cottage among rocks"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-[1.05]"
                />
              </div>
              <div className="aspect-[16/7] overflow-hidden">
                <img
                  src="/images/ref-concrete-hillside.jpg"
                  alt="Concrete house embedded in hillside"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out hover:scale-[1.05]"
                />
              </div>
            </div>

            {/* Track B content */}
            <div className="border-t border-white/10 pt-7">
              <div className="flex items-start gap-5 mb-6">
                <span
                  className="font-serif leading-none select-none flex-shrink-0"
                  style={{ fontSize: '5rem', lineHeight: 1, color: 'rgba(255,255,255,0.06)' }}
                >
                  B
                </span>
                <div className="pt-1">
                  <p className="text-sand text-[9px] tracking-[0.35em] uppercase mb-2">
                    {t('tracks.b.label')}
                  </p>
                  <h3 className="font-serif font-light text-white leading-tight mb-1" style={{ fontSize: 'clamp(1.5rem, 2.2vw, 2rem)' }}>
                    {t('tracks.b.title')}
                  </h3>
                  <p className="text-white/35 text-xs tracking-[0.12em]">
                    {t('tracks.b.subtitle')}
                  </p>
                </div>
              </div>

              <ul className="space-y-3.5 mb-8">
                {TRACK_B_BULLETS.map((key) => (
                  <li key={key} className="flex items-start gap-3 text-white/55 text-sm leading-snug">
                    <Check />
                    {t(key)}
                  </li>
                ))}
              </ul>

              <SpecRow
                timeLabel={t('tracks.b.time_label')}
                time={t('tracks.b.time')}
                costLabel={t('tracks.b.cost_label')}
                cost={t('tracks.b.cost')}
                productLabel={t('tracks.b.product_label')}
                product={t('tracks.b.product')}
              />
            </div>
          </div>

        </div>

        {/* Bottom divider with design language note */}
        <div className="mt-20 lg:mt-24 pt-10 border-t border-white/8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-white/20 text-[9px] tracking-[0.3em] uppercase">
            Madera natural · Piedra local · Vidrio estructural · Acero expuesto
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 text-[9px] tracking-[0.28em] uppercase text-white/40 hover:text-white/80 transition-colors duration-300 w-fit group"
          >
            Hablar con nosotros
            <svg className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  )
}
