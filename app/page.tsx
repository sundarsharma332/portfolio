
"use client"

import CaseStudyLists from "./components/CaseStudy";
import CodingSoftwaresUsed from "./components/CodingSoftware";
import HeroSection from "./components/HeroSection";
import ToolsUsed from "./components/SoftwareCollections";
import BackgroundBeamsDemo from "./components/beams";
import { GoogleGeminiEffectDemo } from "./components/gemini";
import { GoogleGeminiEffect } from "./components/google-gemini-effect";
import HireMe from "./components/idea";

export default function Home() {
  return (
      <>
      <main className="mb-auto">
        <HeroSection />
        {/* <GoogleGeminiEffectDemo/> */}
        <CaseStudyLists/>
        <ToolsUsed/>
        <CodingSoftwaresUsed/>
        <HireMe/>
       {/* <BackgroundBeamsDemo/> */}
      </main>
      </>
  )
}
