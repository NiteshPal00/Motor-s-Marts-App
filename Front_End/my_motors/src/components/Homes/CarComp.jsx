import React from 'react';
import { Col } from 'react-bootstrap';

export const CarComp = () => {
  return (
    <div className='h-screen bg-slate-200'>
      <div className="h-100 flex justify-center items-center">
        <Col lg={11} sm={12} className="h-100">
          <img src="https://motors.stylemixthemes.com/elementor-dealer-two/wp-content/uploads/sites/24/2022/08/999.jpg" alt="" className='w-100 h-100 object-cover' />
        </Col>
      </div>
    </div>
  );
};
