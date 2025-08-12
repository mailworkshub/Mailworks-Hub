
"use client";
import React from "react";
import { Check, Package, Shield, Truck, ScanLine, CreditCard, Settings, Building2, Globe2, Smartphone, BadgeCheck, Cpu, Lock, Users, ArrowRight, Handshake, FileDigit, TrendingUp, Sparkles, LayoutDashboard, Filter, Plus, Search, Coins, User, Home, Boxes, ChartLine, BarChart3, Activity, FileText, Printer, Wrench } from "lucide-react";

export const brand = {
  orange: "#ff7a00",
  purple: "#6b4eff",
  dark: "#0f0f14",
  light: "#ffffff",
  gray: "#f6f7fb",
};

export const pill = "rounded-full px-3 py-1 text-xs font-medium";
export const h1c = "text-4xl md:text-6xl font-extrabold tracking-tight";
export const h2c = "text-2xl md:text-4xl font-bold tracking-tight";
export const pc = "text-base md:text-lg text-neutral-600";

export function Badge({ children, tone = "orange" }: { children: React.ReactNode; tone?: "orange" | "purple" }) {
  const bg = tone === "orange" ? brand.orange : brand.purple;
  return (
    <span className={`${pill}`} style={{ background: bg, color: brand.light }}>
      {children}
    </span>
  );
}

export function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl shadow-sm border border-neutral-200 bg-white ${className}`}>{children}</div>
  );
}

export function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <section className={`w-full max-w-7xl mx-auto px-4 md:px-8 ${className}`}>{children}</section>;
}

// Mocked components trimmed for brevity in shared file
export function Feature({ icon, title, text }: any) {
  return (
    <div className="flex gap-4 items-start">
      <div className="flex items-center justify-center w-10 h-10 rounded-xl" style={{ background: `${brand.purple}10`, color: brand.purple }}>
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-neutral-900">{title}</h4>
        <p className="text-neutral-600 text-sm">{text}</p>
      </div>
    </div>
  );
}
