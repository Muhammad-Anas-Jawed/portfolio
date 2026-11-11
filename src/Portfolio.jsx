"use client";

import { LazyMotion, domAnimation, MotionConfig } from "framer-motion";
import { Navbar } from "./components/layout/Navbar";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { TechStack } from "./components/sections/TechStack";
import Projects from "./components/sections/Portfolio";
import { Experience } from "./components/sections/Experience";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/sections/Footer";
import { CustomCursor } from "./components/ui/CustomCursor";

export default function Portfolio() {
  return (
    <MotionConfig reducedMotion="user">
      <LazyMotion features={domAnimation} strict>
        <div className="site-shell min-h-screen bg-background text-foreground flex flex-col relative overflow-hidden font-sans">
          <a className="skip-link" href="#main">
            Skip to content
          </a>
          <CustomCursor />
          <div
            className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
            aria-hidden="true"
          >
            <div className="orb orb-1 absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-primary/20 blur-[120px] opacity-60" />
            <div className="orb orb-2 absolute top-[30%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-accent/25 blur-[120px] opacity-60" />
            <div className="orb orb-3 absolute bottom-[-10%] left-[20%] w-[30vw] h-[30vw] rounded-full bg-chart-2/25 blur-[100px] opacity-50" />
          </div>
          <header>
            <Navbar />
          </header>
          <main
            id="main"
            className="flex-1 relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 space-y-32"
          >
            <Hero />
            <About />
            <TechStack />
            <Projects />
            <Experience />
            <Contact />
          </main>
          <Footer />
        </div>
      </LazyMotion>
    </MotionConfig>
  );
}
