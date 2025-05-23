"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

// Define file type
export type FileType = {
  id: string;
  name: string;
  content: string;
  language: string;
};

// Define context type
type FileContextType = {
  files: FileType[];
  setFiles: React.Dispatch<React.SetStateAction<FileType[]>>;
  addFile: (file: FileType) => void;
  updateFile: (id: string, content: string) => void;
  removeFile: (id: string) => void;
};

// Create context with default values
const FileContext = createContext<FileContextType | undefined>(undefined);

// Sample initial files for demonstration
const initialFiles: FileType[] = [
  {
    id: "1",
    name: "index.js",
    content: `import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});`,
    language: "javascript",
  },
  {
    id: "2",
    name: "package.json",
    content: `{
  "name": "my-project",
  "version": "1.0.0",
  "description": "A generated project",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "cors": "^2.8.5",
    "dotenv": "^16.0.3"
  },
  "devDependencies": {
    "nodemon": "^2.0.22"
  }
}`,
    language: "json",
  },
  {
    id: "3",
    name: "README.md",
    content: `# My Project

This is a generated project based on your requirements.

## Setup

1. Install dependencies: \`npm install\`
2. Start the server: \`npm start\`

## Features

- Feature 1
- Feature 2
- Feature 3`,
    language: "markdown",
  },
];

// Create provider component
export function FileProvider({ children }: { children: ReactNode }) {
  const [files, setFiles] = useState<FileType[]>(initialFiles);

  const addFile = (file: FileType) => {
    setFiles((prev) => [...prev, file]);
  };

  const updateFile = (id: string, content: string) => {
    setFiles((prev) =>
      prev.map((file) => (file.id === id ? { ...file, content } : file))
    );
  };

  const removeFile = (id: string) => {
    setFiles((prev) => prev.filter((file) => file.id !== id));
  };

  return (
    <FileContext.Provider
      value={{ files, setFiles, addFile, updateFile, removeFile }}
    >
      {children}
    </FileContext.Provider>
  );
}

// Create custom hook for using the context
export function useFiles() {
  const context = useContext(FileContext);
  if (context === undefined) {
    throw new Error("useFiles must be used within a FileProvider");
  }
  return context;
}
