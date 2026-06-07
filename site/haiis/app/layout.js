import "@picocss/pico/css/pico.min.css";
import "./globals.css";

export const metadata = {
  metadataBase: new URL('https://haiis.org'),
  title: {
    default: "HAIIS: Healthcare AI Implementation Standards",
    template: "%s | HAIIS",
  },
  description: "A practical, open-access standard for implementing healthcare AI in regulated environments. Helps teams align architecture, controls, governance, and documentation across cloud-based AI deployments.",
  keywords: [
    "healthcare AI", "HIPAA AI", "GxP AI", "FDA AI compliance",
    "healthcare AI implementation", "AI governance", "clinical AI security",
    "multicloud healthcare", "AI risk management", "NIST AI RMF",
    "healthcare data governance", "PHI security", "AI compliance framework",
  ],
  authors: [{ name: "HAIIS" }],
  creator: "HAIIS",
  publisher: "HAIIS",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large', 'max-video-preview': -1 },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://haiis.org",
    siteName: "HAIIS",
    title: "HAIIS: Healthcare AI Implementation Standards",
    description: "A practical, open-access standard for implementing healthcare AI in regulated environments. Covers architecture, security, governance, risk, and deployment.",
    images: [
      {
        url: "/img/pillarsdiagram.webp",
        width: 1200,
        height: 600,
        alt: "HAIIS Framework – Five Core Pillars of Healthcare AI Implementation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HAIIS: Healthcare AI Implementation Standards",
    description: "A practical, open-access standard for implementing healthcare AI in regulated environments.",
    images: ["/img/pillarsdiagram.webp"],
  },
  alternates: {
    canonical: "https://haiis.org",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "HAIIS",
  "url": "https://haiis.org",
  "description": "A practical, open-access standard for implementing healthcare AI in regulated environments.",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://haiis.org/documentation/glossary?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "HAIIS",
  "url": "https://haiis.org",
  "description": "Healthcare AI Implementation Standards — open-access guidance for secure and compliant healthcare AI.",
  "sameAs": []
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
