const values = [
  {
    number: '01',
    title: 'Restaurado',
    subtitle: 'Not built. Revived.',
    body: 'Each house existed before us. We restore what was there — original stone, local timber, traditional techniques — and add only what truly belongs. The past is the brief.',
  },
  {
    number: '02',
    title: 'Bajo Impacto',
    subtitle: 'Light on the land.',
    body: 'Minimal footprint. Solar where possible, rainwater collection, locally sourced materials. The land should look the same a century from now. We are custodians, not developers.',
  },
  {
    number: '03',
    title: 'Íntimo',
    subtitle: 'One house at a time.',
    body: 'No resort logic. No pools shared with strangers. Each property is a private world — chosen for its particularity, its silence, its view of something that cannot be photographed.',
  },
]

export default function PhilosophySection() {
  return (
    <section id="filosofia" className="bg-ink py-28 lg:py-44">
      <div className="max-w-7xl mx-auto px-6 lg:px-24">

        {/* Header */}
        <div className="mb-20 lg:mb-28">
          <p className="text-[11px] tracking-[0.35em] text-sage uppercase mb-6">
            Nuestra filosofía
          </p>
          <h2 className="font-serif font-light text-cream text-[clamp(2.5rem,5vw,5rem)] leading-[0.95]">
            Cómo<br />construimos.
          </h2>
        </div>

        {/* Three pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-6">
          {values.map((v) => (
            <div key={v.number} className="border-t border-white/10 pt-10">
              <span className="font-serif text-white/8 text-8xl font-light leading-none block mb-10 select-none" style={{ color: 'rgba(255,255,255,0.06)' }}>
                {v.number}
              </span>
              <h3 className="font-serif font-light text-cream text-3xl mb-2">
                {v.title}
              </h3>
              <p className="text-sage text-xs tracking-[0.15em] italic mb-6">
                {v.subtitle}
              </p>
              <p className="text-white/45 text-sm leading-relaxed">
                {v.body}
              </p>
            </div>
          ))}
        </div>

        {/* Full-width image break */}
        <div className="mt-28 lg:mt-36 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1920&q=80"
            alt="Paisaje de la sierra española"
            className="w-full object-cover"
            style={{ maxHeight: '60vh' }}
          />
        </div>

      </div>
    </section>
  )
}
