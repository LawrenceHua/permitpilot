export const STRIPE_PRICES = {
  starter: process.env.NEXT_PUBLIC_STRIPE_TIPTRAIL_STARTER_PRICE_ID || "price_tiptrail_starter_test",
  pro: process.env.NEXT_PUBLIC_STRIPE_TIPTRAIL_PRO_PRICE_ID || "price_tiptrail_pro_test",
};

export const PLAN_FEATURES = {
  starter: {
    name: "Starter",
    price: 19,
    features: [
      "5 tip calculations/month",
      "PDF tip report export",
      "1 location",
      "CA compliance checker",
      "Basic tip-out ratios",
    ],
  },
  pro: {
    name: "Pro",
    price: 49,
    features: [
      "Unlimited tip calculations",
      "Unlimited employees",
      "Unlimited locations",
      "Weekly email reports",
      "CA DLSE compliance checker",
      "IRS Form 8027 generator",
      "Priority support",
    ],
  },
};
