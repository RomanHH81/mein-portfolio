'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Contact.module.scss';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible');
        });
      },
      { threshold: 0.12 },
    );

    const reveals = sectionRef.current?.querySelectorAll('.reveal') ?? [];
    reveals.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className={styles.contact} aria-labelledby="contact-heading" ref={sectionRef}>
      <div className={styles.inner}>
        <span className={`${styles.sectionLabel} reveal`} aria-hidden="true">Jetzt starten</span>
        <h2 className={`${styles.headline} reveal`} id="contact-heading">Lass uns reden.</h2>
        <p className={`${styles.sub} reveal`}>
          Du hast ein Projekt, ein Problem oder eine Idee? Schreib mir — ich
          melde mich in der Regel innerhalb von 24 Stunden.
        </p>

        {!submitted ? (
          <form className={`${styles.form} reveal`} onSubmit={handleSubmit}>
            <div className={styles.formRow}>
              <div className={styles.formField}>
                <label htmlFor="field-name">Name</label>
                <input
                  id="field-name"
                  type="text"
                  placeholder="Max Mustermann"
                  required
                  autoComplete="name"
                />
              </div>
              <div className={styles.formField}>
                <label htmlFor="field-email">E-Mail</label>
                <input
                  id="field-email"
                  type="email"
                  placeholder="max@beispiel.de"
                  required
                  autoComplete="email"
                />
              </div>
            </div>
            <div className={styles.formField}>
              <label htmlFor="field-service">Ich interessiere mich für …</label>
              <select id="field-service">
                <option value="">Bitte wählen</option>
                <option>Workflow-Automatisierung</option>
                <option>Web-Entwicklung</option>
                <option>Content &amp; Design</option>
                <option>Infrastruktur &amp; Hosting</option>
                <option>Mehreres / Noch unklar</option>
              </select>
            </div>
            <div className={styles.formField}>
              <label htmlFor="field-message">Nachricht</label>
              <textarea
                id="field-message"
                placeholder="Kurze Beschreibung deines Projekts oder deiner Anfrage …"
              />
            </div>
            <div className={styles.submitRow}>
              <button type="submit" className={styles.btnPrimary}>
                Nachricht senden →
              </button>
            </div>
          </form>
        ) : (
          <div className={styles.success}>
            <div className={styles.successIcon}>✓</div>
            <p>Nachricht gesendet — ich melde mich bald!</p>
          </div>
        )}
      </div>
    </section>
  );
}
