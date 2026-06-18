import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { useNavigate } from "@tanstack/react-router";
import { PhoneFrame } from "@/components/PhoneFrame";
import { Logo } from "@/components/Logo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AI Screen Translate — Translate Anything On Your Screen" },
      { name: "description", content: "Real-time AI screen translation for games, manga, browsers and chat apps." },
      { property: "og:title", content: "AI Screen Translate" },
      { property: "og:description", content: "Translate anything on your screen with AI." },
    ],
  }),
  component: Splash,
});

function Splash() {
  const navigate = useNavigate();
  useEffect(() => {
    const t = setTimeout(() => navigate({ to: "/onboarding" }), 2200);
    return () => clearTimeout(t);
  }, [navigate]);

  return (
    <PhoneFrame>
      <div className="relative flex min-h-[780px] flex-col items-center justify-center overflow-hidden bg-gradient-hero px-8 text-center">
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute -left-20 top-20 h-64 w-64 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute -right-16 bottom-24 h-72 w-72 rounded-full bg-fuchsia-400/30 blur-3xl" />
        </div>
        <div className="relative flex flex-col items-center gap-6" style={{ animation: "float 3s ease-in-out infinite" }}>
          <div className="relative">
            <span className="absolute inset-0 rounded-[28%] bg-white/30" style={{ animation: "pulse-ring 2s ease-out infinite" }} />
            <Logo size={104} />
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-extrabold text-white">AI Screen Translate</h1>
            <p className="text-sm font-medium text-white/80">Translate Anything On Your Screen</p>
          </div>
        </div>
        <div className="absolute bottom-16 flex items-center gap-2">
          <span className="h-2 w-2 animate-bounce rounded-full bg-white [animation-delay:-0.3s]" />
          <span className="h-2 w-2 animate-bounce rounded-full bg-white [animation-delay:-0.15s]" />
          <span className="h-2 w-2 animate-bounce rounded-full bg-white" />
        </div>
      </div>
    </PhoneFrame>
  );
}
