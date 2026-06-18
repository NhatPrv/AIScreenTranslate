import { Link } from "@tanstack/react-router";
import { Home, History, Settings } from "lucide-react";

const items = [
  { to: "/home", label: "Home", icon: Home },
  { to: "/history", label: "History", icon: History },
  { to: "/settings", label: "Settings", icon: Settings },
] as const;

export function BottomNav() {
  return (
    <nav className="sticky bottom-0 z-20 mt-auto border-t border-border bg-card/90 backdrop-blur-xl">
      <div className="flex items-center justify-around px-2 py-2">
        {items.map(({ to, label, icon: Icon }) => (
          <Link
            key={to}
            to={to}
            className="group flex flex-1 flex-col items-center gap-1 rounded-2xl px-3 py-2 text-muted-foreground transition-colors"
            activeProps={{ className: "text-primary" }}
          >
            {({ isActive }) => (
              <>
                <span
                  className={`flex h-8 w-16 items-center justify-center rounded-full transition-all ${
                    isActive ? "bg-gradient-primary text-primary-foreground shadow-glow" : ""
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-[11px] font-medium">{label}</span>
              </>
            )}
          </Link>
        ))}
      </div>
    </nav>
  );
}