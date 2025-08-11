"use client";
import React from "react";
import Link from "next/link";
import { Section, brand, h2c, OperatorConsoleMock } from "@/components/ui";
export default function OperatorPage() {
  return (
    <div className="min-h-screen" style={{ background: `linear-gradient(180deg, ${brand.gray} 0%, #ffffff 60%)` }}>
      <header className="sticky top-0 z-40 backdrop-blur bg-white/75 border-b border-neutral-200">
        <Section className="flex items-center justify-between py-3">
          <Link href="/" className="font-extrabold tracking-tight text-lg">← Mailworks Hub</Link>
          <div className="text-sm text-neutral-600">Mock operator console</div>
        </Section>
      </header>
      <Section className="py-10"><h2 className={`${h2c} mb-6`}>Operator Console</h2><OperatorConsoleMock /></Section>
    </div>
  );
}
