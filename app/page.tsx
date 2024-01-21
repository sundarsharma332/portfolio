
"use client"

import Features from "./components/Features";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";
import ToolsUsed from "./components/SoftwareCollections";
import SoftwareUsedTillNow from "./components/softwareUse";

export default function Home() {
  return (
      <>
      <main className="mb-auto">
        <HeroSection />
        {/* <SoftwareUsedTillNow/> */}
        <ToolsUsed/>
        <Projects/>
        <Features/>
        
       
      </main>
      </>
  )
}
