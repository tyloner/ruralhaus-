'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

type Property = {
  id: string
  name: string
  location: string
  price: string
  description: string
  imageUrl: string
  type: 'spain' | 'baja'
}

const properties: Property[] = [
  {
    id: '1',
    name: 'Casa La Escondida',
    location: 'Asturias, Spain',
    price: '€350,000',
    description: '170 m² property with 10 hectares of natural reserve in Asturias',
    imageUrl: '/images/rural_house_spain_1.webp',
    type: 'spain'
  },
  {
    id: '2',
    name: 'Casa de la Ria',
    location: 'Cantabria, Spain',
    price: '€120,000',
    description: '320 m² property in small hamlet at the end of an estuary in Cantabria',
    imageUrl: '/images/rural_house_spain_2.webp',
    type: 'spain'
  },
  {
    id: '3',
    name: 'Casa La Maderera',
    location: 'Asturias, Spain',
    price: '€320,000',
    description: '300 m² property in small hamlet in Asturias',
    imageUrl: '/images/rural_house_spain_3.webp',
    type: 'spain'
  },
  {
    id: '4',
    name: 'Casa Estrellas',
    location: 'Asturias, Spain',
    price: '€250,000',
    description: '260 m² property in 1.5 hectare plot in Asturias',
    imageUrl: '/images/interior_scandinavian_1.webp',
    type: 'spain'
  },
  {
    id: '5',
    name: 'Casa Caracól',
    location: 'Asturias, Spain',
    price: '€130,000',
    description: '160 m² property in hamlet 10 minutes from the coast in Asturias',
    imageUrl: '/images/interior_scandinavian_2.webp',
    type: 'spain'
  },
  {
    id: '6',
    name: 'Villa Del Mar',
    location: 'Baja California Sur, Mexico',
    price: '$750,000',
    description: 'Luxury beachfront villa with panoramic ocean views',
    imageUrl: '/images/interior_scandinavian_3.webp',
    type: 'baja'
  },
  {
    id: '7',
    name: 'Casa Desierto',
    location: 'Baja California Sur, Mexico',
    price: '$550,000',
    description: 'Modern desert home with sustainable design and private pool',
    imageUrl: '/images/property-placeholder-7.jpg',
    type: 'baja'
  },
  {
    id: '8',
    name: 'Rancho Pacifico',
    location: 'Baja California Sur, Mexico',
    price: '$850,000',
    description: 'Spacious ranch-style property with mountain and ocean views',
    imageUrl: '/images/property-placeholder-8.jpg',
    type: 'baja'
  }
]

export function PropertyCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [activeFilter, setActiveFilter] = useState<'all' | 'spain' | 'baja'>('all')
  
  const filteredProperties = activeFilter === 'all' 
    ? properties 
    : properties.filter(property => property.type === activeFilter)
  
  const visibleProperties = filteredProperties.slice(currentIndex, currentIndex + 3)
  
  const nextSlide = () => {
    if (currentIndex + 3 < filteredProperties.length) {
      setCurrentIndex(currentIndex + 1)
    } else {
      setCurrentIndex(0)
    }
  }
  
  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    } else {
      setCurrentIndex(Math.max(0, filteredProperties.length - 3))
    }
  }

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center mx-auto mb-6">Featured Properties</h2>
        <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto">
          Exclusive properties in Northern Spain and Baja California Sur with strong investment potential.
        </p>
        
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm">
            <button
              onClick={() => {
                setActiveFilter('all')
                setCurrentIndex(0)
              }}
              className={`px-4 py-2 text-sm font-medium rounded-l-md ${
                activeFilter === 'all' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-white text-foreground hover:bg-muted'
              } border border-border`}
            >
              All Properties
            </button>
            <button
              onClick={() => {
                setActiveFilter('spain')
                setCurrentIndex(0)
              }}
              className={`px-4 py-2 text-sm font-medium ${
                activeFilter === 'spain' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-white text-foreground hover:bg-muted'
              } border-t border-b border-r border-border`}
            >
              Northern Spain
            </button>
            <button
              onClick={() => {
                setActiveFilter('baja')
                setCurrentIndex(0)
              }}
              className={`px-4 py-2 text-sm font-medium rounded-r-md ${
                activeFilter === 'baja' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-white text-foreground hover:bg-muted'
              } border-t border-b border-r border-border`}
            >
              Baja California Sur
            </button>
          </div>
        </div>
        
        <div className="relative">
          <div className="flex justify-between absolute top-1/2 -translate-y-1/2 w-full px-4 z-10">
            <button 
              onClick={prevSlide}
              className="bg-white/80 backdrop-blur-sm text-primary hover:bg-white rounded-full p-2 shadow-md"
              aria-label="Previous properties"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button 
              onClick={nextSlide}
              className="bg-white/80 backdrop-blur-sm text-primary hover:bg-white rounded-full p-2 shadow-md"
              aria-label="Next properties"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleProperties.map((property) => (
              <div key={property.id} className="property-card">
                <div className="h-64 bg-muted relative overflow-hidden">
                  <img 
                    src={property.imageUrl} 
                    alt={property.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <span className="text-white text-lg font-semibold p-4">{property.name}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{property.name}</h3>
                    <span className="text-primary font-bold">{property.price}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{property.location}</p>
                  <p className="mb-4">{property.description}</p>
                  <a href={`/properties/${property.id}`} className="btn-outline inline-block">
                    View Details
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex justify-center mt-8">
          <a href="/properties" className="btn-secondary">
            View All Properties
          </a>
        </div>
      </div>
    </section>
  )
}
