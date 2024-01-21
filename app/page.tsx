
"use client"

import CaseStudyLists from "./components/CaseStudy";
import CodingSoftwaresUsed from "./components/CodingSoftware";
import HeroSection from "./components/HeroSection";
import ToolsUsed from "./components/SoftwareCollections";

export default function Home() {
  return (
      <>
      <main className="mb-auto">
        <HeroSection />
        <CaseStudyLists/>
        <ToolsUsed/>
        <CodingSoftwaresUsed/>
  
      </main>
      </>
  )
}
