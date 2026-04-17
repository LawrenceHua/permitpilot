"use client";

import type { Permit } from "@/lib/permit-database";
import { Building2, ExternalLink } from "lucide-react";

interface PermitCardProps {
  permit: Permit;
}

export function PermitCard({ permit }: PermitCardProps) {
  const urgencyColors: Record<string, string> = {
    high: "border-red-300 bg-red-50",
    medium: "border-yellow-300 bg-yellow-50",
    low: "border-slate-200 bg-white",
  };

  const urgencyDot: Record<string, string> = {
    high: "bg-red-500",
    medium: "bg-yellow-500",
    low: "bg-slate-400",
  };

  return (
    <div className={`rounded-xl border-2 p-5 ${urgencyColors[permit.urgency]}`}>
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className={`w-2.5 h-2.5 rounded-full ${urgencyDot[permit.urgency]}`} />
          <Building2 className="h-4 w-4 text-slate-500" />
          <h3 className="font-semibold text-slate-900">{permit.name}</h3>
        </div>
        <a
          href={permit.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-500 text-xs flex items-center gap-1"
        >
          <ExternalLink className="h-3 w-3" />
          Info
        </a>
      </div>

      <div className="grid grid-cols-2 gap-3 text-sm mb-3">
        <div>
          <p className="text-slate-500 text-xs mb-0.5">Issuing Authority</p>
          <p className="text-slate-800 font-medium">{permit.authority}</p>
        </div>
        <div>
          <p className="text-slate-500 text-xs mb-0.5">Fee Range</p>
          <p className="text-slate-800 font-medium">{permit.feeRange}</p>
        </div>
        <div>
          <p className="text-slate-500 text-xs mb-0.5">Processing Time</p>
          <p className="text-slate-800 font-medium">{permit.processingDays}</p>
        </div>
        <div>
          <p className="text-slate-500 text-xs mb-0.5">Urgency</p>
          <p className={`font-medium capitalize ${
            permit.urgency === "high" ? "text-red-700" :
            permit.urgency === "medium" ? "text-yellow-700" : "text-slate-600"
          }`}>
            {permit.urgency}
          </p>
        </div>
      </div>

      {permit.urgencyNote && (
        <div className={`mt-3 text-xs px-3 py-2 rounded-lg ${
          permit.urgency === "high" ? "bg-red-100 text-red-700" :
          permit.urgency === "medium" ? "bg-yellow-100 text-yellow-700" : "bg-slate-100 text-slate-600"
        }`}>
          💡 {permit.urgencyNote}
        </div>
      )}
    </div>
  );
}
