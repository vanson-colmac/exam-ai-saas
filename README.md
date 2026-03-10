# Exam AI - Complete SaaS Platform

A modern, production-ready SaaS platform for AI-powered exam question generation.

## Quick Start

### Frontend
```bash
cd exam-ai-saas
npm install
npm run dev
# Open http://localhost:3000
```

### Backend
```bash
cd exam-ai-backend
npm install
npm run dev
# Runs on http://localhost:5000
```

## Project Structure

### Frontend (Next.js + React + TypeScript)
- `app/page.tsx` - Landing page
- `app/auth/` - Authentication pages (signup, login)
- `app/dashboard/` - User dashboard
- `app/quiz/` - Quiz interface
- `app/pricing/` - Pricing page
- `app/admin/` - Admin dashboard
- `app/api/` - API routes (proxy to backend)

### Backend (Express + TypeScript + PostgreSQL)
- `src/routes/` - API routes (auth, quiz, payment, user, admin)
- `src/middleware/` - Authentication & logging
- `prisma/schema.prisma` - Database schema

## Features

✅ Landing page with pricing
✅ User authentication (signup/login)
✅ Quiz generation from AI API
✅ User dashboard with stats
✅ Payment integration (Stripe ready)
✅ Admin panel with metrics
✅ Dark mode support
✅ Mobile responsive
✅ TypeScript throughout
✅ Production ready

## Environment Variables

Frontend (`exam-ai-saas/.env.local`):
```
NEXT_PUBLIC_API_URL=http://localhost:5000
NEXT_PUBLIC_STRIPE_KEY=pk_test_...
```

Backend (`exam-ai-backend/.env`):
```
DATABASE_URL=postgresql://...
JWT_SECRET=your-secret-key
STRIPE_SECRET_KEY=sk_test_...
```

## Deployment

### Frontend (Vercel)
```bash
vercel deploy
```

### Backend (Railway)
```bash
railway deploy
```

## API Endpoints

### Auth
- `POST /api/auth/signup` - Create account
- `POST /api/auth/login` - Login user
- `POST /api/auth/verify-email` - Verify email

### User
- `GET /api/users/me` - Current user
- `PUT /api/users/me` - Update profile

### Quiz
- `POST /api/quizzes/generate` - Generate questions
- `GET /api/quizzes/list` - Past quizzes
- `POST /api/quizzes/:id/submit-answer` - Submit answer

### Payment
- `POST /api/payments/checkout-session` - Create checkout
- `GET /api/payments/subscription` - Get subscription

### Admin
- `GET /api/admin/users` - User stats
- `GET /api/admin/stats` - System stats
- `GET /api/admin/revenue` - Revenue metrics

## Tech Stack

**Frontend:**
- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- next-auth

**Backend:**
- Express.js
- Node.js
- TypeScript
- PostgreSQL (Prisma ORM)
- Redis (caching)
- JWT
- Stripe

**DevOps:**
- Docker
- Vercel (frontend)
- Railway (backend)
- GitHub Actions

## License

MIT

## Author

Owner - 2026
