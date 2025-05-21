"use client";

import { motion } from "framer-motion";
import {
  FileText, Database, GitPullRequest, List,
  FileCode, BarChart, AlertCircle, Cpu
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: <FileText className="h-10 w-10 text-blue-500" />,
    title: "Project Plans",
    description: "Comprehensive project plans with clear milestones and development phases."
  },
  {
    icon: <List className="h-10 w-10 text-indigo-500" />,
    title: "Task Breakdown",
    description: "Granular task lists with priority levels and estimated completion times."
  },
  {
    icon: <FileCode className="h-10 w-10 text-purple-500" />,
    title: "Code Architecture",
    description: "File structure recommendations and architecture blueprints for clean, maintainable code."
  },
  {
    icon: <Database className="h-10 w-10 text-pink-500" />,
    title: "Database Schemas",
    description: "Complete database design with entity relationships and optimized structures."
  },
  {
    icon: <GitPullRequest className="h-10 w-10 text-green-500" />,
    title: "Integration Points",
    description: "Clear integration strategies for APIs, third-party services, and system components."
  },
  {
    icon: <BarChart className="h-10 w-10 text-yellow-500" />,
    title: "Resource Planning",
    description: "Estimates for development resources, technology requirements, and scaling considerations."
  },
  {
    icon: <AlertCircle className="h-10 w-10 text-red-500" />,
    title: "Risk Assessment",
    description: "Identification of potential challenges and mitigation strategies for your project."
  },
  {
    icon: <Cpu className="h-10 w-10 text-teal-500" />,
    title: "AI-Ready Outputs",
    description: "Export formats optimized for AI coding assistants and development tools."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

export function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Everything You Need To Start Building</h2>
          <p className="text-lg text-gray-600">
            From project planning to technical architecture, get all the resources you need to
            kickstart your development process.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="mb-4">{feature.icon}</div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
