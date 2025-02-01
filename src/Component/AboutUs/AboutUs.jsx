import React, { useEffect, useState } from 'react';



const AboutUs = () => {
    const [teamMembers, setTeamMembers] = useState([]);
    useEffect(() => {
        fetch('https://artchitecture-website-server.onrender.com/members').then(res => res.json()).then(data => {
            setTeamMembers(data);
        }
        )
    }, [])
    return (
        <div className="flex flex-col items-center bg-gray-50 text-gray-800">
            {/* Hero Section */}
            <section className="w-full bg-gray-100 py-16 text-center">
                <h1 className="text-4xl font-bold mb-4">About Us</h1>
                <p className="text-lg text-gray-600">Lorem ipsum dolor sit amet.</p>
            </section>

            {/* About Content Section */}
            <section className="w-full max-w-6xl px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h2 className="text-2xl font-bold mb-4">Who We Are</h2>
                    <p className="text-gray-600 leading-relaxed">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa exercitationem consequatur at ipsum voluptatum illum!
                    </p>
                </div>
                <div className="flex justify-center">
                    <img
                        src="https://i.ibb.co.com/TLFZLYD/unnamed.jpg"
                        alt="About us"
                        className="rounded-lg shadow-lg max-w-full"
                    />
                </div>
            </section>

            {/* Team Section */}
            <section className="w-full bg-gray-100 py-12 text-center">
                <h2 className="text-2xl font-bold mb-8">Meet Our Team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition-shadow"
                        >
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-36 h-36 rounded-full mb-4 border-4 border-gray-200"
                            />
                            <h3 className="text-xl font-semibold">{member.name}</h3>
                            <p className="text-gray-500">{member.designation}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default AboutUs;