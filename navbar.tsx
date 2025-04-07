'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-background/95 backdrop-blur-sm sticky top-0 z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <img src="/images/ruralhaus.png" alt="RuralHaus Logo" className="h-8 w-auto mr-2" />
              <span className="text-xl font-bold text-primary">RuralHaus</span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/markets" className="text-foreground hover:text-primary transition-colors">
              Markets
            </Link>
            <Link href="/properties" className="text-foreground hover:text-primary transition-colors">
              Properties
            </Link>
            <Link href="/investment" className="text-foreground hover:text-primary transition-colors">
              Investment
            </Link>
            <Link href="/sustainability" className="text-foreground hover:text-primary transition-colors">
              Sustainability
            </Link>
            <Link href="/team" className="text-foreground hover:text-primary transition-colors">
              Team
            </Link>
            <Link href="/contact" className="btn-primary">
              Contact
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-b border-border">
            <Link 
              href="/" 
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/markets" 
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Markets
            </Link>
            <Link 
              href="/properties" 
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Properties
            </Link>
            <Link 
              href="/investment" 
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Investment
            </Link>
            <Link 
              href="/sustainability" 
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Sustainability
            </Link>
            <Link 
              href="/team" 
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Team
            </Link>
            <Link 
              href="/contact" 
              className="block px-3 py-2 rounded-md text-base font-medium btn-primary mt-3"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
