import React from 'react';
import 'font-awesome/css/font-awesome.min.css';


const Contact = () => {
    return (

        <section className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-100 text-gray-800 py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-extrabold text-center text-black-700 mb-8">Contact Us</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Address Section */}
                    <div className="flex items-center space-x-4 p-6 bg-white rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
                        <div className="text-3xl text-blue-500">
                            <i className="fas fa-map-marker-alt"></i>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold">Address</h3>
                            <p className="text-gray-600">Flat-1/A,House: Ka-210,Kuril Chowrasta Vatara,Dhaka-1229</p>
                        </div>
                    </div>

                    {/* Email Section */}
                    <div className="flex items-center space-x-4 p-6 bg-white rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
                        <div className="text-3xl text-blue-500">
                            <i className="fas fa-envelope"></i>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold">Email</h3>
                            <p className="text-gray-600">arch.simplesymmetry@gmail.com</p>
                        </div>
                    </div>

                    {/* Phone Section */}
                    <div className="flex items-center space-x-4 p-6 bg-white rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
                        <div className="text-3xl text-blue-500">
                            <i className="fas fa-phone"></i>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold">Phone</h3>
                            <p className="text-gray-600">+880 1778400564</p>
                        </div>
                    </div>

                    {/* Facebook Section */}
                    <a href="https://facebook.com">
                        <div className="flex items-center space-x-4 p-6 bg-white rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
                            <div className="text-3xl text-blue-600">
                                <i className="fab fa-facebook"></i>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold">Facebook</h3>
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 hover:underline">Visit Us</a>
                            </div>
                        </div>
                    </a>




                    {/* Twitter Section */}
                    <a href="https://twitter.com">
                        <div className="flex items-center space-x-4 p-6 bg-white rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
                            <div className="text-3xl text-blue-400">
                                <i className="fab fa-twitter"></i>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold">Twitter</h3>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 hover:underline">Follow Us</a>
                            </div>
                        </div>
                    </a>

                    {/* YouTube Section */}
                    <a href="https://youtube.com">
                        <div className="flex items-center space-x-4 p-6 bg-white rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
                            <div className="text-3xl text-red-500">
                                <i className="fab fa-youtube"></i>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold">YouTube</h3>
                                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-700 hover:underline">Subscribe</a>
                            </div>
                        </div>
                    </a>
                </div>

                {/* Map Section */}
                <div className="mt-12">
                    <h3 className="text-2xl font-bold text-center text-black-700 mb-6">Find Us Here</h3>
                    <div className="aspect-w-16 aspect-h-9 flex justify-center items-center">
                        <iframe
                            className="rounded-xl shadow-lg w-full md:h-auto lg:h-80 xl:h-96"
                            src="https://www.google.com/maps?q=Kuril+Chowrasta+Vatara+Dhaka+1229&output=embed"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>


    );
};

export default Contact;

