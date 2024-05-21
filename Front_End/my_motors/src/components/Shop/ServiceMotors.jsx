import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { GiMagicLamp } from "react-icons/gi";
import { FaAirFreshener } from "react-icons/fa";
import { GiElectricalResistance } from "react-icons/gi";
import { MdHomeRepairService } from "react-icons/md";
import { FaRulerCombined } from "react-icons/fa6";
import { GiMartyrMemorial } from "react-icons/gi";
import { ScheduleService } from './ScheduleService';

export const ServiceMotors = () => {
    return (
        <>
            <Container fluid className='mt-5 h-auto'>
                <Row className="justify-center gap-2 h-auto">
                    <Col className='' lg={7}>
                        <h1 className='font-bold pt-2'><span className='text-yellow-500'>MOTORS</span> SERVICE CENTER</h1>
                        <p className='text-gray-800 break-words pt-3'>
                            Are you ready to give your car the service it is asking for? Schedule car maintenance or repair right here. Our top-notch service staff can get your car or truck in and out quickly. We know there isn’t much more frustrating than being without your vehicle while it gets repaired. That’s why we have a staff that excels in providing top-notch maintenance and repair – and is able to do it quickly.
                        </p>
                        <h6 className='text-gray-800 font-bold'>OUR SERVICES INCLUDE</h6>
                        <Row className="justify-center gap-2">
                            <Col lg={5} className=''>
                                <div className="flex gap-2">
                                    <i className="bi bi-check font-bold text-lg text-yellow-500"></i>
                                    <p className='text-md'>General Automotive Repair</p>
                                </div>
                                <div className="flex gap-2">
                                    <i className="bi bi-check font-bold text-lg text-yellow-500"></i>
                                    <p className='text-md'>Preventative Car Maintenance
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <i className="bi bi-check font-bold text-lg text-yellow-500"></i>
                                    <p className='text-md'>Air Conditioning and Heater Service
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <i className="bi bi-check font-bold text-lg text-yellow-500"></i>
                                    <p className='text-md'>Cooling System and Radiator Repair
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <i className="bi bi-check font-bold text-lg text-yellow-500"></i>
                                    <p className='text-md'>Synthetic Motor Oil Replacement</p>
                                </div>
                            </Col>
                            <Col lg={5} className=''>
                                <div className="flex gap-2">
                                    <i className="bi bi-check font-bold text-lg text-yellow-500"></i>
                                    <p className='text-md'>Oil Filter Replacement</p>
                                </div>
                                <div className="flex gap-2">
                                    <i className="bi bi-check font-bold text-lg text-yellow-500"></i>
                                    <p className='text-md'>Brake Repair

                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <i className="bi bi-check font-bold text-lg text-yellow-500"></i>
                                    <p className='text-md'>Engine Diagnostic
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <i className="bi bi-check font-bold text-lg text-yellow-500"></i>
                                    <p className='text-md'>Belts, Hoses, Fluids
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <i className="bi bi-check font-bold text-lg text-yellow-500"></i>
                                    <p className='text-md'>Transmission Services
                                    </p>
                                </div>
                            </Col>
                            <p>Save yourself some time by scheduling service right here. After you submit the form, we’ll be in touch to confirm your service appointment. It doesn’t get much easier than that.</p>
                        </Row>
                    </Col>
                    <Col className=' ' lg={3}>
                        <div className='pt-4 pb-4'>
                            <img src="https://motors.stylemixthemes.com/elementor-dealer-two/wp-content/uploads/sites/24/2022/09/service-11-1024x683-1.jpg" alt="" />
                        </div>
                        <div className='pt-3 pb-4'>
                            <img src="https://motors.stylemixthemes.com/elementor-dealer-two/wp-content/uploads/sites/24/2022/10/service-1-21-350x205-1.jpeg" alt="" />
                        </div>
                    </Col>
                </Row>
                {/* Second */}
                <Row className="justify-center gap-2 h-auto mt-5">
                    <Col className='service_3 pb-5' lg={12}>
                        <Row className="justify-center gap-5 mt-5 flex-wrap">
                            <Col className='  flex gap-3 justify-center items-center' lg={3}>
                                <div className="">
                                    <GiMagicLamp className='text-yellow-400' size={50} />
                                </div>
                                <div className="">
                                    <p className='text-white font-semibold'>OIL CHANGES</p>
                                    <p className='text-gray-400 hover:text-gray-100'>Lorem ipsum dolor sit amet, adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. </p>
                                </div>
                            </Col>
                            <Col className='  flex gap-3 justify-center items-center' lg={3}>
                                <div className="">
                                    <FaAirFreshener className='text-yellow-400' size={50} />
                                </div>
                                <div className="">
                                    <p className='text-white font-semibold'>AIR CONDITIONING</p>
                                    <p className='text-gray-400 hover:text-gray-100'>Lorem ipsum dolor sit amet, adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. </p>
                                </div>
                            </Col>
                            <Col className='  flex gap-3 justify-center items-center' lg={3}>
                                <div className="">
                                    <GiElectricalResistance className='text-yellow-400' size={50} />
                                </div>
                                <div className="">
                                    <p className='text-white font-semibold'>AUTO ELECTRIC</p>
                                    <p className='text-gray-400 hover:text-gray-100'>Lorem ipsum dolor sit amet, adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. </p>
                                </div>
                            </Col>
                            <Col className='  flex gap-3 justify-center items-center' lg={3}>
                                <div className="">
                                    <MdHomeRepairService className='text-yellow-400' size={50} />
                                </div>
                                <div className="">
                                    <p className='text-white font-semibold'>BRAKE SERVICE</p>
                                    <p className='text-gray-400 hover:text-gray-100'>Lorem ipsum dolor sit amet, adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. </p>
                                </div>
                            </Col>
                            <Col className='  flex gap-3 justify-center items-center' lg={3}>
                                <div className="">
                                    <FaRulerCombined className='text-yellow-400' size={50} />
                                </div>
                                <div className="">
                                    <p className='text-white font-semibold'>TRANSMISSION</p>
                                    <p className='text-gray-400 hover:text-gray-100'>Lorem ipsum dolor sit amet, adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. </p>
                                </div>
                            </Col>
                            <Col className='  flex gap-3 justify-center items-center' lg={3}>
                                <div className="">
                                    <GiMartyrMemorial className='text-yellow-400' size={50} />
                                </div>
                                <div className="">
                                    <p className='text-white font-semibold'>TIRE & WHEEL SERVICE</p>
                                    <p className='text-gray-400 hover:text-gray-100'>Lorem ipsum dolor sit amet, adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. </p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <ScheduleService/>
            </Container>
            <div className='bg-amber-400 h-auto p-3 mt-5 d-flex justify-content-center flex-wrap align-items-center gap-5 ' >
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
    )
}
