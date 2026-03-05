import Link from 'next/link';
import styles from '../legal.module.scss';

export const metadata = {
  title: 'Impressum — Roman',
  robots: { index: false, follow: false },
};

export default function Impressum() {
  return (
    <div className={styles.page}>
      <div className={styles.label}>Rechtliches</div>
      <h1 className={styles.title}>Impressum</h1>

      <div className={styles.content}>

        <div className={styles.section}>
          <div className={styles.sectionTitle}>Angaben gemäß § 5 TMG</div>
          <div className={styles.block}>
            <p>
              <strong><span className={styles.placeholder}>[Dein Name]</span></strong><br />
              Freelancer — Webentwicklung &amp; Automatisierung<br />
              <span className={styles.placeholder}>[Straße und Hausnummer]</span><br />
              <span className={styles.placeholder}>[PLZ]</span> <span className={styles.placeholder}>[Ort]</span><br />
              Deutschland
            </p>
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.sectionTitle}>Kontakt</div>
          <div className={styles.block}>
            <p>
              E-Mail: <a href="mailto:kontakt@beispiel.de"><span className={styles.placeholder}>[Deine E-Mail]</span></a>
            </p>
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.sectionTitle}>Umsatzsteuer-ID</div>
          <div className={styles.block}>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
              <span className={styles.placeholder}>[USt-IdNr.]</span>
            </p>
            <p>
              <strong>Hinweis:</strong> Als Kleinunternehmer im Sinne von § 19 UStG wird keine Umsatzsteuer berechnet
              — sofern zutreffend, bitte entsprechend anpassen.
            </p>
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.sectionTitle}>Verantwortlich für den Inhalt (§ 55 Abs. 2 RStV)</div>
          <div className={styles.block}>
            <p>
              <span className={styles.placeholder}>[Dein Name]</span><br />
              <span className={styles.placeholder}>[Straße und Hausnummer]</span><br />
              <span className={styles.placeholder}>[PLZ Ort]</span>
            </p>
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.sectionTitle}>Haftung für Inhalte</div>
          <div className={styles.block}>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den
              allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
              verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen
              zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            <p>
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen
              Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
              Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
              Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.sectionTitle}>Haftung für Links</div>
          <div className={styles.block}>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
              Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
              verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
            <p>
              Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
              Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche
              Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
              zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.sectionTitle}>Urheberrecht</div>
          <div className={styles.block}>
            <p>
              Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
              Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
              Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </div>
        </div>

      </div>

      <Link href="/" className={styles.back}>
        Zurück zur Startseite
      </Link>
    </div>
  );
}
