'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import { translations, Lang, TranslationKey } from '@/lib/translations'

interface LanguageContextValue {
  lang: Lang
  toggle: () => void
  t: (key: TranslationKey) => string
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('es')
  const toggle = () => setLang((l) => (l === 'es' ? 'en' : 'es'))
  const t = (key: TranslationKey): string => translations[lang][key] as string
  return (
    <LanguageContext.Provider value={{ lang, toggle, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider')
  return ctx
}
