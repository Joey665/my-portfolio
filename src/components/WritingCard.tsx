import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Article } from "../data/content";

interface WritingCardProps {
  article: Article;
  index: number;
}

function isThreatTag(tag: string): boolean {
  return /threat|malware|osint/i.test(tag);
}

export function WritingCard({ article, index }: WritingCardProps) {
  const reduceMotion = useReducedMotion();
  const threat = isThreatTag(article.tag);

  return (
    <motion.a
      href={article.url}
      target="_blank"
      rel="noreferrer"
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.42, delay: reduceMotion ? 0 : index * 0.05 }}
      whileHover={reduceMotion ? undefined : { y: -4 }}
      className="soc-card group block rounded-xl p-5 outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/80"
      aria-label={`Read: ${article.title}`}
    >
      <p
        className={`inline-flex rounded-md border px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-[0.14em] ${
          threat
            ? "border-red-300/30 bg-red-400/10 text-red-300"
            : "border-cyan-300/25 bg-cyan-300/10 text-cyan-200"
        }`}
      >
        {article.tag}
      </p>
      <h3 className="mt-3 text-base leading-snug text-slate-100 transition-colors duration-200 group-hover:text-emerald-300 sm:text-lg">
        {article.title}
      </h3>
      <span className="mt-4 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.12em] text-slate-400 transition-colors duration-200 group-hover:text-emerald-300">
        Read on Medium <ArrowUpRight className="size-3.5" />
      </span>
    </motion.a>
  );
}
