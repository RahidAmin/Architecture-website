import React from 'react';

import { useNavigate } from 'react-router-dom';


const WorksCard = ({ works }) => {
    const { _id, topImage, pName } = works
    const navigate = useNavigate();
    const handleViewMore = () => {
        navigate(`/workcarddetails/${_id}`);
        window.scrollTo(0, 0);
    }

    return (
        <div>




            <div className="card card-compact text-black h-80 w-96 shadow-xl bg-white group">
                <figure className="overflow-hidden">
                    <div className="w-full h-full transition-transform transform group-hover:scale-110 duration-300 ease-in-out">
                        <img src={topImage} alt="" className="w-full h-full object-fill" />
                    </div>
                </figure>
                <div className="card-body">
                    <p>{pName}</p>
                    <div className="card-actions justify-end">
                        <button onClick={handleViewMore} className="btn bg-white border-hidden hover:bg-slate-300 text-black">
                            View more
                        </button>

                    </div>
                </div>
            </div>

            {/* <div className="card card-compact text-black w-96 shadow-xl bg-white">
                <figure>
                    <div><img src={img1} alt="" /></div>
                </figure>
                <div className="card-body">

                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, aliquam!</p>
                    <div className="card-actions justify-end">
                        <button className="btn bg-white border-hidden hover:bg-slate-300">View More</button>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default WorksCard;