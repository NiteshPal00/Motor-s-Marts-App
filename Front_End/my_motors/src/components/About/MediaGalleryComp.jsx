import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";

export const MediaGalleryComp = () => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 4,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <Container fluid className="bg-black h-96 d-flex align-items-center justify-content-center">
            <Container className="h-auto sm:h-full md:h-full align-items-center justify-content-center">
                <h1 className="text-light text-center pb-3"> MEDI<span className="border-b-8 border-yellow-400 border-double ">A G</span>ALLERY</h1>
                <div className="border-b-2 border-gray-500 relative">
                    <div className="absolute inset-0 border-b-2 border-white transform skew-y-1"></div>
                </div>
                <div className="slider-container m-3">
                    <Slider {...settings}>
                        {[
                            "https://motors.stylemixthemes.com/elementor-dealer-two/wp-content/uploads/sites/24/2022/10/post_id_2020_media-5-1023x613-1-270x180.jpeg",
                            "https://motors.stylemixthemes.com/elementor-dealer-two/wp-content/uploads/sites/24/2022/10/post_id_2027_ME54t-1917x644-1-270x180.jpeg",
                            "https://motors.stylemixthemes.com/elementor-dealer-two/wp-content/uploads/sites/24/2022/10/post_id_2027_srDqt-999x719-1-270x180.jpeg",
                            "https://motors.stylemixthemes.com/elementor-dealer-two/wp-content/uploads/sites/24/2022/10/service-1-21-350x205-2-270x180.jpeg",
                            "https://motors.stylemixthemes.com/elementor-dealer-two/wp-content/uploads/sites/24/2022/09/first-parallax-block-1-270x180.jpg",
                            "https://motors.stylemixthemes.com/elementor-dealer-two/wp-content/uploads/sites/24/2022/08/porsche-1917x554-1-270x180.jpg",
                        ].map((imageUrl, index) => (
                            <div key={index} className="border relative">
                                <img
                                    src={imageUrl}
                                    alt=""
                                    className="img-fluid hover:scale-90 w-full h-full object-cover transition-all duration-300 ease-in-out hover:opacity-75"
                                    style={{ height: "auto", width: "100%" }}
                                />
                            </div>
                        ))}
                    </Slider>
                </div>

            </Container>
        </Container>
    );
};
