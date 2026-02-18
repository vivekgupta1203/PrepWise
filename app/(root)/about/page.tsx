import { Brain, Target, BarChart3, Sparkles } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | PrepWise",
  description:
    "Learn about PrepWise — an AI-powered mock interview platform helping developers practice and improve interview skills.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-10 pb-16 space-y-16">
      
      {/* HERO */}
      <section className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">About PrepWise</h1>
        <p className="text-lg text-muted-foreground">
          PrepWise is an AI-powered mock interview platform that helps
          developers practice real interview scenarios, receive instant
          feedback, and track skill growth — all in one place.
        </p>
      </section>

      {/* MISSION */}
      <section className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-muted-foreground mb-4">
            Technical interviews are often unpredictable and stressful. PrepWise
            was created to make interview preparation structured, personalized,
            and accessible for every developer.
          </p>
          <p className="text-muted-foreground">
            By combining AI-generated questions, realistic simulations, and
            actionable feedback, we help candidates become confident and
            interview-ready.
          </p>
        </div>

        <div className="rounded-2xl border bg-card p-6 space-y-4">
          <div className="flex items-center gap-3">
            <Brain className="text-primary" aria-hidden />
            <p>AI-generated interview questions</p>
          </div>
          <div className="flex items-center gap-3">
            <Target className="text-primary" aria-hidden />
            <p>Role-specific practice paths</p>
          </div>
          <div className="flex items-center gap-3">
            <BarChart3 className="text-primary" aria-hidden />
            <p>Skill progress tracking</p>
          </div>
          <div className="flex items-center gap-3">
            <Sparkles className="text-primary" aria-hidden />
            <p>Instant performance feedback</p>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section>
        <h2 className="text-2xl font-semibold text-center mb-10">
          Why Developers Choose PrepWise
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-xl border bg-card p-6">
            <h3 className="font-semibold mb-2">Realistic Practice</h3>
            <p className="text-sm text-muted-foreground">
              Simulate real technical interviews across frontend, backend, and
              system design roles.
            </p>
          </div>

          <div className="rounded-xl border bg-card p-6">
            <h3 className="font-semibold mb-2">AI Feedback</h3>
            <p className="text-sm text-muted-foreground">
              Receive structured feedback on answers, clarity, and technical
              depth.
            </p>
          </div>

          <div className="rounded-xl border bg-card p-6">
            <h3 className="font-semibold mb-2">Track Growth</h3>
            <p className="text-sm text-muted-foreground">
              Monitor improvement across skills and interviews over time.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Start Practicing with PrepWise
        </h2>
        <p className="text-muted-foreground mb-6">
          Build confidence and get interview-ready with AI-powered mock
          interviews.
        </p>

        <Link
          href="/"
          className="inline-flex items-center rounded-full bg-primary px-8 py-3 font-medium text-primary-foreground hover:opacity-90"
        >
          Go to Home
        </Link>
      </section>
    </div>
  );
}
