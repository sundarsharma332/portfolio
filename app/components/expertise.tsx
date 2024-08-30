import React from 'react';

interface ExpertiseItem {
    id: number;
    name: string;
    href: string;
    imageSrc: string;
    imageAlt: string;
    badges: string[];
    subtext: string;
}

const expertise: ExpertiseItem[] = [
    {
        id: 1,
        name: 'Brainstorm & Create',
        href: '#',
        imageSrc: './one.gif',
        imageAlt: 'Brainstorming ideas.',
        badges: ['Design', 'Collaboration', 'Creativity'],
        subtext: 'Generating ideas and laying the foundation for projects.',
    },
    {
        id: 2,
        name: 'Ideate and Design',
        href: '#',
        imageSrc: './two.png',
        imageAlt: 'Designing the ideas.',
        badges: ['Design', 'Planning', 'User Experience'],
        subtext: 'Turning concepts into tangible and effective designs.',
    },
    {
        id: 3,
        name: 'Development and Testing',
        href: '#',
        imageSrc: './three.gif',
        imageAlt: 'Development and testing process.',
        badges: ['Development', 'Testing', 'Quality Assurance'],
        subtext: 'Building and refining products to ensure quality and functionality.',
    },
];

const ExpertiseSection: React.FC = () => {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8 text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">Expertise I Hold</h2>

                <div className="flex flex-wrap justify-center">
                    {expertise.map((item) => (
                        <div
                            key={item.id}
                            className="group relative flex flex-col items-center text-center mx-4 my-4"
                            style={{ width: '300px', height: '400px' }}
                        >
                            <div className="w-full h-64 overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75">
                                <img
                                    alt={item.imageAlt}
                                    src={item.imageSrc}
                                    className="h-full w-full object-cover object-center"
                                />
                            </div>
                            <div className="mt-4">
                                <h3 className="text-lg font-bold text-gray-900">{item.name}</h3>
                                <p className="mt-2 text-sm text-gray-500">{item.subtext}</p>
                                <div className="mt-4 flex justify-center space-x-2">
                                    {item.badges.map((badge, index) => (
                                        <span
                                            key={index}
                                            className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800"
                                        >
                                            {badge}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ExpertiseSection;
