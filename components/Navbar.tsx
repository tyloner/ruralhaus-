'use client'

import { useState, useEffect } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

const NAV_KEYS = [
  { key: 'nav.concepto' as const, href: '#concepto' },
  { key: 'nav.regiones' as const, href: '#regiones' },
  { key: 'nav.producto' as const, href: '#producto' },
  { key: 'nav.casas' as const, href: '#casas' },
  { key: 'nav.filosofia' as const, href: '#filosofia' },
]

export default function Navbar() {
  const { lang, toggle, t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const light = !scrolled && !menuOpen
  const textColor = light ? 'text-white' : 'text-ink'
  const borderColor = light ? 'border-white' : 'border-ink'

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled || menuOpen
          ? 'bg-cream/95 backdrop-blur-sm border-b border-mist'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <a href="/" className={`font-serif text-base tracking-[0.2em] uppercase transition-colors ${textColor}`}>
            RuralHaus
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {NAV_KEYS.map(({ key, href }) => (
              <a
                key={key}
                href={href}
                className={`text-[11px] tracking-[0.25em] hover:opacity-50 transition-opacity ${textColor}`}
              >
                {t(key)}
              </a>
            ))}
            <a
              href="#contacto"
              className={`text-[11px] tracking-[0.25em] border px-5 py-2.5 hover:bg-ink hover:text-cream hover:border-ink transition-all duration-300 ${textColor} ${borderColor}`}
            >
              {t('nav.contacto')}
            </a>

            {/* Language toggle */}
            <button
              onClick={toggle}
              aria-label="Toggle language"
              className={`flex items-center gap-1.5 text-[11px] tracking-[0.2em] transition-colors ${textColor}`}
            >
              <span className={lang === 'es' ? 'opacity-100' : 'opacity-30'}>ES</span>
              <span className="opacity-20">·</span>
              <span className={lang === 'en' ? 'opacity-100' : 'opacity-30'}>EN</span>
            </button>
          </nav>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggle}
              className={`text-[11px] tracking-[0.2em] transition-colors ${textColor}`}
            >
              <span className={lang === 'es' ? 'opacity-100' : 'opacity-40'}>ES</span>
              <span className="opacity-20 mx-1">·</span>
              <span className={lang === 'en' ? 'opacity-100' : 'opacity-40'}>EN</span>
            </button>
            <button
              className={`p-1 transition-colors ${textColor}`}
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <nav className="md:hidden bg-cream border-t border-mist">
          <div className="px-6 py-8 flex flex-col gap-6">
            {[...NAV_KEYS, { key: 'nav.contacto' as const, href: '#contacto' }].map(({ key, href }) => (
              <a
                key={key}
                href={href}
                className="text-[11px] tracking-[0.25em] text-ink hover:text-sage transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {t(key)}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
