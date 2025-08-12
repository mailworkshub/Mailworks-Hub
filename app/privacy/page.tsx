"use client";
import Link from "next/link";
import type { Metadata } from "next";
import { brand, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Privacy Policy"
};

export default function Page() {
  return (
    <div className="min-h-screen" style={ background: `linear-gradient(180deg, ${brand.gray} 0%, #ffffff 60%)` }>
      <header className="sticky top-0 z-40 backdrop-blur bg-white/75 border-b border-neutral-200">
        <Section className="flex items-center justify-between py-3">
          <Link href="/" className="font-extrabold tracking-tight text-lg">← Mailworks Hub</Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/about" className="hover:opacity-80">About</Link>
            <Link href="/locations" className="hover:opacity-80">Locations</Link>
            <Link href="/faq" className="hover:opacity-80">FAQ</Link>
            <Link href="/privacy" className="hover:opacity-80">Privacy</Link>
            <Link href="/terms" className="hover:opacity-80">Terms</Link>
          </nav>
        </Section>
      </header>
      <Section className="py-12">
        
<div className="max-w-3xl prose prose-neutral">
  <h1>Privacy Policy</h1>
  <p><em>Last updated: Aug 12, 2025</em></p>
  <p>We value your privacy. This policy explains what data we collect and how we use it when you use Mailworks Hub.</p>
  <h2>Information we collect</h2>
  <ul>
    <li>Account information (name, email, billing).</li>
    <li>Mailbox and item metadata (sender, dates, actions).</li>
    <li>Files you upload or request to be scanned.</li>
  </ul>
  <h2>How we use information</h2>
  <ul>
    <li>Provide and improve the service.</li>
    <li>Comply with postal regulations (e.g., PS 1583 retention).</li>
    <li>Communicate service updates and invoices.</li>
  </ul>
  <h2>Data retention</h2>
  <p>We retain records as required by USPS/CMRA rules and applicable law. You may request deletion of non‑regulated data.</p>
  <h2>Security</h2>
  <p>We use encryption in transit and at rest, access controls, and audit logging. Report issues to security@mailworkshub.com.</p>
  <h2>Your choices</h2>
  <p>Contact <a href="mailto:privacy@mailworkshub.com">privacy@mailworkshub.com</a> to access, correct, or delete your personal data.</p>
</div>

      </Section>
    </div>
  );
}
