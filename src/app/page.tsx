'use client';

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { DURATION } from "@/constants";

const SWITCH_INTERVAL = 2000;

const intros = [
  { node: "Proficient in Frontend Development" },
  { node: "Passionate about Accessibility" },
  { node: "Experienced in diverse tech stacks" },
  {
    node: (
      <>
        Check out my{" "}
        <Link
          href="/projects"
          className={`text-lime-600 underline decoration-transparent transition-all duration-${DURATION} hover:decoration-lime-600`}
        >
          projects
        </Link>
        !
      </>
    ),
  },
];

export default function Home() {
  const [visibleTextIdx, setVisibleTextIdx] = useState<number>(0);
  const [isVisible, setIsVisible] = useState(true);
  const startTimeRef = useRef<number | null>(null);
  const requestRef = useRef<number | null>(null);

  const updateFrame = useCallback((time: number) => {
    if (!startTimeRef.current) startTimeRef.current = time;

    const elapsed = time - startTimeRef.current;

    if (elapsed >= SWITCH_INTERVAL) {
      // Trigger fade-out animation
      setIsVisible(false);

      setTimeout(() => {
        // Switch text after fade-out
        setVisibleTextIdx((prevIdx) => (prevIdx + 1) % intros.length);

        // Trigger fade-in animation
        setIsVisible(true);
      }, 500); // The duration of the fade-out transition

      startTimeRef.current = time;
    }

    requestRef.current = requestAnimationFrame(updateFrame);
  }, []);

  useEffect(() => {
    requestRef.current = requestAnimationFrame(updateFrame);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [updateFrame]);

  return (
    <>
      <section className="flex flex-col w-full lg:w-3/4 gap-4 py-4 lg:py-24 mx-4 lg:mx-auto text-6xl">
        <p
          className={`transition-opacity duration-500 ease-in-out transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
          }`}
        >
          {intros[visibleTextIdx].node}
        </p>
      </section>
    </>
  );
}
