function CTA() {
  return (
    <section id="kontakt" className="py-16 md:py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Bereit für Ihren KI-Vorsprung?</h2>
        <p className="text-slate-300/80 mt-3">Sprechen wir über Ihre Prozesse und identifizieren schnelle Gewinne in einem kostenlosen Gespräch.</p>

        <form className="mt-8 grid gap-4 sm:grid-cols-3 text-left">
          <input type="text" placeholder="Name" className="col-span-3 sm:col-span-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-rose-400" />
          <input type="email" placeholder="E-Mail" className="col-span-3 sm:col-span-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-rose-400" />
          <input type="text" placeholder="Unternehmen" className="col-span-3 sm:col-span-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-rose-400" />
          <textarea placeholder="Kurz Ihr Anliegen" className="col-span-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-rose-400 min-h-[120px]" />
          <button type="button" className="col-span-3 inline-flex items-center justify-center px-6 py-3 rounded-xl bg-rose-500 hover:bg-rose-400 text-white font-medium shadow-lg shadow-rose-500/25 transition">
            Gespräch anfragen
          </button>
        </form>
      </div>
    </section>
  );
}

export default CTA;