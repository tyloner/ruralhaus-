'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function ContactSection() {
  const { t } = useLanguage()
  const h2Lines = t('contact.h2').split('\n')

  const regionOptions = [
    'Sierra de Gredos',
    'Sierra Norte de Madrid',
    'Sierra de Guadarrama',
    'Cantabria & Asturias',
  ]

  return (
    <section id="contacto" className="bg-cream py-28 lg:py-44">
      <div className="max-w-7xl mx-auto px-6 lg:px-24">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-start">

          <div>
            <p className="text-[11px] tracking-[0.35em] text-sage uppercase mb-8">{t('contact.label')}</p>
            <h2 className="font-serif font-light text-ink leading-[0.95] mb-8" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
              {h2Lines.map((line, i) => <span key={i} className="block">{line}</span>)}
            </h2>
            <p className="text-stone text-base leading-relaxed mb-10">{t('contact.p')}</p>
            <div className="space-y-3 pt-8 border-t border-mist">
              <div className="flex items-center gap-3">
                <span className="text-[10px] tracking-[0.2em] text-stone uppercase w-20">{t('contact.email_label')}</span>
                <a href="mailto:casita@ruralhaus.co" className="text-ink text-sm hover:text-sage transition-colors">
                  casita@ruralhaus.co
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[10px] tracking-[0.2em] text-stone uppercase w-20">{t('contact.instagram_label')}</span>
                <a href="#" className="text-ink text-sm hover:text-sage transition-colors">@ruralhaus.co</a>
              </div>
            </div>
          </div>

          <form action="mailto:casita@ruralhaus.co" method="POST" encType="text/plain" className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <label className="text-[10px] tracking-[0.25em] text-stone uppercase block mb-3">{t('contact.name')}</label>
                <input
                  type="text" name="nombre"
                  placeholder={t('contact.name_placeholder')}
                  className="w-full border-b border-mist bg-transparent py-2.5 text-ink text-sm placeholder:text-stone/40 focus:outline-none focus:border-ink transition-colors"
                />
              </div>
              <div>
                <label className="text-[10px] tracking-[0.25em] text-stone uppercase block mb-3">{t('contact.email')}</label>
                <input
                  type="email" name="email"
                  placeholder="tu@email.com"
                  className="w-full border-b border-mist bg-transparent py-2.5 text-ink text-sm placeholder:text-stone/40 focus:outline-none focus:border-ink transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="text-[10px] tracking-[0.25em] text-stone uppercase block mb-3">{t('contact.region')}</label>
              <select name="region" className="w-full border-b border-mist bg-transparent py-2.5 text-ink text-sm focus:outline-none focus:border-ink transition-colors appearance-none cursor-pointer">
                <option value="" className="bg-cream">{t('contact.region_placeholder')}</option>
                {regionOptions.map((r) => (
                  <option key={r} className="bg-cream">{r}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-[10px] tracking-[0.25em] text-stone uppercase block mb-3">{t('contact.message')}</label>
              <textarea
                name="mensaje" rows={4}
                placeholder={t('contact.message_placeholder')}
                className="w-full border-b border-mist bg-transparent py-2.5 text-ink text-sm placeholder:text-stone/40 focus:outline-none focus:border-ink transition-colors resize-none"
              />
            </div>

            <div className="pt-2">
              <button type="submit" className="text-[11px] tracking-[0.3em] uppercase border border-ink text-ink px-8 py-4 hover:bg-ink hover:text-cream transition-all duration-300">
                {t('contact.submit')}
              </button>
            </div>
          </form>

        </div>
      </div>
    </section>
  )
}
