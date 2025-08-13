"use client";

import { useState } from "react";

export default function AdminDashboard() {
  // Mock data
  const [stats] = useState([
    { title: "Total Users", value: 1250, color: "bg-blue-600" },
    { title: "Active Plans", value: 980, color: "bg-green-600" },
    { title: "Pending Support Tickets", value: 14, color: "bg-yellow-500" },
  ]);

  const [recentUsers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", plan: "Unlimited Home" },
    { id: 2, name: "Sarah Smith", email: "sarah@example.com", plan: "Business Plan" },
    { id: 3, name: "Michael Brown", email: "michael@example.com", plan: "Basic Home" },
  ]);

  const [recentPayments] = useState([
    { id: 1, name: "John Doe", amount: "15,000 TZS", date: "2025-08-12" },
    { id: 2, name: "Sarah Smith", amount: "30,000 TZS", date: "2025-08-11" },
    { id: 3, name: "Michael Brown", amount: "20,000 TZS", date: "2025-08-10" },
  ]);

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`${stat.color} text-white p-6 rounded-lg shadow-lg`}
          >
            <h2 className="text-lg font-semibold">{stat.title}</h2>
            <p className="text-2xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Recent Users Table */}
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="text-xl font-bold mb-4">Recent Users</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Plan</th>
            </tr>
          </thead>
          <tbody>
            {recentUsers.map((user) => (
              <tr key={user.id} className="border-b hover:bg-gray-50">
                <td className="p-3">{user.name}</td>
                <td className="p-3">{user.email}</td>
                <td className="p-3">{user.plan}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Recent Payments Table */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold mb-4">Recent Payments</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Amount</th>
              <th className="p-3 text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            {recentPayments.map((payment) => (
              <tr key={payment.id} className="border-b hover:bg-gray-50">
                <td className="p-3">{payment.name}</td>
                <td className="p-3">{payment.amount}</td>
                <td className="p-3">{payment.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
