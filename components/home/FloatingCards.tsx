"use client";

import { motion } from "framer-motion";
import { ThumbsUp, Check, Brain, Mic } from "lucide-react";
import Image from "next/image";

/* ---------- reusable floating badge ---------- */
function FloatBadge({
  icon,
  text,
  className,
  duration = 2,
}: {
  icon: React.ReactNode;
  text: string;
  className: string;
  duration?: number;
}) {
  return (
    <motion.div
      className={`absolute ${className}`}
      animate={{ y: [0, -14, 0] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.35)] text-white/80 text-sm">
        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/10 border border-white/10">
          {icon}
        </span>
        {text}
      </div>
    </motion.div>
  );
}

export default function FloatingCards() {
  return (
    <div className="pointer-events-none absolute inset-0 z-20">
      {/* Communication */}
      <FloatBadge
        icon={<ThumbsUp className="w-3.5 h-3.5" />}
        text="Communication skills"
        className="left-[-80px] top-[22%]"
        duration={1.6}
      />

      {/* Feedback */}
      <FloatBadge
        icon={<Check className="w-3.5 h-3.5" />}
        text="Feedback & scoring"
        className="right-[-80px] top-[18%]"
        duration={2.2}
      />

      {/* Skill insights */}
      <FloatBadge
        icon={<Brain className="w-3.5 h-3.5" />}
        text="Skill insights"
        className="left-[8%] bottom-[-28px]"
        duration={2.8}
      />

      {/* User speech bubble */}
      <motion.div
        className="absolute right-[6%] bottom-[-40px]"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex items-center gap-3 px-4 py-2.5 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.35)] max-w-[260px]">
          <Image
            src="/avatars/user3.jpg"
            alt="user"
            width={36}
            height={36}
            className="rounded-full object-cover"
          />

          <p className="text-[13px] leading-snug text-white/80 flex-1 text-left">
            I decided to leave City Bank because I was looking for new
            challenges…
          </p>

          <div className="flex items-center justify-center w-7 h-7 rounded-full bg-rose-500/90 shadow-[0_0_12px_rgba(244,63,94,0.6)]">
            <Mic className="w-3.5 h-3.5 text-white" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}