import { createFileRoute, Link } from "@tanstack/react-router";
import { PhoneFrame } from "@/components/PhoneFrame";
import { ChevronLeft, Download, Pause, Trash2, HardDrive, Check } from "lucide-react";

export const Route = createFileRoute("/offline")({
  head: () => ({ meta: [{ title: "Offline Languages — AI Screen Translate" }] }),
  component: OfflinePage,
});

type Pack = {
  code: string;
  name: string;
  flag: string;
  size: string;
  status: "downloaded" | "downloading" | "paused" | "available";
  progress?: number;
};

const packs: Pack[] = [
  { code: "vi", name: "Vietnamese", flag: "🇻🇳", size: "42 MB", status: "downloaded" },
  { code: "en", name: "English", flag: "🇺🇸", size: "38 MB", status: "downloaded" },
  { code: "ja", name: "Japanese", flag: "🇯🇵", size: "61 MB", status: "downloading", progress: 64 },
  { code: "ko", name: "Korean", flag: "🇰🇷", size: "58 MB", status: "paused", progress: 32 },
  { code: "es", name: "Spanish", flag: "🇪🇸", size: "44 MB", status: "available" },
  { code: "fr", name: "French", flag: "🇫🇷", size: "46 MB", status: "available" },
];

function statusButton(s: Pack["status"]) {
  switch (s) {
    case "downloaded":
      return (
        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-destructive">
          <Trash2 className="h-4 w-4" />
        </button>
      );
    case "downloading":
      return (
        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground shadow-glow">
          <Pause className="h-4 w-4" />
        </button>
      );
    case "paused":
      return (
        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground shadow-glow">
          <Download className="h-4 w-4" />
        </button>
      );
    case "available":
      return (
        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-primary">
          <Download className="h-4 w-4" />
        </button>
      );
  }
}

function OfflinePage() {
  return (
    <PhoneFrame>
      <div className="flex min-h-[780px] flex-col px-5 py-6">
        <div className="flex items-center gap-3">
          <Link to="/settings" className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-foreground">
            <ChevronLeft className="h-5 w-5" />
          </Link>
          <h1 className="text-xl font-extrabold text-foreground">Offline languages</h1>
        </div>

        <div className="mt-5 overflow-hidden rounded-3xl bg-gradient-primary p-5 text-primary-foreground shadow-glow">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 backdrop-blur">
              <HardDrive className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <div className="text-xs font-semibold uppercase tracking-wider text-white/70">Storage used</div>
              <div className="text-xl font-extrabold">412 MB <span className="text-sm font-medium text-white/70">/ 2 GB</span></div>
            </div>
          </div>
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/20">
            <div className="h-full w-1/5 rounded-full bg-white" />
          </div>
        </div>

        <div className="mt-5 space-y-3">
          {packs.map((p) => (
            <div key={p.code} className="rounded-3xl border border-border bg-card p-4 shadow-soft">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{p.flag}</span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="truncate text-sm font-bold text-foreground">{p.name}</span>
                    {p.status === "downloaded" && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary">
                        <Check className="h-3 w-3" /> Ready
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {p.size}
                    {p.status === "downloading" && ` • Downloading ${p.progress}%`}
                    {p.status === "paused" && ` • Paused at ${p.progress}%`}
                  </div>
                </div>
                {statusButton(p.status)}
              </div>
              {(p.status === "downloading" || p.status === "paused") && (
                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-muted">
                  <div
                    className={`h-full rounded-full ${p.status === "downloading" ? "bg-gradient-primary" : "bg-muted-foreground"}`}
                    style={{ width: `${p.progress}%` }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </PhoneFrame>
  );
}