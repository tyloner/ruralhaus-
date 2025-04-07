'use client'

import Image from 'next/image'
import Link from 'next/link'

export function HeroSection() {
  return (
    <div className="relative h-[600px] flex items-center justify-center overflow-hidden hero-section">
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/high_res_hero_1.webp" 
          alt="Rural landscape" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          BW Capital Fund I
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8">
          Premium properties in Rural Northern Spain and Baja California Sur
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/properties" className="btn-primary text-center">
            View Properties
          </Link>
          <Link href="/investment" className="btn-outline text-white border-white hover:bg-white hover:text-primary text-center">
            Investment Opportunities
          </Link>
        </div>
      </div>
    </div>
  )
}
