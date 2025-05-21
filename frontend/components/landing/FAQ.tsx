"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What exactly does Arqit generate?",
    answer: "Arqit generates comprehensive project blueprints including project plans, task breakdowns, database schemas, architecture diagrams, API specifications, and resource planning documents. These outputs are formatted to be easily used with AI development tools."
  },
  {
    question: "Do I need technical knowledge to use Arqit?",
    answer: "No! That's the beauty of Arqit. You can describe your idea in plain language, and our AI will translate it into technical specifications. Of course, having some technical background helps you provide more specific requirements, but it's not necessary."
  },
  {
    question: "How accurate are the generated blueprints?",
    answer: "Our AI has been trained on thousands of successful projects and follows industry best practices. While no automated system is perfect, our users report that Arqit blueprints provide 80-90% of what they need, saving significant planning time. You can always refine the outputs if needed."
  },
  {
    question: "Can I customize the output format?",
    answer: "Yes! Pro and Team plans allow you to customize export formats to work with your preferred development tools and methodologies. We support multiple formats including JSON, Markdown, CSV, and specialized formats for popular AI coding assistants."
  },
  {
    question: "How does Arqit compare to just using AI coding assistants directly?",
    answer: "AI coding assistants are great for writing code, but they often lack the big-picture planning capabilities that Arqit provides. Arqit focuses on comprehensive project planning before a single line of code is written, helping you avoid costly architectural mistakes and rework later."
  },
  {
    question: "Is my project data secure?",
    answer: "Absolutely. We take data security very seriously. Your project ideas and generated blueprints are encrypted and never shared with third parties. We also offer data deletion options if you want to remove your information from our systems."
  },
  {
    question: "Can I share my blueprints with my team?",
    answer: "Yes! Our Team plan includes collaboration features that let you share blueprints, add comments, track version history, and work together on project planning. Free and Pro users can manually export and share their blueprints."
  },
  {
    question: "Do you offer refunds if I'm not satisfied?",
    answer: "Yes, we offer a 14-day money-back guarantee on all paid plans. If you're not completely satisfied with Arqit, contact our support team within 14 days of your purchase for a full refund."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about Arqit and how it can help your development process
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true, margin: "-50px" }}
              className="mb-4"
            >
              <div
                className={`border rounded-lg overflow-hidden transition-all ${
                  openIndex === index
                    ? 'border-blue-200 shadow-md'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <button
                  className="w-full flex items-center justify-between p-5 text-left bg-white"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-medium text-lg">{faq.question}</span>
                  {openIndex === index ? (
                    <Minus className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  ) : (
                    <Plus className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 pt-0 text-gray-600 border-t border-gray-100">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
            Contact our support team →
          </button>
        </div>
      </div>
    </section>
  );
}
