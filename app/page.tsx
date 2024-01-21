
"use client"

import CodingSoftwaresUsed from "./components/CodingSoftware";
import Features from "./components/Features";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";
import ToolsUsed from "./components/SoftwareCollections";

export default function Home() {
  return (
      <>
      <main className="mb-auto">
        <HeroSection />
        <ToolsUsed/>
        <CodingSoftwaresUsed/>
        <Projects/>
        <Features/>
        
       
      </main>
      </>
  )
}
