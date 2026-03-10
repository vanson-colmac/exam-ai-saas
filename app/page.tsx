'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function LandingPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-blue-900">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 bg-white dark:bg-slate-800 shadow-sm">
        <div className="text-2xl font-bold text-blue-600">ExamAI</div>
        <div className="flex gap-4">
          <Link href="/auth/login" className="px-4 py-2 text-blue-600 hover:text-blue-700">
            Login
          </Link>
          <Link href="/auth/signup" className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Sign Up
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section
        className="max-w-6xl mx-auto px-6 py-20 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
          Learn Smarter with AI
        </motion.h1>
        <motion.p variants={itemVariants} className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
          Generate unlimited exam questions powered by artificial intelligence. Perfect your skills with personalized practice sessions.
        </motion.p>
        <motion.div variants={itemVariants} className="flex gap-4 justify-center">
          <Link href="/auth/signup" className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-lg font-semibold">
            Try For Free
          </Link>
          <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition text-lg font-semibold">
            Watch Demo
          </button>
        </motion.div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        className="bg-white dark:bg-slate-800 py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-900 dark:text-white">Why Choose Exam AI?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '🤖', title: 'AI-Powered', desc: 'Questions generated intelligently' },
              { icon: '⚡', title: 'Lightning Fast', desc: 'Get results in seconds' },
              { icon: '📊', title: 'Track Progress', desc: 'See your improvement over time' },
            ].map((feature, i) => (
              <motion.div
                key={i}
                className="p-8 rounded-lg bg-slate-50 dark:bg-slate-700 hover:shadow-lg transition"
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">{feature.title}</h3>
                <p className="text-slate-600 dark:text-slate-300">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Pricing Section */}
      <motion.section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-900 dark:text-white">Simple Pricing</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Free', price: '$0', features: ['5 questions/day', 'Basic analytics', 'Community support'] },
              { name: 'Pro', price: '$9.99', features: ['50 questions/day', 'Advanced analytics', 'Priority support'], popular: true },
              { name: 'Elite', price: '$19.99', features: ['Unlimited questions', 'Full analytics', '24/7 support'] },
            ].map((plan, i) => (
              <motion.div
                key={i}
                className={`p-8 rounded-lg border-2 ${plan.popular ? 'border-blue-600 bg-blue-50 dark:bg-blue-900' : 'border-slate-200 dark:border-slate-700'}`}
                whileHover={{ scale: 1.02 }}
              >
                {plan.popular && <div className="text-blue-600 font-bold mb-2">MOST POPULAR</div>}
                <h3 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">{plan.name}</h3>
                <div className="text-3xl font-bold text-blue-600 mb-6">{plan.price}</div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feat, j) => (
                    <li key={j} className="text-slate-700 dark:text-slate-300">✓ {feat}</li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-bold transition ${plan.popular ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white hover:bg-slate-200'}`}>
                  Choose Plan
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to transform your learning?</h2>
          <p className="text-xl text-blue-100 mb-8">Start for free today, no credit card required</p>
          <Link href="/auth/signup" className="inline-block px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-slate-100 transition font-bold">
            Get Started Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; 2026 Exam AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
