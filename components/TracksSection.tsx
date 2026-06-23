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

function SpecGrid({ rows }: { rows: { label: string; value: string }[] }) {
  return (
    <div className="grid grid-cols-3 gap-6 pt-6 border-t border-stone/12">
      {rows.map(({ label, value }) => (
        <div key={label}>
          <p className="text-[8px] tracking-[0.3em] uppercase text-stone/45 mb-1.5">{label}</p>
          <p className="font-serif font-light text-ink text-sm leading-snug">{value}</p>
        </div>
      ))}
    </div>
  )
}

export default function TracksSection() {
  const { t } = useLanguage()
  const h2Lines = t('tracks.h2').split('\n')

  return (
    <section id="producto" className="bg-cream border-t border-stone/10 py-36 lg:py-56">
      <div className="max-w-7xl mx-auto px-8 lg:px-20">

        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-24 lg:mb-36">
          <div>
            <p className="text-[9px] tracking-[0.38em] uppercase text-stone/50 mb-10">
              {t('tracks.label')}
            </p>
            <h2
              className="font-serif font-light text-ink leading-[0.9]"
              style={{ fontSize: 'clamp(3rem, 6vw, 6rem)' }}
            >
              {h2Lines.map((line, i) => <span key={i} className="block">{line}</span>)}
            </h2>
          </div>
          <p className="text-stone text-sm leading-relaxed max-w-xs lg:text-right">
            {t('tracks.sub')}
          </p>
        </div>

        {/* Two tracks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-16 xl:gap-24">

          {/* ── TRACK A ── */}
          <div>
            {/* 2×2 mosaic — no overlays */}
            <div className="grid grid-cols-2 gap-px bg-stone/10 mb-10">
              {TRACK_A_IMAGES.map((img) => (
                <div key={img.src} className="aspect-[3/4] overflow-hidden bg-cream">
                  <img src={img.src} alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-[1.02]" />
                </div>
              ))}
            </div>

            <div className="border-t border-stone/12 pt-8">
              <p className="text-[9px] tracking-[0.38em] uppercase text-stone/45 mb-4">
                {t('tracks.a.label')}
              </p>
              <h3 className="font-serif font-light text-ink leading-tight mb-1"
                style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.25rem)' }}>
                {t('tracks.a.title')}
              </h3>
              <p className="text-[11px] text-stone/50 italic tracking-wide mb-8">
                {t('tracks.a.subtitle')}
              </p>

              <ul className="space-y-4 mb-10">
                {TRACK_A_BULLETS.map((key) => (
                  <li key={key} className="flex items-start gap-3 text-stone text-sm leading-snug">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-stone/40 flex-shrink-0" />
                    {t(key)}
                  </li>
                ))}
              </ul>

              <SpecGrid rows={[
                { label: t('tracks.a.time_label'),    value: t('tracks.a.time') },
                { label: t('tracks.a.cost_label'),    value: t('tracks.a.cost') },
                { label: t('tracks.a.product_label'), value: t('tracks.a.product') },
              ]} />
            </div>
          </div>

          {/* ── TRACK B ── */}
          <div>
            {/* Singular images — tall primary + wide secondary */}
            <div className="flex flex-col gap-px bg-stone/10 mb-10">
              <div className="aspect-[4/5] overflow-hidden bg-cream">
                <img src="/images/ref-stone-cottage.jpg" alt="Heritage stone cottage"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-[1.02]" />
              </div>
              <div className="aspect-[16/7] overflow-hidden bg-cream">
                <img src="/images/ref-concrete-hillside.jpg" alt="Hillside integration"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out hover:scale-[1.02]" />
              </div>
            </div>

            <div className="border-t border-stone/12 pt-8">
              <p className="text-[9px] tracking-[0.38em] uppercase text-stone/45 mb-4">
                {t('tracks.b.label')}
              </p>
              <h3 className="font-serif font-light text-ink leading-tight mb-1"
                style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.25rem)' }}>
                {t('tracks.b.title')}
              </h3>
              <p className="text-[11px] text-stone/50 italic tracking-wide mb-8">
                {t('tracks.b.subtitle')}
              </p>

              <ul className="space-y-4 mb-10">
                {TRACK_B_BULLETS.map((key) => (
                  <li key={key} className="flex items-start gap-3 text-stone text-sm leading-snug">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-stone/40 flex-shrink-0" />
                    {t(key)}
                  </li>
                ))}
              </ul>

              <SpecGrid rows={[
                { label: t('tracks.b.time_label'),    value: t('tracks.b.time') },
                { label: t('tracks.b.cost_label'),    value: t('tracks.b.cost') },
                { label: t('tracks.b.product_label'), value: t('tracks.b.product') },
              ]} />
            </div>
          </div>

        </div>

        {/* Footer rule */}
        <div className="mt-24 lg:mt-36 pt-8 border-t border-stone/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-[9px] tracking-[0.3em] uppercase text-stone/35">
            Madera · Piedra · Vidrio · Acero
          </p>
          <a href="#contacto"
            className="text-[9px] tracking-[0.28em] uppercase text-stone/50 hover:text-ink transition-colors duration-300 flex items-center gap-2 group w-fit">
            {t('nav.contacto')}
            <svg className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
        </div>

      </div>
    </section>
  )
}
