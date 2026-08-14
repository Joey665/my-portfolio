import { motion, useReducedMotion } from "framer-motion";
import type { SkillGroup } from "../data/content";

interface SkillMatrixProps {
  groups: SkillGroup[];
}

export function SkillMatrix({ groups }: SkillMatrixProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {groups.map((group, groupIndex) => (
        <motion.article
          key={group.title}
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, delay: reduceMotion ? 0 : groupIndex * 0.07 }}
          whileHover={reduceMotion ? undefined : { y: -4 }}
          className="soc-card rounded-xl p-4"
        >
          <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.16em] text-emerald-300">
            {group.title}
          </h3>
          <ul className="flex flex-wrap gap-2" aria-label={`${group.title} skills`}>
            {group.skills.map((skill) => (
              <li
                key={skill}
                className="rounded-md border border-slate-400/20 bg-slate-900/75 px-2.5 py-1 font-mono text-[0.67rem] uppercase tracking-[0.11em] text-slate-200"
              >
                {skill}
              </li>
            ))}
          </ul>
        </motion.article>
      ))}
    </div>
  );
}
