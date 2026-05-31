"use client";

import { Monitor, Server, Shield, Layers } from "lucide-react";
import styles from "./About.module.css";

interface Skill {
  name: string;
  pct: number;
}

export default function About() {
  const skillCategories = [
    {
      title: "Frontend Stack",
      icon: <Monitor size={18} />,
      skills: [
        { name: "Next.js / React", pct: 95 },
        { name: "TypeScript", pct: 92 },
        { name: "HTML5 / CSS Modules", pct: 90 },
        { name: "State (Redux/Zustand)", pct: 85 },
      ]
    },
    {
      title: "Backend Core",
      icon: <Server size={18} />,
      skills: [
        { name: "Node.js / Express", pct: 94 },
        { name: "Go (Golang)", pct: 80 },
        { name: "NestJS Framework", pct: 85 },
        { name: "REST & GraphQL APIs", pct: 90 },
      ]
    },
    {
      title: "Database & Cloud",
      icon: <Shield size={18} />,
      skills: [
        { name: "PostgreSQL / Prisma", pct: 88 },
        { name: "Docker Containers", pct: 82 },
        { name: "AWS (S3, EC2, Lambda)", pct: 75 },
        { name: "Redis Caching / PubSub", pct: 80 },
      ]
    },
    {
      title: "Tools & Testing",
      icon: <Layers size={18} />,
      skills: [
        { name: "Git & GitHub Workflow", pct: 95 },
        { name: "Vite / Webpack Bundlers", pct: 85 },
        { name: "CI/CD (GitHub Actions)", pct: 80 },
        { name: "Jest / Playwright", pct: 82 },
      ]
    }
  ];

  const keyFacts = [
    { num: "4+", label: "Years Experience", desc: "Building scalable systems" },
    { num: "25+", label: "Projects Completed", desc: "From SaaS to complex tools" },
    { num: "99.9%", label: "System Uptime", desc: "Focus on stable cloud setups" },
    { num: "100%", label: "Responsive Design", desc: "Ensuring visual excellence" },
  ];

  return (
    <section id="about" className={styles.aboutSection}>
      <div className="container">
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <h2 className={styles.title}>
            About <span className="gradient-text">My Journey</span>
          </h2>
          <p className={styles.subtitle}>
            A brief overview of my engineering philosophy, career achievements, and core stack.
          </p>
        </div>

        {/* Biography & Key Stats */}
        <div className={styles.bioGrid}>
          <div className={styles.bioWrapper}>
            <p className={styles.bioText}>
              I am a software engineer focused on writing <span className={styles.bioHighlight}>highly optimized, reliable code</span>. My design philosophy is centered around visual perfection, clean architectural separation, and snappy performance. I enjoy bridging the gap between robust system engineering and premium, responsive user interfaces.
            </p>
            <p className={styles.bioText}>
              I strive to stay at the cutting edge of web technology. Whether it's architecting custom caching mechanisms in Redis, building interactive visual dashboards in Next.js, or writing serverless backend pipelines, I always design with security, responsiveness, and clean maintenance in mind.
            </p>
          </div>

          <div className={styles.keyFacts}>
            {keyFacts.map((fact, idx) => (
              <div key={idx} className={`${styles.factCard} glass-panel`} id={`fact-card-${idx}`}>
                <span className={styles.factNumber}>{fact.num}</span>
                <span className={styles.factLabel}>{fact.label}</span>
                <span className={styles.factDesc}>{fact.desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Board (Transparent, Statically Displayed at Once) */}
        <div className={styles.skillsHeadingRow}>
          <h3 className={styles.skillsSectionTitle}>Technical Proficiencies</h3>
        </div>

        <div className={styles.skillsGrid}>
          {skillCategories.map((category, catIdx) => (
            <div key={catIdx} className={`${styles.skillCategoryCard} glass-panel`} id={`skill-category-${catIdx}`}>
              <div className={styles.categoryHeader}>
                <span className={styles.categoryIcon} aria-hidden="true">{category.icon}</span>
                <h4 className={styles.categoryTitle}>{category.title}</h4>
              </div>
              
              <div className={styles.skillsList}>
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className={styles.skillItem}>
                    <div className={styles.skillHeader}>
                      <span className={styles.skillName}>{skill.name}</span>
                      <span className={styles.skillPct}>{skill.pct}%</span>
                    </div>
                    <div className={styles.progressTrack} aria-hidden="true">
                      <div
                        className={styles.progressBar}
                        style={{ width: `${skill.pct}%` }}
                        id={`skill-bar-${catIdx}-${skillIdx}`}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
