export default function ConceptSection() {
  return (
    <section id="concepto" className="bg-cream py-28 lg:py-44">
      <div className="max-w-7xl mx-auto px-6 lg:px-24">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-start">

          {/* Left — large heading */}
          <div>
            <p className="text-[11px] tracking-[0.35em] text-sage uppercase mb-8">
              El Concepto
            </p>
            <h2 className="font-serif font-light text-ink text-[clamp(2.5rem,5vw,5rem)] leading-[0.95]">
              Donde<br />
              España<br />
              se detiene.
            </h2>
          </div>

          {/* Right — editorial text + stats */}
          <div className="lg:pt-24">
            <p className="text-stone text-lg lg:text-xl leading-relaxed mb-6">
              A dos horas de Madrid, el paisaje cambia. Las carreteras se estrechan,
              el aire se vuelve más frío, y el tiempo parece ralentizarse.
            </p>
            <p className="text-stone text-base leading-relaxed mb-12">
              RuralHaus selecciona y restaura casas rurales en las sierras y costas más
              singulares de España — Sierra de Gredos, Sierra Norte de Madrid, Sierra de
              Guadarrama, Cantabria y Asturias. Cada casa es única, construida con materiales
              locales, de bajo impacto ambiental, y profundamente integrada en su entorno.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-mist">
              <div>
                <p className="font-serif text-ink text-4xl lg:text-5xl font-light mb-1">2h</p>
                <p className="text-[10px] text-stone tracking-[0.2em] uppercase">Desde Madrid</p>
              </div>
              <div>
                <p className="font-serif text-ink text-4xl lg:text-5xl font-light mb-1">4</p>
                <p className="text-[10px] text-stone tracking-[0.2em] uppercase">Regiones</p>
              </div>
              <div>
                <p className="font-serif text-ink text-4xl lg:text-5xl font-light mb-1">12+</p>
                <p className="text-[10px] text-stone tracking-[0.2em] uppercase">Casas</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
