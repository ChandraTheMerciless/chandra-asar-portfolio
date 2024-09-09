import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

import { DURATION } from "@/constants";

export default function Home() {
  console.log(DURATION);
  return (
    <>
      <section className="flex flex-col w-full lg:w-3/4 gap-5 py-4 lg:py-24 mx-4 lg:mx-auto">
        <h1 className="text-8xl">Hello!</h1>
        <p className="text-4xl">I'm a Frontend Developer. Check out my <Link href="/projects" className={`text-lime-600 underline decoration-transparent transition-all duration-${DURATION} hover:decoration-lime-600`}>projects</Link>!</p>
      </section>
    </>
  );
}
