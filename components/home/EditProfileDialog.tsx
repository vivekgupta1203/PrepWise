"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { updateProfile } from "@/lib/actions/auth.action";
import { useRouter } from "next/navigation";

const AVATARS = [
  "/avatars/user1.png",
  "/avatars/user2.png",
  "/avatars/user3.jpg",
  "/avatars/user4.png",
  "/avatars/user5.jpg",
];

type Props = {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  name: string;
  email: string;
  image?: string | null;
};

export default function EditProfileDialog({
  open,
  onOpenChange,
  name,
  email,
  image,
}: Props) {
  const router = useRouter();
  const [newName, setNewName] = useState(name);
  const [selectedAvatar, setSelectedAvatar] = useState(
    image || AVATARS[0]
  );

  async function handleSave() {
  await updateProfile({
    name: newName,
    image: selectedAvatar,
  });

  router.refresh();   // ✅ re-fetch server data
  onOpenChange(false);
}

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-[#0B1220] border border-white/10 text-white max-w-md">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
        </DialogHeader>

        {/* Avatar selector */}
        <div className="mt-4">
          <p className="text-xs text-white/60 mb-2">Choose avatar</p>

          <div className="flex gap-3">
            {AVATARS.map((src) => (
              <button
                key={src}
                onClick={() => setSelectedAvatar(src)}
                className={`p-1 rounded-full border ${
                  selectedAvatar === src
                    ? "border-indigo-500"
                    : "border-transparent"
                }`}
              >
                <Image
                  src={src}
                  alt="avatar"
                  width={48}
                  height={48}
                  className="rounded-full"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Name */}
        <div className="mt-4">
          <label className="text-xs text-white/60">Full name</label>
          <Input
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            className="bg-[#0F172A] border-white/10 mt-1"
          />
        </div>

        {/* Email */}
        <div className="mt-3">
          <label className="text-xs text-white/60">Email</label>
          <Input
            value={email}
            disabled
            className="bg-[#0F172A] border-white/10 opacity-70 mt-1"
          />
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-2 mt-6">
          <Button variant="ghost" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>

          <Button
            onClick={handleSave}
            className="bg-indigo-600 hover:bg-indigo-500"
          >
            Save changes
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}