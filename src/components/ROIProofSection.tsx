import { Calculator, DollarSign, TrendingUp, Users } from "lucide-react";

export function ROIProofSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#6B4EFF] to-[#8B5CF6] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            One Extra Patient = <span className="text-[#EFCB68]">Paid in Full</span>
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            If your average client is worth $1,500, one booking pays for your website fix. 
            Everything else is pure ROI.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300">
            <DollarSign className="w-12 h-12 text-[#EFCB68] mx-auto mb-4" />
            <div className="text-3xl font-bold text-[#EFCB68] mb-2">$1,500</div>
            <div className="text-lg opacity-90">Average Client Value</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300">
            <Users className="w-12 h-12 text-[#EFCB68] mx-auto mb-4" />
            <div className="text-3xl font-bold text-[#EFCB68] mb-2">+150%</div>
            <div className="text-lg opacity-90">More Bookings</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300">
            <TrendingUp className="w-12 h-12 text-[#EFCB68] mx-auto mb-4" />
            <div className="text-3xl font-bold text-[#EFCB68] mb-2">3.2x</div>
            <div className="text-lg opacity-90">Conversion Rate</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300">
            <Calculator className="w-12 h-12 text-[#EFCB68] mx-auto mb-4" />
            <div className="text-3xl font-bold text-[#EFCB68] mb-2">14</div>
            <div className="text-lg opacity-90">Days to ROI</div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 max-w-4xl mx-auto">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl lg:text-3xl font-bold">
                The Math That Matters
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-white/20">
                  <span className="text-lg">Current monthly ad spend:</span>
                  <span className="text-xl font-semibold text-[#EFCB68]">$5,000</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/20">
                  <span className="text-lg">Current conversion rate:</span>
                  <span className="text-xl font-semibold text-[#FF6F91]">2%</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/20">
                  <span className="text-lg">New conversion rate:</span>
                  <span className="text-xl font-semibold text-[#EFCB68]">6.4%</span>
                </div>
                <div className="flex justify-between items-center py-4 bg-[#EFCB68]/20 rounded-xl px-4">
                  <span className="text-lg font-semibold">Extra monthly revenue:</span>
                  <span className="text-2xl font-bold text-[#EFCB68]">+$19,800</span>
                </div>
              </div>
            </div>
            
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center justify-center w-32 h-32 bg-[#EFCB68] rounded-full text-[#6B4EFF] mb-6">
                <Calculator className="w-16 h-16" />
              </div>
              <p className="text-lg opacity-90 leading-relaxed">
                Your investment pays for itself in less than 2 weeks. 
                After that, it's pure profit month after month.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}