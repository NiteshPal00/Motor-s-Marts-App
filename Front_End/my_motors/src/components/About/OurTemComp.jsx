import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export const OurTemComp = () => {
  return (
    <>
      <Container fluid className="h-auto bg-gray-200 pt-2 pb-5 border-8   mt-5">
      <h1 className="text-black text-center pb-3"> OU<span className="border-b-8 border-yellow-400 border-double ">R T</span>EAM</h1>
        <Row className='justify-center align-items-center h-auto  gap-4' lg={5}>
          <Col className='h-auto ourTe_1' sm={12} md={5} >
            <div className="ourTe_3">
              <div className=" items-center justify-center flex flex-col">
                <img src="https://motors.stylemixthemes.com/elementor-dealer-two/wp-content/uploads/sites/24/2022/10/4-2-509x339-1-1.jpg" className='' alt="" />
              </div>
              <div className="text-gray-700 mt-2 h-20 flex items-center flex-col justify-center text-center ourTe_2">
               <h6>LENNOX WARDELL</h6>
               <h6>Chief Executive Officer</h6>
              </div>
             <div className="ourTe_4">
             <p className='text-center px-3 py-1 rounded-full bg-blue-600 text-white'>ceo@motors.com</p>
             <p className='text-center px-3 py-1 rounded-full bg-light text-gray-800'>+1-913-677-74-27</p>
             </div>
            </div>
          </Col>
          <Col className='h-auto ourTe_1' sm={12} md={5} >
            <div className="ourTe_3">
              <div className=" items-center justify-center flex flex-col">
                <img src="https://motors.stylemixthemes.com/elementor-dealer-two/wp-content/uploads/sites/24/2022/10/2_.jpg" className='' alt="" />
              </div>
              <div className="text-gray-700 mt-2 h-20 flex items-center flex-col justify-center text-center ourTe_2">
               <h6>SARAH ODEGARD</h6>
               <h6>President of Finance</h6>
              </div>
             <div className="ourTe_4">
             <p className='text-center px-3 py-1 rounded-full bg-blue-600 text-white'>s.odegard@motors.com</p>
             </div>
            </div>
          </Col>
          <Col className='h-auto ourTe_1' sm={12} md={5} >
            <div className="ourTe_3">
              <div className=" items-center justify-center flex flex-col">
                <img src="https://motors.stylemixthemes.com/elementor-dealer-two/wp-content/uploads/sites/24/2022/10/3-509x339-1.jpg" className='' alt="" />
              </div>
              <div className="text-gray-800 mt-2 h-20 flex items-center flex-col justify-center text-center ourTe_2">
               <h6>LARS JAKUBA</h6>
               <h6>Executive Vice President</h6>
              </div>
             <div className="ourTe_4">
             <p className='text-center px-3 py-1 rounded-full bg-light text-gray-800'>+1-913-677-74-27</p>
             </div>
            </div>
          </Col>
          <Col className='h-auto ourTe_1' sm={12} md={5} >
            <div className="ourTe_3">
              <div className=" items-center justify-center flex flex-col">
                <img src="https://motors.stylemixthemes.com/elementor-dealer-two/wp-content/uploads/sites/24/2022/10/1-509x339-1.jpg" className='' alt="" />
              </div>
              <div className="text-gray-700 mt-2 h-20 flex items-center flex-col justify-center text-center ourTe_2">
               <h6>MIKEY DIOKLES</h6>
               <h6>Sales Manager</h6>
              </div>
            </div>
          </Col>
         
        </Row>
      </Container>
    </>
  );
};
