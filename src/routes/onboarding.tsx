import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { PhoneFrame } from "@/components/PhoneFrame";
import { ArrowRight, Smartphone, MousePointer2, ShieldCheck, ScanLine, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/onboarding")({
  head: () => ({ meta: [{ title: "Welcome — AI Screen Translate" }] }),
  component: Onboarding,
});

const slides = [
  {
    title: "Welcome to AI Screen Translate",
    description: "Translate text from games, manga, websites, chat apps and more using AI.",
    illustration: <PhoneIllustration />,
  },
  {
    title: "Translate Any App",
    description: "Works with games, browsers, PDFs, images and social apps.",
    illustration: <FloatingButtonIllustration />,
  },
  {
    title: "Quick Start",
    description: "Get set up in three simple steps.",
    illustration: <QuickStartIllustration />,
  },
];

function Onboarding() {
  const [i, setI] = useState(0);
  const navigate = useNavigate();
  const isLast = i === slides.length - 1;
  const slide = slides[i];

  return (
    <PhoneFrame>
      <div className="flex min-h-[780px] flex-col px-6 py-8">
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            {slides.map((_, idx) => (
              <span
                key={idx}
                className={`h-1.5 rounded-full transition-all ${
                  idx === i ? "w-8 bg-gradient-primary" : "w-1.5 bg-muted"
                }`}
              />
            ))}
          </div>
          {!isLast && (
            <button
              onClick={() => navigate({ to: "/permissions" })}
              className="text-sm font-semibold text-muted-foreground hover:text-foreground"
            >
              Skip
            </button>
          )}
        </div>

        <div className="mt-8 flex flex-1 flex-col items-center justify-center text-center">
          <div className="mb-10">{slide.illustration}</div>
          <h2 className="text-2xl font-extrabold leading-tight text-foreground">{slide.title}</h2>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">{slide.description}</p>
        </div>

        <div className="space-y-3">
          {isLast ? (
            <Link
              to="/permissions"
              className="flex h-14 items-center justify-center rounded-full bg-gradient-primary text-base font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]"
            >
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          ) : (
            <button
              onClick={() => setI(i + 1)}
              className="flex h-14 w-full items-center justify-center rounded-full bg-gradient-primary text-base font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]"
            >
              Continue <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          )}
          {i > 0 && (
            <button
              onClick={() => setI(i - 1)}
              className="block w-full text-center text-sm font-medium text-muted-foreground"
            >
              Back
            </button>
          )}
        </div>
      </div>
    </PhoneFrame>
  );
}

function PhoneIllustration() {
  return (
    <div className="relative h-56 w-44">
      <div className="absolute inset-0 rounded-[2rem] bg-gradient-soft shadow-elevated" />
      <div className="absolute inset-3 rounded-[1.5rem] bg-card p-3">
        <div className="h-2 w-10 rounded-full bg-muted" />
        <div className="mt-3 space-y-1.5">
          <div className="h-2 rounded-full bg-muted" />
          <div className="h-2 w-3/4 rounded-full bg-muted" />
        </div>
        <div className="mt-4 rounded-2xl bg-gradient-primary p-3 shadow-glow">
          <div className="h-1.5 w-12 rounded-full bg-white/40" />
          <div className="mt-2 h-2 rounded-full bg-white/80" />
          <div className="mt-1 h-2 w-2/3 rounded-full bg-white/80" />
        </div>
        <div className="mt-3 space-y-1.5">
          <div className="h-2 rounded-full bg-muted" />
          <div className="h-2 w-1/2 rounded-full bg-muted" />
        </div>
      </div>
      <div className="absolute -right-4 top-16 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-primary shadow-glow">
        <Smartphone className="h-6 w-6 text-primary-foreground" />
      </div>
    </div>
  );
}

function FloatingButtonIllustration() {
  return (
    <div className="relative h-56 w-48">
      <div className="absolute inset-0 rounded-3xl bg-gradient-soft shadow-elevated" />
      <div className="absolute inset-4 space-y-2 rounded-2xl bg-card p-3">
        <div className="h-2 rounded-full bg-muted" />
        <div className="h-2 w-5/6 rounded-full bg-muted" />
        <div className="h-2 w-2/3 rounded-full bg-muted" />
        <div className="h-12 rounded-xl bg-muted/60" />
        <div className="h-2 rounded-full bg-muted" />
        <div className="h-2 w-3/4 rounded-full bg-muted" />
      </div>
      <div className="absolute -bottom-2 -right-2 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-primary shadow-glow" style={{ animation: "float 2.5s ease-in-out infinite" }}>
        <MousePointer2 className="h-7 w-7 text-primary-foreground" />
        <span className="absolute inset-0 rounded-full bg-primary/40" style={{ animation: "pulse-ring 2s ease-out infinite" }} />
      </div>
    </div>
  );
}

function QuickStartIllustration() {
  const steps = [
    { icon: ShieldCheck, label: "Grant Overlay Permission" },
    { icon: ScanLine, label: "Grant Screen Capture" },
    { icon: CheckCircle2, label: "Tap Floating Button" },
  ];
  return (
    <div className="w-72 space-y-2.5">
      {steps.map(({ icon: Icon, label }, idx) => (
        <div key={label} className="flex items-center gap-3 rounded-2xl bg-secondary p-3 shadow-soft">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground">
            <Icon className="h-5 w-5" />
          </div>
          <div className="flex-1 text-left text-sm font-semibold text-foreground">{label}</div>
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-card text-xs font-bold text-primary">
            {idx + 1}
          </span>
        </div>
      ))}
    </div>
  );
}