"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import styles from "./Contact.module.css";

interface FormFields {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const [fields, setFields] = useState<FormFields>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const validateField = (name: string, value: string): string | undefined => {
    if (name === "name") {
      if (!value) return "Name is required.";
      if (value.trim().length < 2) return "Name must be at least 2 characters.";
    }

    if (name === "email") {
      if (!value) return "Email is required.";
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) return "Please enter a valid email address.";
    }

    if (name === "message") {
      if (!value) return "Message content is required.";
      if (value.trim().length < 10) return "Message must be at least 10 characters.";
    }

    return undefined;
  };

  const handleBlur = (field: string) => {
    setTouched({ ...touched, [field]: true });
    const error = validateField(field, fields[field as keyof FormFields]);
    setErrors({ ...errors, [field]: error });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFields({ ...fields, [name]: value });

    if (touched[name]) {
      const error = validateField(name, value);
      setErrors({ ...errors, [name]: error });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields
    const formErrors: FormErrors = {};
    let hasErrors = false;

    ["name", "email", "message"].forEach((field) => {
      const error = validateField(field, fields[field as keyof FormFields]);
      if (error) {
        formErrors[field as keyof FormErrors] = error;
        hasErrors = true;
      }
    });

    setErrors(formErrors);
    setTouched({ name: true, email: true, message: true });

    if (hasErrors) return;

    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
    }, 1500);
  };

  const handleReset = () => {
    setFields({ name: "", email: "", subject: "", message: "" });
    setErrors({});
    setTouched({});
    setIsSent(false);
  };

  const getValidationClass = (fieldName: string) => {
    if (!touched[fieldName]) return "";
    return errors[fieldName as keyof FormErrors] ? styles.invalidField : styles.validField;
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className="container">
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <h2 className={styles.title}>
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className={styles.subtitle}>
            Have a question, project proposal, or just want to connect? Send me a line!
          </p>
        </div>

        {/* Content Grid */}
        <div className={styles.grid}>
          {/* Info Column */}
          <div className={styles.infoColumn}>
            <div>
              <h3 className={styles.heading}>Contact Information</h3>
              <p className={styles.desc}>
                Feel free to reach out via email or through the contact form on the right. I usually respond within 24 hours.
              </p>
            </div>

            <div className={styles.detailsList}>
              <div className={styles.detailItem} id="contact-detail-email">
                <div className={styles.iconWrapper} aria-hidden="true">
                  <Mail size={20} />
                </div>
                <div>
                  <div className={styles.detailLabel}>Direct Email</div>
                  <div className={styles.detailValue}>contact@rishal.dev</div>
                </div>
              </div>

              <div className={styles.detailItem} id="contact-detail-phone">
                <div className={styles.iconWrapper} aria-hidden="true">
                  <Phone size={20} />
                </div>
                <div>
                  <div className={styles.detailLabel}>Call / Message</div>
                  <div className={styles.detailValue}>+1 (555) 345-9821</div>
                </div>
              </div>

              <div className={styles.detailItem} id="contact-detail-location">
                <div className={styles.iconWrapper} aria-hidden="true">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className={styles.detailLabel}>Location</div>
                  <div className={styles.detailValue}>San Francisco, California</div>
                </div>
              </div>
            </div>

            {/* Social channels */}
            <div className={styles.socialsWrapper}>
              <span className={styles.socialsTitle}>Social Channels</span>
              <div className={styles.socialsGrid}>
                <a
                  href="https://github.com/rishal-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-icon"
                  aria-label="GitHub Profile"
                  id="contact-social-github"
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true" style={{ display: "block" }}>
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.193 22 16.44 22 12.017 22 6.484 17.522 2 12 2z" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/in/rishal-kv-69bb39235"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-icon"
                  aria-label="LinkedIn Profile"
                  id="contact-social-linkedin"
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true" style={{ display: "block" }}>
                    <path fillRule="evenodd" clipRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href="https://twitter.com/rishal-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-icon"
                  aria-label="Twitter / X Profile"
                  id="contact-social-twitter"
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true" style={{ display: "block" }}>
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className={`${styles.formCard} glass-panel`} id="contact-form-card">
            {!isSent ? (
              <form onSubmit={handleSubmit} className={styles.form} noValidate>
                {/* Name */}
                <div className={styles.formGroup}>
                  <label htmlFor="form-name" className={styles.label}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="form-name"
                    name="name"
                    value={fields.name}
                    onChange={handleChange}
                    onBlur={() => handleBlur("name")}
                    placeholder="Enter your name..."
                    className={`form-input ${getValidationClass("name")}`}
                    disabled={isSending}
                    required
                  />
                  {touched.name && errors.name && (
                    <span className={styles.inputError} id="name-error-msg">
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div className={styles.formGroup}>
                  <label htmlFor="form-email" className={styles.label}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="form-email"
                    name="email"
                    value={fields.email}
                    onChange={handleChange}
                    onBlur={() => handleBlur("email")}
                    placeholder="you@example.com"
                    className={`form-input ${getValidationClass("email")}`}
                    disabled={isSending}
                    required
                  />
                  {touched.email && errors.email && (
                    <span className={styles.inputError} id="email-error-msg">
                      {errors.email}
                    </span>
                  )}
                </div>

                {/* Subject */}
                <div className={styles.formGroup}>
                  <label htmlFor="form-subject" className={styles.label}>
                    Subject (Optional)
                  </label>
                  <input
                    type="text"
                    id="form-subject"
                    name="subject"
                    value={fields.subject}
                    onChange={handleChange}
                    placeholder="What is this regarding?"
                    className="form-input"
                    disabled={isSending}
                  />
                </div>

                {/* Message */}
                <div className={styles.formGroup}>
                  <label htmlFor="form-message" className={styles.label}>
                    Message Content
                  </label>
                  <textarea
                    id="form-message"
                    name="message"
                    rows={5}
                    value={fields.message}
                    onChange={handleChange}
                    onBlur={() => handleBlur("message")}
                    placeholder="Write your message details here..."
                    className={`form-input ${getValidationClass("message")}`}
                    style={{ resize: "none" }}
                    disabled={isSending}
                    required
                  />
                  {touched.message && errors.message && (
                    <span className={styles.inputError} id="message-error-msg">
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSending}
                  className="btn btn-primary"
                  style={{ width: "100%", marginTop: "10px" }}
                  id="form-submit-btn"
                >
                  {isSending ? (
                    <>
                      <span>Dispatching message...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Deliver Message</span>
                    </>
                  )}
                </button>
              </form>
            ) : (
              /* Success confirmation panel */
              <div className={styles.successPanel} id="form-success-overlay">
                <div className={styles.successIconGlow} aria-hidden="true">
                  <CheckCircle2 size={36} />
                </div>
                <div>
                  <h3 className={styles.successHeading}>Message Delivered!</h3>
                  <p className={styles.successDesc}>
                    Thank you, <strong>{fields.name}</strong>. Your message regarding {fields.subject ? `"${fields.subject}"` : "a new inquiry"} has been delivered successfully to my queue.
                  </p>
                </div>
                <button
                  onClick={handleReset}
                  className="btn btn-secondary"
                  id="form-reset-btn"
                >
                  Deliver Another Message
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
