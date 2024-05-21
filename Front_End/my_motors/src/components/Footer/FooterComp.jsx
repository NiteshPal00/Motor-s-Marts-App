import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "../Homes/home.css";

export const FooterComp = () => {
    return (
        <>
            <Container fluid className='bg-dark h-auto w-100 p-10'>
                <Container fluid>
                    <Row className='justify-content-center gap-4 ' lg={5} >
                        <Col className='h-80 border-bottom d-flex justify-center align-center flex-column gap-3	  text-center sm:h-auto' sm={12} md={5} >
                            <h6 className='text-light text-bold'><span className='text-blue-500'>MOTORS</span> ABOUT THEME</h6>
                            <p className='text-slate-400 text-start pt-3 text-sm'>
                                Fusce interdum ipsum egestas urna amet fringilla, et placerat ex venenatis. Aliquet luctus pharetra. Proin sed fringilla lectus…
                                ar sit amet tellus in mollis. Proin nec egestas nibh, eget egestas urna. Phasellus sit amet vehicula nunc. In hac habitasse platea dictumst.
                            </p>
                        </Col>
                        <Col className='h-80 border-bottom d-flex pt-5 flex-column text-center' sm={12} md={12} >
                            <h6 className='text-light text-bold'> PHOTO GALLERY </h6>
                            <div className="d-flex h-14 w-14 gap-2 mt-3 text-grey-500 ">
                                <img src="https://motors.stylemixthemes.com/elementor-dealer-two/wp-content/uploads/sites/24/2022/09/nissan_altima_1-300x189-1-150x150.jpeg" alt="" className='hover:scale-95 border hover:border-white' />
                                <img src="https://motors.stylemixthemes.com/elementor-dealer-two/wp-content/uploads/sites/24/2015/12/35-1109x699-1-150x150.jpg" alt="" className='hover:scale-95 border hover:border-white' />
                                <img src="https://motors.stylemixthemes.com/elementor-dealer-two/wp-content/uploads/sites/24/2015/12/12-1109x699-1-150x150.jpg" alt="" className='hover:scale-95 border hover:border-white' />
                                <img src="https://motors.stylemixthemes.com/elementor-dealer-two/wp-content/uploads/sites/24/2015/12/1_2-1109x699-1-150x150.jpg" alt="" className='hover:scale-95 border hover:border-white' />
                            </div>
                        </Col>
                        <Col className='h-80 border-bottom d-flex pt-5 items-center flex-column text-center' sm={12} md={12} >
                            <h6 className='text-light text-bold'> LATEST BLOG POSTS </h6>
                            <p className='text-slate-400 text-start pt-3 text-sm'>
                                The Tesla Model S isn’t the first truly autonomous car on the road...
                            </p>
                            <span className='text-blue-500 text-start'><i className="bi bi-chat"></i> NO COMMENTS</span>
                        </Col>
                        <Col className='h-80 border-bottom d-flex pt-5 flex-column text-center' sm={12} md={12} >
                            <h6 className='text-light text-bold'> SOCIAL NETWORK </h6>
                            <div className="d-flex h-14 w-14 gap-1 mt-3 text-grey-500">
                                <i className="text-white  border d-flex justify-center items-center p-3 hover:scale-95 hover:bg-blue-500 hover:z-index-3 bi bi-instagram"></i>
                                <i className="text-white  border d-flex justify-center items-center p-3 hover:scale-95 hover:bg-blue-500 hover:z-index-3 bi bi-messenger"></i>
                                <i className="text-white  border d-flex justify-center items-center p-3 hover:scale-95 hover:bg-blue-500 hover:z-index-3 bi bi-facebook"></i>
                                <i className="text-white  border d-flex justify-center items-center p-3 hover:scale-95 hover:bg-blue-500 hover:z-index-3 bi bi-google"></i>
                                <i className="text-white  border d-flex justify-center items-center p-3 hover:scale-95 hover:bg-blue-500 hover:z-index-3 bi bi-quora"></i>
                            </div>
                        </Col>
                    </Row>
                    <Row className='justify-content-center gap-4' lg={5} >
                        <Col className='h-80 d-flex justify-center border-bottom items-start flex-column 	  text-center ' sm={12} md={5}>
                            <h6 className='text-light text-bold'>SUBSCRIBE</h6>
                            <p className='text-slate-400 text-start pt-3 text-sm'>
                                Get latest updates and offers.
                            </p>
                        </Col>
                        <Col className='h-80 d-flex justify-center items-start flex-column border-bottom text-center ' sm={12} md={5}>
                            <h6 className='text-light text-bold'> SALES HOURS </h6>
                            <p className='text-slate-400 text-start pt-3 text-sm'>
                                Monday - Friday: <span className='text-light text-bold'>09:00AM - 09:00PM</span>
                            </p>
                            <p className='text-slate-400 text-start  text-sm'>
                                Saturday: <span className='text-light text-bold'>09:00AM - 07:00PM</span>
                            </p>
                            <p className='text-slate-400 text-start  text-sm'>
                                Sunday: <span className='text-light text-bold'>Closed</span>
                            </p>
                        </Col>
                        <Col className='h-80  d-flex justify-center items-start flex-column text-center border-bottom ' sm={12} md={5}>
                            <h6 className='text-light text-bold'> SERVICE HOURS </h6>
                            <p className='text-slate-400 text-start pt-3 text-sm'>
                                Monday - Friday: <span className='text-light text-bold'>09:00AM - 09:00PM</span>
                            </p>
                            <p className='text-slate-400 text-start  text-sm'>
                                Saturday: <span className='text-light text-bold'>09:00AM - 07:00PM</span>
                            </p>
                            <p className='text-slate-400 text-start  text-sm'>
                                Sunday: <span className='text-light text-bold'>Closed</span>
                            </p>
                        </Col>
                        <Col className='h-80  d-flex justify-center items-start flex-column text-center border-bottom ' sm={12} md={5}>
                            <h6 className='text-light text-bold'> PARTS HOURS </h6>
                            <p className='text-slate-400 text-start pt-3 text-sm'>
                                Monday - Friday: <span className='text-light text-bold'>09:00AM - 09:00PM</span>
                            </p>
                            <p className='text-slate-400 text-start  text-sm'>
                                Saturday: <span className='text-light text-bold'>09:00AM - 07:00PM</span>
                            </p>
                            <p className='text-slate-400 text-start  text-sm'>
                                Sunday: <span className='text-light text-bold'>Closed</span>
                            </p>
                        </Col>


                    </Row>
                    <Row className='justify-content-center'>
                        <Col className='h-12 d-flex justify-center items-center text-center  justify-content-around flex-wrap' lg={12} sm={12} md={5}>
                            <p className='text-slate-400 text-start pt-3 text-sm '>
                                Copyright © 2021. Motors - WordPress Theme by StylemixThemes
                            </p>
                            <div className="d-flex h-14 gap-1 mt-3 text-grey-500">
                                <i className="text-blue-400 d-flex justify-center items-center p-3 hover:scale-95  bi bi-instagram"></i>
                                <i className="text-blue-400 d-flex justify-center items-center p-3 hover:scale-95  bi bi-messenger"></i>
                                <i className="text-blue-400 d-flex justify-center items-center p-3 hover:scale-95  bi bi-facebook"></i>
                                <i className="text-blue-400 d-flex justify-center items-center p-3 hover:scale-95  bi bi-google"></i>
                                <i className="text-blue-400 d-flex justify-center items-center p-3 hover:scale-95  bi bi-quora"></i>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}
