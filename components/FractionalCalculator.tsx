'use client'

import { useState, useMemo } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

const FRACTIONS = [
  { label: '1/10', value: 0.1 },
  { label: '1/8',  value: 0.125 },
  { label: '1/4',  value: 0.25 },
  { label: '1/2',  value: 0.5 },
  { label: '100%', value: 1 },
]

function calcIRR(investment: number, annualCashflow: number, terminalValue: number, years: number): number {
  let rate = 0.08
  for (let iter = 0; iter < 200; iter++) {
    let npv = -investment, dnpv = 0
    for (let t = 1; t <= years; t++) {
      const cf = t === years ? annualCashflow + terminalValue : annualCashflow
      const disc = Math.pow(1 + rate, t)
      npv += cf / disc
      dnpv -= (t * cf) / (disc * (1 + rate))
    }
    if (Math.abs(dnpv) < 1e-10) break
    const next = rate - npv / dnpv
    if (Math.abs(next - rate) < 0.00001) { rate = next; break }
    rate = next
  }
  return Math.max(0, rate)
}

function fmt(n: number, currency = true) {
  if (currency) return '€' + Math.round(n).toLocaleString('es-ES')
  return (n * 100).toFixed(1) + '%'
}

export default function FractionalCalculator() {
  const { t } = useLanguage()
  const [priceInput, setPriceInput]     = useState('250000')
  const [fractionIdx, setFractionIdx]   = useState(2)
  const [appreciation, setAppreciation] = useState(7)
  const [rentalYield, setRentalYield]   = useState(5)
  const [horizon, setHorizon]           = useState(5)

  const h2Lines = t('calc.h2').split('\n')

  const results = useMemo(() => {
    const price        = Math.max(0, parseInt(priceInput.replace(/\D/g, ''), 10) || 0)
    const fraction     = FRACTIONS[fractionIdx].value
    const investment   = price * fraction
    const annualIncome = investment * (rentalYield / 100)
    const terminalValue = investment * Math.pow(1 + appreciation / 100, horizon)
    const capitalGain  = terminalValue - investment
    const totalReturn  = annualIncome * horizon + capitalGain
    const irr          = investment > 0 ? calcIRR(investment, annualIncome, terminalValue, horizon) : 0
    return { investment, annualIncome, capitalGain, totalReturn, irr }
  }, [priceInput, fractionIdx, appreciation, rentalYield, horizon])

  const sliderClass = 'w-full h-px bg-stone/20 rounded appearance-none cursor-pointer accent-ink [&::-webkit-slider-thumb]:w-3.5 [&::-webkit-slider-thumb]:h-3.5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-ink [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:cursor-pointer'

  return (
    <section id="calculadora" className="bg-mist border-t border-stone/10 py-36 lg:py-56">
      <div className="max-w-7xl mx-auto px-8 lg:px-20">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-20 lg:mb-28">
          <div>
            <p className="text-[9px] tracking-[0.38em] uppercase text-stone/50 mb-10">{t('calc.label')}</p>
            <h2
              className="font-serif font-light text-ink leading-[0.9]"
              style={{ fontSize: 'clamp(3rem, 6vw, 6rem)' }}
            >
              {h2Lines.map((line, i) => <span key={i} className="block">{line}</span>)}
            </h2>
          </div>
          <p className="text-stone text-sm leading-relaxed max-w-xs lg:text-right">{t('calc.sub')}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Inputs */}
          <div className="space-y-12">

            {/* Price */}
            <div>
              <p className="text-[9px] tracking-[0.3em] uppercase text-stone/50 mb-4">{t('calc.property')}</p>
              <div className="relative">
                <span className="absolute left-0 top-1/2 -translate-y-1/2 font-serif text-ink text-2xl pointer-events-none">€</span>
                <input
                  type="text" inputMode="numeric"
                  value={priceInput}
                  onChange={(e) => setPriceInput(e.target.value.replace(/\D/g, ''))}
                  placeholder="250000"
                  className="w-full pl-7 border-b border-stone/20 bg-transparent py-2.5 font-serif text-ink text-2xl placeholder:text-stone/30 focus:outline-none focus:border-ink transition-colors"
                />
              </div>
            </div>

            {/* Fraction */}
            <div>
              <p className="text-[9px] tracking-[0.3em] uppercase text-stone/50 mb-4">{t('calc.fraction')}</p>
              <div className="flex gap-2 flex-wrap">
                {FRACTIONS.map((f, i) => (
                  <button key={f.label} onClick={() => setFractionIdx(i)}
                    className={`px-4 py-2 text-xs border transition-all duration-200 ${
                      fractionIdx === i
                        ? 'border-ink bg-ink text-cream'
                        : 'border-stone/25 text-stone hover:border-stone/50 hover:text-ink'
                    }`}>
                    {f.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Sliders */}
            <div className="space-y-8">
              {[
                { label: t('calc.appreciation'), value: appreciation, min: 2, max: 15, set: setAppreciation, suffix: '%' },
                { label: t('calc.yield'),        value: rentalYield,  min: 2, max: 12, set: setRentalYield,   suffix: '%' },
                { label: t('calc.horizon'),      value: horizon,      min: 3, max: 10, set: setHorizon,       suffix: '' },
              ].map(({ label, value, min, max, set, suffix }) => (
                <div key={label}>
                  <div className="flex justify-between items-center mb-3">
                    <p className="text-[9px] tracking-[0.3em] uppercase text-stone/50">{label}</p>
                    <span className="font-serif text-ink text-xl">{value}{suffix}</span>
                  </div>
                  <input type="range" min={min} max={max} value={value}
                    onChange={(e) => set(+e.target.value)} className={sliderClass} />
                  <div className="flex justify-between mt-1">
                    <span className="text-[9px] text-stone/35">{min}{suffix}</span>
                    <span className="text-[9px] text-stone/35">{max}{suffix}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Results */}
          <div>
            <div className="space-y-0">
              {[
                { label: t('calc.your_investment'), value: fmt(results.investment),   large: true },
                { label: t('calc.annual_income'),   value: fmt(results.annualIncome), large: false },
                { label: t('calc.capital_gain'),    value: fmt(results.capitalGain),  large: false },
                { label: t('calc.total_return'),    value: fmt(results.totalReturn),  large: false },
                { label: t('calc.projected_irr'),   value: fmt(results.irr, false),   large: false },
              ].map((row, idx, arr) => (
                <div key={row.label}
                  className={`py-6 flex justify-between items-end ${idx < arr.length - 1 ? 'border-b border-stone/12' : ''}`}>
                  <p className="text-[9px] tracking-[0.25em] uppercase text-stone/50">{row.label}</p>
                  <p className="font-serif font-light text-ink"
                    style={{ fontSize: row.large ? '2.5rem' : '1.75rem', lineHeight: 1 }}>
                    {row.value}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-[10px] text-stone/35 leading-relaxed mt-8">{t('calc.disclaimer')}</p>
          </div>

        </div>
      </div>
    </section>
  )
}
