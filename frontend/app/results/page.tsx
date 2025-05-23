"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Download, 
  MessageSquare, 
  X, 
  Send, 
  Code, 
  FileText, 
  Package 
} from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useFiles } from "@/context/FileContext";



export default function ResultsPage() {
  const { files } = useFiles();
  const [activeTab, setActiveTab] = useState(files.length > 0 ? files[0].id : "");
  const [viewMode, setViewMode] = useState<"formatted" | "raw">("formatted");
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState("");
  const [chatHistory, setChatHistory] = useState<Array<{ role: "user" | "assistant"; content: string }>>([]);
  const { toast } = useToast();
  
  // Update active tab if files change
  useEffect(() => {
    if (files.length > 0 && !files.find(f => f.id === activeTab)) {
      setActiveTab(files[0].id);
    }
  }, [files, activeTab]);

  // Format code for display
  const formatCode = (content: string, language: string) => {
    // In a real app, you'd use a syntax highlighter library
    return (
      <pre className={`language-${language} p-4 rounded-md bg-gray-50 dark:bg-gray-900 overflow-auto`}>
        <code>{content}</code>
      </pre>
    );
  };

  // Handle file download
  const downloadFile = (file: typeof files[0]) => {
    const blob = new Blob([file.content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = file.name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    toast({
      title: "File Downloaded",
      description: `${file.name} has been downloaded successfully.`,
    });
  };

  // Handle download all files as zip
  const downloadAllFiles = () => {
    // In a real app, you'd use a library like JSZip to create a zip file
    toast({
      title: "All Files Downloaded",
      description: "All files have been packaged and downloaded.",
    });
  };

  // Handle chat message submission
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatMessage.trim()) return;

    // Add user message to chat history
    setChatHistory([...chatHistory, { role: "user", content: chatMessage }]);
    
    // Clear input
    setChatMessage("");
    
    // Simulate AI response (in a real app, this would be an API call)
    setTimeout(() => {
      setChatHistory(prev => [
        ...prev, 
        { 
          role: "assistant", 
          content: "I've received your feedback. What specific changes would you like me to make to the generated files?" 
        }
      ]);
    }, 1000);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-center"
      >
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-transparent bg-clip-text mb-4">
          Your Generated Blueprint
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Here are the files generated based on your requirements. You can view, edit, and download them.
        </p>
      </motion.div>

      <div className="bg-white rounded-xl shadow-xl overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* File navigation sidebar */}
          <div className="w-full md:w-64 bg-gray-50 border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-4 border-b border-gray-200 dark:border-gray-700">
              <h2 className="font-semibold text-gray-800 dark:text-gray-200">Files</h2>
            </div>
            <ScrollArea className="h-[calc(100vh-15rem)]">
              <div className="p-2">
                {files.map((file) => (
                  <button
                    key={file.id}
                    onClick={() => setActiveTab(file.id)}
                    className={`w-full text-left px-3 py-2 rounded-md mb-1 flex items-center ${
                      activeTab === file.id
                        ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200"
                        : "hover:bg-gray-100 dark:hover:bg-gray-700"
                    }`}
                  >
                    {file.language === "javascript" ? (
                      <Code size={16} className="mr-2" />
                    ) : file.language === "json" ? (
                      <FileText size={16} className="mr-2" />
                    ) : (
                      <FileText size={16} className="mr-2" />
                    )}
                    <span className="truncate">{file.name}</span>
                  </button>
                ))}
              </div>
            </ScrollArea>
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <Button 
                variant="outline" 
                className="w-full mb-2 flex items-center justify-center"
                onClick={downloadAllFiles}
              >
                <Package size={16} className="mr-2" />
                Download All
              </Button>
            </div>
          </div>

          {/* Main content area */}
          <div className="flex-1">
            <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center">
                <h2 className="font-semibold text-gray-800 dark:text-gray-200">
                  {files.find(f => f.id === activeTab)?.name}
                </h2>
              </div>
              <div className="flex items-center space-x-2">
                <div className="bg-gray-100 dark:bg-gray-800 rounded-md p-1 flex">
                  <button
                    onClick={() => setViewMode("formatted")}
                    className={`px-3 py-1 rounded-md text-sm ${
                      viewMode === "formatted"
                        ? "bg-white dark:bg-gray-700 shadow-sm"
                        : "text-gray-600 dark:text-gray-400"
                    }`}
                  >
                    Formatted
                  </button>
                  <button
                    onClick={() => setViewMode("raw")}
                    className={`px-3 py-1 rounded-md text-sm ${
                      viewMode === "raw"
                        ? "bg-white dark:bg-gray-700 shadow-sm"
                        : "text-gray-600 dark:text-gray-400"
                    }`}
                  >
                    Raw
                  </button>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    const file = files.find(f => f.id === activeTab);
                    if (file) downloadFile(file);
                  }}
                >
                  <Download size={16} className="mr-2" />
                  Download
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsChatOpen(!isChatOpen)}
                >
                  <MessageSquare size={16} />
                </Button>
              </div>
            </div>

            <ScrollArea className="h-[calc(100vh-15rem)]">
              <div className="p-4">
                {viewMode === "formatted" ? (
                  formatCode(
                    files.find(f => f.id === activeTab)?.content || "",
                    files.find(f => f.id === activeTab)?.language || "text"
                  )
                ) : (
                  <textarea
                    className="w-full h-[calc(100vh-20rem)] p-4 font-mono text-sm border rounded-md"
                    value={files.find(f => f.id === activeTab)?.content}
                    readOnly
                  />
                )}
              </div>
            </ScrollArea>
          </div>

          {/* Chat sidebar */}
          {isChatOpen && (
            <div className="w-full md:w-80 border-l border-gray-200 dark:border-gray-700 flex flex-col">
              <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
                <h2 className="font-semibold text-gray-800 dark:text-gray-200">Chat</h2>
                <Button variant="ghost" size="sm" onClick={() => setIsChatOpen(false)}>
                  <X size={16} />
                </Button>
              </div>
              
              <ScrollArea className="flex-1 p-4">
                <div className="space-y-4">
                  {chatHistory.length === 0 ? (
                    <div className="text-center text-gray-500 my-8">
                      <MessageSquare className="mx-auto mb-2 h-8 w-8 opacity-50" />
                      <p>No messages yet. Ask for adjustments to your generated files.</p>
                    </div>
                  ) : (
                    chatHistory.map((msg, index) => (
                      <div
                        key={index}
                        className={`p-3 rounded-lg max-w-[85%] ${
                          msg.role === "user"
                            ? "bg-blue-100 dark:bg-blue-900 ml-auto"
                            : "bg-gray-100 dark:bg-gray-800"
                        }`}
                      >
                        <p className="text-sm">{msg.content}</p>
                      </div>
                    ))
                  )}
                </div>
              </ScrollArea>
              
              <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                <form onSubmit={handleSendMessage} className="flex items-center space-x-2">
                  <input
                    type="text"
                    placeholder="Ask for adjustments..."
                    className="flex-1 p-2 border rounded-md"
                    value={chatMessage}
                    onChange={(e) => setChatMessage(e.target.value)}
                  />
                  <Button type="submit" size="sm">
                    <Send size={16} />
                  </Button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
