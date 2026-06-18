import { createFileRoute, Link } from "@tanstack/react-router";
import { PhoneFrame } from "@/components/PhoneFrame";
import { Search, Download, Check, ChevronLeft, Sparkles } from "lucide-react";

export const Route = createFileRoute("/languages")({
  head: () => ({ meta: [{ title: "Languages — AI Screen Translate" }] }),
  component: LanguagesPage,
});

const popular = [
  { code: "vi", name: "Vietnamese", flag: "🇻🇳", downloaded: true },
  { code: "en", name: "English", flag: "🇺🇸", downloaded: true },
  { code: "ja", name: "Japanese", flag: "🇯🇵", downloaded: true },
  { code: "ko", name: "Korean", flag: "🇰🇷", downloaded: false },
  { code: "zh", name: "Chinese (Simplified)", flag: "🇨🇳", downloaded: false },
];
const all = [
  { code: "es", name: "Spanish", flag: "🇪🇸", downloaded: false },
  { code: "fr", name: "French", flag: "🇫🇷", downloaded: false },
  { code: "de", name: "German", flag: "🇩🇪", downloaded: true },
  { code: "it", name: "Italian", flag: "🇮🇹", downloaded: false },
  { code: "pt", name: "Portuguese", flag: "🇵🇹", downloaded: false },
  { code: "ru", name: "Russian", flag: "🇷🇺", downloaded: false },
  { code: "ar", name: "Arabic", flag: "🇸🇦", downloaded: false },
  { code: "hi", name: "Hindi", flag: "🇮🇳", downloaded: false },
  { code: "th", name: "Thai", flag: "🇹🇭", downloaded: false },
];

function Row({ flag, name, downloaded }: { flag: string; name: string; downloaded: boolean }) {
  return (
    <button className="flex w-full items-center gap-3 px-4 py-3 text-left transition-colors hover:bg-secondary">
      <span className="text-2xl">{flag}</span>
      <span className="flex-1 text-sm font-semibold text-foreground">{name}</span>
      {downloaded ? (
        <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary">
          <Check className="h-3 w-3" /> Offline
        </span>
      ) : (
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-primary">
          <Download className="h-4 w-4" />
        </span>
      )}
    </button>
  );
}

function LanguagesPage() {
  return (
    <PhoneFrame>
      <div className="flex min-h-[780px] flex-col px-5 py-6">
        <div className="flex items-center gap-3">
          <Link to="/home" className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-foreground">
            <ChevronLeft className="h-5 w-5" />
          </Link>
          <h1 className="text-xl font-extrabold text-foreground">Language</h1>
        </div>

        <label className="mt-5 flex items-center gap-2 rounded-full border border-border bg-card px-4 py-3 shadow-soft">
          <Search className="h-5 w-5 text-muted-foreground" />
          <input
            placeholder="Search languages"
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          />
        </label>

        <button className="mt-4 flex items-center gap-3 rounded-3xl bg-gradient-soft p-4 text-left shadow-soft">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow">
            <Sparkles className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <div className="text-sm font-bold text-foreground">Auto Detect</div>
            <div className="text-xs text-muted-foreground">Let AI detect the source language</div>
          </div>
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground">
            <Check className="h-3.5 w-3.5" />
          </span>
        </button>

        <h2 className="mt-6 mb-2 px-1 text-xs font-bold uppercase tracking-widest text-muted-foreground">
          Popular
        </h2>
        <div className="divide-y divide-border overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
          {popular.map((l) => <Row key={l.code} {...l} />)}
        </div>

        <h2 className="mt-6 mb-2 px-1 text-xs font-bold uppercase tracking-widest text-muted-foreground">
          All languages
        </h2>
        <div className="divide-y divide-border overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
          {all.map((l) => <Row key={l.code} {...l} />)}
        </div>
      </div>
    </PhoneFrame>
  );
}