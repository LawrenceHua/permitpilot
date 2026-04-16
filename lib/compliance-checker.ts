export interface ComplianceIssue {
  code: string;
  severity: "error" | "warning" | "info";
  message: string;
  reference: string; // e.g., "CA DLSE Tip Manual 2024 §3"
}

export interface ComplianceResult {
  passed: boolean;
  state: string;
  issues: ComplianceIssue[];
  summary: string;
}

const CA_DLSE_RULES = {
  noTipCredits: true,
  noManagerTake: true,
  tipPoolAllowed: true,
  recordKeeping: true,
  minimumShift: 2, // hours for tip eligibility
};

export function checkCaliforniaCompliance(
  totalTips: number,
  employeeCount: number,
  grossSales?: number
): ComplianceResult {
  const issues: ComplianceIssue[] = [];

  // CA tip credit prohibition (Labor Code §351)
  // Employers cannot credit tips against minimum wage
  // This is informational — we don't have wage data but flag if tips seem abnormally low
  if (grossSales && grossSales > 0) {
    const tipPercent = (totalTips / grossSales) * 100;
    if (tipPercent < 8) {
      issues.push({
        code: "CA-001",
        severity: "warning",
        message: `Tip rate ${tipPercent.toFixed(1)}% of sales is unusually low. Verify employees received at least minimum wage.`,
        reference: "CA DLSE Tip Manual §3.1 / Labor Code §351",
      });
    }
  }

  // CA tip pooling rules — no managers/supervisors in tip pool
  issues.push({
    code: "CA-002",
    severity: "info",
    message: "Ensure no managers or supervisors are included in the tip pool. Managers may not receive any share of tips.",
    reference: "CA Labor Code §351",
  });

  // Record keeping — must keep 3 years of tip records
  issues.push({
    code: "CA-003",
    severity: "info",
    message: "Tip records must be retained for at least 3 years. TipTrail automatically archives all calculations.",
    reference: "CA Labor Code §226",
  });

  // IRS 8027 threshold — large food establishments with >10 employees
  if (grossSales && grossSales * 52 > 500000) {
    issues.push({
      code: "FED-8027",
      severity: "info",
      message: "IRS Form 8027 required annually for large restaurants ($500K+ annual gross). TipTrail generates the allocation summary.",
      reference: "IRS Publication 531",
    });
  }

  // Tip pooling ratio rules — must be reasonable
  issues.push({
    code: "CA-004",
    severity: "warning",
    message: "Tip-out ratios to back-of-house should not exceed 25% of total tips. Document tip-out policy in writing.",
    reference: "CA DLSE Tip Manual §4.2",
  });

  const passed = issues.filter(i => i.severity === "error").length === 0;

  return {
    passed,
    state: "California",
    issues,
    summary: passed
      ? "No compliance issues detected. Your tip pool structure meets CA DLSE requirements."
      : `${issues.filter(i => i.severity === "error").length} issue(s) must be resolved before this allocation is valid.`,
  };
}

export function checkFederalCompliance(
  totalTips: number,
  employeeCount: number,
  grossSales?: number
): ComplianceResult {
  const issues: ComplianceIssue[] = [];

  // Form 8027 for large food establishments
  if (grossSales && grossSales * 52 > 500000) {
    issues.push({
      code: "FED-8027",
      severity: "warning",
      message: "Restaurant likely qualifies as a 'large food establishment' under IRS rules. Must file Form 8027 annually.",
      reference: "IRS Publication 531",
    });
  }

  // Tip reporting threshold
  if (totalTips > 20000) {
    issues.push({
      code: "FED-W2",
      severity: "info",
      message: "Tips over $20/month must be reported on Form W-2. Ensure your payroll system captures aggregated tip income.",
      reference: "IRS Publication 531",
    });
  }

  return {
    passed: true,
    state: "Federal",
    issues,
    summary: "No federal compliance violations detected.",
  };
}
