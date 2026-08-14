import { motion, useReducedMotion } from "framer-motion";
import type { Stat } from "../data/content";

interface StatsBarProps {
  stats: Stat[];
}

export function StatsBar({ stats }: StatsBarProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section aria-label="Highlights" className="border-b border-slate-400/10 bg-slate-950/70">
      <div className="mx-auto grid w-full max-w-6xl gap-3 px-4 py-5 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {stats.map((stat, index) => (
          <motion.p
            key={stat.value}
            initial={reduceMotion ? false : { opacity: 0, y: 8 }}
            whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.35, delay: reduceMotion ? 0 : index * 0.06 }}
            className="rounded-md border border-slate-400/15 bg-slate-900/60 px-3 py-2 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-cyan-200"
          >
            {stat.value}
          </motion.p>
        ))}
      </div>
    </section>
  );
}
