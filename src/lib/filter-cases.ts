import type { CaseStudy, Category, SourceFormat } from "@/types/case-study"

export type CaseFilters = {
  query: string
  category: Category | "All"
  format: SourceFormat | "All"
}

export function filterCases(cases: CaseStudy[], filters: CaseFilters) {
  const query = filters.query.trim().toLocaleLowerCase()

  return cases.filter((item) => {
    if (filters.category !== "All" && item.category !== filters.category)
      return false
    if (filters.format !== "All" && item.format !== filters.format) return false
    if (!query) return true

    const searchable = [
      item.title,
      item.author,
      item.category,
      item.summary,
      item.decision,
      item.status ?? "",
    ]
      .join(" ")
      .toLocaleLowerCase()

    return searchable.includes(query)
  })
}
