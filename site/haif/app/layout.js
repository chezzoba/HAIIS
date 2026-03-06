import "@picocss/pico/css/pico.min.css";
import "./globals.css";

export const metadata = {
  title: "Healthcare AI Framework | Cloud-Agnostic AI Implementation",
  description: "Secure, compliant, scalable AI implementation framework for healthcare across AWS, Azure, and Google Cloud. Free and open-access.",
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
