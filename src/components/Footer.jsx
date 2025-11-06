export default function Footer() {
  return (
    <footer className="relative py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 p-6 text-center text-pink-100/70">
          <p>
            © {new Date().getFullYear()} Peakso • Crafted in a purple-pink nebula. Stay curious ✦
          </p>
        </div>
      </div>
    </footer>
  );
}
