"use cleint"

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function HeroSection() {
    const [gradientDirection, setGradientDirection] = useState(45);

    useEffect(() => {
        const changeGradient = () => {
            setGradientDirection((prevDirection) => (prevDirection + 1) % 360);
        };
        const intervalId = setInterval(changeGradient, 100);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className={`relative shadow-xl mx-4 my-4 sm:mx-24 sm:my-24 rounded-lg overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-cyan-500 before:to-blue-500 before:animate-hueRotate`}>
            <div className="flex justify-center items-center px-6 pt-4 lg:px-16 lg:pt-24">
                <div className={`absolute inset-0 z-0 opacity-70 mix-blend-overlay before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 blur-lg transform scale-110 animate-gradientX-${gradientDirection}`} aria-hidden="true"></div>
                <div className="z-10 mx-auto max-w-7xl py-12 sm:py-12 lg:py-24">
                    <div className="sm:mb-8 sm:flex sm:justify-center lg:mb-16">
                        <div className="rounded-lg overflow-hidden">
                            <div className="relative group">
                                <img className='h-[300px] w-full object-cover transition duration-500 ease-out transform group-hover:scale-105' src="./srs.jpg" alt="DesignersLife" />
                                <div className="absolute inset-0 bg-[url('/path-to-dynamic-svg-shape.svg')] bg-cover bg-no-repeat opacity-50 mix-blend-mode-screen group-hover:opacity-75 transition-opacity duration-500"></div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-4">
                        <p className="text-lg text-white">Hi, Thanks for Visiting my Portfolio</p>
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                            I am Sundar Raj Sharma.
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-200">
                            A 2021 graduate in computer science with a focus on designing web dashboards, iOS, and Android applications. My experiences extend to crafting intuitive and user-friendly interfaces for a variety of platforms.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Link href="#" className="rounded-md px-3.5 py-2.5 text-sm font-semibold bg-black bg-opacity-50 text-white hover:bg-opacity-80">
                                See Recent Projects
                            </Link>
                            <Link href="#" className="rounded-md px-3.5 py-2.5 text-sm font-semibold bg-black bg-opacity-50 text-white hover:bg-opacity-80">
                                Download Resume
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                @keyframes hueRotate {
                    from {
                        filter: hue-rotate(0deg);
                    }
                    to {
                        filter: hue-rotate(360deg);
                    }
                }
                .animate-hueRotate {
                    animation: hueRotate 10s infinite linear;
                }
                @keyframes gradientX-${gradientDirection} {
                    0% {
                        background-position: ${gradientDirection}%;
                    }
                    50% {
                        background-position: ${100 - gradientDirection}%;
                    }
                    100% {
                        background-position: ${gradientDirection}%;
                    }
                }
            `}</style>
        </div>
    );
}
