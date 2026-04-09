import "@picocss/pico/css/pico.min.css";
import "./globals.css";

export const metadata = {
  title: "Healthcare AI Implementation Standards",
  description: "Secure, compliant, scalable AI implementation standards for healthcare across vendors",
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
