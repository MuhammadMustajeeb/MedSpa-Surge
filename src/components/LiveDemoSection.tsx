import { Play, ExternalLink, Eye, Clock, CheckCircle } from "lucide-react";
import { Button } from "./ui/button";

export function LiveDemoSection() {
  return (
    <section id="live-demo" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            See the Difference for Yourself.
          </h2>
          
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Don't take our word for it. Here's exactly how we identify problems 
            and what the solution looks like.
          </p>
        </div>

        {/* Live Demo Options */}
        <div className="grid gap-8 lg:grid-cols-3 max-w-6xl mx-auto mb-16">
          {/* Anonymous Audit Example */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-blue-200 hover:border-blue-300 transition-all duration-300">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
              <Play className="w-8 h-8 text-blue-600" />
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Sample Audit Video
            </h3>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              Watch a real 5-minute audit of a Med Spa website (name blurred for privacy). 
              See exactly how we identify conversion leaks.
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-sm text-gray-700">Page speed analysis</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-sm text-gray-700">Mobile usability check</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-sm text-gray-700">Booking flow breakdown</span>
              </div>
            </div>
            
            <Button 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => {
                console.log("Sample audit video clicked");
              }}
            >
              <Play className="w-4 h-4 mr-2" />
              Watch Sample Audit
            </Button>
          </div>

          {/* Live Demo Site */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-[#6B4EFF]/20 hover:border-[#6B4EFF]/40 transition-all duration-300">
            <div className="w-16 h-16 bg-[#6B4EFF]/10 rounded-2xl flex items-center justify-center mb-6">
              <ExternalLink className="w-8 h-8 text-[#6B4EFF]" />
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Interactive Demo
            </h3>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              Click through a live demo of our Med Spa website template. 
              Experience the speed and booking flow yourself.
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-sm text-gray-700">Sub-1-second loading</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-sm text-gray-700">One-click booking</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-sm text-gray-700">Mobile-first design</span>
              </div>
            </div>
            
            <Button 
              className="w-full bg-[#6B4EFF] hover:bg-[#5a3eef] text-white"
              onClick={() => {
                console.log("Interactive demo clicked");
              }}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Try Interactive Demo
            </Button>
          </div>

          {/* Personal Audit Offer */}
          <div className="bg-gradient-to-br from-[#EFCB68] to-[#F59E0B] rounded-3xl p-8 shadow-xl border-2 border-[#EFCB68] text-gray-900">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
              <Eye className="w-8 h-8 text-gray-900" />
            </div>
            
            <h3 className="text-2xl font-bold mb-4">
              Your Free Personal Audit
            </h3>
            
            <p className="mb-6 leading-relaxed opacity-90">
              Want to see YOUR funnel's leaks? We'll create a personalized 
              5-minute video audit of your current website.
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-700" />
                <span className="text-sm opacity-90">Completely free</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-700" />
                <span className="text-sm opacity-90">Delivered in 48 hours</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-700" />
                <span className="text-sm opacity-90">No obligations</span>
              </div>
            </div>
            
            <Button 
              className="w-full bg-gray-900 hover:bg-gray-800 text-white"
              onClick={() => {
                console.log("Personal audit CTA clicked");
              }}
            >
              👉 Get My Free Audit
            </Button>
          </div>
        </div>

        {/* Before/After Comparison */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Real Performance Comparison
            </h3>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Here's what happens when we apply our process to a typical Med Spa website.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Before */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-red-600 font-bold text-lg">❌</span>
                </div>
                <h4 className="text-2xl font-bold text-gray-900">Typical Med Spa Site</h4>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 px-4 bg-red-50 rounded-lg border border-red-200">
                  <span className="text-gray-700">Page Load Speed</span>
                  <span className="font-bold text-red-600">8.2 seconds</span>
                </div>
                
                <div className="flex justify-between items-center py-3 px-4 bg-red-50 rounded-lg border border-red-200">
                  <span className="text-gray-700">Mobile Performance</span>
                  <span className="font-bold text-red-600">Poor</span>
                </div>
                
                <div className="flex justify-between items-center py-3 px-4 bg-red-50 rounded-lg border border-red-200">
                  <span className="text-gray-700">Booking Completion</span>
                  <span className="font-bold text-red-600">23%</span>
                </div>
                
                <div className="flex justify-between items-center py-3 px-4 bg-red-50 rounded-lg border border-red-200">
                  <span className="text-gray-700">Conversion Rate</span>
                  <span className="font-bold text-red-600">2.1%</span>
                </div>
              </div>
            </div>

            {/* After */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold text-lg">✅</span>
                </div>
                <h4 className="text-2xl font-bold text-gray-900">After Our Fix</h4>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 px-4 bg-green-50 rounded-lg border border-green-200">
                  <span className="text-gray-700">Page Load Speed</span>
                  <span className="font-bold text-green-600">0.9 seconds</span>
                </div>
                
                <div className="flex justify-between items-center py-3 px-4 bg-green-50 rounded-lg border border-green-200">
                  <span className="text-gray-700">Mobile Performance</span>
                  <span className="font-bold text-green-600">Excellent</span>
                </div>
                
                <div className="flex justify-between items-center py-3 px-4 bg-green-50 rounded-lg border border-green-200">
                  <span className="text-gray-700">Booking Completion</span>
                  <span className="font-bold text-green-600">78%</span>
                </div>
                
                <div className="flex justify-between items-center py-3 px-4 bg-green-50 rounded-lg border border-green-200">
                  <span className="text-gray-700">Conversion Rate</span>
                  <span className="font-bold text-green-600">4.8%</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom CTA */}
          <div className="text-center mt-12 pt-8 border-t border-gray-200">
            <p className="text-lg text-gray-700 mb-6">
              Ready to see what we can do for your Med Spa?
            </p>
            <Button 
              size="lg"
              onClick={() => {
                console.log("Demo section CTA clicked");
              }}
              className="bg-[#6B4EFF] hover:bg-[#5a3eef] text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              👉 Get My Free Performance Audit
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}