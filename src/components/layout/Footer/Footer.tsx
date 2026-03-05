import Link from 'next/link';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>© 2026 Roman · Freelancer · Norddeutschland</div>
      <div className={styles.right}>
        <Link href="/impressum">Impressum</Link>
        {' '}&nbsp;·&nbsp;{' '}
        <Link href="/datenschutz">Datenschutz</Link>
      </div>
    </footer>
  );
}
