"use client"
import { useState } from "react";

type CoverageResult = 
  | null
  | { status: "covered" | "not-covered" | "error"; message: string };

export default function CoverageChecker() {
  const [location, setLocation] = useState("");
  const [result, setResult] = useState<CoverageResult>(null);
  const [loading, setLoading] = useState(false);

  const checkCoverage = () => {
    if (!location.trim()) {
      setResult({ status: "error", message: "Please enter a location." });
      return;
    }

    setLoading(true);
    setResult(null);

    setTimeout(() => {
      setLoading(false);
      if (location.toLowerCase().includes("city")) {
        setResult({ status: "covered", message: `Great news! PasuaNet covers ${location}.` });
      } else {
        setResult({ status: "not-covered", message: `Sorry, we do not have coverage in ${location} yet.` });
      }
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-start p-6 pt-20">
      <h1 className="text-3xl font-bold mb-6 text-indigo-700">Coverage Checker</h1>

      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <label htmlFor="location" className="block text-gray-700 mb-2 font-medium">
          Enter your location
        </label>
        <input
          id="location"
          type="text"
          placeholder="City, town or address"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <button
          onClick={checkCoverage}
          className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
          disabled={loading}
        >
          {loading ? "Checking..." : "Check Coverage"}
        </button>

        {result && (
          <p
            className={`mt-6 text-center text-lg ${
              result.status === "covered"
                ? "text-green-600"
                : result.status === "not-covered"
                ? "text-red-600"
                : "text-yellow-600"
            }`}
          >
            {result.message}
          </p>
        )}
      </div>
    </main>
  );
}

