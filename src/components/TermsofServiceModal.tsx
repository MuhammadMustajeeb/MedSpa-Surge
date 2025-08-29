import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { ScrollArea } from "./ui/scroll-area";
import { X } from "lucide-react";

interface TermsOfServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TermsOfServiceModal({ isOpen, onClose }: TermsOfServiceModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] p-0">
        <DialogHeader className="px-6 py-4 border-b">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold text-gray-900">
              Terms of Service
            </DialogTitle>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </DialogHeader>
        
        <ScrollArea className="px-6 py-4 h-[calc(90vh-120px)]">
          <div className="space-y-6 text-gray-700">
            <div className="text-sm text-gray-500 mb-6">
              <strong>Last Updated:</strong> December 2024
            </div>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Acceptance of Terms</h3>
              <p>
                By accessing or using MedSpa Surge's services, including requesting a free audit or engaging our website improvement services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Description of Services</h3>
              <p className="mb-4">MedSpa Surge provides:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Free Website Audits:</strong> Comprehensive analysis of med spa websites</li>
                <li><strong>Website Improvement Services:</strong> Complete website optimization and enhancement</li>
                <li><strong>14-Day Delivery Guarantee:</strong> Completed improvements within 14 business days</li>
                <li><strong>Performance Optimization:</strong> Speed, conversion, and user experience improvements</li>
                <li><strong>Booking System Integration:</strong> Enhanced appointment booking capabilities</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Service Guarantee</h3>
              <div className="bg-[#6B4EFF]/10 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-[#6B4EFF] mb-2">Our 100% Satisfaction Guarantee:</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Complete website improvements delivered within 14 business days</li>
                  <li>Measurable improvement in website performance metrics</li>
                  <li>Full refund if you're not satisfied with the results</li>
                  <li>No questions asked money-back guarantee</li>
                </ul>
              </div>
              <p>
                To qualify for our guarantee, clients must provide necessary access credentials, content, and feedback within agreed timeframes.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">4. Client Responsibilities</h3>
              <p className="mb-4">To ensure successful service delivery, clients must:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate business and website information</li>
                <li>Grant necessary access to website hosting and management systems</li>
                <li>Respond to requests for feedback within 48 hours</li>
                <li>Provide required content, images, and materials</li>
                <li>Maintain current backups of their website</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">5. Payment Terms</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Free Audit:</strong> No payment required for initial website audit</li>
                <li><strong>Service Fees:</strong> Payment due upon acceptance of service proposal</li>
                <li><strong>Refund Policy:</strong> Full refund available if satisfaction guarantee is not met</li>
                <li><strong>Payment Methods:</strong> We accept major credit cards and bank transfers</li>
                <li><strong>Late Payments:</strong> Services may be suspended for overdue payments</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">6. Intellectual Property</h3>
              <p className="mb-4">
                <strong>Client Content:</strong> You retain ownership of all content, images, and materials you provide. You grant us a limited license to use these materials solely for providing our services.
              </p>
              <p className="mb-4">
                <strong>Our Work Product:</strong> Custom code, designs, and improvements we create become your property upon full payment. We retain the right to use general techniques and methodologies for other projects.
              </p>
              <p>
                <strong>Third-Party Assets:</strong> Any third-party software, plugins, or assets used remain subject to their respective licenses.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">7. Limitation of Liability</h3>
              <p className="mb-4">
                To the maximum extent permitted by law, MedSpa Surge's liability is limited to the amount paid for services. We are not liable for:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Indirect, incidental, or consequential damages</li>
                <li>Loss of profits, revenue, or business opportunities</li>
                <li>Third-party actions or website downtime</li>
                <li>Data loss due to client's failure to maintain backups</li>
                <li>Issues arising from client's website hosting or infrastructure</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">8. Service Limitations and Disclaimers</h3>
              <p className="mb-4">While we strive for excellence, please note:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Results may vary based on industry, competition, and market conditions</li>
                <li>We cannot guarantee specific conversion rates or revenue increases</li>
                <li>Search engine rankings and traffic depend on multiple factors</li>
                <li>Third-party integrations are subject to their terms and availability</li>
                <li>Some improvements may require ongoing maintenance</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">9. Confidentiality</h3>
              <p>
                We maintain strict confidentiality regarding your business information, website data, and strategies. We will not disclose confidential information except as required by law or with your explicit consent.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">10. Termination</h3>
              <p className="mb-4">Either party may terminate services:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>By Client:</strong> With 48-hour notice, subject to refund policy</li>
                <li><strong>By MedSpa Surge:</strong> For non-payment, violation of terms, or uncooperative behavior</li>
                <li><strong>Effect of Termination:</strong> Work stops immediately, delivered work remains client's property</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">11. Force Majeure</h3>
              <p>
                We are not liable for delays or failures due to circumstances beyond our control, including natural disasters, government actions, internet outages, or other unforeseeable events.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">12. Dispute Resolution</h3>
              <p className="mb-4">
                Any disputes will be resolved through:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Good Faith Discussion:</strong> Direct communication to resolve issues</li>
                <li><strong>Mediation:</strong> If direct resolution fails</li>
                <li><strong>Arbitration:</strong> Binding arbitration as final resort</li>
                <li><strong>Governing Law:</strong> These terms are governed by [Your State] law</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">13. Changes to Terms</h3>
              <p>
                We may update these terms occasionally. Continued use of our services after changes constitutes acceptance of new terms. Material changes will be communicated via email.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">14. Severability</h3>
              <p>
                If any provision of these terms is found unenforceable, the remaining provisions remain in full force and effect.
              </p>
            </section>

            <section className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Contact Information</h3>
              <p className="mb-2">
                For questions about these Terms of Service or our services:
              </p>
              <div className="space-y-1">
                <p><strong>Email:</strong> medspasurge.com</p>
                <p><strong>Phone:</strong> +92 371 0102330</p>
                <p><strong>Business Hours:</strong> Monday-Friday, 5PM-10PM EST</p>
                {/* <p><strong>Address:</strong> MedSpa Surge, Legal Department</p>
                <p>123 Business Ave, Suite 100</p>
                <p>Business City, BC 12345</p> */}
              </div>
              
              <div className="mt-4 p-4 bg-[#6B4EFF]/10 rounded-lg">
                <p className="text-sm">
                  <strong>Ready to get started?</strong> Our 14-day guarantee and 100% satisfaction promise mean you have nothing to lose. 
                  <a href="#" className="text-[#6B4EFF] font-semibold hover:underline ml-1">Get your free audit today.</a>
                </p>
              </div>
            </section>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}