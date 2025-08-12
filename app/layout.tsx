import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Mailworks Hub — Virtual Mailbox & White‑Label Operator Suite",
    template: "%s · Mailworks Hub"
  },
  description: "Receive, scan, and forward your postal mail online. White‑label platform for U.S. mail operators.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  openGraph: {
    title: "Mailworks Hub",
    description: "Virtual mailbox platform + white‑label operator suite.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    siteName: "Mailworks Hub",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
  icons: { icon: "/favicon.ico" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-neutral-900">{children}</body>
    </html>
  );
}
