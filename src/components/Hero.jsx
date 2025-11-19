import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* 3D Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient aura overlays (non-blocking) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.10),transparent_60%)] blur-2xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/40 to-slate-950/90" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-24 md:pt-36 md:pb-40 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/80 text-sm mb-6 backdrop-blur">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          KI-Agentur für intelligente Prozessautomatisierung
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-sm">
          Red Rabbit Lab
        </h1>
        <p className="mt-4 md:mt-6 text-lg md:text-xl text-slate-200 max-w-3xl mx-auto">
          Wir bauen maßgeschneiderte KI-Workflows, die Ihre Abläufe automatisieren,
          Kosten senken und Teams produktiver machen – sicher, skalierbar und messbar.
        </p>

        <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#kontakt" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-rose-500 hover:bg-rose-400 text-white font-medium shadow-lg shadow-rose-500/25 transition">
            Kostenlose Erstberatung
          </a>
          <a href="#cases" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium border border-white/15 backdrop-blur-sm transition">
            Use Cases ansehen
          </a>
        </div>

        <p className="mt-6 text-slate-300/70 text-sm">Schnelle Umsetzung • DSGVO-konform • Enterprise-Ready</p>
      </div>
    </section>
  );
}

export default Hero;