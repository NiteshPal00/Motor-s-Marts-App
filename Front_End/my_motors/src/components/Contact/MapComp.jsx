import React from 'react'
import { Col, Container, Row, Nav, Tab } from 'react-bootstrap'

export const MapComp = () => {
    return (
        <>
            <Container fluid className="bg-slate-200 mt-5 mb-3 p-5">
            <Row className='justify-content-center'>
                <Col className='border' lg={4}>
                    <Tab.Container defaultActiveKey="pills-home">
                        <div className="flex justify-center bg-black p-3">
                            <Nav variant="" className="d-flex justify-content-center align-items-center">
                                <Nav.Item>
                                    <Nav.Link eventKey="pills-home" className="nav-link bg-white text-black">Home</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="pills-profile" className="nav-link">Profile</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="pills-contact" className="nav-link">Contact</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>
                        <Tab.Content>
                                <Tab.Pane eventKey="pills-home">
                                    <div className="h-auto bg-light flex justify-center items-center pt-4">
                                        <div className="w-25 flex justify-center">
                                            <i className="bi bi-geo-alt-fill text-yellow-500 text-4xl "></i>
                                        </div>
                                        <div className="w-65">
                                            <h6 className='font-bold text-lg'>Address</h6>
                                            <p className='text-zinc-400 text-md font-md'>1840 E Garvey Ave South West Covina, CA 91791</p>
                                        </div>
                                    </div>
                                    <div className="h-auto bg-light flex justify-center items-center">
                                        <div className="w-25 flex justify-center">
                                            <i className="bi bi-telephone text-yellow-500 text-4xl "></i>
                                        </div>
                                        <div className="w-80">
                                            <h6 className='font-bold text-lg'>Sales Phone</h6>
                                            <p className='text-zinc-400 text-md font-md'>(888) 354-1781</p>
                                        </div>
                                    </div>
                                    <div className="h-auto bg-light flex justify-center items-center">
                                        <div className="w-25 flex justify-center">
                                            <i className="bi bi-clock text-yellow-500 text-4xl "></i>
                                        </div>
                                        <div className="w-80">
                                            <h6 className='font-bold text-lg'>Sales Hours</h6>
                                            <p className='text-zinc-400 text-md font-md'>Mon – Fri: 09:00AM – 09:00PM</p>
                                            <p className='text-zinc-400 text-md font-md'>Saturday: 09:00AM – 07:00PM</p>
                                            <p className='text-zinc-400 text-md font-md'>Sunday: Closed</p>
                                        </div>
                                    </div>

                                </Tab.Pane>
                                <Tab.Pane eventKey="pills-profile">
                                    <div className="h-auto bg-light flex justify-center items-center pt-4">
                                        <div className="w-25 flex justify-center">
                                            <i className="bi bi-geo-alt-fill text-yellow-500 text-4xl "></i>
                                        </div>
                                        <div className="w-65">
                                            <h6 className='font-bold text-lg'>Address</h6>
                                            <p className='text-zinc-400 text-md font-md'>1840 E Garvey Ave South West Covina, CA 91791</p>
                                        </div>
                                    </div>
                                    <div className="h-auto bg-light flex justify-center items-center">
                                        <div className="w-25 flex justify-center">
                                            <i className="bi bi-telephone text-yellow-500 text-4xl "></i>
                                        </div>
                                        <div className="w-80">
                                            <h6 className='font-bold text-lg'>Sales Phone</h6>
                                            <p className='text-zinc-400 text-md font-md'>(888) 354-1781</p>
                                        </div>
                                    </div>
                                    <div className="h-auto bg-light flex justify-center items-center">
                                        <div className="w-25 flex justify-center">
                                            <i className="bi bi-clock text-yellow-500 text-4xl "></i>
                                        </div>
                                        <div className="w-80">
                                            <h6 className='font-bold text-lg'>Sales Hours</h6>
                                            <p className='text-zinc-400 text-md font-md'>Mon – Fri: 09:00AM – 09:00PM</p>
                                            <p className='text-zinc-400 text-md font-md'>Saturday: 09:00AM – 07:00PM</p>
                                            <p className='text-zinc-400 text-md font-md'>Sunday: Closed</p>
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="pills-contact">
                                    <div className="h-auto bg-light flex justify-center items-center pt-4">
                                        <div className="w-25 flex justify-center">
                                            <i className="bi bi-geo-alt-fill text-yellow-500 text-4xl "></i>
                                        </div>
                                        <div className="w-65">
                                            <h6 className='font-bold text-lg'>Address</h6>
                                            <p className='text-zinc-400 text-md font-md'>1840 E Garvey Ave South West Covina, CA 91791</p>
                                        </div>
                                    </div>
                                    <div className="h-auto bg-light flex justify-center items-center">
                                        <div className="w-25 flex justify-center">
                                            <i className="bi bi-telephone text-yellow-500 text-4xl "></i>
                                        </div>
                                        <div className="w-80">
                                            <h6 className='font-bold text-lg'>Sales Phone</h6>
                                            <p className='text-zinc-400 text-md font-md'>(888) 354-1781</p>
                                        </div>
                                    </div>
                                    <div className="h-auto bg-light flex justify-center items-center">
                                        <div className="w-25 flex justify-center">
                                            <i className="bi bi-clock text-yellow-500 text-4xl "></i>
                                        </div>
                                        <div className="w-80">
                                            <h6 className='font-bold text-lg'>Sales Hours</h6>
                                            <p className='text-zinc-400 text-md font-md'>Mon – Fri: 09:00AM – 09:00PM</p>
                                            <p className='text-zinc-400 text-md font-md'>Saturday: 09:00AM – 07:00PM</p>
                                            <p className='text-zinc-400 text-md font-md'>Sunday: Closed</p>
                                        </div>
                                    </div>
                                </Tab.Pane>
                                </Tab.Content>
                    </Tab.Container>
                </Col>
                <Col className='h-100' lg={6}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d60275.41730275748!2d72.81098550619852!3d19.22952133809416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1707896105765!5m2!1sen!2sin"
                        width="100%"
                        height="425"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Map"
                    />
                </Col>
            </Row>
        </Container>
        </>
    )
}
