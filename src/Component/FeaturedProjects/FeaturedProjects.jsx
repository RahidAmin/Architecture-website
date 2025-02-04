import React, { useEffect, useState } from 'react';
import WorksCard from '../WorksCard/WorksCard';



const FeaturedProjects = () => {

    const [worksType, setWorksType] = useState([]);
    const [filterType, setFilterType] = useState('all')


    useEffect(() => {
        // fetch('https://api.simplesymmetry-bd.com/works').then(res => res.json()).then(data => setWorksType(data));
        const fetchWorks = async () => {
            try {
                const url = filterType === 'all' ? 'https://api.simplesymmetry-bd.com/works' : `https://api.simplesymmetry-bd.com/works?type=${filterType}`;

                const response = await fetch(url);
                const data = await response.json();
                setWorksType(data);
            } catch (error) {
                console.error('Error here: ', error);
            }
        }
        fetchWorks();
    }, [filterType])
    return (





        <div >
            <div className='w-full py-20 justify-center text-black'>

                <h1 className='text-center text-2xl font-semibold'>Featured  Projects</h1>


                <div className='text-center space-x-3 py-4 font-semibold px-5'>

                    <button
                        onClick={() => setFilterType('all')}
                        className={`rounded ${filterType === 'all' ? 'underline' : 'font-semibold'}`}
                    >
                        All
                    </button>
                    <button
                        onClick={() => setFilterType('residential')}
                        className={`rounded ${filterType === 'residential' ? 'underline' : 'font-semibold'}`}
                    >
                        Residential
                    </button>
                    <button
                        onClick={() => setFilterType('commercial')}
                        className={`rounded ${filterType === 'commercial' ? 'underline' : 'font-semibold'}`}
                    >
                        Commercial
                    </button>
                    <button
                        onClick={() => setFilterType('interior')}
                        className={`rounded ${filterType === 'interior' ? 'underline' : 'font-semibold'}`}
                    >
                        Interior
                    </button>
                    <br />
                    <button
                        onClick={() => setFilterType('industrial')}
                        className={`rounded ${filterType === 'industrial' ? 'underline' : 'font-semibold'}`}
                    >
                        Industrial
                    </button>

                    <button
                        onClick={() => setFilterType('masterPlan')}
                        className={`rounded ${filterType === 'masterPlan' ? 'underline' : 'font-semibold'}`}
                    >
                        Master Plan
                    </button>

                </div>

            </div>

            <div className="flex justify-center items-center py-10">
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
                    {
                        worksType.map(works => <WorksCard key={works._id} works={works}></WorksCard>)

                    }


                </div>
            </div>



        </div>

    );
};

export default FeaturedProjects;