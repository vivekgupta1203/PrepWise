import { Mail, MessageSquare, HelpCircle } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | PrepWise",
  description:
    "Get in touch with the PrepWise team for support, feedback, or collaboration.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-10 pb-16 space-y-16">
      
      {/* HERO */}
      <section className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Contact PrepWise</h1>
        <p className="text-lg text-muted-foreground">
          Have questions, feedback, or need help with your interview preparation?
          We’d love to hear from you.
        </p>
      </section>

      {/* CONTACT OPTIONS */}
      <section className="grid md:grid-cols-3 gap-6">
        <div className="rounded-xl border bg-card p-6 text-center space-y-3">
          <Mail className="mx-auto text-primary" aria-hidden />
          <h3 className="font-semibold">Email</h3>
          <p className="text-sm text-muted-foreground">
            Reach us anytime via email.
          </p>
          <p className="text-sm">support@prepwise.dev</p>
        </div>

        <div className="rounded-xl border bg-card p-6 text-center space-y-3">
          <MessageSquare className="mx-auto text-primary" aria-hidden />
          <h3 className="font-semibold">Feedback</h3>
          <p className="text-sm text-muted-foreground">
            Share ideas to improve PrepWise.
          </p>
          <p className="text-sm">product@prepwise.dev</p>
        </div>

        <div className="rounded-xl border bg-card p-6 text-center space-y-3">
          <HelpCircle className="mx-auto text-primary" aria-hidden />
          <h3 className="font-semibold">Support</h3>
          <p className="text-sm text-muted-foreground">
            Need help with interviews?
          </p>
          <p className="text-sm">help@prepwise.dev</p>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="max-w-2xl mx-auto">
        <div className="rounded-2xl border bg-card p-8 space-y-6">
          <h2 className="text-2xl font-semibold">Send us a message</h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your name"
              className="w-full rounded-lg border bg-background p-3"
            />

            <input
              type="email"
              placeholder="Your email"
              className="w-full rounded-lg border bg-background p-3"
            />

            <textarea
              placeholder="Your message"
              rows={5}
              className="w-full rounded-lg border bg-background p-3"
            />

            <button
              type="submit"
              className="w-full rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground hover:opacity-90"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Continue Your Interview Practice
        </h2>
        <p className="text-muted-foreground mb-6">
          Explore AI-powered mock interviews and improve your skills.
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
