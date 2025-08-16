import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { CheckCircle, Smartphone, Calendar, Search, Shield } from "lucide-react";

export function PromiseSection() {
  const features = [
    {
      icon: <Smartphone className="w-6 h-6" />,
      text: "Mobile-first design"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      text: "Integrated booking system"
    },
    {
      icon: <Search className="w-6 h-6" />,
      text: "SEO + ad-optimized"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      text: "Risk-free guarantee"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop"
                alt="Beautiful modern Med Spa website design"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#6B4EFF]/20 to-transparent"></div>
              
              {/* Success indicators */}
              <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                Fast Loading
              </div>
              <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-2 rounded-full text-sm font-semibold">
                0.8s Load Time
              </div>
              <div className="absolute bottom-4 left-4 bg-[#EFCB68] text-gray-900 px-3 py-2 rounded-full text-sm font-semibold">
                +250% Conversions
              </div>
            </div>
            
            {/* Floating success metrics */}
            <div className="absolute -top-8 -right-8 bg-white p-4 rounded-2xl shadow-xl border">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#6B4EFF]">97%</div>
                <div className="text-sm text-gray-600">Mobile Score</div>
              </div>
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-4 rounded-2xl shadow-xl border">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#FF6F91]">3.2x</div>
                <div className="text-sm text-gray-600">More Bookings</div>
              </div>
            </div>
          </div>

          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">
                From Broken to Beautiful in Just{" "}
                <span className="text-[#6B4EFF]">14 Days</span>.
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                We rebuild your website & funnel into a conversion machine:
              </p>
            </div>

            <div className="grid gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                  <div className="w-10 h-10 bg-[#6B4EFF] text-white rounded-full flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <span className="text-lg font-medium text-gray-900">
                    ✅ {feature.text}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button 
                size="lg" 
                onClick={() => {
                  // Could open modal with example audit or scroll to competitor analysis
                  console.log("See audit example clicked - show sample analysis");
                  document.getElementById('competitor-analysis')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-[#6B4EFF] hover:bg-[#5a3eef] text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                👉 See Our Analysis Method
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => {
                  // Scroll to social proof section showing our guarantees
                  document.getElementById('social-proof')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="border-[#6B4EFF] text-[#6B4EFF] hover:bg-[#6B4EFF] hover:text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
              >
                View Our Guarantees
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}