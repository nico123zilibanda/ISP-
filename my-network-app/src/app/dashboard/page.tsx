"use client";
import { useState } from "react";

export default function Dashboard() {
  // In a real app, you'd fetch user data or get it from auth context
  const [userEmail] = useState("user@example.com");

  const handleLogout = () => {
    alert("Logging out...");
    // Add logout logic here, e.g. clearing tokens and redirecting
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-indigo-700 text-white flex flex-col">
        <div className="p-6 text-2xl font-bold border-b border-indigo-800">
          IvodaNet
        </div>

        <nav className="flex-grow p-6 space-y-4">
          <a
            href="#"
            className="block px-4 py-2 rounded hover:bg-indigo-600 transition"
          >
            Dashboard
          </a>
          <a
            href="#"
            className="block px-4 py-2 rounded hover:bg-indigo-600 transition"
          >
            Plans & Pricing
          </a>
          <a
            href="#"
            className="block px-4 py-2 rounded hover:bg-indigo-600 transition"
          >
            Coverage Checker
          </a>
          <a
            href="#"
            className="block px-4 py-2 rounded hover:bg-indigo-600 transition"
          >
            Support / How-To
          </a>
          <a
            href="#"
            className="block px-4 py-2 rounded hover:bg-indigo-600 transition"
          >
            Contact Us
          </a>
          <a
            href="#"
            className="block px-4 py-2 rounded hover:bg-indigo-600 transition"
          >
            About Us
          </a>
        </nav>

        <button
          onClick={handleLogout}
          className="m-6 px-4 py-2 bg-red-600 rounded hover:bg-red-700 transition"
        >
          Logout
        </button>
      </aside>

      {/* Main content */}
      <main className="flex-grow p-10">
        <h1 className="text-4xl font-bold mb-6">Welcome, {userEmail}!</h1>

        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Your Account Summary</h2>
          <ul className="space-y-3 text-gray-700">
            <li>
              <strong>Plan:</strong> Premium Unlimited
            </li>
            <li>
              <strong>Coverage Area:</strong> Citywide
            </li>
            <li>
              <strong>Monthly Usage:</strong> 150 GB
            </li>
            <li>
              <strong>Next Billing Date:</strong> 2025-09-01
            </li>
          </ul>
        </section>

        <section className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Recent Activities</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Checked coverage in New City - Sep 10, 2025</li>
            <li>Upgraded plan from Basic to Premium - Aug 20, 2025</li>
            <li>Contacted support about billing - Jul 15, 2025</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
