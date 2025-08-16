import { Zap, Smartphone, Target, Settings, Shield, Award, Users, Clock } from "lucide-react";

export function NewAuthoritySection() {
  const trustFactors = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Speed-First",
      description: "Every site built to load under 3 seconds.",
      detail: "Page speed directly impacts conversions. We optimize for Core Web Vitals and real-world performance."
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile-Optimized", 
      description: "70% of Med Spa traffic is mobile.",
      detail: "Mobile-first design ensures perfect experience across all devices and screen sizes."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Conversion-Focused",
      description: "Booking flow engineered to capture leads.",
      detail: "Every element positioned and optimized based on user behavior data and conversion psychology."
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Proven Stack",
      description: "Next.js, Tailwind, Vercel deployment.",
      detail: "Modern, reliable technology stack used by industry leaders for maximum performance and reliability."
    }
  ];

  const frameworks = [
    { name: "$100M Offers", application: "Risk reversal and irresistible guarantee structure" },
    { name: "Lean Startup", application: "MVP testing and rapid iteration methodology" },
    { name: "Influence (Cialdini)", application: "Persuasion psychology and trust-building" },
    { name: "UX Best Practices", application: "Conversion optimization and user behavior" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why Clinics Trust Our Process
          </h2>
          
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            We don't just build websites. We engineer conversion machines using proven methodologies 
            and cutting-edge technology.
          </p>
        </div>

        {/* Trust Factors Grid */}
        <div className="grid gap-8 lg:grid-cols-2 max-w-6xl mx-auto mb-20">
          {trustFactors.map((factor, index) => (
            <div key={index} className="bg-gray-50 rounded-3xl p-8 hover:bg-gray-100 transition-all duration-300 group">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-[#6B4EFF] rounded-2xl flex items-center justify-center text-white group-hover:scale-105 transition-transform duration-300">
                  {factor.icon}
                </div>
                
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {factor.title}
                    </h3>
                    <p className="text-lg font-semibold text-[#6B4EFF]">
                      {factor.description}
                    </p>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed">
                    {factor.detail}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Framework Authority */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-3xl p-8 lg:p-12 mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold mb-6">
              Built on Battle-Tested Frameworks
            </h3>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              "We apply principles from $100M Offers, Lean Startup, and top UX frameworks to ensure results."
            </p>
          </div>
          
          <div className="grid gap-6 lg:grid-cols-2">
            {frameworks.map((framework, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#EFCB68] rounded-xl flex items-center justify-center text-gray-900 font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#EFCB68] mb-2">
                      {framework.name}
                    </h4>
                    <p className="text-gray-300">
                      {framework.application}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats & Credentials */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
          <div className="text-center bg-[#6B4EFF]/5 rounded-2xl p-6 border border-[#6B4EFF]/20">
            <Shield className="w-12 h-12 text-[#6B4EFF] mx-auto mb-4" />
            <div className="text-3xl font-bold text-[#6B4EFF] mb-2">100%</div>
            <div className="text-gray-700 font-medium">Satisfaction Guarantee</div>
            <div className="text-sm text-gray-600 mt-2">Don't pay until satisfied</div>
          </div>
          
          <div className="text-center bg-green-50 rounded-2xl p-6 border border-green-200">
            <Clock className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-green-600 mb-2">14</div>
            <div className="text-gray-700 font-medium">Day Delivery</div>
            <div className="text-sm text-gray-600 mt-2">Guaranteed timeline</div>
          </div>
          
          <div className="text-center bg-[#EFCB68]/10 rounded-2xl p-6 border border-[#EFCB68]/30">
            <Award className="w-12 h-12 text-[#EFCB68] mx-auto mb-4" />
            <div className="text-3xl font-bold text-[#EFCB68] mb-2">3x</div>
            <div className="text-gray-700 font-medium">Faster Loading</div>
            <div className="text-sm text-gray-600 mt-2">Industry benchmark</div>
          </div>
          
          <div className="text-center bg-[#FF6F91]/10 rounded-2xl p-6 border border-[#FF6F91]/30">
            <Users className="w-12 h-12 text-[#FF6F91] mx-auto mb-4" />
            <div className="text-3xl font-bold text-[#FF6F91] mb-2">40%+</div>
            <div className="text-gray-700 font-medium">More Bookings</div>
            <div className="text-sm text-gray-600 mt-2">Typical improvement</div>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="bg-gray-50 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our Technology Stack
            </h3>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              We use the same technology trusted by companies like Netflix, Airbnb, and TikTok.
            </p>
          </div>
          
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white rounded-xl p-4 text-center shadow-sm border">
              <div className="text-lg font-semibold text-gray-900 mb-1">Next.js</div>
              <div className="text-sm text-gray-600">React Framework</div>
            </div>
            
            <div className="bg-white rounded-xl p-4 text-center shadow-sm border">
              <div className="text-lg font-semibold text-gray-900 mb-1">Tailwind CSS</div>
              <div className="text-sm text-gray-600">Styling System</div>
            </div>
            
            <div className="bg-white rounded-xl p-4 text-center shadow-sm border">
              <div className="text-lg font-semibold text-gray-900 mb-1">Vercel</div>
              <div className="text-sm text-gray-600">Global CDN</div>
            </div>
            
            <div className="bg-white rounded-xl p-4 text-center shadow-sm border">
              <div className="text-lg font-semibold text-gray-900 mb-1">Calendly API</div>
              <div className="text-sm text-gray-600">Booking System</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}