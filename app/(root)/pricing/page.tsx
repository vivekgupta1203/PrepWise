"use client";

import { motion } from "framer-motion";

export default function PricingPage() {
  return (
    <main className="relative overflow-hidden bg-[#07070c]">
      {/* TOP GLOW */}
      <div className="absolute inset-x-0 top-[-200px] h-[420px] bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.06),transparent_70%)]" />

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#ffffff22_1px,transparent_1px),linear-gradient(to_bottom,#ffffff22_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* HERO */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-7xl px-6 pt-24 pb-24 text-center"
      >
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight">
          How much is your dream job worth?
        </h1>

        <p className="mt-6 text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
          Try PrepWise free, then upgrade for unlimited AI interviews.
        </p>

        {/* PRICING */}
        <div className="mt-20 grid gap-10 md:grid-cols-2 max-w-5xl mx-auto">
          
          {/* FREE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0 }}
            className="group relative rounded-[28px] border border-white/10 bg-white/[0.035] backdrop-blur-xl p-10 flex flex-col shadow-[0_20px_60px_rgba(0,0,0,0.45)] transition-all duration-300 hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_30px_90px_rgba(0,0,0,0.65)]"
          >
            <div className="pointer-events-none absolute inset-0 rounded-[28px] opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.08),transparent_70%)]" />

            <p className="text-white/60 text-sm">Start for free</p>

            <div className="mt-3 text-5xl font-semibold text-white">$0</div>

            <ul className="mt-10 space-y-4 text-white/70 text-sm text-left">
              <li>✓ Personalised to your CV</li>
              <li>✓ Auto import job listing</li>
              <li>✓ Personalised interview questions</li>
              <li>✓ Limited interview time</li>
            </ul>

            <button className="mt-12 rounded-full border border-white/20 px-6 py-3 text-white/90 bg-white/[0.03] hover:bg-white/10 hover:border-white/30 active:scale-[0.98] transition-all duration-200 shadow-[0_0_0_rgba(0,0,0,0)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.45)]">
              Start free trial
            </button>
          </motion.div>

          {/* PRO */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative rounded-[28px] border border-white/15 bg-white/[0.06] backdrop-blur-xl p-10 flex flex-col shadow-[0_30px_90px_rgba(0,0,0,0.55)] transition-all duration-300 hover:-translate-y-2 hover:border-white/30 hover:shadow-[0_40px_120px_rgba(0,0,0,0.8)]"
          >
            <div className="pointer-events-none absolute inset-0 rounded-[28px] opacity-60 group-hover:opacity-100 transition bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.12),transparent_70%)]" />

            <div className="pointer-events-none absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-medium text-white backdrop-blur">
              Most popular
            </div>

            <p className="text-white/80 text-sm">Unlimited</p>

            <div className="mt-3 text-5xl font-semibold text-white">
              $19.99
              <span className="text-lg font-medium text-white/70"> / week</span>
            </div>

            <ul className="mt-10 space-y-4 text-white/85 text-sm text-left">
              <li>✓ Unlimited interviews</li>
              <li>✓ Unlimited feedback</li>
              <li>✓ Progress through all levels</li>
              <li>✓ Easily cancel anytime</li>
              <li>✓ Secure payments</li>
            </ul>

            <button className="mt-12 rounded-full bg-white text-black font-semibold px-6 py-3 hover:bg-white hover:scale-[1.03] active:scale-[0.97] transition-all duration-200 shadow-[0_8px_25px_rgba(255,255,255,0.15)] hover:shadow-[0_12px_35px_rgba(255,255,255,0.25)]">
              Get unlimited interviews
            </button>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}