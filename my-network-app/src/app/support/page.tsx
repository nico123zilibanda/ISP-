"use client";
export default function Support() {
    const faqs = [
      {
        question: "How do I check my coverage?",
        answer:
          "Use our Coverage Checker page by entering your location to see if IvodaNet covers your area.",
      },
      {
        question: "How can I upgrade my plan?",
        answer:
          "Go to the Plans & Pricing page, select the desired plan, and follow the upgrade instructions.",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept mobile money, credit/debit cards, and bank transfers.",
      },
      {
        question: "How do I reset my password?",
        answer:
          "Use the 'Forgot Password' link on the login page to receive a reset email.",
      },
      {
        question: "Who do I contact for support?",
        answer:
          "You can reach our support team through the Contact Us page or call our 24/7 hotline.",
      },
    ];
  
    return (
      <main className="min-h-screen bg-gray-50 p-8 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-indigo-700 text-center">
          Support & How-To Guides
        </h1>
  
        <section className="space-y-6">
          {faqs.map(({ question, answer }, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
            >
              <h2 className="text-xl font-semibold mb-2">{question}</h2>
              <p className="text-gray-700">{answer}</p>
            </div>
          ))}
        </section>
      </main>
    );
  }
  