import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-black/40 backdrop-blur-xl mt-16">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-sm">
        
        {/* LEFT  */}
        <div className="text-white/60">
          © {new Date().getFullYear()} PrepWise
          <span className="mx-2 text-white/30">·</span>
          AI-powered mock interviewer
        </div>

        {/* RIGHT */}
        <div className="text-white/60">
          Developed by{" "}
          <span className="text-white font-medium">
            Vivek Gupta
          </span>
        </div>
      </div>
    </footer>
  );
}




