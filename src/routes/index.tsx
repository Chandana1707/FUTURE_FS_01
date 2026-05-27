import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { useState } from "react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { z } from "zod";
import { ArrowUpRight, Mail, MapPin, Github, Linkedin, Phone } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const projects = [
  {
    year: "2026",
    title: "Hazardous Gas Monitoring & Prediction",
    blurb:
      "ML-based platform monitoring and predicting hazardous gas levels in rural and remote areas — enabling early risk detection and safer communities.",
    tags: ["Machine Learning", "Python", "IoT"],
  },
  {
    year: "2025",
    title: "FaceConnect",
    blurb:
      "Secure, automated attendance system powered by facial recognition — replacing paper sheets with a calm, reliable workflow.",
    tags: ["Computer Vision", "Python", "OpenCV"],
  },
  {
    year: "2025",
    title: "Handicraft Store",
    blurb:
      "Responsive online storefront for handmade goods, featuring product catalog, cart, and order persistence.",
    tags: ["HTML", "CSS", "JS", "MySQL"],
  },
  {
    year: "2025",
    title: "Hospital Management System",
    blurb:
      "Web-based record system for patients, doctors, and appointments with relational data integrity.",
    tags: ["PHP", "MySQL"],
  },
  {
    year: "2025",
    title: "Tourism App",
    blurb:
      "Companion app guiding tourists through points of interest with curated itineraries.",
    tags: ["Mobile", "JavaScript"],
  },
];

const certifications = [
  "Oracle Cloud Infrastructure — AI Foundations Associate",
  "Google Cloud — Associate Cloud Engineer",
  "Salesforce Certified Associate",
  "VJ Hackathon 2025 — Abstract Review (Unstop)",
];

const skillGroups = [
  { label: "Languages", items: ["Java", "C", "Python"] },
  { label: "Web", items: ["HTML", "CSS", "JavaScript", "React", "Node.js"] },
  { label: "Database", items: ["MySQL"] },
  { label: "Tools", items: ["GitHub", "VS Code"] },
  { label: "Foundations", items: ["DSA", "OOP", "DBMS", "Algorithms"] },
];

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(80),
  email: z.string().trim().email("Enter a valid email").max(160),
  message: z.string().trim().min(10, "Tell me a bit more").max(1000),
});

