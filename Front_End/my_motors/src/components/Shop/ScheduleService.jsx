import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export const ScheduleService = () => {
  return (
    <>
      <Container className="h-auto p-2 mt-5">
      <h2 className="font-bold pt-2 pb-2">SCHEDULE SERVICE</h2>
      <Row className="justify-center">
        <Col className="h-auto" lg={8} md={5} sm={12}>
          <Row className="justify-center h-auto">
            <Col className="flex justify-center flex-wrap gap-2">
                <div>
                  <label className='text-gray-500 text-sm ' htmlFor="name_1">Name:</label>
                  <br />
                  <input type="text" id='name_1' className='border p-2 bg-gray-300 focus:outline-blue-400 ' />
                </div>
                <div>
                  <label className='text-gray-500 text-sm ' htmlFor="email_1">Email:</label>
                  <br />
                  <input type="text" id='email_1' className='border p-2 bg-gray-300 focus:outline-blue-400' />
                </div>
                <div>
                  <label className='text-gray-500 text-sm ' htmlFor="phone_1">Phone:</label>
                  <br />
                  <input type="text" id='phone_1' className='border p-2 bg-gray-300 focus:outline-blue-400' />
                </div>
              </Col>
              <Col className='flex justify-center flex-wrap gap-2'>
                <div>
                  <label className='text-gray-500 text-sm ' htmlFor="make_1">Make/Model:</label>
                  <br />
                  <input type="text" id='make_1' className='border p-2 bg-gray-300 focus:outline-blue-400' />
                </div>
                <div>
                  <label className='text-gray-500 text-sm ' htmlFor="mileage_1">Mileage:</label>
                  <br />
                  <input type="text" id='mileage_1' className='border p-2 bg-gray-300 focus:outline-blue-400' />
                </div>
                <div>
                  <label className='text-gray-500 text-sm ' htmlFor="time_1">Best Time:</label>
                  <br />
                  <input type="text" id='time_1' className='border p-2 bg-gray-300 focus:outline-blue-400' />
                </div>
              </Col>
           <Row className='h-auto  mt-4 justify-center items-center'>
            <Col className='h-auto' lg={3}>
            <button className='px-3 py-1 text-white bg-blue-500 hover:bg-yellow-300 font-bold'>REQUEST A SERVICE</button>
            </Col>
            <Col className='text-gray-500 text-sm' lg={9}>
            <p>By submitting this form you will be scheduling a service appointment at no obligation and will be contacted within 48 hours by a service advisor.</p>
            </Col>
           </Row>
            </Row>
          </Col>
          <Col className=' h-auto flex flex-col justify-center items-center border-2' lg={4}>
            <p className='text-gray-900 text-sm pt-3'> <i className="bi bi-calendar pe-2 text-blue-400"></i> HOURS OF OPERATION</p>
            <div className="flex items-center w-100 pt-2 justify-between border-b text-xs text-gray-500 font-semibold">
              <p>SUNDAY</p>
              <p>9:00 AM - 9.00 PM</p>
            </div>
            <div className="flex items-center w-100 pt-2 justify-between border-b text-xs text-gray-500 font-semibold">
              <p>MONDAY</p>
              <p>9:00 AM - 9.00 PM</p>
            </div>
            <div className="flex items-center w-100 pt-2 justify-between border-b text-xs text-gray-500 font-semibold">
              <p>TUESDAY</p>
              <p>9:00 AM - 9.00 PM</p>
            </div>
            <div className="flex items-center w-100 pt-2 justify-between border-b text-xs text-gray-500 font-semibold">
              <p>WEDNESDAY</p>
              <p>9:00 AM - 9.00 PM</p>
            </div>
            <div className="flex items-center w-100 pt-2 justify-between border-b text-xs text-gray-500 font-semibold">
              <p>THURSDAY</p>
              <p>9:00 AM - 9.00 PM</p>
            </div>
            <div className="flex items-center w-100 pt-2 justify-between border-b text-xs text-gray-500 font-semibold">
              <p>FRIDAY</p>
              <p>9:00 AM - 9.00 PM</p>
            </div>
            <div className="flex items-center w-100 pt-2 justify-between border-b text-xs text-gray-500 font-semibold">
              <p>SATURDAY</p>
              <p>9:00 AM - 9.00 PM</p>
            </div>
          </Col>

        </Row>
      </Container>
    </>
  )
}
