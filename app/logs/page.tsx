"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calculator, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function LogsPage() {
  // Placeholder history page — Firestore integration can be added for signed-in users
  interface CalculationEntry {
    id: string;
    date: string;
    employees: number;
  }
  const recentCalculations: CalculationEntry[] = [];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Calculator className="h-8 w-8 text-amber-500" />
            <span className="text-xl font-bold text-slate-900">TipTrail AI</span>
          </div>
          <nav className="flex gap-4">
            <Link href="/calculate">
              <Button className="bg-amber-500 hover:bg-amber-600">
                <Calculator className="h-4 w-4 mr-2" /> New Calculation
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Tip Calculation History</h1>
          <p className="text-slate-600">Sign in to save and access your past calculations</p>
        </div>

        {recentCalculations.length === 0 ? (
          <Card className="py-12">
            <CardContent className="text-center">
              <Calculator className="h-12 w-12 text-slate-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-slate-700 mb-2">No calculations yet</h3>
              <p className="text-slate-500 mb-6">Run your first tip calculation to see it here</p>
              <Link href="/calculate">
                <Button className="bg-amber-500 hover:bg-amber-600">
                  Calculate Tips <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {recentCalculations.map((calc) => (
              <Card key={calc.id}>
                <CardContent className="flex items-center justify-between py-4">
                  <div>
                    <p className="font-medium text-slate-900">{calc.date}</p>
                    <p className="text-sm text-slate-500">{calc.employees} employees</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                    <Button variant="ghost" size="sm">
                      View
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
