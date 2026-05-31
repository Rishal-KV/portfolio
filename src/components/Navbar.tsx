"use client";

import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, Terminal } from "lucide-react";
import styles from "./Navbar.module.css";

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    // Check initial theme preference
    const savedTheme = localStorage.getItem("theme") as "dark" | "light" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      setTheme("light");
      document.documentElement.setAttribute("data-theme", "light");
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = 80; // height of header
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={`${styles.navContainer} container`}>
        <a href="#home" onClick={(e) => handleLinkClick(e, "#home")} className={styles.logo}>
          <span className={styles.logoIcon} aria-hidden="true">
            <Terminal size={24} />
          </span>
          <span className={styles.logoText}>rishal.dev</span>
        </a>

        {/* Desktop Navigation */}
        <nav className={styles.menuDesktop} aria-label="Main Desktop Navigation">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`nav-link ${activeSection === link.href.substring(1) ? "active" : ""}`}
              id={`nav-link-${link.name.toLowerCase()}`}
            >
              {link.name}
            </a>
          ))}
          
          <button
            onClick={toggleTheme}
            className={styles.themeToggle}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            id="theme-toggle-btn"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>

        {/* Mobile Navigation Trigger */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <button
            onClick={toggleTheme}
            className={`${styles.themeToggle} ${styles.mobileMenuBtn}`}
            style={{ display: "flex" }}
            aria-label="Toggle Theme"
            id="theme-toggle-mobile"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={styles.mobileMenuBtn}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle Menu"
            id="mobile-menu-trigger"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <nav
          className={`${styles.menuMobile} ${isMobileMenuOpen ? styles.menuMobileActive : ""}`}
          aria-label="Main Mobile Navigation"
          id="mobile-navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`nav-link ${activeSection === link.href.substring(1) ? "active" : ""}`}
              id={`mobile-nav-link-${link.name.toLowerCase()}`}
              style={{ display: "block", padding: "10px 15px" }}
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
