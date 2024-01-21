"use client"

import Link from "next/link"

const projects = [
    {
      name: 'Bundee',
      description: 'Bundee is an all-in-one vehicle booking and rental platform, featuring mobile, web, and admin dashboard components. From seamless vehicle onboarding to user bookings, it provides a hassle-free experience for both users and hosts, enabling efficient fleet management across various channels.',
      imageSrc: './bundee.png',
      imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
      href: 'https://mybundee.com/',
      type:"company"
    },
    {
      name: 'JuniorIT',
      description: 'JuniorIT: An innovative AI-powered platform transforming coding education with real-time assistance, interactive learning, and personalized support for students and programmers.',
      imageSrc: './it.png',
      imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
      href: 'https://juniorit.ai/',
      type:"company"
    },
  ]
  
  export default function CaseStudyLists() {
    return (
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 className="text-2xl font-bold text-gray-900">Projects / Case Studies</h2>
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
              {projects.map((project) => (
                <div key={project.name} className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      src={project.imageSrc}
                      alt={project.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href={project.href} target="_blank">
                      <span className="absolute inset-0" />
                      {project.name}
                    </a>
                  </h3>
                  <p className="text-base font-small text-gray-900 mb-4">{project.description}</p>
                  <Link href={project.href} className="text-sm mt-6 text-white bg-gradient-to-r p-2 from-fuchsia-600 to-blue-600 hover:bg-black">Read More</Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  