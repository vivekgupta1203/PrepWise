"use client";

import FAQSection from "@/components/home/FAQSection";
import FloatingCards from "@/components/home/FloatingCards";
import { Check } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

/* DATA */
const practiceCards = [
  {
    icon: "📞",
    title: "Voice chat",
    desc: "Real-time voice conversation just like a real interview.",
    badgeText: "Realistic voice AI",
    bg: "bg-emerald-500/15",
    badge: "bg-emerald-500/20 text-emerald-300",
  },
  {
    icon: "🧠",
    title: "Powerful interviewer",
    desc: "Questions from resume, tech stack, and real job scenarios.",
    badgeText: "CV-aware questions",
    bg: "bg-indigo-500/15",
    badge: "bg-indigo-500/20 text-indigo-300",
  },
  {
    icon: "👍",
    title: "Constructive feedback",
    desc: "Honest AI scoring and actionable improvement tips.",
    badgeText: "Improve technique",
    bg: "bg-amber-500/15",
    badge: "bg-amber-500/20 text-amber-300",
  },
  {
    icon: "📈",
    title: "Get better",
    desc: "Progress from beginner to advanced interview levels.",
    badgeText: "Master difficulty levels",
    bg: "bg-purple-500/15",
    badge: "bg-purple-500/20 text-purple-300",
  },
];

