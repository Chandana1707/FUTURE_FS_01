export function Nav() {
  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[min(95%,960px)]">
      <div className="flex items-center justify-between gap-6 px-4 py-3 rounded-2xl border border-white/10 bg-background/60 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
        <a href="#top" className="flex items-center gap-3">
          <span className="size-9 rounded-full grid place-items-center font-bold text-background bg-gradient-to-br from-violet-400 via-sky-400 to-cyan-300">
            C
          </span>
          <span className="font-semibold tracking-tight">Chandana.dev</span>
        </a>
        <nav className="hidden md:flex items-center gap-1 text-sm">
          {[
            ["Home", "#top"],
            ["About", "#about"],
            ["Projects", "#projects"],
            ["Experience", "#experience"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="px-4 py-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}