import React from 'react';
import img1 from '../Images/1.jpg'
import img2 from '../Images/2.jpg'
import img3 from '../Images/3.jpg'
import img4 from '../Images/4.jpg'
const WorkCardDetails = () => {
    return (
        <div className='min-h-screen pt-10 bg-white text-black'>

            {/* hero Section */}
            <div className='w-full h-auto justify-items-center'>
                <img className='md:h-[600px] md:w-[1000px] rounded-2xl' src={img2} alt="" />
                <div className='w-full mx-1 h-14 md:h-16 bg-white border-purple-400 border-x-4 rounded-lg flex justify-between'>

                    <div className='m-1 md:mx-8'>
                        <p className='text-[10px] md:text-xl font-semibold'>Year</p>
                        <span className='text-[8px] md:text-sm'>2022</span>
                    </div>
                    <div className='m-1'>
                        <p className='text-[10px] md:text-xl font-semibold'>Location</p>
                        <span className='text-[8px] md:text-sm'>Bashundhara,Dhaka</span>
                    </div>
                    <div className='m-1'>
                        <p className='text-[10px] md:text-xl font-semibold'>Creative Director</p>
                        <span className='text-[8px] md:text-sm'>Symple Symmetry</span>
                    </div>
                    <div className='m-1 md:mx-8'>
                        <p className='text-[10px] md:text-xl font-semibold'>Visualization</p>
                        <span className='text-[8px] md:text-sm'>1000m2</span>
                    </div>


                </div>
            </div>
            {/* Content section */}
            <div className='mt-20 md:flex md:mx-auto md:justify-center flex-wrap text-black'>
                <div className='md:w-[40%] md:ml-10 md:order-2'>
                    <p className='text-2xl font-semibold grid justify-center md:justify-items-end'>About</p>
                    <div className='p-1 mx-1'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi repudiandae recusandae nemo dolore soluta? Corrupti odio sint aut deserunt dolorum, neque cum molestias eum, tenetur quia autem fugiat sunt modi! Assumenda quae, harum placeat dolores optio similique praesentium a dolore!</div>
                </div>
                <img className='w-full h-auto md:w-[40%] md:order-1' src={img3} alt="" />


            </div>
            <div className='mt-20 md:flex md:mx-auto md:justify-center flex-wrap'>
                <div className='md:w-[40%] md:ml-10'>
                    <p className='text-2xl font-semibold grid justify-center'>Design</p>
                    <div className='p-1 mx-1'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi repudiandae recusandae nemo dolore soluta? Corrupti odio sint aut deserunt dolorum, neque cum molestias eum, tenetur quia autem fugiat sunt modi! Assumenda quae, harum placeat dolores optio similique praesentium a dolore!</div>
                </div>
                <img className='w-full h-auto md:w-[40%] ' src={img4} alt="" />


            </div>

            <div className='mt-20 grid grid-cols-1 justify-center md:grid-cols-2 w-full md:gap-1 md:mx-1 lg:gap-4 lg:mx-4'>

                <img className='' src={img1} alt="" />
                <img className='' src={img2} alt="" />
                <img className='' src={img3} alt="" />
                <img className='' src={img4} alt="" />

                <img className='' src={img1} alt="" />
                <img className='' src={img2} alt="" />
                <img className='' src={img3} alt="" />
                <img className='' src={img4} alt="" />

            </div>


        </div>
    );
};

export default WorkCardDetails;