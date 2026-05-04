'use client'

import { useState, useMemo } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

const FRACTIONS = [
  { label: '1/10', value: 0.1 },
  { label: '1/8', value: 0.125 },
  { label: '1/4', value: 0.25 },
  { label: '1/2', value: 0.5 },
  { label: '100%', value: 1 },
]

function calcIRR(investment: number, annualCashflow: number, terminalValue: number, years: number): number {
  let rate = 0.08
  for (let iter = 0; iter < 200; iter++) {
    let npv = -investment
    let dnpv = 0
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

function fmt(n: number, currency = true): string {
  if (currency) return '€' + Math.round(n).toLocaleString('es-ES')
  return (n * 100).toFixed(1) + '%'
}

export default function FractionalCalculator() {
  const { t } = useLanguage()

  const [priceInput, setPriceInput] = useState('250000')
  const [fractionIdx, setFractionIdx] = useState(2) // 1/4 default
  const [appreciation, setAppreciation] = useState(7)
  const [rentalYield, setRentalYield] = useState(5)
  const [horizon, setHorizon] = useState(5)

  const h2Lines = t('calc.h2').split('\n')

  const results = useMemo(() => {
    const price = Math.max(0, parseInt(priceInput.replace(/\D/g, ''), 10) || 0)
    const fraction = FRACTIONS[fractionIdx].value
    const appRate = appreciation / 100
    const yieldRate = rentalYield / 100

    const investment = price * fraction
    const annualIncome = investment * yieldRate
    const terminalValue = investment * Math.pow(1 + appRate, horizon)
    const capitalGain = terminalValue - investment
    const totalReturn = annualIncome * horizon + capitalGain
    const irr = investment > 0 ? calcIRR(investment, annualIncome, terminalValue, horizon) : 0

    return { investment, annualIncome, capitalGain, totalReturn, irr }
  }, [priceInput, fractionIdx, appreciation, rentalYield, horizon])

  const sliderClass =
    'w-full h-px bg-white/10 rounded appearance-none cursor-pointer accent-sage [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-cream [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:cursor-pointer'

  return (
    <section id="calculadora" className="bg-ink py-28 lg:py-44 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-24">

        <div className="mb-16 lg:mb-20">
          <p className="text-[11px] tracking-[0.35em] text-sage uppercase mb-6">{t('calc.label')}</p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="font-serif font-light text-cream leading-[0.95]" style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}>
              {h2Lines.map((line, i) => <span key={i} className="block">{line}</span>)}
            </h2>
            <p className="text-stone text-sm leading-relaxed max-w-sm lg:text-right">{t('calc.sub')}</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">

          {/* ── Inputs ── */}
          <div className="space-y-10">

            {/* Property price input */}
            <div>
              <p className="text-[10px] tracking-[0.25em] text-stone uppercase mb-4">{t('calc.property')}</p>
              <div className="relative">
                <span className="absolute left-0 top-1/2 -translate-y-1/2 font-serif text-cream text-2xl pointer-events-none">€</span>
                <input
                  type="text"
                  inputMode="numeric"
                  value={priceInput}
                  onChange={(e) => {
                    const raw = e.target.value.replace(/\D/g, '')
                    setPriceInput(raw)
                  }}
                  placeholder="250000"
                  className="w-full pl-7 border-b border-white/20 bg-transparent py-2.5 font-serif text-cream text-2xl placeholder:text-stone/30 focus:outline-none focus:border-white/50 transition-colors"
                />
              </div>
              <p className="text-[10px] text-stone/40 mt-2">{t('calc.price_hint')}</p>
            </div>

            {/* Fraction */}
            <div>
              <p className="text-[10px] tracking-[0.25em] text-stone uppercase mb-4">{t('calc.fraction')}</p>
              <div className="flex gap-2 flex-wrap">
                {FRACTIONS.map((f, i) => (
                  <button
                    key={f.label}
                    onClick={() => setFractionIdx(i)}
                    className={`px-4 py-2 text-xs border transition-all duration-200 ${
                      fractionIdx === i
                        ? 'border-cream/40 bg-white/5 text-cream'
                        : 'border-white/10 text-stone hover:border-white/20 hover:text-cream/70'
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Sliders */}
            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <p className="text-[10px] tracking-[0.25em] text-stone uppercase">{t('calc.appreciation')}</p>
                  <span className="font-serif text-cream text-xl">{appreciation}%</span>
                </div>
                <input type="range" min={2} max={15} value={appreciation}
                  onChange={(e) => setAppreciation(+e.target.value)}
                  className={sliderClass} />
                <div className="flex justify-between mt-1">
                  <span className="text-[10px] text-stone/40">2%</span>
                  <span className="text-[10px] text-stone/40">15%</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-4">
                  <p className="text-[10px] tracking-[0.25em] text-stone uppercase">{t('calc.yield')}</p>
                  <span className="font-serif text-cream text-xl">{rentalYield}%</span>
                </div>
                <input type="range" min={2} max={12} value={rentalYield}
                  onChange={(e) => setRentalYield(+e.target.value)}
                  className={sliderClass} />
                <div className="flex justify-between mt-1">
                  <span className="text-[10px] text-stone/40">2%</span>
                  <span className="text-[10px] text-stone/40">12%</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-4">
                  <p className="text-[10px] tracking-[0.25em] text-stone uppercase">{t('calc.horizon')}</p>
                  <span className="font-serif text-cream text-xl">{horizon}</span>
                </div>
                <input type="range" min={3} max={10} value={horizon}
                  onChange={(e) => setHorizon(+e.target.value)}
                  className={sliderClass} />
                <div className="flex justify-between mt-1">
                  <span className="text-[10px] text-stone/40">3</span>
                  <span className="text-[10px] text-stone/40">10</span>
                </div>
              </div>
            </div>
          </div>

          {/* ── Results ── */}
          <div className="flex flex-col justify-between">
            <div className="border border-white/10 p-8 lg:p-10 space-y-0">
              {[
                { label: t('calc.your_investment'), value: fmt(results.investment), primary: true },
                { label: t('calc.annual_income'), value: fmt(results.annualIncome), primary: false },
                { label: t('calc.capital_gain'), value: fmt(results.capitalGain), primary: false },
                { label: t('calc.total_return'), value: fmt(results.totalReturn), primary: false },
                { label: t('calc.projected_irr'), value: fmt(results.irr, false), primary: false },
              ].map((row, idx, arr) => (
                <div
                  key={row.label}
                  className={`py-6 flex justify-between items-end ${idx < arr.length - 1 ? 'border-b' : ''}`}
                  style={{ borderColor: idx < arr.length - 1 ? 'rgba(255,255,255,0.08)' : undefined }}
                >
                  <p className="text-[10px] tracking-[0.2em] text-stone uppercase">{row.label}</p>
                  <p
                    className={`font-serif font-light ${row.primary ? 'text-cream' : 'text-cream/80'}`}
                    style={{ fontSize: row.primary ? '2.5rem' : '1.75rem' }}
                  >
                    {row.value}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-[10px] text-stone/40 leading-relaxed mt-6">
              {t('calc.disclaimer')}
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
