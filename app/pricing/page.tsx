'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly')

  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: '',
      features: [
        '5 questions/day',
        'Limited topics',
        'Basic analytics',
        'Community support',
      ],
      cta: 'Get Started',
      ctaStyle: 'bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white',
    },
    {
      name: 'Pro',
      price: billingPeriod === 'monthly' ? '$9.99' : '$99.99',
      period: billingPeriod === 'monthly' ? '/month' : '/year',
      features: [
        '50 questions/day',
        'All topics',
        'Advanced analytics',
        'Email support',
        'Offline access',
      ],
      cta: 'Subscribe Now',
      ctaStyle: 'bg-blue-600 text-white hover:bg-blue-700',
      popular: true,
    },
    {
      name: 'Elite',
      price: billingPeriod === 'monthly' ? '$19.99' : '$199.99',
      period: billingPeriod === 'monthly' ? '/month' : '/year',
      features: [
        'Unlimited questions',
        'All topics + exclusive',
        'Full analytics dashboard',
        '24/7 priority support',
        'Offline + mobile app',
        'Personalized coaching',
      ],
      cta: 'Subscribe Now',
      ctaStyle: 'bg-purple-600 text-white hover:bg-purple-700',
    },
  ]

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Navbar */}
      <nav className="bg-white dark:bg-slate-800 shadow-sm sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            ExamAI
          </Link>
          <Link href="/dashboard" className="px-4 py-2 bg-blue-600 text-white rounded-lg">
            Dashboard
          </Link>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-center mb-4">Simple, Transparent Pricing</h1>
        <p className="text-center text-slate-600 dark:text-slate-400 mb-12">Choose the plan that works best for you</p>

        {/* Billing Period Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-slate-200 dark:bg-slate-800 rounded-lg p-1 flex">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`px-6 py-2 rounded-md transition font-semibold ${
                billingPeriod === 'monthly'
                  ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod('annual')}
              className={`px-6 py-2 rounded-md transition font-semibold ${
                billingPeriod === 'annual'
                  ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              Annual (Save 20%)
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              className={`rounded-lg p-8 ${plan.popular ? 'border-2 border-blue-600 bg-blue-50 dark:bg-blue-900' : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700'}`}
              whileHover={{ scale: 1.02 }}
            >
              {plan.popular && (
                <div className="text-blue-600 font-bold mb-4 text-sm">⭐ MOST POPULAR</div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-slate-600 dark:text-slate-400">{plan.period}</span>
              </div>
              <button className={`w-full px-6 py-3 rounded-lg font-bold transition mb-8 ${plan.ctaStyle}`}>
                {plan.cta}
              </button>
              <ul className="space-y-3">
                {plan.features.map((feature, j) => (
                  <li key={j} className="text-slate-700 dark:text-slate-300">
                    ✓ {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* FAQ */}
        <div className="bg-white dark:bg-slate-800 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h4 className="font-bold mb-2">Can I cancel anytime?</h4>
              <p className="text-slate-600 dark:text-slate-400">Yes, you can cancel your subscription at any time with no penalties.</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">What payment methods do you accept?</h4>
              <p className="text-slate-600 dark:text-slate-400">We accept all major credit cards and PayPal.</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">Is there a money-back guarantee?</h4>
              <p className="text-slate-600 dark:text-slate-400">Yes, 30-day money-back guarantee on all paid plans.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
