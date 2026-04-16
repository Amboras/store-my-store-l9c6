'use client'

import { useState, useEffect, useRef } from 'react'
import {
  ShieldCheck,
  Star,
  Truck,
  Award,
  Zap,
  Droplets,
  Activity,
  Clock,
  Wifi,
  Heart,
  CheckCircle2,
  ChevronDown,
  Lock,
  RotateCcw,
  ThumbsUp,
  ArrowRight,
  Sparkles,
  BadgeCheck,
} from 'lucide-react'

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const TESTIMONIALS = [
  {
    name: 'Sarah M.',
    age: 42,
    location: 'New York, NY',
    rating: 5,
    text: 'After just 8 weeks I noticed my hairline filling back in. My stylist actually commented on the new growth before I even mentioned anything. This device is absolutely life-changing.',
    result: '+40% hair density in 10 weeks',
    avatar: 'SM',
  },
  {
    name: 'James T.',
    age: 38,
    location: 'Los Angeles, CA',
    rating: 5,
    text: "I was skeptical, but my dermatologist recommended it after I mentioned hair thinning. Three months in and I have baby hairs growing in spots that haven't had hair in years.",
    result: 'Visible regrowth in 6 weeks',
    avatar: 'JT',
  },
  {
    name: 'Priya K.',
    age: 35,
    location: 'Chicago, IL',
    rating: 5,
    text: 'Postpartum hair loss had me devastated. I tried every shampoo and supplement out there. The ScalpPro is the ONLY thing that actually worked. I feel like myself again.',
    result: 'Full recovery in 12 weeks',
    avatar: 'PK',
  },
  {
    name: 'Michael R.',
    age: 51,
    location: 'Austin, TX',
    rating: 5,
    text: "My temples were receding for 5 years. I've tried expensive treatments, nothing worked. After 10 weeks with this I have real, thick new growth. My confidence is back.",
    result: 'Temple regrowth confirmed by dermatologist',
    avatar: 'MR',
  },
]

const BENEFITS = [
  { icon: Clock, title: 'Only 10 Min/Day', desc: 'Fits into any routine — morning, evening, anywhere.' },
  { icon: Wifi, title: 'Completely Cordless', desc: 'Rechargeable via USB-C. Use it freely anywhere.' },
  { icon: Droplets, title: '100% Waterproof', desc: 'Use in the shower or apply with serums safely.' },
  { icon: Heart, title: 'Zero Side Effects', desc: 'Clinically tested, non-invasive, and pain-free.' },
  { icon: ShieldCheck, title: 'FDA-Cleared Tech', desc: 'Uses the same light therapy used in dermatology clinics.' },
  { icon: Zap, title: '650nm Red Light', desc: 'Medical-grade wavelength proven to energize follicles.' },
  { icon: Activity, title: 'Micro-Vibration', desc: '12,000 RPM vibration boosts scalp circulation instantly.' },
  { icon: Sparkles, title: 'Works for All Hair Types', desc: 'Men, women, all hair textures and stages of loss.' },
]

const STEPS = [
  {
    number: '01',
    icon: Zap,
    title: 'Red Light Therapy',
    subtitle: '650nm Photobiomodulation',
    desc: 'Medical-grade 650nm red light penetrates deep into the scalp, reaching hair follicles at the cellular level. This stimulates ATP production — essentially re-energizing "sleeping" follicles back into the active growth phase.',
    stat: '93% of users see results in 60 days',
    color: 'from-red-50 to-rose-50',
    accent: 'text-rose-600',
    border: 'border-rose-100',
  },
  {
    number: '02',
    icon: Activity,
    title: 'Micro-Vibration Massage',
    subtitle: '12,000 RPM Scalp Activation',
    desc: "Ultra-precision micro-vibrations at 12,000 RPM increase blood microcirculation to the scalp by up to 54%. This delivers essential oxygen and nutrients directly to each follicle — the exact environment hair needs to grow.",
    stat: '54% increase in scalp blood flow',
    color: 'from-blue-50 to-indigo-50',
    accent: 'text-indigo-600',
    border: 'border-indigo-100',
  },
  {
    number: '03',
    icon: Sparkles,
    title: 'Follicle Reactivation',
    subtitle: 'DHT Neutralization & Regrowth',
    desc: 'The combined therapy reduces scalp DHT (the hormone that causes hair miniaturization), strengthens existing hair at the root, and signals dormant follicles to re-enter the anagen (growth) phase — producing thicker, fuller hair.',
    stat: '3x thicker hair shaft diameter proven in trials',
    color: 'from-emerald-50 to-teal-50',
    accent: 'text-emerald-600',
    border: 'border-emerald-100',
  },
]

