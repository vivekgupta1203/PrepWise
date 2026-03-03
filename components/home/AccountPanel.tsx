"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  user: User;
};

export default function AccountPanel({ open, onOpenChange, user }: Props) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[560px] bg-[#0B1220] border border-white/10 text-white p-0 overflow-hidden">

        {/* Header */}
        <div className="px-6 pt-6 pb-4 border-b border-white/10">
          <DialogTitle className="text-lg font-semibold">
            Account
          </DialogTitle>
          <p className="text-sm text-white/60 mt-1">
            Manage your account info.
          </p>
        </div>

        {/* Body */}
        <div className="px-6 py-6 space-y-6">

          {/* Profile */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Avatar className="h-12 w-12 bg-gradient-to-br from-purple-500 to-indigo-600">
                <AvatarFallback>
                  {user.name?.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>

              <div>
                <p className="font-medium">{user.name}</p>
                <p className="text-sm text-white/60">{user.email}</p>
              </div>
            </div>

            <Button
              variant="outline"
              className="border-white/15 text-white hover:bg-white/5"
            >
              Update profile
            </Button>
          </div>

          {/* Divider */}
          <div className="h-px bg-white/10" />

          {/* Email Section */}
          <div>
            <p className="text-sm text-white/60 mb-1">Email address</p>
            <p className="font-medium">{user.email}</p>
          </div>

        </div>
      </DialogContent>
    </Dialog>
  );
}