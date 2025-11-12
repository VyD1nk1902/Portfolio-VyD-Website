"use client";

import { useEffect } from "react";
import { printSignature } from "@/utils/signature";

export default function ConsoleSignature() {
  useEffect(() => {
    printSignature();
  }, []);

  return null;
}
