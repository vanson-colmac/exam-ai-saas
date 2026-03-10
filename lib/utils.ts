// Frontend utility functions

export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount)
}

export const formatDate = (date: Date | string) => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date))
}

export const calculateAccuracy = (correct: number, total: number) => {
  if (total === 0) return 0
  return Math.round((correct / total) * 100)
}

export const getStrengthColor = (score: number) => {
  if (score >= 80) return 'text-green-600'
  if (score >= 60) return 'text-yellow-600'
  return 'text-red-600'
}

export const getStrengthBg = (score: number) => {
  if (score >= 80) return 'bg-green-100 dark:bg-green-900'
  if (score >= 60) return 'bg-yellow-100 dark:bg-yellow-900'
  return 'bg-red-100 dark:bg-red-900'
}

export const splitNameFromEmail = (email: string) => {
  return email.split('@')[0]
}

export const truncateText = (text: string, length: number) => {
  if (text.length <= length) return text
  return text.slice(0, length) + '...'
}

export const generateGradientStyle = (variant: number) => {
  const gradients = [
    'from-blue-600 to-purple-600',
    'from-green-600 to-blue-600',
    'from-orange-600 to-red-600',
    'from-pink-600 to-rose-600',
  ]
  return gradients[variant % gradients.length]
}

export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))
