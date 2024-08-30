import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-gray-50 py-10 sm:py-16 lg:py-6">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="flex flex-col items-center sm:flex-row sm:justify-between">
                    <div className="text-center sm:text-left">
                        <Link href="/" className="text-lg font-semibold text-gray-900">
                            srsuiuxdesign.live
                        </Link>
                        <p className="mt-2 text-sm text-gray-600">
                            © Copyright 2024 𓆩❤️𓆪 Sundar Raj Sharma. All rights reserved.
                        </p>
                    </div>
                    <div className="mt-6 sm:mt-0">
                        <nav className="flex space-x-6 justify-center">
                            <Link href="/projects" className="text-sm text-gray-600 hover:text-gray-900">
                                Projects
                            </Link>
                            <Link href="/case-studies" className="text-sm text-gray-600 hover:text-gray-900">
                                Case Studies
                            </Link>
                            <Link href="/skills" className="text-sm text-gray-600 hover:text-gray-900">
                                Skills
                            </Link>
                            <Link href="/contact" className="text-sm text-gray-600 hover:text-gray-900">
                                Contact
                            </Link>
                        </nav>
                    </div>
                </div>
                <hr className="mt-10 mb-10 border-gray-200" />
            </div>
        </footer>
    );
};

export default Footer;
