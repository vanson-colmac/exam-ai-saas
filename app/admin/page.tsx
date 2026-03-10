'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function AdminPage() {
  const [stats, setStats] = useState({
    totalUsers: 1234,
    activeUsers: 567,
    paidUsers: 234,
    totalRevenue: 12340,
    monthlyRevenue: 3000,
  })

  useEffect(() => {
    // Fetch admin stats
    const loadStats = async () => {
      try {
        const response = await fetch('/api/admin/stats')
        if (response.ok) {
          const data = await response.json()
          setStats(data)
        }
      } catch (error) {
        console.error('Failed to load stats:', error)
      }
    }

    loadStats()
  }, [])

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Navbar */}
      <nav className="bg-white dark:bg-slate-800 shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">ExamAI Admin</div>
          <div>
            <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
              Logout
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Navigation */}
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow p-4 mb-8 flex gap-4">
          <button className="px-4 py-2 rounded-lg bg-blue-600 text-white">Dashboard</button>
          <button className="px-4 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700">Users</button>
          <button className="px-4 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700">Revenue</button>
          <button className="px-4 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700">Settings</button>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-5 gap-6 mb-8">
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow p-6">
            <h3 className="text-slate-600 dark:text-slate-400 text-sm font-semibold mb-2">Total Users</h3>
            <div className="text-3xl font-bold">{stats.totalUsers.toLocaleString()}</div>
            <p className="text-xs text-green-600 mt-1">+12% this month</p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-lg shadow p-6">
            <h3 className="text-slate-600 dark:text-slate-400 text-sm font-semibold mb-2">Active Users</h3>
            <div className="text-3xl font-bold">{stats.activeUsers.toLocaleString()}</div>
            <p className="text-xs text-green-600 mt-1">+8% this month</p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-lg shadow p-6">
            <h3 className="text-slate-600 dark:text-slate-400 text-sm font-semibold mb-2">Paid Users</h3>
            <div className="text-3xl font-bold">{stats.paidUsers.toLocaleString()}</div>
            <p className="text-xs text-green-600 mt-1">+25% this month</p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-lg shadow p-6">
            <h3 className="text-slate-600 dark:text-slate-400 text-sm font-semibold mb-2">Monthly Revenue</h3>
            <div className="text-3xl font-bold">${stats.monthlyRevenue.toLocaleString()}</div>
            <p className="text-xs text-green-600 mt-1">+18% this month</p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-lg shadow p-6">
            <h3 className="text-slate-600 dark:text-slate-400 text-sm font-semibold mb-2">Total Revenue</h3>
            <div className="text-3xl font-bold">${stats.totalRevenue.toLocaleString()}</div>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">All time</p>
          </div>
        </div>

        {/* Recent Users */}
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow overflow-hidden">
          <div className="p-6 border-b border-slate-200 dark:border-slate-700">
            <h3 className="text-xl font-bold">Recent Users</h3>
          </div>
          <table className="w-full">
            <thead className="bg-slate-50 dark:bg-slate-700">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold">Name</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Email</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Plan</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Joined</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5].map((i) => (
                <tr key={i} className="border-b border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700">
                  <td className="px-6 py-4">John Doe</td>
                  <td className="px-6 py-4">john@example.com</td>
                  <td className="px-6 py-4"><span className="px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded text-xs font-semibold">Pro</span></td>
                  <td className="px-6 py-4">2 days ago</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
