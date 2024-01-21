"use client"
import SoftwaresUsedForDesign from './Softwares'

export default function ToolsUsed() {
  return (
    <div className="bg-white sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">srsuiuxdesign</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Tools & Softwares I use
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          Every day, I employ a set of software and tools to fulfill client and company needs. These daily companions enhance efficiency and enable seamless collaboration in my professional endeavors.
           </p>
        </div>
        <div className="mx-auto mt-2 max-w-2xl sm:mt-12 lg:mt-2 lg:max-w-7xl">
        <SoftwaresUsedForDesign/>
        </div>
      </div>
    </div>
  )
}
