import React from 'react';
import WorksCard from '../WorksCard/WorksCard';



const FeaturedProjects = () => {
    return (
        <div >
            <div className='w-full py-20 justify-center text-black'>
                <h1 className='text-center text-2xl font-semibold'>Featured  Projects</h1>
                <div className='text-center space-x-3 py-4 font-semibold'>
                    <a href="">Residential</a>
                    <a href="">Commercial</a>

                </div>

            </div>

            <div className="flex justify-center items-center min-h-screen">
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
                    <WorksCard />
                    <WorksCard />
                    <WorksCard />
                    <WorksCard />
                    <WorksCard />
                    <WorksCard />
                    <WorksCard />
                    <WorksCard />
                </div>
            </div>

            {/* <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-3'>
                <WorksCard></WorksCard>
                <WorksCard></WorksCard>
                <WorksCard></WorksCard>
                <WorksCard></WorksCard>
                <WorksCard></WorksCard>
                <WorksCard></WorksCard>
                <WorksCard></WorksCard>
            </div> */}

        </div>

    );
};

export default FeaturedProjects;