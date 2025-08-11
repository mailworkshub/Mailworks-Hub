"use client";
import React from "react";
import { Check, Package, Shield, Truck, ScanLine, CreditCard, Settings, Building2, Globe2, Smartphone, BadgeCheck, Cpu, Lock, Users, ArrowRight, Handshake, FileDigit, TrendingUp, Sparkles, LayoutDashboard, Filter, Plus, Search, Coins, User, Home, Boxes, ChartLine, BarChart3, Activity, FileText, Printer, Wrench } from "lucide-react";

export const brand = { orange: "#ff7a00", purple: "#6b4eff", dark: "#0f0f14", light: "#ffffff", gray: "#f6f7fb" };
export const pill = "rounded-full px-3 py-1 text-xs font-medium";
export const h1c = "text-4xl md:text-6xl font-extrabold tracking-tight";
export const h2c = "text-2xl md:text-4xl font-bold tracking-tight";
export const pc = "text-base md:text-lg text-neutral-600";

export function Badge({ children, tone = "orange" }: { children: React.ReactNode; tone?: "orange" | "purple" }) {
  const bg = tone === "orange" ? brand.orange : brand.purple;
  return <span className={`${pill}`} style={{ background: bg, color: brand.light }}>{children}</span>;
}
export function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`rounded-2xl shadow-sm border border-neutral-200 bg-white ${className}`}>{children}</div>;
}
export function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <section className={`w-full max-w-7xl mx-auto px-4 md:px-8 ${className}`}>{children}</section>;
}
export function Feature({ icon, title, text }: any) {
  return (
    <div className="flex gap-4 items-start">
      <div className="flex items-center justify-center w-10 h-10 rounded-xl" style={{ background: `${brand.purple}10`, color: brand.purple }}>{icon}</div>
      <div><h4 className="font-semibold text-neutral-900">{title}</h4><p className="text-neutral-600 text-sm">{text}</p></div>
    </div>
  );
}
export function PlanCard({ p }: any) {
  return (
    <Card className={`p-6 flex flex-col ${p.popular ? "ring-2" : ""}`}>
      <div className="flex items-center justify-between mb-4"><h3 className="text-xl font-bold">{p.name}</h3>{p.popular && <Badge tone="purple">Most Popular</Badge>}</div>
      <div className="mb-4"><div className="text-4xl font-extrabold">${p.price}<span className="text-base font-medium">/mo</span></div><div className="text-sm text-neutral-600">{p.tag}</div></div>
      <ul className="space-y-2 text-sm flex-1">{p.features.map((f: string) => (<li key={f} className="flex items-start gap-2"><Check className="w-4 h-4 mt-0.5" style={{ color: brand.orange }} /><span>{f}</span></li>))}</ul>
      <a href="#contact" className="mt-6 w-full rounded-xl py-3 font-semibold text-center" style={{ background: brand.orange, color: brand.light }}>Get Started</a>
    </Card>
  );
}
export function MockScreen({ title, subtitle, tint = "purple" }: { title: string; subtitle: string; tint?: "purple" | "orange" }) {
  const color = tint === "purple" ? brand.purple : brand.orange;
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white overflow-hidden shadow-sm">
      <div className="flex items-center justify-between px-4 py-2" style={{ background: `${color}08` }}>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-400 inline-block" />
          <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block" />
          <span className="w-3 h-3 rounded-full bg-green-400 inline-block" />
          <span className="ml-3 font-medium" style={{ color }}>{title}</span>
        </div>
        <Badge tone={tint}>{subtitle}</Badge>
      </div>
      <div className="p-6 grid md:grid-cols-3 gap-4">
        {[...Array(6)].map((_, i) => (<div key={i} className="border rounded-xl p-4"><div className="h-24 rounded-lg mb-3" style={{ background: `${color}10` }} /><div className="h-3 w-3/4 rounded-full mb-2" style={{ background: `${color}20` }} /><div className="h-3 w-2/5 rounded-full" style={{ background: `${color}15` }} /></div>))}
      </div>
    </div>
  );
}
export function CustomerDashboardMock() {
  return (
    <div className="grid lg:grid-cols-4 gap-6">
      <Card className="p-0 lg:col-span-1 overflow-hidden">
        <div className="px-5 py-4 border-b flex items-center gap-2" style={{ background: `${brand.purple}08` }}>
          <LayoutDashboard className="w-5 h-5" style={{ color: brand.purple }} />
          <div className="font-semibold">Mailbox #1234</div>
        </div>
        <div className="p-5 space-y-4 text-sm">
          <div className="flex items-center gap-2 text-neutral-700"><User className="w-4 h-4" /><span>Primary: Shaina</span></div>
          <div className="flex items-center gap-2 text-neutral-700"><Home className="w-4 h-4" /><span>40315 Michigan Ave, Canton, MI</span></div>
          <div className="flex items-center gap-2 text-neutral-700"><Coins className="w-4 h-4" /><span>Balance: $12.40 usage</span></div>
          <div className="flex items-center gap-2 text-neutral-700"><BadgeCheck className="w-4 h-4" /><span>PS 1583: On file</span></div>
          <a href="#contact" className="w-full inline-block text-center rounded-xl py-2 font-semibold" style={{ background: brand.orange, color: brand.light }}>Manage recipients</a>
        </div>
      </Card>
      <div className="lg:col-span-3 space-y-6">
        <div className="grid md:grid-cols-3 gap-4">
          {[{ icon: <Boxes className="w-5 h-5" />, t: "New items", v: 4 }, { icon: <ScanLine className="w-5 h-5" />, t: "Scans ready", v: 7 }, { icon: <Truck className="w-5 h-5" />, t: "In forwarding", v: 2 }].map((k) => (
            <Card key={k.t} className="p-5"><div className="flex items-center justify-between"><div className="text-sm text-neutral-500">{k.t}</div><div style={{ color: brand.purple }}>{k.icon}</div></div><div className="text-2xl font-bold mt-2">{k.v}</div></Card>
          ))}
        </div>
        <Card className="p-0 overflow-hidden">
          <div className="flex items-center justify-between px-5 py-3 border-b">
            <div className="flex items-center gap-2 text-sm text-neutral-600"><Search className="w-4 h-4" /><input className="outline-none" placeholder="Search sender or keyword" /></div>
            <div className="flex items-center gap-2"><Filter className="w-4 h-4" /><a href="#contact" className="rounded-lg px-3 py-1 text-sm border inline-block" style={{ borderColor: brand.purple, color: brand.purple }}>Rules</a><a href="#contact" className="rounded-lg px-3 py-1 text-sm inline-block" style={{ background: brand.orange, color: brand.light }}>Bulk action</a></div>
          </div>
          <div className="divide-y">
            {[{ from: "Chase Bank", date: "Aug 10", status: "Arrived", actions: ["Scan", "Forward", "Shred"] },
              { from: "IRS", date: "Aug 9", status: "Action Required", actions: ["Open & Scan", "Forward"] },
              { from: "Amazon", date: "Aug 8", status: "In Progress", actions: ["Track"] },
              { from: "Secretary of State", date: "Aug 7", status: "Arrived", actions: ["Scan", "Forward"] }].map((row, i) => (
              <div key={i} className="flex items-center justify-between px-5 py-4 text-sm">
                <div className="flex items-center gap-3"><Package className="w-4 h-4" /><div><div className="font-medium">{row.from}</div><div className="text-neutral-500">{row.date} • {row.status}</div></div></div>
                <div className="flex items-center gap-2">{row.actions.map((a) => (<a key={a} href="#contact" className="rounded-lg px-3 py-1 border text-xs inline-block" style={{ borderColor: brand.purple, color: brand.purple }}>{a}</a>))}</div>
              </div>
            ))}
          </div>
        </Card>
        <Card className="p-5">
          <div className="flex items-center gap-2 mb-4"><Activity className="w-4 h-4" style={{ color: brand.orange }} /><div className="font-semibold">Recent activity</div></div>
          <div className="grid md:grid-cols-3 gap-4 text-sm">{["Scan completed for Chase statement (7 pages)", "Forwarded 2 items to Willis, MI — tracking 9400…", "1583 notarized and stored to mailbox"].map((a, i) => (<div key={i} className="rounded-xl border p-3 text-neutral-700">{a}</div>))}</div>
        </Card>
      </div>
    </div>
  );
}
function Metric({ label, value }: { label: string; value: string }) {
  return <Card className="p-4"><div className="text-xs text-neutral-500">{label}</div><div className="text-2xl font-bold">{value}</div></Card>;
}
export function OperatorConsoleMock() {
  return (
    <div className="grid lg:grid-cols-5 gap-6">
      <Card className="p-0 lg:col-span-1 overflow-hidden">
        <div className="px-5 py-4 border-b flex items-center gap-2" style={{ background: `${brand.orange}10` }}>
          <Wrench className="w-5 h-5" style={{ color: brand.orange }} /><div className="font-semibold">Operator Console</div>
        </div>
        <div className="p-5 space-y-2 text-sm">
          {[{ i: <LayoutDashboard className="w-4 h-4" />, t: "Overview" }, { i: <Building2 className="w-4 h-4" />, t: "Locations" }, { i: <Users className="w-4 h-4" />, t: "Staff" }, { i: <Boxes className="w-4 h-4" />, t: "Mailboxes" }, { i: <FileText className="w-4 h-4" />, t: "PS 1583" }, { i: <Truck className="w-4 h-4" />, t: "Forwarding" }, { i: <CreditCard className="w-4 h-4" />, t: "Billing" }, { i: <BarChart3 className="w-4 h-4" />, t: "Reports" }, { i: <Settings className="w-4 h-4" />, t: "Settings" }].map((m) => (
            <div key={m.t} className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-neutral-50 cursor-default"><div>{m.i}</div><div>{m.t}</div></div>
          ))}
        </div>
      </Card>
      <div className="lg:col-span-4 space-y-6">
        <div className="grid md:grid-cols-4 gap-4"><Metric label="Items today" value="128" /><Metric label="Avg scan TAT" value="2h 15m" /><Metric label="Forwarding in queue" value="37" /><Metric label="SLA on-time" value="96%" /></div>
        <Card className="p-0 overflow-hidden">
          <div className="flex items-center justify-between px-5 py-3 border-b">
            <div className="font-semibold">Intake queue</div>
            <div className="flex items-center gap-2"><a href="#contact" className="rounded-lg px-3 py-1 text-sm border inline-block" style={{ borderColor: brand.orange, color: brand.orange }}><Plus className="w-3 h-3 inline mr-1" />New item</a><a href="#contact" className="rounded-lg px-3 py-1 text-sm border inline-block" style={{ borderColor: brand.purple, color: brand.purple }}><Printer className="w-3 h-3 inline mr-1" />Print labels</a></div>
          </div>
          <div className="grid md:grid-cols-3 gap-4 p-4">
            {["Arrived", "Action Required", "In Progress"].map((col) => (
              <div key={col} className="rounded-xl border">
                <div className="px-4 py-2 text-sm font-medium border-b" style={{ background: `${brand.purple}06` }}>{col}</div>
                <div className="p-3 space-y-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="rounded-lg border p-3 text-sm">
                      <div className="flex items-center justify-between"><div className="font-medium">Item #{i} • Mailbox 123{i}</div><div className="text-xs text-neutral-500">{i}h ago</div></div>
                      <div className="text-xs text-neutral-600 mt-1">Sender: Chase • Type: Envelope</div>
                      <div className="mt-2 flex gap-2"><a href="#contact" className="rounded px-2 py-1 text-xs border inline-block" style={{ borderColor: brand.purple, color: brand.purple }}>Open & Scan</a><a href="#contact" className="rounded px-2 py-1 text-xs border inline-block" style={{ borderColor: brand.orange, color: brand.orange }}>Forward</a><a href="#contact" className="rounded px-2 py-1 text-xs border text-neutral-600 inline-block">Shred</a></div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Card>
        <div className="grid md:grid-cols-3 gap-4">
          <Card className="p-5 md:col-span-2">
            <div className="flex items-center gap-2 mb-3"><ChartLine className="w-4 h-4" style={{ color: brand.purple }} /><div className="font-semibold">SLA heatmap (mock)</div></div>
            <div className="grid grid-cols-7 gap-2">{[...Array(21)].map((_, i) => (<div key={i} className="h-8 rounded" style={{ background: i % 3 === 0 ? `${brand.purple}30` : `${brand.purple}12` }} />))}</div>
          </Card>
          <Card className="p-5">
            <div className="flex items-center gap-2 mb-3"><Truck className="w-4 h-4" style={{ color: brand.orange }} /><div className="font-semibold">Outgoing shipments</div></div>
            <div className="space-y-3 text-sm">
              {[{ id: "9400…123", to: "Willis, MI", items: 2, status: "Label purchased" }, { id: "1Z…A45", to: "Toledo, OH", items: 1, status: "Picked up" }, { id: "DT…789", to: "Detroit, MI", items: 3, status: "Packed" }].map((s) => (
                <div key={s.id} className="rounded-lg border p-3 flex items-center justify-between">
                  <div><div className="font-medium">{s.id}</div><div className="text-neutral-600 text-xs">{s.items} items → {s.to}</div></div>
                  <div className="text-xs px-2 py-1 rounded" style={{ background: `${brand.orange}12`, color: brand.orange }}>{s.status}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
