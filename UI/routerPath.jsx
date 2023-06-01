"use client";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";

// Usage
export default function App() {
  let pathname = usePathname();
  const ref = useRef();
  // Store current value in ref
  useEffect(() => {
    ref.current = pathname;
  }, [pathname]);
  const prevCount = ref.current;
  return <div>{prevCount}</div>;
}
