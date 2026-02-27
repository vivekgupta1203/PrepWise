"use client";

import { Mail, MessageSquare, HelpCircle } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="relative overflow-hidden bg-[#07070c]">
      {/* GRID */}
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
            Contact PrepWise
          </h1>

          <p className="text-lg text-white/70 leading-relaxed">
            Have questions, feedback, or need help with your interview
            preparation? We’d love to hear from you.
          </p>
        </motion.section>

        {/* CONTACT OPTIONS */}
        <section className="grid md:grid-cols-3 gap-6">
          {contactOptions.map((opt, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-6 text-center space-y-4 shadow-[0_15px_40px_rgba(0,0,0,0.4)]"
            >
              <opt.icon className="mx-auto text-white/80" />
              <h3 className="font-semibold text-white">{opt.title}</h3>
              <p className="text-sm text-white/60">{opt.desc}</p>
              <p className="text-sm text-white/80">{opt.email}</p>
            </motion.div>
          ))}
        </section>

        {/* CONTACT FORM */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-8 space-y-6 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
            <h2 className="text-2xl font-semibold text-white">
              Send us a message
            </h2>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded-lg border border-white/10 bg-white/5 p-3 text-white placeholder:text-white/40 focus:outline-none focus:border-white/30"
              />

              <input
                type="email"
                placeholder="Your email"
                className="w-full rounded-lg border border-white/10 bg-white/5 p-3 text-white placeholder:text-white/40 focus:outline-none focus:border-white/30"
              />

              <textarea
                placeholder="Your message"
                rows={5}
                className="w-full rounded-lg border border-white/10 bg-white/5 p-3 text-white placeholder:text-white/40 focus:outline-none focus:border-white/30"
              />

              <button
                type="submit"
                className="w-full rounded-full bg-white text-black font-medium px-6 py-3 hover:scale-[1.03] active:scale-[0.97] transition-all duration-200 shadow-[0_8px_25px_rgba(255,255,255,0.15)] hover:shadow-[0_12px_35px_rgba(255,255,255,0.25)]"
              >
                Send Message
              </button>
            </form>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-2xl font-semibold mb-4 text-white">
            Continue Your Interview Practice
          </h2>

          <p className="text-white/70 mb-8">
            Explore AI-powered mock interviews and improve your skills.
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

/* DATA */
const contactOptions = [
  {
    icon: Mail,
    title: "Email",
    desc: "Reach us anytime via email.",
    email: "support@prepwise.dev",
  },
  {
    icon: MessageSquare,
    title: "Feedback",
    desc: "Share ideas to improve PrepWise.",
    email: "product@prepwise.dev",
  },
  {
    icon: HelpCircle,
    title: "Support",
    desc: "Need help with interviews?",
    email: "help@prepwise.dev",
  },
];