'use client'

import { useLanguage } from '@/contexts/LanguageContext'

const REGIONS = [
  'Sierra de Gredos',
  'Sierra Norte de Madrid',
  'Sierra de Guadarrama',
  'Cantabria & Asturias',
]

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-ink border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-24 py-16 lg:py-20">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 mb-16">
          <div>
            <p className="font-serif text-cream text-xl tracking-[0.2em] uppercase mb-3">RuralHaus</p>
            <p className="text-stone text-xs leading-relaxed max-w-xs">{t('footer.tagline')}</p>
          </div>

          <div>
            <p className="text-[10px] tracking-[0.25em] uppercase mb-5" style={{ color: 'rgba(255,255,255,0.2)' }}>
              {t('footer.regions_title')}
            </p>
            <ul className="space-y-2.5">
              {REGIONS.map((r) => (
                <li key={r}>
                  <a href="#regiones" className="text-stone text-xs hover:text-cream transition-colors">{r}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[10px] tracking-[0.25em] uppercase mb-5" style={{ color: 'rgba(255,255,255,0.2)' }}>
              {t('footer.contact_title')}
            </p>
            <ul className="space-y-2.5">
              <li><a href="mailto:casita@ruralhaus.co" className="text-stone text-xs hover:text-cream transition-colors">casita@ruralhaus.co</a></li>
              <li><a href="#" className="text-stone text-xs hover:text-cream transition-colors">Instagram</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.2)' }}>
            © {new Date().getFullYear()} RuralHaus. {t('footer.rights')}
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs transition-colors hover:opacity-60" style={{ color: 'rgba(255,255,255,0.2)' }}>{t('footer.privacy')}</a>
            <a href="#" className="text-xs transition-colors hover:opacity-60" style={{ color: 'rgba(255,255,255,0.2)' }}>{t('footer.legal')}</a>
          </div>
        </div>

      </div>
    </footer>
  )
}
