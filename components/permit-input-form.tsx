"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const TRADES = [
  { value: "hvac", label: "HVAC (Heating & Cooling)", icon: "❄️" },
  { value: "plumbing", label: "Plumbing", icon: "🚿" },
  { value: "electrical", label: "Electrical", icon: "⚡" },
  { value: "general", label: "General Contracting", icon: "🔨" },
];

const JOB_TYPES = [
  { value: "new_install", label: "New Installation" },
  { value: "replacement", label: "Replacement / Re-pipe" },
  { value: "repair", label: "Repair" },
  { value: "addition", label: "Addition / Extension" },
  { value: "maintenance", label: "Maintenance" },
];

export default function PermitInputForm() {
  const router = useRouter();
  const [trade, setTrade] = useState("");
  const [jobType, setJobType] = useState("");
  const [zip, setZip] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trade || !jobType) return;
    const params = new URLSearchParams({ trade, jobType });
    if (zip) params.set("zip", zip);
    router.push(`/permits/?${params.toString()}`);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Run a Permit Lookup</h2>

      {/* Trade Selector */}
      <div className="mb-5">
        <label className="block text-sm font-medium text-slate-700 mb-2">Your Trade</label>
        <div className="grid grid-cols-2 gap-3">
          {TRADES.map((t) => (
            <button
              key={t.value}
              type="button"
              onClick={() => setTrade(t.value)}
              className={`p-3 rounded-xl border-2 text-left text-sm font-medium transition ${
                trade === t.value
                  ? "border-blue-500 bg-blue-50 text-blue-700"
                  : "border-slate-200 text-slate-700 hover:border-slate-300"
              }`}
            >
              <span className="mr-2">{t.icon}</span>
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Job Type Selector */}
      <div className="mb-5">
        <label className="block text-sm font-medium text-slate-700 mb-2">Job Type</label>
        <select
          value={jobType}
          onChange={(e) => setJobType(e.target.value)}
          required
          className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select job type...</option>
          {JOB_TYPES.map((j) => (
            <option key={j.value} value={j.value}>{j.label}</option>
          ))}
        </select>
      </div>

      {/* ZIP Code */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-slate-700 mb-2">ZIP Code <span className="text-slate-400 font-normal">(optional — for local authority details)</span></label>
        <input
          type="text"
          value={zip}
          onChange={(e) => setZip(e.target.value)}
          placeholder="e.g., 90210"
          maxLength={5}
          pattern="[0-9]{5}"
          className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        type="submit"
        disabled={!trade || !jobType}
        className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-xl transition"
      >
        {trade && jobType ? "Get Permit Requirements →" : "Select Trade & Job Type"}
      </button>
    </form>
  );
}
