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
        "id": 1,
        "name": "Bundee",
        "description": "A revolutionary fleet management and booking solution designed to transform the way fleet owners manage their operations and how users book vehicles.",
        "headings": [
            "Introduction: How It All Began 🌱",
            "The Client’s Vision: The Good, The Bad, and The Ugly 🎯",
            "Early Challenges: Swimming in the Deep End 🌊",
            "Designing the Experience: Making It Happen 🎨",
            "Overcoming Obstacles: The Insurance Module Dilemma 🔧",
            "Taking Charge: From Designer to Leader 🦸‍♂️",
            "Reflecting on the Journey: What I Learned 🧠",
            "Conclusion: The Legacy of Bundee 🎖️"
        ],
        "images": [
            { "src": "https://via.placeholder.com/150", "alt": "Bundee Dashboard" },
            { "src": "https://via.placeholder.com/150", "alt": "Booking Interface" },
            { "src": "https://via.placeholder.com/150", "alt": "Real-time Tracking" }
        ],
        "details": {
            "Introduction: How It All Began 🌱": "When I first took on Bundee, I thought it was just another project—something to add to my portfolio. But as it turns out, Bundee became much more than that. It pushed me, tested my patience, and taught me lessons I didn’t even know I needed to learn. This is the story of how I navigated the ups and downs of building a cross-platform app that does more than just rent vehicles—it makes the whole process easier with built-in insurance options, trip management, and everything in between.",
            "The Client’s Vision: The Good, The Bad, and The Ugly 🎯": "So, here’s the deal: the client had a clear vision. They wanted an app that would let users rent vehicles, add insurance on the go, manage their trips, and handle everything seamlessly. Sounds simple enough, right? Well, not exactly. The client was ambitious—really ambitious. They wanted everything done fast, and they expected it to be perfect on the first try. But they also weren’t always clear about what they wanted, which made things tricky.",
            "Early Challenges: Swimming in the Deep End 🌊": "From the get-go, the biggest challenge was time—or rather, the lack of it. The client seemed to think that design was something that could be knocked out in a week or two. They wanted everything ASAP, but design isn’t just about slapping something together. It takes time, especially when you’re trying to do it right.",
            "Designing the Experience: Making It Happen 🎨": "Once I had a handle on things, it was time to get into the nitty-gritty of design. The first step was mapping out the user flow based on what little direction I had. This was a critical moment—I knew that if I got the foundation wrong, everything else would fall apart.",
            "Overcoming Obstacles: The Insurance Module Dilemma 🔧": "One of the hardest parts of the project was the insurance module. The client knew what they wanted, but they couldn’t explain it clearly. I was left trying to figure out how to make something work without much guidance—and it was a nightmare.",
            "Taking Charge: From Designer to Leader 🦸‍♂️": "As the project went on, it became clear that we were running out of time. The client’s constant changes, combined with the complexity of the design, meant we were at risk of missing our deadlines. And that’s when I knew I had to step up.",
            "Reflecting on the Journey: What I Learned 🧠": "Looking back, Bundee wasn’t just a project—it was a crash course in what it takes to be a great designer and a strong leader. There were moments of doubt, frustration, and even exhaustion. But there were also moments of triumph, growth, and a deep sense of accomplishment.",
            "Conclusion: The Legacy of Bundee 🎖️": "Bundee was tough, no doubt about it. But it was also one of the most rewarding projects I’ve ever worked on. It taught me more than I ever could have imagined—not just about design, but about myself. I learned that I’m capable of more than I thought, that I can lead a team, and that I can push through even when things get tough."
        }
    }
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