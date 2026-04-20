import "@picocss/pico/css/pico.min.css";
import "./globals.css";

export const metadata = {
  title: "HAIIS: Healthcare AI Implementation Standards",
  description: "A practical standard for implementing healthcare AI in regulated environments. Helps teams align architecture, controls, governance, and documentation across cloud-based AI deployments.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body>
        {children}
      </body>
    </html>
  );
}
