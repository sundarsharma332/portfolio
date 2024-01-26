"use cleint"


import Link from 'next/link';

export default function HeroSection() {
    return (
        <div className="bg-white shadow-lg mx-4 my-4 sm:mx-24 sm:my-24 rounded-lg">
            <div className="relative isolate px-6 pt-4 lg:px-16">
                <div className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true"></div>
                <div className="mx-auto max-w-7xl py-12 sm:py-12 lg:py-12">
                    <div className="sm:mb-8 sm:flex sm:justify-center">
                        <div className="rounded px-3 text-sm">
                            <img className='h-[300px] rounded-xl' src="./srs.jpg" alt="DesignersLife" />
                        </div>
                    </div>
                    <div className="text-center mt-4">
                        <p>Hi, Thanks for Visiting my Portfolio</p>
                        <h1 className="text-4xl font-bold tracking-tight text-black sm:text-6xl">
                            I am Sundar Raj Sharma.
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-700">
                            A 2021 graduate in computer science with a focus on designing web dashboards, iOS, and Android applications. My experiences extend to crafting intuitive and user-friendly interfaces for a variety of platforms.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Link href="#" className="rounded-md px-3.5 py-2.5 text-sm font-semibold bg-gray-100 text-black hover:bg-fuchsia-600 hover:text-white">
                                See Recent Projects
                            </Link>
                            <Link href="#" className="rounded-md px-3.5 py-2.5 text-sm font-semibold bg-gray-100 text-black hover:bg-black hover:text-white">
                                Download resume
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true"></div>
            </div>
        </div>
    );
}
