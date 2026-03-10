'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface Question {
  id: string
  text: string
  options: string[]
  correct: number
}

export default function QuizPage() {
  const [questions, setQuestions] = useState<Question[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [answered, setAnswered] = useState<number[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Load quiz questions
    const loadQuiz = async () => {
      try {
        const response = await fetch('/api/quizzes/generate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ exam_id: 'gmat', topic_id: 'quantitative', count: 5 }),
        })
        if (response.ok) {
          setLoading(false)
        }
      } catch (error) {
        console.error('Failed to load quiz:', error)
      }
    }

    loadQuiz()
  }, [])

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading quiz...</div>
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-blue-900 p-6">
      <div className="max-w-2xl mx-auto">
        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            <span className="font-semibold">Question 1 of 5</span>
            <span className="text-blue-600 font-semibold">Score: 0/5</span>
          </div>
          <div className="w-full bg-slate-200 dark:bg-slate-700 h-2 rounded-full">
            <div className="bg-blue-600 h-2 rounded-full" style={{ width: '20%' }}></div>
          </div>
        </div>

        {/* Question Card */}
        <motion.div
          className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-2xl font-bold mb-6">
            What is the acceleration due to gravity on Earth's surface?
          </h2>

          <div className="space-y-3">
            {['9.8 m/s²', '9.81 m/s²', '8.9 m/s²', '10.2 m/s²'].map((option, i) => (
              <motion.button
                key={i}
                className="w-full p-4 text-left border-2 border-slate-300 dark:border-slate-600 rounded-lg hover:border-blue-600 transition dark:hover:border-blue-500"
                whileHover={{ scale: 1.02 }}
              >
                <span className="font-semibold">{String.fromCharCode(65 + i)}.</span> {option}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Buttons */}
        <div className="flex gap-4 justify-between">
          <button className="px-6 py-2 border-2 border-slate-300 dark:border-slate-600 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition font-semibold">
            ← Previous
          </button>
          <button className="px-8 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-bold">
            Submit Answer →
          </button>
        </div>
      </div>
    </div>
  )
}
