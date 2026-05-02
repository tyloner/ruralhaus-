const houses = [
  {
    name: 'Casa La Escondida',
    region: 'Asturias',
    size: '170 m²',
    land: '10 hectáreas de reserva natural',
    description:
      'A stone manor wrapped by ten hectares of natural reserve. Forest on three sides, eagles overhead, and silence so complete it takes a day to settle into. The furthest from a road, the closest to the wild.',
    image:
      'https://images.unsplash.com/photo-1568454537842-d933259bb258?auto=format&fit=crop&w=1400&q=80',
  },
  {
    name: 'Casa de la Ría',
    region: 'Cantabria',
    size: '320 m²',
    land: 'Aldea al final de un estuario',
    description:
      'At the very end of an estuary where the sea becomes a river. A 320m² house in a hamlet that tourism has not yet found. Restored to original stone and timber — kayaks in the water, herons on the bank.',
    image:
      'https://images.unsplash.com/photo-1590579491624-f98f36d4c763?auto=format&fit=crop&w=1400&q=80',
  },
  {
    name: 'Casa La Maderera',
    region: 'Asturias',
    size: '300 m²',
    land: 'Aldea en las montañas',
    description:
      'A former timber merchant\'s house, now an exceptional rural retreat. Dark wooden beams, stone floors, mountain light that shifts all afternoon. The village has twelve inhabitants. You will be asked to the bar.',
    image:
      'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1400&q=80',
  },
  {
    name: 'Casa Estrellas',
    region: 'Asturias',
    size: '260 m²',
    land: '1.5 hectáreas, ladera sur',
    description:
      'Named for what becomes visible when the last light disappears. South-facing, set on a hillside looking across a protected valley. On clear nights, the Milky Way crosses the garden directly overhead.',
    image:
      'https://images.unsplash.com/photo-1574169208507-84376144848b?auto=format&fit=crop&w=1400&q=80',
  },
  {
    name: 'Casa Caracol',
    region: 'Asturias',
    size: '160 m²',
    land: '10 min de la costa cantábrica',
    description:
      'Compact and beautifully restored, ten minutes from the Cantabrian cliffs. Intimate scale — for two, or three at most. Stone walls, a walled garden for outdoor dining, a path through the meadow to the sea.',
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1400&q=80',
  },
]

export default function HousesSection() {
  return (
    <section id="casas" className="bg-cream py-28 lg:py-44">
      <div className="max-w-7xl mx-auto px-6 lg:px-24">

        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-24 lg:mb-32">
          <h2 className="font-serif font-light text-ink text-[clamp(2.5rem,5vw,5rem)] leading-[0.95]">
            Las<br />Casas
          </h2>
          <p className="text-stone text-[11px] tracking-[0.25em] uppercase">
            Selección actual
          </p>
        </div>

        {/* Houses — alternating layout */}
        <div className="space-y-28 lg:space-y-44">
          {houses.map((house, i) => {
            const isEven = i % 2 === 0
            return (
              <div key={house.name} className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">

                {/* Image */}
                <div className={`overflow-hidden ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
                    <img
                      src={house.image}
                      alt={house.name}
                      className="w-full h-full object-cover hover:scale-[1.04] transition-transform duration-700 ease-out"
                    />
                  </div>
                </div>

                {/* Text */}
                <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
                  {/* Index + rule */}
                  <div className="flex items-center gap-5 mb-8">
                    <span className="font-serif text-mist text-5xl lg:text-6xl font-light leading-none select-none">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="h-px flex-1 bg-mist" />
                  </div>

                  {/* Region tag */}
                  <p className="text-[10px] tracking-[0.35em] text-sage uppercase mb-4">
                    {house.region} · Cantabria & Asturias
                  </p>

                  {/* Name */}
                  <h3 className="font-serif font-light text-ink text-3xl lg:text-4xl mb-5">
                    {house.name}
                  </h3>

                  {/* Description */}
                  <p className="text-stone text-sm lg:text-base leading-relaxed mb-8">
                    {house.description}
                  </p>

                  {/* Specs */}
                  <div className="flex gap-10 mb-8 pb-8 border-b border-mist">
                    <div>
                      <p className="text-[10px] tracking-[0.2em] text-stone uppercase mb-1.5">Superficie</p>
                      <p className="font-serif text-ink text-xl">{house.size}</p>
                    </div>
                    <div>
                      <p className="text-[10px] tracking-[0.2em] text-stone uppercase mb-1.5">Entorno</p>
                      <p className="font-serif text-ink text-xl leading-snug">{house.land}</p>
                    </div>
                  </div>

                  {/* CTA */}
                  <a
                    href="#contacto"
                    className="inline-flex items-center gap-3 text-[11px] tracking-[0.25em] text-ink uppercase hover:text-sage transition-colors"
                  >
                    Consultar disponibilidad
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>

              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
