import type { ReactNode } from "react";
import { ThemeToggle } from "./ThemeToggle";

export function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen w-full bg-gradient-soft px-4 py-6 sm:py-10">
      <div className="mx-auto flex max-w-md flex-col items-center gap-4">
        <div className="flex w-full items-center justify-between px-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            AI Screen Translate
          </span>
          <ThemeToggle />
        </div>
        <div className="relative w-full overflow-hidden rounded-[2.5rem] border border-border bg-background shadow-elevated">
          <div className="relative min-h-[780px]">{children}</div>
        </div>
      </div>
    </div>
  );
}