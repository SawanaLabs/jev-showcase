import { describe, expect, it } from "vitest"

import { caseStudies } from "@/data/cases"
import { filterCases } from "@/lib/filter-cases"

describe("filterCases", () => {
  it("combines query, category, and source filters", () => {
    const result = filterCases(caseStudies, {
      query: "batch",
      category: "Research & data",
      format: "GitHub",
    })

    expect(result.map((item) => item.id)).toEqual(["pg-typesafe"])
  })

  it("searches the decision field case-insensitively", () => {
    const result = filterCases(caseStudies, {
      query: "ORDER-BOOK",
      category: "All",
      format: "All",
    })

    expect(result.map((item) => item.id)).toEqual(["jev-trader"])
  })
})
