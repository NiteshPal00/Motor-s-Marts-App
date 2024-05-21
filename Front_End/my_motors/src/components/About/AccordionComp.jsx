import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import '../Homes/home.css';

export const AccordionComp = () => {
  return (
    <>
      <Container fluid className="h-auto mt-5 d-flex align-items-center  bg-light-200 mb-3">
        <Row className="w-100 d-flex align-items-center justify-content-center gap-5">
          <Col lg={5} md={12} sm={12} className="h-auto text-black  h-md-auto h-sm-auto">
            <div className="h-auto">
              <h3 className='font-bold p-2 border-b border-slate-100'>OUR ADVANTAGES</h3>
            </div>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header> <i className="bi bi-car-front text-yellow-400 text-3xl pe-2"></i> Do You Want to sell a car?</Accordion.Header>
                <Accordion.Body>
                  What’s your car worth? Receive the absolute best value for your trade-in vehicle. We even handle all paperwork. Schedule your appointment today!
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header> <i className="bi bi-key text-blue-500 text-3xl pe-2"></i> Are You looking for a new car?</Accordion.Header>
                <Accordion.Body>
                  Our cars are delivered fully-registered with all requirements completed. We’ll deliver your car wherever you are.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header> <i className="bi bi-gear text-blue-500 text-3xl pe-2"></i> How to schedule a service online?</Accordion.Header>
                <Accordion.Body>
                  Maecenas consectetur nulla dolor, ac porttitor nunc hendrerit quis. Proin vitae rhoncus purus, id commodo massa. Aliquam erat volutpat.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col lg={5} md={12} sm={12} className="h-auto  h-md-auto h-sm-auto">
            <div className="h-auto">
              <h3 className='font-bold p-2  border-slate-100'>CUSTOMER TESTIMONIALS</h3>
            </div>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header> <i className="bi bi-car-front text-yellow-400 text-3xl pe-2"></i> Are You Looking for a New Car?</Accordion.Header>
                <Accordion.Body>
                We appreciate you taking the time today to visit our web site. Our goal is to give you an interactive tour of our new and used inventory, as well as allow you to conveniently get a quote, schedule a service appointment, or apply for financing. The search for a luxury car is filled with high expectations.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header> <i className="bi bi-tools text-blue-500 text-3xl pe-2"></i> Maintain your car to stay safe on the road</Accordion.Header>
                <Accordion.Body>
                Phasellus finibus pharetra ante, ut luctus lectus hendrerit non. Maecenas lacinia ligula sed molestie volutpat. Curabitur lobortis enim eget pretium consequat. Nunc maximus cursus magna sed vehicula. Mauris nulla lorem, interdum varius orci vitae, bibendum sagittis tellus. Nulla elementum dolor dui, vel condimentum erat vestibulum molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet risus lacus. Suspendisse pellentesque tempus enim ac hendrerit. Morbi cursus sapien eu nisl viverra mattis. Integer vestibulum enim dolor, sit amet maximus urna imperdiet ut.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header> <i className="bi bi-calendar-range text-blue-500 text-3xl pe-2"></i> We know how to handle a wide range of car services.</Accordion.Header>
                <Accordion.Body>
                Phasellus finibus pharetra ante, ut luctus lectus hendrerit non. Maecenas lacinia ligula sed molestie volutpat. Curabitur lobortis enim eget pretium consequat. Nunc maximus cursus magna sed vehicula. Mauris nulla lorem, interdum varius orci vitae, bibendum sagittis tellus. Nulla elementum dolor dui, vel condimentum erat vestibulum molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet risus lacus. Suspendisse pellentesque tempus enim ac hendrerit. Morbi cursus sapien eu nisl viverra mattis. Integer vestibulum enim dolor, sit amet maximus urna imperdiet ut.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>

        </Row>
      </Container>
    </>
  );
};
