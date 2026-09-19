import { Search, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  categories,
  sourceFormats,
  type Category,
  type SourceFormat,
} from "@/types/case-study"

type FilterBarProps = {
  query: string
  category: Category | "All"
  format: SourceFormat | "All"
  resultCount: number
  onQueryChange: (value: string) => void
  onCategoryChange: (value: Category | "All") => void
  onFormatChange: (value: SourceFormat | "All") => void
  onReset: () => void
}

export function FilterBar({
  query,
  category,
  format,
  resultCount,
  onQueryChange,
  onCategoryChange,
  onFormatChange,
  onReset,
}: FilterBarProps) {
  const hasFilters = query.length > 0 || category !== "All" || format !== "All"

  return (
    <div className="border-y border-border bg-card/35 py-4">
      <div className="grid gap-4 lg:grid-cols-[minmax(260px,0.8fr)_2fr_auto] lg:items-center">
        <label className="relative block">
          <span className="sr-only">Search cases</span>
          <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            placeholder="Search decisions, builds, authors…"
            className="h-9 border-border bg-background pl-9 font-mono text-xs"
          />
        </label>

        <div
          className="flex min-w-0 gap-2 overflow-x-auto pb-1 lg:pb-0"
          aria-label="Filter by category"
        >
          {["All", ...categories].map((item) => (
            <Button
              key={item}
              variant={category === item ? "default" : "outline"}
              size="sm"
              aria-pressed={category === item}
              onClick={() => onCategoryChange(item as Category | "All")}
              className="shrink-0"
            >
              {item}
            </Button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {sourceFormats.map((item) => (
            <Button
              key={item}
              variant={format === item ? "secondary" : "ghost"}
              size="sm"
              aria-pressed={format === item}
              onClick={() => onFormatChange(format === item ? "All" : item)}
            >
              {item}
            </Button>
          ))}
          {hasFilters ? (
            <Button
              variant="ghost"
              size="icon-sm"
              aria-label="Clear filters"
              onClick={onReset}
            >
              <X />
            </Button>
          ) : null}
          <span className="ml-auto font-mono text-[10px] whitespace-nowrap text-muted-foreground lg:ml-2">
            {resultCount} shown
          </span>
        </div>
      </div>
    </div>
  )
}
