import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import {
  Bot,
  Workflow,
  Phone,
  MessageSquare,
  Database,
  Zap,
  Mail,
  Github,
  Linkedin,
  MapPin,
  ArrowUpRight,
  Sparkles,
  Cpu,
  Network,
  Quote,
  Award,
  BookOpen,
  FileText,
} from "lucide-react";
import HighLevelCert from "@/assets/HighLevel.pdf.asset.json";
import MakeCert from "@/assets/Make.com.pdf.asset.json";
import N8nCert from "@/assets/n8n.pdf.asset.json";
import PromptCert from "@/assets/Prompt_Engineering.pdf.asset.json";
import ZapierCert from "@/assets/Zapier.pdf.asset.json";
import Photo from "@/assets/photo.jpg.asset.json";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

const NAV = [
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Work", href: "#work" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const CERTIFICATIONS = [
  { name: "n8n Automation", issuer: "n8n Training", file: N8nCert.url },
  { name: "Make.com Automation", issuer: "Make Academy", file: MakeCert.url },
  { name: "Zapier Automation", issuer: "Zapier", file: ZapierCert.url },
  { name: "GoHighLevel", issuer: "HighLevel", file: HighLevelCert.url },
  { name: "Prompt Engineering", issuer: "Prompt Engineering Certification", file: PromptCert.url },
];

const PROFESSIONAL_DEVELOPMENT = [
  "Claude",
  "Hermes",
  "Llama",
  "Mistral",
  "Model Context Protocol (MCP)",
  "Agent-to-Agent (A2A) Communication",
  "Multi-Agent Systems",
  "AI Memory Systems",
  "Enterprise AI Architecture",
  "Responsible AI",
];

const SERVICES = [
  {
    icon: Bot,
    title: "AI Agents & Conversational AI",
    desc: "Custom AI agents, chatbots, and multi-agent systems powered by GPT-4o, Gemini, and function calling.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    desc: "End-to-end business automation with n8n, Make, Zapier, and GoHighLevel — production-ready and monitored.",
  },
  {
    icon: Phone,
    title: "Voice AI Systems",
    desc: "24/7 AI voice receptionists that book appointments, handle calls, and integrate with your CRM.",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp AI Assistants",
    desc: "Multi-modal WhatsApp concierges for support, booking, and document understanding via RAG.",
  },
  {
    icon: Database,
    title: "RAG Knowledge Bases",
    desc: "Semantic search assistants over your documents using vector databases and embeddings.",
  },
  {
    icon: Zap,
    title: "CRM & API Integration",
    desc: "Custom integrations across HubSpot, Salesforce, GHL, WhatsApp Business, Slack, and beyond.",
  },
];

const WORKS = [
  {
    title: "AI Career Automation Platform + Resume Optimize",
    tag: "AI Agents · RAG",
    desc: "AI recruitment assistant that discovers jobs, analyzes descriptions, and generates ATS-optimized resumes and cover letters.",
    tech: ["n8n", "OpenRouter", "GPT-4o", "Gemini", "Slack"],
  },
  {
    title: "AI Voice Receptionist",
    tag: "Voice AI",
    desc: "24/7 voice receptionist that books, reschedules, and cancels appointments via natural conversation.",
    tech: ["Vapi", "GPT-4o", "n8n", "Google Calendar"],
  },
  {
    title: "Lead Intelligence & CRM Automation",
    tag: "CRM · Automation",
    desc: "Enterprise lead capture, AI enrichment, scoring, dedup, CRM sync, and personalized follow-ups.",
    tech: ["GoHighLevel", "n8n", "Claude", "HubSpot", "Twilio"],
  },
  {
    title: "WhatsApp AI Concierge — Vitality Wellness",
    tag: "Conversational AI · RAG",
    desc: "Multi-modal WhatsApp assistant for support, bookings, membership, nutrition, and document Q&A.",
    tech: ["WhatsApp API", "GPT-4o", "Whisper", "Supabase"],
  },
  {
    title: "RAG Enterprise Knowledge Assistant",
    tag: "RAG · Vector Search",
    desc: "Indexes Google Drive docs into a vector DB and answers via Telegram/WhatsApp with semantic search.",
    tech: ["n8n", "OpenAI", "Gemini", "Supabase Vector", "Telegram"],
  },
];

const SKILLS = [
  "AI Agents", "Conversational AI", "Voice AI", "RAG", "Prompt Engineering",
  "GPT-4o", "Gemini", "Whisper", "n8n", "GoHighLevel", "Make", "Zapier",
  "REST APIs", "Webhooks", "OAuth", "WhatsApp Business API", "Google Calendar API",
  "Supabase", "Vector Databases", "Multi-Agent Systems",
];

