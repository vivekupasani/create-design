import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Layout, Sparkles, Megaphone, Search, ArrowUp, Check, Monitor, Menu, X } from "lucide-react";
import heroMeadow from "@/assets/hero-meadow.jpg";
import ctaSky from "@/assets/cta-sky.jpg";
import s1 from "@/assets/showcase-1.jpg";
import s2 from "@/assets/showcase-2.jpg";
import s3 from "@/assets/showcase-3.jpg";
import s4 from "@/assets/showcase-4.jpg";
import s5 from "@/assets/showcase-5.jpg";
import s6 from "@/assets/showcase-6.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "create.design - AI Design Generator" },
      { name: "description", content: "Describe what you want and Create.Design handles the rest. Modern designs in minutes — no design team required." },
            
      { property: "og:title", content: "Create.Design — AI design platform" },
      { property: "og:description", content: "Describe what you want and Create.Design handles the rest." },
    ],
  }),
  component: Index,
});

const showcase = [s1, s2, s3, s4, s5, s6];
const marqueeImages = [...showcase, ...showcase];

const faqs = [
  { q: "What is Create.Design?", a: "Create.Design is an AI-powered design platform that turns natural-language prompts into polished, on-brand visuals — from landing pages to marketing assets — in seconds." },
  { q: "How do I get started?", a: "Sign up, describe what you want to make, and our AI generates a starting design you can refine, export, or share with your team." },
  { q: "Can I use my own brand?", a: "Yes. Upload your logo, colors, and fonts, and every design will follow your brand guidelines automatically." },
  { q: "What can I create?", a: "Landing pages, social posts, presentations, marketing graphics, illustrations, mockups — anything visual." },
  { q: "Do you offer a free trial?", a: "Yes. The Starter plan is free forever, and Pro includes a 14-day money-back guarantee." },
  { q: "What about team collaboration?", a: "Pro and Max plans include shared workspaces, comments, version history, and role-based permissions." },
];

const features = [
  { title: "One prompt to polished design", desc: "Type what you want. Get a finished, editable design in seconds.", tone: "bg-[#efe8fb]" },
  { title: "Edit your design through prompts.", desc: "Iterate by chatting. Move, restyle, and refine without learning a tool.", tone: "bg-[#fff4d6]", wide: true },
  { title: "Designs that drive results", desc: "Trained on award-winning work. Designs feel intentional, not generated.", tone: "bg-[#e0f0ff]" },
  { title: "Design with vision, not very much", desc: "Sketch in words. Our AI fills in the craft.", tone: "bg-[#ffe8d6]" },
  { title: "Make it convert, not just look nice", desc: "Built-in best practices for hierarchy, contrast, and CTAs.", tone: "bg-[#fde8ef]" },
  { title: "Keep everything on-brand", desc: "Logos, colors, and type stay consistent across every export.", tone: "bg-[#e6f7ee]" },
  { title: "Share, export, and keep moving.", desc: "Hand off to your team in PNG, PDF, Figma, or a live link.", tone: "bg-[#e8efff]" },
  { title: "Fast enough to feel playful", desc: "Iteration cycles measured in seconds, not days.", tone: "bg-[#eef7e0]" },
];

