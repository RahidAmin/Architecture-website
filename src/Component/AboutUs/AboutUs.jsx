import React, { useEffect, useState } from 'react';

import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
    const [teamMembers, setTeamMembers] = useState([]);
    useEffect(() => {
        fetch('https://api.simplesymmetry-bd.com/members').then(res => res.json()).then(data => {
            setTeamMembers(data);
        }
        )
    }, [])


    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with animation duration
    }, []);


    return (
        <div className="min-h-screen flex flex-col items-center bg-gray-50 text-gray-800 overflow-hidden">
            {/* Hero Section */}
            <section className="w-full bg-gray-100 py-16 text-center">
                <h1 className="text-4xl font-bold mb-4">About Us</h1>
                <p className="text-lg text-gray-600">Lorem ipsum dolor sit amet.</p>
            </section>

            {/* About Content Section */}
            <section className="w-full max-w-6xl px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div data-aos="fade-right">
                    <h2 className="text-2xl font-bold mb-4">Who We Are</h2>

                    <p className="text-gray-600 leading-relaxed">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa exercitationem consequatur at ipsum voluptatum illum!
                    </p>
                </div>
                <div className="flex justify-center" data-aos="fade-left">
                    <img
                        src="https://i.ibb.co.com/TLFZLYD/unnamed.jpg"
                        alt="About us"
                        className="rounded-lg shadow-lg max-w-full"
                    />
                </div>
            </section>

            {/* Team Section */}
            <div className="w-full bg-gray-100 py-12 text-center">
                <h2 className="text-2xl font-bold mb-8">Meet Our Team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
                    {teamMembers.map((member, index) => (
                        <div className='w-full h-auto flex flex-wrap justify-center' key={index} data-aos="zoom-in-up">
                            <div className='w-46 flex flex-col items-center mb-12 relative group'>
                                <img className='w-52 h-52 rounded-full' src={member.image} alt="" />
                                <p className='text-base font-semibold pt-2'>{member.name}</p>
                                <p className='text-sm font-semibold'>{member.designation}</p>
                                {/* <p className='font-semibold'>{member.description}</p> */}
                                {
                                    member.description && (
                                        <div className="absolute top-[-98px] left-0 right-0 bg-black bg-opacity-80 text-white text-sm font-semibold flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2 rounded-t-lg">
                                            {member.description}
                                        </div>
                                    )
                                }

                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    );
};

export default AboutUs;

