'use client'

import Link from 'next/link'

export function MarketsSection() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center mx-auto mb-12">Our Markets</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-card rounded-lg overflow-hidden shadow-sm border border-border">
            <div className="h-64 bg-muted relative">
              {/* This will be replaced with an actual image */}
              <div className="absolute inset-0 flex items-center justify-center bg-primary/20">
                <span className="text-lg font-semibold">Northern Spain Image</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-3">Northern Spain</h3>
              <p className="text-muted-foreground mb-4">
                Rural Northern Spain offers distressed properties with high appreciation potential. Available at 40-60% below urban prices, these properties deliver strong returns after renovation.
              </p>
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-sm font-medium text-primary">Annual Appreciation</span>
                  <p className="text-lg font-bold">8-10%</p>
                </div>
                <Link href="/markets#northern-spain" className="btn-outline">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          
          <div className="bg-card rounded-lg overflow-hidden shadow-sm border border-border">
            <div className="h-64 bg-muted relative">
              {/* This will be replaced with an actual image */}
              <div className="absolute inset-0 flex items-center justify-center bg-secondary/20">
                <span className="text-lg font-semibold">Baja California Sur Image</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-3">Baja California Sur</h3>
              <p className="text-muted-foreground mb-4">
                Baja California Sur is a luxury second home hotspot with strong value growth. Scenic beauty and ideal climate drive 12-15% annual appreciation.
              </p>
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-sm font-medium text-primary">Annual Appreciation</span>
                  <p className="text-lg font-bold">12-15%</p>
                </div>
                <Link href="/markets#baja-california" className="btn-outline">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
