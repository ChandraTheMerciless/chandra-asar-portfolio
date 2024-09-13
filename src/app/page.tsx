'use client';

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

import { DURATION } from "@/constants";

const SWITCH_INTERVAL = 2000;

const intros = [
  {
    node: ("Proficient in Frontend Development")
  },
  {
    node: ("Passionate about Accessibility")
  },
  {
    node: ("Experienced in diverse tech stacks")
  },
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
    )
  },
];

export default function Home() {
  const [visibleTextIdx, setVisibleTextIdx] = useState<number>(0);
  const startTimeRef = useRef<number | null>(null);
  const requestRef = useRef<number | null>(null);

  const updateFrame = useCallback((time: number) => {
    if (!startTimeRef.current) startTimeRef.current = time;
  
    const elapsed = time - startTimeRef.current;

    if (elapsed >= SWITCH_INTERVAL) {
      setVisibleTextIdx((prevIdx) => (prevIdx + 1) % intros.length);
      startTimeRef.current = time;
    }

    requestRef.current = requestAnimationFrame(updateFrame);
  }, [])

  useEffect(() => {
    requestRef.current = requestAnimationFrame(updateFrame);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    }
  }, [updateFrame]);
  
  return (
    <>
      <section className="flex flex-col w-full lg:w-3/4 gap-4 py-4 lg:py-24 mx-4 lg:mx-auto text-6xl">
        <p>
          {intros[visibleTextIdx].node}
        </p>

        {/* <p>Proficient in Frontend Development</p>
        <p>Passionate about Accessibility</p>
        <p>Experienced in diverse tech stacks</p>
        <p>Check out my <Link href="/projects" className={`text-lime-600 underline decoration-transparent transition-all duration-${DURATION} hover:decoration-lime-600`}>projects</Link>!</p> */}
      </section>
    </>
  );
}
