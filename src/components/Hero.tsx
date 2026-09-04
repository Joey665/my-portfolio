import { motion, useReducedMotion } from "framer-motion";
import { FileText, Link, Mail, MapPin, NotebookPen } from "lucide-react";
import type { Identity } from "../data/content";

interface HeroProps {
  identity: Identity;
}

export function Hero({ identity }: HeroProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section id="home" className="relative overflow-hidden border-b border-slate-400/10">
      <div aria-hidden="true" className="hero-grid" />
      <div aria-hidden="true" className="hero-scanline" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 22 }}
          animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.22em] text-cyan-300/90">
            // Security Operations Command Center
          </p>
          <h1 className="text-balance font-heading text-[clamp(2.5rem,8vw,5rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-slate-50">
            {identity.name}
          </h1>
          <p
            className={`mt-6 font-mono text-sm text-emerald-300 sm:text-base ${
              reduceMotion ? "" : "typing-line"
            }`}
            style={reduceMotion ? undefined : { ["--typing-steps" as string]: 33 }}
          >
            {identity.role}
          </p>
          <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-slate-300 sm:text-lg">
            {identity.sub}
          </p>

          <p className="mt-7 inline-flex items-center gap-2 rounded-md border border-slate-400/15 bg-slate-900/60 px-3 py-2 font-mono text-xs uppercase tracking-wide text-slate-300">
            <MapPin className="size-4 text-cyan-300" />
            {identity.location}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={identity.resumeUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Download Resume"
              className="inline-flex items-center gap-2 rounded-md border border-emerald-300/40 bg-emerald-300/10 px-3.5 py-2 text-sm font-medium text-emerald-200 transition-colors duration-200 hover:bg-emerald-300/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/80"
            >
              <FileText className="size-4" /> Resume
            </a>
            <a
              href={identity.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="inline-flex items-center gap-2 rounded-md border border-slate-400/15 bg-slate-900/70 px-3 py-2 text-sm text-slate-100 transition-colors duration-200 hover:border-emerald-300/40 hover:text-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/80"
            >
              <Link className="size-4" /> GitHub
            </a>
            <a
              href={identity.medium}
              target="_blank"
              rel="noreferrer"
              aria-label="Medium"
              className="inline-flex items-center gap-2 rounded-md border border-slate-400/15 bg-slate-900/70 px-3 py-2 text-sm text-slate-100 transition-colors duration-200 hover:border-emerald-300/40 hover:text-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/80"
            >
              <NotebookPen className="size-4" /> Medium
            </a>
            <a
              href={identity.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="inline-flex items-center gap-2 rounded-md border border-slate-400/15 bg-slate-900/70 px-3 py-2 text-sm text-slate-100 transition-colors duration-200 hover:border-emerald-300/40 hover:text-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/80"
            >
              <Link className="size-4" /> LinkedIn
            </a>
            <a
              href={`mailto:${identity.email}`}
              aria-label="Email"
              className="inline-flex items-center gap-2 rounded-md border border-slate-400/15 bg-slate-900/70 px-3 py-2 text-sm text-slate-100 transition-colors duration-200 hover:border-emerald-300/40 hover:text-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/80"
            >
              <Mail className="size-4" /> Email
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
