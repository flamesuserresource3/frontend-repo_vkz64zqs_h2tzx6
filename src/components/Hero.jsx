import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      {/* Spline 3D background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4Zh-Q6DWWp5yPnQf/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Overlay gradients and stars */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0d0316]/40 via-transparent to-[#0d0316]" />

      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="font-['Audio Wide',_system-ui] text-4xl sm:text-5xl md:text-6xl tracking-wide text-pink-100 drop-shadow-[0_0_30px_rgba(255,0,255,0.35)]"
          >
            Project Peakso
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
            className="mt-4 text-pink-100/80 max-w-2xl mx-auto"
          >
            An AI discovery engine in a cosmic, glassmorphic interface. Explore tools, repos, and frameworks through an immersive search experience.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
