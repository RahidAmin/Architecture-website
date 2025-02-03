import React from 'react';
import { Link } from 'react-router-dom';

const UpdateWorksRow = ({ work, handleDelete }) => {
    const { _id, type, pName, topImage, year, location, visualization } = work;
    return (

        <tr className='text-black'>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-circle">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img
                                src={topImage}
                                alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{pName}</div>
                        <div className="text-sm opacity-50">{location}</div>
                    </div>
                </div>
            </td>
            <td>
                {type}
                <br />
                <span className="badge badge-ghost badge-sm">{year}</span>
            </td>
            <td>{visualization}</td>
            <th>
                <button className="btn btn-ghost btn-xs"><Link to={`/updateWorksEdit/${_id}`}>Edit</Link></button>
            </th>
        </tr>

    );
};

export default UpdateWorksRow;