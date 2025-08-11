"use client";
import React from "react";
import Link from "next/link";
import "./globals.css";
import { Mail, BadgeCheck, Shield, ScanLine, Truck } from "lucide-react";
import { brand, h1c, h2c, pc, Section, Badge, Card, Feature, PlanCard, MockScreen } from "@/components/ui";

const features = [
  { icon: <ScanLine className="w-6 h-6" />, title: "Open & Scan", text: "Request scans with OCR and searchable PDFs." },
  { icon: <Truck className="w-6 h-6" />, title: "Forward Anywhere", text: "USPS, UPS, FedEx with realtime rates." },
  { icon: <Shield className="w-6 h-6" />, title: "USPS-Compliant", text: "PS 1583 e-sign + ID verification." },
];

const plans = [
  { name: "Personal", price: 19, tag: "Great for individuals", features: ["30 items/mo", "10 scanned pages", "30 days storage", "1 recipient", "Forwarding at cost"]},
  { name: "Business", price: 49, tag: "Teams & small biz", popular: true, features: ["60 items/mo", "30 scanned pages", "60 days storage", "3 recipients", "Rules & automations"]},
  { name: "Operator", price: 249, tag: "Per location (white-label)", features: ["Custom domain", "Plan builder", "Payouts (coming soon)", "SLA tracking", "Reports & exports"]},
];

export default function Page() {
  return (
    <div className="min-h-screen" style={{ background: `linear-gradient(180deg, ${brand.gray} 0%, #ffffff 60%)` }}>
      <header className="sticky top-0 z-40 backdrop-blur bg-white/75 border-b border-neutral-200">
        <Section className="flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center font-black text-white" style={{ background: `linear-gradient(135deg, ${brand.orange}, ${brand.purple})` }}>M</div>
            <span className="font-extrabold tracking-tight text-lg">Mailworks <span style={{ color: brand.purple }}>Hub</span></span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#features" className="hover:opacity-80">Features</a>
            <Link href="/operator" className="hover:opacity-80">For Operators</Link>
            <a href="#pricing" className="hover:opacity-80">Pricing</a>
            <a href="#contact" className="hover:opacity-80">Contact</a>
            <Link href="/customer" className="hover:opacity-80">Customer Dashboard</Link>
          </nav>
          <div className="flex items-center gap-2">
            <Link href="/customer" className="px-4 py-2 rounded-xl font-medium border" style={{ borderColor: brand.purple, color: brand.purple }}>Log in</Link>
            <a href="#contact" className="px-4 py-2 rounded-xl font-semibold inline-block" style={{ background: brand.orange, color: brand.light }}>Start free</a>
          </div>
        </Section>
      </header>

      <Section className="pt-12 md:pt-20">
        <div className="grid md:grid-cols-2 items-center gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Badge tone="orange">Virtual Mailbox Platform</Badge>
              <Badge tone="purple">White-Label for Operators</Badge>
            </div>
            <h1 className={`${h1c} mb-4`}>
              Your mail. <span style={{ color: brand.purple }}>Digitized</span>. <span style={{ color: brand.orange }}>Delivered</span>.
            </h1>
            <p className={`${pc} mb-6`}>
              Mailworks Hub is a modern virtual mailbox solution for businesses, travelers, and digital nomads — and a full white-label suite for mail operators across the U.S.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="rounded-xl px-5 py-3 font-semibold inline-block" style={{ background: brand.orange, color: brand.light }}>
                Create my mailbox
              </a>
              <Link href="/operator" className="rounded-xl px-5 py-3 font-semibold border" style={{ borderColor: brand.purple, color: brand.purple }}>
                Explore operator tools
              </Link>
            </div>
            <div className="flex items-center gap-4 mt-6 text-sm text-neutral-600">
              <div className="flex items-center gap-2"><BadgeCheck className="w-4 h-4" style={{ color: brand.orange }} />PS 1583 e-sign</div>
              <div className="flex items-center gap-2"><Shield className="w-4 h-4" style={{ color: brand.purple }} />Bank-grade security</div>
            </div>
          </div>
          <div><MockScreen title="Mailbox Dashboard" subtitle="Customer view" /></div>
        </div>
      </Section>

      <Section className="py-12">
        <Card className="p-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-4">
            <div className="flex items-center gap-2 flex-1">
              <Mail className="w-5 h-5" style={{ color: brand.purple }} />
              <input className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200" placeholder="Search city, state, or ZIP (e.g., Detroit, MI)" />
            </div>
            <a href="#contact" className="rounded-xl px-5 py-3 font-semibold inline-block" style={{ background: brand.purple, color: brand.light }}>
              Find addresses
            </a>
          </div>
        </Card>
      </Section>

      <Section id="features" className="py-8 md:py-16">
        <h2 className={`${h2c} text-center mb-10`}>Everything you need to manage mail online</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f) => (<Card key={f.title} className="p-6"><Feature {...f} /></Card>))}
        </div>
      </Section>

      <Section id="pricing" className="py-8 md:py-16">
        <h2 className={`${h2c} text-center mb-2`}>Simple, transparent pricing</h2>
        <p className="text-center text-neutral-600 mb-8">Pay monthly. Cancel anytime.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p) => (<PlanCard key={p.name} p={p} />))}
        </div>
      </Section>

      <Section id="contact" className="py-12 md:py-16">
        <Card className="p-8">
          <h3 className="text-2xl font-bold mb-4">Contact us</h3>
          <form className="grid md:grid-cols-2 gap-4" action="/api/contact" method="POST">
            <input required name="name" placeholder="Your name" className="px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200" />
            <input required type="email" name="email" placeholder="Your email" className="px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200" />
            <input required name="subject" placeholder="Subject" className="px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 md:col-span-2" />
            <textarea required name="message" placeholder="How can we help?" className="px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 md:col-span-2 min-h-[140px]" />
            <button className="rounded-xl px-5 py-3 font-semibold md:col-span-2" style={{ background: brand.purple, color: brand.light }}>Send</button>
          </form>
        </Card>
      </Section>

      <footer className="border-t border-neutral-200 py-10">
        <Section className="grid md:grid-cols-4 gap-8">
          <div><div className="flex items-center gap-3 mb-3"><div className="w-9 h-9 rounded-xl flex items-center justify-center font-black text-white" style={{ background: `linear-gradient(135deg, ${brand.orange}, ${brand.purple})` }}>M</div><span className="font-extrabold tracking-tight">Mailworks Hub</span></div><p className="text-sm text-neutral-600">Virtual mailbox & white-label operator suite. Orange • White • Purple.</p></div>
          {[{ h: "Product", l: ["Features", "Pricing", "Security"] }, { h: "Operators", l: ["White-label", "Locations", "Payouts"] }, { h: "Company", l: ["About", "Contact", "Privacy"] }].map((col) => (
            <div key={col.h}><div className="font-semibold mb-3">{col.h}</div><ul className="space-y-2 text-sm text-neutral-600">{col.l.map((x) => (<li key={x}><a className="hover:underline" href="#">{x}</a></li>))}</ul></div>
          ))}
        </Section>
      </footer>
    </div>
  );
}
