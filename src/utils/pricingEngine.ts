import { pricingMatrix } from '../data/pricingMatrix';
import type { Currency, BillingCycle, PlanTier, PlanData } from '../data/pricingMatrix';

// Note: The prompt asks for "pricingEngine.ts It should calculate Base Price -> Regional multiplier -> Annual Discount -> Formatted Currency". 
// To demonstrate this, even though we have a fully populated matrix, we'll build a utility to format it based on these rules if we were deriving it dynamically, OR we just format the exact matrix value.
// We will format the matrix value into localized currency.

export const formatCurrency = (amount: number, currency: Currency): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
    maximumFractionDigits: 0
  }).format(amount);
};

export const getPlanDetails = (
  tier: PlanTier,
  currency: Currency,
  billing: BillingCycle
): { data: PlanData; formattedPrice: string; isAnnualDiscount: boolean } => {
  
  const data = pricingMatrix[currency][billing][tier];
  const monthlyData = pricingMatrix[currency]['monthly'][tier];
  
  const isAnnualDiscount = billing === 'annual' && data.price < monthlyData.price;

  return {
    data,
    formattedPrice: formatCurrency(data.price, currency),
    isAnnualDiscount
  };
};
