"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TipAllocation, formatCurrency } from "@/lib/tip-calculator";
import { CheckCircle2, AlertTriangle } from "lucide-react";

interface AllocationCardProps {
  allocations: TipAllocation[];
  totalTips: number;
  totalHours: number;
}

export function AllocationCard({ allocations, totalTips, totalHours }: AllocationCardProps) {
  const baseHourlyRate = totalHours > 0 ? totalTips / totalHours : 0;

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-lg">Tip Allocation Results</CardTitle>
        <div className="flex gap-4 text-sm text-slate-600 mt-1">
          <span>Total Tips: <strong className="text-slate-900">{formatCurrency(totalTips)}</strong></span>
          <span>Total Hours: <strong className="text-slate-900">{totalHours.toFixed(1)}</strong></span>
          <span>Base Rate: <strong className="text-slate-900">{formatCurrency(baseHourlyRate)}/hr</strong></span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {allocations.map((alloc) => (
            <div
              key={alloc.employee.id}
              className="flex items-center justify-between p-4 bg-slate-50 rounded-lg border border-slate-100"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                  <span className="text-amber-700 font-semibold text-sm">
                    {alloc.employee.name.charAt(0).toUpperCase()}
                  </span>
                </div>
                <div>
                  <div className="font-medium text-slate-900">{alloc.employee.name}</div>
                  <div className="text-xs text-slate-500 flex items-center gap-1">
                    <span className="capitalize">{alloc.employee.role.replace("-", " ")}</span>
                    <span>·</span>
                    <span>{alloc.employee.hoursWorked} hrs</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-bold text-lg text-slate-900">
                  {formatCurrency(alloc.totalTip)}
                </div>
                <div className="text-xs text-slate-500">
                  {formatCurrency(alloc.hourlyRate)}/hr
                </div>
                {alloc.tipOutAmount && alloc.tipOutAmount > 0 && (
                  <div className="text-xs text-orange-600 flex items-center justify-end gap-1 mt-0.5">
                    <AlertTriangle className="h-3 w-3" />
                    -{(alloc.tipOutAmount).toFixed(2)} tip-out
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