const testimonials = [
  {
    name: "Riya Sharma",
    role: "Frontend Developer",
    avatar: <img src="/avatars/user1.png" className="w-12 h-12 rounded-full object-cover" />,
    text: "PrepWise really pushed me through realistic interviews. I finally felt confident and cracked my frontend role.",
  },
  {
    name: "Anonymous",
    role: "Software Engineer",
    avatar: <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white/60">👤</div>,
    text: "I was super nervous before interviews. Practicing with PrepWise AI made me comfortable answering technical questions.",
  },
  {
    name: "Amit Verma",
    role: "Backend Developer",
    avatar: <img src="/avatars/user3.jpg" className="w-12 h-12 rounded-full object-cover" />,
    text: "The AI interviewer asked exactly what appeared in my real interviews. My problem-solving skills improved a lot.",
  },
  {
    name: "Neha Kapoor",
    role: "Data Analyst",
    avatar: <img src="/avatars/user4.png" className="w-12 h-12 rounded-full object-cover" />,
    text: "PrepWise feedback was incredibly detailed. It showed my weak points and helped me prepare smarter.",
  },
];

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-[#07070c]">
      {/* GRID */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#ffffff22_1px,transparent_1px),linear-gradient(to_bottom,#ffffff22_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* ================= HERO ================= */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative flex flex-col items-center text-center px-6 pt-12 pb-28"
      >
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium text-white/70 backdrop-blur">
          ✨ Voice-powered AI interview practice
        </div>

        <h1 className="max-w-[980px] text-[56px] md:text-[72px] lg:text-[104px] font-bold tracking-[-0.02em] leading-[0.95] text-white">
          Ace your next interview!
        </h1>

        <p className="mt-8 max-w-[720px] text-[18px] md:text-[20px] leading-relaxed text-white/65">
          Talk with your personalised AI powered interview coach. Practice in a
          real-time interview and get actionable feedback.
        </p>

        <Link
          href="/dashboard"
          className="mt-10 inline-flex items-center justify-center rounded-full px-10 py-4 text-lg font-medium text-white bg-gradient-to-r from-indigo-500 to-blue-500 shadow-[0_8px_30px_rgba(80,70,255,0.35)] transition hover:scale-[1.04]"
        >
          Start my interview →
        </Link>

        {/* HERO VISUAL */}
        <div className="relative mt-40 flex items-center justify-center">
          <div className="absolute w-[920px] h-[420px] bg-gradient-to-r from-indigo-500/30 via-purple-500/30 to-pink-500/30 blur-3xl rounded-full opacity-70" />

          <div className="relative z-10 rounded-[28px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_40px_120px_rgba(80,70,255,0.35)]">
            <img
              src="/dashboard-preview.png"
              alt="PrepWise dashboard"
              className="w-[900px] max-w-full rounded-[28px] object-cover"
            />
          </div>

          <FloatingCards />
        </div>
      </motion.section>

      {/* ================= PERSONALISED ================= */}
      <section className="relative mx-auto mt-20 max-w-6xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CARDS */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {[
              {
                icon: "📄",
                title: "Resume uploaded",
                desc: "AI tailors questions from your experience",
                highlight: false,
              },
              {
                icon: "🧠",
                title: "Role personalised",
                desc: "Interview adapts to your target role & stack",
                highlight: true,
              },
              {
                icon: "🎚️",
                title: "Difficulty selection",
                desc: "Choose beginner to advanced level",
                highlight: false,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`flex items-start gap-4 rounded-2xl p-6 backdrop-blur-xl border ${
                  item.highlight
                    ? "border-indigo-500/30 bg-indigo-500/10"
                    : "border-white/10 bg-white/5"
                }`}
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-indigo-500/20 text-xl">
                  {item.icon}
                </div>
                <div>
                  <p className="text-white font-medium text-lg">
                    {item.title}
                  </p>
                  <p className="text-white/60 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* RIGHT TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 backdrop-blur mb-6">
              ✨ Personalised interview flow
            </div>

            <h2 className="text-4xl md:text-5xl font-semibold text-white">
              Instant personalised interviews
            </h2>

            <p className="mt-6 text-white/70 text-lg max-w-lg">
              Upload your resume and choose your target role. PrepWise creates a
              realistic AI interview tailored to your skills and job
              requirements.
            </p>

            <div className="mt-8 flex gap-6 text-white/70">
              <div>✔ Tailored to your resume</div>
              <div>✔ Personalised to your role</div>
            </div>

            <div className="mt-8">
              <Link
                href="/dashboard"
                className="text-indigo-400 hover:text-indigo-300"
              >
                Start interview now →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= FEEDBACK ================= */}
      <section className="relative mx-auto mt-40 max-w-6xl px-6 pb-32">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 backdrop-blur mb-6">
              Feedback
            </div>

            <h2 className="text-4xl md:text-5xl font-semibold text-white leading-tight">
              Get actionable, constructive feedback
            </h2>

            <p className="mt-6 text-white/70 text-lg max-w-xl">
              PrepWise analyzes your responses and provides detailed feedback so
              you can improve communication, technical depth, and problem
              solving across interview rounds.
            </p>

            <div className="mt-8 flex flex-wrap gap-6 text-white/70">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4" /> Direct feedback
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4" /> 4 difficulty levels
              </div>
            </div>

            <div className="mt-8">
              <Link
                href="/pricing"
                className="text-indigo-400 hover:text-indigo-300"
              >
                See Pricing →
              </Link>
            </div>
          </motion.div>

          {/* RIGHT BARS */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {[
              { label: "Communication", color: "bg-emerald-400", w: "90%" },
              { label: "Cultural fit", color: "bg-purple-400", w: "75%" },
              { label: "Problem solving", color: "bg-rose-400", w: "85%" },
              { label: "Technical ability", color: "bg-indigo-400", w: "65%" },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5"
              >
                <div className="flex justify-between text-sm text-white/70 mb-3">
                  <span>{s.label}</span>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className={`${s.color} h-2 rounded-full`}
                    style={{ width: s.w }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= PRACTICE ================= */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto mt-20 max-w-6xl px-6 pb-40"
      >
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 backdrop-blur mb-8">
            🚀 Get the job you deserve
          </div>
        </div>

        <h2 className="text-center text-4xl md:text-5xl font-semibold text-white">
          Practice makes perfect
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-center text-white/70 text-lg">
          Work your way through PrepWise AI interview levels. Improve weak
          areas, strengthen core skills, and master real interview performance.
        </p>

        <div className="mt-16 grid md:grid-cols-2 gap-10">
          {practiceCards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6"
            >
              <div className={`w-12 h-12 flex items-center justify-center rounded-xl ${card.bg}`}>
                {card.icon}
              </div>
              <div>
                <p className="text-white font-medium text-lg">{card.title}</p>
                <p className="text-white/60 text-sm mt-1">{card.desc}</p>
                <span className={`inline-block mt-3 text-xs px-3 py-1 rounded-full ${card.badge}`}>
                  {card.badgeText}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="relative mx-auto mt-10 max-w-6xl px-6 pb-40">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 backdrop-blur">
            💬 Testimonials
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center text-4xl md:text-5xl font-semibold text-white leading-tight"
        >
          Do you want to be the only candidate that didn’t prepare?
        </motion.h2>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                {t.avatar}
                <div>
                  <p className="text-white font-medium">{t.name}</p>
                  <p className="text-white/50 text-sm">{t.role}</p>
                </div>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">{t.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <FAQSection />
    </main>
  );
}

