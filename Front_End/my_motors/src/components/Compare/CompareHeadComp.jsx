import React, {useEffect} from 'react'
import '../Homes/home.css';
import { Row, Col, Container } from 'react-bootstrap';
import { CompareInfoComp } from './CompareInfoComp';

export const CompareHeadComp = () => {
  useEffect(() =>{
    window.scrollTo(0,0);
  })
  return (
    <>
      <Container fluid className='h-auto '>
        <Row className="bg-cover bg-center h-96  justify-content-start cart_1">
          <Col className=' flex justify-center items-center' lg={4}>
            <h1 className='text-white font-bold text-5xl h-52 items-end flex'>COMPARE</h1>
          </Col>
        </Row>
        <CompareInfoComp/>
      </Container>
    </>
  )
}
