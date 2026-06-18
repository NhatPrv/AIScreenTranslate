import { createFileRoute, Link } from "@tanstack/react-router";
import { PhoneFrame } from "@/components/PhoneFrame";
import { Pause, X, Move, Copy, Volume2, RotateCw, ArrowDown, ChevronLeft } from "lucide-react";

export const Route = createFileRoute("/translate")({
  head: () => ({ meta: [{ title: "Translate — AI Screen Translate" }] }),
  component: Translate,
});

function Translate() {
  return (
    <PhoneFrame>
      <div className="relative min-h-[780px] overflow-hidden">
        {/* Simulated app background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900" />
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: "radial-gradient(circle at 20% 20%, rgba(124,58,237,0.4) 0, transparent 50%), radial-gradient(circle at 80% 80%, rgba(79,70,229,0.4) 0, transparent 50%)"
        }} />

        {/* Back button */}
        <Link to="/home" className="absolute left-4 top-4 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-lg">
          <ChevronLeft className="h-5 w-5" />
        </Link>

        {/* Faint sample text behind */}
        <div className="absolute inset-x-6 top-24 space-y-2 opacity-50">
          <div className="h-2 rounded-full bg-white/30" />
          <div className="h-2 w-5/6 rounded-full bg-white/30" />
          <div className="h-2 w-2/3 rounded-full bg-white/30" />
          <div className="mt-6 h-2 rounded-full bg-white/30" />
          <div className="h-2 w-3/4 rounded-full bg-white/30" />
        </div>

        {/* Floating translation window */}
        <div className="absolute inset-x-4 top-40 z-20 overflow-hidden rounded-3xl border border-white/10 bg-card/95 shadow-elevated backdrop-blur-2xl">
          {/* Toolbar */}
          <div className="flex items-center justify-between border-b border-border bg-gradient-primary px-4 py-3">
            <div className="flex items-center gap-2 text-primary-foreground">
              <span className="flex h-2 w-2 rounded-full bg-emerald-300" />
              <span className="text-xs font-semibold uppercase tracking-wider">Live Translation</span>
            </div>
            <div className="flex items-center gap-1">
              <button className="flex h-8 w-8 items-center justify-center rounded-full text-primary-foreground hover:bg-white/20">
                <Move className="h-4 w-4" />
              </button>
              <button className="flex h-8 w-8 items-center justify-center rounded-full text-primary-foreground hover:bg-white/20">
                <Pause className="h-4 w-4" />
              </button>
              <Link to="/home" className="flex h-8 w-8 items-center justify-center rounded-full text-primary-foreground hover:bg-white/20">
                <X className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="p-5">
            <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Original · English</div>
            <p className="mt-1.5 text-base font-medium leading-snug text-foreground">
              The hero gains a new ability after defeating the ancient dragon.
            </p>

            <div className="my-4 flex items-center gap-3">
              <div className="h-px flex-1 bg-border" />
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground shadow-glow">
                <ArrowDown className="h-4 w-4" />
              </span>
              <div className="h-px flex-1 bg-border" />
            </div>

            <div className="text-[10px] font-bold uppercase tracking-widest text-primary">Translation · Vietnamese</div>
            <p className="mt-1.5 text-lg font-semibold leading-snug text-foreground">
              Người hùng nhận được sức mạnh mới sau khi đánh bại con rồng cổ đại.
            </p>

            <div className="mt-5 grid grid-cols-3 gap-2">
              {[
                { icon: Copy, label: "Copy" },
                { icon: Volume2, label: "Speak" },
                { icon: RotateCw, label: "Retry" },
              ].map(({ icon: Icon, label }) => (
                <button
                  key={label}
                  className="flex flex-col items-center gap-1.5 rounded-2xl bg-secondary py-3 text-secondary-foreground transition-colors hover:bg-muted"
                >
                  <Icon className="h-5 w-5 text-primary" />
                  <span className="text-xs font-semibold">{label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Floating action button */}
        <button className="absolute bottom-10 right-6 z-30 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground shadow-glow">
          <span className="absolute inset-0 rounded-full bg-primary/40" style={{ animation: "pulse-ring 2s ease-out infinite" }} />
          <span className="text-xl font-extrabold">T</span>
        </button>
      </div>
    </PhoneFrame>
  );
}