const EXPERIENCE = [
  {
    role: "AI Automation Engineer",
    org: "Independent AI Solutions Development",
    period: "2025 — Present",
    bullets: [
      "Design enterprise workflow architectures integrating AI, CRMs, and APIs.",
      "Build AI Agents, conversational assistants, and Voice AI systems.",
      "Implement Retrieval-Augmented Generation (RAG) over enterprise documents.",
      "Deploy production-grade automations with monitoring, retries, and logging.",
    ],
  },
  {
    role: "B.S. Computer Science",
    org: "AMA Computer College",
    period: "Graduated 2000",
    bullets: [
      "Foundation in computer science, software engineering, and systems design.",
    ],
  },
];

const TESTIMONIALS = [
  {
    quote:
      "John transformed our lead pipeline. What used to take our team hours now happens autonomously — the AI qualifies, enriches, and routes every lead.",
    name: "Operations Director",
    role: "B2B SaaS Company",
  },
  {
    quote:
      "The WhatsApp concierge he built handles 80% of our customer questions instantly. Bookings went up and our staff finally has time for high-value work.",
    name: "Founder",
    role: "Wellness Center",
  },
  {
    quote:
      "Rare mix of AI depth and business pragmatism. He shipped a voice receptionist in weeks that actually closes appointments.",
    name: "Managing Partner",
    role: "Professional Services Firm",
  },
];

function Portfolio() {
  useClickRipple();
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <div className="bg-black">
          <Services />
          <Experience />
          <Certifications />
          <Work />
          <Testimonials />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[3px] bg-primary origin-left z-[60]"
    />
  );
}

function useTheme() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  useEffect(() => {
    const saved = (typeof window !== "undefined" && localStorage.getItem("theme")) as "dark" | "light" | null;
    const initial = saved ?? (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
    setTheme(initial);
    document.documentElement.classList.toggle("light", initial === "light");
  }, []);
  const toggle = () => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      document.documentElement.classList.toggle("light", next === "light");
      localStorage.setItem("theme", next);
      return next;
    });
  };
  return { theme, toggle };
}

function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="relative overflow-hidden grid h-9 w-9 place-items-center rounded-full border border-border bg-surface/60 text-foreground hover:border-primary/60 hover:text-primary transition-colors"
    >
      {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}

function useClickRipple() {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest<HTMLElement>(
        "a, button, [role='button']"
      );
      if (!target) return;
      const rect = target.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const ripple = document.createElement("span");
      ripple.className = "lv-ripple";
      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
      ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
      const prevPos = getComputedStyle(target).position;
      const prevOverflow = getComputedStyle(target).overflow;
      if (prevPos === "static") target.style.position = "relative";
      if (prevOverflow !== "hidden") target.style.overflow = "hidden";
      target.appendChild(ripple);
      setTimeout(() => ripple.remove(), 650);
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);
}

function Logo() {
  return (
    <a href="#top" className="group flex items-center gap-2.5">
      <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-primary-foreground font-display font-bold text-sm shadow-[0_0_20px_-4px_var(--primary)] transition-transform group-hover:scale-105">
        JP
      </span>
      <span className="hidden sm:flex flex-col leading-none">
        <span className="font-display font-semibold text-sm tracking-tight">John Paulus</span>
        <span className="font-mono text-[10px] text-muted-foreground tracking-wider uppercase">Menrige · AI Eng.</span>
      </span>
    </a>
  );
}

