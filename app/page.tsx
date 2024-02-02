
"use client"

import CaseStudyLists from "./components/CaseStudy";
import CodingSoftwaresUsed from "./components/CodingSoftware";
import HeroSection from "./components/HeroSection";
import ToolsUsed from "./components/SoftwareCollections";
import HireMe from "./components/idea";

export default function Home() {
  return (
      <>
      <main className="mb-auto">
        <HeroSection />
        <CaseStudyLists/>
        <ToolsUsed/>
        <CodingSoftwaresUsed/>
        <HireMe/>
      </main>
      </>
  )
}
