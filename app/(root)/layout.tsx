import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";
import { redirect } from "next/navigation";
import { getCurrentUser, isAuthenticated } from "@/lib/actions/auth.action";
import AvatarMenu from "@/components/AvatarMenu";
import Footer from "@/components/Footer";

const RootLayout = async ({ children }: { children: ReactNode }) => {
  const user = await getCurrentUser();
  const isUserAuthenticated = await isAuthenticated();
  if (!isUserAuthenticated) redirect("/sign-in");

  return (
    <div className="root-layout">
      {/* NAVBAR */}
      <nav className="relative z-50 w-full bg-black/40 backdrop-blur-xl border-b border-white/10">
        {" "}
        <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">
          {/* LEFT — LOGO */}
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.svg" alt="PrepWise Logo" width={38} height={32} />
            <h2 className="text-white font-semibold">PrepWise</h2>
          </Link>

          {/* RIGHT — NAV LINKS + AVATAR */}
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="text-sm font-medium text-white/70 hover:text-white transition"
            >
              Home
            </Link>

            <Link
              href="/dashboard"
              className="text-sm text-white/70 hover:text-white"
            >
              Dashboard
            </Link>

            <Link
              href="/pricing"
              className="text-sm font-medium text-white/70 hover:text-white transition"
            >
              Pricing
            </Link>

            <Link
              href="/about"
              className="text-sm font-medium text-white/70 hover:text-white transition"
            >
              About Us
            </Link>

            <Link
              href="/contact"
              className="text-sm font-medium text-white/70 hover:text-white transition"
            >
              Contact Us
            </Link>

            <div className="h-5 w-px bg-white/10" />

            <AvatarMenu
              name={user?.name}
              email={user?.email}
              initial={user?.name?.charAt(0)}
              image={user?.image || null}   // ✅ add this
            />
          </div>
        </div>
      </nav>

      {/* PAGE CONTENT */}
      {children}

      <Footer />
    </div>
  );
};

export default RootLayout;
