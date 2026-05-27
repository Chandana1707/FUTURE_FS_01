import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { useState } from "react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { z } from "zod";
import { ArrowUpRight, Mail, Github, Linkedin, Phone } from "lucide-react";

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
    <section id="top" className="relative overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute inset-0 radial-glow" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
      <div className="relative max-w-6xl mx-auto px-6 md:px-10 pt-40 pb-24 w-full">
        <p className="text-xs uppercase tracking-[0.3em] text-accent mb-6 font-semibold">
          Hello
        </p>
        <h1 className="text-[clamp(2.5rem,8vw,6.5rem)] leading-[1] tracking-tight font-extrabold">
          Engineer in the<br />making —<br />
          <span className="text-gradient">frontend &amp; ML</span> focused.
        </h1>
        <p className="mt-10 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
          I&apos;m Chandana, a Computer Science student at CMR Engineering College.
          I love building responsive web interfaces, exploring how machine learning
          can solve real-world problems, and shipping clean, production-ready projects.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a href="#projects" className="px-6 py-3 rounded-full bg-foreground text-background font-medium hover:opacity-90 transition-opacity">
            View Projects
          </a>
          <a href="#contact" className="px-6 py-3 rounded-full border border-white/15 hover:bg-white/5 transition-colors font-medium">
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="relative max-w-6xl mx-auto px-6 md:px-10">
        <p className="text-xs uppercase tracking-[0.3em] text-accent mb-6 font-semibold">About</p>
        <h2 className="text-[clamp(2rem,6vw,4.5rem)] leading-[1.05] tracking-tight font-extrabold max-w-5xl">
          Engineer in the making — <span className="text-gradient">frontend &amp; AI</span> focused.
        </h2>
        <p className="mt-10 text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
          I&apos;m Chandana, a Computer Science student at CMR Engineering College.
          I love designing responsive interfaces, working with databases, and exploring
          how machine learning can be wired into real products. My current focus:
          shipping clean, production-ready web and ML projects.
        </p>
        <div className="mt-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-8">Tech Stack</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillGroups.map((g) => (
              <div key={g.label} className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-accent/40 transition-colors">
                <div className="text-xs uppercase tracking-widest text-accent font-semibold mb-3">{g.label}</div>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((i) => (
                    <span key={i} className="text-sm px-3 py-1 rounded-full bg-white/5 border border-white/10">{i}</span>
                  ))}
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
    <section id="projects" className="relative py-24 md:py-32 border-t border-white/10">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="relative max-w-6xl mx-auto px-6 md:px-10">
        <p className="text-xs uppercase tracking-[0.3em] text-accent mb-6 font-semibold">Projects</p>
        <h2 className="text-[clamp(2rem,6vw,4.5rem)] leading-[1.05] tracking-tight font-extrabold mb-16">
          Things I&apos;ve <span className="text-gradient">built</span>.
        </h2>
        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group relative p-7 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-accent/40 transition-all overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity radial-glow" />
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-muted-foreground">{p.year}</span>
                  <ArrowUpRight className="size-5 text-muted-foreground group-hover:text-accent group-hover:rotate-45 transition-all" />
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-gradient transition-colors">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{p.blurb}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-[11px] px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Certifications() {
  return (
    <section id="certifications" className="relative py-24 md:py-32 border-t border-white/10">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="relative max-w-6xl mx-auto px-6 md:px-10">
        <p className="text-xs uppercase tracking-[0.3em] text-accent mb-6 font-semibold">Credentials</p>
        <h2 className="text-[clamp(2rem,6vw,4.5rem)] leading-[1.05] tracking-tight font-extrabold mb-12">
          Certified in <span className="text-gradient">cloud &amp; AI</span>.
        </h2>
        <ul className="space-y-3">
          {certifications.map((c, i) => (
            <li
              key={c}
              className="flex items-center gap-6 p-5 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-accent/40 hover:bg-white/[0.04] transition-all group"
            >
              <span className="font-mono text-xs text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-base md:text-lg flex-1">
                {c}
              </span>
              <ArrowUpRight className="size-5 text-muted-foreground group-hover:text-accent group-hover:rotate-45 transition-all" />
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
    <section id="contact" className="relative py-24 md:py-32 border-t border-white/10 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-0 radial-glow" />
      <div className="relative max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12 md:gap-20">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-6 font-semibold">Contact</p>
          <h2 className="text-[clamp(2rem,6vw,4.5rem)] leading-[1.05] tracking-tight font-extrabold mb-10">
            Let&apos;s build <span className="text-gradient">something</span>.
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
              className="w-full bg-white/[0.02] border border-white/10 rounded-xl focus:border-accent outline-none px-4 py-3 text-base mt-2 transition-colors"
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-widest text-muted-foreground">Email</label>
            <input
              name="email"
              type="email"
              required
              maxLength={160}
              className="w-full bg-white/[0.02] border border-white/10 rounded-xl focus:border-accent outline-none px-4 py-3 text-base mt-2 transition-colors"
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-widest text-muted-foreground">Message</label>
            <textarea
              name="message"
              required
              maxLength={1000}
              rows={5}
              className="w-full bg-white/[0.02] border border-white/10 rounded-xl focus:border-accent outline-none px-4 py-3 text-base mt-2 resize-none transition-colors"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-violet-500 via-sky-400 to-cyan-300 text-background font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-opacity disabled:opacity-50"
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
    <footer className="border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <p>© 2026 Chandana Vilasagaram. Crafted with care.</p>
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
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
