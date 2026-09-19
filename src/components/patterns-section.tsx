const patterns = [
  {
    code: "01",
    title: "High-frequency action selection",
    copy: "Browsers, games, and devices repeatedly choose from a legal action set. Measure task completion, loops, and cost per task.",
  },
  {
    code: "02",
    title: "Batch classification",
    copy: "Many low-value items share a closed label set. Measure against human labels, not against whether the API returned valid JSON.",
  },
  {
    code: "03",
    title: "Confidence routing",
    copy: "Let the fast path handle clear cases and escalate uncertain ones. The useful metric is missed escalation, not raw confidence.",
  },
  {
    code: "04",
    title: "Replacing brittle rules",
    copy: "Semantic decisions can replace sprawling regexes and hand-built classifiers, provided the team keeps a regression set.",
  },
  {
    code: "05",
    title: "Real-time semantic interfaces",
    copy: "Typing, speech, and gestures map to a small action vocabulary. Latency, accidental triggers, and reversibility decide the UX.",
  },
]

export function PatternsSection() {
  return (
    <section id="patterns" className="border-t border-border py-20 sm:py-28">
      <div className="mb-10 grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
        <div>
          <p className="eyebrow">Repeated architecture</p>
          <h2 className="section-title">Five patterns behind the demos.</h2>
        </div>
        <p className="max-w-2xl text-sm leading-6 text-muted-foreground lg:justify-self-end">
          Industry categories change quickly. These workflow shapes are more
          durable because they describe the decision boundary, the reason
          latency matters, and the metric that still needs proof.
        </p>
      </div>

      <div className="grid border-t border-border lg:grid-cols-5">
        {patterns.map((pattern) => (
          <article
            key={pattern.code}
            className="border-r-0 border-b border-border py-6 last:border-b-0 lg:border-r lg:border-b-0 lg:px-5 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
          >
            <span className="font-mono text-[10px] text-signal">
              {pattern.code}
            </span>
            <h3 className="mt-8 min-h-12 text-sm leading-5 font-medium">
              {pattern.title}
            </h3>
            <p className="mt-4 text-xs leading-5 text-muted-foreground">
              {pattern.copy}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
