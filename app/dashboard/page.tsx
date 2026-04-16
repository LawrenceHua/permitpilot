"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calculator, Download, ArrowRight } from "lucide-react";
import Link from "next/link";
import { formatCurrency } from "@/lib/tip-calculator";

interface HistoryItem {
  id: string;
  totalTips: number;
  employeeCount: number;
  totalHours: number;
  date: string;
  isCalifornia: boolean;
}

export default function DashboardPage() {
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load from localStorage for signed-out users
    const stored = localStorage.getItem("tiptrail_history");
    if (stored) {
      try {
        setHistory(JSON.parse(stored));
      } catch {
        setHistory([]);
      }
    }
    setLoading(false);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Tip Calculation History</h1>
            <p className="text-slate-600 mt-1">Your recent tip allocations</p>
          </div>
          <div className="flex gap-3">
            <Link href="/calculate">
              <Button className="bg-amber-500 hover:bg-amber-600 gap-2">
                <Calculator className="h-4 w-4" />
                New Calculation
              </Button>
            </Link>
          </div>
        </div>

        {loading ? (
          <div className="text-center py-12 text-slate-500">Loading...</div>
        ) : history.length === 0 ? (
          <Card className="text-center py-12">
            <CardContent>
              <Calculator className="h-12 w-12 text-slate-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-slate-700 mb-2">No calculations yet</h3>
              <p className="text-slate-500 mb-6">Run your first tip calculation to see it here.</p>
              <Link href="/calculate">
                <Button className="bg-amber-500 hover:bg-amber-600">
                  <Calculator className="mr-2 h-4 w-4" />
                  Calculate Tips
                </Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {history.map((item) => (
              <Card key={item.id} className="border-slate-200">
                <CardContent className="flex items-center justify-between py-4">
                  <div>
                    <p className="font-medium text-slate-900">{item.date || "Untitled calculation"}</p>
                    <div className="flex gap-3 text-sm text-slate-500 mt-1">
                      <span>{item.employeeCount} employees</span>
                      <span>·</span>
                      <span>{item.totalHours.toFixed(1)} hrs</span>
                      {item.isCalifornia && (
                        <>
                          <span>·</span>
                          <span className="text-amber-600 font-medium">CA</span>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right mr-2">
                      <div className="font-bold text-slate-900">{formatCurrency(item.totalTips)}</div>
                      <div className="text-xs text-slate-500">total tips</div>
                    </div>
                    <Button variant="outline" size="sm">
                      <ArrowRight className="h-4 w-4" /> View
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
