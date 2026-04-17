import PermitInputForm from "@/components/permit-input-form";

export default function LookupPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-3">Permit Requirements Lookup</h1>
          <p className="text-slate-600 text-lg">Enter your trade, job type, and ZIP code to get the permits you need.</p>
        </div>
        <PermitInputForm />
        <div className="mt-8 text-center">
          <p className="text-slate-500 text-sm">
            Covers HVAC, Plumbing, Electrical, and General Contracting across 50+ common scenarios.
          </p>
        </div>
      </div>
    </div>
  );
}
