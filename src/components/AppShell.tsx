import type { ReactNode } from "react";
import { PhoneFrame } from "./PhoneFrame";
import { BottomNav } from "./BottomNav";

export function AppShell({ children, withNav = true }: { children: ReactNode; withNav?: boolean }) {
  return (
    <PhoneFrame>
      <div className="flex min-h-[780px] flex-col">
        <div className="flex-1">{children}</div>
        {withNav && <BottomNav />}
      </div>
    </PhoneFrame>
  );
}