"use client";

import { CheckIcon, BriefcaseIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

const designServiceFeatures = [
  {
    title: "Custom UI/UX Design Solutions",
    description: "Tailored design solutions that align with your brand and target audience, enhancing user engagement and satisfaction.",
  },
  {
    title: "Responsive Web and Mobile App Designs",
    description: "Ensuring that your website and applications provide a seamless experience across all devices, from desktops to mobile phones.",
  },
  {
    title: "User Research and Persona Development",
    description: "Understanding your users deeply to create personas that guide the design process and ensure user-centric solutions.",
  },
  {
    title: "Prototyping and Usability Testing",
    description: "Creating interactive prototypes and conducting usability tests to validate design decisions and improve user experiences.",
  },
];

const developmentServiceFeatures = [
  {
    title: "Flutter Development",
    description: "Building high-performance, natively compiled applications for mobile, web, and desktop from a single codebase.",
  },
  {
    title: "iOS and Android Development",
    description: "Developing robust and scalable mobile applications tailored to your business needs, using native and cross-platform technologies.",
  },
  {
    title: "Frontend Development",
    description: "Crafting visually appealing and user-friendly interfaces using the latest web technologies and frameworks.",
  },
  {
    title: "Responsive and Scalable Software Development",
    description: "Ensuring that your software adapts to various devices and scales effortlessly as your business grows.",
  },
];

export default function HireMe() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Elevate Your Digital Experience
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Empower your brand with bespoke UI/UX design and development solutions that resonate with your audience. Let's create intuitive, impactful, and engaging digital experiences together.
          </p>
        </div>
        <div className="mx-auto mt-16 grid grid-cols-1 gap-8 sm:gap-10 lg:grid-cols-2">
          {/* Design Services */}
          <div className="rounded-3xl ring-1 ring-gray-200">
            <div className="p-8 sm:p-10 lg:flex-auto">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                Design Services
              </h3>
              <div className="mt-8 space-y-6">
                {designServiceFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckIcon
                      className="h-6 w-6 flex-none text-indigo-600"
                      aria-hidden="true"
                    />
                    <div className="ml-4">
                      <h4 className="text-sm font-semibold text-gray-900">
                        {feature.title}
                      </h4>
                      <p className="mt-1 text-sm text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex space-x-2">
                <a
                  href="mailto:srsuiuxdesign@gmail.com"
                  className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-gray-300 hover:bg-gradient-to-r from-indigo-500 to-purple-500 hover:text-white hover:shadow-lg transform transition-transform duration-200 ease-in-out hover:scale-105"
                >
                  <BriefcaseIcon
                    className="h-5 w-5 mr-2 text-gray-900 transition-colors duration-200 ease-in-out hover:text-white"
                    aria-hidden="true"
                  />
                  Hire Me
                </a>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-gray-300 hover:bg-gradient-to-r from-indigo-500 to-purple-500 hover:text-white hover:shadow-lg transform transition-transform duration-200 ease-in-out hover:scale-105"
                >
                  See Projects
                </Link>
              </div>
            </div>
          </div>

          {/* Development Services */}
          <div className="rounded-3xl ring-1 ring-gray-200">
            <div className="p-8 sm:p-10 lg:flex-auto">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                Development Services
              </h3>
              <div className="mt-8 space-y-6">
                {developmentServiceFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckIcon
                      className="h-6 w-6 flex-none text-indigo-600"
                      aria-hidden="true"
                    />
                    <div className="ml-4">
                      <h4 className="text-sm font-semibold text-gray-900">
                        {feature.title}
                      </h4>
                      <p className="mt-1 text-sm text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex space-x-2">
                <a
                  href="mailto:srsuiuxdesign@gmail.com"
                  className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-gray-300 hover:bg-gradient-to-r from-indigo-500 to-purple-500 hover:text-white hover:shadow-lg transform transition-transform duration-200 ease-in-out hover:scale-105"
                >
                  <BriefcaseIcon
                    className="h-5 w-5 mr-2 text-gray-900 transition-colors duration-200 ease-in-out hover:text-white"
                    aria-hidden="true"
                  />
                  Hire Me
                </a>
                <Link
                  href="/devpro"
                  className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-gray-300 hover:bg-gradient-to-r from-indigo-500 to-purple-500 hover:text-white hover:shadow-lg transform transition-transform duration-200 ease-in-out hover:scale-105"
                >
                  See Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
