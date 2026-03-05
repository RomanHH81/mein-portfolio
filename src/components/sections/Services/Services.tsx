'use client';

import { useEffect, useRef } from 'react';
import styles from './Services.module.scss';

const services = [
  {
    id: '01',
    icon: '⚙️',
    title: 'Workflow-Automatisierung',
    desc: 'Manuelle, wiederholende Prozesse kosten Zeit und Nerven. Ich automatisiere sie — von Lead-Management über E-Mail-Parsing bis zur Terminbuchung. Alles auf deiner eigenen Infrastruktur.',
    tags: ['n8n', 'Webhooks', 'NocoDB', 'CalDAV', 'Telegram', 'API-Integration'],
    wide: false,
    delay: 0,
  },
  {
    id: '02',
    icon: '🌐',
    title: 'Web-Entwicklung',
    desc: 'Professionelle Websites für kleine und mittlere Unternehmen. Schnell, sauber, DSGVO-ready — mit integrierten Kontaktformularen und direkter Anbindung an deine Workflows.',
    tags: ['HTML/CSS/JS', 'Responsive', 'DSGVO', 'Self-hosted', 'Formulare'],
    wide: false,
    delay: 0.1,
  },
  {
    id: '03',
    icon: '🎨',
    title: 'Content & Design',
    desc: 'Vom Social-Media-Beitrag bis zum kurzen Promo-Video: Ich erstelle visuell ansprechende Inhalte, die zu deiner Marke passen — mit Canva für Grafiken und DaVinci Resolve für Video-Schnitt.',
    tags: ['Canva', 'DaVinci Resolve', 'Social Media', 'Video-Editing', 'Grafik'],
    wide: false,
    delay: 0.15,
  },
  {
    id: '04',
    icon: '🖥️',
    title: 'Infrastruktur & Hosting',
    desc: 'Kein Cloudabhängigkeit, keine unnötigen Datenwege. Ich betreibe und konfiguriere selbst-gehostete Server-Umgebungen für Unternehmen, die volle Kontrolle über ihre Daten wollen.',
    tags: ['Proxmox', 'Nextcloud', 'Tailscale', 'Linux', 'Backup'],
    wide: false,
    delay: 0.2,
  },
  {
    id: '05',
    icon: '🤖',
    title: 'KI-Integration & Smart Home',
    desc: 'Von lokalen KI-Modellen bis zur Heimautomatisierung: Ich integriere intelligente Assistenten in bestehende Systeme — ob als smarter Workflow-Baustein oder als vollwertiges Home-Assistant-Setup, das ohne Cloud auskommt.',
    tags: ['Home Assistant', 'Lokale KI', 'Automatisierung', 'Self-hosted', 'Integrationen'],
    wide: true,
    delay: 0.25,
  },
];

export default function Services() {
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

  return (
    <section
      id="services"
      className={styles.services}
      aria-labelledby="services-heading"
      ref={sectionRef}
    >
      <div className={`${styles.sectionHeader} reveal`}>
        <div>
          <div className={styles.sectionLabel} aria-hidden="true">Was ich mache</div>
          <h2 className={styles.sectionTitle} id="services-heading">Leistungen</h2>
        </div>
      </div>

      <div className={styles.grid}>
        {services.map(({ id, icon, title, desc, tags, wide, delay }) => (
          <article
            key={id}
            className={`${styles.card} ${wide ? styles.cardWide : ''} reveal`}
            style={{ transitionDelay: `${delay}s` }}
            data-cursor-hover
          >
            <div className={styles.cardNumber} aria-hidden="true">{id} /</div>
            <span className={styles.cardIcon} aria-hidden="true">{icon}</span>
            <h3 className={styles.cardTitle}>{title}</h3>
            <p className={styles.cardDesc}>{desc}</p>
            <ul className={styles.tags} aria-label={`Technologien: ${title}`}>
              {tags.map((tag) => (
                <li key={tag} className={styles.tag}>{tag}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
