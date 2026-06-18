import { Languages } from "lucide-react";

export function Logo({ size = 64 }: { size?: number }) {
  return (
    <div
      className="relative flex items-center justify-center rounded-[28%] bg-gradient-primary shadow-glow"
      style={{ width: size, height: size }}
    >
      <Languages
        className="text-primary-foreground"
        style={{ width: size * 0.5, height: size * 0.5 }}
        strokeWidth={2.5}
      />
      <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-accent-foreground shadow-soft">
        AI
      </span>
    </div>
  );
}