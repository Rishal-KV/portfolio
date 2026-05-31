"use client";

import { ArrowUp } from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
  const handleScrollToTop = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className={styles.footer} role="contentinfo">
      {/* Floating Scroll Top Trigger */}
      <button
        onClick={handleScrollToTop}
        className={styles.scrollTopBtn}
        aria-label="Scroll back to top of the page"
        id="scroll-top-trigger-btn"
      >
        <ArrowUp size={20} aria-hidden="true" />
      </button>

      <div className={`${styles.container} container`}>
        <div className={styles.copyright}>
          &copy; {new Date().getFullYear()} Rishal. All rights reserved. Made with Next.js & Vanilla CSS.
        </div>

        <nav className={styles.links} aria-label="Footer Quick Links">
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, "#home")}
            className={styles.linkItem}
            id="footer-link-home"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={(e) => handleLinkClick(e, "#about")}
            className={styles.linkItem}
            id="footer-link-about"
          >
            About
          </a>
          <a
            href="#experience"
            onClick={(e) => handleLinkClick(e, "#experience")}
            className={styles.linkItem}
            id="footer-link-experience"
          >
            Experience
          </a>
          <a
            href="#projects"
            onClick={(e) => handleLinkClick(e, "#projects")}
            className={styles.linkItem}
            id="footer-link-projects"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, "#contact")}
            className={styles.linkItem}
            id="footer-link-contact"
          >
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
}
