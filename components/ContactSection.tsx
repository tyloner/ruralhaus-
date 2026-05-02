export default function ContactSection() {
  return (
    <section id="contacto" className="bg-cream py-28 lg:py-44">
      <div className="max-w-7xl mx-auto px-6 lg:px-24">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-start">

          {/* Left — text */}
          <div>
            <p className="text-[11px] tracking-[0.35em] text-sage uppercase mb-8">
              Contacto
            </p>
            <h2 className="font-serif font-light text-ink text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.95] mb-8">
              Encuentra<br />tu casa.
            </h2>
            <p className="text-stone text-base leading-relaxed mb-10">
              Cuéntanos qué buscas — región, tamaño, fechas, qué tipo de silencio necesitas —
              y te encontramos la casa adecuada. Cada consulta es personal.
            </p>
            <div className="space-y-3 pt-8 border-t border-mist">
              <div className="flex items-center gap-3">
                <span className="text-[10px] tracking-[0.2em] text-stone uppercase w-20">Email</span>
                <a href="mailto:hello@ruralhaus.co" className="text-ink text-sm hover:text-sage transition-colors">
                  hello@ruralhaus.co
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[10px] tracking-[0.2em] text-stone uppercase w-20">Instagram</span>
                <a href="#" className="text-ink text-sm hover:text-sage transition-colors">
                  @ruralhaus.co
                </a>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div>
            <form
              action="mailto:hello@ruralhaus.co"
              method="POST"
              encType="text/plain"
              className="space-y-8"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <label className="text-[10px] tracking-[0.25em] text-stone uppercase block mb-3">
                    Nombre
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    placeholder="Tu nombre"
                    className="w-full border-b border-mist bg-transparent py-2.5 text-ink text-sm placeholder:text-stone/40 focus:outline-none focus:border-ink transition-colors"
                  />
                </div>
                <div>
                  <label className="text-[10px] tracking-[0.25em] text-stone uppercase block mb-3">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="tu@email.com"
                    className="w-full border-b border-mist bg-transparent py-2.5 text-ink text-sm placeholder:text-stone/40 focus:outline-none focus:border-ink transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] tracking-[0.25em] text-stone uppercase block mb-3">
                  Región de interés
                </label>
                <select
                  name="region"
                  className="w-full border-b border-mist bg-transparent py-2.5 text-ink text-sm focus:outline-none focus:border-ink transition-colors appearance-none cursor-pointer"
                >
                  <option value="" className="bg-cream">Seleccionar región...</option>
                  <option className="bg-cream">Sierra de Gredos</option>
                  <option className="bg-cream">Sierra Norte de Madrid</option>
                  <option className="bg-cream">Sierra de Guadarrama</option>
                  <option className="bg-cream">Cantabria & Asturias</option>
                  <option className="bg-cream">Sin preferencia</option>
                </select>
              </div>

              <div>
                <label className="text-[10px] tracking-[0.25em] text-stone uppercase block mb-3">
                  Mensaje
                </label>
                <textarea
                  name="mensaje"
                  rows={4}
                  placeholder="¿Qué tipo de estancia buscas?"
                  className="w-full border-b border-mist bg-transparent py-2.5 text-ink text-sm placeholder:text-stone/40 focus:outline-none focus:border-ink transition-colors resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="text-[11px] tracking-[0.3em] uppercase border border-ink text-ink px-8 py-4 hover:bg-ink hover:text-cream transition-all duration-300"
                >
                  Enviar consulta
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
