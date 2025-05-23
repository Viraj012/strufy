"use client";

import { FileProvider } from "@/context/FileContext";

export default function ResultsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <FileProvider>{children}</FileProvider>;
}
