import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import Analytics from "@/components/Analytics";
import { SITE_URL, SITE_NAME } from "@/lib/data";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} – Classificação de IPTV 2026: Compare e Teste Grátis`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "A Shutte é um diretório independente que classifica provedores de IPTV por estabilidade, suporte e transparência de preço. Compare a classificação atualizada e escolha com segurança — não vendemos IPTV.",
  keywords: [
    "classificação de IPTV",
    "classificação de listas IPTV",
    "classificação de listas com teste grátis IPTV",
    "ranking de IPTV",
    "ranking de listas IPTV",
    "ranking de provedores IPTV",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: SITE_NAME,
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        alternateName: [
          "Classificação de Listas IPTV",
          "Classificação de Listas com Teste Grátis IPTV",
          "Ranking de IPTV",
        ],
        url: `${SITE_URL}/`,
        logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
        description:
          "Diretório independente de comparação e classificação de provedores de IPTV no Brasil. A Shutte não é uma operadora de IPTV e não vende planos de streaming — avaliamos provedores terceiros e direcionamos o usuário ao site oficial de cada um.",
        slogan: "Classificação independente de provedores de IPTV",
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer support",
          availableLanguage: "Portuguese",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: `${SITE_URL}/`,
        name: SITE_NAME,
        alternateName: [
          "Classificação de Listas IPTV",
          "Classificação de Listas com Teste Grátis IPTV",
          "Ranking de IPTV",
        ],
        description: "Classificação e comparador independente de provedores de IPTV no Brasil.",
        keywords: "classificação de IPTV, classificação de listas IPTV, classificação de listas com teste grátis IPTV, ranking de IPTV, ranking de listas IPTV",
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
    ],
  };

  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Analytics />
        <AnimateOnScroll />
        <Header />
        <main id="conteudo">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
