import { useMemo, useState } from "react"
import { ArrowDown, ArrowUpRight, Braces, Check, Gauge } from "lucide-react"

import { CaseCard } from "@/components/case-card"
import { DecisionConsole } from "@/components/decision-console"
import { FilterBar } from "@/components/filter-bar"
import { PatternsSection } from "@/components/patterns-section"
import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { caseStudies } from "@/data/cases"
import { filterCases } from "@/lib/filter-cases"
import type { Category, SourceFormat } from "@/types/case-study"

const primitives = [
  {
    name: "Choice",
    description: "Pick from options and return their probabilities.",
    icon: Braces,
  },
  {
    name: "Score",
    description: "Place an input on an ordered rubric.",
    icon: Gauge,
  },
  {
    name: "Noul",
    description: "Return the probability that a statement is true.",
    icon: Check,
  },
]

function App() {
  const [query, setQuery] = useState("")
  const [category, setCategory] = useState<Category | "All">("All")
  const [format, setFormat] = useState<SourceFormat | "All">("All")

  const visibleCases = useMemo(
    () => filterCases(caseStudies, { query, category, format }),
    [query, category, format]
  )

  const resetFilters = () => {
    setQuery("")
    setCategory("All")
    setFormat("All")
  }

  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main>
        <section className="mx-auto max-w-[1480px] px-4 pt-14 pb-20 sm:px-6 sm:pt-20 sm:pb-28 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:items-end">
            <div>
              <p className="eyebrow">Independent, source-linked index</p>
              <h1 className="max-w-4xl text-5xl leading-[0.98] font-medium tracking-[-0.055em] text-balance sm:text-7xl lg:text-[5.9rem]">
                Jev in the wild.
                <span className="mt-2 block text-muted-foreground">
                  What did it decide?
                </span>
              </h1>
              <p className="mt-8 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                Eleven source-checked builds, organized around the decision Jev
                owns inside each workflow. Performance figures stay attached to
                their original scope.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button
                  size="lg"
                  nativeButton={false}
                  render={<a href="#cases" />}
                >
                  Browse cases
                  <ArrowDown data-icon="inline-end" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  nativeButton={false}
                  render={
                    <a
                      href="https://docs.typesafe.ai/introduction"
                      target="_blank"
                      rel="noreferrer"
                    />
                  }
                >
                  Read the official docs
                  <ArrowUpRight data-icon="inline-end" />
                </Button>
              </div>

              <dl className="mt-12 grid max-w-xl grid-cols-3 gap-px overflow-hidden border border-border bg-border">
                <div className="bg-background p-4">
                  <dt className="stat-label">Cases</dt>
                  <dd className="stat-value">{caseStudies.length}</dd>
                </div>
                <div className="bg-background p-4">
                  <dt className="stat-label">Categories</dt>
                  <dd className="stat-value">7</dd>
                </div>
                <div className="bg-background p-4">
                  <dt className="stat-label">Paid hosting</dt>
                  <dd className="stat-value">$0</dd>
                </div>
              </dl>
            </div>

            <DecisionConsole />
          </div>
        </section>

        <section
          id="cases"
          className="mx-auto max-w-[1480px] scroll-mt-20 px-4 pb-20 sm:px-6 sm:pb-28 lg:px-10"
        >
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p className="eyebrow">Case files / 2026-09-19</p>
              <h2 className="section-title">
                Working systems and open experiments.
              </h2>
            </div>
            <p className="hidden max-w-sm text-right text-xs leading-5 text-muted-foreground md:block">
              Metrics are author-reported unless a card says otherwise. A
              running demo is evidence of feasibility, not production
              reliability.
            </p>
          </div>

          <FilterBar
            query={query}
            category={category}
            format={format}
            resultCount={visibleCases.length}
            onQueryChange={setQuery}
            onCategoryChange={setCategory}
            onFormatChange={setFormat}
            onReset={resetFilters}
          />

          {visibleCases.length ? (
            <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
              {visibleCases.map((item) => (
                <CaseCard key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <div className="mt-5 grid min-h-72 place-items-center border border-dashed border-border bg-card/30 text-center">
              <div>
                <p className="font-mono text-xs text-muted-foreground">
                  NO MATCHING CASE FILES
                </p>
                <Button variant="link" className="mt-2" onClick={resetFilters}>
                  Clear filters
                </Button>
              </div>
            </div>
          )}
        </section>

        <div className="mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-10">
          <PatternsSection />
        </div>

        <section id="method" className="border-y border-border bg-card/45">
          <div className="mx-auto grid max-w-[1480px] gap-12 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-[0.85fr_1.15fr] lg:px-10">
            <div>
              <p className="eyebrow">Method</p>
              <h2 className="section-title max-w-xl">
                Valid types are not the same as correct decisions.
              </h2>
              <p className="mt-6 max-w-xl text-sm leading-6 text-muted-foreground">
                Every case links back to a repository, project page, or author
                record. We separate observable implementation facts from
                author-reported performance, and we call out stale, mock,
                pre-alpha, or historical states.
              </p>
            </div>

            <div className="grid gap-px border border-border bg-border sm:grid-cols-3">
              {primitives.map(({ name, description, icon: Icon }) => (
                <article key={name} className="bg-background p-5 sm:p-6">
                  <Icon className="size-5 text-signal" />
                  <h3 className="mt-10 font-mono text-sm">{name}</h3>
                  <p className="mt-3 text-xs leading-5 text-muted-foreground">
                    {description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="mx-auto flex max-w-[1480px] flex-col gap-4 px-4 py-10 text-xs text-muted-foreground sm:px-6 md:flex-row md:items-center md:justify-between lg:px-10">
        <p>Independent research index. Not affiliated with TypeSafe AI.</p>
        <div className="flex flex-wrap gap-5">
          <a
            className="hover:text-foreground"
            href="https://www.typesafe.ai/blog/introducing-system-one-models-and-jev"
            target="_blank"
            rel="noreferrer"
          >
            Introducing Jev
          </a>
          <a
            className="hover:text-foreground"
            href="https://docs.typesafe.ai/model-jaggedness/jev-1.13"
            target="_blank"
            rel="noreferrer"
          >
            Known limitations
          </a>
          <a
            className="hover:text-foreground"
            href="https://github.com/SawanaLabs/jev-showcase"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App
