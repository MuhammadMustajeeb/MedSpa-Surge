import { Button } from "./ui/button";
import { Search, Wrench, TrendingUp, CheckCircle, ArrowRight } from "lucide-react";

export function NewProcessSection() {
  const steps = [
    {
      step: "01",
      icon: <Search className="w-8 h-8 text-[#6B4EFF]" />,
      title: "Audit",
      subtitle: "We show where your funnel leaks.",
      description: "Complete technical analysis of your current site using proven conversion principles from $100M Offers and behavioral psychology.",
      deliverables: [
        "Page speed analysis (industry benchmark: <3 seconds)",
        "Mobile usability audit (70% of traffic is mobile)",
        "Conversion funnel breakdown",
        "Competitor comparison report"
      ],
      timeline: "Day 1-2"
    },
    {
      step: "02", 
      icon: <Wrench className="w-8 h-8 text-[#EFCB68]" />,
      title: "Redesign",
      subtitle: "14-day launch, mobile-first, ad-optimized.",
      description: "Complete rebuild using our proven stack and conversion-focused templates designed specifically for Med Spa patient behavior.",
      deliverables: [
        "Mobile-first responsive design",
        "Sub-1-second load times",
        "One-click booking integration", 
        "SEO optimization foundation"
      ],
      timeline: "Day 3-12"
    },
    {
      step: "03",
      icon: <TrendingUp className="w-8 h-8 text-[#FF6F91]" />,
      title: "Bookings",
      subtitle: "More patients from the same ad spend.",
      description: "Your new high-converting website starts working immediately. Same traffic, more bookings, higher ROI on your ad spend.",
      deliverables: [
        "Streamlined booking flow",
        "Trust signals and social proof",
        "Speed optimization",
        "Analytics and tracking setup"
      ],
      timeline: "Day 13-14"
    }
  ];

  return (
    <section id="process" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our 3-Step Fix —{" "}
            <span className="text-[#6B4EFF]">Backed by Proven Marketing Psychology</span>
          </h2>
          
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            We've systemized what works. No guesswork, no long timelines, no empty promises. 
            Just results in 14 days, guaranteed.
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-12 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-16 top-32 w-1 h-20 bg-gradient-to-b from-[#6B4EFF] to-gray-300 z-10"></div>
              )}
              
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="flex items-center gap-6">
                    <div className="relative">
                      <div className="w-16 h-16 bg-white border-4 border-[#6B4EFF] rounded-full flex items-center justify-center text-2xl font-bold text-[#6B4EFF] shadow-lg">
                        {step.step}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-xl text-[#6B4EFF] font-semibold">
                        {step.subtitle}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {step.description}
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">What you get:</h4>
                    {step.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="inline-flex items-center bg-[#6B4EFF]/10 text-[#6B4EFF] px-4 py-2 rounded-full border border-[#6B4EFF]/20">
                    <span className="font-semibold">{step.timeline}</span>
                  </div>

                  {index === 0 && (
                    <Button 
                      size="lg" 
                      onClick={() => {
                        console.log("Book audit CTA clicked - open booking system");
                      }}
                      className="bg-[#6B4EFF] hover:bg-[#5a3eef] text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                    >
                      👉 Get My Free Audit
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </Button>
                  )}
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="relative bg-white rounded-3xl p-8 shadow-2xl border">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#6B4EFF] to-[#8B5CF6] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                      {step.icon}
                    </div>
                    
                    <div className="space-y-4">
                      <div className="text-sm text-gray-500 uppercase tracking-wide font-semibold">
                        Step {step.step} Preview
                      </div>
                      
                      <div className="h-32 bg-gray-100 rounded-xl flex items-center justify-center">
                        <span className="text-gray-500 font-medium">
                          {step.title} Process Visualization
                        </span>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">{step.timeline}</span>
                        <div className="flex items-center gap-2 text-green-600">
                          <CheckCircle className="w-4 h-4" />
                          <span className="font-medium">Guaranteed</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Authority Section */}
        <div className="bg-[#6B4EFF] text-white rounded-3xl p-8 lg:p-12 mt-20">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Our Process Is Built On Proven Frameworks
            </h3>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              We don't guess. We apply battle-tested principles from the world's best marketers and growth experts.
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 text-center">
            <div>
              <div className="text-2xl font-bold text-[#EFCB68] mb-2">$100M Offers</div>
              <div className="text-lg">Risk Reversal Framework</div>
            </div>
            
            <div>
              <div className="text-2xl font-bold text-[#EFCB68] mb-2">Lean Startup</div>
              <div className="text-lg">Validation Methodology</div>
            </div>
            
            <div>
              <div className="text-2xl font-bold text-[#EFCB68] mb-2">Influence</div>
              <div className="text-lg">Persuasion Psychology</div>
            </div>
            
            <div>
              <div className="text-2xl font-bold text-[#EFCB68] mb-2">Conversion</div>
              <div className="text-lg">UX Best Practices</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}