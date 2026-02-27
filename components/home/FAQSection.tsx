"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "What is PrepWise?",
    a: "PrepWise is an AI-powered interview practice platform that simulates real interview conversations and provides instant personalised feedback."
  },
  {
    q: "How are interviews personalised to my job?",
    a: "PrepWise analyzes the job description you import and generates role-specific questions aligned with real hiring expectations."
  },
  {
    q: "How are interviews personalised to my CV?",
    a: "Your uploaded CV is parsed to identify skills, experience, and gaps, allowing the AI interviewer to tailor questions directly to your background."
  },
  {
    q: "What does the unlimited plan include?",
    a: "Unlimited interviews, unlimited feedback reports, full skill analytics, and access to all difficulty levels."
  },
  {
    q: "How can I pay?",
    a: "You can pay securely using credit or debit card. Payments are processed safely through our payment provider."
  },
  {
    q: "How can I cancel?",
    a: "You can cancel anytime from your account settings. Your plan remains active until the billing period ends."
  }
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="relative mx-auto mt-20 max-w-4xl px-6 pb-40">
      <h2 className="text-4xl md:text-5xl font-semibold text-white">
        Frequently asked
      </h2>

      <div className="mt-12 space-y-4">
        {faqs.map((f, i) => (
          <div
            key={i}
            className="border-b border-white/10 pb-4"
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="flex w-full items-center justify-between text-left text-lg text-white/90"
            >
              {f.q}
              <Plus
                className={`transition-transform ${
                  open === i ? "rotate-45" : ""
                }`}
              />
            </button>

            <div
              className={`grid transition-all duration-300 ${
                open === i
                  ? "grid-rows-[1fr] opacity-100 mt-4"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <p className="overflow-hidden text-white/60 text-sm leading-relaxed">
                {f.a}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
