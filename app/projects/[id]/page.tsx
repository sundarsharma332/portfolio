// app/projects/[id]/page.tsx

'use client'; // Ensure this component is treated as a client component

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

type Project = {
    id: number;
    name: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
};

const projects: Project[] = [
    {
        id: 1,
        name: 'Project 1',
        description: 'This is the first project.',
        imageSrc: 'https://via.placeholder.com/150',
        imageAlt: 'Project 1',
    },
    {
        id: 2,
        name: 'Project 2',
        description: 'This is the second project.',
        imageSrc: 'https://via.placeholder.com/150',
        imageAlt: 'Project 2',
    },
    {
        id: 3,
        name: 'Project 3',
        description: 'This is the third project.',
        imageSrc: 'https://via.placeholder.com/150',
        imageAlt: 'Project 3',
    },
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
                <div className="w-full bg-gray-200" style={{ height: '250px', overflow: 'hidden' }}>
                    <img
                        src={project.imageSrc}
                        alt={project.imageAlt}
                        className="h-full w-full object-cover object-center"
                        style={{ transition: 'all 0.3s ease' }}
                    />
                </div>
                <div className="p-6 text-left">
                    <p className="mt-2 text-sm text-gray-500">{project.description}</p>
                </div>
            </div>
        </div>
    );
}