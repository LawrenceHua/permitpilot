export interface Employee {
  id: string;
  name: string;
  role: "server" | "bartender" | "busser" | "host" | "back-of-house";
  hoursWorked: number;
  tipOutPercent?: number; // Custom tip-out % for BOH
}

export interface TipAllocation {
  employee: Employee;
  hourlyRate: number;
  totalTip: number;
  tipOutAmount?: number; // Amount tipped out to BOH
}

export interface TipCalculationResult {
  totalTips: number;
  totalHours: number;
  dateRange: { start: string; end: string };
  allocations: TipAllocation[];
  tipOutTotal: number;
  isCalifornia: boolean;
  grossSales?: number; // For CA tip threshold
}

export function calculateTipAllocation(
  totalTips: number,
  employees: Employee[],
  tipOutConfig: { busser?: number; host?: number; backOfHouse?: number } = {},
  isCalifornia = false
): TipCalculationResult {
  const totalHours = employees.reduce((sum, e) => sum + e.hoursWorked, 0);
  const baseHourlyRate = totalHours > 0 ? totalTips / totalHours : 0;

  const allocations: TipAllocation[] = employees.map((emp) => {
    // Tip out amounts for servers/bartenders tipping out BOH
    let tipOutAmount = 0;
    if (emp.role === "server" || emp.role === "bartender") {
      const tipOutPercent = emp.tipOutPercent ?? 0.2; // Default 20% tip-out
      if (emp.role === "server" && tipOutConfig.busser) {
        tipOutAmount += totalTips * tipOutConfig.busser * (emp.hoursWorked / totalHours);
      }
      if (emp.role === "server" && tipOutConfig.host) {
        tipOutAmount += totalTips * tipOutConfig.host * (emp.hoursWorked / totalHours);
      }
      if (tipOutConfig.backOfHouse) {
        tipOutAmount += totalTips * tipOutConfig.backOfHouse * (emp.hoursWorked / totalHours);
      }
    }

    const employeeTip = emp.hoursWorked * baseHourlyRate;
    return {
      employee: emp,
      hourlyRate: baseHourlyRate,
      totalTip: Math.max(0, employeeTip - (emp.role === "server" || emp.role === "bartender" ? tipOutAmount : 0)),
      tipOutAmount: tipOutAmount > 0 ? tipOutAmount : undefined,
    };
  });

  const tipOutTotal = allocations.reduce((sum, a) => sum + (a.tipOutAmount || 0), 0);

  return {
    totalTips,
    totalHours,
    dateRange: { start: "", end: "" },
    allocations,
    tipOutTotal,
    isCalifornia,
  };
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(amount);
}
