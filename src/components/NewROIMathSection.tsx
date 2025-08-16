import { Calculator, TrendingUp, DollarSign, ArrowUp } from "lucide-react";

export function NewROIMathSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-green-600">One Patient</span> Covers Your Investment.
          </h2>
          
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            The math is simple. Your return is immediate. Everything after is pure profit.
          </p>
        </div>

        {/* ROI Calculator Visual */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl border-2 border-green-200">
            <div className="flex items-center justify-center gap-4 mb-8">
              <Calculator className="w-8 h-8 text-green-600" />
              <h3 className="text-2xl font-bold text-gray-900">ROI Calculator</h3>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              {/* Input */}
              <div className="text-center">
                <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 mb-4">
                  <DollarSign className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-blue-600 mb-2">$1,500</div>
                  <div className="text-gray-700 font-medium">Average Package Value</div>
                  <div className="text-sm text-gray-600 mt-2">Conservative Med Spa estimate</div>
                </div>
              </div>

              {/* Multiplier */}
              <div className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <ArrowUp className="w-8 h-8 text-[#6B4EFF]" />
                  <span className="text-2xl font-bold text-[#6B4EFF] mx-2">×</span>
                  <TrendingUp className="w-8 h-8 text-[#6B4EFF]" />
                </div>
                <div className="bg-[#6B4EFF]/10 border-2 border-[#6B4EFF] rounded-2xl p-6">
                  <div className="text-3xl font-bold text-[#6B4EFF] mb-2">Just 1</div>
                  <div className="text-gray-900 font-medium">Extra Booking</div>
                  <div className="text-sm text-gray-600 mt-2">From better website conversion</div>
                </div>
              </div>

              {/* Result */}
              <div className="text-center">
                <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-6 mb-4">
                  <div className="text-4xl font-bold text-green-600 mb-2">ROI</div>
                  <div className="text-2xl font-bold text-green-600">COVERED</div>
                  <div className="text-gray-700 font-medium mt-2">Investment Paid</div>
                  <div className="text-sm text-gray-600 mt-2">Everything else is profit</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Breakdown */}
        <div className="grid gap-8 lg:grid-cols-2 max-w-6xl mx-auto mb-16">
          {/* Current State */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-red-500">
            <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                📉
              </div>
              Your Current Situation
            </h4>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="text-gray-700">Monthly Ad Spend</span>
                <span className="font-semibold text-red-600">$8,000</span>
              </div>
              
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="text-gray-700">Website Conversion Rate</span>
                <span className="font-semibold text-red-600">2.1%</span>
              </div>
              
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="text-gray-700">Monthly Bookings</span>
                <span className="font-semibold text-red-600">12</span>
              </div>
              
              <div className="flex justify-between items-center py-3 bg-red-50 px-4 rounded-lg">
                <span className="font-semibold text-gray-900">Revenue Lost/Month</span>
                <span className="text-xl font-bold text-red-600">-$4,200</span>
              </div>
            </div>
          </div>

          {/* After Fix */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-green-500">
            <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                📈
              </div>
              After Our 14-Day Fix
            </h4>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="text-gray-700">Same Ad Spend</span>
                <span className="font-semibold text-green-600">$8,000</span>
              </div>
              
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="text-gray-700">Improved Conversion Rate</span>
                <span className="font-semibold text-green-600">4.8%</span>
              </div>
              
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="text-gray-700">Monthly Bookings</span>
                <span className="font-semibold text-green-600">28</span>
              </div>
              
              <div className="flex justify-between items-center py-3 bg-green-50 px-4 rounded-lg">
                <span className="font-semibold text-gray-900">Extra Revenue/Month</span>
                <span className="text-xl font-bold text-green-600">+$24,000</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="bg-gradient-to-r from-[#6B4EFF] to-[#8B5CF6] text-white rounded-3xl p-8 lg:p-12 text-center">
          <h3 className="text-3xl lg:text-4xl font-bold mb-6">
            The Bottom Line
          </h3>
          
          <div className="grid gap-6 md:grid-cols-3 mb-8">
            <div>
              <div className="text-3xl font-bold text-[#EFCB68] mb-2">$1,500</div>
              <div className="text-xl">One booking covers everything</div>
            </div>
            
            <div>
              <div className="text-3xl font-bold text-[#EFCB68] mb-2">14 Days</div>
              <div className="text-xl">To see results</div>
            </div>
            
            <div>
              <div className="text-3xl font-bold text-[#EFCB68] mb-2">$24K+</div>
              <div className="text-xl">Extra revenue per month</div>
            </div>
          </div>
          
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            "If your average package is worth $1,500, just one extra booking pays for your entire website fix. 
            Everything after is profit."
          </p>
          
          <button 
            onClick={() => {
              console.log("ROI section CTA clicked");
            }}
            className="bg-[#EFCB68] hover:bg-[#e6b84f] text-gray-900 px-12 py-6 text-xl font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            👉 Calculate My ROI - Free Audit
          </button>
        </div>
      </div>
    </section>
  );
}