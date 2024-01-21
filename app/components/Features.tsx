import Link from "next/link";
import React from "react";

const Features = () => {
    return (
        <div>
            <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid items-stretch gap-y-10 md:grid-cols-2 md:gap-x-20">
                        <div className="relative grid grid-cols-2 gap-6 mt-10 md:mt-0">
                            <div className="overflow-hidden aspect-w-3 aspect-h-4">
                                <img
                                    className="object-cover object-top origin-top scale-150"
                                    src="https://cdn.rareblocks.xyz/collection/celebration/images/features/2/team-work.jpg"
                                    alt=""
                                />
                            </div>

                            <div className="relative">
                                <div className="h-full overflow-hidden aspect-w-3 aspect-h-4">
                                    <img
                                        className="object-cover scale-150 lg:origin-bottom-right"
                                        src="https://cdn.rareblocks.xyz/collection/celebration/images/features/2/woman-working-on-laptop.jpg"
                                        alt=""
                                    />
                                </div>

                                <div className="absolute inset-0 grid w-full h-full place-items-center">
                                    <button
                                        type="button"
                                        className="inline-flex items-center justify-center w-12 h-12 text-blue-600 bg-white rounded-full shadow-md lg:w-20 lg:h-20"
                                    >
                                        <svg
                                            className="w-6 h-6 lg:w-8 lg:h-8"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                        >
                                            <path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div className="absolute -translate-x-1/2 left-1/2 -top-16">
                                <img
                                    className="w-32 h-32"
                                    src="https://cdn.rareblocks.xyz/collection/celebration/images/features/2/round-text.png"
                                    alt=""
                                />
                            </div>
                        </div>

                        <div className="flex flex-col items-start xl:px-16">
                            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                                Let's Shape your idea into reality.
                            </h2>
                            <p className="mt-4 text-base leading-relaxed text-gray-600">
                            As a UI/UX designer, I transform ideas into user-friendly designs. I blend intuitive interfaces with practical functionality, focusing on your needs and user engagement. Let's create something unique and effective together.
                            </p>

                            <Link
                                href="#"
                                title=""
                                className="inline-flex items-center justify-center px-5 py-4 mt-8 text-base font-semibold text-white transition-all duration-200 rounded-md hover:opacity-90 focus:opacity-90 bg-gradient-to-r from-fuchsia-600 to-blue-600"
                                role="button"
                            >
                                Get started now

                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Features;
