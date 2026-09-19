import { GitFork, Moon, Sun } from "lucide-react"

import { useTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"

const repoUrl = "https://github.com/waitlistSawana/jev-showcase"

export function SiteHeader() {
  const { theme, setTheme } = useTheme()
  const isDark = theme !== "light"

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/88 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-[1480px] items-center justify-between px-4 sm:px-6 lg:px-10">
        <a
          href="#top"
          className="group flex items-center gap-3"
          aria-label="Jev Field Notes home"
        >
          <span className="grid size-7 place-items-center border border-signal/50 bg-signal/10 font-mono text-[10px] font-semibold text-signal transition-colors group-hover:bg-signal group-hover:text-signal-foreground">
            J/
          </span>
          <span className="font-mono text-xs font-medium tracking-[0.14em] uppercase">
            Jev Field Notes
          </span>
        </a>

        <nav
          className="hidden items-center gap-6 text-xs text-muted-foreground md:flex"
          aria-label="Primary navigation"
        >
          <a className="transition-colors hover:text-foreground" href="#cases">
            Cases
          </a>
          <a
            className="transition-colors hover:text-foreground"
            href="#patterns"
          >
            Patterns
          </a>
          <a className="transition-colors hover:text-foreground" href="#method">
            Method
          </a>
        </nav>

        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon-sm"
            aria-label={
              isDark ? "Switch to light theme" : "Switch to dark theme"
            }
            onClick={() => setTheme(isDark ? "light" : "dark")}
          >
            {isDark ? <Sun /> : <Moon />}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            nativeButton={false}
            render={<a href={repoUrl} target="_blank" rel="noreferrer" />}
          >
            <GitFork data-icon="inline-start" />
            Source
          </Button>
        </div>
      </div>
    </header>
  )
}
