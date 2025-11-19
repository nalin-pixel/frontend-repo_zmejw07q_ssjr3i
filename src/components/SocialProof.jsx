function SocialProof() {
  const logos = [
    'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
  ];

  return (
    <section className="bg-slate-900/60 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-slate-400 text-sm mb-6">Vertraut von Teams, die auf Automatisierung setzen</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center opacity-80">
          {logos.map((src, i) => (
            <img key={i} src={src} alt="Logo" className="h-8 mx-auto invert opacity-60 hover:opacity-90 transition" />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SocialProof;