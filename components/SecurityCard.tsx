"use client";

import { useState } from "react";
import ChangePasswordDialog from "./ChangePasswordDialog";

export default function SecurityCard() {
  const [openPassword, setOpenPassword] = useState(false);

  return (
    <>
      <div
        className="
          bg-gradient-to-b from-[#0B1220] to-[#0A0F1A]
          border border-white/10
          rounded-xl
          p-5
          shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_8px_24px_rgba(0,0,0,0.6)]
        "
      >
        {/* Header */}
        <div className="mb-5">
          <h3 className="text-[11px] font-semibold tracking-widest text-white/50 uppercase">
            Security
          </h3>
          <p className="text-sm text-white/60 mt-1">
            Manage your authentication settings
          </p>
        </div>

        {/* Password */}
        <div className="flex justify-between items-start pb-5">
          <div>
            <p className="text-[15px] font-semibold text-white leading-none">
              Password
            </p>
            <p className="text-sm text-white/60 mt-1.5">
              Last updated recently
            </p>
          </div>

          <button
            onClick={() => setOpenPassword(true)}
            className="
              self-start
              px-4 py-1.5
              rounded-lg
              border border-white/15
              text-sm text-white
              hover:bg-white/5
              transition
            "
          >
            Change
          </button>
        </div>

        <div className="h-px bg-white/10 my-4" />

        {/* Two Factor */}
        <div className="flex justify-between items-start">
          <div>
            <p className="text-[15px] font-semibold text-white leading-none">
              Two-factor authentication
            </p>
            <p className="text-sm text-white/60 mt-1.5">
              Add an extra layer of security to your account
            </p>
          </div>

          <button
            className="
              self-start
              px-4 py-1.5
              rounded-lg
              bg-indigo-600/25
              text-indigo-400
              text-sm
              hover:bg-indigo-600/35
              transition
            "
          >
            Enable
          </button>
        </div>
      </div>

      <ChangePasswordDialog
        open={openPassword}
        onOpenChange={setOpenPassword}
      />
    </>
  );
}