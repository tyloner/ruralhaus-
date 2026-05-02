'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const navItems = [
  { label: 'CONCEPTO', href: '#concepto' },
  { label: 'REGIONES', href: '#regiones' },
  { label: 'CASAS', href: '#casas' },
  { label: 'FILOSOFÍA', href: '#filosofia' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const textColor = scrolled || menuOpen ? 'text-ink' : 'text-white'
  const borderColor = scrolled || menuOpen ? 'border-ink' : 'border-white'

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
          <Link
            href="/"
            className={`font-serif text-base tracking-[0.2em] uppercase transition-colors ${textColor}`}
          >
            RuralHaus
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navItems.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className={`text-[11px] tracking-[0.25em] hover:opacity-50 transition-opacity ${textColor}`}
              >
                {label}
              </a>
            ))}
            <a
              href="#contacto"
              className={`text-[11px] tracking-[0.25em] border px-5 py-2.5 hover:bg-ink hover:text-cream hover:border-ink transition-all duration-300 ${textColor} ${borderColor}`}
            >
              CONTACTO
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            className={`md:hidden p-1 transition-colors ${textColor}`}
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

      {/* Mobile drawer */}
      {menuOpen && (
        <nav className="md:hidden bg-cream border-t border-mist">
          <div className="px-6 py-8 flex flex-col gap-6">
            {[...navItems, { label: 'CONTACTO', href: '#contacto' }].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-[11px] tracking-[0.25em] text-ink hover:text-sage transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
