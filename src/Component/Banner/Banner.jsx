import React from 'react';

// import AwesomeSlider from 'react-awesome-slider';
// import withAutoplay from 'react-awesome-slider/dist/autoplay';
// import 'react-awesome-slider/dist/styles.css';
import './Banner.css'




import img1 from '../Images/1.jpg';
// import img2 from '../Images/2.jpg';
// import img3 from '../Images/3.jpg';
// import img4 from '../Images/4.jpg';
// import img5 from '../Images/5.jpg';

const Banner = () => {

    // const AutoplaySlider = withAutoplay(AwesomeSlider);



    return (
        <div>



            <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] overflow-hidden bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500">
                {/* Animated Background Image */}
                <div className="absolute inset-0 animate-slide ">
                    <img
                        src={img1}
                        alt="Banner"
                        className="w-full h-full object-cover md:object-fill"
                    />
                </div>
            </div>




            {/* <AutoplaySlider
                className='aws-btn'

                play={true}
                cancelOnInteraction={false} // should stop playing on user interaction
                interval={2000}
                bullets={false}
                organicArrows={false}
            >
                <div data-src={img1} />
                <div data-src={img2} />
                <div data-src={img3} />
                <div data-src={img4} />


            </AutoplaySlider> */}

        </div>

    );
};

export default Banner;