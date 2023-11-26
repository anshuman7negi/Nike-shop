import FirstCard from "./FirstCard";
import SecondCard from "./SecondCard";
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Carousels = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 7000,
    };

    return (
        <Slider {...settings} className="custom-carousel">
            <div>
                <FirstCard />
            </div>
            <div>
                <SecondCard />
            </div>
        </Slider>
    )
}

export default Carousels;