function UseCases() {
  const cases = [
    {
      title: 'Dokumenten-Automatisierung',
      desc: 'Automatisches Auslesen, Strukturieren und Ablegen eingehender Dokumente inkl. Validierung.',
    },
    {
      title: 'KI-Support-Assistent',
      desc: 'Antworten in Sekunden per Chatbot, der auf Ihre Wissensbasis und Systeme zugreift.',
    },
    {
      title: 'Sales Ops Co-Pilot',
      desc: 'Lead-Qualifizierung, Angebots-Entwürfe und Follow-ups automatisch vorbereiten.',
    },
    {
      title: 'Daten-Pipeline mit KI',
      desc: 'Extraktion, Normalisierung und Enrichment für Analytics & BI Tools.',
    },
  ];

  return (
    <section id="cases" className="py-16 md:py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">Use Cases</h2>
        <p className="text-slate-300/80 text-center mt-3 max-w-2xl mx-auto">Ein Überblick über typische Projekte, die wir in wenigen Wochen live bringen.</p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {cases.map((c, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:border-rose-400/30 transition">
              <h3 className="text-white font-semibold">{c.title}</h3>
              <p className="text-slate-300 mt-2 text-sm leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default UseCases;