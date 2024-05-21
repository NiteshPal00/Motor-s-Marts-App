import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Row, Col } from 'react-bootstrap';
export const CarouselComp2 = () => {
    const data = [
        {
            id: 1,
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis maiores dolorum provident molestiae rem repellat quae laborum obcaecati quibusdam fugiat esse sequi hic quis laboriosam minima, aliquam voluptate ab quod Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis maiores dolorum provident molestiae rem repellat quae laborum obcaecati quibusdam fugiat esse sequi hic quis laboriosam minima, aliquam voluptate ab quod ",
            name: "John Doe",
            image: "https://motors.stylemixthemes.com/elementor-dealer-two/wp-content/uploads/sites/24/2022/09/2-158x145-1-150x145.jpg",
            header: "Driver"
        },
        {
            id: 2,
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis maiores dolorum provident molestiae rem repellat quae laborum obcaecati quibusdam fugiat esse sequi hic quis laboriosam minima, aliquam voluptate ab quod Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis maiores dolorum provident molestiae rem repellat quae laborum obcaecati quibusdam fugiat esse sequi hic quis laboriosam minima, aliquam voluptate ab quod",
            name: "Alice Smart",
            image: "https://motors.stylemixthemes.com/elementor-dealer-two/wp-content/uploads/sites/24/2022/09/ava2-113x113-1.jpg",
            header: "Manager"

        },
        {
            id: 2,
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis maiores dolorum provident molestiae rem repellat quae laborum obcaecati quibusdam fugiat esse sequi hic quis laboriosam minima, aliquam voluptate ab quod Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis maiores dolorum provident molestiae rem repellat quae laborum obcaecati quibusdam fugiat esse sequi hic quis laboriosam minima, aliquam voluptate ab quod",
            name: "Robert Forst",
            image: "https://motors.stylemixthemes.com/elementor-dealer-two/wp-content/uploads/sites/24/2022/09/1-158x145-1-150x145.jpg",
            header: "Teacher"

        },
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <>
            <Container fluid className='h-auto bg-cover bg-center carouselcomp_2'>
                <Row className='text-white d-flex justify-content-center align-items-center h-full'>
                    <Slider {...settings}>
                        {data.map((elem) => (
                            <Col key={elem.id} className='d-flex justify-content-center align-items-center flex-col text-center p-5 flex-wrap '>
                                <img src={elem.image} alt="" className='rounded-full border-8 border-white hover:scale-95' />
                                <p className='pt-2 text-bold text-xl md:text-base lg:text-lg xl:text-xl 2xl:text-2xl'> {elem.name} </p>
                                <h5 className='text-zinc-400 text-bold text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl'> {elem.header} </h5>
                                <p className='text-white text-bold p-2 text-2xl md:text-sm lg:text-2xl xl:text-lg 2xl:text-xl'> {elem.content} </p>
                            </Col>
                        ))}
                    </Slider>
                </Row>
            </Container>
        </>
    );
};
