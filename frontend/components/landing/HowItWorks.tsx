"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Describe Your Idea",
    description: "Enter a detailed description of your project idea, including functionality, user flows, and any specific requirements.",
    image: "/step1.png"
  },
  {
    number: "02",
    title: "AI Analysis",
    description: "Our AI analyzes your description, identifies key components, and determines the optimal architecture and technologies.",
    image: "/step2.png"
  },
  {
    number: "03",
    title: "Blueprint Generation",
    description: "The system generates comprehensive project files including plans, tasks, database schemas, and technical specifications.",
    image: "/step3.png"
  },
  {
    number: "04",
    title: "Download & Build",
    description: "Download your complete project blueprint and use it with your favorite AI development tool to start building immediately.",
    image: "/step4.png"
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-gray-600">
            Turn your idea into a fully specified project in just a few simple steps
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 hidden md:block" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="mb-16 last:mb-0"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}>
                {/* Content side */}
                <div className="flex-1 md:text-left lg:p-8">
                  <div className="flex items-start mb-4">
                    <div className="bg-blue-600 text-white text-xl font-bold w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      {step.number}
                    </div>
                    <h3 className="text-2xl font-bold">{step.title}</h3>
                  </div>
                  <p className="text-gray-600 text-lg mb-4">{step.description}</p>
                  <ul className="space-y-2">
                    {[1, 2, 3].map((bullet, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">
                          {step.title === "Describe Your Idea" && idx === 0 && "No technical knowledge required - just explain your vision"}
                          {step.title === "Describe Your Idea" && idx === 1 && "The more details you provide, the better your blueprint"}
                          {step.title === "Describe Your Idea" && idx === 2 && "Add any specific technologies or requirements you prefer"}

                          {step.title === "AI Analysis" && idx === 0 && "Sophisticated AI understands project requirements"}
                          {step.title === "AI Analysis" && idx === 1 && "Identifies optimal technologies and frameworks"}
                          {step.title === "AI Analysis" && idx === 2 && "Maps out database and component relationships"}

                          {step.title === "Blueprint Generation" && idx === 0 && "Creating structured, organized project plans"}
                          {step.title === "Blueprint Generation" && idx === 1 && "Generating comprehensive technical documentation"}
                          {step.title === "Blueprint Generation" && idx === 2 && "Organizing tasks in development-ready format"}

                          {step.title === "Download & Build" && idx === 0 && "Ready-to-use with AI coding assistants"}
                          {step.title === "Download & Build" && idx === 1 && "Simply upload to your development environment"}
                          {step.title === "Download & Build" && idx === 2 && "Accelerate your development process by 10x"}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual/Illustration side */}
                <div className="flex-1 w-full md:w-auto relative">
                  <div className="aspect-[4/3] relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-lg overflow-hidden border border-gray-100 flex items-center justify-center">
                    <div className="text-6xl text-gray-200 font-bold absolute">
                      STEP {step.number}
                    </div>
                    {/* Placeholder for illustration - in a real project, you'd use actual images */}
                    <div className="relative z-10 w-full h-full bg-opacity-50 flex items-center justify-center p-8">
                      {step.title === "Describe Your Idea" && (
                        <div className="w-full h-full bg-white/80 rounded-xl p-4 shadow-inner">
                          <div className="w-full h-6 bg-gray-200 rounded mb-3"></div>
                          <div className="w-3/4 h-6 bg-gray-200 rounded mb-6"></div>
                          <div className="w-full h-32 bg-gray-100 rounded border border-gray-300"></div>
                        </div>
                      )}

                      {step.title === "AI Analysis" && (
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="relative">
                            <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center">
                              <div className="w-12 h-12 bg-blue-500 rounded-full animate-pulse"></div>
                            </div>
                            <div className="absolute top-0 left-0 w-full h-full border-4 border-blue-300 border-dashed rounded-full animate-spin-slow"></div>
                          </div>
                        </div>
                      )}

                      {step.title === "Blueprint Generation" && (
                        <div className="grid grid-cols-2 gap-3 w-full h-full p-4">
                          <div className="bg-white shadow rounded p-2">
                            <div className="w-full h-4 bg-gray-200 rounded mb-2"></div>
                            <div className="w-2/3 h-4 bg-gray-200 rounded"></div>
                          </div>
                          <div className="bg-white shadow rounded p-2">
                            <div className="w-full h-4 bg-gray-200 rounded mb-2"></div>
                            <div className="w-2/3 h-4 bg-gray-200 rounded"></div>
                          </div>
                          <div className="bg-white shadow rounded p-2">
                            <div className="w-full h-4 bg-gray-200 rounded mb-2"></div>
                            <div className="w-2/3 h-4 bg-gray-200 rounded"></div>
                          </div>
                          <div className="bg-white shadow rounded p-2">
                            <div className="w-full h-4 bg-gray-200 rounded mb-2"></div>
                            <div className="w-2/3 h-4 bg-gray-200 rounded"></div>
                          </div>
                        </div>
                      )}

                      {step.title === "Download & Build" && (
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="w-20 h-24 bg-blue-50 rounded-lg border-2 border-blue-200 flex flex-col items-center justify-center relative">
                            <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white">
                              <CheckCircle2 className="h-5 w-5" />
                            </div>
                            <div className="w-10 h-3 bg-blue-200 rounded mb-2"></div>
                            <div className="w-12 h-12 bg-blue-200 rounded-lg"></div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Timeline circle */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-blue-600 rounded-full border-4 border-white hidden md:block" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
