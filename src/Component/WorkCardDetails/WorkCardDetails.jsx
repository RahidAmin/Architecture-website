import React from 'react';
import { useLoaderData } from 'react-router-dom';
const WorkCardDetails = () => {
    const works = useLoaderData();
    const { topImage, year, location, creativeDirector, visualization, aboutDescription, aboutImage, designDescription, designImage, img1, img2, img3, img4, img5, img6, img7, img8 } = works;
    return (
        <div className='min-h-screen pt-10 bg-white text-black'>

            {/* hero Section */}
            <div className='w-full h-auto justify-items-center'>
                <img className='md:h-[600px] md:w-[1000px] rounded-2xl' src={topImage} alt="" />
                <div className='w-full mx-1 h-14 md:h-16 bg-white border-purple-400 border-x-4 rounded-lg flex justify-between'>

                    <div className='m-1 md:mx-8'>
                        <p className='text-[10px] md:text-xl font-semibold'>Year</p>
                        <span className='text-[8px] md:text-sm'>{year}</span>
                    </div>
                    <div className='m-1'>
                        <p className='text-[10px] md:text-xl font-semibold'>Location</p>
                        <span className='text-[8px] md:text-sm'>{location}</span>
                    </div>
                    <div className='m-1'>
                        <p className='text-[10px] md:text-xl font-semibold'>Creative Director</p>
                        <span className='text-[8px] md:text-sm'>{creativeDirector}</span>
                    </div>
                    <div className='m-1 md:mx-8'>
                        <p className='text-[10px] md:text-xl font-semibold'>Visualization</p>
                        <span className='text-[8px] md:text-sm'>{visualization}</span>
                    </div>


                </div>
            </div>
            {/* Content section */}
            <div className='mt-20 md:flex md:mx-auto md:justify-center flex-wrap text-black'>
                <div className='md:w-[40%] md:ml-10 md:order-2'>
                    <p className='text-2xl font-semibold grid justify-center md:justify-items-end'>About</p>
                    <div className='p-1 mx-1'>{aboutDescription}</div>
                </div>
                <img className='w-full h-auto md:w-[40%] md:order-1' src={aboutImage} alt="" />


            </div>
            <div className='mt-20 md:flex md:mx-auto md:justify-center flex-wrap'>
                <div className='md:w-[40%] md:ml-10'>
                    <p className='text-2xl font-semibold grid justify-center'>Design</p>
                    <div className='p-1 mx-1'>{designDescription}</div>
                </div>
                <img className='w-full h-auto md:w-[40%] ' src={designImage} alt="" />


            </div>

            <div className='mt-20 grid grid-cols-1 justify-center md:grid-cols-2 w-full md:gap-1 md:mx-1 lg:gap-4 lg:mx-4'>

                <img className='' src={img1} alt="" />
                <img className='' src={img2} alt="" />
                <img className='' src={img3} alt="" />
                <img className='' src={img4} alt="" />
                <img className='' src={img5} alt="" />
                <img className='' src={img6} alt="" />
                <img className='' src={img7} alt="" />
                <img className='' src={img8} alt="" />

            </div>


        </div>
    );
};

export default WorkCardDetails;