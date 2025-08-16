import { Button } from "./ui/button";
import { Video, Palette, Rocket } from "lucide-react";

export function ProcessSection() {
  const steps = [
    {
      number: "01",
      icon: <Video className="w-12 h-12" />,
      title: "Free Audit Video",
      description: "We record your site's leaks.",
      details: "Get a personalized 10-minute screen recording showing exactly what's broken on your current website and how it's costing you patients."
    },
    {
      number: "02", 
      icon: <Palette className="w-12 h-12" />,
      title: "14-Day Redesign",
      description: "We rebuild & launch.",
      details: "Our team completely rebuilds your website from scratch with modern design, fast loading, and conversion-optimized booking flows."
    },
    {
      number: "03",
      icon: <Rocket className="w-12 h-12" />,
      title: "Launch + Bookings",
      description: "You start getting more patients.",
      details: "Go live with your new high-converting website and watch your booking rates increase immediately. We provide training and ongoing support."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple, proven process. No technical headaches, no long delays. 
            Just results in 14 days.
          </p>
        </div>

        <div className="grid gap-8 lg:gap-12 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className={`grid gap-8 lg:grid-cols-2 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center gap-4">
                    <div className="text-4xl lg:text-6xl font-bold text-[#6B4EFF] opacity-20">
                      {step.number}
                    </div>
                    <div className="w-16 h-16 bg-[#6B4EFF] rounded-2xl flex items-center justify-center text-white">
                      {step.icon}
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                      {step.title}
                    </h3>
                    <p className="text-xl text-[#6B4EFF] font-semibold">
                      {step.description}
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {step.details}
                    </p>
                  </div>
                  
                  {index === 0 && (
                    <Button 
                      size="lg" 
                      onClick={() => {
                        // Main CTA - should open lead capture form or calendar booking
                        console.log("Book audit CTA clicked - open booking system");
                      }}
                      className="bg-[#6B4EFF] hover:bg-[#5a3eef] text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      👉 Book My Free Audit
                    </Button>
                  )}
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="bg-gray-50 rounded-3xl p-12 text-center">
                    <div className={`w-32 h-32 mx-auto rounded-full flex items-center justify-center mb-6 ${
                      step.number === '01' ? 'bg-blue-100 text-blue-600' :
                      step.number === '02' ? 'bg-purple-100 text-purple-600' :
                      'bg-green-100 text-green-600'
                    }`}>
                      {step.icon}
                    </div>
                    <div className={`text-6xl font-bold mb-4 ${
                      step.number === '01' ? 'text-blue-600' :
                      step.number === '02' ? 'text-purple-600' :
                      'text-green-600'
                    }`}>
                      {step.number}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Connecting line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute left-1/2 -bottom-6 w-px h-12 bg-gray-200 transform -translate-x-1/2"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}