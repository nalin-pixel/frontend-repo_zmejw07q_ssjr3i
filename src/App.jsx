import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Benefits from './components/Benefits';
import HowItWorks from './components/HowItWorks';
import Industries from './components/Industries';
import UseCases from './components/UseCases';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-rose-500/30 selection:text-white">
      {/* Top nav */}
      <header className="fixed top-0 inset-x-0 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 backdrop-blur px-4 py-3">
            <a href="#" className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-rose-500 via-fuchsia-500 to-sky-500" />
              <span className="font-semibold text-white">Red Rabbit Lab</span>
            </a>
            <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
              <a href="#" className="hover:text-white">Home</a>
              <a href="#branchen" className="hover:text-white">Branchen</a>
              <a href="#cases" className="hover:text-white">Use Cases</a>
              <a href="#kontakt" className="hover:text-white">Kontakt</a>
            </nav>
            <a href="#kontakt" className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-xl bg-rose-500 hover:bg-rose-400 text-white text-sm font-medium shadow shadow-rose-500/20 transition">
              Erstberatung
            </a>
          </div>
        </div>
      </header>

      <main className="relative">
        <Hero />
        <SocialProof />
        <Benefits />
        <HowItWorks />
        <Industries />
        <UseCases />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}

export default App;