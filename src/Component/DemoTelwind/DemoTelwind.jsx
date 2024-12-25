import React from 'react';

const DemoTelwind = () => {
    return (
        <div>
            <br /><br />

            <div className='grid place-content-center h-screen '>

                <h1 className=''>Test</h1>

                <div>
                    <div className='p-6 max-w-sm mx-auto bg-red-400 rounded-xl shadow-2xl flex items-center space-x-4'>
                        <div className='w-40 h-40 overflow-hidden flex-shrink-0'><img src="https://images.pexels.com/photos/16021141/pexels-photo-16021141/free-photo-of-photo-of-25-de-abril-bridge-lisbon-portugal.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""
                            className='w-full h-full object-cover'
                        /></div>


                        <div className='text-2xl font-medium'>
                            TelWind CSS
                            <p className='text-base'>By Rahid Amin</p>
                        </div>

                    </div>
                    <div className='grid'>
                        <button className='bg-sky-300 text-white mt-2 rounded-lg hover:bg-red-300 hover:text-black'>Show More</button>
                    </div>
                </div>

                <div className='mt-3'>

                    <div className='max-w-sm p-2 mx-auto bg-yellow-100 rounded-xl'>
                        <div className=''>image</div>
                        <div>content</div>
                    </div>
                </div>


            </div>

            <br /><br /><br /><br />
        </div>

    );
};

export default DemoTelwind;