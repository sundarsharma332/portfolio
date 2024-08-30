import { useState, useEffect } from "react";
import Link from "next/link";
import { FaLinkedin, FaStar } from "react-icons/fa";

const testimonials = [
    {
        id: 1,
        quote: "“Working with this team was an incredible experience. The UX research, design, and development were top-notch, resulting in a seamless mobile app, web app, and admin dashboard. The visuals were exceptional, and the attention to detail was evident in every aspect of the project.”",
        name: "Gregg Hansen",
        position: "CEO of Bundee and Flux Group",
        image: "https://media.licdn.com/dms/image/v2/C4E03AQEFMg-Eaxnmww/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1588089378681?e=1730332800&v=beta&t=ExocxvSB4LhcNgIjRnNYeXFPs19nd1rg2vVjuxvPKTc",
        duration: "1 year",
        project: "UX Research, Design, Development, Mobile App, Web App, and Admin Dashboard",
        linkedin: "https://www.linkedin.com/in/gregghansen/",
        projectLink: "/projects/bundee",
    },
    {
        id: 2,
        quote: "“The team did an excellent job on Bundee, particularly in UX and development. Their expertise in fleet management systems is outstanding, and their attention to detail ensured a high-quality product that met all of our needs.”",
        name: "Umesh Murthy",
        position: "Co-Founder/CIO",
        image: "https://media.licdn.com/dms/image/v2/C4D03AQE3vyd9-ZPGog/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1516253727495?e=1730332800&v=beta&t=nZ_NJfjNWXfmQS0zL5HEpaz9wiHjCPsPRiPb9dM4SSU",
        duration: "1 year",
        project: "Bundee, Fleet Management. UX, Development",
        linkedin: "https://www.linkedin.com/in/umesh-murthy/",
        projectLink: "/projects/bundee",
    },
    {
        id: 3,
        quote: "“Their work on Bundee was exceptional, especially in terms of UX and development. The team's ability to understand complex requirements and deliver a user-friendly solution was impressive.”",
        name: "Eric Rasanayagam",
        position: "Co-Founder and Head of Engineering",
        image: "https://media.licdn.com/dms/image/v2/C5603AQHR4A1d7NzuzA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1516257628929?e=1730332800&v=beta&t=VQ2xMPsGBwcoiCP8Jf_13J_Fn6Pw0B5O-DoDSmd2Kfo",
        duration: "1 year",
        project: "Bundee, Fleet Management. UX, Development",
        linkedin: "https://www.linkedin.com/in/ericrasanayagam/",
        projectLink: "/projects/bundee",
    },
    {
        id: 4,
        quote: "“Their comprehensive work across multiple projects, including Bundee, ThirdEye, HRMS, and School360, was nothing short of exceptional. The team's ability to manage and deliver on complex requirements made them an invaluable partner.”",
        name: "Prasadtsp",
        position: "CEO Dimension64, Founder/Director Sarvaantar AI",
        image: "https://media.licdn.com/dms/image/v2/C5603AQGq4lfa7y6a8g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1518154953598?e=1730332800&v=beta&t=jxEWF38-Cp6gvVfLKwcid-RfEpC9TzzwdyJK13D1cms",
        duration: "1.7 years",
        project: "Bundee, ThirdEye, HRMS, School360, + More",
        linkedin: "https://www.linkedin.com/in/prasadtsp/",
        projectLink: "/projects/bundee", // Example link to project details page
    },
];


export default function ClientTestimonials() {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTestimonial((prev) =>
                prev === testimonials.length - 1 ? 0 : prev + 1
            );
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const testimonial = testimonials[currentTestimonial];

    return (
        <section className="relative overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-4xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-10">
                    What My Clients Say?
                </h2>
                {testimonial && (
                    <figure className="flex flex-col items-center justify-center">
                        <img
                            alt={testimonial.name}
                            src={testimonial.image}
                            className="h-24 w-24 rounded-full mb-6"
                        />
                        <blockquote className="text-center font-medium leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                            <p>{testimonial.quote}</p>
                        </blockquote>
                        <div className="mt-4 flex justify-center">
                            {[...Array(5)].map((_, index) => (
                                <FaStar key={index} className="h-5 w-5 text-yellow-500" />
                            ))}
                        </div>
                        <figcaption className="mt-8 text-center">
                            <div className="text-lg font-semibold text-gray-900">
                                {testimonial.name}
                            </div>
                            <div className="text-gray-600">
                                {testimonial.position}
                            </div>
                            <div className="text-gray-600 mt-2">
                                {testimonial.duration}
                            </div>
                            <div className="text-gray-600 mt-1">
                                Project: <Link href={testimonial.projectLink} className="text-indigo-600 hover:text-indigo-900">{testimonial.project}</Link>
                            </div>
                            <div className="mt-4 flex justify-center">
                                <Link href={testimonial.linkedin} target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin className="h-6 w-6 text-indigo-600 hover:text-indigo-900" />
                                </Link>
                            </div>
                        </figcaption>
                    </figure>
                )}
                <div className="mt-8 flex justify-center space-x-3">
                    {testimonials.map((t, index) => (
                        <button
                            key={t.id}
                            onClick={() => setCurrentTestimonial(index)}
                            className={`h-2 w-2 rounded-full ${currentTestimonial === index ? 'bg-indigo-600 border-2 border-indigo-900' : 'bg-gray-300'}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}