"use client";

import { X, User, Settings, Shield, LogOut } from "lucide-react";

type Props = {
  name?: string;
  email?: string;
  initial?: string;
  onClose: () => void;
  onSignOut: () => void;
};

export default function AccountPanel({
  name,
  email,
  initial,
  onClose,
  onSignOut,
}: Props) {
  return (
    <div
      className="
        absolute right-0 mt-3 w-80
        rounded-2xl border border-white/10
        bg-neutral-900/95 backdrop-blur-xl
        shadow-2xl overflow-hidden
        animate-in fade-in zoom-in-95
      "
    >
      {/* HEADER */}
      <div className="flex items-center gap-3 p-4 border-b border-white/10">
        <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white font-semibold">
          {initial}
        </div>

        <div className="flex-1">
          <p className="text-sm font-medium text-white">{name}</p>
          <p className="text-xs text-neutral-400">{email}</p>
        </div>

        <button
          onClick={onClose}
          className="text-neutral-400 hover:text-white"
        >
          <X size={16} />
        </button>
      </div>

      {/* SETTINGS */}
      <div className="py-2">
        <button className="menu-item">
          <User size={16} /> Profile settings
        </button>

        <button className="menu-item">
          <Settings size={16} /> Account settings
        </button>

        <button className="menu-item">
          <Shield size={16} /> Security
        </button>
      </div>

      {/* FOOTER */}
      <div className="border-t border-white/10">
        <button
          onClick={onSignOut}
          className="menu-item text-red-400 hover:text-red-300"
        >
          <LogOut size={16} /> Sign out
        </button>
      </div>
    </div>
  );
}
