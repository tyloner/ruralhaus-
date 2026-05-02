const regions = [
  {
    id: 'gredos',
    name: 'Sierra de Gredos',
    tagline: 'Granite peaks · Ancient villages · Wild silence',
    distance: '2 hrs from Madrid',
    description:
      'The most dramatic of the central sierras. Ibex roam granite high country, medieval hamlets cling to hillsides, and the air carries the scent of cistus and thyme. Gredos is the furthest and the wildest.',
    image:
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: 'sierra-norte',
    name: 'Sierra Norte',
    tagline: 'Oak dehesas · River valleys · Pastoral calm',
    distance: '1.5 hrs from Madrid',
    description:
      'North of Madrid, where the city dissolves into rolling dehesas and river villages. Slower, quieter, and closer than you think. Landscapes shaped by centuries of pastoral life.',
    image:
      'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: 'guadarrama',
    name: 'Sierra de Guadarrama',
    tagline: 'Pine forests · Historic routes · Mountain refuges',
    distance: '1 hr from Madrid',
    description:
      'The closest sierra to the capital. Pine-covered slopes, icy streams, and centuries of mountain culture. Declared a National Park in 2013 — one of the few large wild areas this near a European capital.',
    image:
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: 'cantabria-asturias',
    name: 'Cantabria & Asturias',
    tagline: 'Atlantic coast · Lush green mountains · Estuaries',
    distance: 'Green Spain',
    description:
      'Where the mountains meet the Cantabrian Sea. Pre-Romanesque churches, fishing villages, estuaries where salt water meets fresh, and a landscape of extraordinary depth and green. A different Spain entirely.',
    image:
      'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1400&q=80',
  },
]

export default function RegionsSection() {
  return (
    <section id="regiones" className="bg-ink">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-24 pt-24 pb-12 lg:pt-32 lg:pb-16">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <h2 className="font-serif font-light text-cream text-[clamp(2.5rem,5vw,5rem)] leading-[0.95]">
            Las<br />Regiones
          </h2>
          <p className="text-stone text-[11px] tracking-[0.25em] uppercase">
            Cuatro territorios distintos
          </p>
        </div>
      </div>

      {/* 2×2 image grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {regions.map((region, i) => (
          <div key={region.id} className="relative group overflow-hidden" style={{ aspectRatio: '4/3' }}>
            <img
              src={region.image}
              alt={region.name}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />

            {/* Base overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-transparent" />
            {/* Hover overlay — lightens to reveal description */}
            <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/30 transition-colors duration-500" />

            {/* Large index number */}
            <div className="absolute top-6 right-6 lg:top-8 lg:right-8">
              <span className="font-serif text-white/10 text-7xl lg:text-8xl font-light leading-none">
                {String(i + 1).padStart(2, '0')}
              </span>
            </div>

            {/* Text content */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-10">
              <p className="text-white/50 text-[10px] tracking-[0.35em] uppercase mb-2 lg:mb-3">
                {region.distance}
              </p>
              <h3 className="font-serif font-light text-white text-2xl lg:text-3xl mb-2">
                {region.name}
              </h3>
              <p className="text-white/50 text-xs italic mb-0 group-hover:mb-4 transition-all duration-500">
                {region.tagline}
              </p>
              {/* Description slides in on hover */}
              <p className="text-white/0 group-hover:text-white/80 text-sm leading-relaxed max-w-sm transition-all duration-500 overflow-hidden max-h-0 group-hover:max-h-24">
                {region.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
