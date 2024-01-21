"use client"
import ProgrammingSoftwares from './coding_software'

export default function CodingSoftwaresUsed() {
  return (
    <div className="bg-indigo-100 sm:py-12">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="mx-auto text-center max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">srsuiuxdesign</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Programming Software & Tools Used
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          As a Product Developer, post design Handoff, I colaborate with UI Engineers to build the product seamlessly and efficiently. As being from the Product development background it really helps to build the product. 
           </p>
        </div>
        <div className="mx-auto mt-4 max-w-2xl sm:mt-20 lg:mt-4 lg:max-w-7xl">
        <ProgrammingSoftwares/>
        </div>
      </div>
    </div>
  )
}
