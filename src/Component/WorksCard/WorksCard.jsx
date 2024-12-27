import React from 'react';
import img1 from '../Images/1.jpg';
import { Link, useNavigate } from 'react-router-dom';
// import img2 from '../Images/2.jpg';

const WorksCard = () => {

    const navigate = useNavigate();
    const handleViewMore = () => {
        navigate('/workcarddetails');
        window.scrollTo(0, 0);
    }

    return (
        <div>


            <div className="card card-compact text-black w-96 shadow-xl bg-white group">
                <figure className="overflow-hidden">
                    <div className="transition-transform transform group-hover:scale-110 duration-300 ease-in-out">
                        <img src={img1} alt="" className="w-full h-full object-cover" />
                    </div>
                </figure>
                <div className="card-body">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, aliquam!</p>
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