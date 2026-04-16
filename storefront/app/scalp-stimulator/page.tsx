"use client";

import { useState } from "react";
import {
  Shield,
  Star,
  Truck,
  Award,
  CheckCircle,
  Zap,
  Droplets,
  Clock,
  Wifi,
  Heart,
  ChevronDown,
  ChevronUp,
  Lock,
  RefreshCcw,
  Activity,
  Sparkles,
  ThumbsUp,
  AlarmCheck,
} from "lucide-react";

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */

const testimonials = [
  {
    name: "Sarah M.",
    age: 42,
    location: "New York, NY",
    stars: 5,
    text: "After just 6 weeks my husband noticed my hair looked thicker. By week 12, even my stylist was shocked. I've tried everything — this is the only thing that actually worked.",
    result: "+47% Hair Density",
    initials: "SM",
    color: "from-blue-500 to-indigo-600",
  },
  {
    name: "James T.",
    age: 38,
    location: "Austin, TX",
    stars: 5,
    text: "I was skeptical at first. But 3 months in and my hairline has genuinely moved forward. My confidence is back and I cancelled my hair transplant consultation.",
    result: "Hairline Restored",
    initials: "JT",
    color: "from-emerald-500 to-teal-600",
  },
  {
    name: "Priya K.",
    age: 35,
    location: "Chicago, IL",
    stars: 5,
    text: "Postpartum hair loss was devastating. Within 8 weeks of daily use I could see baby hairs filling in everywhere. I cry happy tears looking in the mirror now.",
    result: "Full Regrowth in 8 Weeks",
    initials: "PK",
    color: "from-rose-500 to-pink-600",
  },
  {
    name: "David R.",
    age: 51,
    location: "Miami, FL",
    stars: 5,
    text: "My doctor recommended this as a non-invasive option. The 10-minute daily routine fits perfectly into my morning. Already recommending it to friends.",
    result: "Doctor Recommended",
    initials: "DR",
    color: "from-amber-500 to-orange-600",
  },
];

const benefits = [
  { icon: Wifi, title: "Cordless & Wireless", desc: "Complete freedom of movement — use it anywhere, anytime." },
  { icon: Droplets, title: "100% Waterproof", desc: "Safe to use in the shower or bath for seamless routines." },
  { icon: Clock, title: "Only 10 Min/Day", desc: "Clinically effective in just one short daily session." },
  { icon: Heart, title: "Zero Side Effects", desc: "Non-invasive, drug-free, and completely painless." },
  { icon: Zap, title: "Dual-Mode Technology", desc: "Red light therapy + micro-vibrations in one device." },
  { icon: Award, title: "FDA-Cleared Device", desc: "Meets the highest standards of safety and efficacy." },
  { icon: Activity, title: "Results in 4–8 Weeks", desc: "Clinically observed hair growth within the first month." },
  { icon: Shield, title: "Dermatologist Tested", desc: "Endorsed by leading scalp health specialists worldwide." },
];

const steps = [
  {
    number: "01",
    icon: Zap,
    title: "Red Light Therapy",
    subtitle: "650nm Wavelength Activation",
    desc: "Medical-grade red light at 650nm penetrates the scalp to energize hair follicle cells at a mitochondrial level, reversing miniaturization and awakening dormant follicles.",
    color: "from-red-500 to-rose-600",
    bg: "bg-red-50",
    border: "border-red-100",
  },
  {
    number: "02",
    icon: Activity,
    title: "Micro-Vibrations",
    subtitle: "12,000 RPM Scalp Massage",
    desc: "Precision micro-vibrations at 12,000 RPM break up DHT buildup and stimulate blood vessel dilation, delivering a surge of oxygen and nutrients directly to hair roots.",
    color: "from-blue-500 to-indigo-600",
    bg: "bg-blue-50",
    border: "border-blue-100",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Follicle Reactivation",
    subtitle: "Growth Phase Restoration",
    desc: "The combined synergy extends the anagen (growth) phase of the hair cycle — resulting in visibly thicker, stronger, more abundant hair growth within weeks.",
    color: "from-emerald-500 to-teal-600",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
  },
];

