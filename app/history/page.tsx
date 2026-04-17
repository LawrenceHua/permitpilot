"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Trash2 } from "lucide-react";
import { type Trade, type JobType } from "@/lib/permit-database";

interface HistoryEntry {
  id: string;
  trade: Trade;
  jobType: JobType;
  zip: string;
  date: string;
  permitCount: number;
}

const TRADE_LABELS: Record<string, string> = {
  hvac: "HVAC",
  plumbing: "Plumbing",
  electrical: "Electrical",
  general: "General Contracting",
};

const JOB_TYPE_LABELS: Record<string, string> = {
  new_install: "New Installation",
  replacement: "Replacement",
  repair: "Repair",
  addition: "Addition",
  maintenance: "Maintenance",
};

export default function HistoryPage() {
  const [history, setHistory] = useState<HistoryEntry[]>([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("permit_history") || "[]");
    setHistory(stored);
  }, []);

  const clearHistory = () => {
    localStorage.removeItem("permit_history");
    setHistory([]);
  };

  const deleteEntry = (id: string) => {
    const updated = history.filter(e => e.id !== id);
    setHistory(updated);
    localStorage.setItem("permit_history", JSON.stringify(updated));
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link href="/lookup/" className="flex items-center gap-1 text-slate-600 hover:text-slate-900 text-sm">
              <ArrowLeft className="h-4 w-4" />
              New Lookup
            </Link>
            <h1 className="text-2xl font-bold text-slate-900">Lookup History</h1>
          </div>
          {history.length > 0 && (
            <button
              onClick={clearHistory}
              className="text-red-600 hover:text-red-500 text-sm flex items-center gap-1"
            >
              <Trash2 className="h-4 w-4" />
              Clear All
            </button>
          )}
        </div>

        {history.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
            <p className="text-slate-500 mb-4">No lookups yet.</p>
            <Link href="/lookup/" className="text-blue-600 hover:underline">Run your first permit lookup →</Link>
          </div>
        ) : (
          <div className="space-y-3">
            {history.map((entry) => (
              <div key={entry.id} className="bg-white rounded-xl border border-slate-200 p-4 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-slate-900">
                    {TRADE_LABELS[entry.trade] || entry.trade} — {JOB_TYPE_LABELS[entry.jobType] || entry.jobType}
                  </p>
                  <div className="flex items-center gap-3 text-sm text-slate-500 mt-1">
                    {entry.zip && <span>ZIP: {entry.zip}</span>}
                    <span>{entry.permitCount} permits</span>
                    <span>{new Date(entry.date).toLocaleDateString()}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Link
                    href={`/permits/?trade=${entry.trade}&jobType=${entry.jobType}${entry.zip ? `&zip=${entry.zip}` : ""}`}
                    className="text-blue-600 hover:text-blue-500 text-sm font-medium"
                  >
                    Re-run →
                  </Link>
                  <button
                    onClick={() => deleteEntry(entry.id)}
                    className="text-slate-400 hover:text-red-500 transition"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
