function Benefits() {
  const items = [
    {
      title: 'Prozesse automatisieren',
      desc: 'Wir verbinden Ihre Tools und Datenquellen zu Ende-zu-Ende-Workflows mit KI-gestützten Entscheidungen.',
    },
    {
      title: 'Zeit & Kosten sparen',
      desc: 'Reduzieren Sie manuelle Arbeiten und erhalten Sie messbare ROI durch Automatisierung.',
    },
    {
      title: 'Sicher & skalierbar',
      desc: 'Enterprise-Standards, DSGVO-konform, robuste Monitoring- und Governance-Kontrollen.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">Warum Red Rabbit Lab?</h2>
        <p className="text-slate-300/80 text-center mt-3 max-w-2xl mx-auto">Wir entwerfen, bauen und betreiben KI-Automatisierungen, die wirklich im Alltag helfen.</p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((item, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur shadow-lg hover:shadow-rose-500/10 hover:border-rose-400/30 transition">
              <h3 className="text-white font-semibold text-lg">{item.title}</h3>
              <p className="text-slate-300 mt-2 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;