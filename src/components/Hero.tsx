"use client";

import { ArrowRight, Cpu, HardDrive, Shield, CheckCircle, MapPin } from "lucide-react";
import styles from "./Hero.module.css";

export default function Hero() {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      const offset = 80;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      const offset = 80;
      const elementPosition = projectsSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="home" className={styles.heroSection}>
      <div className={`${styles.grid} container`}>
        {/* Intro Info */}
        <div className={styles.introContent}>
          <div className={styles.badge} id="status-badge">
            <span className={styles.pulsingDot} aria-hidden="true"></span>
            Available for new opportunities
          </div>
          
          <h1 className={styles.title}>
            Building high-performance <br />
            <span className="gradient-text">Web Architectures</span> <br />
            & user interfaces.
          </h1>
          
          <p className={styles.subtitle}>
            I am a full-stack software developer who crafts modular, accessible, and fast web products. Specializing in TypeScript, React, Next.js, and back-end systems.
          </p>
          
          <div className={styles.ctaGroup}>
            <button
              onClick={handleScrollToContact}
              className="btn btn-primary"
              id="cta-contact-btn"
            >
              Get in touch
              <ArrowRight size={18} />
            </button>
            <a
              href="#projects"
              onClick={handleScrollToProjects}
              className="btn btn-secondary"
              id="cta-projects-link"
            >
              View Projects
            </a>
          </div>
        </div>

        {/* Developer Spec Card (Static & Highly Legible) */}
        <div className={styles.terminalWrapper}>
          <div className={`${styles.terminal} glass-panel`} id="developer-specs-card">
            {/* Header line */}
            <div className={styles.terminalHeader}>
              <div className={styles.terminalButtons}>
                <span className={`${styles.dot} ${styles.red}`} aria-hidden="true"></span>
                <span className={`${styles.dot} ${styles.yellow}`} aria-hidden="true"></span>
                <span className={`${styles.dot} ${styles.green}`} aria-hidden="true"></span>
              </div>
              <span className={styles.terminalTitle}>system_diagnostics.log</span>
            </div>

            {/* Spec lines */}
            <div className={styles.terminalBody}>
              <div className={styles.specTitle}>
                <span>[ENGINEERING SPECIFICATIONS]</span>
              </div>

              <div className={styles.specItem}>
                <Cpu size={16} className={styles.specIcon} />
                <div className={styles.specText}>
                  <span className={styles.specKey}>Current Role:</span>
                  <span className={styles.specValue}>Lead Full-Stack Developer</span>
                </div>
              </div>

              <div className={styles.specItem}>
                <HardDrive size={16} className={styles.specIcon} />
                <div className={styles.specText}>
                  <span className={styles.specKey}>Core Stack:</span>
                  <span className={styles.specValue}>Next.js, React, Node.js, Go, Postgres, Docker</span>
                </div>
              </div>

              <div className={styles.specItem}>
                <CheckCircle size={16} className={styles.specIcon} />
                <div className={styles.specText}>
                  <span className={styles.specKey}>Experience:</span>
                  <span className={styles.specValue}>4+ Years (Production SaaS Systems)</span>
                </div>
              </div>

              <div className={styles.specItem}>
                <MapPin size={16} className={styles.specIcon} />
                <div className={styles.specText}>
                  <span className={styles.specKey}>Workspace:</span>
                  <span className={styles.specValue}>San Francisco, CA (Remote / Hybrid)</span>
                </div>
              </div>

              <div className={styles.specItem}>
                <Shield size={16} className={styles.specIcon} />
                <div className={styles.specText}>
                  <span className={styles.specKey}>Authorizations:</span>
                  <span className={styles.specValue}>Secure OAuth, Stripe Checkout, AWS Deployments</span>
                </div>
              </div>

              {/* Status block */}
              <div className={styles.statusBlock}>
                <div className={styles.statusTitle}>SYSTEM COMPILATION: SUCCESSFUL</div>
                <div className={styles.statusText}>
                  All core frameworks, lint systems, and queries verified. Ready to develop.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
