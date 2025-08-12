"use client";
import Link from "next/link";
import type { Metadata } from "next";
import { brand, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Terms of Service"
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
  <h1>Terms of Service</h1>
  <p><em>Last updated: Aug 12, 2025</em></p>
  <h2>1. Agreement</h2>
  <p>By using Mailworks Hub, you agree to these Terms and to any additional policies referenced herein.</p>
  <h2>2. Use of Service</h2>
  <ul>
    <li>You must maintain a valid USPS PS Form 1583 and comply with identity verification.</li>
    <li>You will not use the service for illegal or prohibited activities.</li>
    <li>We may suspend accounts for abuse, non‑payment, or regulatory risk.</li>
  </ul>
  <h2>3. Billing</h2>
  <p>Subscriptions renew automatically until canceled. Usage fees (scans, forwarding, storage) may apply.</p>
  <h2>4. Liability</h2>
  <p>The service is provided “as is” without warranties. Our aggregate liability is limited to fees paid in the last 12 months.</p>
  <h2>5. Changes</h2>
  <p>We may update these Terms. Continued use constitutes acceptance of changes.</p>
  <h2>6. Contact</h2>
  <p>Questions? Email <a href="mailto:legal@mailworkshub.com">legal@mailworkshub.com</a>.</p>
</div>

      </Section>
    </div>
  );
}
