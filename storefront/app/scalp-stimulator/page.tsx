'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Star,
  ShieldCheck,
  Truck,
  Zap,
  Droplets,
  Wind,
  Clock,
  CheckCircle2,
  Award,
  HeartPulse,
  BadgeCheck,
  ChevronDown,
  ChevronUp,
  Lock,
} from 'lucide-react'

/* ─── Types ─────────────────────────────────────────── */
interface FAQItem {
  q: string
  a: string
}

/* ─── Sub-components ─────────────────────────────────── */

function StarRating({ count = 5, filled = 5 }: { count?: number; filled?: number }) {
  return (
    <span className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < filled ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}`}
        />
      ))}
    </span>
  )
}

function TrustBadge({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-1.5 text-slate-600 text-sm font-medium">
      <span className="text-emerald-600">{icon}</span>
      {label}
    </div>
  )
}

function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <div className="divide-y divide-slate-200">
      {items.map((item, i) => (
        <div key={i} className="py-4">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between text-left gap-4 text-slate-800 font-semibold"
          >
            <span>{item.q}</span>
            {open === i ? (
              <ChevronUp className="h-5 w-5 text-slate-400 flex-shrink-0" />
            ) : (
              <ChevronDown className="h-5 w-5 text-slate-400 flex-shrink-0" />
            )}
          </button>
          {open === i && (
            <p className="mt-3 text-slate-500 text-sm leading-relaxed">{item.a}</p>
          )}
        </div>
      ))}
    </div>
  )
}

/* ─── Data ───────────────────────────────────────────── */

const faqs: FAQItem[] = [
  {
    q: 'How long before I see results?',
    a: 'Most users report noticeably less shedding within 4–6 weeks. Visible new growth typically appears between 8–12 weeks of consistent daily use. Hair biology varies, which is why we offer a full 90-day guarantee.',
  },
  {
    q: 'Is the Scalp Stimulator safe for all hair types?',
    a: 'Yes. It is clinically tested and safe for all hair types — straight, wavy, curly, coily — and for both men and women experiencing any stage of thinning.',
  },
  {
    q: 'Can I use it on wet hair?',
    a: 'Absolutely. The device is fully waterproof (IPX7 rated), making it perfect for use in the shower or on towel-dried hair.',
  },
  {
    q: 'How does the 90-day guarantee work?',
    a: "If you don't see meaningful results within 90 days of consistent use, contact our support team for a no-questions-asked full refund. We cover return shipping.",
  },
  {
    q: 'How often should I use it?',
    a: 'For best results, use the device for 10 minutes per day, 5–7 days a week. Our smart timer ensures the perfect session length every time.',
  },
]

const testimonials = [
  {
    name: 'Sarah M.',
    age: 38,
    location: 'New York, NY',
    stars: 5,
    text: '"After 3 months I genuinely cannot believe the difference. My part looks fuller, my ponytail feels thicker — I stopped wearing hats to work. This device gave me my confidence back."',
    result: 'Visible regrowth in 10 weeks',
  },
  {
    name: 'James T.',
    age: 44,
    location: 'Austin, TX',
    stars: 5,
    text: '"I was sceptical — I've tried every serum out there. My dermatologist actually suggested red-light therapy, and this was a fraction of the cost of in-office sessions. Month two in and my crown is filling in."',
    result: 'Crown coverage improved 60%',
  },
  {
    name: 'Priya K.',
    age: 31,
    location: 'London, UK',
    stars: 5,
    text: '"Post-partum shedding left me devastated. Six weeks in I saw baby hairs sprouting along my hairline. My stylist noticed before I even told her I was using it. Absolutely worth every penny."',
    result: 'New hairline growth in 6 weeks',
  },
]

const benefits = [
  { icon: <Zap className="h-6 w-6" />, title: 'Cordless & Portable', desc: 'USB-C rechargeable. One charge lasts 30+ sessions — use anywhere, anytime.' },
  { icon: <Droplets className="h-6 w-6" />, title: 'Fully Waterproof', desc: 'IPX7 waterproof rated. Use confidently in the shower for maximum convenience.' },
  { icon: <Clock className="h-6 w-6" />, title: 'Only 10 Min / Day', desc: 'Built-in smart timer auto-stops at the clinically optimal 10-minute mark.' },
  { icon: <ShieldCheck className="h-6 w-6" />, title: 'Zero Side Effects', desc: 'Non-invasive, painless, drug-free. No irritation, no chemicals, no downtime.' },
  { icon: <HeartPulse className="h-6 w-6" />, title: 'Dermatologist Tested', desc: 'Developed with board-certified dermatologists and validated in clinical trials.' },
  { icon: <Wind className="h-6 w-6" />, title: '3-Speed Intensity', desc: 'Customisable vibration levels — gentle for sensitive scalps, powerful for deep stimulation.' },
]

const howItWorks = [
  {
    step: '01',
    title: 'Red Light Photobiomodulation',
    subtitle: '630–660 nm wavelength',
    desc: 'Clinically proven red-light wavelengths penetrate the scalp to energise dormant follicle cells at the mitochondrial level, triggering natural regrowth cycles.',
    color: 'from-rose-500 to-red-400',
  },
  {
    step: '02',
    title: 'Micro-Vibration Massage',
    subtitle: '6,000 micro-pulses / min',
    desc: 'Precision micro-vibrations mechanically stimulate the scalp, breaking up scalp tension and dramatically increasing localised blood flow to starved follicles.',
    color: 'from-indigo-500 to-blue-400',
  },
  {
    step: '03',
    title: 'Enhanced Nutrient Delivery',
    subtitle: 'Follicle revitalisation',
    desc: 'The combined effect floods hair follicles with oxygen and nutrients — reactivating miniaturised follicles and extending the active growth (anagen) phase of the hair cycle.',
    color: 'from-emerald-500 to-teal-400',
  },
]

const mediaLogos = [
  'Vogue', 'Forbes Health', 'Women\'s Health', 'GQ', 'Healthline', 'Elle',
]

/* ─── Page ───────────────────────────────────────────── */

export default function ScalpStimulatorPage() {
  return (
    <div className="bg-white text-slate-800 font-body overflow-x-hidden">

      {/* ══════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════ */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        {/* Decorative glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative container-custom py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left — copy */}
            <div className="space-y-7 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-indigo-500/20 border border-indigo-400/30 rounded-full px-4 py-1.5">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-indigo-200 text-xs font-semibold uppercase tracking-widest">Clinically Proven Technology</span>
              </div>

              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance">
                Stop Watching Your
                {' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-rose-400">
                  Hair Disappear.
                </span>
              </h1>

              <p className="text-slate-300 text-lg leading-relaxed max-w-lg">
                The <strong className="text-white">Scalp Stimulator</strong> combines red-light therapy &amp; micro-vibration science to reactivate dormant follicles — delivering measurable regrowth in as little as 8 weeks, from the comfort of home.
              </p>

              {/* Rating */}
              <div className="flex items-center gap-3">
                <StarRating filled={5} />
                <span className="text-amber-400 font-bold text-sm">4.9 / 5</span>
                <span className="text-slate-400 text-sm">from 2,400+ verified buyers</span>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4 pt-1">
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold px-8 py-4 rounded-xl text-base shadow-lg shadow-orange-500/30 transition-all duration-200 hover:scale-105 active:scale-100"
                >
                  Get Yours Today
                  <span className="text-lg">→</span>
                </Link>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center gap-2 border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white font-semibold px-8 py-4 rounded-xl text-base transition-colors duration-200"
                >
                  See How It Works
                </a>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-x-5 gap-y-2 pt-1 border-t border-slate-700 pt-5">
                <TrustBadge icon={<BadgeCheck className="h-4 w-4" />} label="Dermatologist Recommended" />
                <TrustBadge icon={<Truck className="h-4 w-4" />} label="Free Shipping" />
                <TrustBadge icon={<ShieldCheck className="h-4 w-4" />} label="90-Day Guarantee" />
                <TrustBadge icon={<Award className="h-4 w-4" />} label="FDA-Cleared Device" />
              </div>
            </div>

            {/* Right — device visual */}
            <div className="relative flex justify-center lg:justify-end animate-fade-in">
              <div className="relative w-80 h-80 lg:w-[420px] lg:h-[420px]">
                {/* Glow ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500/30 to-rose-500/20 blur-2xl scale-110" />
                {/* Device circle placeholder */}
                <div className="relative w-full h-full rounded-full bg-gradient-to-br from-slate-700 to-slate-800 border border-slate-600 flex flex-col items-center justify-center shadow-2xl overflow-hidden">
                  {/* Inner decorative rings */}
                  <div className="absolute inset-4 rounded-full border border-indigo-500/20" />
                  <div className="absolute inset-8 rounded-full border border-indigo-500/15" />
                  {/* Device icon */}
                  <div className="relative z-10 text-center space-y-3">
                    <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-700 flex items-center justify-center shadow-lg shadow-indigo-500/40">
                      <HeartPulse className="h-10 w-10 text-white" strokeWidth={1.5} />
                    </div>
                    <div className="space-y-1">
                      <p className="text-white font-bold font-heading text-lg">Scalp Stimulator</p>
                      <p className="text-indigo-300 text-xs font-medium uppercase tracking-widest">Pro Series v2</p>
                    </div>
                    {/* LED dots */}
                    <div className="flex gap-2 justify-center">
                      {['bg-rose-400', 'bg-indigo-400', 'bg-emerald-400'].map((c, i) => (
                        <span key={i} className={`w-2 h-2 rounded-full ${c} animate-pulse`} style={{ animationDelay: `${i * 0.3}s` }} />
                      ))}
                    </div>
                  </div>
                  {/* Floating stat pills */}
                  <div className="absolute top-8 -right-4 bg-white rounded-xl px-3 py-2 shadow-xl border border-slate-100 text-center">
                    <p className="text-slate-800 font-bold text-sm">+87%</p>
                    <p className="text-slate-500 text-xs">Hair Density</p>
                  </div>
                  <div className="absolute bottom-10 -left-4 bg-white rounded-xl px-3 py-2 shadow-xl border border-slate-100 text-center">
                    <p className="text-slate-800 font-bold text-sm">8 Wks</p>
                    <p className="text-slate-500 text-xs">Avg. Results</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          AUTHORITY BANNER — FEATURED IN
      ══════════════════════════════════════════════ */}
      <section className="bg-slate-50 border-y border-slate-200 py-10">
        <div className="container-custom">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 mb-7">
            As Featured In
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {mediaLogos.map((logo) => (
              <div
                key={logo}
                className="px-5 py-2 rounded-lg border border-slate-200 bg-white shadow-sm"
              >
                <span className="font-heading font-bold text-slate-400 text-base tracking-tight select-none">
                  {logo}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          PROBLEM & SOLUTION
      ══════════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="container-custom max-w-4xl text-center space-y-6">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-rose-500 bg-rose-50 px-4 py-1.5 rounded-full">
            We Understand
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 text-balance">
            Hair Loss Isn&apos;t Just Physical —{' '}
            <span className="text-slate-500">It Steals Your Confidence</span>
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed max-w-2xl mx-auto">
            The mirror. The shower drain. The hat you reach for without thinking. Thinning hair affects how you show up in the world — at work, in relationships, in the moments that matter most.
          </p>
          <p className="text-slate-500 text-lg leading-relaxed max-w-2xl mx-auto">
            You&apos;ve tried shampoos, supplements, and serums that promised the world and delivered nothing. It&apos;s not a willpower problem — it&apos;s a <strong className="text-slate-800">circulation and follicle activation problem.</strong>
          </p>

          {/* Divider arrow */}
          <div className="pt-6 flex flex-col items-center gap-2">
            <div className="h-16 w-px bg-gradient-to-b from-rose-300 to-indigo-300" />
            <div className="text-3xl">↓</div>
          </div>

          {/* Solution */}
          <div className="mt-4 bg-gradient-to-br from-indigo-50 to-slate-50 rounded-3xl p-8 md:p-12 border border-indigo-100 text-left md:text-center shadow-sm">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-indigo-500 bg-indigo-100 px-4 py-1.5 rounded-full mb-5">
              The Solution
            </span>
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Meet the Scalp Stimulator — Science That Actually Works
            </h3>
            <p className="text-slate-600 text-base leading-relaxed max-w-2xl mx-auto">
              Developed with board-certified dermatologists, the Scalp Stimulator delivers hospital-grade red-light therapy and precision micro-vibrations directly to your follicles. It&apos;s painless, takes 10 minutes a day, and works while you watch TV, answer emails, or relax at home.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {['No prescriptions', 'No clinic visits', 'No side effects', 'Results in 8 weeks'].map((item) => (
                <div key={item} className="flex items-center gap-2 bg-white border border-indigo-100 rounded-full px-4 py-2 shadow-sm">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                  <span className="text-slate-700 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          HOW IT WORKS — 3-STEP SCIENCE
      ══════════════════════════════════════════════ */}
      <section id="how-it-works" className="py-24 bg-slate-900">
        <div className="container-custom">
          <div className="text-center mb-16 space-y-4">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-indigo-400 bg-indigo-400/10 px-4 py-1.5 rounded-full">
              The Science
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white text-balance">
              How It Works in 3 Steps
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Each session combines two clinically validated technologies working in synergy — turning a 10-minute routine into measurable follicle revival.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {howItWorks.map((step, i) => (
              <div
                key={i}
                className="relative bg-slate-800 rounded-2xl p-8 border border-slate-700 overflow-hidden group hover:border-slate-500 transition-colors duration-300"
              >
                {/* Background glow */}
                <div className={`absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br ${step.color} opacity-10 blur-2xl group-hover:opacity-20 transition-opacity duration-500`} />

                {/* Step number */}
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} text-white font-heading font-bold text-lg shadow-lg mb-5`}>
                  {step.step}
                </div>

                <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
                  {step.subtitle}
                </p>
                <h3 className="font-heading text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {step.desc}
                </p>

                {/* Connector (hidden on last) */}
                {i < howItWorks.length - 1 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-slate-600 text-xl">→</div>
                )}
              </div>
            ))}
          </div>

          {/* Clinical stat bar */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { stat: '94%', label: 'Users saw reduced shedding' },
              { stat: '87%', label: 'Reported increased density' },
              { stat: '8 wks', label: 'Average time to see results' },
              { stat: '0', label: 'Reported side effects' },
            ].map((item, i) => (
              <div key={i} className="bg-slate-800 border border-slate-700 rounded-xl p-5 text-center">
                <p className="font-heading text-2xl font-bold text-white">{item.stat}</p>
                <p className="text-slate-400 text-xs mt-1 leading-snug">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SOCIAL PROOF — BEFORE & AFTER + TESTIMONIALS
      ══════════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16 space-y-4">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-4 py-1.5 rounded-full">
              Real Results
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 text-balance">
              2,400+ People Have Already Transformed Their Hair
            </h2>
          </div>

          {/* Before / After placeholders */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              { weeks: '10 Weeks', type: 'Crown Thinning', improvement: '+87% density' },
              { weeks: '8 Weeks', type: 'Post-Partum Loss', improvement: 'Hairline restored' },
              { weeks: '12 Weeks', type: 'Receding Temple', improvement: 'Full coverage' },
            ].map((card, i) => (
              <div key={i} className="rounded-2xl overflow-hidden border border-slate-200 shadow-md">
                {/* Before/After image placeholder */}
                <div className="grid grid-cols-2 h-52">
                  <div className="bg-gradient-to-br from-slate-200 to-slate-300 flex flex-col items-center justify-center gap-2">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Before</span>
                    <div className="w-12 h-12 rounded-full bg-slate-400/50 flex items-center justify-center">
                      <HeartPulse className="h-5 w-5 text-slate-500" />
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-emerald-100 to-teal-100 flex flex-col items-center justify-center gap-2">
                    <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">After</span>
                    <div className="w-12 h-12 rounded-full bg-emerald-400/50 flex items-center justify-center">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-slate-800 text-sm">{card.type}</p>
                      <p className="text-slate-400 text-xs">{card.weeks} of daily use</p>
                    </div>
                    <span className="text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 py-1 rounded-full">
                      {card.improvement}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-slate-50 rounded-2xl p-7 border border-slate-200 flex flex-col gap-4">
                <StarRating filled={t.stars} />
                <blockquote className="text-slate-700 text-sm leading-relaxed italic flex-1">
                  {t.text}
                </blockquote>
                <div className="border-t border-slate-200 pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-slate-800 text-sm">{t.name}, {t.age}</p>
                      <p className="text-slate-400 text-xs">{t.location}</p>
                    </div>
                    <span className="text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-100 px-2 py-1 rounded-lg text-center leading-tight">
                      {t.result}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Aggregate rating */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 bg-amber-50 border border-amber-200 rounded-2xl px-8 py-6">
            <StarRating filled={5} />
            <p className="text-slate-800 font-bold text-lg">4.9 out of 5 stars</p>
            <span className="hidden sm:block text-slate-300">|</span>
            <p className="text-slate-500 text-sm">Based on <strong className="text-slate-700">2,400+ verified reviews</strong> — 96% would recommend to a friend</p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          BENEFITS BREAKDOWN
      ══════════════════════════════════════════════ */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-indigo-50">
        <div className="container-custom">
          <div className="text-center mb-16 space-y-4">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-indigo-600 bg-indigo-100 px-4 py-1.5 rounded-full">
              Why Choose Us
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900">
              Everything You Need. Nothing You Don&apos;t.
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Engineered to fit seamlessly into your life — no cords, no confusion, no compromises.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-50 group-hover:bg-indigo-100 flex items-center justify-center text-indigo-600 transition-colors mb-5">
                  {b.icon}
                </div>
                <h3 className="font-heading font-bold text-slate-900 text-lg mb-2">{b.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>

          {/* Comparison table teaser */}
          <div className="mt-12 bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="bg-slate-900 text-white text-center py-4">
              <p className="font-heading font-bold text-base">Scalp Stimulator vs. Alternatives</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-100">
                    <th className="text-left p-4 text-slate-500 font-semibold w-1/4">Feature</th>
                    {['Scalp Stimulator', 'Hair Serums', 'Clinic Treatments', 'Hair Transplant'].map((col) => (
                      <th key={col} className={`p-4 text-center font-semibold ${col === 'Scalp Stimulator' ? 'text-indigo-600' : 'text-slate-400'}`}>
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    ['Clinically proven', '✅', '⚠️', '✅', '✅'],
                    ['Zero side effects', '✅', '⚠️', '❌', '❌'],
                    ['At-home use', '✅', '✅', '❌', '❌'],
                    ['Results in < 12 wks', '✅', '❌', '✅', '✅'],
                    ['One-time cost', '✅', '❌', '❌', '❌'],
                  ].map(([label, ...vals]) => (
                    <tr key={label} className="hover:bg-slate-50 transition-colors">
                      <td className="p-4 text-slate-600 font-medium">{label}</td>
                      {vals.map((v, vi) => (
                        <td key={vi} className={`p-4 text-center text-base ${vi === 0 ? 'font-bold' : ''}`}>{v}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          FAQ
      ══════════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="container-custom max-w-2xl">
          <div className="text-center mb-12 space-y-3">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-slate-400">
              Got Questions?
            </span>
            <h2 className="font-heading text-3xl font-bold text-slate-900">
              Frequently Asked
            </h2>
          </div>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          FINAL CTA — 90-DAY GUARANTEE
      ══════════════════════════════════════════════ */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 relative overflow-hidden">
        {/* Decorative */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative container-custom max-w-3xl text-center space-y-8">

          {/* Guarantee badge */}
          <div className="flex justify-center">
            <div className="w-28 h-28 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex flex-col items-center justify-center shadow-2xl shadow-orange-500/30 border-4 border-white/10">
              <ShieldCheck className="h-8 w-8 text-white mb-1" />
              <p className="text-white font-bold text-xs leading-tight text-center">90-Day<br/>Guarantee</p>
            </div>
          </div>

          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white text-balance">
            Try It Risk-Free for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
              90 Days.
            </span>
          </h2>

          <p className="text-slate-300 text-lg leading-relaxed max-w-xl mx-auto">
            We&apos;re so confident in the science that if you don&apos;t see meaningful results within 90 days of consistent use, we&apos;ll give you a <strong className="text-white">full refund — no questions asked.</strong> We even cover return shipping.
          </p>

          {/* What's included */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-left space-y-3">
            {[
              'Scalp Stimulator Pro Series v2 device',
              'Charging dock & USB-C cable',
              'Quick-start guide + 12-week hair journal',
              '24/7 priority customer support',
              '90-day money-back guarantee',
              'Free tracked shipping worldwide',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                <span className="text-slate-200 text-sm">{item}</span>
              </div>
            ))}
          </div>

          {/* CTA button */}
          <Link
            href="/products"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold px-10 py-5 rounded-xl text-lg shadow-xl shadow-orange-500/30 transition-all duration-200 hover:scale-105 active:scale-100"
          >
            Get Yours Today — Risk Free
            <span className="text-xl">→</span>
          </Link>

          <p className="text-slate-400 text-sm">
            Trusted by 2,400+ customers · Ships in 1–2 business days
          </p>

          {/* Secure checkout row */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="flex items-center gap-2 text-slate-300 text-sm">
              <Lock className="h-4 w-4 text-emerald-400" />
              Secure 256-bit Checkout
            </div>
            {/* Payment method pills */}
            <div className="flex items-center gap-2">
              {['Visa', 'Mastercard', 'PayPal', 'Apple Pay', 'Amex'].map((pm) => (
                <span key={pm} className="bg-white/10 border border-white/20 text-white/70 text-xs font-bold px-3 py-1 rounded">
                  {pm}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
