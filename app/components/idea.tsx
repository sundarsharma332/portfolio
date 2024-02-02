"use client"

import { CheckIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

const serviceFeatures = [
  'Custom UI/UX design solutions',
  'Responsive web and mobile app designs',
  'User research and persona development',
  'Prototyping and usability testing',
]

export default function HireMe() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Elevate Your Digital Experience</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Empower your brand with bespoke UI/UX design solutions that resonate with your audience. Let's create intuitive, impactful, and engaging digital experiences together.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">Design Services</h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
              As a UI/UX and Product Designer, I specialize in translating business goals and user needs into beautiful, functional designs. From concept to launch, I provide a full range of design services to bring your vision to life.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">What I Offer</h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
            >
              {serviceFeatures.map((feature, index) => (
                <li key={index} className="flex gap-x-3">
                  <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-600">Partner with me for your next project</p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">Let's Talk</span>
                </p>
                <Link
                  href="#"
                  className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Start a Project
                </Link>
                <p className="mt-6 text-xs leading-5 text-gray-600">
                  Reach out for a free consultation to discuss your needs and how I can help.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
