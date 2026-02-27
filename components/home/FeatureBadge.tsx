"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  text: string;
};

export default function FeatureBadge({ icon, text }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="
        inline-flex items-center gap-2
        px-4 py-2 rounded-full
        bg-white/5 border border-white/10
        backdrop-blur-md
        text-white/80 text-sm
        shadow-[0_4px_20px_rgba(0,0,0,0.35)]
      "
    >
      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/10 border border-white/10">
        {icon}
      </span>

      {text}
    </motion.div>
  );
}