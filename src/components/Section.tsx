import { motion, useReducedMotion } from "framer-motion";
import type { PropsWithChildren } from "react";

interface SectionProps extends PropsWithChildren {
  id: string;
  marker: string;
  title: string;
}

export function Section({ id, marker, title, children }: SectionProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      id={id}
      aria-labelledby={`${id}-title`}
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="relative mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8"
    >
      <header className="mb-7 border-b border-slate-400/10 pb-4">
        <h2 id={`${id}-title`} className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-300/85">
          {`// ${marker} — ${title.toUpperCase()}`}
        </h2>
      </header>
      <div>{children}</div>
    </motion.section>
  );
}
