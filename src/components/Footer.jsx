function Footer() {
  return (
    <footer className="py-10 bg-slate-950 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-white font-semibold">Red Rabbit Lab</div>
        <nav className="flex items-center gap-6 text-slate-400 text-sm">
          <a href="#branchen" className="hover:text-white transition">Branchen</a>
          <a href="#cases" className="hover:text-white transition">Use Cases</a>
          <a href="#kontakt" className="hover:text-white transition">Kontakt</a>
        </nav>
        <div className="text-slate-500 text-sm">© {new Date().getFullYear()} Red Rabbit Lab. Alle Rechte vorbehalten.</div>
      </div>
    </footer>
  );
}

export default Footer;