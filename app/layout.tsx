import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-cormorant',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'RuralHaus — Casas rurales en las sierras de España',
  description:
    'Casas rurales revitalizadas en Sierra de Gredos, Sierra Norte, Sierra de Guadarrama, Cantabria y Asturias. A dos horas de Madrid.',
  openGraph: {
    title: 'RuralHaus — Casas rurales en las sierras de España',
    description:
      'Casas íntimas, de bajo impacto, profundamente integradas en la naturaleza. A dos horas de Madrid.',
    siteName: 'RuralHaus',
    locale: 'es_ES',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${cormorant.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  )
}
