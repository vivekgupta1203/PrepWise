"use client";

import { Brain, Target, BarChart3, Sparkles } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden bg-[#07070c]">
      {/* grid background (same as rest of site) */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#ffffff22_1px,transparent_1px),linear-gradient(to_bottom,#ffffff22_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="relative mx-auto max-w-6xl px-6 pt-16 pb-20 space-y-24">

        {/* HERO */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-semibold mb-6 text-white">
            About PrepWise
          </h1>

          <p className="text-lg text-white/70 leading-relaxed">
            PrepWise is an AI-powered mock interview platform that helps
            developers practice real interview scenarios, receive instant
            feedback, and track skill growth — all in one place.
          </p>
        </motion.section>

        {/* MISSION */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-semibold mb-5 text-white">
              Our Mission
            </h2>

            <p className="text-white/70 mb-4">
              Technical interviews are often unpredictable and stressful.
              PrepWise was created to make interview preparation structured,
              personalized, and accessible for every developer.
            </p>

            <p className="text-white/70">
              By combining AI-generated questions, realistic simulations, and
              actionable feedback, we help candidates become confident and
              interview-ready.
            </p>
          </motion.div>

          {/* feature glass card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-7 space-y-5 shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
          >
            <Feature icon={Brain} text="AI-generated interview questions" />
            <Feature icon={Target} text="Role-specific practice paths" />
            <Feature icon={BarChart3} text="Skill progress tracking" />
            <Feature icon={Sparkles} text="Instant performance feedback" />
          </motion.div>
        </section>

        {/* WHY */}
        <section>
          <h2 className="text-2xl font-semibold text-center mb-12 text-white">
            Why Developers Choose PrepWise
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <WhyCard
              title="Realistic Practice"
              desc="Simulate real technical interviews across frontend, backend, and system design roles."
              delay={0}
            />
            <WhyCard
              title="AI Feedback"
              desc="Receive structured feedback on answers, clarity, and technical depth."
              delay={0.1}
            />
            <WhyCard
              title="Track Growth"
              desc="Monitor improvement across skills and interviews over time."
              delay={0.2}
            />
          </div>
        </section>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-2xl font-semibold mb-4 text-white">
            Start Practicing with PrepWise
          </h2>

          <p className="text-white/70 mb-8">
            Build confidence and get interview-ready with AI-powered mock
            interviews.
          </p>

          <Link
            href="/"
            className="inline-flex items-center rounded-full bg-white text-black px-8 py-3 font-medium hover:scale-[1.04] active:scale-[0.97] transition"
          >
            Go to Home
          </Link>
        </motion.section>
      </div>
    </main>
  );
}

/* ---------- subcomponents ---------- */

function Feature({ icon: Icon, text }: any) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 border border-white/10">
        <Icon className="w-5 h-5 text-white" />
      </div>
      <p className="text-white/80">{text}</p>
    </div>
  );
}

function WhyCard({ title, desc, delay }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-6 hover:-translate-y-1 transition shadow-[0_15px_40px_rgba(0,0,0,0.4)]"
    >
      <h3 className="font-semibold mb-2 text-white">{title}</h3>
      <p className="text-sm text-white/70">{desc}</p>
    </motion.div>
  );
}