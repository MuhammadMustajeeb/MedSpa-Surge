import { Button } from "./ui/button";
import { ArrowRight, Play } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function NewHeroSection() {
  return (
    <section className="bg-gradient-to-br from-white via-purple-50/30 to-blue-50/30 py-20 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            {/* Pre-headline */}
            <div className="inline-flex items-center bg-[#6B4EFF]/10 text-[#6B4EFF] px-4 py-2 rounded-full border border-[#6B4EFF]/20">
              <span className="w-2 h-2 bg-[#6B4EFF] rounded-full mr-3 animate-pulse"></span>
              <span className="font-medium">14-Day Website Fix Guarantee</span>
            </div>
            
            {/* Main Headline */}
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              👉 "We Fix Broken Med Spa Websites in{" "}
              <span className="text-[#6B4EFF]">14 Days</span>{" "}
              – or You Don't Pay."
            </h1>
            
            {/* Subheadline */}
            <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed">
              Most Med Spas waste <strong className="text-red-600">40% of their ad spend</strong> on broken websites. 
              We rebuild funnels fast, guaranteed.
            </p>
            
            {/* Urgency Indicators */}
            <div className="flex flex-col sm:flex-row gap-6 text-lg">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-gray-700">Your ads are working...</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-gray-700">Your website isn't.</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                onClick={() => {
                  console.log("Primary CTA clicked - open lead capture");
                }}
                className="bg-[#6B4EFF] hover:bg-[#5a3eef] text-white px-8 py-6 text-xl font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                👉 Claim My Free Audit Video
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => {
                  document.getElementById('live-demo')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="border-2 border-[#6B4EFF] text-[#6B4EFF] hover:bg-[#6B4EFF] hover:text-white px-8 py-6 text-xl font-bold rounded-xl transition-all duration-300 group"
              >
                <Play className="w-5 h-5 mr-2" />
                See Live Demo
              </Button>
            </div>
            
            {/* Social Proof Numbers */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#6B4EFF]">82%</div>
                <div className="text-sm text-gray-600">Sites Too Slow</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#6B4EFF]">67%</div>
                <div className="text-sm text-gray-600">Poor Mobile UX</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#6B4EFF]">$47K</div>
                <div className="text-sm text-gray-600">Lost Revenue/Year</div>
              </div>
            </div>
          </div>
          
          {/* Visual */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white p-4">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop"
                alt="Modern Med Spa website on desktop and mobile"
                className="w-full h-auto rounded-xl"
              />
              
              {/* Floating improvement badges */}
              <div className="absolute top-8 -left-4 bg-green-500 text-white px-4 py-2 rounded-full font-semibold text-sm shadow-lg">
                ⚡ 3x Faster
              </div>
              <div className="absolute bottom-8 -right-4 bg-[#EFCB68] text-gray-900 px-4 py-2 rounded-full font-semibold text-sm shadow-lg">
                📱 Mobile First
              </div>
              <div className="absolute top-1/2 -left-6 bg-[#FF6F91] text-white px-4 py-2 rounded-full font-semibold text-sm shadow-lg">
                🎯 +40% Bookings
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#6B4EFF]/5 to-transparent pointer-events-none"></div>
    </section>
  );
}