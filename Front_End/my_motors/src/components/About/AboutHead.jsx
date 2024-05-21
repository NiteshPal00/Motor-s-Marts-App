import React from 'react';
import { Row, Col } from 'react-bootstrap';

export const AboutHead = () => {
  return (
    <div className="container mx-auto my-5">
      {/* First Section */}
      <Row className='flex-wrap justify-content-center items-center pt-10 '>
        <Col lg={5} md={12} sm={12}>
          <img src="https://motors.stylemixthemes.com/elementor-dealer-two/wp-content/uploads/sites/24/2022/10/about-us-1-529x290-1.jpeg" alt="Motors Image" className='h-100 w-100 rounded-md' />
        </Col>
        <Col lg={6} md={12} sm={12} className='pt-5'>
          <h4 className='font-bold text-2xl'>WELCOME TO THE <span className='text-yellow-400'>MOTORS</span></h4>
          <p className='text-md text-zinc-500'>Welcome to Loeber Motors. While nothing can replace the on-the-lot experience, we appreciate you visiting our website. Our goal is to provide an interactive tour of our inventory and convenient services.</p>
          <p className='text-md'>The search for a luxury car is filled with high expectations. At Motors, we think you should have high expectations for your dealership.</p>
          <i className='text-md text-zinc-500'> — MIKEY DIOKLES, President of Motors</i>
        </Col>
      </Row>

      {/* Second Section */}
      <Row className='flex-wrap justify-content-center items-center pt-10'>
        <Col lg={6} md={12} sm={12} className='pt-5'>
          <h4 className='font-bold text-2xl border-bottom mb-3 pb-3'>CORE VALUES</h4>
          <p className='text-md text-zinc-500'>We go through extensive factory training to provide you with the knowledge you need to make an educated decision in choosing the right vehicle for your lifestyle.</p>
          <p className='text-md mb-0'><i className="bi bi-check font-bold text-2xl text-yellow-500"></i> Stress-free finance department.</p>
          <p className='text-md mb-0'><i className="bi bi-check font-bold text-2xl text-yellow-500"></i> Robust selection of popular vehicles.</p>
          <p className='text-md mb-0'><i className="bi bi-check font-bold text-2xl text-yellow-500"></i> 350 offers on site, trusted by a community.</p>
          <p className='text-md mb-0'><i className="bi bi-check font-bold text-2xl text-yellow-500"></i> Maintain your car to stay safe on the road.</p>
          <p className='text-md mb-0'><i className="bi bi-check font-bold text-2xl text-yellow-500"></i> We know how to handle a wide range of car services.</p>
        </Col>
        <Col lg={5} md={12} sm={12}>
          <img src="https://motors.stylemixthemes.com/elementor-dealer-two/wp-content/uploads/sites/24/2022/09/first-parallax-block-1-270x180.jpg" alt="Parallax Image" className='h-100 w-100 rounded-md' />
        </Col>
      </Row>
    </div>
  );
};
