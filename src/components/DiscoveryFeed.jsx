import { motion } from "framer-motion";
import { Flame, Heart, Sparkles } from "lucide-react";

const Card = ({ title, subtitle, badge, liked }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5 }}
    className="rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 p-4 shadow-lg hover:shadow-pink-500/20 transition"
    style={{ boxShadow: "0 12px 40px -12px rgba(199,75,189,0.3)" }}
  >
    <div className="flex items-center justify-between">
      <div>
        <h4 className="text-pink-100 font-semibold">{title}</h4>
        <p className="text-pink-100/70 text-sm">{subtitle}</p>
      </div>
      <span className="text-xs px-2 py-1 rounded-full bg-fuchsia-500/20 text-fuchsia-200 border border-fuchsia-400/30">
        {badge}
      </span>
    </div>
    <div className="mt-3 flex items-center gap-3 text-pink-100/70 text-xs">
      <div className="flex items-center gap-1">
        <Heart className={`h-3.5 w-3.5 ${liked ? "text-pink-400" : "text-pink-200/60"}`} />
        <span>{liked ? "1.2k likes" : "532 likes"}</span>
      </div>
      <div className="flex items-center gap-1">
        <Sparkles className="h-3.5 w-3.5 text-yellow-200" />
        <span>Featured</span>
      </div>
    </div>
  </motion.div>
);

export default function DiscoveryFeed() {
  const newItems = [
    { title: "RunwayML", subtitle: "Video background remover and generative suite", badge: "What's New", liked: true },
    { title: "LangChain", subtitle: "Build LLM-powered apps with composable components", badge: "What's New", liked: false },
  ];

  const topLiked = [
    { title: "Stable Diffusion XL", subtitle: "Photorealistic image generation", badge: "Most Liked", liked: true },
    { title: "OpenAI GPT-4", subtitle: "State-of-the-art reasoning model", badge: "Most Liked", liked: true },
  ];

  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Flame className="h-5 w-5 text-fuchsia-300" />
            <h3 className="text-pink-100 font-semibold tracking-wide">What's New</h3>
          </div>
          <div className="grid gap-4">
            {newItems.map((item, i) => (
              <Card key={i} {...item} />
            ))}
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Heart className="h-5 w-5 text-fuchsia-300" />
            <h3 className="text-pink-100 font-semibold tracking-wide">Most Liked</h3>
          </div>
          <div className="grid gap-4">
            {topLiked.map((item, i) => (
              <Card key={i} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
