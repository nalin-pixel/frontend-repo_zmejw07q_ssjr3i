function Industries() {
  const items = [
    { title: 'Gesundheit', desc: 'Termin- und Dokumentenautomation, Triage, Patientenkommunikation.' },
    { title: 'Recht', desc: 'Dokumenten-Parsing, Wissensdatenbanken, Vertragsprüfung, Intake Bots.' },
    { title: 'Finanzen', desc: 'KYC/AML, Reporting, Chatbots, Dokumentenverarbeitung.' },
    { title: 'E-Commerce', desc: 'Support-Automation, Produktkatalog, Rücksendeprozesse.' },
    { title: 'Industrie', desc: 'Qualitätssicherung, Wartungs-Workflows, Lieferketten.' },
    { title: 'HR', desc: 'Bewerber-Screening, Onboarding, interne Wissenssuche.' },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" id="branchen">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">Branchen</h2>
        <p className="text-slate-300/80 text-center mt-3 max-w-2xl mx-auto">Wir kennen die Besonderheiten Ihrer Branche und bringen praxiserprobte Lösungen mit.</p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((item, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:border-rose-400/30 transition">
              <h3 className="text-white font-semibold">{item.title}</h3>
              <p className="text-slate-300 mt-2 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Industries;