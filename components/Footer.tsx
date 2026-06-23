'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-ink border-t border-white/5">
      <div className="max-w-7xl mx-auto px-8 lg:px-20 py-14 lg:py-16">

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <p className="font-serif text-cream/80 text-sm tracking-[0.2em] uppercase">RuralHaus</p>

          <div className="flex flex-wrap items-center gap-6 lg:gap-10">
            {[
              { href: '#concepto',   label: t('nav.concepto') },
              { href: '#regiones',   label: t('nav.regiones') },
              { href: '#producto',   label: t('nav.producto') },
              { href: '#filosofia',  label: t('nav.filosofia') },
              { href: '#contacto',   label: t('nav.contacto') },
            ].map(({ href, label }) => (
              <a key={href} href={href}
                className="text-[9px] tracking-[0.28em] uppercase text-white/30 hover:text-white/60 transition-colors duration-300">
                {label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-1.5">
            <a href="mailto:casita@ruralhaus.co"
              className="text-[10px] text-white/30 hover:text-white/60 transition-colors duration-300">
              casita@ruralhaus.co
            </a>
            <a href="https://instagram.com/rural.haus"
              className="text-[10px] text-white/30 hover:text-white/60 transition-colors duration-300">
              @rural.haus
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-[9px] text-white/20">
            © {new Date().getFullYear()} RuralHaus. {t('footer.rights')}
          </p>
          <div className="flex gap-5">
            <a href="#" className="text-[9px] text-white/20 hover:text-white/40 transition-colors">{t('footer.privacy')}</a>
            <a href="#" className="text-[9px] text-white/20 hover:text-white/40 transition-colors">{t('footer.legal')}</a>
          </div>
        </div>

      </div>
    </footer>
  )
}
