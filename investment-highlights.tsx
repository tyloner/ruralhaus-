'use client'

import Link from 'next/link'

export function InvestmentHighlights() {
  return (
    <section className="py-16 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center mx-auto mb-12">Investment Highlights</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
            <h3 className="text-xl font-semibold mb-4">Financial Projections</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-border pb-2">
                <span className="font-medium">Target IRR</span>
                <span className="text-primary font-bold">Attractive Returns</span>
              </div>
              <div className="flex justify-between items-center border-b border-border pb-2">
                <span className="font-medium">Cash-on-Cash Return</span>
                <span className="text-primary font-bold">7% Annually</span>
              </div>
              <div className="flex justify-between items-center border-b border-border pb-2">
                <span className="font-medium">Investment Horizon</span>
                <span className="text-primary font-bold">5 Years</span>
              </div>
              <div className="flex justify-between items-center border-b border-border pb-2">
                <span className="font-medium">Northern Spain Property Cost</span>
                <span className="text-primary font-bold">Up to $350,000</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium">Baja California Land Cost</span>
                <span className="text-primary font-bold">$500,000-$1M</span>
              </div>
            </div>
          </div>
          
          <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
            <h3 className="text-xl font-semibold mb-4">Capital Allocation</h3>
            <div className="relative h-64">
              {/* This will be replaced with an actual chart */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="w-40 h-40 rounded-full border-8 border-primary relative mb-4">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-lg font-bold">$20M</span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 w-full">
                  <div className="text-center">
                    <div className="w-4 h-4 bg-primary rounded-full mx-auto mb-1"></div>
                    <span className="text-xs">Investment Capital (75%)</span>
                  </div>
                  <div className="text-center">
                    <div className="w-4 h-4 bg-secondary rounded-full mx-auto mb-1"></div>
                    <span className="text-xs">Operational (15%)</span>
                  </div>
                  <div className="text-center">
                    <div className="w-4 h-4 bg-accent rounded-full mx-auto mb-1"></div>
                    <span className="text-xs">Reserve (10%)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Link href="/investment" className="btn-secondary">
            View Investment Strategy
          </Link>
        </div>
      </div>
    </section>
  )
}