"use client";

import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "@/firebase/client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email.");
      return;
    }

    try {
  setLoading(true);

  await sendPasswordResetEmail(auth, email);

  toast.success("Password reset email sent.");
  router.push("/sign-in");

} catch (error: any) {
  console.log("RESET ERROR:", error);
  toast.error(error.message || "Something went wrong.");
} finally {
  setLoading(false);
}
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="card-border lg:min-w-[566px]">
        <div className="flex flex-col gap-6 card py-14 px-10">
          {/* Logo */}
          <div className="flex flex-row gap-2 justify-center">
            <Image src="/logo.svg" alt="logo" height={32} width={38} />
            <h2 className="text-primary-100">PrepWise</h2>
          </div>

          {/* Heading */}
          <div className="text-center">
            <h3 className="text-xl font-semibold text-white">
              Reset your password
            </h3>
            <p className="text-sm text-white/60 mt-2">
              Enter your email and we'll send you a reset link.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleReset} className="space-y-6 mt-4">
            <div className="space-y-2">
              <label className="text-sm text-white/70">Email</label>
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="
                  w-full
                  rounded-full
                  bg-white/5
                  border border-white/10
                  px-5 py-3
                  text-white
                  placeholder:text-white/40
                  focus:outline-none
                  focus:border-indigo-500
                  transition
                "
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="
    w-full
    rounded-full
    bg-[#B6B1E3]
    text-black
    font-semibold
    py-3
    hover:opacity-90
    transition
  "
            >
              {loading ? "Sending..." : "Send reset link"}
            </button>
          </form>

          {/* Back */}
          <p className="text-center text-sm text-white/60">
            Remember your password?
            <Link
  href="/sign-in"
  className="ml-1 font-semibold text-[#B6B1E3] hover:text-[#C9C5F0] transition"
>
  Sign in
</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
