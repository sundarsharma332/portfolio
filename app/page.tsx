
"use client"

import CaseStudyLists from "./components/CaseStudy";
import CodingSoftwaresUsed from "./components/CodingSoftware";
import HeroSection from "./components/HeroSection";
import ToolsUsed from "./components/SoftwareCollections";
import HeroBanner from "./components/banner";
import MediumPosts from "./components/blogs";
import DevelopmentProjects from "./components/developmentProjects";
import ExpertiseSection from "./components/expertise";
import HireMe from "./components/idea";
import ClientTestimonials from "./components/testimonial";

export default function Home() {
  return (
    <>
      <main className="mb-auto">
        <HeroBanner />
        <HeroSection />
        <ExpertiseSection />
        <CaseStudyLists />
        <DevelopmentProjects />
        <ToolsUsed />
        <CodingSoftwaresUsed />
        <ClientTestimonials />
        <HireMe />
        <MediumPosts />
      </main>
    </>
  )
}
