"use client";

import { useState } from "react";
import { ExternalLink, Code, Layers, Sparkles, Terminal } from "lucide-react";
import styles from "./Projects.module.css";

interface Project {
  id: string;
  title: string;
  desc: string;
  category: "frontend" | "backend" | "saas";
  tags: string[];
  github: string;
  live: string;
  glowColor: string;
  codeSnippet: string;
}

export default function Projects() {
  const [filter, setFilter] = useState<"all" | "frontend" | "backend" | "saas">("all");

  const projects: Project[] = [
    {
      id: "proj-1",
      title: "PrismaLens",
      desc: "An interactive database orchestrator and visual Prisma schema designer. Import models, auto-generate relationships, and execute safe testing queries.",
      category: "backend",
      tags: ["Prisma", "PostgreSQL", "Node.js", "Docker"],
      github: "https://github.com/rishal-dev/prismalens",
      live: "https://prismalens.dev",
      glowColor: "rgba(99, 102, 241, 0.15)",
      codeSnippet: "model User {\n  id    Int    @id @default(autoincrement())\n  posts Post[]\n}"
    },
    {
      id: "proj-2",
      title: "DevFlow QA",
      desc: "A high-performance Q&A software platform for programmers. Features dynamic code sandboxes, full-text semantic searching, and detailed developer analytics.",
      category: "saas",
      tags: ["Next.js", "React", "TypeScript", "Redis"],
      github: "https://github.com/rishal-dev/devflow",
      live: "https://devflow-qa.com",
      glowColor: "rgba(14, 165, 233, 0.15)",
      codeSnippet: "const query = searchParams.get('q');\nconst posts = await db.search(query);"
    },
    {
      id: "proj-3",
      title: "LogiMesh Telemetry",
      desc: "Real-time Go network router and telemetry system. Monitored distributed clusters using light WebSocket channels and parsed concurrent JSON logs.",
      category: "backend",
      tags: ["Go", "Redis", "WebSockets", "Docker"],
      github: "https://github.com/rishal-dev/logimesh",
      live: "https://logimesh-live.net",
      glowColor: "rgba(16, 185, 129, 0.15)",
      codeSnippet: "func main() {\n  hub := newHub()\n  go hub.run()\n}"
    },
    {
      id: "proj-4",
      title: "GlowUI Library",
      desc: "An open-source accessible React design system featuring glassmorphic effects, robust keyboard focus outlines, and responsive CSS variables.",
      category: "frontend",
      tags: ["React", "TypeScript", "CSS Variables", "Storybook"],
      github: "https://github.com/rishal-dev/glowui",
      live: "https://glowui.design",
      glowColor: "rgba(244, 63, 94, 0.15)",
      codeSnippet: "export const GlassCard = ({ children }) => {\n  return <div className={styles.glass}>{children}</div>;\n}"
    },
    {
      id: "proj-5",
      title: "Promptify AI",
      desc: "SaaS system designed for collaborative Prompt Engineering. Store template snippets, run model comparisons, and cache responses securely via Redis.",
      category: "saas",
      tags: ["Next.js", "OpenAI API", "MongoDB", "Auth.js"],
      github: "https://github.com/rishal-dev/promptify",
      live: "https://promptify-ai.app",
      glowColor: "rgba(245, 158, 11, 0.15)",
      codeSnippet: "const res = await openai.chat.completions.create({\n  model: 'gpt-4'\n});"
    }
  ];

  const filteredProjects = filter === "all" ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className={styles.projectsSection}>
      <div className="container">
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <h2 className={styles.title}>
            Selected <span className="gradient-text">Projects</span>
          </h2>
          <p className={styles.subtitle}>
            A curated selection of software systems, developer platforms, and responsive interfaces.
          </p>
        </div>

        {/* Filter Toolbar */}
        <div className={styles.filterContainer} role="group" aria-label="Filter Projects">
          {["all", "frontend", "backend", "saas"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat as any)}
              className={`${styles.filterBtn} ${filter === cat ? styles.filterActive : ""}`}
              id={`filter-btn-${cat}`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className={styles.grid}>
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className={`${styles.card} glass-panel glass-panel-hover`}
              id={`project-card-${project.id}`}
            >
              {/* Card visual header */}
              <div className={styles.cardVisual} aria-hidden="true">
                {/* Glowing sphere behind */}
                <div
                  className={styles.cardVisualGlow}
                  style={{
                    backgroundColor: project.glowColor,
                    boxShadow: `0 0 30px ${project.glowColor}`
                  }}
                ></div>
                {/* Code syntax decoration */}
                <pre className={styles.codeMockup}>
                  <code>{project.codeSnippet}</code>
                </pre>
              </div>

              {/* Card content info */}
              <div className={styles.cardContent}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <span className={styles.featuredBadge} id={`category-${project.id}`}>
                    {project.category}
                  </span>
                </div>
                
                <p className={styles.projectDesc}>{project.desc}</p>
                
                <div className={styles.tags} aria-label="Technologies used">
                  {project.tags.map((t) => (
                    <span key={t} className={styles.tag}>
                      {t}
                    </span>
                  ))}
                </div>

                {/* Footer and interactive buttons */}
                <div className={styles.cardFooter}>
                  <div className={styles.links}>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.linkIcon}
                      aria-label={`View GitHub repository for ${project.title}`}
                      id={`project-github-${project.id}`}
                    >
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true" style={{ display: "block" }}>
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.193 22 16.44 22 12.017 22 6.484 17.522 2 12 2z" />
                      </svg>
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.linkIcon}
                      aria-label={`View live demo for ${project.title}`}
                      id={`project-live-${project.id}`}
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                  <div style={{ color: "var(--text-muted)", display: "flex", alignItems: "center", gap: "6px" }} aria-hidden="true">
                    {project.category === "frontend" && <Code size={14} />}
                    {project.category === "backend" && <Terminal size={14} />}
                    {project.category === "saas" && <Sparkles size={14} />}
                    <span style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)" }}>
                      {project.category === "frontend" ? "ui/ux" : project.category === "backend" ? "sys/db" : "product"}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
