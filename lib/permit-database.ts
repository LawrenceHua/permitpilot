// Permit database: trade × job type × jurisdiction patterns
// Covers ~50 common scenarios for MVP

export type Trade = "hvac" | "plumbing" | "electrical" | "general";

export type JobType =
  | "new_install"
  | "repair"
  | "replacement"
  | "addition"
  | "maintenance";

export interface Permit {
  name: string;
  authority: string;
  feeRange: string;
  processingDays: string;
  url: string;
  urgency: "high" | "medium" | "low";
  urgencyNote?: string;
}

export interface PermitResult {
  trade: Trade;
  jobType: JobType;
  zip: string;
  permits: Permit[];
}

// Simplified permit rules — maps trade + job type to required permits
const permitRules: Record<string, Permit[]> = {
  "hvac:new_install": [
    {
      name: "HVAC Installation Permit",
      authority: "City/County Building Dept.",
      feeRange: "$100–$300",
      processingDays: "5–10 business days",
      url: "https://www.ncci.org/permits",
      urgency: "high",
      urgencyNote: "Required before starting work",
    },
    {
      name: "Electrical Permit (if new circuit)",
      authority: "City/County Building Dept.",
      feeRange: "$50–$150",
      processingDays: "3–7 business days",
      url: "https://www.ncci.org/permits",
      urgency: "medium",
    },
    {
      name: "Mechanical Permit",
      authority: "State Contractor Board",
      feeRange: "$75–$200",
      processingDays: "5–10 business days",
      url: "https://www.ncsl.org/mechanical-permits",
      urgency: "medium",
    },
  ],
  "hvac:replacement": [
    {
      name: "HVAC Replacement Permit",
      authority: "City/County Building Dept.",
      feeRange: "$75–$250",
      processingDays: "3–7 business days",
      url: "https://www.ncci.org/permits",
      urgency: "high",
      urgencyNote: "Apply 4–6 weeks before summer/winter peak season",
    },
    {
      name: "Refrigerant Handling Certificate",
      authority: "EPA Section 608",
      feeRange: "Free (certification required)",
      processingDays: "Same day",
      url: "https://www.epa.gov/section608",
      urgency: "high",
      urgencyNote: "Mandatory for all HVAC technicians handling refrigerants",
    },
  ],
  "hvac:repair": [
    {
      name: "HVAC Repair Permit",
      authority: "City/County Building Dept.",
      feeRange: "$50–$150",
      processingDays: "1–3 business days",
      url: "https://www.ncci.org/permits",
      urgency: "low",
      urgencyNote: "Minor repairs often exempt — check with local authority",
    },
  ],
  "plumbing:new_install": [
    {
      name: "Plumbing Permit",
      authority: "City/County Building Dept.",
      feeRange: "$100–$400",
      processingDays: "5–14 business days",
      url: "https://www.naphcc.org/permits",
      urgency: "high",
      urgencyNote: "Required for new construction or new rough-in",
    },
    {
      name: "Water Heater Permit",
      authority: "City/County Building Dept.",
      feeRange: "$50–$150",
      processingDays: "1–5 business days",
      url: "https://www.naphcc.org/permits",
      urgency: "medium",
    },
    {
      name: "Gas Line Permit (if applicable)",
      authority: "City/County Gas Safety Dept.",
      feeRange: "$75–$200",
      processingDays: "5–10 business days",
      url: "https://www.phccweb.org/permits",
      urgency: "high",
      urgencyNote: "Required for gas water heaters, furnaces",
    },
  ],
  "plumbing:replacement": [
    {
      name: "Plumbing Repair/Replace Permit",
      authority: "City/County Building Dept.",
      feeRange: "$50–$150",
      processingDays: "1–5 business days",
      url: "https://www.naphcc.org/permits",
      urgency: "medium",
      urgencyNote: "Re-piping, water heater replacement",
    },
    {
      name: "Water Heater Replacement Permit",
      authority: "City/County Building Dept.",
      feeRange: "$50–$100",
      processingDays: "1–3 business days",
      url: "https://www.naphcc.org/permits",
      urgency: "low",
    },
  ],
  "electrical:new_install": [
    {
      name: "Electrical Permit",
      authority: "City/County Electrical Inspector",
      feeRange: "$100–$500",
      processingDays: "5–14 business days",
      url: "https://www.nfpa.org/electrical-permits",
      urgency: "high",
      urgencyNote: "Required before any new electrical work",
    },
    {
      name: "Panel Upgrade Permit",
      authority: "City/County Building Dept.",
      feeRange: "$150–$400",
      processingDays: "7–21 business days",
      url: "https://www.nfpa.org/panelupgrade",
      urgency: "high",
      urgencyNote: "Apply 4–6 weeks in advance — panel permits take longest",
    },
    {
      name: "Solar/PV Permit (if applicable)",
      authority: "City/County + Utility",
      feeRange: "$200–$600",
      processingDays: "14–30 business days",
      url: "https://www.seia.org/solar-permits",
      urgency: "medium",
    },
  ],
  "electrical:replacement": [
    {
      name: "Electrical Permit (Panel/Re-panel)",
      authority: "City/County Electrical Inspector",
      feeRange: "$100–$300",
      processingDays: "5–10 business days",
      url: "https://www.nfpa.org/electrical-permits",
      urgency: "high",
      urgencyNote: "Panel replacements need inspection before power restore",
    },
    {
      name: "Service Upgrade Permit",
      authority: "City/County + Utility",
      feeRange: "$200–$500",
      processingDays: "10–21 business days",
      url: "https://www.nfpa.org/serviceupgrade",
      urgency: "high",
      urgencyNote: "Coordination with utility required — schedule 3+ weeks out",
    },
  ],
  "electrical:repair": [
    {
      name: "Electrical Repair Permit",
      authority: "City/County Electrical Inspector",
      feeRange: "$50–$150",
      processingDays: "1–3 business days",
      url: "https://www.nfpa.org/electrical-permits",
      urgency: "low",
      urgencyNote: "Minor repairs often exempt — verify with local authority",
    },
  ],
  "general:new_install": [
    {
      name: "Building Permit",
      authority: "City/County Building Dept.",
      feeRange: "$500–$2,000+",
      processingDays: "14–30 business days",
      url: "https://www.iccsafe.org/building-permits",
      urgency: "high",
      urgencyNote: "Major project — apply 4–8 weeks in advance",
    },
    {
      name: "Structural Permit",
      authority: "City/County Structural Engineer",
      feeRange: "$300–$800",
      processingDays: "14–30 business days",
      url: "https://www.iccsafe.org/structural",
      urgency: "high",
      urgencyNote: "Required for additions, structural changes",
    },
    {
      name: "Zoning Permit",
      authority: "City/County Zoning Dept.",
      feeRange: "$50–$300",
      processingDays: "7–14 business days",
      url: "https://www.planning.org/zoning/permits",
      urgency: "medium",
      urgencyNote: "Confirms project complies with local zoning codes",
    },
  ],
  "general:addition": [
    {
      name: "Building Permit",
      authority: "City/County Building Dept.",
      feeRange: "$500–$2,000+",
      processingDays: "14–30 business days",
      url: "https://www.iccsafe.org/building-permits",
      urgency: "high",
      urgencyNote: "Additions require full plan review",
    },
    {
      name: "Electrical Permit",
      authority: "City/County Electrical Inspector",
      feeRange: "$150–$400",
      processingDays: "7–21 business days",
      url: "https://www.nfpa.org/electrical-permits",
      urgency: "high",
    },
    {
      name: "Plumbing Permit",
      authority: "City/County Building Dept.",
      feeRange: "$100–$300",
      processingDays: "7–14 business days",
      url: "https://www.naphcc.org/permits",
      urgency: "high",
    },
    {
      name: "Mechanical Permit",
      authority: "State Contractor Board",
      feeRange: "$100–$250",
      processingDays: "7–14 business days",
      url: "https://www.nsl.org/mechanical-permits",
      urgency: "medium",
    },
    {
      name: "Zoning Permit",
      authority: "City/County Zoning Dept.",
      feeRange: "$50–$200",
      processingDays: "7–14 business days",
      url: "https://www.planning.org/zoning/permits",
      urgency: "medium",
    },
  ],
  "general:repair": [
    {
      name: "Building Repair Permit",
      authority: "City/County Building Dept.",
      feeRange: "$100–$300",
      processingDays: "3–7 business days",
      url: "https://www.iccsafe.org/building-permits",
      urgency: "low",
      urgencyNote: "Minor repairs often exempt — structural repairs require permit",
    },
  ],
};

export function lookupPermits(trade: Trade, jobType: JobType, zip?: string): PermitResult {
  const key = `${trade}:${jobType}`;
  const permits = permitRules[key] || [
    {
      name: "General Building Permit",
      authority: "City/County Building Dept.",
      feeRange: "$100–$500",
      processingDays: "5–14 business days",
      url: "https://www.iccsafe.org",
      urgency: "medium",
      urgencyNote: "Verify specific requirements with your local authority",
    },
  ];

  return { trade, jobType, zip: zip || "00000", permits };
}
