import { motion, useReducedMotion } from "framer-motion";
import { Link, Mail, NotebookPen } from "lucide-react";
import type { Identity } from "../data/content";

interface ContactProps {
  identity: Identity;
}

export function Contact({ identity }: ContactProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      id="contact"
      aria-labelledby="contact-title"
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="soc-card rounded-2xl p-7 sm:p-9">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-300/90">// 04 — CONTACT</p>
        <h2 id="contact-title" className="mt-4 font-heading text-3xl font-semibold text-slate-100 sm:text-4xl">
          Ready to strengthen your detection stack.
        </h2>
        <p className="mt-4 max-w-3xl text-slate-300">
          Open to remote collaborations where AI, cloud automation, and security operations need to move from dashboards to decisive action.
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href={`mailto:${identity.email}`}
            className="inline-flex items-center gap-2 rounded-md border border-emerald-300/40 bg-emerald-300/10 px-3.5 py-2 text-sm font-medium text-emerald-200 transition-colors duration-200 hover:bg-emerald-300/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/80"
          >
            <Mail className="size-4" /> {identity.email}
          </a>
          <a
            href={identity.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-slate-400/20 bg-slate-900/80 px-3.5 py-2 text-sm text-slate-200 transition-colors duration-200 hover:border-emerald-300/50 hover:text-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/80"
          >
            <Link className="size-4" /> GitHub
          </a>
          <a
            href={identity.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-slate-400/20 bg-slate-900/80 px-3.5 py-2 text-sm text-slate-200 transition-colors duration-200 hover:border-emerald-300/50 hover:text-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/80"
          >
            <Link className="size-4" /> LinkedIn
          </a>
          <a
            href={identity.medium}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-slate-400/20 bg-slate-900/80 px-3.5 py-2 text-sm text-slate-200 transition-colors duration-200 hover:border-emerald-300/50 hover:text-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/80"
          >
            <NotebookPen className="size-4" /> Medium
          </a>
        </div>
      </div>
    </motion.section>
  );
}
