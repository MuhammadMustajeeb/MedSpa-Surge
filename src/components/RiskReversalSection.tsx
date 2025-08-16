import { Button } from "./ui/button";
import { Shield, CheckCircle, Clock, DollarSign } from "lucide-react";

export function RiskReversalSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#6B4EFF] to-[#8B5CF6] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-12">
            <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <Shield className="w-12 h-12 text-[#EFCB68]" />
            </div>
            
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Your Success Is <span className="text-[#EFCB68]">Our Risk</span>
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              If you're not satisfied after 14 days, you don't pay a dime. 
              That's how confident we are in our ability to transform your Med Spa's online presence.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <DollarSign className="w-12 h-12 text-[#EFCB68] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No Risk</h3>
              <p className="opacity-90">You don't pay until you're 100% satisfied with your new website.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <Clock className="w-12 h-12 text-[#EFCB68] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">14-Day Guarantee</h3>
              <p className="opacity-90">We deliver on time, every time. Guaranteed completion in 14 days.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <CheckCircle className="w-12 h-12 text-[#EFCB68] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Results Guaranteed</h3>
              <p className="opacity-90">If your new site doesn't increase bookings, we'll fix it for free.</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold mb-6">
              Here's What You Get With Our Iron-Clad Guarantee:
            </h3>
            
            <div className="grid gap-4 md:grid-cols-2 text-left mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#EFCB68] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Complete Website Redesign</h4>
                  <p className="opacity-90 text-sm">Modern, professional, mobile-optimized design</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#EFCB68] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Integrated Booking System</h4>
                  <p className="opacity-90 text-sm">Seamless appointment scheduling that converts</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#EFCB68] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Speed Optimization</h4>
                  <p className="opacity-90 text-sm">Lightning-fast loading times under 1 second</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#EFCB68] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">SEO Foundation</h4>
                  <p className="opacity-90 text-sm">Optimized for Google and local search</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#EFCB68] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Training & Support</h4>
                  <p className="opacity-90 text-sm">Learn how to update and maintain your site</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#EFCB68] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">30-Day Free Support</h4>
                  <p className="opacity-90 text-sm">Post-launch assistance and minor adjustments</p>
                </div>
              </div>
            </div>
          </div>

          <Button 
            size="lg" 
            onClick={() => {
              // Main CTA - should open lead capture form/modal
              console.log("Risk reversal CTA clicked - open lead capture form");
            }}
            className="bg-[#EFCB68] hover:bg-[#e6b84f] text-gray-900 px-12 py-6 text-xl font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            👉 Get Free Audit Video
          </Button>
          
          <p className="text-sm opacity-75 mt-4">
            No credit card required • 100% Risk-Free • 14-Day Guarantee
          </p>
        </div>
      </div>
    </section>
  );
}