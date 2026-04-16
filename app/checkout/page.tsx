"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Loader2 } from "lucide-react";

function CheckoutRedirect() {
  const searchParams = useSearchParams();
  const plan = searchParams.get("plan") || "starter";

  const priceIds: Record<string, string> = {
    starter: process.env.NEXT_PUBLIC_STRIPE_TIPTRAIL_STARTER_PRICE_ID || "price_tiptrail_starter_test",
    pro: process.env.NEXT_PUBLIC_STRIPE_TIPTRAIL_PRO_PRICE_ID || "price_tiptrail_pro_test",
  };

  const priceId = priceIds[plan] || priceIds.starter;

  if (typeof window !== "undefined") {
    window.location.href = `https://buy.stripe.com/${priceId}`;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 flex items-center justify-center">
      <div className="text-center">
        <Loader2 className="h-8 w-8 animate-spin text-amber-500 mx-auto mb-4" />
        <p className="text-slate-600">Redirecting to Stripe checkout...</p>
        <p className="text-sm text-slate-400 mt-2">Plan: {plan}</p>
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin text-amber-500 mx-auto mb-4" />
          <p className="text-slate-600">Loading...</p>
        </div>
      </div>
    }>
      <CheckoutRedirect />
    </Suspense>
  );
}
