// app/projects/[id]/page.tsx

'use client'; // Ensure this component is treated as a client component

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

type Project = {
    id: number;
    name: string;
    description: string;
    headings: string[];
    images: { src: string; alt: string }[];
    details: {
        [key: string]: string;
    };
};

const projects: Project[] = [
    {
        id: 1,
        name: 'Bundee',
        description: 'A revolutionary fleet management and booking solution designed to transform the way fleet owners manage their operations and how users book vehicles.',
        headings: ['Introduction', 'Design Process', 'Wireframes', 'Prototyping and Testing', 'Development', 'Testing', 'Deployment'],
        images: [
            { src: 'https://via.placeholder.com/150', alt: 'Bundee Dashboard' },
            { src: 'https://via.placeholder.com/150', alt: 'Booking Interface' },
            { src: 'https://via.placeholder.com/150', alt: 'Real-time Tracking' }
        ],
        details: {
            "Introduction": "Bundee is a revolutionary fleet management and booking solution designed to transform the way fleet owners manage their operations and how users book vehicles. The platform offers a comprehensive suite of features including real-time vehicle tracking, route optimization, maintenance scheduling, and a user-friendly booking interface.",
            "Design Process": "1. User Research: Conducted extensive user interviews and surveys to understand the pain points in current fleet management systems and user expectations for booking vehicles.\n2. Competitive Analysis: Analyzed existing solutions in the market to identify gaps and opportunities for innovation.\n3. Wireframing: Created low-fidelity wireframes to outline the basic structure and flow of the application.",
            "Wireframes": "Created low-fidelity wireframes to outline the basic structure and flow of the application.",
            "Prototyping and Testing": "Developed high-fidelity prototypes in Figma, incorporating user feedback and iterating on the designs.\nConducted multiple rounds of usability testing to ensure the interface was intuitive and efficient.",
            "Development": "Developed the mobile apps for iOS and Android using Flutter, ensuring a consistent user experience across platforms.\nBuilt the web application using React.js and Node.js, integrating geolocation APIs for real-time tracking and machine learning models for predictive analytics.",
            "Testing": "Conducted multiple rounds of usability testing to ensure the interface was intuitive and efficient.",
            "Deployment": "Deployed the application to production, ensuring scalability and performance."
        }
    },
    // Add more projects as needed
];

export default function ProjectDetailsPage() {
    const pathname = usePathname();
    const id = pathname?.split('/').pop(); // Extract the id from the pathname
    const [project, setProject] = useState<Project | null>(null);

    useEffect(() => {
        if (id) {
            const foundProject = projects.find((p) => p.id === parseInt(id));
            setProject(foundProject || null);
        }
    }, [id]);

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-16 lg:px-8 text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">{project.name}</h2>
                <div className="p-6 text-left">
                    <p className="mt-2 text-sm text-gray-500">{project.description}</p>
                    {project.headings.map((heading, index) => (
                        <div key={index} className="mt-4">
                            <h1 className="text-2xl font-bold">{heading}</h1>
                            <p className="mt-2 text-sm text-gray-500">{project.details[heading]}</p>
                        </div>
                    ))}
                    <div className="mt-4 flex flex-wrap gap-4">
                        {project.images.map((image, index) => (
                            <img
                                key={index}
                                src={image.src}
                                alt={image.alt}
                                className="h-40 w-40 object-cover object-center"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}