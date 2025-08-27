"use client";

import { AlertTriangle, TrendingDown, PhoneOff } from "lucide-react";

export function NewPainSection({ onPrimaryCTA }: { onPrimaryCTA: () => void }) {
  const painPoints = [
    {
      icon: <TrendingDown className="w-8 h-8 text-red-600" />,
      title: "Patients click → then leave",
      description: "(slow, outdated design)",
      impact:
        "Losing 60% of potential patients before they even see your services",
    },
    {
      icon: <PhoneOff className="w-8 h-8 text-red-600" />,
      title: "No simple booking flow",
      description: "→ front desk gets fewer calls",
      impact: "Complex forms and broken booking systems cost you daily",
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-red-600" />,
      title: "Clinics spend $3K–$20K/mo on ads",
      description: "→ but lose 50% of leads",
      impact: "Your marketing budget is working against a broken funnel",
    },
  ];

  return (
    <section className="py-20 bg-red-50/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            "Your Ads Are Working…{" "}
            <span className="text-red-600">Your Website Isn't.</span>"
          </h2>

          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Every day you wait, you're hemorrhaging money. Here's exactly where
            your revenue is leaking:
          </p>
        </div>

        {/* Ad Spend Bucket Leak Visual */}
        <div className="mb-16 flex justify-center">
          <div className="relative">
            <div className="w-64 h-48 bg-gradient-to-b from-blue-500 to-blue-600 rounded-t-3xl relative overflow-hidden">
              {/* Water/ad spend */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-green-400 to-green-500 animate-pulse">
                <div className="text-center pt-4 text-white font-bold text-lg">
                  Your Ad Spend
                </div>
              </div>

              {/* Leak holes */}
              <div className="absolute bottom-16 left-4 w-4 h-6 bg-red-500 rounded-full"></div>
              <div className="absolute bottom-12 right-6 w-6 h-8 bg-red-500 rounded-full"></div>
              <div className="absolute bottom-8 left-1/2 w-5 h-7 bg-red-500 rounded-full"></div>
            </div>

            {/* Leak streams */}
            <div className="absolute bottom-16 left-6 w-1 h-20 bg-red-400 opacity-60"></div>
            <div className="absolute bottom-12 right-8 w-2 h-24 bg-red-400 opacity-60"></div>
            <div className="absolute bottom-8 left-1/2 w-1.5 h-28 bg-red-400 opacity-60"></div>

            {/* Label */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              40-60% Revenue Loss
            </div>
          </div>
        </div>

        {/* Pain Points Grid */}
        <div className="grid gap-8 lg:grid-cols-3 max-w-6xl mx-auto">
          {painPoints.map((pain, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg border-l-4 border-red-500 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  {pain.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {pain.title}
                  </h3>
                  <p className="text-lg text-red-600 font-semibold">
                    {pain.description}
                  </p>
                </div>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                <p className="text-gray-700 font-medium">
                  <strong>Reality Check:</strong> {pain.impact}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-3xl p-8 shadow-xl max-w-4xl mx-auto border-2 border-red-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              How Much Money Are You Losing Right Now?
            </h3>

            <div className="grid sm:grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">$5K</div>
                <div className="text-sm text-gray-600">
                  Lost per month with slow site
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">$12K</div>
                <div className="text-sm text-gray-600">
                  Lost per month with broken booking
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">$47K</div>
                <div className="text-sm text-gray-600">
                  Average annual revenue loss
                </div>
              </div>
            </div>

            <p className="text-lg text-gray-700 mb-6">
              Every day you wait is another day of lost revenue. Let's fix this.
            </p>

            <button
              onClick={onPrimaryCTA}
              className="bg-[#6B4EFF] hover:bg-[#5a3eef] text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              👉 Stop The Bleeding - Get Free Audit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
