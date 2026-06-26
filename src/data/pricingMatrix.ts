export type Currency = 'USD' | 'EUR' | 'INR';
export type BillingCycle = 'monthly' | 'annual';
export type PlanTier = 'starter' | 'pro' | 'enterprise';

export interface PlanData {
  id: PlanTier;
  name: string;
  price: number;
  features: string[];
}

export type PricingMatrix = {
  [C in Currency]: {
    [B in BillingCycle]: Record<PlanTier, PlanData>;
  };
};

const defaultFeatures = {
  starter: ['Up to 5 agents', 'Basic analytics', 'Community support', 'Standard Integrations'],
  pro: ['Up to 50 agents', 'Advanced analytics', 'Priority support', 'Custom Integrations', 'White-labeling'],
  enterprise: ['Unlimited agents', 'Predictive analytics', '24/7 dedicated support', 'On-premise deployment', 'SLA guarantees']
};

export const pricingMatrix: PricingMatrix = {
  USD: {
    monthly: {
      starter: { id: 'starter', name: 'Starter', price: 29, features: defaultFeatures.starter },
      pro: { id: 'pro', name: 'Pro', price: 99, features: defaultFeatures.pro },
      enterprise: { id: 'enterprise', name: 'Enterprise', price: 299, features: defaultFeatures.enterprise }
    },
    annual: {
      starter: { id: 'starter', name: 'Starter', price: 24, features: defaultFeatures.starter },
      pro: { id: 'pro', name: 'Pro', price: 79, features: defaultFeatures.pro },
      enterprise: { id: 'enterprise', name: 'Enterprise', price: 249, features: defaultFeatures.enterprise }
    }
  },
  EUR: {
    monthly: {
      starter: { id: 'starter', name: 'Starter', price: 25, features: defaultFeatures.starter },
      pro: { id: 'pro', name: 'Pro', price: 89, features: defaultFeatures.pro },
      enterprise: { id: 'enterprise', name: 'Enterprise', price: 269, features: defaultFeatures.enterprise }
    },
    annual: {
      starter: { id: 'starter', name: 'Starter', price: 20, features: defaultFeatures.starter },
      pro: { id: 'pro', name: 'Pro', price: 70, features: defaultFeatures.pro },
      enterprise: { id: 'enterprise', name: 'Enterprise', price: 220, features: defaultFeatures.enterprise }
    }
  },
  INR: {
    monthly: {
      starter: { id: 'starter', name: 'Starter', price: 2499, features: defaultFeatures.starter },
      pro: { id: 'pro', name: 'Pro', price: 7999, features: defaultFeatures.pro },
      enterprise: { id: 'enterprise', name: 'Enterprise', price: 24999, features: defaultFeatures.enterprise }
    },
    annual: {
      starter: { id: 'starter', name: 'Starter', price: 1999, features: defaultFeatures.starter },
      pro: { id: 'pro', name: 'Pro', price: 6499, features: defaultFeatures.pro },
      enterprise: { id: 'enterprise', name: 'Enterprise', price: 19999, features: defaultFeatures.enterprise }
    }
  }
};
