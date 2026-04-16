"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Trash2, Calculator, Loader2 } from "lucide-react";
import { Employee } from "@/lib/tip-calculator";

const ROLES = ["server", "bartender", "busser", "host", "back-of-house"] as const;

interface TipInputFormProps {
  onCalculated?: (data: unknown) => void;
}

export function TipInputForm({ onCalculated }: TipInputFormProps) {
  const router = useRouter();
  const [totalTips, setTotalTips] = useState("");
  const [grossSales, setGrossSales] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isCalifornia, setIsCalifornia] = useState(false);
  const [tipOutBusser, setTipOutBusser] = useState("20");
  const [tipOutHost, setTipOutHost] = useState("");
  const [tipOutBOH, setTipOutBOH] = useState("");
  const [employees, setEmployees] = useState<Employee[]>([
    { id: "1", name: "", role: "server", hoursWorked: 0 },
  ]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const addEmployee = () => {
    setEmployees([
      ...employees,
      { id: Date.now().toString(), name: "", role: "server", hoursWorked: 0 },
    ]);
  };

  const removeEmployee = (id: string) => {
    if (employees.length > 1) {
      setEmployees(employees.filter((e) => e.id !== id));
    }
  };

  const updateEmployee = (id: string, field: keyof Employee, value: string | number) => {
    setEmployees(
      employees.map((e) => (e.id === id ? { ...e, [field]: value } : e))
    );
  };

  const handleCalculate = async () => {
    if (!totalTips || parseFloat(totalTips) <= 0) {
      setError("Please enter total tips collected.");
      return;
    }
    const validEmployees = employees.filter((e) => e.name && e.hoursWorked > 0);
    if (validEmployees.length === 0) {
      setError("Please add at least one employee with a name and hours worked.");
      return;
    }

    setLoading(true);
    setError("");

    const tipData = {
      totalTips: parseFloat(totalTips),
      grossSales: grossSales ? parseFloat(grossSales) : undefined,
      dateRange: { start: startDate, end: endDate },
      isCalifornia,
      tipOutConfig: {
        busser: tipOutBusser ? parseFloat(tipOutBusser) / 100 : undefined,
        host: tipOutHost ? parseFloat(tipOutHost) / 100 : undefined,
        backOfHouse: tipOutBOH ? parseFloat(tipOutBOH) / 100 : undefined,
      },
      employees: validEmployees,
    };

    try {
      sessionStorage.setItem("tiptrail_last", JSON.stringify(tipData));
      if (onCalculated) {
        onCalculated(tipData);
      } else {
        router.push("/allocation");
      }
    } catch {
      setError("Failed to save calculation. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calculator className="h-5 w-5 text-amber-500" />
          Enter Tip Data
        </CardTitle>
        <CardDescription>
          Enter your weekly tip total and employee hours to calculate fair allocations
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Tip Total */}
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <label className="text-sm font-medium mb-2 block">Total Tips Collected ($)</label>
            <Input
              type="number"
              placeholder="1250.00"
              value={totalTips}
              onChange={(e) => setTotalTips(e.target.value)}
              min="0"
              step="0.01"
            />
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Gross Sales ($)</label>
            <Input
              type="number"
              placeholder="5000.00 (optional)"
              value={grossSales}
              onChange={(e) => setGrossSales(e.target.value)}
              min="0"
              step="0.01"
            />
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Week</label>
            <div className="flex gap-2">
              <Input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                placeholder="Start"
              />
              <Input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                placeholder="End"
              />
            </div>
          </div>
        </div>

        {/* State & Tip-out config */}
        <div className="grid md:grid-cols-4 gap-4">
          <div>
            <label className="text-sm font-medium mb-2 block">State</label>
            <div className="flex gap-2 items-center">
              <button
                type="button"
                onClick={() => setIsCalifornia(!isCalifornia)}
                className={`flex-1 py-2 px-3 rounded-lg border text-sm font-medium transition-all ${
                  isCalifornia
                    ? "border-amber-500 bg-amber-50 text-amber-700"
                    : "border-border bg-background hover:bg-muted"
                }`}
              >
                California
              </button>
            </div>
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Tip-out: Busser %</label>
            <Input
              type="number"
              placeholder="20"
              value={tipOutBusser}
              onChange={(e) => setTipOutBusser(e.target.value)}
              min="0"
              max="100"
            />
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Tip-out: Host %</label>
            <Input
              type="number"
              placeholder="5"
              value={tipOutHost}
              onChange={(e) => setTipOutHost(e.target.value)}
              min="0"
              max="100"
            />
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Tip-out: BOH %</label>
            <Input
              type="number"
              placeholder="10"
              value={tipOutBOH}
              onChange={(e) => setTipOutBOH(e.target.value)}
              min="0"
              max="100"
            />
          </div>
        </div>

        {/* Employees */}
        <div>
          <div className="flex justify-between items-center mb-3">
            <label className="text-sm font-medium">Employees</label>
            <Button variant="outline" size="sm" onClick={addEmployee}>
              <Plus className="h-4 w-4 mr-1" /> Add Employee
            </Button>
          </div>
          <div className="space-y-3">
            {employees.map((emp, idx) => (
              <div key={emp.id} className="flex gap-2 items-end">
                <div className="flex-1">
                  <Input
                    placeholder="Employee name"
                    value={emp.name}
                    onChange={(e) => updateEmployee(emp.id, "name", e.target.value)}
                  />
                </div>
                <div className="w-36">
                  <select
                    className="flex h-8 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    value={emp.role}
                    onChange={(e) => updateEmployee(emp.id, "role", e.target.value)}
                  >
                    {ROLES.map((r) => (
                      <option key={r} value={r}>
                        {r.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="w-28">
                  <Input
                    type="number"
                    placeholder="Hours"
                    value={emp.hoursWorked || ""}
                    onChange={(e) => updateEmployee(emp.id, "hoursWorked", parseFloat(e.target.value) || 0)}
                    min="0"
                    step="0.5"
                  />
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeEmployee(emp.id)}
                  disabled={employees.length === 1}
                >
                  <Trash2 className="h-4 w-4 text-slate-400" />
                </Button>
              </div>
            ))}
          </div>
        </div>

        {error && (
          <p className="text-sm text-red-600 bg-red-50 px-3 py-2 rounded-lg">{error}</p>
        )}

        <Button
          onClick={handleCalculate}
          disabled={loading}
          className="w-full bg-amber-500 hover:bg-amber-600 text-white"
          size="lg"
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Calculating...
            </>
          ) : (
            <>
              <Calculator className="mr-2 h-4 w-4" />
              Calculate Tip Allocation
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  );
}
