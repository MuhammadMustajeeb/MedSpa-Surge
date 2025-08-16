'use client';
import { NewHeroSection } from "../components/NewHeroSection";
import { NewPainSection } from "../components/NewPainSection";
import { NewProcessSection } from "../components/NewProcessSection";
import { NewROIMathSection } from "../components/NewROIMathSection";
import { NewAuthoritySection } from "../components/NewAuthoritySection";
import { LiveDemoSection } from "../components/LiveDemoSection";
import { FAQSection } from "../components/FAQSection";
import { RiskReversalSection } from "../components/RiskReversalSection";
import { FinalCTASection } from "../components/FinalCTASection";

/* 
=== ETHICAL + PERSUASIVE LANDING PAGE ===
Following $100M Offers, Lean Startup, and Influence principles

STRUCTURE:
1. Hero - Clear, urgent, ROI-driven offer ✓
2. Pain - Show deep market understanding ✓  
3. Process - Proof through system, not testimonials ✓
4. ROI Math - Make ROI undeniable ✓
5. Authority - Ethical proof through frameworks ✓
6. Live Demo - Show instead of tell ✓
7. FAQ - Overcome objections ✓
8. Risk Reversal - Take the risk for them ✓
9. Final CTA - Urgency + reciprocity ✓

=== BUTTON FUNCTIONALITY GUIDE ===

PRIMARY CTAs (All lead to lead capture):
- "Claim My Free Audit Video" - Hero
- "Stop The Bleeding - Get Free Audit" - Pain section
- "Get My Free Audit" - Process section
- "Calculate My ROI - Free Audit" - ROI section
- "Get My Free Performance Audit" - Live demo section
- "Get Free Audit Video" - Risk reversal
- "Claim Your Free Audit Now" - Final CTA

SECONDARY CTAs (Navigate/educate):
- "See Live Demo" - Scrolls to live demo section
- "Watch Sample Audit" - Opens modal/video
- "Try Interactive Demo" - Opens demo site
- Navigation links - Smooth scroll

ALL primary CTAs should open the same lead capture form collecting:
- Business name
- Contact name
- Email
- Phone
- Website URL
- Best time to call
- Current biggest website problem (optional)

*/

export default function App() {
  // Main CTA handler - this is your primary conversion action
  const handleMainCTA = () => {
    // TODO: Implement lead capture form/modal
    console.log("Main CTA clicked - should open lead capture form");
    
    // This should:
    // 1. Open a modal with lead capture form
    // 2. Collect all necessary lead information
    // 3. Send to your CRM/email system
    // 4. Show thank you message
    // 5. Redirect to calendar booking or thank you page
  };

  const handleSecondaryCTA = (action: string) => {
    console.log(`Secondary CTA clicked: ${action}`);
    
    switch(action) {
      case 'demo':
        document.getElementById('live-demo')?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'process':
        document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' });
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
      {/* Mobile Sticky CTA - Critical for mobile conversions */}
      <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
        <button 
          onClick={handleMainCTA}
          className="w-full bg-[#6B4EFF] hover:bg-[#5a3eef] text-white py-4 px-6 rounded-xl font-bold text-lg shadow-2xl transition-all duration-300 animate-pulse"
        >
          👉 Get Free Audit (Limited Spots)
        </button>
      </div>

      {/* Header - Always visible */}
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

      {/* Main Content - Following the 9-section structure */}
      <main>
        {/* 1. Hero - Clarity + Urgency */}
        <NewHeroSection />
        
        {/* 2. Pain - Starving Crowd */}
        <NewPainSection />
        
        {/* 3. Process - Proof through System */}
        <NewProcessSection />
        
        {/* 4. ROI Math - Logical Persuasion */}
        <NewROIMathSection />
        
        {/* 5. Authority - Ethical Proof */}
        <NewAuthoritySection />
        
        {/* 6. Live Demo - Show Instead of Tell */}
        <LiveDemoSection />
        
        {/* 7. FAQ - Overcome Objections */}
        <div id="faq">
          <FAQSection />
        </div>
        
        {/* 8. Risk Reversal - Take the Risk */}
        <RiskReversalSection />
        
        {/* 9. Final CTA - Urgency + Reciprocity */}
        <FinalCTASection />
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
                <li><a href="#" className="hover:text-white transition-colors">Booking Systems</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Speed Optimization</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Guarantee</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">100% Satisfaction</a></li>
                <li><a href="#" className="hover:text-white transition-colors">14-Day Delivery</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Results or Refund</a></li>
                <li><button onClick={handleMainCTA} className="hover:text-white transition-colors text-left">Get Free Audit</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <span>📧</span> hello@medspasurge.com
                </li>
                <li className="flex items-center gap-2">
                  <span>📞</span> (555) 123-4567
                </li>
                <li className="flex items-center gap-2">
                  <span>🕒</span> Mon-Fri 9AM-6PM EST
                </li>
                <li className="flex items-center gap-2">
                  <span>⚡</span> 24hr response guarantee
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-gray-400 text-sm">
                &copy; 2024 MedSpa Surge. All rights reserved. Built with conversion psychology.
              </div>
              
              <div className="flex items-center gap-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
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
    </div>
  );
}