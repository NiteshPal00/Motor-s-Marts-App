import React, { useEffect } from 'react'
import '../Homes/home.css';
import { Row, Col, Container } from 'react-bootstrap';

export const ServiceHead = () => {
    useEffect(() =>{
        window.scrollTo(0,0);
      })
    return (
        <>
            <Container fluid className='h-auto '>
                <div className="mt-24 ">
                    <Row className="bg-cover bg-center h-96   justify-content-start service_1">
                       <div className="service_2">
                       <Col className=' flex justify-center items-center' lg={4}>
                            <h1 className='text-white font-bold text-5xl h-52 items-end flex'>SERVICE</h1>
                        </Col>
                       </div>
                    </Row>
                </div>
            </Container>
        </>
    )
}
