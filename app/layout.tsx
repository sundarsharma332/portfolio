import { Inter } from "next/font/google";
import "./globals.css";
import Head from "./head";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Analytics } from '@vercel/analytics/react';


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <Head />
            <body className={`${inter.className} flex flex-col h-screen justify-between`}>
                <Navbar />
                {children}
                <Analytics />
                <Footer />
            </body>
        </html>
    );
}
