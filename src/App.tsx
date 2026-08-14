import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Nav } from "./components/Nav";
import { ProjectCard } from "./components/ProjectCard";
import { Section } from "./components/Section";
import { SkillMatrix } from "./components/SkillMatrix";
import { StatsBar } from "./components/StatsBar";
import { WritingCard } from "./components/WritingCard";
import { articles, identity, projects, skillGroups, stats } from "./data/content";

function App() {
  return (
    <div className="min-h-screen bg-[#0A0F14] text-slate-100">
      <Nav />
      <main>
        <Hero identity={identity} />
        <StatsBar stats={stats} />

        <Section id="projects" marker="01" title="Projects">
          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </Section>

        <Section id="skills" marker="02" title="Skill Matrix">
          <SkillMatrix groups={skillGroups} />
        </Section>

        <Section id="writing" marker="03" title="Field Notes">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {articles.map((article, index) => (
              <WritingCard key={article.title} article={article} index={index} />
            ))}
          </div>
        </Section>

        <Contact identity={identity} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
