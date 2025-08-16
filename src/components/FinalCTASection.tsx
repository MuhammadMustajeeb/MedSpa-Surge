import { Button } from "./ui/button";
import { ArrowRight, Clock, Users, TrendingUp } from "lucide-react";

export function FinalCTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 via-[#1a1a2e] to-gray-900 text-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-12">
            <div className="inline-flex items-center bg-red-100 text-red-800 px-6 py-3 rounded-full border border-red-200 mb-8">
              <span className="w-3 h-3 bg-red-500 rounded-full mr-3 animate-pulse"></span>
              <span className="font-semibold">🚨 Limited Time: Only 5 Free Audits Left This Month</span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              We Can Only Take <span className="text-[#EFCB68]">5 Free Audits</span> This Month —<br />
              Claim Yours Today.
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              We limit our free audits to ensure quality. Once we hit 5 this month, the waitlist opens. 
              Don't wait — your competitors won't.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 mb-12">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <Clock className="w-12 h-12 text-[#EFCB68] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quick Turnaround</h3>
              <p className="opacity-80">Your new website will be live in just 14 days, guaranteed.</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <TrendingUp className="w-12 h-12 text-[#EFCB68] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
              <p className="opacity-80">Our clients see 150%+ increase in bookings within 30 days.</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <Users className="w-12 h-12 text-[#EFCB68] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">More Patients</h3>
              <p className="opacity-80">Convert more visitors into booked appointments automatically.</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#6B4EFF] to-[#8B5CF6] rounded-3xl p-8 lg:p-12 mb-12">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div className="text-left">
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                  Ready to Transform Your Med Spa?
                </h3>
                <ul className="space-y-3 text-lg">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#EFCB68] rounded-full"></div>
                    <span>Free audit video of your current site</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#EFCB68] rounded-full"></div>
                    <span>Complete redesign in 14 days</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#EFCB68] rounded-full"></div>
                    <span>100% satisfaction guarantee</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#EFCB68] rounded-full"></div>
                    <span>Start getting more bookings immediately</span>
                  </li>
                </ul>
              </div>
              
              <div className="text-center lg:text-right">
                <div className="text-4xl lg:text-6xl font-bold text-[#EFCB68] mb-2">$0</div>
                <div className="text-xl mb-4">Until you're satisfied</div>
                <div className="text-sm opacity-90">No upfront costs • No hidden fees</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Button 
              size="lg" 
              onClick={() => {
                // Main CTA - should open lead capture form/modal
                console.log("Final CTA clicked - open lead capture form");
              }}
              className="bg-[#EFCB68] hover:bg-[#e6b84f] text-gray-900 px-16 py-8 text-2xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 group"
            >
              👉 Claim Your Free Audit Now
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
            
            <p className="text-sm opacity-75">
              ⚡ Limited spots available • 🚀 14-day guarantee • 💯 Risk-free
            </p>
            
            <div className="flex items-center justify-center gap-8 text-sm opacity-60 pt-4">
              <span>🔒 Secure</span>
              <span>📞 No spam calls</span>
              <span>⚡ Instant access</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#6B4EFF] opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#EFCB68] opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF6F91] opacity-5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}