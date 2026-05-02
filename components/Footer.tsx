const regions = [
  'Sierra de Gredos',
  'Sierra Norte de Madrid',
  'Sierra de Guadarrama',
  'Cantabria & Asturias',
]

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-24 py-16 lg:py-20">

        {/* Main footer grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 mb-16">

          {/* Brand */}
          <div>
            <p className="font-serif text-cream text-xl tracking-[0.2em] uppercase mb-3">
              RuralHaus
            </p>
            <p className="text-stone text-xs leading-relaxed max-w-xs">
              Casas rurales revitalizadas en las sierras y costas de España.
              Íntimas, de bajo impacto, en plena naturaleza.
            </p>
          </div>

          {/* Regions */}
          <div>
            <p className="text-white/20 text-[10px] tracking-[0.25em] uppercase mb-5">
              Regiones
            </p>
            <ul className="space-y-2.5">
              {regions.map((r) => (
                <li key={r}>
                  <a
                    href="#regiones"
                    className="text-stone text-xs hover:text-cream transition-colors"
                  >
                    {r}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white/20 text-[10px] tracking-[0.25em] uppercase mb-5">
              Contacto
            </p>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="mailto:hello@ruralhaus.co"
                  className="text-stone text-xs hover:text-cream transition-colors"
                >
                  hello@ruralhaus.co
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-stone text-xs hover:text-cream transition-colors"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-white/20 text-xs">
            © {new Date().getFullYear()} RuralHaus. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/20 text-xs hover:text-white/40 transition-colors">
              Privacidad
            </a>
            <a href="#" className="text-white/20 text-xs hover:text-white/40 transition-colors">
              Legal
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}
