'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function HeroSection() {
  const { t } = useLanguage()
  const lines = t('hero.h1').split('\n')

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1920&q=80"
        alt="Sierra española al amanecer"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-ink/18" />

      <div className="relative h-full flex flex-col justify-end px-8 lg:px-20 pb-16 lg:pb-24">
        <h1
          className="font-serif font-light text-white leading-[0.88] mb-6"
          style={{ fontSize: 'clamp(3.5rem, 11vw, 9.5rem)' }}
        >
          {lines.map((line, i) => (
            <span key={i} className="block">{line}</span>
          ))}
        </h1>
        <p className="text-white/50 text-sm leading-relaxed max-w-xs">
          {t('hero.sub')}
        </p>
      </div>

      {/* Minimal scroll nudge */}
      <div className="absolute bottom-8 right-8 lg:right-20 hidden lg:block">
        <span className="text-white/25 text-[8px] tracking-[0.38em] uppercase" style={{ writingMode: 'vertical-rl' }}>
          Scroll
        </span>
      </div>
    </section>
  )
}
