"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { LoadingScreen } from "./LoadingScreen";

export function Hero() {
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [showLoadingScreen, setShowLoadingScreen] = useState(false);
  const [isGenerationComplete, setIsGenerationComplete] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    // Start generation and show loading screen
    setIsGenerating(true);
    setShowLoadingScreen(true);

    // Simulate generation process
    setTimeout(() => {
      setIsGenerationComplete(true);
      setIsGenerating(false);
    }, 8000); // Simulate 8 seconds of generation time
  };

  const handleCloseLoadingScreen = () => {
    setShowLoadingScreen(false);
    setIsGenerationComplete(false);
    setPrompt(""); // Clear the prompt for next generation
  };

  return (
    <>
      <section className="relative overflow-hidden pt-24 md:pt-32 pb-16">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white -z-10" />

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
        <div className="absolute top-32 right-10 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000" />

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-transparent bg-clip-text leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Transform Your Ideas Into Development Blueprints
            </motion.h1>

            <motion.p
              className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Describe your project idea, and our AI will generate comprehensive development plans,
              tasks, blueprints, and database schemas — everything you need to bring your vision to life.
            </motion.p>

            <motion.div
              className="w-full max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
                <Textarea
                  placeholder="Describe your project idea in detail (e.g., 'I want to create a task management app with user authentication, project groups, and recurring tasks...')"
                  className="min-h-32 text-base mb-4 border-gray-200 focus:border-blue-500"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                />

                <div className="flex justify-end">
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all"
                    disabled={isGenerating || !prompt.trim()}
                  >
                    {isGenerating ? (
                      <>
                        <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                        Generating...
                      </>
                    ) : (
                      <>
                        <Sparkles className="mr-2 h-4 w-4" />
                        Generate Blueprint
                      </>
                    )}
                  </Button>
                </div>
              </form>

              <p className="text-sm text-gray-500 mt-3">
                Get your project files in seconds, compatible with leading AI development tools.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Loading screen overlay */}
      <LoadingScreen
        isVisible={showLoadingScreen}
        isComplete={isGenerationComplete}
        onClose={handleCloseLoadingScreen}
      />
    </>
  );
}
