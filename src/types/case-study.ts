export const categories = [
  "Agents & browsers",
  "Games & real time",
  "Robotics & devices",
  "Trading & markets",
  "Research & data",
  "Content & growth",
  "Tools & apps",
] as const

export const sourceFormats = ["GitHub", "Site"] as const

export type Category = (typeof categories)[number]
export type SourceFormat = (typeof sourceFormats)[number]

export type Metric = {
  label: string
  value: string
}

export type CaseStudy = {
  id: string
  title: string
  author: string
  category: Category
  format: SourceFormat
  summary: string
  decision: string
  primaryUrl: string
  repoUrl?: string
  evidenceUrl?: string
  metrics: Metric[]
  evidenceNote: string
  status?: string
  featured?: boolean
}
