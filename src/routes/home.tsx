import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { Logo } from "@/components/Logo";
import {
  ScanLine,
  Camera,
  Image as ImageIcon,
  Type,
  Mic,
  ArrowRightLeft,
  ChevronRight,
  Bell,
} from "lucide-react";

export const Route = createFileRoute("/home")({
  head: () => ({ meta: [{ title: "Home — AI Screen Translate" }] }),
  component: Home,
});

type Action = {
  to: "/translate";
  title: string;
  desc: string;
  icon: typeof ScanLine;
  featured?: boolean;
};

const actions: Action[] = [
  { to: "/translate", title: "Translate Screen", desc: "Overlay on any app", icon: ScanLine, featured: true },
  { to: "/translate", title: "Translate Camera", desc: "Live camera OCR", icon: Camera },
  { to: "/translate", title: "Translate Image", desc: "From gallery", icon: ImageIcon },
  { to: "/translate", title: "Translate Text", desc: "Type or paste", icon: Type },
  { to: "/translate", title: "Voice Translate", desc: "Real-time speech", icon: Mic },
];

const recent = [
  { from: "EN", to: "VI", text: "Welcome to the new world.", time: "2m ago" },
  { from: "JA", to: "VI", text: "おはようございます", time: "1h ago" },
  { from: "KO", to: "EN", text: "오늘의 퀘스트를 완료하세요", time: "Yesterday" },
];

function Home() {
  return (
    <AppShell>
      <div className="space-y-6 px-5 pb-24 pt-6">
        <header className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
          <div className="flex min-w-0 items-center gap-3">
            <Logo size={44} />
            <div className="min-w-0">
              <h1 className="truncate text-lg font-extrabold text-foreground">AI Screen Translate</h1>
              <p className="truncate text-xs text-muted-foreground">Tap any tile to start</p>
            </div>
          </div>
          <button className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-foreground">
            <Bell className="h-5 w-5" />
          </button>
        </header>

        <Link to="/languages" className="block rounded-3xl bg-gradient-primary p-5 shadow-glow">
          <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-white/70">
            <span>Translate from</span>
            <span>To</span>
          </div>
          <div className="mt-2 grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-3">
            <div className="min-w-0">
              <div className="flex items-center gap-2 text-white">
                <span className="text-2xl">🌐</span>
                <span className="truncate text-lg font-bold">Auto Detect</span>
              </div>
            </div>
            <button
              type="button"
              onClick={(e) => e.preventDefault()}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur transition-transform hover:rotate-180"
            >
              <ArrowRightLeft className="h-5 w-5" />
            </button>
            <div className="min-w-0 text-right">
              <div className="flex items-center justify-end gap-2 text-white">
                <span className="truncate text-lg font-bold">English (US)</span>
                <span className="text-2xl">🇺🇸</span>
              </div>
            </div>
          </div>
        </Link>

        <section>
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-base font-bold text-foreground">Quick actions</h2>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {actions.map((a) => {
              const Icon = a.icon;
              return (
                <Link
                  key={a.title}
                  to={a.to}
                  className={`group relative flex flex-col gap-3 overflow-hidden rounded-3xl border border-border p-4 shadow-soft transition-transform hover:-translate-y-0.5 ${
                    a.featured ? "col-span-2 bg-gradient-soft" : "bg-card"
                  }`}
                >
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${a.featured ? "bg-gradient-primary text-primary-foreground shadow-glow" : "bg-secondary text-primary"}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground">{a.title}</div>
                    <div className="mt-0.5 text-xs text-muted-foreground">{a.desc}</div>
                  </div>
                  {a.featured && (
                    <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-primary opacity-20 blur-2xl" />
                  )}
                </Link>
              );
            })}
          </div>
        </section>

        <section>
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-base font-bold text-foreground">Recent</h2>
            <Link to="/history" className="flex items-center text-xs font-semibold text-primary">
              See all <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="space-y-2">
            {recent.map((r, i) => (
              <div key={i} className="rounded-2xl border border-border bg-card p-4 shadow-soft">
                <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                  <span>{r.from} → {r.to}</span>
                  <span>{r.time}</span>
                </div>
                <p className="mt-1 truncate text-sm font-medium text-foreground">{r.text}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </AppShell>
  );
}