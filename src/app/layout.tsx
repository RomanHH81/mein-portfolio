import type { Metadata } from 'next';
import '../../styles/app.scss';
import Header from '@/components/layout/Header/Header';
import Footer from '@/components/layout/Footer/Footer';
import CustomCursor from '@/components/ui/CustomCursor/CustomCursor';

export const metadata: Metadata = {
  title: 'Roman — Workflow-Automatisierung & Web-Entwicklung aus Norddeutschland',
  description:
    'Freelancer aus Norddeutschland: Workflow-Automatisierung mit n8n, DSGVO-konforme Websites, Self-hosted Infrastruktur und Content-Design. Jetzt Projekt anfragen.',
  metadataBase: new URL('https://roman.dev'),
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Roman — Automatisierung & digitale Lösungen',
    description:
      'Workflow-Automatisierung, Web-Entwicklung und Self-hosted Infrastruktur — DSGVO-konform, made in Norddeutschland.',
    type: 'website',
    locale: 'de_DE',
    url: 'https://roman.dev',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>
        <CustomCursor />
        <div className="gridBg" aria-hidden="true" />
        <a href="#main" className="skipLink">
          Zum Inhalt springen
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
