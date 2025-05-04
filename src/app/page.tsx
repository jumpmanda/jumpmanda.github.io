"use client";
import Link from "next/link";
import React from "react";

function useIsVisible(ref: any) {
  const [isIntersecting, setIntersecting] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    });

    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
}

export default function Home() {
  const ref = React.useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(ref);

  const scrollToSection = () => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="grid grid-rows-[auto_1fr] items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <header className="row-start-1">
        <ul>
          <li>about</li>
          <li>skills</li>
          <li>experience</li>
          <li>connect</li>
        </ul>
      </header>
      <main className="row-start-2 h-lvh flex flex-col gap-2">
        <h1 className="text-3xl sm:text-7xl font-[family-name:var(--font-primary)]">
          Amanda Hernandez
        </h1>
        <h2 className="text-xl sm:text-3xl font-[family-name:var(--font-assistant)]">
          I build things for the web and write sometimes
        </h2>
        <button type="button" onClick={scrollToSection} className="w-fit">
          See more
        </button>
      </main>
      <div
        ref={ref}
        className={`h-1000 transition-opacity ease-in duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}
      >
        <Link href="/mdx-page">About</Link>
      </div>
      <footer>Footer</footer>
    </div>
  );
}
