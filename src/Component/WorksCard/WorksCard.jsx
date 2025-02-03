import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from 'react-router-dom';


const WorksCard = ({ works }) => {



    const { _id, topImage, pName } = works
    const navigate = useNavigate();
    const handleViewMore = () => {
        navigate(`/workcarddetails/${_id}`);
        window.scrollTo(0, 0);
    }

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div data-aos="zoom-in-up">




            <div className="card card-compact text-black h-80 w-96 shadow-xl bg-white group">
                <figure className="overflow-hidden">
                    <div className="w-full h-full transition-transform transform group-hover:scale-110 duration-300 ease-in-out">
                        <img src={topImage} alt="" className="w-full h-full object-fill" />
                    </div>
                </figure>
                <div className="card-body">
                    <p>{pName}</p>
                    <div className="card-actions justify-end">
                        <button
                            onClick={handleViewMore}
                            className="btn px-4 py-2 rounded-lg text-white bg-gradient-to-r from-teal-500 to-cyan-400 shadow-md transition-all duration-300 transform hover:scale-105 hover:from-teal-600 hover:to-cyan-500 hover:shadow-lg border-none focus:outline-none focus:ring-2 focus:ring-cyan-300"
                        >
                            View more
                        </button>






                    </div>
                </div>
            </div>

        </div>
    );
};

export default WorksCard;