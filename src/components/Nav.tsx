import { Link } from "@tanstack/react-router";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/60">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
        <Link to="/" className="font-display text-2xl tracking-tight">
          Chandana<span className="text-accent">.</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#about" className="hover:text-accent transition-colors">About</a>
          <a href="#projects" className="hover:text-accent transition-colors">Work</a>
          <a href="#skills" className="hover:text-accent transition-colors">Skills</a>
          <a href="#certifications" className="hover:text-accent transition-colors">Credentials</a>
        </nav>
        <a
          href="#contact"
          className="text-sm px-4 py-2 rounded-full bg-foreground text-background hover:bg-accent transition-colors"
        >
          Get in touch
        </a>
      </div>
    </header>
  );
}