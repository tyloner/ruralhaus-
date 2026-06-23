'use client'

import { useState, useEffect } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

const NAV_LINKS = [
  { key: 'nav.concepto' as const, href: '#concepto' },
  { key: 'nav.regiones' as const, href: '#regiones' },
  { key: 'nav.producto' as const, href: '#producto' },
  { key: 'nav.filosofia' as const, href: '#filosofia' },
]

export default function Navbar() {
  const { lang, toggle, t } = useLanguage()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-cream/97 backdrop-blur-sm border-b border-stone/10">
      <div className="max-w-7xl mx-auto px-8 lg:px-20">
        <div className="flex items-center justify-between h-14 lg:h-[60px]">

          <a href="/" className="font-serif text-ink text-[13px] tracking-[0.22em] uppercase">
            RuralHaus
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-9 lg:gap-11">
            {NAV_LINKS.map(({ key, href }) => (
              <a key={key} href={href}
                className="text-[9px] tracking-[0.32em] uppercase text-stone hover:text-ink transition-colors duration-300">
                {t(key)}
              </a>
            ))}
            <a href="#contacto"
              className="text-[9px] tracking-[0.32em] uppercase text-stone hover:text-ink transition-colors duration-300">
              {t('nav.contacto')}
            </a>
          </nav>

          <div className="flex items-center gap-6">
            <button onClick={toggle} aria-label="Toggle language"
              className="text-[9px] tracking-[0.2em] text-stone hover:text-ink transition-colors duration-300 flex items-center gap-1">
              <span className={lang === 'es' ? 'text-ink' : ''}>ES</span>
              <span className="text-stone/30 mx-px">·</span>
              <span className={lang === 'en' ? 'text-ink' : ''}>EN</span>
            </button>
            <button onClick={() => setMenuOpen(v => !v)} className="md:hidden text-ink p-1" aria-label="Toggle menu">
              {menuOpen
                ? <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12"/></svg>
                : <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16"/></svg>
              }
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <nav className="md:hidden bg-cream border-t border-stone/10">
          <div className="max-w-7xl mx-auto px-8 py-10 flex flex-col gap-7">
            {[...NAV_LINKS, { key: 'nav.contacto' as const, href: '#contacto' }].map(({ key, href }) => (
              <a key={key} href={href} onClick={() => setMenuOpen(false)}
                className="text-[10px] tracking-[0.35em] uppercase text-stone hover:text-ink transition-colors">
                {t(key)}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
