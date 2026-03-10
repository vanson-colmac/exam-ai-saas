// Environment types

export interface Config {
  apiUrl: string
  stripeKey: string
  environment: 'development' | 'production'
}

export const config: Config = {
  apiUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000',
  stripeKey: process.env.NEXT_PUBLIC_STRIPE_KEY || '',
  environment: (process.env.NODE_ENV || 'development') as 'development' | 'production',
}

export const PLANS = {
  FREE: {
    name: 'Free',
    price: 0,
    questions_per_day: 5,
    features: [
      '5 questions/day',
      'Basic analytics',
      'Limited topics',
      'Community support',
    ],
  },
  PRO: {
    name: 'Pro',
    price: 999, // in cents
    questions_per_day: 50,
    features: [
      '50 questions/day',
      'All topics',
      'Advanced analytics',
      'Email support',
      'Offline access',
    ],
  },
  ELITE: {
    name: 'Elite',
    price: 1999,
    questions_per_day: 999999,
    features: [
      'Unlimited questions',
      'All topics + exclusive',
      'Full analytics',
      '24/7 priority support',
      'Offline + mobile',
    ],
  },
}

export const EXAMS = [
  { id: 'gmat', name: 'GMAT' },
  { id: 'gre', name: 'GRE' },
  { id: 'sat', name: 'SAT' },
  { id: 'act', name: 'ACT' },
  { id: 'ielts', name: 'IELTS' },
]

export const TOPICS = [
  'Quantitative Reasoning',
  'Verbal Reasoning',
  'Analytical Writing',
  'Reading Comprehension',
  'Data Analysis',
  'Logical Reasoning',
]
