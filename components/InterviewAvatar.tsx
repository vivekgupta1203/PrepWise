import { cn } from "@/lib/utils";

function getRoleColor(role?: string) {
  const colors = [
    "from-indigo-500 to-purple-600",
    "from-emerald-500 to-teal-600",
    "from-blue-500 to-cyan-600",
    "from-orange-500 to-amber-600",
    "from-pink-500 to-rose-600",
    "from-violet-500 to-fuchsia-600",
  ];

  if (!role) return colors[0];

  let hash = 0;
  for (let i = 0; i < role.length; i++) {
    hash = role.charCodeAt(i) + ((hash << 5) - hash);
  }

  return colors[Math.abs(hash) % colors.length];
}

type Props = {
  role?: string;
  size?: number;
  className?: string;
};

export default function InterviewAvatar({
  role,
  size = 90,
  className,
}: Props) {
  const letter = role?.charAt(0).toUpperCase() || "?";

  return (
    <div
      className={cn(
        "rounded-full flex items-center justify-center text-white font-semibold tracking-tight shadow-[0_6px_18px_rgba(0,0,0,0.45)] bg-gradient-to-br",
        getRoleColor(role),
        className,
      )}
      style={{
        width: size,
        height: size,
        fontSize: size * 0.45,
      }}
    >
      {letter}
    </div>
  );
}