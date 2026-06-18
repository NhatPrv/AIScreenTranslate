import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PhoneFrame } from "@/components/PhoneFrame";
import { Layers, Accessibility, ScanLine, Check, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/permissions")({
  head: () => ({ meta: [{ title: "Permissions — AI Screen Translate" }] }),
  component: Permissions,
});

const PERMS = [
  {
    key: "overlay",
    icon: Layers,
    title: "Overlay Permission",
    desc: "Display the floating translation button on top of other apps.",
  },
  {
    key: "accessibility",
    icon: Accessibility,
    title: "Accessibility",
    desc: "Read on-screen text for fast, accurate translation.",
  },
  {
    key: "capture",
    icon: ScanLine,
    title: "Screen Capture",
    desc: "Capture screen content to translate images and games.",
  },
] as const;

function Permissions() {
  const [granted, setGranted] = useState<Record<string, boolean>>({});
  const count = Object.values(granted).filter(Boolean).length;
  const progress = (count / PERMS.length) * 100;

  return (
    <PhoneFrame>
      <div className="flex min-h-[780px] flex-col px-6 py-8">
        <div>
          <h2 className="text-2xl font-extrabold text-foreground">Set up permissions</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            We need a few permissions to translate everything on your screen.
          </p>
        </div>

        <div className="mt-6">
          <div className="flex items-center justify-between text-xs font-medium text-muted-foreground">
            <span>{count} of {PERMS.length} granted</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="mt-2 h-2 overflow-hidden rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-gradient-primary transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="mt-6 space-y-3">
          {PERMS.map(({ key, icon: Icon, title, desc }) => {
            const ok = granted[key];
            return (
              <div
                key={key}
                className="rounded-3xl border border-border bg-card p-5 shadow-soft"
              >
                <div className="flex items-start gap-3">
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${ok ? "bg-gradient-primary text-primary-foreground" : "bg-secondary text-primary"}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base font-bold text-foreground">{title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{desc}</p>
                  </div>
                </div>
                <button
                  onClick={() => setGranted((g) => ({ ...g, [key]: !g[key] }))}
                  className={`mt-4 flex h-11 w-full items-center justify-center gap-2 rounded-full text-sm font-semibold transition-all ${
                    ok
                      ? "bg-secondary text-primary"
                      : "bg-gradient-primary text-primary-foreground shadow-glow"
                  }`}
                >
                  {ok ? (<><Check className="h-4 w-4" /> Granted</>) : "Enable"}
                </button>
              </div>
            );
          })}
        </div>

        <Link
          to="/home"
          className="mt-6 flex h-14 items-center justify-center rounded-full bg-gradient-primary text-base font-semibold text-primary-foreground shadow-glow"
        >
          Continue <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </PhoneFrame>
  );
}