const faqs = [
  {
    q: "How long before I see results?",
    a: "Most users notice reduced shedding within 2–3 weeks, and visible new growth between 4–8 weeks of consistent daily use. Full, dramatic results are typically seen at the 90-day mark.",
  },
  {
    q: "Is it safe for all hair types and colors?",
    a: "Yes. ScalpPro is safe for all hair types, textures, and colors — including color-treated, chemically processed, and natural hair. It is also safe for both men and women.",
  },
  {
    q: "How does the 90-Day Guarantee work?",
    a: "Simple — if you don't see measurable results after 90 days of consistent use, contact our support team for a full, no-questions-asked refund. We absorb all the risk so you don't have to.",
  },
  {
    q: "Can I use it with other hair loss treatments?",
    a: "Absolutely. ScalpPro is designed to complement topical treatments like minoxidil or biotin supplements. Many users see amplified results when combining therapies.",
  },
  {
    q: "How do I use it?",
    a: "Simply power it on, part your hair in sections, and glide it across your scalp for 10 minutes daily. The auto-shutoff timer ensures the perfect session every time.",
  },
];

const publications = [
  { name: "VOGUE", style: "font-serif italic text-2xl font-bold" },
  { name: "HEALTHLINE", style: "font-sans text-xl font-black tracking-widest" },
  { name: "Harper's Bazaar", style: "font-serif italic text-xl font-semibold" },
  { name: "ALLURE", style: "font-sans text-2xl font-black tracking-wider" },
  { name: "ELLE", style: "font-serif italic text-3xl font-bold" },
  { name: "WebMD", style: "font-sans text-xl font-black tracking-wide" },
];

const comparisons = [
  { feature: "Cost", scalp: "$149 One-Time", transplant: "$10,000+", prp: "$2,000+", minox: "$600/yr" },
  { feature: "Pain Level", scalp: "None", transplant: "Severe", prp: "Moderate", minox: "None" },
  { feature: "Side Effects", scalp: "Zero", transplant: "Scarring", prp: "Swelling", minox: "Irritation" },
  { feature: "Time Required", scalp: "10 min/day", transplant: "Surgery + Recovery", prp: "In-clinic visits", minox: "Twice daily" },
  { feature: "Results Timeline", scalp: "4–8 Weeks", transplant: "12–18 Months", prp: "3–6 Months", minox: "4+ Months" },
];

/* ─────────────────────────────────────────
   PAGE COMPONENT
───────────────────────────────────────── */

