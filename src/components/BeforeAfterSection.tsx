import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight, X, CheckCircle } from "lucide-react";

export function BeforeAfterSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            See the Difference <span className="text-[#6B4EFF]">14 Days</span> Can Make
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real transformations from Med Spas just like yours. Same industry, same challenges, 
            completely different results.
          </p>
        </div>

        <div className="space-y-16">
          {/* First Before/After */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                    <X className="w-6 h-6 text-red-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Before</h3>
                </div>
                
                <div className="relative rounded-2xl overflow-hidden shadow-lg">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=350&fit=crop"
                    alt="Old outdated Med Spa website"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-red-900/20"></div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-red-600">
                    <X className="w-5 h-5" />
                    <span>6.2 second load time</span>
                  </div>
                  <div className="flex items-center gap-3 text-red-600">
                    <X className="w-5 h-5" />
                    <span>82% bounce rate</span>
                  </div>
                  <div className="flex items-center gap-3 text-red-600">
                    <X className="w-5 h-5" />
                    <span>1.2% conversion rate</span>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center lg:justify-start">
                <div className="w-16 h-16 bg-[#6B4EFF] rounded-full flex items-center justify-center">
                  <ArrowRight className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* After */}
          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-8 lg:p-12 shadow-xl">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div className="space-y-6 order-2 lg:order-1">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">After</h3>
                </div>
                
                <div className="relative rounded-2xl overflow-hidden shadow-lg">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&h=350&fit=crop"
                    alt="Modern beautiful Med Spa website"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-green-900/10"></div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-green-600">
                    <CheckCircle className="w-5 h-5" />
                    <span>0.8 second load time</span>
                  </div>
                  <div className="flex items-center gap-3 text-green-600">
                    <CheckCircle className="w-5 h-5" />
                    <span>15% bounce rate</span>
                  </div>
                  <div className="flex items-center gap-3 text-green-600">
                    <CheckCircle className="w-5 h-5" />
                    <span>6.4% conversion rate</span>
                  </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2 text-center lg:text-left">
                <div className="inline-block bg-[#EFCB68] text-gray-900 px-6 py-3 rounded-full font-semibold text-lg mb-6">
                  +430% More Bookings!
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  "We doubled our bookings in just 2 weeks."
                </h4>
                <p className="text-gray-700 mb-6">
                  The new website not only looks amazing, but our patients actually 
                  compliment us on it. More importantly, our phone hasn't stopped ringing.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                  <div>
                    <div className="font-semibold text-gray-900">Dr. Sarah Chen</div>
                    <div className="text-gray-600">Elite Medical Spa</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}