function PromptInput({ placeholder, variant = "light" }: { placeholder: string; variant?: "light" | "solid" }) {
  return (
    <div
      className={`mx-auto w-full max-w-2xl rounded-2xl border p-3 shadow-lg backdrop-blur-md ${variant === "solid"
        ? "border-white/80 bg-white/90"
        : "border-white/60 bg-white/70"
        }`}
    >
      <textarea
        rows={2}
        placeholder={placeholder}
        className="block w-full resize-none bg-transparent px-2 py-1 text-sm text-neutral-800 placeholder:text-neutral-500 focus:outline-none"
      />
      <div className="mt-2 flex items-center justify-between gap-2">
        <button
          type="button"
          className="flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-xs font-medium text-neutral-700 hover:bg-neutral-100"
        >
          <Monitor className="h-3.5 w-3.5" /> Web Design <ChevronDown className="h-3 w-3" />
        </button>
        <button
          type="button"
          aria-label="Send"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-sky-300 bg-white text-sky-500 hover:bg-sky-50"
        >
          <ArrowUp className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <img src={heroMeadow} alt="" width={1920} height={1024} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-linear-to-b from-white/0 via-white/0 to-white" />

        {/* Nav */}
        <div className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center w-full pt-4 sm:pt-6 px-4 sm:px-6">
          <header className="flex w-full max-w-6xl items-center justify-between">
            <nav className="hidden items-center gap-1 rounded-full border border-white/40 bg-white/40 px-2 py-1.5 backdrop-blur-md md:flex">
              <a href="#" className="rounded-full bg-white px-4 py-1.5 text-sm font-medium">Create.Design</a>
              <a href="#features" className="px-3 py-1.5 text-sm text-neutral-700 hover:text-neutral-900">Features</a>
              <a href="#showcase" className="px-3 py-1.5 text-sm text-neutral-700 hover:text-neutral-900">Showcase</a>
              <a href="#pricing" className="px-3 py-1.5 text-sm text-neutral-700 hover:text-neutral-900">Pricing</a>
              <a href="#faq" className="px-3 py-1.5 text-sm text-neutral-700 hover:text-neutral-900">FAQ</a>
            </nav>
            <a href="#" className="rounded-full bg-white px-4 py-1.5 text-sm font-medium shadow-sm md:hidden">Create.Design</a>
            <div className="flex items-center gap-2">
              <button onClick={() => navigate({
                to: "/waitlist"
              })} className="hidden rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800 sm:inline-flex cursor-pointer">Join the waitlist</button>
              <button
                aria-label="Menu"
                onClick={() => setMenuOpen(!menuOpen)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40 bg-white/60 backdrop-blur-md md:hidden"
              >
                {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </button>
            </div>
          </header>
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="w-full max-w-6xl overflow-hidden md:hidden"
              >
                <div className="mt-2 rounded-2xl border border-white/60 bg-white/90 p-3 shadow-lg backdrop-blur-md">
                  {["Features", "Showcase", "Pricing", "FAQ"].map((l) => (
                    <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="block rounded-lg px-3 py-2 text-sm text-neutral-800 hover:bg-neutral-100">{l}</a>
                  ))}
                  <button className="mt-1 w-full rounded-lg bg-neutral-900 px-3 py-2 text-sm font-medium text-white">Get started</button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Hero content */}
        <div className="relative z-10 mx-auto max-w-3xl px-4 pt-32 pb-64 text-center sm:px-6 sm:pt-40 sm:pb-72">
          <h1 className="font-display text-5xl leading-[1.05] text-neutral-900 sm:text-6xl md:text-7xl">Create.Design</h1>
          <p className="mx-auto mt-5 max-w-xl text-sm text-neutral-700 sm:text-base">
            Describe what you want and we handle the rest. Modern designs in minutes — no design team required.
          </p>
          <div className="mt-8">
            <PromptInput placeholder="Describe what you want to build…" />
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="-mt-48 relative z-10">
        <p className="mb-6 text-center text-sm text-neutral-500">See what people are building</p>
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-linear-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-linear-to-l from-white to-transparent" />
          <div className="flex w-max animate-[marquee_40s_linear_infinite] gap-4">
            {marqueeImages.map((src, i) => (
              <div key={i} className="h-44 w-64 shrink-0 overflow-hidden rounded-2xl bg-neutral-100 sm:h-56 sm:w-80 md:h-64 md:w-96">
                <img src={src} alt="" loading="lazy" className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
          {/* <div className="flex w-max animate-[marquee_40s_linear_infinite_reverse] gap-4 mt-6">
            {marqueeImages.map((src, i) => (
              <div key={i} className="h-44 w-64 shrink-0 overflow-hidden rounded-2xl bg-neutral-100 sm:h-56 sm:w-80 md:h-64 md:w-96">
                <img src={src} alt="" loading="lazy" className="h-full w-full object-cover" />
              </div>
            ))}
          </div> */}
        </div>
        <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
      </section>

      {/* No team section */}
      {/* <section className="mx-auto max-w-4xl px-6 py-32 text-center">
        <h2 className="font-display text-4xl leading-tight text-neutral-900 md:text-5xl">
          You don't need a design team<br />to bring an idea to life.
        </h2>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-12">
          {[
            { icon: Layout, label: "Landing pages" },
            { icon: Sparkles, label: "Brand identity" },
            { icon: Megaphone, label: "Marketing" },
          ].map((f) => (
            <div key={f.label} className="flex flex-col items-center gap-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <f.icon className="h-6 w-6" />
              </div>
              <span className="text-sm text-neutral-600">{f.label}</span>
            </div>
          ))}
        </div>
        <button className="mt-10 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-5 py-2.5 text-sm font-medium text-neutral-800 shadow-sm hover:border-neutral-300">
          <Search className="h-4 w-4" /> See what you can make
        </button>
      </section> */}

      {/* Features grid */}
      <section id="features" className="mx-auto max-w-6xl px-6 pb-32 py-32">
        <div className="text-center">
          <h2 className="font-display text-4xl text-neutral-900 md:text-5xl">Modern designs by default.</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-neutral-600">
            Every output is opinionated, intentional, and shippable. Click below for a sample feature.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
          {features.map((f, i) => (
            <div
              key={i}
              className={`${f.tone} ${f.wide ? "md:col-span-2" : ""} rounded-3xl p-8 ring-1 ring-black/5`}
            >
              <h3 className="font-display text-2xl leading-tight text-neutral-900">{f.title}</h3>
              <p className="mt-3 text-sm text-neutral-700">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="mx-auto max-w-6xl px-6 pb-32">
        <div className="text-center">
          <h2 className="font-display text-4xl text-neutral-900 md:text-5xl">Plans and Pricing</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-neutral-600">
            Start free and upgrade as you grow. All plans include unlimited drafts.
          </p>
          <div className="mt-6 inline-flex rounded-full bg-neutral-100 p-1">
            {(["monthly", "yearly"] as const).map((b) => (
              <button
                key={b}
                onClick={() => setBilling(b)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium capitalize transition ${billing === b ? "bg-white text-neutral-900 shadow-sm" : "text-neutral-600"
                  }`}
              >
                {b}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          {[
            { name: "Starter", price: billing === "monthly" ? "$0" : "$0", desc: "For trying things out.", features: ["10 designs / month", "Standard export", "Community support"], cta: "Get started" },
            { name: "Pro", price: billing === "monthly" ? "$25" : "$20", desc: "For everyday creators.", features: ["Unlimited designs", "Brand kits", "HD exports", "Priority support"], cta: "Start free trial", highlight: true },
            { name: "Max", price: billing === "monthly" ? "$59" : "$49", desc: "For teams that ship.", features: ["Everything in Pro", "Team workspaces", "Role-based access", "Dedicated support"], cta: "Talk to sales" },
          ].map((p) => (
            <div
              key={p.name}
              className={`rounded-3xl border p-6 ${p.highlight ? "border-blue-500 bg-blue-50/40 shadow-lg" : "border-neutral-200 bg-white"}`}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-neutral-900">{p.name}</h3>
                {p.highlight && <span className="rounded-full bg-blue-600 px-2 py-0.5 text-[10px] font-medium text-white">Most popular</span>}
              </div>
              <p className="mt-1 text-xs text-neutral-500">{p.desc}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-display text-5xl text-neutral-900">{p.price}</span>
                <span className="text-sm text-neutral-500">/ {billing === "monthly" ? "mo" : "mo billed yearly"}</span>
              </div>
              <button
                className={`mt-6 w-full rounded-xl py-2.5 text-sm font-medium ${p.highlight ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-neutral-900 text-white hover:bg-neutral-800"
                  }`}
              >
                {p.cta}
              </button>
              <ul className="mt-6 space-y-2.5">
                {p.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2 text-sm text-neutral-700">
                    <Check className="mt-0.5 h-4 w-4 text-blue-600" /> {feat}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-3xl px-6 pb-32">
        <h2 className="text-center font-display text-4xl text-neutral-900 md:text-5xl">Frequently Asked</h2>
        <p className="mx-auto mt-4 max-w-md text-center text-sm text-neutral-600">
          A little bit more — including things we get asked all the time. Reach out if your question isn't here.
        </p>
        <div className="mt-10 rounded-2xl border border-neutral-200 bg-white">
          {faqs.map((f, i) => (
            <div key={i} className="border-b border-neutral-100 last:border-b-0">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <span className="text-sm font-medium text-neutral-900">{f.q}</span>
                <ChevronDown className={`h-4 w-4 text-neutral-500 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {openFaq === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-sm leading-relaxed text-neutral-600">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-neutral-500">Still curious? <a href="#" className="underline">Contact us</a></p>
      </section>

      {/* CTA sky */}
      <section className="relative overflow-hidden">
        <img src={ctaSky} alt="" width={1920} height={800} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        {/* Fade gradients */}
        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-32 bg-linear-to-b from-white to-transparent sm:h-48" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32 bg-linear-to-t from-white to-transparent sm:h-48" />

        <div className="relative z-20 mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 sm:py-32">
          <h2 className="font-display text-4xl text-white drop-shadow-sm sm:text-5xl md:text-6xl">Make anything you imagine</h2>
          <div className="mt-8">
            <PromptInput placeholder="Describe what you want to build…" variant="solid" />
          </div>
        </div>
      </section>

      {/* Second showcase */}
      <section id="showcase" className="py-24">
        <div className="text-center">
          <h2 className="font-display text-4xl text-neutral-900 md:text-5xl">Make beautiful designs</h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-neutral-600">From the first prompt to the final pixel. Real designs from real people using Create.Design.</p>
        </div>
        <div className="mt-12 relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-linear-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-linear-to-l from-white to-transparent" />
          <div className="flex w-max animate-[marquee_40s_linear_infinite] gap-4">
            {marqueeImages.map((src, i) => (
              <div key={i} className="h-44 w-64 shrink-0 overflow-hidden rounded-2xl bg-neutral-100 sm:h-56 sm:w-80 md:h-64 md:w-96">
                <img src={src} alt="" loading="lazy" className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
          <div className="flex w-max animate-[marquee_40s_linear_infinite_reverse] gap-4 mt-6">
            {marqueeImages.map((src, i) => (
              <div key={i} className="h-44 w-64 shrink-0 overflow-hidden rounded-2xl bg-neutral-100 sm:h-56 sm:w-80 md:h-64 md:w-96">
                <img src={src} alt="" loading="lazy" className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-100">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-16 md:grid-cols-5">
          <div className="col-span-2">
            <div className="font-display text-2xl text-neutral-900">Create.Design</div>
            <p className="mt-2 max-w-xs text-sm text-neutral-600">AI design platform for everyone. Built for makers, marketers, and teams.</p>
          </div>
          {[
            { title: "Product", links: ["Features", "Showcase", "Pricing", "Changelog"] },
            { title: "Resources", links: ["Docs", "Guides", "Templates", "Community"] },
            { title: "Company", links: ["About", "Careers", "Blog", "Contact"] },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-neutral-900">{col.title}</h4>
              <ul className="mt-3 space-y-2">
                {col.links.map((l) => (
                  <li key={l}><a href="#" className="text-sm text-neutral-600 hover:text-neutral-900">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-neutral-100 px-6 py-6 text-center text-xs text-neutral-500">
          © {new Date().getFullYear()} Create.Design. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
