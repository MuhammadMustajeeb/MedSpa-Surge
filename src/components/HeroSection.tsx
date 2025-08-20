"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HeroSection() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: send form data to Formspree / Supabase / your API
    setSubmitted(true);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-pink-50 py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left side - content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                We Fix Broken Med Spa Websites in{" "}
                <span className="text-[#6B4EFF]">14 Days</span> – or You Don't Pay.
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Most Med Spas lose 40% of patients because of slow, outdated websites. 
                We rebuild funnels fast, guaranteed.
              </p>
            </div>
            
            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={() => setOpen(true)}
                className="bg-[#6B4EFF] hover:bg-[#5a3eef] text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                👉 Claim Your Free Audit Video
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => {
                  document.getElementById('competitor-analysis')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="border-[#6B4EFF] text-[#6B4EFF] hover:bg-[#6B4EFF] hover:text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
              >
                See Analysis
              </Button>
            </div>
            
            {/* Trust badges */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">14-Day Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">No Risk</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">Conversion Focused</span>
              </div>
            </div>
          </div>
          
          {/* Right side - image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop"
                alt="Modern Med Spa Website Mockup"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 bg-[#EFCB68] text-white px-4 py-2 rounded-full font-semibold text-sm shadow-lg">
              +150% Bookings
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[#FF6F91] text-white px-4 py-2 rounded-full font-semibold text-sm shadow-lg">
              14-Day Delivery
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#6B4EFF] opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF6F91] opacity-5 rounded-full blur-3xl"></div>

      {/* Audit modal */}
      {open && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-md relative">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>

            {!submitted ? (
              <>
                <h2 className="text-2xl font-bold mb-4">Get Your Free Audit</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Your email"
                    className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#6B4EFF]"
                  />
                  <input
                    type="text"
                    name="website"
                    required
                    placeholder="Your website URL"
                    className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#6B4EFF]"
                  />
                  <Button type="submit" className="w-full bg-[#6B4EFF] text-white">
                    Submit
                  </Button>
                </form>
              </>
            ) : (
              <div className="text-center space-y-4">
                <h3 className="text-xl font-semibold text-green-600">✅ Submitted!</h3>
                <p className="text-gray-600">
                  Thanks! We’ll send your free audit video within 24 hours.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
