import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";

const WorkCardDetails = () => {
    const works = useLoaderData();
    const { topImage, year, location, creativeDirector, visualization, aboutDescription, aboutImage, designDescription, designImage, img1, img2, img3, img4, img5, img6, img7, img8 } = works;

    const images = [img1, img2, img3, img4, img5, img6, img7, img8].filter(Boolean);
    console.log(images)

    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with animation duration
    }, []);

    return (
        <div className='pt-10 bg-white text-black mx-1 overflow-hidden pb-2'>

            {/* hero Section */}
            <div className='w-full h-auto justify-items-center'>
                <img className='md:h-[600px] md:w-[1000px] rounded-2xl' src={topImage} alt="" />


                <div className="w-full mx-1 h-auto md:h-20 bg-gradient-to-r from-sky-200 to-white border border-transparent rounded-xl flex justify-between items-center p-4 shadow-lg">
                    {/* Year Section */}
                    <div className="flex flex-col items-center justify-center space-y-1 p-2">
                        <p className="text-sm md:text-xl font-semibold text-black">Year</p>
                        <span className="text-xs md:text-sm text-black opacity-80">{year}</span>
                    </div>

                    {/* Location Section */}
                    <div className="flex flex-col items-center justify-center space-y-1 p-2">
                        <p className="text-sm md:text-xl font-semibold text-black">Location</p>
                        <span className="text-xs md:text-sm text-black opacity-80">{location}</span>
                    </div>

                    {/* Creative Director Section */}
                    <div className="flex flex-col items-center justify-center space-y-1 p-2">
                        <p className="text-sm md:text-xl font-semibold text-black">Creative Director</p>
                        <span className="text-xs md:text-sm text-black opacity-80">{creativeDirector}</span>
                    </div>

                    {/* Visualization Section */}
                    <div className="flex flex-col items-center justify-center space-y-1 p-2">
                        <p className="text-sm md:text-xl font-semibold text-black">Visualization</p>
                        <span className="text-xs md:text-sm text-black opacity-80">{visualization}</span>
                    </div>
                </div>

            </div>
            {/* Content section */}
            <div className='mt-20 md:flex md:mx-auto md:justify-center flex-wrap text-black'>
                <div className='md:w-[40%] md:ml-10 md:order-2'>
                    <p className='text-2xl font-semibold grid justify-center md:justify-items-end'>About</p>
                    <div className='p-3 mx-1 break-all break-words' data-aos="fade-left">{aboutDescription}</div>
                </div>
                <img className='w-full h-auto md:w-[40%] md:order-1' src={aboutImage} alt="" data-aos="fade-right" />


            </div>
            <div className='mt-20 md:flex md:mx-auto md:justify-center flex-wrap'>
                <div className='md:w-[40%] md:ml-10'>
                    <p className='text-2xl font-semibold grid justify-center'>Design</p>
                    <div className='p-3 mx-1 break-all break-words' data-aos="fade-right">{designDescription}</div>
                </div>
                <img className='w-full h-auto md:w-[40%]' data-aos="fade-left" src={designImage} alt="" />


            </div>

            <div className='md:mt-20 grid grid-cols-1 justify-center md:grid-cols-2 w-full md:gap-1 md:mx-1 lg:gap-4 lg:mx-4'>
                {
                    images.map((image, index) => {
                        return <img key={index} className='md:h-[600px] w-full object-cover' src={image} alt="" />

                    })
                }


            </div>

        </div>
    );
};

export default WorkCardDetails;