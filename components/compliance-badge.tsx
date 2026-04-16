"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ComplianceResult } from "@/lib/compliance-checker";
import { CheckCircle2, XCircle, AlertTriangle, ExternalLink } from "lucide-react";

interface ComplianceBadgeProps {
  compliance: ComplianceResult;
}

export function ComplianceBadge({ compliance }: ComplianceBadgeProps) {
  const errorCount = compliance.issues.filter((i) => i.severity === "error").length;
  const warnCount = compliance.issues.filter((i) => i.severity === "warning").length;
  const infoCount = compliance.issues.filter((i) => i.severity === "info").length;

  return (
    <Card className={`border-2 ${
      compliance.passed
        ? "border-green-200 bg-green-50"
        : "border-red-200 bg-red-50"
    }`}>
      <CardHeader className="pb-3">
        <CardTitle className="text-base flex items-center gap-2">
          {compliance.passed ? (
            <>
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              <span className="text-green-800">DLSE Compliance: PASSED</span>
            </>
          ) : (
            <>
              <XCircle className="h-5 w-5 text-red-600" />
              <span className="text-red-800">DLSE Compliance: FAILED</span>
            </>
          )}
        </CardTitle>
        <p className="text-sm text-slate-600 mt-1">{compliance.summary}</p>
      </CardHeader>
      <CardContent className="space-y-2">
        {compliance.issues.map((issue, i) => (
          <div
            key={i}
            className={`flex items-start gap-2 p-2 rounded text-sm ${
              issue.severity === "error"
                ? "bg-red-100 text-red-800"
                : issue.severity === "warning"
                ? "bg-yellow-100 text-yellow-800"
                : "bg-blue-50 text-blue-800"
            }`}
          >
            {issue.severity === "error" ? (
              <XCircle className="h-4 w-4 mt-0.5 shrink-0" />
            ) : issue.severity === "warning" ? (
              <AlertTriangle className="h-4 w-4 mt-0.5 shrink-0" />
            ) : (
              <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0" />
            )}
            <div>
              <span className="font-medium">{issue.code}: </span>
              {issue.message}
              <div className="text-xs opacity-70 mt-0.5 flex items-center gap-1">
                <ExternalLink className="h-3 w-3" />
                {issue.reference}
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
