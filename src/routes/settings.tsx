import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { AppShell } from "@/components/AppShell";
import {
  Languages,
  Layers,
  ScanText,
  Download,
  Palette,
  Info,
  ChevronRight,
} from "lucide-react";

export const Route = createFileRoute("/settings")({
  head: () => ({ meta: [{ title: "Settings — AI Screen Translate" }] }),
  component: SettingsPage,
});

function Switch({ on, onChange }: { on: boolean; onChange: () => void }) {
  return (
    <button
      onClick={onChange}
      className={`relative h-7 w-12 shrink-0 rounded-full transition-colors ${on ? "bg-gradient-primary" : "bg-muted"}`}
      aria-pressed={on}
    >
      <span
        className={`absolute top-0.5 h-6 w-6 rounded-full bg-white shadow-soft transition-all ${on ? "left-[22px]" : "left-0.5"}`}
      />
    </button>
  );
}

function SettingsPage() {
  const [toggles, setToggles] = useState({
    autoTranslate: true,
    sound: false,
    floatingBtn: true,
    autoOcr: true,
    darkMode: false,
  });
  const set = (k: keyof typeof toggles) => () => setToggles((t) => ({ ...t, [k]: !t[k] }));

  const sections: {
    title: string;
    icon: typeof Languages;
    rows: { label: string; right: ReactNode; to?: string }[];
  }[] = [
    {
      title: "Translation",
      icon: Languages,
      rows: [
        { label: "Target language", right: <span className="text-muted-foreground">Vietnamese</span>, to: "/languages" },
        { label: "Auto-translate", right: <Switch on={toggles.autoTranslate} onChange={set("autoTranslate")} /> },
        { label: "Sound effects", right: <Switch on={toggles.sound} onChange={set("sound")} /> },
      ],
    },
    {
      title: "Overlay",
      icon: Layers,
      rows: [
        { label: "Floating button", right: <Switch on={toggles.floatingBtn} onChange={set("floatingBtn")} /> },
        { label: "Bubble size", right: <span className="text-muted-foreground">Medium</span> },
      ],
    },
    {
      title: "OCR",
      icon: ScanText,
      rows: [
        { label: "Auto OCR on capture", right: <Switch on={toggles.autoOcr} onChange={set("autoOcr")} /> },
        { label: "OCR engine", right: <span className="text-muted-foreground">High accuracy</span> },
      ],
    },
    {
      title: "Offline Languages",
      icon: Download,
      rows: [
        { label: "Manage downloads", right: <ChevronRight className="h-4 w-4 text-muted-foreground" />, to: "/offline" },
      ],
    },
    {
      title: "Appearance",
      icon: Palette,
      rows: [
        { label: "Dark mode", right: <Switch on={toggles.darkMode} onChange={set("darkMode")} /> },
      ],
    },
    {
      title: "About",
      icon: Info,
      rows: [
        { label: "Version", right: <span className="text-muted-foreground">1.0.0</span> },
        { label: "Privacy policy", right: <ChevronRight className="h-4 w-4 text-muted-foreground" /> },
      ],
    },
  ];

  return (
    <AppShell>
      <div className="space-y-5 px-5 pb-24 pt-6">
        <header>
          <h1 className="text-2xl font-extrabold text-foreground">Settings</h1>
          <p className="mt-1 text-sm text-muted-foreground">Customize your translation experience.</p>
        </header>

        {sections.map(({ title, icon: Icon, rows }) => (
          <section key={title}>
            <div className="mb-2 flex items-center gap-2 px-1">
              <Icon className="h-4 w-4 text-primary" />
              <h2 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{title}</h2>
            </div>
            <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
              {rows.map((r, idx) => {
                const inner = (
                  <div className="flex items-center justify-between gap-3 px-4 py-4">
                    <span className="text-sm font-medium text-foreground">{r.label}</span>
                    <span className="flex items-center gap-2 text-sm">{r.right}</span>
                  </div>
                );
                return (
                  <div key={r.label} className={idx !== 0 ? "border-t border-border" : ""}>
                    {r.to ? <Link to={r.to as "/languages"}>{inner}</Link> : inner}
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </AppShell>
  );
}