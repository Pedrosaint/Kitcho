import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How do I place an order on Kitcho?",
    answer:
      "Simply download the app, browse nearby kitchens, select your favorite dishes, and checkout. Your food will be on its way in minutes.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Delivery typically takes 30-40 minutes depending on your location and the kitchen's preparation time.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "We accept bank transfers, card payments, and multiple mobile payment options with bank-level security.",
  },
  {
    question: "Can I track my order in real-time?",
    answer:
      "Yes! Once your order is confirmed, you can track it live from the kitchen all the way to your doorstep.",
  },
  {
    question: "How do I become a chef/kitchen partner?",
    answer:
      "Download the app, sign up as a chef, complete your profile and verification, and start receiving orders from customers near you.",
  },
];

export default function FAQHero() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-20 relative overflow-hidden">
      {/* Decorative dashed diagonal line — left */}
      <div className="absolute left-16 top-32 pointer-events-none">
        <svg width="80" height="180" viewBox="0 0 80 180">
          <line
            x1="60"
            y1="0"
            x2="0"
            y2="160"
            stroke="#FF5A1F"
            strokeWidth="1.5"
            strokeDasharray="6 5"
          />
          {/* Arrow tip */}
          <polygon points="0,160 10,145 -8,148" fill="#FF5A1F" />
        </svg>
      </div>

      {/* Decorative send icon — left */}
      <div className="absolute left-28 top-56 w-10 h-10 rounded-full border-2 border-dashed border-[#FF5A1F]/40 flex items-center justify-center pointer-events-none">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#FF5A1F"
          strokeWidth="2"
        >
          <line x1="22" y1="2" x2="11" y2="13" />
          <polygon points="22 2 15 22 11 13 2 9 22 2" />
        </svg>
      </div>

      {/* Decorative orange circle — top center */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#FF5A1F] pointer-events-none" />

      {/* Decorative circle — top right */}
      <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-[#FFE5D0]/50 translate-x-1/3 -translate-y-1/3 pointer-events-none" />

      {/* Decorative satellite — top right */}
      <div className="absolute top-8 right-48 text-2xl pointer-events-none">
        🛰️
      </div>

      <div className="mx-auto container px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — Text + Accordion */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500 text-sm mb-8">
              Find quick answers to common questions about ordering, menus,
              delivery, and using Kitcho.
            </p>

            <div className="flex flex-col gap-3">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="border border-gray-100 rounded-xl overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full flex items-center justify-between px-5 py-4 text-left"
                  >
                    <span className="font-semibold text-gray-800 text-sm">
                      {faq.question}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`text-[#FF5A1F] transition-transform duration-300 flex-shrink-0 ml-4 ${
                        openIndex === i ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openIndex === i && (
                    <div className="px-5 pb-4 text-gray-500 text-sm leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right — Placeholder for 3D illustration */}
          <div className="relative flex items-center justify-center">
            <div className="w-full h-80 rounded-3xl bg-[#FFF5F0] flex items-center justify-center">
              <p className="text-gray-400 text-sm">[ 3D Illustration Here ]</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
