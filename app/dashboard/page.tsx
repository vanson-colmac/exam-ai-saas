'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Dashboard() {
  const [selectedExam, setSelectedExam] = useState('gmat')
  const [selectedTopic, setSelectedTopic] = useState('')
  const [loading, setLoading] = useState(false)

  const handleGenerateQuiz = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/quizzes/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          exam_id: selectedExam,
          topic_id: selectedTopic,
          count: 5,
        }),
      })
      if (response.ok) {
        window.location.href = '/quiz'
      }
    } catch (error) {
      console.error('Failed to generate quiz:', error)
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Navbar */}
      <nav className="bg-white dark:bg-slate-800 shadow-sm sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">ExamAI</div>
          <div className="flex gap-4 items-center">
            <button className="px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition">
              Settings
            </button>
            <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
              Logout
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="md:col-span-1 space-y-4">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
            <nav className="bg-white dark:bg-slate-800 rounded-lg shadow p-4 space-y-2">
              <Link href="/dashboard" className="block px-4 py-2 rounded-lg bg-blue-600 text-white">📊 Dashboard</Link>
              <Link href="/quiz" className="block px-4 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700">📝 Quiz</Link>
              <Link href="/history" className="block px-4 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700">📋 History</Link>
              <Link href="/profile" className="block px-4 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700">👤 Profile</Link>
            </nav>

            {/* Stats */}
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow p-6 space-y-4">
              <h3 className="font-bold">Today's Stats</h3>
              <div>
                <div className="text-2xl font-bold text-blue-600">3/5</div>
                <p className="text-sm text-slate-600 dark:text-slate-400">Questions remaining</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">78%</div>
                <p className="text-sm text-slate-600 dark:text-slate-400">Accuracy</p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-2">
            <motion.div
              className="bg-white dark:bg-slate-800 rounded-lg shadow p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-3xl font-bold mb-8">Generate Quiz</h1>

              <div className="space-y-6">
                <div>
                  <label className="block font-semibold mb-2">Select Exam</label>
                  <select
                    value={selectedExam}
                    onChange={(e) => setSelectedExam(e.target.value)}
                    className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg dark:bg-slate-700"
                  >
                    <option value="gmat">GMAT</option>
                    <option value="gre">GRE</option>
                    <option value="sat">SAT</option>
                    <option value="act">ACT</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold mb-2">Select Topic</label>
                  <input
                    type="text"
                    value={selectedTopic}
                    onChange={(e) => setSelectedTopic(e.target.value)}
                    placeholder="e.g., Quantitative Reasoning, Reading Comprehension"
                    className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg dark:bg-slate-700"
                  />
                </div>

                <button
                  onClick={handleGenerateQuiz}
                  disabled={loading}
                  className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-bold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Generating...' : 'Generate 5 Questions'}
                </button>
              </div>

              {/* Upgrade CTA */}
              <div className="mt-12 p-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white">
                <h3 className="font-bold text-lg mb-2">Unlock Unlimited Questions</h3>
                <p className="text-sm mb-4">Upgrade to Pro and get unlimited access to all questions</p>
                <Link href="/pricing" className="inline-block px-6 py-2 bg-white text-blue-600 rounded-lg font-bold hover:bg-slate-100 transition">
                  View Plans
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
