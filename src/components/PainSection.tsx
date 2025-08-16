import { ImageWithFallback } from "./figma/ImageWithFallback";
import { X, Clock, TrendingDown, PhoneOff } from "lucide-react";

export function PainSection() {
  const painPoints = [
    {
      icon: <Clock className="w-8 h-8 text-[#FF6F91]" />,
      title: "Slow load times",
      description: "patients bounce before booking."
    },
    {
      icon: <TrendingDown className="w-8 h-8 text-[#FF6F91]" />,
      title: "Generic templates",
      description: "no trust, no conversion."
    },
    {
      icon: <PhoneOff className="w-8 h-8 text-[#FF6F91]" />,
      title: "Weak booking flow",
      description: "leads drop off, phones stay quiet."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Your Ads Are Wasting Money If Your Website Looks Like This…
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Most Med Spa websites are conversion killers. Here's what's costing you patients every day:
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-8">
            {painPoints.map((point, index) => (
              <div key={index} className="flex items-start gap-6 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex-shrink-0 w-16 h-16 bg-red-50 rounded-full flex items-center justify-center">
                  {point.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {point.title} →
                  </h3>
                  <p className="text-lg text-gray-600">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
            
            <div className="bg-red-50 border-l-4 border-[#FF6F91] p-6 rounded-r-2xl">
              <div className="flex items-center gap-3 mb-3">
                <X className="w-6 h-6 text-[#FF6F91]" />
                <h4 className="font-semibold text-gray-900">The Real Cost</h4>
              </div>
              <p className="text-gray-700">
                A slow, unprofessional website can cost you <strong>$50,000+ in lost revenue</strong> per year. 
                That's patients choosing your competitors instead of you.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
                alt="Poor website example with slow loading and bad design"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-900/60 to-transparent"></div>
              
              {/* Overlay indicators */}
              <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Loading...
              </div>
              <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                6.2s Load Time
              </div>
              <div className="absolute bottom-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                82% Bounce Rate
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}