import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export const WelcomeMotors = () => {
    const [isVideoPlaying, setVideoPlaying] = useState(false);

    const handleVideoClick = () => {
        window.open('https://www.youtube.com/watch?v=8U-7F0QfLCE&si=WCH0RBDIhz6WRXNI', '_blank');
        setVideoPlaying(!isVideoPlaying);
    };

    return (
        <>
            <Container fluid className='h-auto bg-slate-200'>
                <Row className='justify-content-center'>
                    <Col className='text-center pt-11 ' lg={12} md={12} sm={12} >
                        <h3 className='welcomemotors_1'> WELCOME TO <span className='text-yellow-500'>MOTORS</span> </h3>
                        <p className='p-10 text-xl text-slate-500 text-pretty'> With specialists on hand to help with any part of the car shopping or vehicle ownership experience, Motors provides financing, car service and a great selection of vehicles for luxury car shoppers in Chicago, IL. Motors is the ultimate Car Dealer, Automotive, Auto Dealer WordPress theme. </p>
                        <div className='h-52 w-100'>
                            {isVideoPlaying ? (
                                // Render your video player component here
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/8U-7F0QfLCE?si=WCH0RBDIhz6WRXNI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            ) : (
                                // Render the video icon
                                <i
                                    className="fa fa-play-circle-o ease-out duration-300 text-8xl text-blue-900 hover:text-blue-800 hover:scale-95"
                                    onClick={handleVideoClick}
                                />
                            )}
                        </div>

                    </Col>
                </Row>
            </Container>
            <div className='bg-amber-400 h-auto p-3  w-100 d-flex justify-content-center flex-wrap align-items-center gap-5 ' >
                <div className='p-3 text-bold'>
                    <h3>HAVE A QUESTIONS? FEEL FREE TO ASK...</h3>
                </div>
                <div className='border p-3'>
                    <h3> <i className="bi bi-telephone text-light "></i> +1 878-9674-4455</h3>
                </div>
                <button className='border text-black font-bold py-3 px-5 rounded hover:bg-white hover:scale-95'>
                    <i className="bi bi-envelope text-lg pe-2"></i>
                    FEEDBACK
                </button>
            </div>
        </>
    );
};
