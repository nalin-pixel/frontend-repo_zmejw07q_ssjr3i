function HowItWorks() {
  const steps = [
    { step: '1', title: 'Analyse', desc: 'Wir identifizieren Automatisierungspotenziale entlang Ihrer Prozesse.' },
    { step: '2', title: 'Design', desc: 'Wir konzipieren KI-Workflows, die sich nahtlos in Ihre Tools integrieren.' },
    { step: '3', title: 'Implementierung', desc: 'Schnelle Umsetzung mit Pilot, danach Rollout und Schulung.' },
    { step: '4', title: 'Betrieb & Optimierung', desc: 'Monitoring, Wartung und kontinuierliche Verbesserung.' },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">So arbeiten wir</h2>
        <p className="text-slate-300/80 text-center mt-3 max-w-2xl mx-auto">Ein klarer, transparenter Prozess von der Idee bis zum produktiven Betrieb.</p>

        <div className="mt-12 grid md:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.step} className="p-6 rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.04] backdrop-blur">
              <div className="text-rose-400 font-semibold">Schritt {s.step}</div>
              <h3 className="text-white mt-2 font-semibold">{s.title}</h3>
              <p className="text-slate-300/90 mt-2 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;