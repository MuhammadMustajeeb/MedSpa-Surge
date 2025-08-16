import { ImageWithFallback } from "./figma/ImageWithFallback";
import { X, CheckCircle, AlertTriangle, Smartphone, Zap, Calendar } from "lucide-react";

export function CompetitorAnalysisSection() {
  const commonProblems = [
    {
      icon: <Smartphone className="w-6 h-6" />,
      problem: "Not mobile-optimized",
      impact: "67% of patients browse on mobile",
      ourSolution: "Mobile-first responsive design"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      problem: "Slow loading speeds",
      impact: "Every second costs you 11% conversions",
      ourSolution: "Sub-1-second load times guaranteed"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      problem: "Complicated booking process",
      impact: "80% abandon complex forms",
      ourSolution: "One-click booking integration"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            What's Wrong With Most Med Spa Websites?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We analyzed 100+ Med Spa websites. Here's what we found (and how we fix it).
          </p>
        </div>

        {/* Industry Analysis */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl mb-16">
          <div className="grid gap-8 lg:grid-cols-2 items-center mb-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Typical Med Spa Website Problems
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Generic Template Look</h4>
                    <p className="text-gray-600">Looks like every other med spa. No differentiation, no trust.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Poor Mobile Experience</h4>
                    <p className="text-gray-600">Tiny text, hard to navigate, impossible to book on phone.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Broken Booking Flow</h4>
                    <p className="text-gray-600">Multiple steps, confusing forms, high abandonment rates.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=350&fit=crop"
                  alt="Example of a poorly designed website"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-red-900/40"></div>
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  ❌ Typical Problem
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Problem vs Solution Grid */}
        <div className="space-y-8">
          {commonProblems.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="grid gap-8 lg:grid-cols-3 items-center">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                      {item.icon}
                    </div>
                    <h4 className="text-xl font-bold text-gray-900">The Problem</h4>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-lg font-semibold text-red-600">
                      {item.problem}
                    </p>
                    <p className="text-gray-600">
                      Impact: {item.impact}
                    </p>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <div className="w-16 h-16 bg-[#6B4EFF] rounded-full flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      {item.icon}
                    </div>
                    <h4 className="text-xl font-bold text-gray-900">Our Solution</h4>
                  </div>
                  
                  <p className="text-lg font-semibold text-green-600">
                    {item.ourSolution}
                  </p>
                  <p className="text-gray-600">
                    Built specifically for Med Spa patient behavior and conversion optimization.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Market Research Section */}
        <div className="bg-[#6B4EFF] text-white rounded-3xl p-8 lg:p-12 mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Our Research-Based Approach
            </h3>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              We studied what actually works in the Med Spa industry before building our process.
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#EFCB68] mb-2">100+</div>
              <div className="text-lg">Websites Analyzed</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-[#EFCB68] mb-2">15</div>
              <div className="text-lg">Conversion Principles</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-[#EFCB68] mb-2">3.2x</div>
              <div className="text-lg">Average Improvement</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-[#EFCB68] mb-2">0.8s</div>
              <div className="text-lg">Target Load Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}