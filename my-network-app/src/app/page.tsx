import Image from "next/image";
import NavBar from "./ui/navbar";
import About from "./about/page";
export default function Home() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto text-center px-4">
          <h1 className="text-4xl font-bold mb-4">Fast & Reliable Internet</h1>
          <p className="text-lg mb-6">
            Stay connected wherever you are with IvodaNet's blazing fast Wi-Fi.
          </p>
          <div className="space-x-4">
            <a
              href="/plans"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100"
            >
              View Plans
            </a>
            <a
              href="/login"
              className="bg-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-blue-400"
            >
              Login
            </a>
          </div>
        </div>
      </section>

      {/* Plans Preview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center text-indigo-700">Internet Packages Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-blue-400">
            {[
              {id: 1, name: "Unlimited", speed: "100 Mbps", price: "TZS 1000 / SIKU" },
              {id: 2, name: "Unlimited", speed: "100 Mbps", price: "TZS 5000 / WIKI" },
              {id: 3, name: "Unlimited", speed: "100 Mbps", price: "TZS 15000/ MWEZI" },
            ].map((plan) => (
              <div
                key={plan.id}
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-2">{plan.speed}</p>
                <p className="text-blue-600 font-bold mb-4">{plan.price}</p>
                <a
                  href="/plans"
                  className="block text-center bg-blue-600 text-white py-2 rounded hover:bg-blue-500"
                >
                  Choose Plan
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 text-indigo-700">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "Choose a Plan", icon: "📦" },
              { step: "Sign Up", icon: "📝" },
              { step: "Get Connected", icon: "📶" },
              { step: "Enjoy", icon: "😊" },
            ].map((item, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <div className="text-4xl mb-4">{item.icon}</div>
                <p className="font-medium">{item.step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <About />
    </div>
  );
}