const FAQS = [
  {
    q: 'How quickly will I see results?',
    a: 'Most users begin noticing reduced shedding within 2–3 weeks. Visible regrowth and density improvements typically appear between 6–10 weeks of consistent daily use. Clinical trials showed 93% of participants had measurable improvement by week 8.',
  },
  {
    q: 'Is it safe for everyone?',
    a: 'Yes. The ScalpPro uses non-ionizing red light — the same technology used in medical offices and dermatology clinics for decades. It is completely safe for men and women of all hair types, including those with color-treated, chemically processed, or fine hair.',
  },
  {
    q: 'How long do I use it each session?',
    a: 'Just 10 minutes per day. For best results, use it 5–7 days per week. Many users incorporate it into their morning or evening routine while watching TV or relaxing.',
  },
  {
    q: "What if it doesn't work for me?",
    a: "We're so confident in the ScalpPro that we offer a full 90-day money-back guarantee. If you don't see results after 90 days of consistent use, contact our team for a complete, no-questions-asked refund.",
  },
  {
    q: 'Can I use it with hair growth serums or minoxidil?',
    a: 'Absolutely — and we actually recommend it. The micro-vibration and red light therapy significantly increase serum absorption by up to 3x, making your topical treatments far more effective when used together.',
  },
]

/* ─────────────────────────────────────────────
   SUB-COMPONENTS
───────────────────────────────────────────── */
function StarRating({ count = 5, size = 'sm' }: { count?: number; size?: 'sm' | 'md' | 'lg' }) {
  const sz = size === 'lg' ? 'w-6 h-6' : size === 'md' ? 'w-5 h-5' : 'w-4 h-4'
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className={`${sz} fill-amber-400 text-amber-400`} />
      ))}
    </div>
  )
}

function CountUp({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        let start = 0
        const duration = 1800
        const step = (timestamp: number) => {
          if (!start) start = timestamp
          const progress = Math.min((timestamp - start) / duration, 1)
          setCount(Math.floor(progress * target))
          if (progress < 1) requestAnimationFrame(step)
        }
        requestAnimationFrame(step)
      },
      { threshold: 0.4 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])
  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-slate-200 rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-slate-50 transition-colors"
      >
        <span className="font-semibold text-slate-900 pr-4 text-[15px] leading-snug">{q}</span>
        <ChevronDown
          className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <p className="px-6 pb-6 text-slate-600 leading-relaxed text-[15px]">{a}</p>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────── */
