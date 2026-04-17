"use client";

import type { Permit } from "@/lib/permit-database";
import { AlertTriangle, Clock, CheckCircle2 } from "lucide-react";

interface UrgencyBadgeProps {
  permit: Permit;
}

export function UrgencyBadge({ permit }: UrgencyBadgeProps) {
  if (permit.urgency === "high") {
    return (
      <div className="flex items-start gap-2 p-3 bg-red-50 border border-red-200 rounded-lg">
        <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5 shrink-0" />
        <div>
          <p className="text-sm font-medium text-red-800">High Urgency</p>
          {permit.urgencyNote && (
            <p className="text-xs text-red-600 mt-0.5">{permit.urgencyNote}</p>
          )}
        </div>
      </div>
    );
  }

  if (permit.urgency === "medium") {
    return (
      <div className="flex items-start gap-2 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
        <Clock className="h-4 w-4 text-yellow-600 mt-0.5 shrink-0" />
        <div>
          <p className="text-sm font-medium text-yellow-800">Standard Processing</p>
          {permit.urgencyNote && (
            <p className="text-xs text-yellow-600 mt-0.5">{permit.urgencyNote}</p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-start gap-2 p-3 bg-slate-50 border border-slate-200 rounded-lg">
      <CheckCircle2 className="h-4 w-4 text-slate-500 mt-0.5 shrink-0" />
      <div>
        <p className="text-sm font-medium text-slate-600">Low Urgency</p>
        {permit.urgencyNote && (
          <p className="text-xs text-slate-500 mt-0.5">{permit.urgencyNote}</p>
        )}
      </div>
    </div>
  );
}
