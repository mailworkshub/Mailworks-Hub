"use client";
import Link from "next/link";
import type { Metadata } from "next";
import { brand, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "FAQ"
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
        
<div className="max-w-3xl">
  <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
  <div className="space-y-4">
    {[
      { q: "How does verification work?", a: "You’ll complete USPS PS Form 1583 online with ID capture and e‑signature. We also support remote online notary (RON) if needed." },
      { q: "Can I forward packages internationally?", a: "Yes. We offer live rates via major carriers. Customs forms are handled during checkout." },
      { q: "How fast are scans?", a: "Typical turnaround is same day on business days. Operators aim for under 24 hours with SLAs." },
      { q: "Is this HIPAA / SOC compliant?", a: "Data is encrypted at rest and in transit. For regulated use‑cases, contact us for a BAA and operator security overview." },
      { q: "What is included in the Operator plan?", a: "White‑label domain, branding, Stripe Connect payouts, intake queues, SLAs, analytics, and multi‑location management." },
    ].map((f, i) => (
      <div key={i} className="rounded-2xl border p-4 bg-white">
        <div className="font-semibold">{f.q}</div>
        <div className="text-neutral-700">{f.a}</div>
      </div>
    ))}
  </div>
</div>

      </Section>
    </div>
  );
}
