"use client";

import { useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

type Plan = {
  name: string;
  price: number;
  credits: number;
  tag?: string;
};

type CreditAction = {
  label: string;
  cost: 1 | 2;
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const plans: Plan[] = [
  { name: "Starter", price: 29, credits: 5 },
  { name: "Author", price: 59, credits: 12 },
  { name: "Pro", price: 99, credits: 25, tag: "Most Popular" },
  { name: "Studio", price: 179, credits: 50 },
];

const creditActions: CreditAction[] = [
  { label: "Chapter Outline", cost: 1 },
  { label: "Chapter Draft", cost: 2 },
  { label: "Section Expand or Rework", cost: 1 },
  { label: "Chapter Edit & Improve", cost: 1 },
  { label: "Chapter Style / Voice Alignment", cost: 1 },
  { label: "Chapter Summary", cost: 1 },
  { label: "Book Summary", cost: 2 },
  { label: "Chapter Fact Check", cost: 2 },
  { label: "Chapter Plagiarism Check", cost: 2 },
  { label: "Paragraph Rewrite", cost: 1 },
  { label: "Title & Subtitle Ideas", cost: 1 },
];

const includedFree = [
  "Quote database access",
  "Quote search & browsing",
  "Saved quotes library",
  "Dashboard access",
  "Manuscript storage",
  "Subscription access",
  "Project navigation",
  "Basic account actions",
];

const publishingServices = [
  "9-point TAV Analysis™",
  "Professional publishing packages",
  "Formatting services",
  "Cover design services",
  "Upload & publishing assistance",
  "Launch graphics / brand launch",
];

const workflowSteps = [
  { action: "Chapter outlines", qty: 6, cost: 1 },
  { action: "Chapter drafts", qty: 6, cost: 2 },
  { action: "Chapter edits", qty: 6, cost: 1 },
  { action: "Book summary", qty: 1, cost: 2 },
  { action: "Fact checks", qty: 2, cost: 2 },
];

const rules = [
  {
    icon: "👁",
    title: "See the cost first",
    body: "Credit cost is always shown before you start any action — no surprises.",
  },
  {
    icon: "✅",
    title: "Deducted only on success",
    body: "If an action fails and no usable output is delivered, zero credits are deducted.",
  },
  {
    icon: "📊",
    title: "Always visible balance",
    body: "Your remaining credits are always visible in the dashboard at all times.",
  },
  {
    icon: "📈",
    title: "Progress, not penalty",
    body: "Credits are framed as progress tools — not usage limits or penalties.",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function CreditsPage() {
  const [selectedPlan, setSelectedPlan] = useState<number>(2);

  const totalWorkflow = workflowSteps.reduce(
    (sum, s) => sum + s.qty * s.cost,
    0
  );

  return (
    <main className="bg-background text-foreground">

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-28 bg-hero-gradient">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-primary/10 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 -right-24 w-[360px] h-[360px] rounded-full bg-secondary/10 blur-3xl"
        />

        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs font-medium tracking-widest text-primary uppercase mb-6 animate-fade-in">
            ◆ Book Credit System
          </span>

          <h1 className="animate-fade-up text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight mb-6">
            Progress-first.{" "}
            <span className="text-gradient-brand">Credit-simple.</span>
          </h1>

          <p
            className="animate-fade-up text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed"
            style={{ animationDelay: "0.1s" }}
          >
            Book Credits unlock meaningful manuscript actions — drafts, edits,
            fact checks, and more. Everything else is{" "}
            <strong className="text-foreground font-semibold">included free</strong>{" "}
            with your subscription.
          </p>
        </div>
      </section>

      {/* ── Plans ────────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
              Choose Your Plan
            </h2>
            <p className="text-muted-foreground text-base max-w-xl mx-auto">
              Every plan includes unlimited quote access, dashboard tools, and
              manuscript storage.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {plans.map((plan, i) => {
              const isActive = selectedPlan === i;
              const cpm = (plan.price / plan.credits).toFixed(2);
              return (
                <button
                  key={plan.name}
                  onClick={() => setSelectedPlan(i)}
                  className={[
                    "relative rounded-[var(--radius)] border p-6 text-left transition-all duration-200 cursor-pointer",
                    isActive
                      ? "border-primary bg-primary/5 shadow-card"
                      : "border-border bg-card hover:border-primary/40 hover:shadow-soft",
                  ].join(" ")}
                >
                  {plan.tag && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary-gradient text-primary-foreground text-[10px] font-semibold tracking-widest uppercase px-3 py-1 rounded-full shadow-cta whitespace-nowrap">
                      {plan.tag}
                    </div>
                  )}

                  <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-muted-foreground mb-3">
                    {plan.name}
                  </p>

                  <div className="flex items-end gap-0.5 mb-4">
                    <span className="text-lg font-semibold text-muted-foreground self-start mt-1">
                      $
                    </span>
                    <span className="text-4xl font-bold tracking-tight leading-none">
                      {plan.price}
                    </span>
                    <span className="text-sm text-muted-foreground self-end mb-0.5">
                      /mo
                    </span>
                  </div>

                  <div
                    className={[
                      "rounded-lg p-3 mb-3 text-center",
                      isActive ? "bg-primary/10" : "bg-muted",
                    ].join(" ")}
                  >
                    <p
                      className={[
                        "text-3xl font-bold",
                        isActive ? "text-primary" : "text-foreground",
                      ].join(" ")}
                    >
                      {plan.credits}
                    </p>
                    <p className="text-[10px] font-semibold tracking-widest uppercase text-muted-foreground mt-0.5">
                      Book Credits
                    </p>
                  </div>

                  <p className="text-xs text-muted-foreground text-center">
                    ${cpm} per credit
                  </p>

                  {isActive && (
                    <div className="mt-4 w-full rounded-lg bg-primary-gradient text-primary-foreground text-xs font-semibold text-center py-2">
                      Selected
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Three Pillars ─────────────────────────────────────────────────────── */}
      <section className="py-24 bg-muted/40">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
              How Credits Are Structured
            </h2>
            <p className="text-muted-foreground text-base max-w-xl mx-auto">
              Three clear categories — no surprises, no hidden charges.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 items-start">

            {/* Included Free */}
            <div className="rounded-[var(--radius)] border border-border bg-card p-6 shadow-soft">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center mb-4">
                <span className="text-secondary font-bold text-base">✓</span>
              </div>
              <h3 className="font-bold text-base mb-1">Included with Subscription</h3>
              <p className="text-[11px] font-semibold tracking-widest uppercase text-secondary mb-5">
                No credits needed
              </p>
              <ul className="space-y-2">
                {includedFree.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary/50 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Credit Actions */}
            <div className="rounded-[var(--radius)] border border-primary/30 bg-card p-6 shadow-card">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-primary font-bold text-base">◆</span>
              </div>
              <h3 className="font-bold text-base mb-1">Uses Book Credits</h3>
              <p className="text-[11px] font-semibold tracking-widest uppercase text-primary mb-5">
                Meaningful manuscript actions
              </p>
              <ul className="space-y-1.5">
                {creditActions.map((a) => (
                  <li
                    key={a.label}
                    className="flex items-center justify-between gap-3 py-1.5 border-b border-border last:border-0"
                  >
                    <span className="text-sm text-foreground">{a.label}</span>
                    <span
                      className={[
                        "shrink-0 text-[10px] font-bold tracking-wide px-2.5 py-0.5 rounded-full",
                        a.cost === 2
                          ? "bg-primary/10 text-primary"
                          : "bg-accent text-secondary",
                      ].join(" ")}
                    >
                      {a.cost === 1 ? "1 Credit" : "2 Credits"}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Publishing Services */}
            <div className="rounded-[var(--radius)] border border-border bg-card p-6 shadow-soft">
              <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center mb-4">
                <span className="text-muted-foreground font-bold text-base">★</span>
              </div>
              <h3 className="font-bold text-base mb-1">One-Time Publishing Services</h3>
              <p className="text-[11px] font-semibold tracking-widest uppercase text-muted-foreground mb-5">
                Separate from credit system
              </p>
              <ul className="space-y-2">
                {publishingServices.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-xs text-muted-foreground border-t border-border pt-4 italic leading-relaxed">
                TAV Analysis™ always appears in Professional Services — never
                mixed with standard credit actions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Sample Workflow ────────────────────────────────────────────────────── */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-[10px] font-semibold tracking-widest uppercase text-primary mb-4">
                Sample Workflow
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight mb-4">
                A Full Book in{" "}
                <span className="text-gradient-brand">~30 Credits</span>
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Most authors complete an entire manuscript using between{" "}
                <strong className="text-foreground">20 and 30 Book Credits</strong>.
                Here's a typical 6-chapter workflow.
              </p>
              <blockquote className="border-l-2 border-primary pl-4 text-muted-foreground text-sm italic leading-relaxed">
                "Book Credits help you make meaningful progress on your manuscript."
              </blockquote>
              <div className="mt-8 flex flex-wrap gap-3">
                <div className="rounded-[var(--radius)] bg-accent px-5 py-3 text-center min-w-[110px]">
                  <p className="text-2xl font-bold text-secondary">20–30</p>
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mt-0.5">
                    Avg Credits
                  </p>
                </div>
                <div className="rounded-[var(--radius)] bg-primary/8 px-5 py-3 text-center min-w-[110px]">
                  <p className="text-2xl font-bold text-primary">~$4</p>
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mt-0.5">
                    Per Credit
                  </p>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    {["Action", "Qty", "Cost", "Total"].map((h) => (
                      <th
                        key={h}
                        className="text-left text-[10px] font-semibold uppercase tracking-widest text-muted-foreground pb-3 pr-4 last:text-right"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {workflowSteps.map((s) => (
                    <tr key={s.action} className="border-b border-border/60">
                      <td className="py-3 pr-4 text-foreground">{s.action}</td>
                      <td className="py-3 pr-4 text-muted-foreground">{s.qty}</td>
                      <td className="py-3 pr-4 text-muted-foreground">{s.cost}</td>
                      <td className="py-3 font-semibold text-foreground text-right">
                        {s.qty * s.cost}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td
                      colSpan={3}
                      className="pt-4 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground"
                    >
                      Total Credits
                    </td>
                    <td className="pt-4 text-right text-3xl font-bold text-primary">
                      {totalWorkflow}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ── Rules ─────────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-cta-gradient text-primary-foreground">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
              Credit Rules You Can Count On
            </h2>
            <p className="text-primary-foreground/65 text-base max-w-xl mx-auto">
              Simple, predictable, and always author-first.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {rules.map((rule) => (
              <div
                key={rule.title}
                className="rounded-[var(--radius)] bg-white/8 border border-white/12 p-5 backdrop-blur-sm hover:bg-white/12 transition-colors"
              >
                <div className="text-2xl mb-3">{rule.icon}</div>
                <h4 className="font-semibold text-sm mb-2">{rule.title}</h4>
                <p className="text-xs text-primary-foreground/60 leading-relaxed">
                  {rule.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Start writing your book today.
          </h2>
          <p className="text-muted-foreground mb-10 leading-relaxed">
            Publishing services are separate one-time services. Quote browsing
            and platform access are always included in your subscription.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a href="https://app.turningpages.io/login">
  <button className="bg-primary-gradient text-primary-foreground font-semibold px-8 py-3 rounded-[var(--radius)] shadow-cta hover:opacity-90 transition-opacity w-full sm:w-auto cursor-pointer">
    Get Started
  </button>
</a>
            {/* <button className="border border-border text-foreground font-semibold px-8 py-3 rounded-[var(--radius)] hover:border-primary hover:text-primary transition-colors w-full sm:w-auto">
              Compare Plans
            </button> */}
          </div>
        </div>
      </section>

    </main>
  );
}
