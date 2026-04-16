"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AllocationCard } from "@/components/allocation-card";
import { ComplianceBadge } from "@/components/compliance-badge";
import { ExportPDF } from "@/components/export-pdf";
import { Button } from "@/components/ui/button";
import { Loader2, ArrowLeft, Calculator } from "lucide-react";
import { calculateTipAllocation, formatCurrency, TipCalculationResult } from "@/lib/tip-calculator";
import { checkCaliforniaCompliance, checkFederalCompliance, ComplianceResult } from "@/lib/compliance-checker";
import { Card, CardContent } from "@/components/ui/card";

export default function AllocationPage() {
  const router = useRouter();
  const [calculation, setCalculation] = useState<TipCalculationResult | null>(null);
  const [compliance, setCompliance] = useState<ComplianceResult | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = sessionStorage.getItem("tiptrail_last");
    if (stored) {
      const data = JSON.parse(stored);
      const result = calculateTipAllocation(
        data.totalTips,
        data.employees,
        data.tipOutConfig,
        data.isCalifornia
      );
      result.dateRange = data.dateRange;
      setCalculation(result);

      // Run compliance check
      if (data.isCalifornia) {
        setCompliance(checkCaliforniaCompliance(data.totalTips, data.employees.length, data.grossSales));
      } else {
        setCompliance(checkFederalCompliance(data.totalTips, data.employees.length, data.grossSales));
      }
    } else {
      router.replace("/calculate");
    }
    setLoading(false);
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-amber-500" />
      </div>
    );
  }

  if (!calculation) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <Button variant="ghost" onClick={() => router.back()} className="mb-2 pl-0">
              <ArrowLeft className="h-4 w-4 mr-1" /> Back
            </Button>
            <h1 className="text-3xl font-bold text-slate-900">Tip Allocation Results</h1>
          </div>
          <div className="flex gap-2">
            <ExportPDF calculation={calculation} compliance={compliance!} />
            <Button onClick={() => router.push("/calculate")} className="bg-amber-500 hover:bg-amber-600">
              <Calculator className="h-4 w-4 mr-2" /> New Calculation
            </Button>
          </div>
        </div>

        {/* Summary */}
        <Card className="mb-6 bg-amber-50 border-amber-200">
          <CardContent className="py-4">
            <div className="flex justify-between items-center">
              <div className="text-sm text-amber-800">
                <strong>{calculation.allocations.length}</strong> employees · <strong>{calculation.totalHours.toFixed(1)}</strong> total hours
              </div>
              <div className="text-2xl font-bold text-amber-900">
                {formatCurrency(calculation.totalTips)}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Allocation Cards */}
        <AllocationCard
          allocations={calculation.allocations}
          totalTips={calculation.totalTips}
          totalHours={calculation.totalHours}
        />

        {/* Compliance Badge */}
        {compliance && (
          <div className="mt-6">
            <ComplianceBadge compliance={compliance} />
          </div>
        )}

        {/* Disclaimer */}
        <p className="text-xs text-slate-400 mt-6 text-center">
          TipTrail AI provides calculations for informational purposes. Consult a qualified labor attorney or CPA for legal compliance decisions.
        </p>
      </div>
    </div>
  );
}
