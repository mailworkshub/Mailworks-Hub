"use client";
import Link from "next/link";
import type { Metadata } from "next";
import { brand, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "About"
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
  <h1 className="text-4xl font-bold mb-4">About Mailworks Hub</h1>
  <p className="text-neutral-700 mb-4">
    We’re building the modern way to handle postal mail — fully digital, secure, and available anywhere in the U.S.
    Mailworks Hub lets customers receive, scan, and forward mail online, while giving mailroom operators a white‑label
    platform to launch and grow new revenue in days.
  </p>
  <h2 className="text-2xl font-semibold mt-8 mb-2">What we believe</h2>
  <ul className="list-disc pl-6 text-neutral-700 space-y-2">
    <li>Privacy and compliance first (PS 1583, audit trails, encryption).</li>
    <li>Speed and clarity for customers — scans in hours, not days.</li>
    <li>Profitable tooling for operators — automation, billing, analytics.</li>
  </ul>
  <h2 className="text-2xl font-semibold mt-8 mb-2">Contact</h2>
  <p className="text-neutral-700">Email: <a className="underline" href="mailto:support@mailworkshub.com">support@mailworkshub.com</a></p>
</div>

      </Section>
    </div>
  );
}
