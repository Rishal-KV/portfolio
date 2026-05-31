"use client";

import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Briefcase, ExternalLink, Sun, Moon, GraduationCap, FileDown } from "lucide-react";

export default function Home() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "dark" | "light" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
  };

  const skills = {
    languages: ["JavaScript (ES6+)", "TypeScript", "HTML5"],
    styling: ["Tailwind CSS", "SCSS / Sass", "Vanilla CSS", "Shadcn UI Components"],
    frameworks: ["React.js", "Next.js", "Node.js / Express.js", "Strapi CMS"],
    databases: ["MongoDB", "Mongoose"],
    tools: ["Zustand", "GSAP Animations", "Shiprocket API", "JWT Auth", "Docker", "Coolify Self-Hosting", "Git & GitHub"]
  };

  const jobs = [
    {
      role: "Frontend Developer",
      company: "Progbiz",
      duration: "Sept 2025 - Present",
      location: "Kannur, Kerala",
      bullets: [
        "Architected high-performance web applications in Next.js utilizing Server-Side Rendering (SSR) to ensure instant initial page loads and seamless user experiences.",
        "Refactored complex routing models, minimized page load times, and optimized Core Web Vitals to deliver outstanding SEO values and search engine indexability.",
        "Developed modular, accessible frontend interfaces using CSS Modules and Shadcn UI, seamlessly integrated with headless CMS pipelines."
      ]
    },
    {
      role: "MERN Stack Developer",
      company: "ZikraByte Solutions",
      duration: "Oct 2024 - 2025",
      location: "Bengaluru",
      bullets: [
        "Engineered full-stack business management platforms with React.js, Express.js, and MongoDB services.",
        "Implemented secure JWT user authorizations and customized role-based technician validation triggers.",
        "Collaborated with diverse team members to deploy modular components and optimize backend DB latencies."
      ]
    }
  ];

  const educations = [
    {
      degree: "MERN Stack Development",
      institution: "Brototype, Calicut",
      period: "2023 - 2024"
    },
    {
      degree: "B.Com - Computer Application",
      institution: "Kannur University",
      period: "2020 - 2023"
    }
  ];

  const mainProjects = [
    {
      title: "Clubwize — Social Media Application",
      desc: "A business organizational social application where users create clubs, nodes, and customized communication modules.",
      bullets: [
        "Developed frontend in Next.js with Shadcn components for responsive layout and Zustand state management.",
        "Built a robust Nest.js backend architecture to handle scalable business API routing and service integration."
      ],
      tech: "Next.js, Nest.js, Shadcn, Zustand",
      link: "#"
    },
    {
      title: "Repairo — Gadget Repair Platform",
      desc: "Comprehensive gadget booking platform allowing customers to reserve repair services for mobile and tablet brands.",
      bullets: [
        "Programmed responsive Next.js frontends and Node.js/Express.js backend services with MongoDB persistence.",
        "Implemented secure JWT role-based credentials for customers and technician dashboard layers."
      ],
      tech: "Next.js, Express.js, MongoDB, Zustand, JWT",
      link: "#"
    }
  ];

  const miniProjects = [
    {
      title: "Dutz — E-Commerce Website",
      desc: "Fulldates & Nuts shop featuring cart, order processing, and custom Shiprocket courier routing integration.",
      tech: "Next.js, Node.js, Express, Zustand, Shiprocket",
      link: "https://thedutz.com/"
    },
    {
      title: "Zaitoon Campus — School Portal",
      desc: "A high-performance school website engineered with Next.js, featuring optimized Server-Side Rendering (SSR) and seamless dynamic content updates powered by a Strapi headless CMS.",
      tech: "Next.js, Strapi CMS, REST APIs",
      link: "https://zaitooncampus.com/"
    },
    {
      title: "Traveloop — Tour Packages",
      desc: "Highly interactive static travel packages showcase with optimized performance and fluid GSAP scroll effects.",
      tech: "Next.js, GSAP, Responsive CSS",
      link: "https://traveloop.co/"
    },
    {
      title: "Figleaf — Static Uniform Corp Site",
      desc: "Corporate business website presenting uniform manufacturing lines, optimized for rapid SEO indexing.",
      tech: "Next.js, Semantic HTML, Lead Forms",
      link: "https://figleaf.com.qa/"
    }
  ];

  return (
    <div className="dashboard-container">
      {/* Header Bar */}
      <header className="dashboard-header">
        <div>
          <h1 className="dev-name">Rishal K V</h1>
          <p className="dev-title">MERN Stack Developer</p>
        </div>
        <div className="header-actions" style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <a 
            href="/resume-rishal.pdf" 
            download="resume-rishal.pdf" 
            className="theme-toggle-btn" 
            aria-label="Download CV"
            style={{ 
              textDecoration: "none", 
              gap: "8px", 
              padding: "10px 16px", 
              fontSize: "0.85rem", 
              fontWeight: "600",
              display: "inline-flex",
              alignItems: "center"
            }}
          >
            <FileDown size={14} className="icon-sub" />
            <span>Download CV</span>
          </a>
          <button onClick={toggleTheme} className="theme-toggle-btn" aria-label="Toggle visual theme">
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </header>

      {/* Main Grid: Split Layout */}
      <main className="dashboard-grid">
        {/* Left Column: Bio, Skills & Education */}
        <section className="dashboard-col left-col">
          {/* Bio Box */}
          <div className="card-minimal info-box">
            <h2 className="section-heading">About Me</h2>
            <p className="bio-text">
              Passionate MERN stack developer skilled in JavaScript, React.js, Node.js, Express.js, and MongoDB. Committed to writing clean, maintainable code and continuously expanding knowledge. Driven by a desire to contribute to cutting-edge projects, eager to gain diverse industry experience in crafting modern web applications alongside talented teams. Expert in Next.js, Nest.js, and Strapi CMS headless environments.
            </p>
            <div className="contact-info-list">
              <div className="contact-item">
                <Mail size={14} className="icon-sub" />
                <a href="mailto:rishkv923@gmail.com" className="contact-link">rishkv923@gmail.com</a>
              </div>
              <div className="contact-item">
                <Phone size={14} className="icon-sub" />
                <a href="tel:+917907392365" className="contact-link">+91 7907392365</a>
              </div>
              <div className="contact-item">
                <MapPin size={14} className="icon-sub" />
                <span>Kannur, Kerala (Remote-Ready)</span>
              </div>
            </div>
            <div className="socials-row">
              <a href="https://github.com/rishal-dev" target="_blank" rel="noopener noreferrer" className="social-link-btn">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true" style={{ display: "block" }}>
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.193 22 16.44 22 12.017 22 6.484 17.522 2 12 2z" />
                </svg>
                <span>GitHub</span>
              </a>
              <a href="https://linkedin.com/in/rishal-kv-69bb39235" target="_blank" rel="noopener noreferrer" className="social-link-btn">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true" style={{ display: "block" }}>
                  <path fillRule="evenodd" clipRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Education Box */}
          <div className="card-minimal education-box">
            <h2 className="section-heading">Education</h2>
            <div className="education-list">
              {educations.map((edu, idx) => (
                <div key={idx} className="edu-item" style={{ marginBottom: idx === educations.length - 1 ? 0 : "16px" }}>
                  <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                    <GraduationCap size={16} className="icon-sub" style={{ marginTop: "2px" }} />
                    <div>
                      <h4 style={{ fontSize: "0.92rem", fontWeight: 700, color: "var(--text-primary)" }}>{edu.degree}</h4>
                      <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>{edu.institution}</p>
                      <span style={{ fontSize: "0.78rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>{edu.period}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Stack Box */}
          <div className="card-minimal skills-box">
            <h2 className="section-heading">Technical Stack</h2>
            <div className="skills-categories-grid">
              <div>
                <h3 className="category-sub">Languages</h3>
                <div className="tags-flex">
                  {skills.languages.map((s) => <span key={s} className="minimal-tag">{s}</span>)}
                </div>
              </div>
              <div>
                <h3 className="category-sub">Styling & UI Architecture</h3>
                <div className="tags-flex">
                  {skills.styling.map((s) => <span key={s} className="minimal-tag">{s}</span>)}
                </div>
              </div>
              <div>
                <h3 className="category-sub">Frameworks & Headless CMS</h3>
                <div className="tags-flex">
                  {skills.frameworks.map((s) => <span key={s} className="minimal-tag">{s}</span>)}
                </div>
              </div>
              <div>
                <h3 className="category-sub">Databases & Querying</h3>
                <div className="tags-flex">
                  {skills.databases.map((s) => <span key={s} className="minimal-tag">{s}</span>)}
                </div>
              </div>
              <div>
                <h3 className="category-sub">Integrations & Workflows</h3>
                <div className="tags-flex">
                  {skills.tools.map((s) => <span key={s} className="minimal-tag">{s}</span>)}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Right Column: Experience & Projects */}
        <section className="dashboard-col right-col">
          {/* Experience Timeline */}
          <div className="card-minimal experience-box">
            <h2 className="section-heading">Selected Experience (1+ Yrs)</h2>
            <div className="jobs-list">
              {jobs.map((job, index) => (
                <div key={index} className="job-item">
                  <div className="job-header">
                    <div>
                      <h4 className="job-role-text">{job.role}</h4>
                      <span className="job-company-text">{job.company} — <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", fontWeight: "normal" }}>{job.location}</span></span>
                    </div>
                    <span className="job-date-text">{job.duration}</span>
                  </div>
                  <ul className="job-bullet-list">
                    {job.bullets.map((b, idx) => (
                      <li key={idx} className="job-bullet-item">{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Main Projects Box */}
          <div className="card-minimal projects-box">
            <h2 className="section-heading">Main Projects</h2>
            <div className="projects-flex">
              {mainProjects.map((proj, index) => (
                <div key={index} className="project-item-min">
                  <div className="project-header-min">
                    <h4 className="project-title-min">{proj.title}</h4>
                    <span style={{ color: "var(--text-muted)", fontSize: "0.8rem", display: "flex", gap: "4px", alignItems: "center" }}>
                      <span className="project-tech-min" style={{ marginRight: "4px" }}>{proj.tech}</span>
                    </span>
                  </div>
                  <p className="project-desc-min" style={{ marginBottom: "10px" }}>{proj.desc}</p>
                  <ul className="job-bullet-list" style={{ marginTop: "4px", marginBottom: "8px" }}>
                    {proj.bullets.map((b, idx) => (
                      <li key={idx} className="job-bullet-item" style={{ fontSize: "0.82rem" }}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Mini Projects Box */}
          <div className="card-minimal projects-box">
            <h2 className="section-heading">Other Featured Work</h2>
            <div className="mini-projects-grid">
              {miniProjects.map((proj: any, index: number) => (
                <div key={index} className="project-item-min" style={{ padding: "12px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
                      <h4 className="project-title-min" style={{ fontSize: "0.85rem", margin: 0 }}>{proj.title}</h4>
                      {proj.link && (
                        <a href={proj.link} target="_blank" rel="noopener noreferrer" className="project-link-min" aria-label={`View Live Link for ${proj.title}`}>
                          <ExternalLink size={12} />
                        </a>
                      )}
                    </div>
                    <p className="project-desc-min" style={{ fontSize: "0.78rem", marginBottom: "8px", lineHeight: "1.3" }}>{proj.desc}</p>
                  </div>
                  <span className="project-tech-min" style={{ fontSize: "0.7rem" }}>{proj.tech}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Simplified Footer */}
      <footer className="dashboard-footer">
        <span>© {new Date().getFullYear()} Rishal. Built for recruitment.</span>
      </footer>
    </div>
  );
}
