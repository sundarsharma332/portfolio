"use client"

import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Skills', href: '/skills' },
    { name: 'Contact', href: '/contact' },
    { name: 'More', href: '/more' },
];

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    return (
        <header className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 h-[80px] rounded-full border-4">
            <nav
                className="flex items-center justify-between h-full px-4 lg:px-8 bg-white/30 backdrop-blur-md rounded-full shadow-md border-3 border-gradient"
                aria-label="Global"
            >
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <svg
                            width="40"
                            height="40"
                            viewBox="0 0 97 84"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {/* SVG Content */}
                        </svg>
                    </Link>
                </div>
                <div className="hidden lg:flex lg:gap-x-6">
                    {navigation.map((item) => (
                        <Link key={item.name} href={item.href}
                            className={`text-sm font-semibold leading-6 px-4 py-2 rounded-lg ${pathname === item.href
                                ? 'bg-gradient-to-r from-fuchsia-600 to-blue-600 text-white'
                                : 'text-gray-900 hover:bg-gray-100'
                                }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
                <div className="lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
            </nav>

            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-50" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <svg
                                width="40"
                                height="40"
                                viewBox="0 0 97 84"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                {/* SVG Content */}
                            </svg>
                        </Link>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <Link key={item.name} href={item.href}
                                        className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${pathname === item.href
                                            ? 'bg-gradient-to-r from-fuchsia-600 to-blue-600 text-white'
                                            : 'text-gray-900 hover:bg-gray-100'
                                            }`}
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    );
}