function Header() {
  return (
    <header id="top" className="fixed top-0 inset-x-0 z-50 border-b border-border/60 backdrop-blur-xl bg-background/70">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Hire me <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 grid-lines opacity-40" aria-hidden />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--gradient-hero)" }}
        aria-hidden
      />
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto rounded-2xl overflow-hidden border-2 border-primary/30 shadow-[0_0_40px_-8px_oklch(0.74_0.19_55_/_0.35)]">
            <img
              src={Photo.url}
              alt="John Paulus Menrige"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 backdrop-blur px-3 py-1 text-xs font-mono text-muted-foreground"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          Available for AI automation projects
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mt-6 font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight max-w-5xl"
        >
          Building <span className="text-gradient">intelligent</span> automation for modern businesses.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed"
        >
          I'm <span className="text-foreground font-medium">John Paulus Menrige</span> — an AI
          Automation Engineer designing AI agents, voice assistants, and workflow systems that
          eliminate repetitive work and scale operations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold hover:opacity-90 transition"
          >
            Start a project <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-6 py-3 text-sm font-medium hover:bg-surface transition"
          >
            See selected work
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl"
        >
          {[
            { k: "5+", v: "Enterprise AI systems shipped" },
            { k: "24/7", v: "Autonomous voice & chat agents" },
            { k: "10+", v: "Integrated platforms & APIs" },
            { k: "∞", v: "Hours automated for clients" },
          ].map((s) => (
            <div key={s.v} className="border-l border-border/60 pl-4">
              <div className="font-display text-3xl md:text-4xl font-bold text-primary">{s.k}</div>
              <div className="mt-1 text-xs md:text-sm text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function SectionHeader({ eyebrow, title, desc }: { eyebrow: string; title: string; desc?: string }) {
  return (
    <div className="max-w-3xl mb-14">
      <div className="font-mono text-xs uppercase tracking-widest text-primary flex items-center gap-2">
        <span className="h-px w-8 bg-primary" /> {eyebrow}
      </div>
      <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold tracking-tight">{title}</h2>
      {desc && <p className="mt-4 text-lg text-muted-foreground">{desc}</p>}
    </div>
  );
}

function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Services"
          title="What I build"
          desc="Production-ready AI automation systems designed to solve real operational problems and scale with your business."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative p-6 rounded-2xl border border-border bg-card/60 backdrop-blur hover:border-primary/60 hover:bg-card transition-all"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1fr_1.4fr] gap-12">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <SectionHeader
            eyebrow="Experience"
            title="A track record built on shipping."
            desc="Currently focused on independent AI automation engagements — from architecture to deployment."
          />
          <div className="flex flex-wrap gap-2 mt-4">
            {SKILLS.slice(0, 12).map((sk) => (
              <span key={sk} className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-mono text-muted-foreground">
                {sk}
              </span>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          {EXPERIENCE.map((e, i) => (
            <motion.div
              key={e.role}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="p-7 rounded-2xl border border-border bg-card/60 backdrop-blur"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-2xl font-semibold">{e.role}</h3>
                <span className="font-mono text-xs text-primary">{e.period}</span>
              </div>
              <div className="mt-1 text-sm text-muted-foreground">{e.org}</div>
              <ul className="mt-5 space-y-2">
                {e.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-sm text-muted-foreground">
                    <Sparkles className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Certifications() {
  return (
    <section id="certifications" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Certifications"
          title="Training & credentials."
          desc="Formal training in leading AI automation platforms — plus ongoing professional development in the frontier of AI."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {CERTIFICATIONS.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative rounded-2xl border border-border bg-card/60 backdrop-blur hover:border-primary/60 transition-all overflow-hidden flex flex-col"
            >
              <a
                href={c.file}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block bg-white"
                aria-label={`Open ${c.name} certificate`}
              >
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <object
                    data={`${c.file}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                    type="application/pdf"
                    className="w-full h-full pointer-events-none"
                    aria-label={`${c.name} certificate preview`}
                  >
                    <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
                      Certificate preview unavailable
                    </div>
                  </object>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <div className="p-5 flex items-start gap-3 border-t border-border">
                <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Award className="h-5 w-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-base font-semibold leading-tight">{c.name}</h3>
                  <p className="mt-0.5 text-xs text-muted-foreground">{c.issuer}</p>
                  <a
                    href={c.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-primary hover:underline"
                  >
                    <FileText className="h-3 w-3" /> Open certificate <ArrowUpRight className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>


        <div className="mt-16 rounded-2xl border border-border bg-card/60 backdrop-blur p-8 md:p-10">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
              <BookOpen className="h-5 w-5" />
            </div>
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-primary">Professional Development</div>
              <h3 className="font-display text-2xl font-semibold mt-1">Actively expanding expertise in</h3>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {PROFESSIONAL_DEVELOPMENT.map((p) => (
              <span
                key={p}
                className="rounded-full border border-border bg-surface px-4 py-1.5 text-sm font-medium text-foreground/90 hover:border-primary/60 hover:text-primary transition-colors"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectDiagram({ tech, tag }: { tech: string[]; tag: string }) {
  // Take up to 6 tech chips as peripheral nodes
  const nodes = tech.slice(0, 6);
  // Slot positions around central hub (viewBox 640 x 260)
  const slots = [
    { x: 70,  y: 55,  side: "L" as const },
    { x: 70,  y: 205, side: "L" as const },
    { x: 570, y: 55,  side: "R" as const },
    { x: 570, y: 205, side: "R" as const },
    { x: 250, y: 30,  side: "T" as const },
    { x: 390, y: 30,  side: "T" as const },
  ];
  const cx = 320, cy = 130;

  const pathTo = (x: number, y: number, side: "L" | "R" | "T") => {
    if (side === "L") {
      const midX = (x + cx) / 2;
      return `M ${x + 34} ${y} H ${midX} V ${cy} H ${cx - 46}`;
    }
    if (side === "R") {
      const midX = (x + cx) / 2;
      return `M ${x - 34} ${y} H ${midX} V ${cy} H ${cx + 46}`;
    }
    // Top
    const midY = (y + cy) / 2;
    return `M ${x} ${y + 34} V ${midY} H ${cx} V ${cy - 46}`;
  };

  return (
    <div className="mt-6 rounded-xl border border-primary/20 bg-[oklch(0.16_0.03_240)]/60 overflow-hidden">
      <svg viewBox="0 0 640 260" className="w-full h-auto block" role="img" aria-label={`${tag} architecture diagram`}>
        <defs>
          <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="oklch(0.85 0.15 200)" stopOpacity="0.9" />
            <stop offset="60%" stopColor="oklch(0.6 0.18 220)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="oklch(0.4 0.15 240)" stopOpacity="0" />
          </radialGradient>
          <pattern id="hex" width="34" height="30" patternUnits="userSpaceOnUse">
            <path d="M17 0 L34 8 L34 22 L17 30 L0 22 L0 8 Z" fill="none" stroke="oklch(0.7 0.12 220)" strokeOpacity="0.08" strokeWidth="0.6" />
          </pattern>
          <linearGradient id="wire" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="oklch(0.75 0.14 200)" stopOpacity="0.15" />
            <stop offset="100%" stopColor="oklch(0.85 0.16 195)" stopOpacity="0.85" />
          </linearGradient>
        </defs>

        <rect width="640" height="260" fill="oklch(0.14 0.04 245)" />
        <rect width="640" height="260" fill="url(#hex)" />

        {/* Wires */}
        {nodes.map((_, i) => {
          const s = slots[i];
          return (
            <path
              key={`w-${i}`}
              d={pathTo(s.x, s.y, s.side)}
              fill="none"
              stroke="url(#wire)"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          );
        })}

        {/* Connector dots along wires */}
        {nodes.map((_, i) => {
          const s = slots[i];
          const dotX = s.side === "T" ? s.x : (s.side === "L" ? (s.x + cx) / 2 : (s.x + cx) / 2);
          const dotY = s.side === "T" ? (s.y + cy) / 2 : cy;
          return (
            <circle key={`d-${i}`} cx={dotX} cy={dotY} r="3.5" fill="oklch(0.85 0.16 195)" opacity="0.9" />
          );
        })}

        {/* Central hub glow */}
        <circle cx={cx} cy={cy} r="80" fill="url(#hubGlow)" />
        {/* Central hub node */}
        <g transform={`translate(${cx - 40} ${cy - 40})`}>
          <rect x="0" y="0" width="80" height="80" rx="12" fill="oklch(0.22 0.06 230)" stroke="oklch(0.85 0.16 195)" strokeWidth="1.2" />
          {/* faceted polygon */}
          <polygon points="40,14 66,30 66,54 40,70 14,54 14,30" fill="none" stroke="oklch(0.9 0.15 195)" strokeWidth="1" opacity="0.9" />
          <polygon points="40,14 66,30 40,42 14,30" fill="oklch(0.9 0.16 195)" opacity="0.25" />
          <polygon points="14,30 40,42 40,70 14,54" fill="oklch(0.7 0.16 210)" opacity="0.3" />
          <polygon points="66,30 40,42 40,70 66,54" fill="oklch(0.55 0.16 230)" opacity="0.35" />
          {/* nodes on polygon */}
          {[[40,14],[66,30],[66,54],[40,70],[14,54],[14,30],[40,42]].map(([px,py],k)=>(
            <circle key={k} cx={px} cy={py} r="2" fill="oklch(0.95 0.05 195)" />
          ))}
        </g>

        {/* Peripheral nodes */}
        {nodes.map((label, i) => {
          const s = slots[i];
          return (
            <g key={`n-${i}`} transform={`translate(${s.x - 34} ${s.y - 22})`}>
              <rect width="68" height="44" rx="8" fill="oklch(0.18 0.05 235)" stroke="oklch(0.75 0.14 200)" strokeWidth="1" />
              <rect x="1" y="1" width="66" height="42" rx="7" fill="none" stroke="oklch(0.9 0.15 195)" strokeOpacity="0.25" strokeWidth="0.6" />
              <text x="34" y="27" textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize="10" fill="oklch(0.95 0.03 200)" letterSpacing="0.5">
                {label.length > 10 ? label.slice(0, 9) + "…" : label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

function Work() {
  return (
    <section id="work" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Selected Work"
          title="Enterprise AI automation solutions."
          desc="A snapshot of production systems I've designed and shipped for real businesses."
        />
        <div className="grid md:grid-cols-2 gap-4">
          {WORKS.map((w, i) => (
            <motion.article
              key={w.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`group relative p-8 rounded-2xl border border-border bg-card/60 backdrop-blur hover:border-primary/60 transition-all ${i === 0 ? "md:col-span-2" : ""}`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-primary">
                  <Cpu className="h-3.5 w-3.5" /> {w.tag}
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
              <h3 className="mt-4 font-display text-2xl md:text-3xl font-semibold">{w.title}</h3>
              <p className="mt-3 text-muted-foreground max-w-2xl">{w.desc}</p>
              <ProjectDiagram tech={w.tech} tag={w.tag} />
              <div className="mt-6 flex flex-wrap gap-2">
                {w.tech.map((t) => (
                  <span key={t} className="rounded-md border border-border bg-surface px-2.5 py-1 text-[11px] font-mono text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}


function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 md:py-32">
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{ background: "var(--gradient-mesh)" }}
        aria-hidden
      />
      <div className="relative max-w-7xl mx-auto px-6">
        <SectionHeader eyebrow="Testimonials" title="What clients say." />
        <div className="grid md:grid-cols-3 gap-4">
          {TESTIMONIALS.map((t, i) => (
            <motion.blockquote
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-7 rounded-2xl border border-border bg-card/70 backdrop-blur flex flex-col"
            >
              <Quote className="h-6 w-6 text-primary" />
              <p className="mt-4 text-foreground/90 leading-relaxed flex-1">"{t.quote}"</p>
              <footer className="mt-6 pt-6 border-t border-border">
                <div className="font-display font-semibold">{t.name}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{t.role}</div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-3xl border border-border bg-gradient-to-br from-card to-surface p-10 md:p-16 relative overflow-hidden">
          <div
            className="absolute -top-32 -right-32 h-96 w-96 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, oklch(0.88 0.22 130 / 0.25), transparent 60%)" }}
            aria-hidden
          />
          <div className="relative grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-primary flex items-center gap-2">
                <Network className="h-4 w-4" /> Let's Build
              </div>
              <h2 className="mt-4 font-display text-4xl md:text-6xl font-bold tracking-tight">
                Have a workflow worth automating?
              </h2>
              <p className="mt-6 text-lg text-muted-foreground max-w-lg">
                Tell me about the process eating your team's time. I'll design an AI-powered
                system that runs it — reliably, at scale.
              </p>
              <a
                href="mailto:jpmenrige@gmail.com"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold hover:opacity-90 transition"
              >
                <Mail className="h-4 w-4" /> jpmenrige@gmail.com
              </a>
            </div>

            <div className="space-y-3">
              <ContactRow icon={Mail} label="Email" value="jpmenrige@gmail.com" href="mailto:jpmenrige@gmail.com" />
              <ContactRow icon={Phone} label="Phone" value="+63 955 293 1936" href="tel:+639552931936" />
              <ContactRow icon={Linkedin} label="LinkedIn" value="john-paulus-menrige" href="https://www.linkedin.com/in/john-paulus-menrige-76b424358" />
              <ContactRow icon={Github} label="GitHub" value="jpmenrige-source" href="https://github.com/jpmenrige-source" />
              <ContactRow icon={MapPin} label="Location" value="Philippines" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
}) {
  const Comp: React.ElementType = href ? "a" : "div";
  return (
    <Comp
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      className="group flex items-center justify-between gap-4 rounded-xl border border-border bg-background/40 px-5 py-4 hover:border-primary/60 hover:bg-background/70 transition-all"
    >
      <div className="flex items-center gap-4">
        <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
          <Icon className="h-4 w-4" />
        </div>
        <div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{label}</div>
          <div className="text-sm font-medium">{value}</div>
        </div>
      </div>
      {href && <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />}
    </Comp>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-primary text-primary-foreground font-display font-bold text-xs">
            JP
          </span>
          <span className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} John Paulus Menrige. All rights reserved.
          </span>
        </div>
        <div className="flex items-center gap-4 text-muted-foreground">
          <a href="https://github.com/jpmenrige-source" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition"><Github className="h-4 w-4" /></a>
          <a href="https://www.linkedin.com/in/john-paulus-menrige-76b424358" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition"><Linkedin className="h-4 w-4" /></a>
          <a href="mailto:jpmenrige@gmail.com" className="hover:text-primary transition"><Mail className="h-4 w-4" /></a>
        </div>
      </div>
    </footer>
  );
}
