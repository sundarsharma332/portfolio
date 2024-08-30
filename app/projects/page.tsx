"use client"

import { useState } from "react";
import Link from "next/link";
import { FaArrowRight, FaGithub, FaGlobe } from "react-icons/fa";

const projects = [
    {
        id: 1,
        name: 'Bundee',
        description: 'A fleet management & booking solution with mobile apps, web app, admin, and host dashboard, featuring advanced fleet management functionalities like real-time vehicle tracking and route optimization.',
        imageSrc: './bundee.png', // replace with actual image paths
        imageAlt: 'Screenshot of Bundee dashboard.',
        githubHref: 'https://github.com/sundarsharma332/bundee', // replace with actual GitHub URL if available
        demoHref: 'https://mybundee.com/', // replace with actual live demo URL
        status: 'Live Demo',
        badgeColor: 'bg-green-100 text-green-800',
        technologies: ['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'Flutter', 'iOS', 'Android'],
    },
    {
        id: 2,
        name: 'JuniorIT',
        description: 'The future of personalized learning. JuniorIT is an AI-powered platform transforming the education landscape by offering real-time assistance, interactive learning, and tailored support for students and educators.',
        imageSrc: './it.png', // replace with actual image paths
        imageAlt: 'Screenshot of JuniorIT platform.',
        githubHref: 'https://github.com/sundarsharma332/juniorit', // replace with actual GitHub URL if available
        demoHref: 'https://www.juniorit.ai/', // replace with actual live demo URL
        status: 'Live Demo',
        badgeColor: 'bg-green-100 text-green-800',
        technologies: ['Python', 'Flask', 'Strapi API', 'LLMs', 'Flutter', 'Socket.io', 'React', 'Next.js', 'HTML', 'CSS'],
    },
    {
        id: 3,
        name: 'QuickLinks',
        description: 'A session-based link bookmark project demonstrating JavaScript, HTML, CSS, and logic building.',
        imageSrc: 'https://images.pexels.com/photos/3380743/pexels-photo-3380743.jpeg?auto=compress&cs=tinysrgb&w=600',
        imageAlt: 'Screenshot of QuickLinks project.',
        githubHref: 'https://github.com/sundarsharma332/links',
        demoHref: 'https://sundarsharma332.github.io/links/',
        status: 'Live Demo',
        badgeColor: 'bg-green-100 text-green-800',
        technologies: ['HTML', 'CSS', 'JavaScript', 'Tailwind', 'Session Management', 'Local Storage API'],
    },
    {
        id: 4,
        name: 'QuickNotes',
        description: 'A session-based quick note-taking app, showcasing JavaScript, HTML, CSS, and logic building. Completed demo available.',
        imageSrc: 'https://images.pexels.com/photos/212286/pexels-photo-212286.jpeg?auto=compress&cs=tinysrgb&w=600',
        imageAlt: 'Screenshot of QuickNotes project.',
        githubHref: 'https://github.com/sundarsharma332/Quicknotes',
        demoHref: 'https://quicknotesv1.tiiny.site/#',
        status: 'Live Demo',
        badgeColor: 'bg-green-100 text-green-800',
        technologies: ['HTML', 'CSS', 'JavaScript', 'Tailwind', 'Session Management', 'Local Storage API'],
    },
    {
        id: 5,
        name: 'JuniorIT Mobile Application',
        description: 'The ongoing development of a mobile application as part of the JuniorIT platform, aimed at enhancing personalized learning through AI-powered features.',
        imageSrc: 'https://images.pexels.com/photos/3912481/pexels-photo-3912481.jpeg?auto=compress&cs=tinysrgb&w=600',
        imageAlt: 'Screenshot of JuniorIT Mobile Application.',
        status: 'Ongoing',
        badgeColor: 'bg-yellow-100 text-yellow-800',
        technologies: ['Flutter', 'Socket.io', 'Python', 'Flask', 'Strapi API', 'LLMs', 'AI'],
    },
    {
        id: 6,
        name: 'InfeeAI',
        description: 'An ongoing research tool project powered by AI, designed to streamline and enhance research workflows.',
        imageSrc: 'https://images.pexels.com/photos/5726794/pexels-photo-5726794.jpeg?auto=compress&cs=tinysrgb&w=600',
        imageAlt: 'Screenshot of InfeeAI project.',
        status: 'Ongoing',
        badgeColor: 'bg-yellow-100 text-yellow-800',
        technologies: ['Node.js', 'Express', 'Firebase', 'Flutter', 'Next.js', 'React', 'TypeScript', 'HTML', 'CSS', 'JavaScript', 'LLMs'],
    },
];

export default function ProjectsPage() {
    const [activeTab, setActiveTab] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");

    const filteredProjects = projects.filter((project) => {
        const matchesSearch = project.technologies.some((tech) =>
            tech.toLowerCase().includes(searchTerm.toLowerCase())
        );
        const matchesTab =
            activeTab === "All" ||
            (activeTab === "Development" && project.technologies.includes("JavaScript")) ||
            (activeTab === "Design" && project.technologies.includes("Design"));
        return matchesSearch && matchesTab;
    });

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-16 lg:px-8 text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">Projects</h2>
                <div className="mb-8 flex justify-center space-x-4">
                    <button
                        className={`text-sm font-medium ${activeTab === "All" ? "text-indigo-600" : "text-gray-600"}`}
                        onClick={() => setActiveTab("All")}
                    >
                        All
                    </button>
                    <button
                        className={`text-sm font-medium ${activeTab === "Development" ? "text-indigo-600" : "text-gray-600"}`}
                        onClick={() => setActiveTab("Development")}
                    >
                        Development
                    </button>
                    <button
                        className={`text-sm font-medium ${activeTab === "Design" ? "text-indigo-600" : "text-gray-600"}`}
                        onClick={() => setActiveTab("Design")}
                    >
                        Design
                    </button>
                </div>
                <div className="mb-8">
                    <input
                        type="text"
                        placeholder="Search by technology..."
                        className="border rounded-lg px-4 py-2 text-sm w-full max-w-sm"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="flex flex-wrap justify-center gap-8 sm:gap-8 lg:gap-8">
                    {filteredProjects.map((project) => (
                        <div
                            key={project.name}
                            className="group bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg"
                            style={{ width: '500px', height: '600px', transition: 'all 0.3s ease' }}
                        >
                            <div className="w-full bg-gray-200" style={{ height: '200px', overflow: 'hidden' }}>
                                <img
                                    src={project.imageSrc}
                                    alt={project.imageAlt}
                                    className="h-full w-full object-cover object-center"
                                    style={{ transition: 'all 0.3s ease' }}
                                />
                            </div>
                            <div className="p-6 text-left">
                                <h3 className="text-lg font-bold text-gray-900">
                                    <Link href={project.githubHref || '#'} legacyBehavior>
                                        <a target="_blank" rel="noopener noreferrer">{project.name}</a>
                                    </Link>
                                </h3>
                                <p className="mt-2 text-sm text-gray-500">{project.description}</p>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="inline-block rounded-full px-3 py-1 text-xs font-medium text-gray-800 bg-white border border-gray-300"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <span
                                    className={`inline-block mt-4 rounded-full px-3 py-1 text-xs font-medium ${project.badgeColor}`}
                                >
                                    {project.status}
                                </span>
                                {project.status === 'Live Demo' && (
                                    <div className="mt-4 flex space-x-4">
                                        {project.githubHref && (
                                            <Link href={project.githubHref} legacyBehavior passHref>
                                                <a target="_blank" rel="noopener noreferrer">
                                                    <FaGithub className="h-5 w-5 text-gray-700 hover:text-gray-900" />
                                                </a>
                                            </Link>
                                        )}
                                        {project.demoHref && (
                                            <Link href={project.demoHref} legacyBehavior passHref>
                                                <a target="_blank" rel="noopener noreferrer">
                                                    <FaGlobe className="h-5 w-5 text-gray-700 hover:text-gray-900" />
                                                </a>
                                            </Link>
                                        )}
                                    </div>
                                )}
                                <div className="mt-6">
                                    <Link href={`/projects/${project.id}`} legacyBehavior passHref>
                                        <a
                                            className="inline-flex items-center border border-gray-300 rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-700 hover:text-white transition-colors duration-300"
                                        >
                                            View Case Study
                                            <FaArrowRight className="ml-2 transition-transform transform group-hover:translate-x-1" />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-12">
                    <Link href="https://github.com/sundarsharma332" legacyBehavior passHref>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block text-lg font-bold text-indigo-600 hover:text-indigo-900 transition-colors duration-300"
                        >
                            See more on GitHub
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
}