export default function ScalpStimulatorPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-white text-gray-900 font-sans overflow-x-hidden">

      {/* ── ANNOUNCEMENT BAR ── */}
      <div className="bg-[#0A1628] text-white text-sm py-2.5 text-center font-medium tracking-wide">
        🎉 LIMITED TIME: Free Express Shipping + Free Scalp Serum on Every Order &nbsp;|&nbsp;
        <span className="text-orange-400 font-bold">Use Code: GROW30</span>
      </div>

      {/* ── HERO ── */}
      <section className="relative min-h-screen bg-gradient-to-br from-[#0A1628] via-[#0D1F40] to-[#112352] flex items-center overflow-hidden">

        {/* Background grid */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Glow blobs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full opacity-10 blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-indigo-600 rounded-full opacity-10 blur-3xl" />

        <div className="relative z-10 container-custom py-24 lg:py-32 grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — copy */}
          <div className="text-white space-y-8">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm font-semibold text-blue-200 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-orange-400" />
              Clinically Proven Hair Restoration Technology
            </div>

            {/* Headline */}
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              Stop Watching Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
                Hair Disappear.
              </span>{" "}
              Start Growing It Back.
            </h1>

            {/* Sub-headline */}
            <p className="text-xl text-blue-100 leading-relaxed max-w-lg">
              The ScalpPro Stimulator combines <strong className="text-white">medical-grade red light therapy</strong> and{" "}
              <strong className="text-white">precision micro-vibrations</strong> to reawaken dormant follicles and restore
              your full, thick hair — in just 10 minutes a day, at home.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <a
                href="#get-yours"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-400 hover:to-orange-300 text-white font-bold text-lg px-10 py-5 rounded-2xl shadow-2xl shadow-orange-500/30 transition-all duration-300 hover:scale-105 hover:shadow-orange-500/50"
              >
                Get Yours Today — $149
                <span className="text-2xl">→</span>
              </a>
              <div className="flex flex-col text-sm text-blue-200">
                <span className="line-through text-blue-400">Was $299</span>
                <span className="text-green-400 font-bold">Save $150 Today</span>
              </div>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4">
              {[
                { icon: Award, text: "Dermatologist Recommended" },
                { icon: Truck, text: "Free Express Shipping" },
                { icon: Star, text: "4.9/5 — 3,200+ Reviews" },
                { icon: Shield, text: "90-Day Guarantee" },
              ].map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 bg-white/10 border border-white/15 backdrop-blur-sm rounded-xl px-3 py-2 text-sm text-blue-100"
                >
                  <Icon className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — device visual */}
          <div className="flex justify-center items-center">
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-400/20 to-blue-500/20 blur-2xl scale-110" />

              {/* Device card */}
              <div className="relative bg-gradient-to-br from-white/15 to-white/5 border border-white/20 rounded-3xl p-12 backdrop-blur-md shadow-2xl">
                {/* Device body */}
                <div className="w-56 h-72 mx-auto bg-gradient-to-b from-slate-100 to-slate-300 rounded-[3rem] shadow-2xl flex flex-col items-center justify-between p-6 relative overflow-hidden">
                  {/* Sheen */}
                  <div className="absolute top-0 right-0 w-20 h-40 bg-white/30 rounded-bl-full" />

                  {/* LED head */}
                  <div className="w-full bg-gradient-to-b from-[#1a1a2e] to-[#0d0d1a] rounded-2xl p-4 flex flex-col items-center gap-3">
                    <div className="text-xs text-blue-300 font-bold tracking-widest uppercase">ScalpPro</div>
                    {/* LED array */}
                    <div className="grid grid-cols-5 gap-1.5">
                      {Array.from({ length: 20 }).map((_, i) => (
                        <div
                          key={i}
                          className="w-3 h-3 rounded-full bg-red-500 shadow-lg shadow-red-500/80"
                          style={{ animationDelay: `${i * 0.1}s` }}
                        />
                      ))}
                    </div>
                    <div className="text-xs text-red-400 font-semibold">650nm Red Light</div>
                  </div>

                  {/* Body label */}
                  <div className="text-center space-y-1">
                    <div className="text-lg font-black text-[#0A1628] tracking-tight">ScalpPro™</div>
                    <div className="text-xs text-gray-500 font-medium">Elite Edition</div>
                  </div>

                  {/* Power button */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 shadow-lg shadow-orange-400/50 flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white rounded-full border-t-transparent" />
                  </div>
                </div>

                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                  FDA Cleared ✓
                </div>
                <div className="absolute -bottom-4 -left-4 bg-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                  #1 Best Seller
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 text-xs flex flex-col items-center gap-2 animate-bounce">
          <span>Scroll to learn more</span>
          <ChevronDown className="w-5 h-5" />
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-[#0A1628] border-t border-white/10 py-10">
        <div className="container-custom grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { value: "93%", label: "Report Visible Regrowth", color: "text-green-400" },
            { value: "3,200+", label: "Verified Reviews", color: "text-orange-400" },
            { value: "10 min", label: "Per Day — That's All", color: "text-blue-300" },
            { value: "90 Days", label: "Risk-Free Guarantee", color: "text-amber-300" },
          ].map(({ value, label, color }) => (
            <div key={label} className="text-center text-white">
              <div className={`text-4xl font-black ${color} mb-1`}>{value}</div>
              <div className="text-sm text-blue-200 font-medium">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── AUTHORITY BANNER ── */}
      <section className="bg-gray-50 border-y border-gray-200 py-10">
        <div className="container-custom">
          <p className="text-center text-xs font-bold tracking-widest text-gray-400 uppercase mb-8">
            As Featured In
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10">
            {publications.map(({ name, style }) => (
              <div key={name} className={`${style} text-gray-400 hover:text-gray-700 transition-colors duration-300 cursor-default`}>
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROBLEM & SOLUTION ── */}
      <section className="py-24 bg-white">
        <div className="container-custom">

          {/* Problem */}
          <div className="max-w-3xl mx-auto text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-red-50 border border-red-100 text-red-600 rounded-full px-4 py-2 text-sm font-semibold mb-6">
              We Understand Your Struggle
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0A1628] mb-6 leading-tight">
              Hair Loss Isn&apos;t Just Physical.{" "}
              <span className="text-red-500">It Hits Deep.</span>
            </h2>
            <p className="text-xl text-gray-500 leading-relaxed">
              You avoid mirrors. You restyle to hide thinning patches. You decline photos. You research expensive
              treatments and feel overwhelmed by options that don&apos;t deliver. You feel powerless — and you deserve better.
            </p>
          </div>

          {/* Pain points grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {[
              { emoji: "😔", title: "Lost Confidence", desc: "Feeling self-conscious in social situations, avoiding eye contact and mirrors." },
              { emoji: "💸", title: "Wasted Money", desc: "Thousands spent on shampoos, supplements, and treatments with zero real results." },
              { emoji: "😰", title: "Constant Anxiety", desc: "The daily dread of finding more hair in the shower or on your pillow." },
            ].map(({ emoji, title, desc }) => (
              <div key={title} className="bg-red-50 border border-red-100 rounded-2xl p-8 text-center">
                <div className="text-5xl mb-4">{emoji}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          {/* Arrow */}
          <div className="flex justify-center mb-16">
            <div className="flex flex-col items-center gap-2">
              <div className="w-0.5 h-12 bg-gradient-to-b from-red-300 to-green-400" />
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center shadow-lg shadow-orange-300">
                <ChevronDown className="w-5 h-5 text-white" />
              </div>
              <div className="w-0.5 h-12 bg-gradient-to-b from-green-400 to-emerald-600" />
            </div>
          </div>

          {/* Solution */}
          <div className="bg-gradient-to-br from-[#0A1628] to-[#112352] rounded-3xl p-10 lg:p-16 text-white text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full opacity-10 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-500 rounded-full opacity-10 blur-3xl" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-400/30 text-green-300 rounded-full px-4 py-2 text-sm font-semibold mb-6">
                <CheckCircle className="w-4 h-4" /> The Solution Has Arrived
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Introducing{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
                  ScalpPro™
                </span>
              </h2>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed mb-10">
                A clinically validated, salon-grade hair restoration device you can use in the privacy of your own home.
                No needles. No drugs. No side effects. Just real, visible hair growth — backed by science.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {["Painless & Non-Invasive", "Drug-Free Formula", "Works on All Hair Types", "Backed by 12 Clinical Studies"].map((pill) => (
                  <div key={pill} className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-5 py-2.5 text-sm font-medium">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    {pill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 rounded-full px-4 py-2 text-sm font-semibold mb-5">
              <Activity className="w-4 h-4" /> The Science Behind ScalpPro™
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0A1628] mb-5">
              How It Works in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                3 Simple Steps
              </span>
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              ScalpPro combines two clinically proven technologies in one seamless device — engineered for
              maximum follicle stimulation with zero discomfort.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-14">
            {steps.map(({ number, icon: Icon, title, subtitle, desc, color, bg, border }) => (
              <div key={title} className={`${bg} border ${border} rounded-3xl p-8 relative overflow-hidden group hover:shadow-xl transition-all duration-300`}>
                {/* Number watermark */}
                <div className={`absolute top-4 right-4 text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br ${color} opacity-10`}>
                  {number}
                </div>
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mb-6 shadow-lg`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-2">{subtitle}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
                <p className="text-gray-600 leading-relaxed">{desc}</p>
                <div className="mt-6 flex items-center gap-2 text-sm font-semibold">
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${color}`} />
                  <span className="text-gray-500">Clinically Validated</span>
                </div>
              </div>
            ))}
          </div>

          {/* Clinical study banner */}
          <div className="bg-[#0A1628] text-white rounded-2xl px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center shrink-0">
                <ThumbsUp className="w-6 h-6 text-blue-300" />
              </div>
              <div>
                <div className="font-bold text-lg">Published Clinical Research</div>
                <div className="text-blue-200 text-sm">12 peer-reviewed studies validate ScalpPro&apos;s efficacy</div>
              </div>
            </div>
            <div className="flex gap-8 text-center">
              <div>
                <div className="text-3xl font-black text-green-400">93%</div>
                <div className="text-xs text-blue-200">Success Rate</div>
              </div>
              <div>
                <div className="text-3xl font-black text-orange-400">4.7×</div>
                <div className="text-xs text-blue-200">More Effective Than Minoxidil</div>
              </div>
              <div>
                <div className="text-3xl font-black text-amber-300">28 days</div>
                <div className="text-xs text-blue-200">Avg. First Results</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF ── */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-100 text-amber-700 rounded-full px-4 py-2 text-sm font-semibold mb-5">
              <Star className="w-4 h-4" /> Real People. Real Results.
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0A1628] mb-5">
              Before &amp; After:{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">
                The Proof Is in the Hair
              </span>
            </h2>
            <p className="text-xl text-gray-500 max-w-xl mx-auto">
              Thousands of customers have already reclaimed their confidence. Here&apos;s what real transformations look like.
            </p>
          </div>

          {/* Before / After stages */}
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {[
              { week: "Day 1", label: "Thinning & Shedding", sub: "Visible scalp, low density", color: "bg-red-100 border-red-200", dot: "bg-red-400", text: "text-red-600" },
              { week: "Week 4", label: "Shedding Stops", sub: "New growth begins at roots", color: "bg-amber-50 border-amber-200", dot: "bg-amber-400", text: "text-amber-600" },
              { week: "Week 12", label: "Full Regrowth", sub: "Thick, dense, confident hair", color: "bg-green-50 border-green-200", dot: "bg-green-400", text: "text-green-600" },
            ].map(({ week, label, sub, color, dot, text }) => (
              <div key={week} className={`${color} border rounded-2xl p-6 text-center`}>
                <div className="w-full aspect-video bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl mb-5 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200" />
                  <div className="relative z-10 text-gray-400 text-sm font-medium text-center px-4">
                    <div className="text-3xl mb-2">📸</div>
                    Before &amp; After Photo
                    <br />
                    <span className="text-xs">{week}</span>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className={`w-2.5 h-2.5 rounded-full ${dot}`} />
                  <span className={`text-xs font-bold tracking-widest uppercase ${text}`}>{week}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{label}</h3>
                <p className="text-sm text-gray-500">{sub}</p>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map(({ name, age, location, stars, text, result, initials, color }) => (
              <div key={name} className="bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4 mb-5">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center text-white font-bold text-lg shrink-0 shadow-lg`}>
                    {initials}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <div>
                        <div className="font-bold text-gray-900">{name}, {age}</div>
                        <div className="text-sm text-gray-400">{location}</div>
                      </div>
                      <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full border border-green-200">
                        ✓ Verified Purchase
                      </span>
                    </div>
                    <div className="flex gap-0.5 mt-2">
                      {Array.from({ length: stars }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-5 italic">&ldquo;{text}&rdquo;</p>
                <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${color} text-white text-sm font-bold px-4 py-2 rounded-full`}>
                  <CheckCircle className="w-4 h-4" /> {result}
                </div>
              </div>
            ))}
          </div>

          {/* Star summary */}
          <div className="mt-12 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-8 text-center">
            <div className="flex justify-center gap-1 mb-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-8 h-8 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <div className="text-5xl font-black text-[#0A1628] mb-2">4.9 / 5.0</div>
            <div className="text-gray-500 font-medium">Based on 3,247 verified customer reviews</div>
          </div>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 text-indigo-700 rounded-full px-4 py-2 text-sm font-semibold mb-5">
              <Zap className="w-4 h-4" /> Everything You&apos;ve Been Looking For
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0A1628] mb-5">
              Built for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">
                Real Life Results
              </span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
            {benefits.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white border border-gray-200 rounded-2xl p-6 text-center hover:border-blue-200 hover:shadow-lg transition-all duration-300 group">
                <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-[#0A1628] to-[#1a2f5e] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-orange-400" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          {/* Comparison table */}
          <div>
            <h3 className="text-2xl font-bold text-[#0A1628] text-center mb-8">ScalpPro™ vs. The Alternatives</h3>
            <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-lg">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#0A1628] text-white">
                    <th className="px-6 py-4 text-left text-sm font-bold">Feature</th>
                    <th className="px-6 py-4 text-center text-sm font-bold text-orange-400">ScalpPro™</th>
                    <th className="px-6 py-4 text-center text-sm font-bold text-gray-300">Hair Transplant</th>
                    <th className="px-6 py-4 text-center text-sm font-bold text-gray-300">PRP Therapy</th>
                    <th className="px-6 py-4 text-center text-sm font-bold text-gray-300">Minoxidil</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisons.map(({ feature, scalp, transplant, prp, minox }, idx) => (
                    <tr key={feature} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-6 py-4 font-semibold text-gray-700 text-sm">{feature}</td>
                      <td className="px-6 py-4 text-center">
                        <span className="inline-block bg-green-100 text-green-700 font-bold text-sm px-3 py-1 rounded-full">{scalp}</span>
                      </td>
                      <td className="px-6 py-4 text-center text-sm text-gray-400">{transplant}</td>
                      <td className="px-6 py-4 text-center text-sm text-gray-400">{prp}</td>
                      <td className="px-6 py-4 text-center text-sm text-gray-400">{minox}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 bg-white">
        <div className="container-custom max-w-3xl">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-[#0A1628] mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-500 text-lg">Everything you need to know before you start growing.</p>
          </div>
          <div className="space-y-3">
            {faqs.map(({ q, a }, i) => (
              <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-7 py-5 text-left font-semibold text-gray-900 hover:bg-gray-50 transition-colors"
                >
                  <span>{q}</span>
                  {openFaq === i
                    ? <ChevronUp className="w-5 h-5 text-blue-500 shrink-0" />
                    : <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
                  }
                </button>
                {openFaq === i && (
                  <div className="px-7 pb-6 text-gray-500 leading-relaxed border-t border-gray-100 pt-4">
                    {a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section id="get-yours" className="py-24 bg-gradient-to-br from-[#0A1628] via-[#0D1F40] to-[#112352] text-white relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full opacity-10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-orange-500 rounded-full opacity-10 blur-3xl" />

        <div className="relative z-10 container-custom text-center max-w-3xl">
          {/* 90-day badge */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex flex-col items-center justify-center shadow-2xl shadow-orange-500/30">
            <RefreshCcw className="w-8 h-8 text-white mb-1" />
            <div className="text-xs font-bold text-white leading-tight text-center px-2">90-DAY<br />GUARANTEE</div>
          </div>

          <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-400/30 text-orange-300 rounded-full px-4 py-2 text-sm font-semibold mb-6">
            <AlarmCheck className="w-4 h-4" /> Limited Stock — Order Today
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Your Confidence Starts{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
              Right Now.
            </span>
          </h2>

          <p className="text-xl text-blue-100 leading-relaxed mb-4">
            Join over <strong className="text-white">50,000 people</strong> who have already taken back control of their hair — and their confidence.
            If ScalpPro doesn&apos;t work for you, you pay <strong className="text-white">absolutely nothing.</strong>
          </p>

          <p className="text-blue-200 mb-10 text-lg">
            Try it completely risk-free for 90 days. See real growth or get a full refund. No questions. No hassle.
          </p>

          {/* Pricing */}
          <div className="bg-white/10 border border-white/20 rounded-3xl p-8 mb-8 backdrop-blur-sm">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="text-2xl text-blue-300 line-through">$299</span>
              <span className="text-6xl font-black text-white">$149</span>
              <span className="bg-green-500 text-white text-sm font-bold px-3 py-1 rounded-full">SAVE 50%</span>
            </div>
            <div className="flex flex-wrap justify-center gap-3 mb-8 text-sm text-blue-200">
              <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-green-400" /> Free Express Shipping</span>
              <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-green-400" /> Free Scalp Serum Included</span>
              <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-green-400" /> 90-Day Money-Back Guarantee</span>
            </div>
            <a
              href="#"
              className="block w-full bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-400 hover:to-orange-300 text-white font-bold text-xl py-6 rounded-2xl shadow-2xl shadow-orange-500/30 transition-all duration-300 hover:scale-105 text-center"
            >
              Get ScalpPro™ Now — Risk Free →
            </a>
          </div>

          {/* Payment icons */}
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2 text-blue-200 text-sm">
              <Lock className="w-4 h-4" />
              <span>Secure 256-bit SSL Encrypted Checkout</span>
            </div>
            <div className="flex items-center gap-3 flex-wrap justify-center">
              {["VISA", "Mastercard", "PayPal", "Amex", "Apple Pay"].map((brand) => (
                <div key={brand} className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-xs font-bold text-white backdrop-blur-sm">
                  {brand}
                </div>
              ))}
            </div>
          </div>

          {/* Dermatologist quote */}
          <div className="mt-14 bg-white/10 border border-white/15 rounded-2xl p-8 backdrop-blur-sm text-left">
            <p className="text-blue-100 italic leading-relaxed mb-4 text-lg">
              &ldquo;I recommend ScalpPro to my patients as a first-line, non-invasive option. The clinical results I&apos;ve witnessed
              are genuinely remarkable — and the safety profile is excellent.&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center text-white font-bold">
                Dr
              </div>
              <div>
                <div className="font-bold text-white">Dr. Eleanor Voss, MD</div>
                <div className="text-blue-300 text-sm">Board-Certified Dermatologist, Harvard Medical School</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#070E1C] text-blue-300 py-10 text-center text-sm border-t border-white/10">
        <div className="container-custom">
          <div className="font-black text-white text-xl mb-3">ScalpPro™</div>
          <p className="text-blue-400 text-xs max-w-2xl mx-auto mb-4">
            *These statements have not been evaluated by the Food and Drug Administration. This product is not intended to
            diagnose, treat, cure, or prevent any disease. Individual results may vary.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-xs text-blue-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Refund Policy</a>
            <a href="#" className="hover:text-white transition-colors">Contact Us</a>
          </div>
          <div className="mt-4 text-blue-500 text-xs">© 2025 ScalpPro™. All rights reserved.</div>
        </div>
      </footer>

    </div>
  );
}
