"use client";
import Link from "next/link";
import type { Metadata } from "next";
import { brand, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Locations"
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
        
<div>
  <h1 className="text-4xl font-bold mb-4">Locations</h1>
  <p className="text-neutral-700 mb-6">Pick from a growing network of U.S. addresses. These are example listings — swap with your real inventory.</p>
  <div className="grid md:grid-cols-3 gap-4">
    {[
      { city: "Detroit, MI", addr: "40315 Michigan Ave, Canton, MI 48188", type: "Commercial Street Address" },
      { city: "New York, NY", addr: "123 W 45th St, New York, NY 10036", type: "CMRA Street Address" },
      { city: "Austin, TX", addr: "500 Congress Ave, Austin, TX 78701", type: "Downtown Street Address" },
      { city: "Miami, FL", addr: "333 SE 2nd Ave, Miami, FL 33131", type: "Street Address" },
      { city: "Los Angeles, CA", addr: "1111 S Hope St, Los Angeles, CA 90015", type: "Street Address" },
      { city: "Chicago, IL", addr: "233 S Wacker Dr, Chicago, IL 60606", type: "Street Address" },
    ].map((l, i) => (
      <div key={i} className="rounded-2xl border p-4 bg-white">
        <div className="text-sm text-neutral-500">{l.type}</div>
        <div className="font-semibold">{l.city}</div>
        <div className="text-neutral-700 text-sm">{l.addr}</div>
        <button className="mt-3 px-3 py-2 rounded-lg text-sm font-semibold" style={{ background: "#6b4eff", color: "white" }}>Select</button>
      </div>
    ))}
  </div>
</div>

      </Section>
    </div>
  );
}
