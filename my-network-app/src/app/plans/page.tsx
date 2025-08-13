export default function PlansPage() {
    const plans = [
      {
        id: 1,
        name: "Unlimited",
        speed: "Up to 100Mbps",
        price: "TZS 1000 / SIKU",
        features: [
          "Unlimited downloads",
          "Unlimited Streaming",
          "Desktop, Laptop, iOs and Android",
        ],
      },
      {
        id: 2,
        name: "Unlimited",
        speed: "Up to 100Mbps",
        price: "TZS 5000 / WIKI",
        features: [
            "Unlimited downloads",
            "Unlimited Streaming",
            "Desktop, Laptop, iOs and Android",
          ],
      },
      {
        id: 3,
        name: "Unlimited",
        speed: "Up to 100Mbps",
        price: "TZS 15000 / MWEZI",
        features: [
            "Unlimited downloads",
            "Unlimited Streaming",
            "Desktop, Laptop, iOs and Android",
          ],
      },
    ];
  
    return (
      <div className="bg-gray-50 max-h-screen py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl text-gray-950 font-bold text-center mb-12">
            Plans & Pricing
          </h1>
          <div className="grid grid-cols-1 text-gray-600 md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
              >
                <h2 className="text-xl font-semibold mb-2">{plan.name}</h2>
                <p className="text-gray-500 mb-2">{plan.speed}</p>
                <p className="text-blue-600 font-bold text-lg mb-4">{plan.price}</p>
                <ul className="mb-6 space-y-2">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="text-green-500">✔</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="/signup"
                  className="block text-center bg-blue-600 text-white py-2 rounded hover:bg-blue-500"
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  