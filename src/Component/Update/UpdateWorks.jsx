
import React, { useEffect, useState } from 'react';

import UpdateWorksRow from './UpdateWorksRow';

const UpdateWorks = () => {
    const [works, setWorks] = useState([]);
    const url = 'https://api.simplesymmetry-bd.com/works';
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(url).then(res => res.json());
            setWorks(response);
        }

        fetchData();

    }, [])

    const handleDelete = (id) => {
        const proceed = confirm('Are you sure,you want to delete');
        if (proceed) {
            fetch(`https://api.simplesymmetry-bd.com/works/${id}`, {
                method: 'DELETE'
            }).then(res => res.json()).then((data) => {

                if (data.deletedCount > 0) {
                    alert('deleted successful');
                    const remaining = works.filter(work => work._id !== id);
                    setWorks(remaining);

                }


            }
            )
        }

    }


    return (
        <div className='text-black'>
            <h1 className='m-20 bg-red-500'>Update page</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Visualization</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            works.map(work => <UpdateWorksRow key={work._id} work={work} handleDelete={handleDelete}></UpdateWorksRow>)
                        }


                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default UpdateWorks;