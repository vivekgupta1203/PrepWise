"use client";

import { useState } from "react";
import EditProfileDialog from "./EditProfileDialog";

type Props = {
  name: string;
  email: string;
  image?: string | null;
};

export default function ProfileCard({ name, email, image }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="
        bg-gradient-to-b from-[#0B1220] to-[#0A0F1A]
        border border-white/10
        rounded-xl
        p-7
        flex justify-between
        shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_10px_30px_rgba(0,0,0,0.6)]
      "
      >
        {/* LEFT */}
        <div className="flex items-center gap-5">
          {/* Avatar */}
          <div className="w-[72px] h-[72px] rounded-full overflow-hidden bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white text-xl font-semibold">
            {image ? (
              <img
                src={image}
                alt="avatar"
                className="w-full h-full object-cover"
              />
            ) : (
              name?.charAt(0)
            )}
          </div>

          {/* Name + Email */}
          <div>
            <p className="text-[20px] font-semibold tracking-tight text-white leading-none">
              {name}
            </p>
            <p className="text-sm text-white/60 mt-1">{email}</p>
          </div>
        </div>

        {/* RIGHT */}
        <button
          onClick={() => setOpen(true)}
          className="
            self-start
            px-5 py-2.5
            rounded-lg
            border border-white/15
            text-white
            hover:bg-white/5
            transition
          "
        >
          Edit Profile
        </button>
      </div>

      <EditProfileDialog
        open={open}
        onOpenChange={setOpen}
        name={name}
        email={email}
        image={image}
      />
    </>
  );
}