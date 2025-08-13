"use client";

import { useState } from "react";

export default function DashboardPage() {
  // Mock user data
  const [user] = useState({
    name: "Nicolaus Alex",
    email: "nicolausa@gmail.com",
    plan: "Unlimited Home Plan",
    balance: 15000, // TZS
    usage: "45GB / 100GB",
    nextBillingDate: "2025-09-01",
  });

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Greeting */}
        <h1 className="text-3xl font-bold mb-6">
          Welcome back, <span className="text-blue-600">{user.name}</span> 👋
        </h1>

        {/* Overview Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-gray-500 text-sm mb-2">Current Plan</h2>
            <p className="text-lg font-semibold">{user.plan}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-gray-500 text-sm mb-2">Account Balance</h2>
            <p className="text-lg font-semibold">{user.balance.toLocaleString()} TZS</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-gray-500 text-sm mb-2">Next Billing Date</h2>
            <p className="text-lg font-semibold">{user.nextBillingDate}</p>
          </div>
        </div>

        {/* Usage Section */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">Data Usage</h2>
          <p className="text-gray-600 mb-2">Usage: {user.usage}</p>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div
              className="bg-blue-600 h-4 rounded-full"
              style={{ width: "45%" }}
            ></div>
          </div>
        </div>

        {/* Actions */}
        <div className="grid md:grid-cols-3 gap-6">
          <button className="bg-blue-600 text-white p-4 rounded-lg font-semibold hover:bg-blue-500 transition">
            Upgrade Plan
          </button>
          <button className="bg-green-600 text-white p-4 rounded-lg font-semibold hover:bg-green-500 transition">
            Recharge Account
          </button>
          <button className="bg-red-600 text-white p-4 rounded-lg font-semibold hover:bg-red-500 transition">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
}
