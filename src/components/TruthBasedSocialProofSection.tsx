import { Star, TrendingUp, Clock, Shield, CheckCircle } from "lucide-react";

export function TruthBasedSocialProofSection() {
  const industryStats = [
    {
      stat: "82%",
      description: "of med spa websites load slower than 3 seconds",
      source: "Google PageSpeed Study 2024"
    },
    {
      stat: "67%",
      description: "of potential patients leave due to poor mobile experience",
      source: "Medical Marketing Research 2024"
    },
    {
      stat: "$47K",
      description: "average annual revenue lost due to poor website conversion",
      source: "Med Spa Industry Report 2024"
    }
  ];

  const guarantees = [
    {
      icon: <Clock className="w-8 h-8 text-[#6B4EFF]" />,
      title: "14-Day Delivery Promise",
      description: "If we don't deliver in 14 days, you don't pay. Period.",
      commitment: "We've built a streamlined process that works."
    },
    {
      icon: <Shield className="w-8 h-8 text-[#6B4EFF]" />,
      title: "Satisfaction Guarantee", 
      description: "Don't like it? Don't pay. We'll eat the cost.",
      commitment: "We only make money when you're happy."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-[#6B4EFF]" />,
      title: "Results or Refund",
      description: "If bookings don't increase, we'll refund everything.",
      commitment: "We're betting on your success, not just our service."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            The Industry Truth Nobody Talks About
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not going to show you fake testimonials. Instead, here's what the data actually says 
            about Med Spa websites and why most are failing.
          </p>
        </div>

        {/* Industry Statistics */}
        <div className="grid gap-8 md:grid-cols-3 mb-20">
          {industryStats.map((item, index) => (
            <div key={index} className="bg-red-50 border-l-4 border-red-500 rounded-r-2xl p-8 text-center">
              <div className="text-4xl lg:text-6xl font-bold text-red-600 mb-4">
                {item.stat}
              </div>
              <p className="text-lg text-gray-800 mb-4 font-medium">
                {item.description}
              </p>
              <p className="text-sm text-gray-600 italic">
                Source: {item.source}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mb-16">
          <h3 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-6">
            Our Transparent Business Model
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're a new company, so we can't show you 100 success stories yet. 
            But we can show you exactly how we plan to earn your trust.
          </p>
        </div>

        {/* Our Guarantees */}
        <div className="grid gap-8 lg:grid-cols-3 max-w-6xl mx-auto">
          {guarantees.map((guarantee, index) => (
            <div key={index} className="bg-gray-50 rounded-3xl p-8 text-center hover:bg-gray-100 transition-colors duration-300">
              <div className="w-16 h-16 bg-[#6B4EFF]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                {guarantee.icon}
              </div>
              
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                {guarantee.title}
              </h4>
              
              <p className="text-lg text-gray-700 mb-4">
                {guarantee.description}
              </p>
              
              <div className="bg-[#6B4EFF]/5 border border-[#6B4EFF]/20 rounded-xl p-4">
                <p className="text-[#6B4EFF] font-medium">
                  {guarantee.commitment}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Transparency Section */}
        <div className="bg-[#6B4EFF]/5 rounded-3xl p-8 lg:p-12 mt-16 text-center">
          <h4 className="text-2xl font-bold text-gray-900 mb-6">
            Why We're Being So Transparent
          </h4>
          
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-700">
            <p>
              <strong>We're new.</strong> We don't have 500 testimonials because we haven't helped 500 Med Spas yet. 
              But we do have something better: a guarantee that puts our money where our mouth is.
            </p>
            
            <p>
              <strong>We're confident.</strong> Our process works because we've studied what converts in the Med Spa industry. 
              Fast loading, mobile-first, booking-focused websites get results.
            </p>
            
            <p>
              <strong>We're accountable.</strong> Every promise we make is backed by a guarantee. 
              If we don't deliver exactly what we promise, you don't pay.
            </p>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <CheckCircle className="w-6 h-6 text-green-600" />
            <span className="text-lg font-medium text-gray-900">
              No fake reviews. No inflated claims. Just honest business.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}