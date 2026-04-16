"use client";

import { TipInputForm } from "@/components/tip-input-form";

export default function CalculatePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Calculate Tip Allocation</h1>
          <p className="text-slate-600">Enter your weekly tip total and employee hours to get fair, compliant splits</p>
        </div>

        <TipInputForm />
      </div>
    </div>
  );
}
