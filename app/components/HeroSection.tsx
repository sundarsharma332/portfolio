
"user client"


import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const navigation = [

    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Education', href: '/education' },
    { name: 'Projects', href: '/Projects' },
    { name: 'Resume', href: '/resume' },
]

export default function HeroSection() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className="bg-white">
            {/* <header className="fixed border-b-2 bg-white inset-x-0 top-0 z-50">
                <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <Link href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <svg width="64" height="64" viewBox="0 0 97 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clip-rule="evenodd" d="M27.548 0.00646142C19.2836 0.00646142 12.2543 2.97212 7.32673 8.38007C2.4444 13.7299 0 21.0568 0 29.1655C0 43.2507 7.178 54.4737 16.296 63.2027C25.3752 71.8929 36.7953 78.5026 46.2496 83.4454C46.9405 83.8075 47.7086 83.9977 48.4887 84C49.2689 84.0022 50.0381 83.8164 50.731 83.4583C60.1917 78.5672 71.6054 71.9058 80.6911 63.1704C89.8091 54.4155 97 43.1538 97 29.1655C97 21.0245 94.5427 13.704 89.6539 8.35423C84.7198 2.95919 77.6905 0 69.452 0C62.4939 0 56.7385 2.57799 52.3606 7.43675C50.8649 9.12099 49.5694 10.9726 48.5 12.9545C47.4306 10.9726 46.1351 9.12099 44.6394 7.43675C40.2615 2.57799 34.5061 0.00646142 27.548 0.00646142Z" fill="url(#paint0_linear_473_1215)" />
                                <path d="M36.6534 37.0639L30.2827 37.456C30.1738 36.9115 29.9396 36.4214 29.5803 35.9858C29.2209 35.5393 28.7472 35.1854 28.1591 34.924C27.5819 34.6518 26.8904 34.5156 26.0845 34.5156C25.0064 34.5156 24.0971 34.7443 23.3565 35.2017C22.616 35.6482 22.2457 36.2472 22.2457 36.9986C22.2457 37.5975 22.4853 38.1039 22.9645 38.5178C23.4437 38.9316 24.2659 39.2637 25.4311 39.5142L29.9723 40.429C32.4117 40.9299 34.2304 41.7358 35.4283 42.8466C36.6262 43.9574 37.2251 45.4167 37.2251 47.2244C37.2251 48.8688 36.7405 50.3118 35.7713 51.5533C34.813 52.7947 33.4953 53.764 31.8182 54.4609C30.152 55.147 28.2299 55.4901 26.0518 55.4901C22.7304 55.4901 20.084 54.7985 18.1129 53.4155C16.1527 52.0215 15.0038 50.1267 14.6662 47.7308L21.5107 47.3714C21.7176 48.3842 22.2185 49.1574 23.0135 49.6911C23.8085 50.2138 24.8267 50.4751 26.0682 50.4751C27.2879 50.4751 28.268 50.241 29.0085 49.7727C29.7599 49.2936 30.1411 48.6783 30.152 47.9268C30.1411 47.2952 29.8743 46.7779 29.3516 46.375C28.8288 45.9612 28.023 45.6454 26.9339 45.4276L22.5888 44.5618C20.1385 44.0717 18.3144 43.2223 17.1165 42.0135C15.9295 40.8047 15.3359 39.2637 15.3359 37.3906C15.3359 35.7789 15.7715 34.3904 16.6428 33.2251C17.5249 32.0599 18.7609 31.1615 20.3509 30.5298C21.9517 29.8982 23.8248 29.5824 25.9702 29.5824C29.1392 29.5824 31.633 30.2521 33.4517 31.5916C35.2813 32.9311 36.3485 34.7552 36.6534 37.0639ZM41.6071 55V29.9091H48.3535V34.2869H48.6149C49.0723 32.7296 49.84 31.5535 50.9181 30.7585C51.9963 29.9527 53.2377 29.5497 54.6426 29.5497C54.9911 29.5497 55.3668 29.5715 55.7697 29.6151C56.1726 29.6586 56.5266 29.7185 56.8315 29.7947V35.9695C56.5048 35.8714 56.0529 35.7843 55.4757 35.7081C54.8985 35.6319 54.3703 35.5938 53.8912 35.5938C52.8675 35.5938 51.9527 35.817 51.1468 36.2635C50.3519 36.6991 49.7202 37.3089 49.252 38.093C48.7946 38.8771 48.5659 39.781 48.5659 40.8047V55H41.6071ZM81.3058 37.0639L74.935 37.456C74.8261 36.9115 74.592 36.4214 74.2326 35.9858C73.8732 35.5393 73.3995 35.1854 72.8114 34.924C72.2343 34.6518 71.5427 34.5156 70.7369 34.5156C69.6587 34.5156 68.7494 34.7443 68.0089 35.2017C67.2683 35.6482 66.8981 36.2472 66.8981 36.9986C66.8981 37.5975 67.1377 38.1039 67.6168 38.5178C68.096 38.9316 68.9182 39.2637 70.0835 39.5142L74.6246 40.429C77.064 40.9299 78.8827 41.7358 80.0806 42.8466C81.2785 43.9574 81.8775 45.4167 81.8775 47.2244C81.8775 48.8688 81.3929 50.3118 80.4237 51.5533C79.4653 52.7947 78.1476 53.764 76.4705 54.4609C74.8043 55.147 72.8822 55.4901 70.7042 55.4901C67.3827 55.4901 64.7364 54.7985 62.7653 53.4155C60.805 52.0215 59.6561 50.1267 59.3185 47.7308L66.163 47.3714C66.3699 48.3842 66.8709 49.1574 67.6658 49.6911C68.4608 50.2138 69.479 50.4751 70.7205 50.4751C71.9402 50.4751 72.9203 50.241 73.6609 49.7727C74.4123 49.2936 74.7934 48.6783 74.8043 47.9268C74.7934 47.2952 74.5266 46.7779 74.0039 46.375C73.4812 45.9612 72.6753 45.6454 71.5863 45.4276L67.2411 44.5618C64.7908 44.0717 62.9667 43.2223 61.7688 42.0135C60.5818 40.8047 59.9883 39.2637 59.9883 37.3906C59.9883 35.7789 60.4239 34.3904 61.2951 33.2251C62.1772 32.0599 63.4132 31.1615 65.0032 30.5298C66.604 29.8982 68.4772 29.5824 70.6225 29.5824C73.7915 29.5824 76.2854 30.2521 78.104 31.5916C79.9336 32.9311 81.0008 34.7552 81.3058 37.0639Z" fill="white" />
                                <defs>
                                    <linearGradient id="paint0_linear_473_1215" x1="48.5" y1="0" x2="48.5" y2="84" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#D02F44" />
                                        <stop offset="1" stop-color="#9747FF" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </Link>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                    
                            <Link  href='#' className="bg-red-500 p-4 text-sm font-semibold leading-6 text-gray-900">
                            Home
                            </Link>
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <Link href="#" className="bg-gradient-to-r from-fuchsia-600 to-blue-600 p-4 text-sm font-semibold leading-6 text-white">
                        srsuiuxdesign@gmail.com <span aria-hidden="true">&rarr;</span>
                        </Link>
                    </div>
                </nav>
                <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <div className="fixed inset-0 z-50" />
                    <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <Link href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <img
                                    className="h-8 w-auto"
                                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                    alt=""
                                />
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
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                                <div className="py-6">
                                    <Link
                                        href="#"
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        srsuiuxdesign@gmail.com
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </header> */}

           

            <div className="relative isolate px-6 pt-0 lg:px-8">
                <div
                    className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    aria-hidden="true"
                >
                </div>
                <div className="mx-auto max-w-4xl py-12 sm:py-12 lg:py-12">
                    <div className="sm:mb-8 sm:flex sm:justify-center">
                        <div className="rounded px-3 text-sm">
                            <img className='h-[300px] rounded-xl' src="https://cdn.dribbble.com/users/729829/screenshots/2712522/galshir.gif" alt="DesignersLife" />
                        </div>
                    </div>
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                            I am Sundar Raj Sharma.
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            2021 Computer Science Graduate | Began Career in Product Development and Customer Feedback | Transitioned to Full-Time Creative UI/UX Design Expert
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">

                            <Link
                                href="#"
                                className="rounded-md px-3.5 py-2.5 text-sm font-semibold bg-gray-100 text-black hover:bg-fuchsia-600 hover:text-white">

                                See Projects

                            </Link>
                            <Link
                                href="#"
                                className="rounded-md px-3.5 py-2.5 text-sm font-semibold bg-gray-100 text-black hover:bg-indigo-700 hover:text-white">

                                About me

                            </Link>
                            <Link
                                href="#"
                                className="rounded-md px-3.5 py-2.5 text-sm font-semibold bg-gray-100 text-black hover:bg-green-600 hover:text-white">

                                Work

                            </Link>

                            <Link
                                href="#"
                                className="rounded-md px-3.5 py-2.5 text-sm font-semibold bg-gray-100 text-black hover:bg-orange-500 hover:text-white">

                                Download Resume

                            </Link>

                            
                            <Link
                                href="#"
                                className="rounded-md px-3.5 py-2.5 text-sm font-semibold bg-gray-100 text-black hover:bg-purple-600 hover:text-white">

                                Send Email

                            </Link>

                            

                        </div>
                    </div>
                </div>
                <div
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                    aria-hidden="true"
                >

                </div>
            </div>
        </div>
    )
}
