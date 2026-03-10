// API client for frontend

import axios from 'axios'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Add token to requests
apiClient.interceptors.request.use((config) => {
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// Handle errors
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Redirect to login
      if (typeof window !== 'undefined') {
        window.location.href = '/auth/login'
      }
    }
    return Promise.reject(error)
  }
)

export const auth = {
  signup: (email: string, password: string, name: string) =>
    apiClient.post('/api/auth/signup', { email, password, name }),
  login: (email: string, password: string) =>
    apiClient.post('/api/auth/login', { email, password }),
  verify: (code: string) =>
    apiClient.post('/api/auth/verify-email', { code }),
  forgotPassword: (email: string) =>
    apiClient.post('/api/auth/forgot-password', { email }),
}

export const quizzes = {
  generate: (exam_id: string, topic_id: string, count: number) =>
    apiClient.post('/api/quizzes/generate', { exam_id, topic_id, count }),
  list: () =>
    apiClient.get('/api/quizzes/list'),
  getDetails: (id: string) =>
    apiClient.get(`/api/quizzes/${id}`),
  submitAnswer: (id: string, answer: number) =>
    apiClient.post(`/api/quizzes/${id}/submit-answer`, { answer }),
  complete: (id: string) =>
    apiClient.post(`/api/quizzes/${id}/complete`),
}

export const payments = {
  getSubscription: () =>
    apiClient.get('/api/payments/subscription'),
  createCheckout: (plan: string) =>
    apiClient.post('/api/payments/checkout-session', { plan }),
  updatePlan: (new_tier: string) =>
    apiClient.put('/api/payments/subscription', { new_tier }),
  cancel: () =>
    apiClient.delete('/api/payments/subscription'),
}

export const admin = {
  getStats: () =>
    apiClient.get('/api/admin/stats'),
  getUsers: () =>
    apiClient.get('/api/admin/users'),
  getRevenue: () =>
    apiClient.get('/api/admin/revenue'),
}

export default apiClient
