'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function HeroSection() {
  const { t } = useLanguage()
  const lines = t('hero.h1').split('\n')

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1920&q=80"
          alt="Sierra española al amanecer"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/35" />
      </div>

      <div className="relative h-full flex flex-col justify-end px-6 lg:px-24 pb-20 lg:pb-28">
        <div className="max-w-5xl">
          <p className="text-white/50 text-[11px] tracking-[0.35em] uppercase mb-6 lg:mb-8">
            {t('hero.tagline')}
          </p>
          <h1
            className="font-serif font-light text-white leading-[0.9] mb-8 lg:mb-10"
            style={{ fontSize: 'clamp(3rem, 10vw, 8rem)' }}
          >
            {lines.map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </h1>
          <p className="text-white/70 text-sm lg:text-base leading-relaxed max-w-md">
            {t('hero.sub')}
          </p>
        </div>

        <div className="absolute bottom-10 right-8 lg:right-16 hidden lg:flex flex-col items-center gap-3">
          <div className="w-px h-14 bg-white/15 relative overflow-hidden">
            <div
              className="absolute top-0 left-0 w-full bg-white/60"
              style={{ height: '40%', animation: 'scrollLine 2s ease-in-out infinite' }}
            />
          </div>
          <span className="text-white/30 text-[10px] tracking-[0.35em] uppercase" style={{ writingMode: 'vertical-rl' }}>
            Scroll
          </span>
        </div>
      </div>
    </section>
  )
}
