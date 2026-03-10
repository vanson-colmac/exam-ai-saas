// Zustand store for auth state

import { create } from 'zustand'

interface AuthState {
  token: string | null
  user: any | null
  isLoading: boolean
  error: string | null
  setToken: (token: string) => void
  setUser: (user: any) => void
  logout: () => void
  setError: (error: string) => void
  clearError: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  token: typeof window !== 'undefined' ? localStorage.getItem('token') : null,
  user: null,
  isLoading: false,
  error: null,

  setToken: (token) => {
    localStorage.setItem('token', token)
    set({ token })
  },

  setUser: (user) => {
    set({ user })
  },

  logout: () => {
    localStorage.removeItem('token')
    set({ token: null, user: null })
  },

  setError: (error) => {
    set({ error })
  },

  clearError: () => {
    set({ error: null })
  },
}))

// Quiz state
interface QuizState {
  currentQuizId: string | null
  questions: any[]
  currentQuestionIndex: number
  score: number
  setCurrentQuiz: (id: string) => void
  setQuestions: (questions: any[]) => void
  nextQuestion: () => void
  prevQuestion: () => void
  addScore: (points: number) => void
  resetQuiz: () => void
}

export const useQuizStore = create<QuizState>((set) => ({
  currentQuizId: null,
  questions: [],
  currentQuestionIndex: 0,
  score: 0,

  setCurrentQuiz: (id) => {
    set({ currentQuizId: id, currentQuestionIndex: 0, score: 0 })
  },

  setQuestions: (questions) => {
    set({ questions })
  },

  nextQuestion: () => {
    set((state) => ({
      currentQuestionIndex: Math.min(state.currentQuestionIndex + 1, state.questions.length - 1),
    }))
  },

  prevQuestion: () => {
    set((state) => ({
      currentQuestionIndex: Math.max(state.currentQuestionIndex - 1, 0),
    }))
  },

  addScore: (points) => {
    set((state) => ({
      score: state.score + points,
    }))
  },

  resetQuiz: () => {
    set({
      currentQuizId: null,
      questions: [],
      currentQuestionIndex: 0,
      score: 0,
    })
  },
}))
