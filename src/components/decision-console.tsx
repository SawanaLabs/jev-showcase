const outputs = [
  { label: "click", value: 76 },
  { label: "type_text", value: 18 },
  { label: "scroll", value: 6 },
]

export function DecisionConsole() {
  return (
    <div
      className="relative overflow-hidden border border-border bg-card p-5 sm:p-6"
      aria-label="Illustration of a Jev typed decision"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-signal to-transparent" />
      <div className="mb-8 flex items-center justify-between font-mono text-[10px] tracking-[0.14em] text-muted-foreground uppercase">
        <span>Decision trace / illustrative</span>
        <span className="flex items-center gap-2 text-signal">
          <span className="size-1.5 animate-pulse rounded-full bg-signal motion-reduce:animate-none" />
          typed output
        </span>
      </div>

      <div className="space-y-3 font-mono text-xs">
        <div className="grid grid-cols-[72px_1fr] gap-3 border-b border-border pb-3">
          <span className="text-muted-foreground">STATE</span>
          <span className="text-foreground">page + goal + valid actions</span>
        </div>
        <div className="grid grid-cols-[72px_1fr] gap-3 pt-1">
          <span className="text-muted-foreground">CHOICE</span>
          <div className="space-y-3">
            {outputs.map((output) => (
              <div key={output.label}>
                <div className="mb-1.5 flex justify-between">
                  <span>{output.label}</span>
                  <span className="text-muted-foreground">{output.value}%</span>
                </div>
                <div className="h-1 overflow-hidden bg-muted">
                  <div
                    className="h-full bg-signal"
                    style={{ width: `${output.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="mt-8 border-l border-decision pl-3 text-xs leading-5 text-muted-foreground">
        The application defines the options. Jev returns probabilities; the
        application still owns thresholds and execution.
      </p>
    </div>
  )
}
