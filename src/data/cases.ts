import type { CaseStudy } from "@/types/case-study"

export const caseStudies: CaseStudy[] = [
  {
    id: "jev-ultrafast",
    title: "Jev Ultrafast",
    author: "Browser Use",
    category: "Agents & browsers",
    format: "GitHub",
    summary:
      "A browser agent that turns the visible DOM into a numbered action space. Jev selects an operation and a compatible target in one request; a small writing model is only used for free text.",
    decision: "Choose the next browser action and its DOM target.",
    primaryUrl: "https://browser-use.com/ultrafast",
    repoUrl: "https://github.com/browser-use/jev-ultrafast",
    evidenceUrl:
      "https://github.com/browser-use/jev-ultrafast/blob/main/docs/performance.md",
    metrics: [
      { label: "Verified run", value: "7.073 s" },
      { label: "Median", value: "7.092 s" },
      { label: "Protocol calls", value: "101" },
    ],
    evidenceNote:
      "Author-reported results from one task, one browser profile, and three paired runs. This is not a general browser-agent benchmark.",
    featured: true,
  },
  {
    id: "typesafe-computer-use",
    title: "typesafe-computer-use",
    author: "Aaron Levin",
    category: "Agents & browsers",
    format: "GitHub",
    summary:
      "A macOS computer-use tool that combines OCR and the accessibility tree, then asks Jev to select the next action. A writing model is called only when free text is required.",
    decision: "Select the next desktop action from a bounded toolset.",
    primaryUrl: "https://github.com/awlevin/typesafe-computer-use",
    repoUrl: "https://github.com/awlevin/typesafe-computer-use",
    metrics: [
      { label: "Jev decision", value: "$0.0002" },
      { label: "Model latency", value: "0.13–0.38 s" },
      { label: "Full step", value: "~1.5 s" },
    ],
    evidenceNote:
      "Costs and latency are author-reported. The 155x comparison uses one screenshot and goal, not a complete task suite.",
  },
  {
    id: "typesafe-mario",
    title: "TypeSafe Mario",
    author: "fhshaik",
    category: "Games & real time",
    format: "GitHub",
    summary:
      "An experimental Super Mario Bros. controller. Emulator memory becomes compact JSON; Jev chooses a legal controller action while game timing remains deterministic code.",
    decision: "Pick a legal controller action from live game telemetry.",
    primaryUrl: "https://github.com/fhshaik/typesafe-mario",
    repoUrl: "https://github.com/fhshaik/typesafe-mario",
    metrics: [
      { label: "Decision cadence", value: "Every 8 steps" },
      { label: "Per request", value: "3 judgments" },
    ],
    evidenceNote:
      "The repository does not publish a reliable completion rate, latency summary, or cost total.",
  },
  {
    id: "heist-one",
    title: "HEIST//ONE",
    author: "Abdel Stark",
    category: "Games & real time",
    format: "GitHub",
    summary:
      "A browser stealth game where Jev proposes guard threat, suspicion, tactical intent, and attention targets. Server code still owns physics, legal actions, and final state.",
    decision: "Assign guard intent and attention from the current scene.",
    primaryUrl: "https://github.com/AbdelStark/heist-one",
    repoUrl: "https://github.com/AbdelStark/heist-one",
    evidenceUrl:
      "https://github.com/AbdelStark/heist-one/blob/main/docs/LIVE-JEV-VERIFICATION.md",
    metrics: [
      { label: "Typed judgments", value: "288" },
      { label: "Batch requests", value: "12/12" },
      { label: "Median adapter", value: "259.9 ms" },
    ],
    evidenceNote:
      "These figures come from one end-to-end run. They do not compare Jev guards with the scripted baseline.",
    featured: true,
  },
  {
    id: "jev-drone",
    title: "jev-drone",
    author: "Roman Slack",
    category: "Robotics & devices",
    format: "GitHub",
    summary:
      "A MuJoCo drone simulation. Conventional vision creates the scene state, Jev makes tactical choices, and code retains the 500 Hz flight controller plus 50 Hz safety override.",
    decision: "Choose a tactical maneuver from a structured scene state.",
    primaryUrl: "https://github.com/RomanSlack/jev-drone",
    repoUrl: "https://github.com/RomanSlack/jev-drone",
    metrics: [
      { label: "Decision rate", value: "2.5–3 Hz" },
      { label: "65 s run", value: "80 calls" },
      { label: "Median", value: "0.11 s" },
    ],
    evidenceNote:
      "Route results are from one run. Earlier seeded tests in a simpler scene did not show a Jev advantage.",
  },
  {
    id: "jev-trader",
    title: "jev-trader",
    author: "Jarrod Watts",
    category: "Trading & markets",
    format: "GitHub",
    summary:
      "Reads the Kuru MON-USDC order book and maps it to a buy or sell decision. Live mode is designed to submit one post-only limit order per Monad block.",
    decision: "Choose buy or sell from the current order-book state.",
    primaryUrl: "https://github.com/jarrodwatts/jev-trader",
    repoUrl: "https://github.com/jarrodwatts/jev-trader",
    evidenceUrl: "https://github.com/jarrodwatts/jev-trader/blob/main/SPEC.md",
    metrics: [
      { label: "Target cadence", value: "~300 ms" },
      { label: "Mock loop p50", value: "100 ms" },
    ],
    evidenceNote:
      "The public deployment is explicitly dry-run with a mock model. The 100 ms figure includes a mock inference stand-in, not live Jev trading.",
    status: "Mock + dry-run",
  },
  {
    id: "1kpapers",
    title: "1kpapers",
    author: "Hassan El Mghari",
    category: "Research & data",
    format: "Site",
    summary:
      "A research-pipeline experiment that generated paper summaries, then used Jev to choose one of 24 topics for each paper.",
    decision: "Assign each paper to one of 24 research topics.",
    primaryUrl: "https://www.1kpapers.com/",
    repoUrl: "https://github.com/Nutlope/1kpapers",
    evidenceUrl: "https://x.com/nutlope/status/2100426999546184123",
    metrics: [
      { label: "Papers", value: "1,018" },
      { label: "Jev cost", value: "$0.08" },
      { label: "Median / paper", value: "256 ms" },
    ],
    evidenceNote:
      "This is a historical, author-reported Jev experiment. The repository's current main branch now uses a Together model for topic classification.",
    status: "Historical experiment",
    featured: true,
  },
  {
    id: "unclutter",
    title: "Unclutter",
    author: "Kitze",
    category: "Content & growth",
    format: "GitHub",
    summary:
      "A Chrome and Firefox extension that classifies candidate page elements, then stores reusable local rules for hiding ads, promotions, newsletters, and social clutter.",
    decision: "Classify each page element as keep, clutter, or uncertain.",
    primaryUrl: "https://github.com/kitze/unclutter",
    repoUrl: "https://github.com/kitze/unclutter",
    metrics: [
      { label: "Batch ceiling", value: "60 elements" },
      { label: "Hide threshold", value: "≥ 0.90" },
    ],
    evidenceNote:
      "Jev classifies bounded descriptions; it does not generate CSS, selectors, or clicks. Saved templates can run without another model call.",
  },
  {
    id: "jev-review",
    title: "Jev Review",
    author: "Dev Agrawal",
    category: "Tools & apps",
    format: "GitHub",
    summary:
      "A staged review tool for Git diffs or repositories. Jev supplies structured risk, evidence selection, issue category, and severity judgments for a local review panel.",
    decision: "Turn code changes into bounded review prompts and risk labels.",
    primaryUrl: "https://github.com/devagrawal09/jev-review",
    repoUrl: "https://github.com/devagrawal09/jev-review",
    metrics: [],
    evidenceNote:
      "The repository describes findings as review prompts, not proof of defects. Compiler and static-analysis diagnostics are not yet integrated.",
  },
  {
    id: "pg-typesafe",
    title: "pg_typesafe",
    author: "Giulio Piccolo",
    category: "Research & data",
    format: "GitHub",
    summary:
      "A PostgreSQL extension that exposes Jev Choice, Noul, and Score calls inside SQL, including a batch classification function.",
    decision: "Run typed semantic judgments inside a database query.",
    primaryUrl: "https://github.com/giuliosmall/pg_typesafe",
    repoUrl: "https://github.com/giuliosmall/pg_typesafe",
    metrics: [
      { label: "Row-by-row", value: "23 s" },
      { label: "Batch", value: "0.86 s" },
      { label: "Unique texts", value: "38" },
    ],
    evidenceNote:
      "A single-machine live demo, not a general database throughput benchmark. The project is marked pre-alpha.",
    status: "Pre-alpha",
  },
  {
    id: "typesafe-ai-benchmark",
    title: "TypeSafe AI Benchmark",
    author: "Hackers in the Loop",
    category: "Research & data",
    format: "GitHub",
    summary:
      "A reproducible comparison across seven synthetic workloads, with raw exports and stated limitations for Jev, hosted Qwen, and a local model.",
    decision:
      "Measure typed decision latency and validation across synthetic workloads.",
    primaryUrl: "https://hackersintheloop.org/",
    repoUrl: "https://github.com/iammrduncan/typesafe-ai-benchmark",
    evidenceUrl:
      "https://github.com/iammrduncan/typesafe-ai-benchmark/blob/main/docs/benchmarks/README.md",
    metrics: [
      { label: "Validated", value: "479 / 480" },
      { label: "Latency p50", value: "176 ms" },
      { label: "Est. API cost", value: "$0.0119" },
    ],
    evidenceNote:
      "One synthetic workstation run. The authors explicitly say it does not prove calibration quality or provide a universal model ranking.",
  },
  {
    id: "jev-belay",
    title: "jev-belay",
    author: "Valentyn Kit",
    category: "Tools & apps",
    format: "GitHub",
    summary:
      "A Claude Code Stop hook. It reads the turn transcript locally and, only when files changed with no passing check since, asks Jev four questions about the closing message. An unverified done is sent back so the agent runs the suite; every error path lets the turn end.",
    decision:
      "Decide whether a closing done claim is backed by a check that ran.",
    primaryUrl: "https://github.com/valentynkit/jev-belay",
    repoUrl: "https://github.com/valentynkit/jev-belay",
    metrics: [
      { label: "Per gated stop", value: "1 request, 4 questions" },
      { label: "Ungated stops", value: "$0" },
    ],
    evidenceNote:
      "Author-reported. The demo GIF was recorded against a fake Jev and the README says so. No corpus result is published in the repository yet.",
  },
  {
    id: "jev-commit",
    title: "jev-commit",
    author: "Valentyn Kit",
    category: "Tools & apps",
    format: "GitHub",
    summary:
      "A pre-commit hook for the commit-msg stage. One Jev request judges the message against the staged diff on five questions: filler, contradicts the diff, debug leftovers, unmentioned work, secret shaped. It warns and gets out of the way, and blocks only on a credential.",
    decision: "Judge whether the commit message matches the staged diff.",
    primaryUrl: "https://github.com/valentynkit/jev-commit",
    repoUrl: "https://github.com/valentynkit/jev-commit",
    metrics: [
      { label: "Per commit", value: "1 request" },
      { label: "Cost", value: "~4 cents / 1,000 commits" },
    ],
    evidenceNote:
      "Author-reported from the README. No accuracy figure against a labelled corpus is published yet.",
  },
  {
    id: "jev-nvim",
    title: "jev.nvim",
    author: "Valentyn Kit",
    category: "Tools & apps",
    format: "GitHub",
    summary:
      "A Neovim plugin. Type a plain-language question about the buffer; Treesitter splits it into functions, Jev scores each one, and the answers land in quickfix ranked by probability, across languages a single regex cannot cover.",
    decision:
      "Score each function in a buffer against a plain-language question.",
    primaryUrl: "https://github.com/valentynkit/jev.nvim",
    repoUrl: "https://github.com/valentynkit/jev.nvim",
    metrics: [{ label: "Per query", value: "1 request per buffer" }],
    evidenceNote:
      "The README compares against a regex grep on a twelve-file fixture corpus. No precision or recall figure is published.",
  },
  {
    id: "jev-skip",
    title: "jev-skip",
    author: "Valentyn Kit",
    category: "Tools & apps",
    format: "GitHub",
    summary:
      "A browser extension that skips YouTube sponsor reads on videos nobody has labelled. It reads the caption track, gets one sponsor probability per 30-second segment from Jev, and paints them on the seek bar before the intro ends. No crowd database; no captions, no opinion.",
    decision: "Score each caption segment for being a sponsor read.",
    primaryUrl: "https://github.com/valentynkit/jev-skip",
    repoUrl: "https://github.com/valentynkit/jev-skip",
    metrics: [
      { label: "Sponsor seconds caught", value: "77%" },
      { label: "False skips", value: "34 s / hour" },
      { label: "Cost", value: "$0.0008 / video" },
    ],
    evidenceNote:
      "Author-reported over 23 SponsorBlock-labelled videos on 2026-09-18, answered through a Vercel AI Gateway shim rather than the direct API; the raw run is not published yet.",
  },
  {
    id: "jev-plays-pokemon-red",
    title: "jev-plays-pokemon-red",
    author: "Valentyn Kit",
    category: "Games & real time",
    format: "GitHub",
    summary:
      "Pokemon Red on PyBoy. Code owns the route and the arithmetic; Jev is asked only where the game branches: battle action, blocked-tile sidestep, dialogue menu. Every battle turn also logs a faint prediction that is labelled from RAM on the next turn and scored by Brier.",
    decision: "Pick a legal action at a branch, and predict a faint this turn.",
    primaryUrl: "https://github.com/valentynkit/jev-plays-pokemon-red",
    repoUrl: "https://github.com/valentynkit/jev-plays-pokemon-red",
    metrics: [{ label: "Calibration", value: "Brier on faints_this_turn" }],
    evidenceNote:
      "Speed and cost numbers are deliberately blank in the README until a full playthrough is measured. Calibration tooling exists; no run is published yet.",
    status: "Early",
  },
]
