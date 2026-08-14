import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink, Link } from "lucide-react";
import type { Project } from "../data/content";

interface ProjectCardProps {
  project: Project;
  index: number;
}

function isThreatTag(tag: string): boolean {
  return /threat|intrusion|malware|cve|incident/i.test(tag);
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, delay: reduceMotion ? 0 : index * 0.08 }}
      whileHover={reduceMotion ? undefined : { y: -4 }}
      className="soc-card group rounded-xl p-5 sm:p-6"
    >
      <h3 className="text-lg font-semibold text-slate-100 sm:text-xl">{project.title}</h3>
      <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-[0.97rem]">{project.description}</p>

      <ul className="mt-5 flex flex-wrap gap-2" aria-label="Project tags">
        {project.tags.map((tag) => {
          const threat = isThreatTag(tag);
          return (
            <li
              key={tag}
              className={`rounded-md border px-2.5 py-1 font-mono text-[0.68rem] uppercase tracking-[0.12em] ${
                threat
                  ? "border-red-300/30 bg-red-400/10 text-red-300"
                  : "border-cyan-300/20 bg-cyan-300/10 text-cyan-200"
              }`}
            >
              {tag}
            </li>
          );
        })}
      </ul>

      <div className="mt-6 flex flex-wrap gap-3">
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-slate-400/15 bg-slate-900/80 px-3 py-2 text-xs font-medium uppercase tracking-wider text-slate-100 transition-colors duration-200 hover:border-emerald-300/50 hover:text-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/80"
          >
            <ExternalLink className="size-3.5" /> Live
          </a>
        ) : null}

        {project.repoUrl ? (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-slate-400/15 bg-slate-900/80 px-3 py-2 text-xs font-medium uppercase tracking-wider text-slate-100 transition-colors duration-200 hover:border-emerald-300/50 hover:text-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/80"
          >
            <Link className="size-3.5" /> Repo
          </a>
        ) : null}
      </div>
    </motion.article>
  );
}
