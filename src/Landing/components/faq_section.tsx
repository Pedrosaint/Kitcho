import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqCategories = [
  {
    category: "Ordering & Meals",
    questions: [
      {
        question: "What kind of meals can I order on Kitcho?",
        answer:
          "You can order a wide variety of meals including local Nigerian dishes, continental food, snacks, and beverages from verified kitchens near you.",
      },
      {
        question: "Can I customize my order?",
        answer:
          "Yes! Many kitchens allow you to add special instructions or customize portions when placing your order.",
      },
    ],
  },
  {
    category: "Payments & Wallet",
    questions: [
      {
        question: "How do I place an order?",
        answer:
          "Browse nearby kitchens, select your meals, add them to your cart, and proceed to checkout to place your order.",
      },
      {
        question: "How do I pay for my order?",
        answer:
          "You can pay using your Kitcho wallet, bank transfer, or card payment at checkout.",
      },
      {
        question: "How do I fund my wallet?",
        answer:
          "Go to your wallet section in the app, tap 'Fund Wallet', and follow the prompts to add money via bank transfer or card.",
      },
    ],
  },
  {
    category: "Delivery",
    questions: [
      {
        question: "What happens if my wallet balance is not enough?",
        answer:
          "You can top up your wallet or switch to card payment at checkout to complete your order.",
      },
      {
        question: "How long does delivery take?",
        answer:
          "Delivery typically takes 30-40 minutes depending on your location and the kitchen's preparation time.",
      },
    ],
  },
  {
    category: "For Chef",
    questions: [
      {
        question: "How can I become a chef on Kitcho?",
        answer:
          "Download the app, sign up as a chef partner, complete your profile and kitchen verification, and start receiving orders.",
      },
      {
        question: "How can I manage my orders as a chef?",
        answer:
          "Use the chef dashboard in the app to view, accept, and manage incoming orders in real-time.",
      },
    ],
  },
  {
    category: "Location & Availability",
    questions: [
      {
        question: "How do chefs receive payments?",
        answer:
          "Chefs receive weekly payouts directly to their registered bank account after deductions for platform fees.",
      },
    ],
  },
];

export default function FAQSection() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggle = (key: string) => {
    setOpenItem(openItem === key ? null : key);
  };

  return (
    <section className="bg-white">
      {/* ================= DESKTOP ================= */}
      <div className="hidden lg:block py-10">
        <div className="mx-auto container">
          {faqCategories.map((cat, ci) => (
            <div key={ci} className="flex gap-8 mb-12">
              {/* Category */}
              <div className="w-44 shrink-0 pt-2">
                <p className="text-gray-500 text-sm font-medium">
                  {cat.category}
                </p>
              </div>

              {/* Questions */}
              <div className="flex-1 flex flex-col gap-3">
                {cat.questions.map((faq, qi) => {
                  const key = `${ci}-${qi}`;
                  const isOpen = openItem === key;

                  return (
                    <div
                      key={qi}
                      className="border border-gray-200 overflow-hidden transition-all"
                      style={{
                        borderRadius: isOpen ? "1rem" : "9999px",
                      }}
                    >
                      <button
                        onClick={() => toggle(key)}
                        className="w-full flex items-center justify-between px-5 py-3 text-left"
                      >
                        <span className="text-gray-700 text-sm">
                          {faq.question}
                        </span>

                        <div className="w-7 h-7 rounded-full bg-gray-300 flex items-center justify-center">
                          {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                        </div>
                      </button>

                      {isOpen && (
                        <div className="px-5 pb-4 text-gray-500 text-sm">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= MOBILE ================= */}
      <div className="lg:hidden px-5 py-10">
        {faqCategories.map((cat, ci) => (
          <div key={ci} className="mb-8">
            {/* Category Title */}
            <h3 className="text-base font-semibold text-gray-900 mb-3">
              {cat.category}
            </h3>

            {/* Questions */}
            <div className="space-y-3">
              {cat.questions.map((faq, qi) => {
                const key = `${ci}-${qi}`;
                const isOpen = openItem === key;

                return (
                  <div
                    key={qi}
                    className="border border-gray-200 rounded-xl overflow-hidden"
                  >
                    <button
                      onClick={() => toggle(key)}
                      className="w-full flex items-center justify-between px-4 py-4 text-left"
                    >
                      <span className="text-sm text-gray-700 pr-3">
                        {faq.question}
                      </span>

                      <div className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center shrink-0">
                        {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-4 pb-4 text-sm text-gray-500 leading-relaxed">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