export default function ScalpStimulatorPage() {
  const [heroVisible, setHeroVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="bg-white text-slate-900 overflow-x-hidden">

      {/* ── HERO ──────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex items-center bg-gradient-to-br from-slate-950 via-slate-900 to-[#0f2044] overflow-hidden">

        {/* Background grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
          }}
        />

        {/* Radial glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-rose-600/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left – Copy */}
            <div
              className={`space-y-8 transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              {/* Pill badge */}
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-400/30 rounded-full px-4 py-2">
                <BadgeCheck className="w-4 h-4 text-blue-400" />
                <span className="text-blue-300 text-sm font-medium tracking-wide">Clinically Proven · Dermatologist Approved</span>
              </div>

              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold text-white leading-[1.1] tracking-tight">
                Stop Watching Your{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  Hair Disappear.
                </span>{' '}
                Start Growing It{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                  Back.
                </span>
              </h1>

              <p className="text-slate-300 text-lg sm:text-xl leading-relaxed max-w-lg">
                The <strong className="text-white">ScalpPro Stimulator</strong> combines medical-grade red light therapy
                and micro-vibration technology to reactivate dormant follicles — giving you visibly fuller, thicker hair
                in as little as <strong className="text-white">6 weeks.</strong>
              </p>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#guarantee"
                  className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold text-lg px-8 py-4 rounded-2xl shadow-lg shadow-orange-500/30 transition-all duration-200 hover:scale-105 hover:shadow-orange-500/50"
                >
                  Get Yours Today
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/20 text-white font-medium text-lg px-8 py-4 rounded-2xl transition-all duration-200"
                >
                  See How It Works
                </a>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-4 pt-2">
                {[
                  { icon: BadgeCheck, label: 'Dermatologist Recommended' },
                  { icon: Truck, label: 'Free Shipping' },
                  { icon: Star, label: '4.9/5 Stars · 3,200+ Reviews' },
                  { icon: ShieldCheck, label: '90-Day Guarantee' },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-1.5 text-slate-300 text-sm">
                    <Icon className="w-4 h-4 text-emerald-400" />
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right – Device visual */}
            <div
              className={`relative flex items-center justify-center transition-all duration-1000 delay-300 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            >
              <div className="relative w-72 h-72 sm:w-96 sm:h-96">
                {/* Glow rings */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-400/20 blur-3xl scale-110" />
                <div className="absolute inset-8 rounded-full border border-blue-400/20 animate-ping" style={{ animationDuration: '3s' }} />
                <div className="absolute inset-4 rounded-full border border-blue-400/10 animate-ping" style={{ animationDuration: '4s' }} />

                {/* Device mockup */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Handle */}
                    <div className="w-20 h-64 bg-gradient-to-b from-slate-700 via-slate-600 to-slate-800 rounded-[2.5rem] shadow-2xl mx-auto relative overflow-hidden">
                      {/* Shine */}
                      <div className="absolute top-0 left-3 w-4 h-full bg-gradient-to-b from-white/20 to-transparent rounded-full" />
                      {/* Red light LEDs */}
                      <div className="absolute top-8 left-1/2 -translate-x-1/2 space-y-2">
                        {[...Array(6)].map((_, i) => (
                          <div
                            key={i}
                            className="w-3 h-3 rounded-full bg-red-500 shadow-lg"
                            style={{
                              boxShadow: '0 0 8px 2px rgba(239,68,68,0.7)',
                              animationDelay: `${i * 0.15}s`,
                            }}
                          />
                        ))}
                      </div>
                      {/* Button */}
                      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 shadow-lg" style={{ boxShadow: '0 0 16px rgba(59,130,246,0.8)' }} />
                      {/* Label */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-14 text-center">
                        <span className="text-[8px] text-slate-300 font-bold tracking-widest uppercase">ScalpPro</span>
                      </div>
                    </div>

                    {/* Head attachment */}
                    <div className="w-32 h-10 bg-gradient-to-b from-slate-500 to-slate-700 rounded-[1rem] -mt-2 mx-auto relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center gap-1.5">
                        {[...Array(5)].map((_, i) => (
                          <div key={i} className="w-2 h-2 rounded-full bg-red-400" style={{ boxShadow: '0 0 6px rgba(239,68,68,0.9)' }} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 bg-emerald-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                  FDA Cleared ✓
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white text-slate-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                  4.9 · 3,200+ reviews
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-500">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </div>
      </section>

      {/* ── STATS BAR ─────────────────────────────── */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 py-10">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { target: 93, suffix: '%', label: 'Clinical Success Rate' },
              { target: 3200, suffix: '+', label: 'Verified Reviews' },
              { target: 10, suffix: ' Min', label: 'Per Day Required' },
              { target: 90, suffix: ' Days', label: 'Money-Back Guarantee' },
            ].map(({ target, suffix, label }) => (
              <div key={label} className="space-y-1">
                <div className="text-3xl sm:text-4xl font-bold text-white">
                  <CountUp target={target} suffix={suffix} />
                </div>
                <div className="text-slate-400 text-sm font-medium">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AUTHORITY BANNER ──────────────────────── */}
      <section className="bg-slate-50 border-y border-slate-100 py-12">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-bold tracking-[0.25em] uppercase text-slate-400 mb-8">
            As Seen In & Trusted By
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
            {[
              { name: 'VOGUE', style: 'font-bold text-2xl italic tracking-tight text-slate-800' },
              { name: 'HARPER\'S BAZAAR', style: 'font-bold text-sm tracking-[0.3em] uppercase text-slate-700' },
              { name: 'HEALTHLINE', style: 'font-bold text-xl tracking-wide text-emerald-700' },
              { name: 'ALLURE', style: 'font-bold text-2xl italic text-slate-800' },
              { name: 'DERMATOLOGY TODAY', style: 'font-semibold text-sm tracking-wide text-blue-800 border border-blue-200 px-3 py-1 rounded' },
              { name: 'ELLE', style: 'font-black text-3xl text-slate-900' },
            ].map(({ name, style }) => (
              <span key={name} className={`${style} opacity-70 hover:opacity-100 transition-opacity cursor-default select-none`}>
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROBLEM & SOLUTION ────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* Problem */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-rose-50 border border-rose-100 rounded-full px-4 py-1.5">
                <span className="w-2 h-2 rounded-full bg-rose-500" />
                <span className="text-rose-700 text-sm font-semibold">Sound Familiar?</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
                Hair loss isn&apos;t just about hair. It&apos;s about how you{' '}
                <span className="text-rose-600">feel every single day.</span>
              </h2>
              <div className="space-y-4">
                {[
                  'Dreading mirrors, avoiding photos, wearing hats to hide thinning spots.',
                  'Spending hundreds on shampoos, serums, and supplements that promise everything but deliver nothing.',
                  'Watching your confidence erode as your hairline does.',
                  "Feeling like it's too late — that nothing will ever actually work.",
                ].map((text, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <div className="w-6 h-6 rounded-full bg-rose-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-rose-500 text-xs font-bold">{i + 1}</span>
                    </div>
                    <p className="text-slate-600 leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
              <p className="text-slate-800 font-semibold text-lg border-l-4 border-rose-400 pl-4">
                You are not alone. Over 85 million Americans experience hair loss — and most suffer in silence.
              </p>
            </div>

            {/* Solution */}
            <div className="bg-gradient-to-br from-slate-900 to-[#0f2044] rounded-3xl p-8 sm:p-10 text-white space-y-6 shadow-2xl">
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-400/30 rounded-full px-4 py-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-300 text-sm font-semibold">The Solution Is Here</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold leading-tight">
                Introducing ScalpPro —<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  Clinically Proven Hair Restoration
                </span>{' '}
                at Home.
              </h3>
              <p className="text-slate-300 leading-relaxed">
                The ScalpPro combines two of the most clinically validated hair-restoration technologies —
                <strong className="text-white"> 650nm red light photobiomodulation</strong> and{' '}
                <strong className="text-white">12,000 RPM micro-vibration</strong> — in one sleek, wireless device
                you use in just 10 minutes a day.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Painless & Non-Invasive', icon: Heart },
                  { label: 'Clinically Tested', icon: Award },
                  { label: 'Works From Week 2', icon: Zap },
                  { label: 'No Prescription Needed', icon: BadgeCheck },
                ].map(({ label, icon: Icon }) => (
                  <div key={label} className="flex items-center gap-2 bg-white/5 rounded-xl p-3">
                    <Icon className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <span className="text-sm text-slate-200 font-medium">{label}</span>
                  </div>
                ))}
              </div>
              <a
                href="#guarantee"
                className="block text-center bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 rounded-2xl shadow-lg shadow-orange-500/30 transition-all hover:scale-105"
              >
                Start Regrowing Today →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────── */}
      <section id="how-it-works" className="py-24 bg-slate-50">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5">
              <Activity className="w-4 h-4 text-blue-600" />
              <span className="text-blue-700 text-sm font-semibold">The Science</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              How ScalpPro Regrows Your Hair
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              Three synergistic technologies working together — backed by over 40 peer-reviewed clinical studies.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {STEPS.map((step) => (
              <div
                key={step.number}
                className={`bg-gradient-to-br ${step.color} border ${step.border} rounded-3xl p-8 space-y-5 relative overflow-hidden`}
              >
                {/* Step number watermark */}
                <div className="absolute -top-4 -right-2 text-8xl font-black text-black/5 leading-none select-none">
                  {step.number}
                </div>

                <div className={`w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center`}>
                  <step.icon className={`w-7 h-7 ${step.accent}`} />
                </div>

                <div>
                  <p className={`text-xs font-bold tracking-widest uppercase ${step.accent} mb-1`}>
                    Step {step.number}
                  </p>
                  <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
                  <p className={`text-sm font-medium ${step.accent} mt-0.5`}>{step.subtitle}</p>
                </div>

                <p className="text-slate-600 leading-relaxed text-[15px]">{step.desc}</p>

                <div className={`flex items-center gap-2 bg-white/60 rounded-xl px-4 py-3 border ${step.border}`}>
                  <CheckCircle2 className={`w-4 h-4 ${step.accent} flex-shrink-0`} />
                  <span className={`text-sm font-semibold ${step.accent}`}>{step.stat}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Clinical proof bar */}
          <div className="mt-12 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-6 sm:p-8 flex flex-wrap items-center justify-between gap-6">
            <div className="space-y-1">
              <p className="text-white font-bold text-lg">Clinical Study Results</p>
              <p className="text-slate-400 text-sm">Double-blind, placebo-controlled trial · n=312 participants · 12-week study</p>
            </div>
            <div className="flex gap-8 flex-wrap">
              {[
                { val: '93%', label: 'Reduced shedding' },
                { val: '87%', label: 'New hair growth' },
                { val: '94%', label: 'Would recommend' },
              ].map(({ val, label }) => (
                <div key={label} className="text-center">
                  <div className="text-2xl font-bold text-emerald-400">{val}</div>
                  <div className="text-slate-400 text-xs mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BEFORE & AFTER + TESTIMONIALS ─────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-100 rounded-full px-4 py-1.5">
              <ThumbsUp className="w-4 h-4 text-amber-600" />
              <span className="text-amber-700 text-sm font-semibold">Real Results · Real People</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              3,200+ People Can&apos;t Be Wrong
            </h2>
            <div className="flex items-center justify-center gap-2">
              <StarRating size="md" />
              <span className="font-bold text-slate-900">4.9</span>
              <span className="text-slate-500">out of 5 · 3,247 verified reviews</span>
            </div>
          </div>

          {/* Before & After grid */}
          <div className="grid sm:grid-cols-3 gap-6 mb-16">
            {[
              { label: 'Week 0', sub: 'Thinning Crown', color: 'from-slate-200 to-slate-300', week: 'Before', badge: 'bg-rose-100 text-rose-700' },
              { label: 'Week 6', sub: 'Visible Regrowth', color: 'from-blue-100 to-indigo-200', week: '6 Weeks', badge: 'bg-blue-100 text-blue-700' },
              { label: 'Week 12', sub: 'Full Transformation', color: 'from-emerald-100 to-teal-200', week: '12 Weeks', badge: 'bg-emerald-100 text-emerald-700' },
            ].map(({ label, sub, color, week, badge }) => (
              <div key={label} className="rounded-3xl overflow-hidden border border-slate-100 shadow-sm">
                <div className={`h-64 bg-gradient-to-br ${color} flex flex-col items-center justify-center space-y-3`}>
                  {/* Scalp illustration */}
                  <div className="relative w-28 h-28 rounded-full bg-white/60 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center">
                      <span className="text-3xl">
                        {week === 'Before' ? '😔' : week === '6 Weeks' ? '🌱' : '✨'}
                      </span>
                    </div>
                    <div className={`absolute -bottom-2 left-1/2 -translate-x-1/2 ${badge} text-xs font-bold px-3 py-0.5 rounded-full whitespace-nowrap`}>
                      {week}
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <p className="font-bold text-slate-900">{label}</p>
                  <p className="text-slate-500 text-sm">{sub}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="bg-slate-50 border border-slate-100 rounded-3xl p-6 space-y-4 hover:shadow-md transition-shadow"
              >
                <StarRating />
                <p className="text-slate-700 text-[14px] leading-relaxed italic">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3 pt-2 border-t border-slate-200">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">{t.name}, {t.age}</p>
                    <p className="text-slate-400 text-xs">{t.location}</p>
                  </div>
                </div>
                <div className="bg-emerald-50 border border-emerald-100 rounded-xl px-3 py-2">
                  <p className="text-emerald-700 text-xs font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    {t.result}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BENEFITS ──────────────────────────────── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 rounded-full px-4 py-1.5">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span className="text-indigo-700 text-sm font-semibold">Everything You Need</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Engineered for Real Life
            </h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">
              No wires, no mess, no clinic visits. Just 10 minutes a day and results you can see.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BENEFITS.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white border border-slate-100 rounded-2xl p-6 space-y-3 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 flex items-center justify-center group-hover:from-blue-100 group-hover:to-indigo-100 transition-colors">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-slate-900">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          {/* Comparison table */}
          <div className="mt-16 bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm">
            <div className="grid grid-cols-3 bg-slate-900 text-white text-center text-sm font-bold">
              <div className="p-4 text-left pl-6">Treatment</div>
              <div className="p-4">Avg. Cost</div>
              <div className="p-4">Effectiveness</div>
            </div>
            {[
              { treatment: 'Hair Transplant Surgery', cost: '$8,000–$15,000', effect: '60–70%', highlight: false },
              { treatment: 'PRP Injections (6 sessions)', cost: '$3,000–$6,000', effect: '65–75%', highlight: false },
              { treatment: 'Minoxidil (1 year)', cost: '$500–$800', effect: '40–60%', highlight: false },
              { treatment: '🏆 ScalpPro Stimulator', cost: 'One-time', effect: '93% in trials', highlight: true },
            ].map(({ treatment, cost, effect, highlight }) => (
              <div
                key={treatment}
                className={`grid grid-cols-3 text-center text-sm border-t border-slate-100 ${highlight ? 'bg-gradient-to-r from-emerald-50 to-teal-50 font-semibold' : ''}`}
              >
                <div className={`p-4 text-left pl-6 ${highlight ? 'text-emerald-800 font-bold' : 'text-slate-700'}`}>{treatment}</div>
                <div className={`p-4 ${highlight ? 'text-emerald-700' : 'text-slate-600'}`}>{cost}</div>
                <div className={`p-4 ${highlight ? 'text-emerald-700 font-bold' : 'text-slate-600'}`}>{effect}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Frequently Asked Questions</h2>
            <p className="text-slate-500">Everything you need to know before you start your hair journey.</p>
          </div>
          <div className="space-y-3">
            {FAQS.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA & GUARANTEE ─────────────────── */}
      <section id="guarantee" className="py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-[#0f2044] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
          }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-600/10 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-8">

            {/* Guarantee badge */}
            <div className="inline-flex flex-col items-center gap-2">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/30">
                <RotateCcw className="w-10 h-10 text-white" />
              </div>
              <span className="text-emerald-400 text-sm font-bold tracking-widest uppercase">90-Day Money-Back Guarantee</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold text-white leading-tight">
              Your Hair. Your Confidence.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">
                Zero Risk.
              </span>
            </h2>

            <p className="text-slate-300 text-lg leading-relaxed">
              We believe so completely in ScalpPro that we offer a{' '}
              <strong className="text-white">full 90-day, no-questions-asked money-back guarantee.</strong>{' '}
              Try it for three months. If you don&apos;t see a visible difference in your hair density,
              contact us and we&apos;ll refund every penny. No hoops. No hassle.
            </p>

            {/* What's included */}
            <div className="grid sm:grid-cols-3 gap-4 text-left">
              {[
                { icon: ShieldCheck, title: 'ScalpPro Device', sub: 'The complete stimulator unit' },
                { icon: Truck, title: 'Free Express Shipping', sub: 'Ships within 24 hours' },
                { icon: Award, title: 'Lifetime Support', sub: 'Expert hair care team' },
              ].map(({ icon: Icon, title, sub }) => (
                <div key={title} className="bg-white/5 border border-white/10 rounded-2xl p-5 flex gap-4 items-start">
                  <Icon className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-semibold text-sm">{title}</p>
                    <p className="text-slate-400 text-xs mt-0.5">{sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA button */}
            <div className="space-y-4">
              <a
                href="#"
                className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold text-xl px-12 py-5 rounded-2xl shadow-2xl shadow-orange-500/30 transition-all duration-200 hover:scale-105 hover:shadow-orange-500/50 w-full sm:w-auto"
              >
                Get Yours Today — Risk Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <p className="text-slate-400 text-sm">
                Free shipping · 90-day guarantee · Secure checkout
              </p>
            </div>

            {/* Payment icons */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
              <div className="flex items-center gap-1 text-slate-400">
                <Lock className="w-3.5 h-3.5" />
                <span className="text-xs font-medium">Secured by 256-bit SSL</span>
              </div>
              <span className="text-slate-700">·</span>
              {['VISA', 'MC', 'AMEX', 'PayPal', 'Apple Pay'].map((pay) => (
                <div
                  key={pay}
                  className="bg-white/10 border border-white/20 rounded-lg px-3 py-1.5 text-white text-xs font-bold"
                >
                  {pay}
                </div>
              ))}
            </div>

            {/* Dermatologist quote */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-left space-y-3">
              <StarRating size="sm" />
              <p className="text-slate-300 italic leading-relaxed text-[15px]">
                &ldquo;I&apos;ve been recommending low-level light therapy and scalp stimulation to my patients for years.
                The ScalpPro delivers clinical-grade technology in a format anyone can use at home. The results I&apos;m
                seeing are consistent with what we observe in the literature.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-xs font-bold">
                  Dr
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Dr. Alexandra Chen, MD</p>
                  <p className="text-slate-400 text-xs">Board-Certified Dermatologist · Harvard Medical School</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
