import Link from 'next/link';
import { SetStateAction, useEffect, useState } from 'react';

const HeroSection: React.FC = () => {
    const [bgColor, setBgColor] = useState<string>('');

    const handleMouseEnter = (color: SetStateAction<string>) => {
        setBgColor(color);
    };

    const handleMouseLeave = () => {
        setBgColor('');
    };

    useEffect(() => {
        const elements = document.querySelectorAll('.animated-element');
        elements.forEach((el) => {
            el.animate(
                [
                    { transform: 'scale(1)' },
                    { transform: 'scale(1.05)' },
                    { transform: 'scale(1)' },
                ],
                {
                    duration: 5000, // 5 seconds
                    iterations: Infinity,
                    easing: 'ease-in-out',
                }
            );
        });
    }, []);

    return (
        <div className="relative flex items-center justify-center min-h-[70vh] overflow-hidden" style={{ backgroundColor: bgColor }}>
            <div className="text-center max-w-lg px-4">
                <h1 className="text-6xl font-bold tracking-wide text-gray-900 sm:text-8xl flex justify-center">
                    <span
                        className="inline-block bg-red-400 text-white w-20 h-20 flex items-center justify-center mx-1 rounded-lg cursor-pointer"
                        onMouseEnter={() => handleMouseEnter('#f87171')}
                        onMouseLeave={handleMouseLeave}
                    >
                        S
                    </span>
                    <span
                        className="inline-block bg-yellow-400 text-white w-20 h-20 flex items-center justify-center mx-1 rounded-lg cursor-pointer"
                        onMouseEnter={() => handleMouseEnter('#fbbf24')}
                        onMouseLeave={handleMouseLeave}
                    >
                        u
                    </span>
                    <span
                        className="inline-block bg-green-400 text-white w-20 h-20 flex items-center justify-center mx-1 rounded-lg cursor-pointer"
                        onMouseEnter={() => handleMouseEnter('#34d399')}
                        onMouseLeave={handleMouseLeave}
                    >
                        n
                    </span>
                    <span
                        className="inline-block bg-blue-400 text-white w-20 h-20 flex items-center justify-center mx-1 rounded-lg cursor-pointer"
                        onMouseEnter={() => handleMouseEnter('#60a5fa')}
                        onMouseLeave={handleMouseLeave}
                    >
                        d
                    </span>
                    <span
                        className="inline-block bg-indigo-400 text-white w-20 h-20 flex items-center justify-center mx-1 rounded-lg cursor-pointer"
                        onMouseEnter={() => handleMouseEnter('#818cf8')}
                        onMouseLeave={handleMouseLeave}
                    >
                        a
                    </span>
                    <span
                        className="inline-block bg-purple-400 text-white w-20 h-20 flex items-center justify-center mx-1 rounded-lg cursor-pointer"
                        onMouseEnter={() => handleMouseEnter('#c084fc')}
                        onMouseLeave={handleMouseLeave}
                    >
                        r
                    </span>
                </h1>
                <p className="mt-6 text-2xl text-gray-600 leading-snug">
                    Transforming ideas into impactful digital experiences. Let’s collaborate to create something extraordinary.
                </p>
                <div className="mt-8 animated-element">
                    <Link
                        href="#"
                        className="inline-block rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 px-8 py-4 text-center font-bold text-white transition-all duration-500"
                    >
                        See Recent Projects
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
