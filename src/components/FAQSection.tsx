import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

export function FAQSection() {
  const faqs = [
    {
      question: "What if I don't like the redesign?",
      answer: "You don't pay until you're completely satisfied. We'll work with you through unlimited revisions during the 14-day period to ensure your website exceeds your expectations. If you're still not happy, you don't pay a dime."
    },
    {
      question: "How fast is delivery?",
      answer: "14 days, guaranteed. We've streamlined our process to deliver high-quality websites fast. You'll see progress updates every 2-3 days and have the opportunity to provide feedback throughout the process."
    },
    {
      question: "Can you handle ads/SEO too?",
      answer: "Yes — add-ons available after redesign. Once your new website is live and converting, we can optimize your Google Ads, Facebook Ads, and SEO to drive even more qualified traffic to your high-converting site."
    },
    {
      question: "Do you work with all types of Med Spas?",
      answer: "We specialize in aesthetic medicine, including Botox/fillers, laser treatments, CoolSculpting, skin care, and medical weight loss. Our templates and copy are specifically designed for med spa patient psychology."
    },
    {
      question: "What's included in the 14-day redesign?",
      answer: "Complete website redesign, mobile optimization, booking system integration, SEO setup, load speed optimization, contact forms, before/after galleries, service pages, about page, and basic training on how to update content."
    },
    {
      question: "Will my website work on mobile?",
      answer: "Absolutely. Over 70% of med spa bookings happen on mobile devices. Every website we build is mobile-first, meaning it's designed primarily for mobile users and then adapted for desktop."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Got Questions? We've Got Answers.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about getting your Med Spa website fixed in 14 days.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-gray-50 rounded-2xl px-6 border-0 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 py-6 hover:text-[#6B4EFF] hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 text-base leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Still have questions? We're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:hello@medspasurge.com" 
              className="inline-flex items-center justify-center px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium rounded-xl transition-colors duration-200"
            >
              📧 Email Us
            </a>
            <a 
              href="tel:+1234567890" 
              className="inline-flex items-center justify-center px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium rounded-xl transition-colors duration-200"
            >
              📞 Call Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}