import React from 'react'
import '../Homes/home.css';
import { Row, Col, Container } from 'react-bootstrap';
import CheckOutInfo from './CheckOutInfo';

export const CheckOutComp = () => {
  return (
    <>
      <Container fluid className='h-auto'>
        <Row className="bg-cover bg-center h-96  justify-content-start cart_1">
          <Col className=' flex justify-center items-center' lg={4}>
            <h1 className='text-white font-bold text-5xl h-52 items-end flex'>CHECKOUT</h1>
          </Col>
        </Row>
      </Container>
      <CheckOutInfo/>
    </>
  )
}
