"use client";

import { useState, useRef, useEffect } from "react";
import { signOut } from "@/lib/actions/auth.action";
import AccountPanel from "@/components/AccountPanel";

type Props = {
  name?: string;
  email?: string;
  initial?: string;
};

export default function AvatarMenu({ name, email, initial }: Props) {
  const [open, setOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // close on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (!ref.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      {/* Avatar */}
      <button
        onClick={() => setOpen(!open)}
        className="w-9 h-9 rounded-full 
                   bg-gradient-to-tr from-indigo-500 to-purple-500 
                   flex items-center justify-center 
                   text-white font-semibold"
      >
        {initial ?? "U"}
      </button>

      {/* Dropdown */}
      {open && (
        <div
          className="
            absolute right-0 mt-3 w-64
            rounded-xl border border-white/10
            bg-neutral-900/95 backdrop-blur-xl
            shadow-xl overflow-hidden
          "
        >
          {/* User */}
          <div className="flex items-center gap-3 p-4 border-b border-white/10">
            <div
              className="w-10 h-10 shrink-0 rounded-full 
                bg-gradient-to-tr from-indigo-500 to-purple-500 
                flex items-center justify-center 
                text-white font-semibold"
            >
              {initial ?? "U"}
            </div>

            <div>
              <p className="text-sm font-medium text-white">{name ?? "User"}</p>
              <p className="text-xs text-neutral-400">
                {email ?? "user@email.com"}
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="py-2">
            <button
              onClick={() => {
                setOpen(false);
                setAccountOpen(true);
              }}
              className="w-full text-left px-4 py-2 text-sm text-neutral-200 hover:bg-white/5"
            >
              Manage account
            </button>

            <button
              onClick={async () => {
                await signOut();
                window.location.href = "/sign-in";
              }}
              className="w-full text-left px-4 py-2 text-sm text-neutral-200 hover:bg-white/5"
            >
              Sign out
            </button>
          </div>

          {/* Footer */}
          <div className="px-4 py-2 text-xs text-neutral-500 border-t border-white/10">
            Secured by PrepWise
          </div>
        </div>
      )}

      
    </div>
  );
}
