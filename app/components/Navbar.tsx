"use client"

import { useState, useEffect } from 'react';
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
    const [isOverflowing, setIsOverflowing] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const checkOverflow = () => {
            const navbar = document.getElementById('main-navbar');
            if (navbar) {
                setIsOverflowing(navbar.scrollWidth > navbar.clientWidth);
            }
        };

        checkOverflow();
        window.addEventListener('resize', checkOverflow);
        return () => window.removeEventListener('resize', checkOverflow);
    }, []);

    // Function to determine if the current route matches the link's href
    const isActive = (href: string) => {
        if (href === '/') {
            return pathname === href; // Only return true if pathname is exactly '/'
        }
        return pathname.startsWith(href); // Return true if pathname starts with the href
    };

    return (
        <>
            {isOverflowing && (
                <div className="fixed top-0 left-0 right-0 bg-yellow-100 text-yellow-800 p-2 text-center text-sm z-50">
                    For better viewing experience, set zoom to 80%-100%
                </div>
            )}
            <header className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-40">
                <nav
                    id="main-navbar"
                    className="flex items-center justify-center h-14 px-4 bg-white/30 backdrop-blur-md rounded-full shadow-md border border-gray-200"
                    aria-label="Global"
                >
                    <div className="flex items-center space-x-1 sm:space-x-2">
                        {navigation.map((item) => (
                            <Link key={item.name} href={item.href}
                                className={`text-xs sm:text-sm font-medium px-2 py-1 rounded-full transition-colors duration-200 whitespace-nowrap ${isActive(item.href)
                                    ? 'bg-gradient-to-r from-fuchsia-600 to-blue-600 text-white'
                                    : 'text-gray-700 hover:bg-gray-100'
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </nav>
            </header>

            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-50" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <svg
                                width="32"
                                height="32"
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
                                        className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${isActive(item.href)
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
        </>
    );
}
