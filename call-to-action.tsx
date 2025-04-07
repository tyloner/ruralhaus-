'use client'

import Link from 'next/link'

export function CallToAction() {
  return (
    <section className="py-16 bg-primary/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Invest in Premium Real Estate?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Join BW Capital Fund I for premium real estate in Northern Spain and Baja California Sur.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/contact" className="btn-primary">
            Contact Us
          </Link>
          <Link href="/investment" className="btn-outline">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  )
}
