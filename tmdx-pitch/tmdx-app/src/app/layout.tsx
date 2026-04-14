import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "TMDX Stock Pitch — TransMedics Group | Omega Framework",
  description: "LONG TMDX — The only vertically integrated organ transplant network on earth, priced as a device company.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@400,500,700,800&f[]=satoshi@400,500,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
