'use client';
import { useState } from "react";
import { X } from "lucide-react";
import { NewHeroSection } from "../components/NewHeroSection";
import { NewPainSection } from "../components/NewPainSection";
import { NewProcessSection } from "../components/NewProcessSection";
import { NewROIMathSection } from "../components/NewROIMathSection";
import { NewAuthoritySection } from "../components/NewAuthoritySection";
import { LiveDemoSection } from "../components/LiveDemoSection";
import { FAQSection } from "../components/FAQSection";
import { RiskReversalSection } from "../components/RiskReversalSection";
import { FinalCTASection } from "../components/FinalCTASection";
import { PrivacyPolicyModal } from "../components/PrivacyPolicyModal";
import { TermsOfServiceModal } from "../components/TermsofServiceModal";

export default function App() {
  const [showForm, setShowForm] = useState(false);
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [showTermsOfService, setShowTermsOfService] = useState(false);

  // Main CTA handler - all primary CTAs trigger this
  const handleMainCTA = () => {
    setShowForm(true);
  };

  // Secondary CTA handler - scrolling/navigation
  const handleSecondaryCTA = (action: string) => {
    switch(action) {
      case 'demo':
        document.getElementById('live-demo')?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'process':
        document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'roi':
        document.getElementById('roi')?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'risk-reversal':
        document.getElementById('risk-reversal')?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'faq':
        document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
        <button 
          onClick={handleMainCTA}
          className="w-full bg-[#6B4EFF] hover:bg-[#5a3eef] text-white py-4 px-6 rounded-xl font-bold text-lg shadow-2xl transition-all duration-300 animate-pulse"
        >
          👉 Get Free Audit (Limited Spots)
        </button>
      </div>

      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-sm border-b sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#6B4EFF] rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">MS</span>
              </div>
              <div>
                <span className="text-2xl font-bold text-gray-900">MedSpa Surge</span>
                <div className="text-xs text-gray-600 hidden sm:block">14-Day Website Fix</div>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center gap-8">
              <button 
                onClick={() => handleSecondaryCTA('process')}
                className="text-gray-600 hover:text-[#6B4EFF] font-medium transition-colors"
              >
                How It Works
              </button>
              <button 
                onClick={() => handleSecondaryCTA('demo')}
                className="text-gray-600 hover:text-[#6B4EFF] font-medium transition-colors"
              >
                Live Demo
              </button>
              <button 
                onClick={() => handleSecondaryCTA('faq')}
                className="text-gray-600 hover:text-[#6B4EFF] font-medium transition-colors"
              >
                FAQ
              </button>
              <button 
                onClick={handleMainCTA}
                className="bg-[#6B4EFF] hover:bg-[#5a3eef] text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Free Audit
              </button>
            </nav>

            <button 
              onClick={handleMainCTA}
              className="md:hidden bg-[#6B4EFF] text-white px-4 py-2 rounded-lg font-semibold shadow-lg"
            >
              Audit
            </button>
          </div>
        </div>
      </header>

      {/* Main Sections */}
      <main>
        <NewHeroSection onPrimaryCTA={handleMainCTA}  />
        <NewPainSection onPrimaryCTA={handleMainCTA} />
        <NewProcessSection onPrimaryCTA={handleMainCTA} />
        <NewROIMathSection onPrimaryCTA={handleMainCTA} />
        <NewAuthoritySection />
        <LiveDemoSection onPrimaryCTA={handleMainCTA} />
        <div id="faq"><FAQSection /></div>
        <RiskReversalSection onPrimaryCTA={handleMainCTA} />
        <FinalCTASection onPrimaryCTA={handleMainCTA} />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#6B4EFF] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">MS</span>
                </div>
                <span className="text-xl font-bold">MedSpa Surge</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                We fix broken Med Spa websites in 14 days - or you don't pay. 
                Guaranteed results, guaranteed timeline.
              </p>
              <div className="flex items-center gap-2 text-sm text-[#EFCB68]">
                <span className="w-2 h-2 bg-[#EFCB68] rounded-full animate-pulse"></span>
                <span>Limited spots available this month</span>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Our Process</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => handleSecondaryCTA('process')} className="hover:text-white transition-colors text-left">14-Day Fix Process</button></li>
                <li><button onClick={() => handleSecondaryCTA('demo')} className="hover:text-white transition-colors text-left">Live Demo</button></li>
                <li><button onClick={() => handleSecondaryCTA('demo')} className="hover:text-white transition-colors">Booking Systems</button></li>
                <li><button onClick={() => handleSecondaryCTA('roi')} className="hover:text-white transition-colors">Speed Optimization</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Guarantee</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => handleSecondaryCTA('risk-reversal')} className="hover:text-white transition-colors">100% Satisfaction</button></li>
                <li><button onClick={() => handleSecondaryCTA('process')} className="hover:text-white transition-colors">14-Day Delivery</button></li>
                <li><button onClick={() => handleSecondaryCTA('risk-reversal')} className="hover:text-white transition-colors">Results or Refund</button></li>
                <li><button onClick={handleMainCTA} className="hover:text-white transition-colors text-left">Get Free Audit</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">📧 medspasruge.com</li>
                <li className="flex items-center gap-2">📞 +92 371 0102330</li>
                <li className="flex items-center gap-2">🕒 Mon-Fri 5PM-10PM EST</li>
                <li className="flex items-center gap-2">⚡ 24hr response guarantee</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-gray-400 text-sm">
                &copy; 2024 MedSpa Surge. All rights reserved. Built with conversion psychology.
              </div>
              <div className="flex items-center gap-6 text-sm">
                <button 
                  onClick={() => setShowPrivacyPolicy(true)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </button>
                <button 
                  onClick={() => setShowTermsOfService(true)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Terms of Service
                </button>
                <button 
                  onClick={handleMainCTA}
                  className="bg-[#6B4EFF] hover:bg-[#5a3eef] text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300"
                >
                  Start Here
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Global Modal Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl relative p-6 animate-fadeIn">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              <X className="w-6 h-6" />
            </button>
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-4">
              🎥 Get Your Free Audit Video
            </h2>
            <div className="w-full h-[500px] rounded-xl overflow-hidden">
              <iframe
                src="https://tally.so/r/nGGkBz"
                width="100%"
                height="100%"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="Free Audit Form"
                loading="lazy"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      {/* Legal Modals */}
      <PrivacyPolicyModal 
        isOpen={showPrivacyPolicy} 
        onClose={() => setShowPrivacyPolicy(false)} 
      />
      <TermsOfServiceModal 
        isOpen={showTermsOfService} 
        onClose={() => setShowTermsOfService(false)} 
      />
    </div>
  );
}
