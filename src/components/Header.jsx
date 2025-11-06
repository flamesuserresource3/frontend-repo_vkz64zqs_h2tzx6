import { Rocket, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-lg shadow-pink-500/10 px-4 py-3 flex items-center justify-between"
          style={{
            boxShadow:
              "0 10px 30px -10px rgba(199,75,189,0.35), inset 0 1px 0 0 rgba(255,255,255,0.05)",
          }}
        >
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-fuchsia-500/80 to-purple-700/80 flex items-center justify-center shadow-inner shadow-fuchsia-300/20">
              <Rocket className="h-6 w-6 text-pink-100" />
            </div>
            <div>
              <p className="text-pink-100 text-lg font-semibold tracking-wide">
                Peakso
              </p>
              <p className="text-pink-200/70 text-xs -mt-1">AI Discovery Engine</p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-pink-100/80">
            <div className="flex items-center gap-1 text-xs">
              <Star className="h-3.5 w-3.5 text-yellow-300" />
              <span>Cosmic UI</span>
            </div>
            <div className="text-xs">Glassmorphic • Nebula • Futuristic</div>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
