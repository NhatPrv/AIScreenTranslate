import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AppShell } from "@/components/AppShell";
import { Search, Star, Copy } from "lucide-react";

export const Route = createFileRoute("/history")({
  head: () => ({ meta: [{ title: "History — AI Screen Translate" }] }),
  component: HistoryPage,
});

type Item = { id: string; from: string; to: string; original: string; translation: string; time: string; fav?: boolean };

const groups: { label: string; items: Item[] }[] = [
  {
    label: "Today",
    items: [
      { id: "1", from: "EN", to: "VI", original: "Welcome to the new world.", translation: "Chào mừng đến với thế giới mới.", time: "09:14", fav: true },
      { id: "2", from: "JA", to: "EN", original: "おはようございます", translation: "Good morning.", time: "08:02" },
    ],
  },
  {
    label: "Yesterday",
    items: [
      { id: "3", from: "KO", to: "EN", original: "오늘의 퀘스트를 완료하세요", translation: "Complete today’s quest.", time: "21:40" },
      { id: "4", from: "ZH", to: "VI", original: "你好，世界", translation: "Xin chào, thế giới.", time: "17:20", fav: true },
    ],
  },
];

function HistoryPage() {
  const [favs, setFavs] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(groups.flatMap((g) => g.items.filter((i) => i.fav).map((i) => [i.id, true])))
  );

  return (
    <AppShell>
      <div className="space-y-5 px-5 pb-24 pt-6">
        <header>
          <h1 className="text-2xl font-extrabold text-foreground">History</h1>
          <p className="mt-1 text-sm text-muted-foreground">All your translations, organized.</p>
        </header>

        <label className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-3 shadow-soft focus-within:ring-2 focus-within:ring-primary">
          <Search className="h-5 w-5 text-muted-foreground" />
          <input
            placeholder="Search translations"
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          />
        </label>

        {groups.map((g) => (
          <section key={g.label}>
            <h2 className="mb-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">{g.label}</h2>
            <div className="space-y-3">
              {g.items.map((it) => (
                <article key={it.id} className="rounded-3xl border border-border bg-card p-4 shadow-soft">
                  <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                    <span className="rounded-full bg-secondary px-2 py-0.5 text-secondary-foreground">{it.from} → {it.to}</span>
                    <span>{it.time}</span>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">{it.original}</p>
                  <p className="mt-1 text-base font-semibold text-foreground">{it.translation}</p>
                  <div className="mt-3 flex items-center justify-end gap-1">
                    <button className="flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground hover:bg-secondary">
                      <Copy className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => setFavs((f) => ({ ...f, [it.id]: !f[it.id] }))}
                      className="flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-secondary"
                    >
                      <Star className={`h-4 w-4 ${favs[it.id] ? "fill-accent text-accent" : "text-muted-foreground"}`} />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </AppShell>
  );
}