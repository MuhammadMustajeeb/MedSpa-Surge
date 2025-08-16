import { Star, Quote } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      quote: "We doubled our bookings in just 2 weeks. The new website is absolutely stunning and our patients love it. Best investment we've made for our practice.",
      name: "Dr. Sarah Chen",
      title: "Elite Medical Spa",
      rating: 5,
      result: "+150% Bookings"
    },
    {
      quote: "Finally, a website that converts! Our old site was embarrassing, now we get compliments daily. The booking system is seamless and our revenue has skyrocketed.",
      name: "Dr. Michael Rodriguez", 
      title: "Luxe Aesthetics",
      rating: 5,
      result: "+$47K Revenue"
    },
    {
      quote: "Patients complimented our new site the first week it launched. The mobile experience is incredible and our Google reviews mention our website specifically now.",
      name: "Dr. Jennifer Kim",
      title: "Radiance Med Spa",
      rating: 5,
      result: "+200% Mobile Bookings"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Med Spa Owners Are Saying
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't take our word for it. Here's what happens when Med Spas 
            invest in professional, conversion-focused websites.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 relative">
              <div className="absolute -top-4 left-8">
                <div className="w-8 h-8 bg-[#6B4EFF] rounded-full flex items-center justify-center">
                  <Quote className="w-4 h-4 text-white" />
                </div>
              </div>
              
              <div className="pt-6 space-y-6">
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#EFCB68] text-[#EFCB68]" />
                  ))}
                </div>
                
                <blockquote className="text-lg text-gray-700 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-gray-600">{testimonial.title}</div>
                    </div>
                  </div>
                  
                  <div className="bg-[#EFCB68] text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                    {testimonial.result}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#EFCB68] text-[#EFCB68]" />
              ))}
            </div>
            <span className="text-gray-700 font-medium">5.0 Average Rating</span>
            <span className="text-gray-500">• 47 Reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}