// Stripe configuration for PermitPilot AI
// Set these in .env.local for real Stripe price IDs

export const stripeConfig = {
  starterPriceId: process.env.NEXT_PUBLIC_STRIPE_PERMITPILOT_STARTER_PRICE_ID || "",
  proPriceId: process.env.NEXT_PUBLIC_STRIPE_PERMITPILOT_PRO_PRICE_ID || "",
};
