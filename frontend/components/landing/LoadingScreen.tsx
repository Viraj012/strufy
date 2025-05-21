"use client";

import { motion } from "framer-motion";
import { CircleCheckBig, Sparkles } from "lucide-react";

interface LoadingScreenProps {
  isVisible: boolean;
  isComplete: boolean;
  generationTitle?: string;
  onClose?: () => void;
}

export function LoadingScreen({
  isVisible,
  isComplete,
  generationTitle = "Your Project Blueprint",
  onClose
}: LoadingScreenProps) {
  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-white bg-opacity-90 backdrop-blur-sm flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-lg w-full mx-auto p-8">
        {!isComplete ? (
          <div className="text-center">
            <div className="relative w-24 h-24 mx-auto mb-8">
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-blue-400 border-t-transparent"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.5, 1, 0.5] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Sparkles className="h-8 w-8 text-blue-600" />
              </motion.div>
            </div>

            <h3 className="text-2xl font-bold mb-2">Generating Your Blueprint</h3>
            <p className="text-gray-600 mb-6">
              Our AI is processing your idea and creating a comprehensive development plan.
              This might take a few moments...
            </p>

            <div className="space-y-3">
              <div className="flex items-center">
                <motion.div
                  className="h-1.5 bg-blue-500 rounded-full mr-2"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2 }}
                />
                <span className="text-sm text-gray-500">Analyzing requirements</span>
              </div>

              <div className="flex items-center">
                <motion.div
                  className="h-1.5 bg-blue-500 rounded-full mr-2"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2, delay: 2 }}
                />
                <span className="text-sm text-gray-500">Creating project structure</span>
              </div>

              <div className="flex items-center">
                <motion.div
                  className="h-1.5 bg-blue-500 rounded-full mr-2"
                  initial={{ width: 0 }}
                  animate={{ width: "80%" }}
                  transition={{ duration: 4, delay: 4 }}
                />
                <span className="text-sm text-gray-500">Generating blueprints</span>
              </div>
            </div>
          </div>
        ) : (
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 10
                }}
              >
                <CircleCheckBig className="h-14 w-14 text-green-600" />
              </motion.div>
            </div>

            <h3 className="text-2xl font-bold mb-2">Your Blueprint Is Ready!</h3>
            <p className="text-gray-600 mb-8">
              We've successfully generated a comprehensive blueprint for your project.
              Download it now to get started with development.
            </p>

            <div className="flex flex-col gap-4">
              <button
                className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 transition-all"
              >
                Download Blueprint
              </button>

              <button
                className="text-gray-600 hover:text-gray-900 transition-colors"
                onClick={onClose}
              >
                Return to Editor
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
