import type { LucideIcon } from "lucide-react"
import {
  Bot,
  CandlestickChart,
  Code2,
  ExternalLink,
  Gamepad2,
  GitFork,
  Layers3,
  Microscope,
  Plane,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { CaseStudy, Category } from "@/types/case-study"

const categoryIcons: Record<Category, LucideIcon> = {
  "Agents & browsers": Bot,
  "Games & real time": Gamepad2,
  "Robotics & devices": Plane,
  "Trading & markets": CandlestickChart,
  "Research & data": Microscope,
  "Content & growth": Layers3,
  "Tools & apps": Code2,
}

export function CaseCard({ item }: { item: CaseStudy }) {
  const Icon = categoryIcons[item.category]

  return (
    <article
      id={item.id}
      className={`case-card group relative flex scroll-mt-24 flex-col border border-border bg-card p-5 transition-colors hover:border-foreground/30 sm:p-6 ${item.featured ? "md:col-span-2" : ""}`}
    >
      <div className="mb-8 flex items-start justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          <Badge
            variant="outline"
            className="border-border bg-background font-mono text-[10px] text-muted-foreground"
          >
            <Icon />
            {item.category}
          </Badge>
          <Badge
            variant="outline"
            className="border-border bg-background font-mono text-[10px] text-muted-foreground"
          >
            {item.format === "GitHub" ? <GitFork /> : <ExternalLink />}
            {item.format}
          </Badge>
          {item.status ? (
            <Badge className="bg-decision/12 font-mono text-[10px] text-decision">
              {item.status}
            </Badge>
          ) : null}
        </div>
        <span className="font-mono text-[10px] text-muted-foreground">
          /{item.id}
        </span>
      </div>

      <div
        className={item.featured ? "grid gap-6 md:grid-cols-[1.1fr_0.9fr]" : ""}
      >
        <div>
          <p className="mb-2 font-mono text-[10px] tracking-[0.14em] text-signal uppercase">
            Jev decides
          </p>
          <h3 className="max-w-xl text-xl font-medium tracking-[-0.025em] text-balance sm:text-2xl">
            {item.decision}
          </h3>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-muted-foreground">
            {item.summary}
          </p>
        </div>

        <div
          className={
            item.featured
              ? "mt-0 border-l-0 pt-0 md:border-l md:border-border md:pl-6"
              : "mt-7 border-t border-border pt-5"
          }
        >
          {item.metrics.length ? (
            <dl
              className={`grid gap-px overflow-hidden border border-border bg-border ${item.featured ? "grid-cols-3" : "grid-cols-2"}`}
            >
              {item.metrics.map((metric) => (
                <div key={metric.label} className="min-w-0 bg-background p-3">
                  <dt className="truncate font-mono text-[9px] tracking-[0.12em] text-muted-foreground uppercase">
                    {metric.label}
                  </dt>
                  <dd className="mt-1 font-mono text-sm text-foreground">
                    {metric.value}
                  </dd>
                </div>
              ))}
            </dl>
          ) : (
            <div className="border border-dashed border-border p-3 font-mono text-[10px] text-muted-foreground">
              No reliable performance figure published
            </div>
          )}

          <p className="mt-4 text-xs leading-5 text-muted-foreground">
            <span className="font-medium text-foreground">Evidence note.</span>{" "}
            {item.evidenceNote}
          </p>
        </div>
      </div>

      <div className="mt-auto flex items-end justify-between gap-4 pt-7">
        <div>
          <p className="font-mono text-[9px] tracking-[0.12em] text-muted-foreground uppercase">
            Builder
          </p>
          <p className="mt-1 text-xs text-foreground">{item.author}</p>
        </div>
        <div className="flex gap-1">
          {item.evidenceUrl ? (
            <Button
              variant="ghost"
              size="sm"
              nativeButton={false}
              render={
                <a href={item.evidenceUrl} target="_blank" rel="noreferrer" />
              }
            >
              Evidence
            </Button>
          ) : null}
          <Button
            variant="outline"
            size="sm"
            nativeButton={false}
            render={
              <a href={item.primaryUrl} target="_blank" rel="noreferrer" />
            }
          >
            Open source
            <ExternalLink data-icon="inline-end" />
          </Button>
        </div>
      </div>
    </article>
  )
}
