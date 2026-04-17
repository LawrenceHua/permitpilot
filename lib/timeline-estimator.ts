// Timeline and urgency estimation for permits
import type { Permit } from "./permit-database";

export function estimateStartDate(permit: Permit): string {
  const now = new Date();
  const [minDays] = permit.processingDays
    .split("–")
    .map(s => parseInt(s.replace(/\D/g, "")));

  if (!minDays) return "Contact authority";
  const startDate = new Date(now);
  startDate.setDate(startDate.getDate() + minDays + 2); // +2 buffer days
  return startDate.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

export function seasonalUrgency(trade: string, jobType: string): string | null {
  const month = new Date().getMonth(); // 0-indexed
  const seasonMap: Record<string, [number, number, string]> = {
    "hvac:replacement": [3, 5, "Apply NOW for summer AC replacement — permit queues are longest in April–June"],
    "hvac:new_install": [3, 5, "Apply early for summer installs — HVAC permits spike in spring"],
    "electrical:panel_upgrade": [2, 4, "Schedule panel work before summer storm season — inspectors book out 3+ weeks"],
    "general:new_install": [2, 4, "Start permit process early — large project permits can take 4–8 weeks"],
  };

  const key = `${trade}:${jobType}`;
  if (month >= seasonMap[key]?.[0] && month <= seasonMap[key]?.[1]) {
    return seasonMap[key][2];
  }
  return null;
}
