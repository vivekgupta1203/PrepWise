"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background text-foreground">
      {/* floating circles */}
      <motion.div
        className="absolute left-16 top-16 h-72 w-72 rounded-full bg-primary/20"
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-16 right-16 h-56 w-56 rounded-full bg-primary/20"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
      />

      {/* content */}
      <div className="z-10 flex flex-col items-center text-center">
        {/* 404 */}
        <motion.h1
          className="relative text-[140px] font-extrabold tracking-widest text-foreground md:text-[180px]"
          animate={{ rotate: [0, 6, -6, 0] }}
          transition={{ duration: 2.4, repeat: Infinity }}
        >
          404
          <span className="absolute inset-0 -z-10 blur-3xl bg-primary/20 rounded-full" />
        </motion.h1>

        {/* subtitle */}
        <motion.p
          className="mt-2 mb-8 max-w-md text-lg text-muted-foreground md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Oops! The page you're looking for doesn’t exist.
        </motion.p>

        {/* button */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="/"
            className="rounded-full bg-primary px-8 py-3 font-semibold text-primary-foreground shadow-lg transition hover:opacity-90"
          >
            Go Back Home
          </Link>
        </motion.div>
      </div>

      {/* ground shadow */}
      <motion.div
        className="absolute bottom-24 h-6 w-72 rounded-full bg-black/30 blur-xl dark:bg-black/60"
        animate={{ scaleX: [1, 1.25, 1] }}
        transition={{ duration: 2.4, repeat: Infinity }}
      />
    </div>
  );
}
