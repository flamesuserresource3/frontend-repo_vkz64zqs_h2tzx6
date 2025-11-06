import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Compass, Github, Boxes } from "lucide-react";

const OrbitalIcon = ({ children, angle, radius }) => {
  const x = Math.cos((angle * Math.PI) / 180) * radius;
  const y = Math.sin((angle * Math.PI) / 180) * radius;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{ transform: `translate(${x}px, ${y}px)` }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
    >
      <div className="h-12 w-12 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/15 shadow-lg shadow-fuchsia-500/10 flex items-center justify-center text-pink-100">
        {children}
      </div>
    </motion.div>
  );
};

export default function SearchOrbit() {
  const [query, setQuery] = useState("");

  return (
    <section className="relative -mt-28 z-20">
      <div className="mx-auto max-w-3xl px-6">
        <div
          className="relative rounded-3xl backdrop-blur-2xl bg-white/5 border border-white/10 p-4 md:p-6 shadow-xl"
          style={{
            boxShadow:
              "0 20px 60px -10px rgba(199,75,189,0.35), inset 0 1px 0 0 rgba(255,255,255,0.05)",
          }}
        >
          <div className="flex items-center gap-3">
            <Search className="h-5 w-5 text-pink-200" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask anything about AI tools, repos, frameworks..."
              className="w-full bg-transparent outline-none placeholder-pink-200/60 text-pink-50"
            />
            <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-fuchsia-500 to-pink-600 text-white font-semibold shadow-md hover:brightness-110 transition">
              Search
            </button>
          </div>

          {/* Orbit layer */}
          <div className="relative mt-10 h-72">
            <div className="absolute inset-0 rounded-full border border-white/10" />
            <OrbitalIcon angle={0} radius={120}>
              <Compass className="h-6 w-6" />
            </OrbitalIcon>
            <OrbitalIcon angle={120} radius={120}>
              <Github className="h-6 w-6" />
            </OrbitalIcon>
            <OrbitalIcon angle={240} radius={120}>
              <Boxes className="h-6 w-6" />
            </OrbitalIcon>
          </div>
        </div>
      </div>
    </section>
  );
}
