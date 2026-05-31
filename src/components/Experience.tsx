"use client";

import { Briefcase, Calendar, MapPin } from "lucide-react";
import styles from "./Experience.module.css";

interface Job {
  id: string;
  role: string;
  company: string;
  location: string;
  duration: string;
  summary: string;
  bullets: string[];
  tech: string[];
}

export default function Experience() {
  const jobs: Job[] = [
    {
      id: "job-0",
      role: "Lead Full-Stack Developer",
      company: "TechInnovate Systems",
      location: "San Francisco, CA (Remote)",
      duration: "2024 - Present",
      summary: "Directing the modernization of core SaaS platforms. Leading a collaborative squad of 4 developers to engineer robust interfaces and lightning-fast database pipelines.",
      bullets: [
        "Architected a Next.js 15 micro-frontend dashboard that slashed page load times by 32% and achieved a 100/100 performance score on Google Lighthouse.",
        "Engineered a concurrent data sync engine in Go, facilitating reliable, real-time message brokering across distributed instances.",
        "Refactored Prisma query engines and created custom indexes in PostgreSQL, resulting in a 45% reduction in overall API response latencies.",
        "Orchestrated developer environment transitions to Docker, increasing local bootstrapping speed by 3x and streamlining CI/CD pipelines."
      ],
      tech: ["Next.js", "React", "Node.js", "Go", "Prisma ORM", "PostgreSQL", "Docker", "Redis"]
    },
    {
      id: "job-1",
      role: "Senior Software Engineer",
      company: "CloudOrion Tech",
      location: "Boston, MA",
      duration: "2022 - 2024",
      summary: "Spearheaded complex migration routes from legacy monolith monoliths to robust, serverless microservice environments, enhancing overall infrastructure durability.",
      bullets: [
        "Spearheaded database migrations of monolithic data to serverless Node.js microservices hosted on AWS Lambda and API Gateway, cutting infrastructure costs by 22%.",
        "Designed and implemented complex REST API models handling over 120k daily active sessions with a 99.99% overall availability record.",
        "Crafted custom GitHub Actions CI/CD workflows, automating integration testing, lint inspections, and secure Vercel production deployments.",
        "Integrated robust JWT and OAuth2 authorization mechanisms with refresh tokens to protect sensitive financial report pipelines."
      ],
      tech: ["Node.js", "Go", "Express", "AWS Lambda", "MongoDB", "GitHub Actions", "Docker"]
    },
    {
      id: "job-2",
      role: "Full-Stack Developer",
      company: "DevCraft Studio",
      location: "Austin, TX (Hybrid)",
      duration: "2020 - 2022",
      summary: "Focused on crafting high-fidelity responsive websites, custom SEO pipelines, and integrating scalable third-party vendor platforms.",
      bullets: [
        "Programmed responsive client applications in React and Redux, implementing fine-tuned accessibility overrides (WCAG AA compliance).",
        "Integrated secure Stripe payment checkouts and dynamic email subscription handlers, increasing customer checkouts by 18%.",
        "Optimized client-side bundles and image distributions, boosting the Core Web Vitals rating from 'Needs Improvement' to 'Good' for all screens.",
        "Maintained robust server configurations in Express.js and managed data storage schemas in MongoDB Atlas."
      ],
      tech: ["React.js", "Redux", "Express", "Node.js", "MongoDB", "Stripe API", "Vanilla CSS"]
    }
  ];

  return (
    <section id="experience" className={styles.experienceSection}>
      <div className="container">
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <h2 className={styles.title}>
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className={styles.subtitle}>
            A timeline of my professional roles, technical achievements, and leadership contributions.
          </p>
        </div>

        {/* Timeline (Fully Expanded & Static) */}
        <div className={styles.timeline}>
          {jobs.map((job) => (
            <div
              key={job.id}
              className={styles.timelineItem}
              id={`timeline-item-${job.id}`}
            >
              {/* Timeline node icon */}
              <div className={styles.timelineNode} aria-hidden="true">
                <Briefcase size={14} style={{ color: "var(--primary)" }} />
              </div>

              {/* Card Container */}
              <div
                className={`${styles.card} glass-panel`}
                id={`experience-card-${job.id}`}
              >
                <div className={styles.cardHeader}>
                  <div className={styles.headerInfo}>
                    <h3 className={styles.jobTitle}>{job.role}</h3>
                    <div className={styles.companyRow}>
                      <span className={styles.companyName}>{job.company}</span>
                      <span className={styles.companyBadge} id={`badge-${job.id}`}>
                        <MapPin size={12} style={{ display: "inline", marginRight: "4px", verticalAlign: "middle" }} />
                        <span style={{ verticalAlign: "middle" }}>{job.location}</span>
                      </span>
                    </div>
                  </div>
                  <div className={styles.dateRange} id={`date-${job.id}`}>
                    <Calendar size={14} style={{ display: "inline", marginRight: "6px", verticalAlign: "middle" }} aria-hidden="true" />
                    <span style={{ verticalAlign: "middle" }}>{job.duration}</span>
                  </div>
                </div>

                <p className={styles.summary}>{job.summary}</p>

                {/* Achievements List */}
                <div className={styles.detailsWrapper} id={`details-${job.id}`}>
                  <ul className={styles.bullets}>
                    {job.bullets.map((bullet, idx) => (
                      <li key={idx} id={`bullet-${job.id}-${idx}`}>{bullet}</li>
                    ))}
                  </ul>

                  <div className={styles.techStack} aria-label="Technologies used">
                    {job.tech.map((t) => (
                      <span key={t} className={styles.techTag}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
