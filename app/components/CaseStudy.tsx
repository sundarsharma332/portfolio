import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const projects = [
  {
    name: 'Bundee',
    description: 'A fleet management & booking solution with mobile apps, web app, admin, and host dashboard, featuring advanced fleet management functionalities like real-time vehicle tracking and route optimization.',
    imageSrc: './bundee.png', // replace with actual image paths
    imageAlt: 'Screenshot of Bundee dashboard.',
    href: 'https://mybundee.com/',
  },
  {
    name: 'JuniorIT',
    description: 'The future of personalized learning. JuniorIT is an AI-powered platform transforming the education landscape by offering real-time assistance, interactive learning, and tailored support for students and educators.',
    imageSrc: './it.png', // replace with actual image paths
    imageAlt: 'Screenshot of JuniorIT platform.',
    href: 'https://www.juniorit.ai/',
  },
];

export default function CaseStudySection() {
  return (
    <div id="uxprojects" className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-12">Recent UI/UX Projects</h2>
        <div className="flex flex-col sm:flex-row justify-center space-y-12 sm:space-y-0 sm:space-x-8">
          {projects.map((project) => (
            <div
              key={project.name}
              className="group relative w-full sm:w-1/2 bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg"
              style={{ width: '500px', height: '500px', transition: 'all 0.3s ease' }}
            >
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200 lg:aspect-none">
                <img
                  src={project.imageSrc}
                  alt={project.imageAlt}
                  className="h-full w-full object-cover object-center"
                  style={{ width: '500px', height: '250px', transition: 'all 0.3s ease' }}
                />
              </div>
              <div className="p-6 text-left">
                <h3 className="text-lg font-bold text-gray-900">
                  <Link href={project.href} legacyBehavior>
                    <a>{project.name}</a>
                  </Link>
                </h3>
                <p className="mt-2 text-sm text-gray-500">{project.description}</p>
                <div className="mt-6">
                  <Link href={project.href} legacyBehavior>
                    <a className="inline-flex items-center border border-gray-300 rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-700 hover:text-white transition-colors duration-300">
                      View Case Study
                      <FaArrowRight className="ml-2 transition-transform transform group-hover:translate-x-1" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
