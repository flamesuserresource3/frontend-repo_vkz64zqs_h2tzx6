import Header from "./components/Header";
import Hero from "./components/Hero";
import SearchOrbit from "./components/SearchOrbit";
import DiscoveryFeed from "./components/DiscoveryFeed";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#0b0213] relative">
      {/* Starfield gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,0,255,0.08),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(199,75,189,0.12),transparent_45%),radial-gradient(circle_at_50%_80%,rgba(124,58,237,0.12),transparent_45%)]" />

      <Header />
      <main className="relative z-10">
        <Hero />
        <SearchOrbit />
        <DiscoveryFeed />
      </main>
      <Footer />
    </div>
  );
}

export default App;
