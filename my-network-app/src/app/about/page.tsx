"use client";

export default function AboutPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-8">
        {/* Page Title */}
        <h1 className="text-3xl font-bold text-gray-950 text-center mb-6">About Us</h1>

        {/* Intro Section */}
        <section className="text-gray-600 leading-relaxed mb-10">
          <p className="mb-4">
            At <span className="font-semibold">PasuaNet</span>, we are dedicated to
            providing fast, reliable, and affordable internet services to our
            community. Our mission is simple: keep you connected to what matters
            most — whether that’s work, learning, entertainment, or staying in
            touch with loved ones.
          </p>
          <p>
            We believe that internet access is not a luxury, but a necessity.
            That’s why we work hard to ensure coverage in even the most remote
            areas, so everyone can enjoy the benefits of the digital world.
          </p>
        </section>

        {/* Vision & Mission */}
        <section className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-blue-400 text-gray-700 border border-blue-200 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-3">Our Vision</h2>
            <p>
              To become the most trusted internet service provider in the region,
              recognized for quality, affordability, and excellent customer
              service.
            </p>
          </div>
          <div className="bg-blue-400 border text-gray-700 border-blue-200 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
            <p>
              To bridge the digital divide by delivering reliable, high-speed
              internet to every household and business in our coverage areas.
            </p>
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-400 mb-4">Our Core Values</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Customer First — we listen and adapt to your needs.</li>
            <li>Innovation — always improving our technology and service.</li>
            <li>Reliability — you can count on our connection.</li>
            <li>Community — connecting people and fostering growth.</li>
          </ul>
        </section>

        {/* Team Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-blue-400 text-center">Meet Our Team</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
            {[
              { name: "Hussein Mzenzi", role: "CEO & Founder" },
              { name: "Nicolaus Alex", role: "Technical Manager" },
              { name: "Rajabu Kaddimu", role: "Customer Support Lead" },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-gray-50 p-4 rounded-lg hover:shadow-lg"
              >
                <div className="w-20 h-20 mx-auto bg-gray-300 rounded-full mb-3"></div>
                <h3 className="font-semibold text-lg text-blue-400">{member.name}</h3>
                <p className="text-gray-600 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
