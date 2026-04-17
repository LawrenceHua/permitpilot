// Core permit lookup logic
import { lookupPermits, type Trade, type JobType } from "./permit-database";

export interface LookupInput {
  trade: Trade;
  jobType: JobType;
  zip: string;
}

export interface LookupResult {
  input: LookupInput;
  totalPermits: number;
  highUrgency: number;
  estimatedTotalFees: string;
}

export function runPermitLookup(input: LookupInput) {
  const result = lookupPermits(input.trade, input.jobType, input.zip);

  const highUrgency = result.permits.filter(p => p.urgency === "high").length;

  // Extract fee ranges and estimate total
  const feeRanges = result.permits.map(p => p.feeRange);
  const uniqueFees = [...new Set(feeRanges)];

  return {
    input: input,
    permits: result.permits,
    totalPermits: result.permits.length,
    highUrgency,
    estimatedTotalFees: uniqueFees.join(", "),
  };
}