function Hero() {
  return (
    <section className="grain relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-10 pt-20 md:pt-32 pb-16 md:pb-24">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8">
          Portfolio · 2026
        </p>
        <h1 className="font-display text-[clamp(3rem,10vw,9rem)] leading-[0.95] tracking-tight">
          Chandana
          <br />
          <span className="italic text-accent">Vilasagaram</span>
        </h1>
        <div className="mt-10 grid md:grid-cols-3 gap-8 items-end">
          <p className="md:col-span-2 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Computer Science engineer based in Hyderabad. I build calm, considered
            interfaces and tinker with machine learning systems that solve real
            problems for real places.
          </p>
          <div className="flex flex-col gap-2 text-sm">
            <span className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="size-4" /> Hyderabad, India
            </span>
            <span className="flex items-center gap-2 text-muted-foreground">
              <span className="size-2 rounded-full bg-accent animate-pulse" />
              Open to internships
            </span>
          </div>
        </div>
      </div>
      <div className="border-y border-border/60 overflow-hidden bg-foreground text-background py-5">
        <div className="marquee flex gap-12 whitespace-nowrap font-display text-3xl md:text-4xl">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex gap-12 shrink-0">
              {["Frontend", "Machine Learning", "Databases", "Problem Solving", "React", "Python", "Cloud"].map(
                (w) => (
                  <span key={w} className="flex items-center gap-12">
                    <span className="italic">{w}</span>
                    <span className="text-accent">✦</span>
                  </span>
                ),
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 md:px-10 py-24 md:py-32">
      <div className="grid md:grid-cols-12 gap-10">
        <p className="md:col-span-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
          (01) About
        </p>
        <div className="md:col-span-9 space-y-6">
          <h2 className="font-display text-4xl md:text-6xl leading-tight max-w-3xl">
            A motivated student who treats code as a craft, not a checklist.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Currently pursuing a B.Tech in Computer Science at CMR Engineering College
            with a CGPA of <span className="text-foreground">8.62</span>. I&apos;m drawn
            to the intersection of clean frontend work, thoughtful databases, and
            ML-driven systems — especially when the result helps people in places
            technology often forgets.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-border">
            {[
              { k: "8.62", v: "Current CGPA" },
              { k: "90.2%", v: "Intermediate" },
              { k: "10/10", v: "SSC GPA" },
              { k: "4+", v: "Certifications" },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-display text-4xl md:text-5xl text-accent">{s.k}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-2">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="bg-foreground text-background py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-background/50 mb-4">
              (02) Selected work
            </p>
            <h2 className="font-display text-4xl md:text-6xl">
              Things I&apos;ve <span className="italic text-accent">built</span>.
            </h2>
          </div>
        </div>
        <div className="divide-y divide-background/15 border-y border-background/15">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group grid md:grid-cols-12 gap-6 py-8 md:py-10 cursor-default hover:bg-background/[0.03] transition-colors px-2"
            >
              <div className="md:col-span-1 text-sm text-background/50 font-mono">{p.year}</div>
              <div className="md:col-span-5">
                <h3 className="font-display text-2xl md:text-3xl group-hover:text-accent transition-colors">
                  {p.title}
                </h3>
              </div>
              <p className="md:col-span-4 text-background/70 text-sm leading-relaxed">{p.blurb}</p>
              <div className="md:col-span-2 flex md:justify-end items-start gap-2 flex-wrap">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] uppercase tracking-wider px-2 py-1 border border-background/20 rounded-full text-background/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 md:px-10 py-24 md:py-32">
      <div className="grid md:grid-cols-12 gap-10">
        <p className="md:col-span-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
          (03) Toolkit
        </p>
        <div className="md:col-span-9 space-y-10">
          {skillGroups.map((g) => (
            <div key={g.label} className="grid md:grid-cols-12 gap-4 items-baseline border-b border-border pb-6">
              <div className="md:col-span-3 font-display text-2xl italic text-accent">{g.label}</div>
              <div className="md:col-span-9 flex flex-wrap gap-x-6 gap-y-2 text-lg">
                {g.items.map((i) => (
                  <span key={i}>{i}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Certifications() {
  return (
    <section id="certifications" className="max-w-6xl mx-auto px-6 md:px-10 pb-24 md:pb-32">
      <div className="grid md:grid-cols-12 gap-10">
        <p className="md:col-span-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
          (04) Credentials
        </p>
        <ul className="md:col-span-9 space-y-4">
          {certifications.map((c, i) => (
            <li
              key={c}
              className="flex items-start gap-6 py-4 border-b border-border group"
            >
              <span className="font-mono text-xs text-muted-foreground pt-2">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-lg md:text-xl flex-1 group-hover:text-accent transition-colors">
                {c}
              </span>
              <ArrowUpRight className="size-5 text-muted-foreground group-hover:text-accent transition-colors" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Contact() {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = contactSchema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      message: fd.get("message"),
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setLoading(true);
    const subject = encodeURIComponent(`Portfolio contact — ${parsed.data.name}`);
    const body = encodeURIComponent(`${parsed.data.message}\n\n— ${parsed.data.name} (${parsed.data.email})`);
    window.location.href = `mailto:vilasagaramchandana@gmail.com?subject=${subject}&body=${body}`;
    setTimeout(() => {
      setLoading(false);
      toast.success("Opening your email client…");
      (e.target as HTMLFormElement).reset();
    }, 600);
  };

  return (
    <section id="contact" className="bg-secondary py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12 md:gap-20">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
            (05) Say hello
          </p>
          <h2 className="font-display text-5xl md:text-7xl leading-none mb-10">
            Let&apos;s build
            <br />
            <span className="italic text-accent">something</span>.
          </h2>
          <div className="space-y-4 text-sm">
            <a
              href="mailto:vilasagaramchandana@gmail.com"
              className="flex items-center gap-3 hover:text-accent transition-colors"
            >
              <Mail className="size-4" />
              <span>vilasagaramchandana@gmail.com</span>
            </a>
            <a href="tel:+919391053897" className="flex items-center gap-3 hover:text-accent transition-colors">
              <Phone className="size-4" />
              <span>+91 93910 53897</span>
            </a>
            <a
              href="https://github.com/Chandana1707"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 hover:text-accent transition-colors"
            >
              <Github className="size-4" />
              <span>github.com/Chandana1707</span>
            </a>
            <a
              href="https://www.linkedin.com/in/chandanavilasagaram"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 hover:text-accent transition-colors"
            >
              <Linkedin className="size-4" />
              <span>/in/chandanavilasagaram</span>
            </a>
          </div>
        </div>
        <form onSubmit={onSubmit} className="space-y-6">
          <div>
            <label className="text-xs uppercase tracking-widest text-muted-foreground">Name</label>
            <input
              name="name"
              required
              maxLength={80}
              className="w-full bg-transparent border-b border-foreground/30 focus:border-accent outline-none py-3 text-lg transition-colors"
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-widest text-muted-foreground">Email</label>
            <input
              name="email"
              type="email"
              required
              maxLength={160}
              className="w-full bg-transparent border-b border-foreground/30 focus:border-accent outline-none py-3 text-lg transition-colors"
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-widest text-muted-foreground">Message</label>
            <textarea
              name="message"
              required
              maxLength={1000}
              rows={4}
              className="w-full bg-transparent border-b border-foreground/30 focus:border-accent outline-none py-3 text-lg resize-none transition-colors"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="group inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 rounded-full hover:bg-accent transition-colors disabled:opacity-50"
          >
            {loading ? "Sending…" : "Send message"}
            <ArrowUpRight className="size-4 group-hover:rotate-45 transition-transform" />
          </button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Chandana Vilasagaram. Crafted with care.</p>
        <p className="font-mono">Hyderabad · IN</p>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
