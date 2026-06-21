import { createFileRoute, Link } from "@tanstack/react-router";
import { PhoneFrame } from "@/components/PhoneFrame";
import { ChevronLeft, Download, Pause, Trash2, HardDrive, Check } from "lucide-react";
import { useState, useEffect } from "react";

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

const DEFAULT_PACKS: Pack[] = [
  { code: "vi", name: "Vietnamese", flag: "🇻🇳", size: "42 MB", status: "downloaded" },
  { code: "en", name: "English", flag: "🇺🇸", size: "38 MB", status: "downloaded" },
  { code: "ja", name: "Japanese", flag: "🇯🇵", size: "61 MB", status: "downloading", progress: 64 },
  { code: "ko", name: "Korean", flag: "🇰🇷", size: "58 MB", status: "paused", progress: 32 },
  { code: "es", name: "Spanish", flag: "🇪🇸", size: "44 MB", status: "available" },
  { code: "fr", name: "French", flag: "🇫🇷", size: "46 MB", status: "available" },
];

function getPackSizeMB(sizeStr: string): number {
  return parseInt(sizeStr) || 0;
}

function OfflinePage() {
  const [packList, setPackList] = useState<Pack[]>(DEFAULT_PACKS);

  useEffect(() => {
    const saved = localStorage.getItem("offline_translation_packs");
    if (saved) {
      try {
        setPackList(JSON.parse(saved));
      } catch (e) {
        // use default
      }
    } else {
      localStorage.setItem("offline_translation_packs", JSON.stringify(DEFAULT_PACKS));
    }
  }, []);

  useEffect(() => {
    const activeDownloading = packList.some((p) => p.status === "downloading");
    if (!activeDownloading) return;

    const interval = setInterval(() => {
      setPackList((prev) => {
        let changed = false;
        const updated = prev.map((p) => {
          if (p.status === "downloading") {
            const currentProgress = p.progress ?? 0;
            const nextProgress = currentProgress + Math.floor(Math.random() * 8) + 4;
            if (nextProgress >= 100) {
              changed = true;
              return { ...p, status: "downloaded" as const, progress: undefined };
            } else {
              changed = true;
              return { ...p, progress: nextProgress };
            }
          }
          return p;
        });

        if (changed) {
          localStorage.setItem("offline_translation_packs", JSON.stringify(updated));
          return updated;
        }
        return prev;
      });
    }, 800);

    return () => clearInterval(interval);
  }, [packList]);

  const handleDownload = (code: string) => {
    setPackList((prev) => {
      const updated = prev.map((p) => {
        if (p.code === code) {
          return { ...p, status: "downloading" as const, progress: p.progress ?? 0 };
        }
        return p;
      });
      localStorage.setItem("offline_translation_packs", JSON.stringify(updated));
      return updated;
    });
  };

  const handlePause = (code: string) => {
    setPackList((prev) => {
      const updated = prev.map((p) => {
        if (p.code === code) {
          return { ...p, status: "paused" as const };
        }
        return p;
      });
      localStorage.setItem("offline_translation_packs", JSON.stringify(updated));
      return updated;
    });
  };

  const handleDelete = (code: string) => {
    const pack = packList.find((p) => p.code === code);
    if (!pack) return;

    if (window.confirm(`Are you sure you want to delete the ${pack.name} pack?`)) {
      setPackList((prev) => {
        const updated = prev.map((p) => {
          if (p.code === code) {
            return { ...p, status: "available" as const, progress: undefined };
          }
          return p;
        });
        localStorage.setItem("offline_translation_packs", JSON.stringify(updated));
        return updated;
      });
    }
  };

  const totalUsedMB = packList
    .filter((p) => p.status === "downloaded" || p.status === "downloading" || p.status === "paused")
    .reduce((acc, p) => acc + getPackSizeMB(p.size), 0);

  const storageWidthPct = Math.min((totalUsedMB / 2000) * 100, 100);

  function renderStatusButton(p: Pack) {
    switch (p.status) {
      case "downloaded":
        return (
          <button
            onClick={() => handleDelete(p.code)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-destructive transition-colors hover:bg-destructive/10"
            title="Delete pack"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        );
      case "downloading":
        return (
          <button
            onClick={() => handlePause(p.code)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground shadow-glow transition-transform hover:scale-105"
            title="Pause download"
          >
            <Pause className="h-4 w-4" />
          </button>
        );
      case "paused":
        return (
          <button
            onClick={() => handleDownload(p.code)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground shadow-glow transition-transform hover:scale-105"
            title="Resume download"
          >
            <Download className="h-4 w-4" />
          </button>
        );
      case "available":
        return (
          <button
            onClick={() => handleDownload(p.code)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-primary transition-colors hover:bg-primary/10"
            title="Download pack"
          >
            <Download className="h-4 w-4" />
          </button>
        );
    }
  }

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
              <div className="text-xl font-extrabold">
                {totalUsedMB} MB <span className="text-sm font-medium text-white/70">/ 2 GB</span>
              </div>
            </div>
          </div>
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/20">
            <div className="h-full rounded-full bg-white transition-all duration-500" style={{ width: `${storageWidthPct}%` }} />
          </div>
        </div>

        <div className="mt-5 space-y-3">
          {packList.map((p) => (
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
                {renderStatusButton(p)}
              </div>
              {(p.status === "downloading" || p.status === "paused") && (
                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-muted">
                  <div
                    className={`h-full rounded-full transition-all duration-300 ${p.status === "downloading" ? "bg-gradient-primary" : "bg-muted-foreground"}`}
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