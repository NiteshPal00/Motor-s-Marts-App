import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { GiSteeringWheel } from "react-icons/gi";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 450,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: 2,
};

export const CarouselComp1 = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    var settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
    };

    return (
        <>
            <div className='w-100 sm:h-auto sm:w-auto  caroho_1 '>
                <div className='justify-content-center'>
                    <Slider {...settings}>
                        <Col className='d-flex justify-content-center align-items-center flex-col flex-wrap text-center p-3 caro_1 '>
                            <div className="car mt-5 pt-5 p-2">
                                <h1 className='text-wrap'> Mercedes-Benz AMG GT 2017</h1>
                                <h2 className=' text-wrap'><i className="bi bi-currency-dollar"></i>320<span className='text-white'>/MO</span></h2>
                                <h4 className='text-wrap text-white text-4xl pt-4'> FOR 36 MONTHS</h4>
                                <div className="caro_01 mt-3">
                                    <button className="btn btn-light py-2 px-2 rounded me-3 caro_02b"
                                        onClick={handleOpen}
                                        style={{
                                            backgroundImage: 'linear-gradient(to bottom, yellow, transparent)',
                                            transition: 'background 0.3s ease-in-out'
                                        }}>
                                        <i className="bi bi-car-front pe-2"  ></i>TEST DRIVE
                                    </button>
                                    <button className="btn btn-primary bg-primary border-transparent py-2 px-4 rounded me-3 caro_02b"
                                    >
                                        LEARN MORE
                                    </button>
                                </div>
                            </div>
                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={style}>
                                    <Row className='justify-center gap-1'>
                                        <Col className=' h-auto flex justify-center items-center' lg={2}>
                                            <GiSteeringWheel size={50} className='text-blue-700' />
                                        </Col>
                                        <Col className=' h-auto justify-center items-center' lg={7}>
                                            <h6 className='font-bold text-lg'>SCHEDULE A TEST DRIVE</h6>
                                            <p className='font-semibold text-gray-600 text-md'>Home page</p>
                                        </Col>
                                    </Row>
                                    <Typography id="modal-modal-title" variant="h6" component="h2">
                                        <div className='flex justify-center items-center gap-2 flex-wrap'>
                                            <label htmlFor="name_1" className='text-sm font-semibold'> Name: </label>
                                            <input type="text" id='name_1' className='border-2 ps-2 w-80' />
                                            <br />
                                            <label htmlFor="email_1" className='text-sm font-semibold'> Email </label>
                                            <input type="text" id='email_1' className='border-2 ps-2 w-80' />
                                        </div>
                                    </Typography>
                                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                        <div className='flex gap-2 flex-wrap'>
                                            <label htmlFor="phone_1" className='text-sm font-semibold'> Phone </label>
                                            <input type="number" id='phone_1' className='border-2 ps-2 w-80' />

                                            <label htmlFor="date_1" className='text-sm font-semibold ms-1'> Date </label>
                                            <input type="date" id='date_1' className='border-2 ps-2 p-1 w-80 ms-2' />
                                        </div>
                                    </Typography>
                                    <button className="btn btn-primary bg-blue-800 border-transparent py-2 px-3 mt-2 rounded hover:bg-blue-900">
                                        Request
                                    </button>
                                </Box>
                            </Modal>
                        </Col>

                        {/* Second Carousel */}
                        <Col className='caro_2'>
                            <div className="d-flex justify-content-start align-items-center  carh_1 w-100">
                                <div className="carh_2 w-50 mt-5 ms-5 d-flex justify-content-center align-items-center lg:pb-4 sm:pb-0" lg={5} sm={12} md={5} >
                                    <div className="caro_01 h-auto text-center mt-3 ">
                                        <p className='text-yellow-500'> 2018 NEW <span className='text-light'>TOYOTA</span> </p>
                                        <p className='text-light'> HIGHLANDER LE </p>
                                        <h5 className='text-light pb-3'>$499 per MONTH  for 24 months. 0% APR Representatives</h5>
                                        <button className="btn btn-light py-2 px-2 rounded me-3 caro_02b"
                                            onClick={handleOpen}
                                            style={{
                                                backgroundImage: 'linear-gradient(to bottom, yellow, transparent)',
                                                transition: 'background 0.1s ease-in-out'
                                            }}>
                                            <i className="bi bi-car-front pe-2" ></i>TEST DRIVE
                                        </button>
                                        <button className="btn btn-primary bg-primary border-transparent py-2 px-4 rounded me-3 caro_02b"
                                        >
                                            LEARN MORE
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Slider>
                </div>
            </div>
        </>
    )
}
