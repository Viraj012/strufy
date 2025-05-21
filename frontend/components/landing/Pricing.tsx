"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function Pricing() {
  const [annual, setAnnual] = useState(true);

  const plans = [
    {
      name: "Free",
      description: "Perfect for trying out the platform",
      price: annual ? 0 : 0,
      features: [
        "5 project blueprints per month",
        "Basic project plan",
        "Simple task breakdown",
        "Basic database schema",
        "Standard export format",
        "Email support"
      ],
      cta: "Start Free",
      highlight: false
    },
    {
      name: "Pro",
      description: "For professional developers and small teams",
      price: annual ? 19 : 29,
      features: [
        "Unlimited project blueprints",
        "Comprehensive project plans",
        "Detailed task breakdowns",
        "Advanced database schemas",
        "Code architecture blueprints",
        "Resource planning",
        "Multiple export formats",
        "Priority support"
      ],
      cta: "Go Pro",
      highlight: true
    },
    {
      name: "Team",
      description: "For development teams and businesses",
      price: annual ? 49 : 69,
      features: [
        "Everything in Pro",
        "Team collaboration",
        "Project sharing & commenting",
        "Blueprint version history",
        "Custom export templates",
        "API access",
        "SSO integration",
        "Dedicated support"
      ],
      cta: "Get Team",
      highlight: false
    }
  ];

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-gray-600 mb-8">
            Choose the plan that's right for you and start turning your ideas into reality today
          </p>

          <div className="flex items-center justify-center mb-8">
            <div className="bg-gray-100 p-1 rounded-full flex items-center">
              <Button
                variant={annual ? "default" : "ghost"}
                className={`rounded-full ${annual ? 'bg-white shadow-md' : ''}`}
                onClick={() => setAnnual(true)}
              >
                Annual (Save 20%)
              </Button>
              <Button
                variant={!annual ? "default" : "ghost"}
                className={`rounded-full ${!annual ? 'bg-white shadow-md' : ''}`}
                onClick={() => setAnnual(false)}
              >
                Monthly
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex"
            >
              <div className={`flex flex-col border rounded-2xl overflow-hidden w-full transition-all hover:shadow-xl ${
                plan.highlight
                  ? 'border-blue-200 shadow-lg relative'
                  : 'border-gray-200 hover:border-blue-200'
              }`}>
                {plan.highlight && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <Badge className="bg-gradient-to-r from-blue-600 to-indigo-600">Most Popular</Badge>
                  </div>
                )}

                <div className={`p-8 ${plan.highlight ? 'bg-gradient-to-br from-blue-50 to-indigo-50' : ''}`}>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-5xl font-bold">${plan.price}</span>
                    <span className="text-gray-600 ml-2">{plan.price > 0 ? annual ? '/year' : '/month' : 'forever'}</span>
                  </div>
                  <Button
                    className={`w-full ${
                      plan.highlight
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700'
                        : ''
                    }`}
                    variant={plan.highlight ? 'default' : 'outline'}
                  >
                    {plan.cta}
                  </Button>
                </div>

                <div className="p-8 bg-gray-50 flex-grow">
                  <p className="font-medium mb-4">What's included:</p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">Need a custom solution for your enterprise?</p>
          <Button variant="outline" size="lg">Contact Sales</Button>
        </div>
      </div>
    </section>
  );
}
