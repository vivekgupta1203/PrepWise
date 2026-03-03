import ProfileCard from "@/components/home/ProfileCard";
import { getCurrentUser } from "@/lib/actions/auth.action";
import SecurityCard from "@/components/SecurityCard";

export default async function AccountPage() {
  const user = await getCurrentUser();

  return (
    <div className="h-[calc(100vh-140px)] max-w-6xl mx-auto px-6 py-6 flex flex-col gap-6 overflow-hidden">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-white">Account Settings</h1>
        <p className="text-white/60 text-sm">
          Manage your profile and preferences
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 grid-rows-2 gap-6 flex-1 min-h-0">
        {" "}
        {/* Profile */}
        <ProfileCard
          name={user?.name || ""}
          email={user?.email || ""}
          image={user?.image || null}
        />
        {/* Email + Plan */}
        <div className="grid grid-rows-2 gap-6 h-full">
          <div className="bg-[#0B1220] border border-white/10 rounded-xl p-4 h-full flex flex-col justify-center">
            <p className="text-xs text-white/60">Email address</p>
            <p className="text-white font-medium mt-1">{user?.email}</p>
          </div>

          <div className="bg-[#0B1220] border border-white/10 rounded-xl p-4 h-full flex flex-col justify-center">
            <p className="text-xs text-white/60">Account type</p>
            <p className="text-white font-medium mt-1">Free Plan</p>
          </div>
        </div>
        {/* Activity */}
        <div className="bg-[#0B1220] border border-white/10 rounded-xl p-6 flex flex-col justify-between">
          <h2 className="text-xs text-white/60 uppercase tracking-wider">
            Interview Activity
          </h2>

          <div className="grid grid-cols-4 gap-4 mt-6">
            <div className="flex flex-col items-center">
              <p className="text-2xl font-semibold text-white">12</p>
              <p className="text-xs text-white/60 mt-1">Taken</p>
            </div>

            <div className="flex flex-col items-center">
              <p className="text-2xl font-semibold text-white">8</p>
              <p className="text-xs text-white/60 mt-1">Done</p>
            </div>

            <div className="flex flex-col items-center">
              <p className="text-2xl font-semibold text-white">3</p>
              <p className="text-xs text-white/60 mt-1">Active</p>
            </div>

            <div className="flex flex-col items-center">
              <p className="text-2xl font-semibold text-white">67%</p>
              <p className="text-xs text-white/60 mt-1">Score</p>
            </div>
          </div>

          <p className="text-xs text-white/40 mt-6">
            Your interview performance across sessions
          </p>
        </div>
        {/* Security */}
        <SecurityCard />
      </div>
    </div>
  );
}
