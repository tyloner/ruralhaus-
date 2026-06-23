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
    <section id="contacto" className="bg-cream border-t border-stone/10 py-36 lg:py-56">
      <div className="max-w-7xl mx-auto px-8 lg:px-20">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-0 items-start">

          {/* Left */}
          <div className="lg:col-span-5">
            <p className="text-[9px] tracking-[0.38em] uppercase text-stone/50 mb-10">
              {t('contact.label')}
            </p>
            <h2
              className="font-serif font-light text-ink leading-[0.9] mb-8"
              style={{ fontSize: 'clamp(3rem, 6vw, 6rem)' }}
            >
              {h2Lines.map((line, i) => <span key={i} className="block">{line}</span>)}
            </h2>
            <p className="text-stone text-base leading-relaxed mb-12 max-w-xs">
              {t('contact.p')}
            </p>
            <div className="space-y-4 pt-8 border-t border-stone/12">
              <div className="flex items-center gap-4">
                <span className="text-[9px] tracking-[0.25em] uppercase text-stone/40 w-16">
                  {t('contact.email_label')}
                </span>
                <a href="mailto:casita@ruralhaus.co"
                  className="text-ink text-sm hover:text-stone/60 transition-colors">
                  casita@ruralhaus.co
                </a>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-[9px] tracking-[0.25em] uppercase text-stone/40 w-16">
                  {t('contact.instagram_label')}
                </span>
                <a href="https://instagram.com/rural.haus"
                  className="text-ink text-sm hover:text-stone/60 transition-colors">
                  @rural.haus
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <form action="mailto:casita@ruralhaus.co" method="POST" encType="text/plain"
            className="lg:col-span-6 lg:col-start-7 space-y-10">

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <div>
                <label className="text-[9px] tracking-[0.3em] uppercase text-stone/50 block mb-3">
                  {t('contact.name')}
                </label>
                <input type="text" name="nombre" placeholder={t('contact.name_placeholder')}
                  className="w-full border-b border-stone/20 bg-transparent py-2.5 text-ink text-sm placeholder:text-stone/30 focus:outline-none focus:border-ink transition-colors" />
              </div>
              <div>
                <label className="text-[9px] tracking-[0.3em] uppercase text-stone/50 block mb-3">
                  {t('contact.email')}
                </label>
                <input type="email" name="email" placeholder="tu@email.com"
                  className="w-full border-b border-stone/20 bg-transparent py-2.5 text-ink text-sm placeholder:text-stone/30 focus:outline-none focus:border-ink transition-colors" />
              </div>
            </div>

            <div>
              <label className="text-[9px] tracking-[0.3em] uppercase text-stone/50 block mb-3">
                {t('contact.region')}
              </label>
              <select name="region"
                className="w-full border-b border-stone/20 bg-transparent py-2.5 text-ink text-sm focus:outline-none focus:border-ink transition-colors appearance-none cursor-pointer">
                <option value="" className="bg-cream">{t('contact.region_placeholder')}</option>
                {regionOptions.map((r) => (
                  <option key={r} className="bg-cream">{r}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-[9px] tracking-[0.3em] uppercase text-stone/50 block mb-3">
                {t('contact.message')}
              </label>
              <textarea name="mensaje" rows={4} placeholder={t('contact.message_placeholder')}
                className="w-full border-b border-stone/20 bg-transparent py-2.5 text-ink text-sm placeholder:text-stone/30 focus:outline-none focus:border-ink transition-colors resize-none" />
            </div>

            <button type="submit"
              className="text-[9px] tracking-[0.35em] uppercase border border-ink text-ink px-8 py-4 hover:bg-ink hover:text-cream transition-all duration-300">
              {t('contact.submit')}
            </button>
          </form>

        </div>
      </div>
    </section>
  )
}
