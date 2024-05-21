import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { GiPathDistance } from "react-icons/gi";
import { LuMessagesSquare } from "react-icons/lu";
import { LuFileSpreadsheet } from "react-icons/lu";

export const RecentCars3 = () => {
  return (
    <>
        <div className="h-auto lg:p-10">
            <Row className="h-auto justify-content-center align-items-center gap-5" lg={4} >
               <Col className='h-auto border-gray-400' sm={12} md={5} >
                <Row className='justify-center items-center h-64'>
                    <Col className='h-auto'>
                       <div className="flex gap-4 border-black">
                        <div className="box_1 gap-1 flex items-center">
                        <GiPathDistance size={50} />
                        </div>
                        <div className="box_2">
                        <h6 className='text-bold text-xl pt-3'>WIDE RANGE OF BRANDS</h6>
                        <p className='text-slate-500 text-md font-sm pt-3'>With a robust selection of popular vehicles on hand, as well as leading vehicles from BMW and Ford.</p>
                        </div>
                       </div>
                    </Col>
                </Row>
               </Col>
               <Col className='h-auto border-gray-400 d-flex flex-column' sm={12} md={5} >
                <Row className='justify-center items-center h-64'>
                <Col className='h-auto '>
                       <div className="gap-4  p-1 flex">
                        <div className="box_1 gap-1 flex items-center">
                        <LuMessagesSquare size={50} />
                        </div>
                        <div className="box_2">
                        <h6 className='text-bold text-xl pt-3'>TRUSTED BY THOUSANDS</h6>
                        <p className='text-slate-500 text-md font-sm pt-3'>10 new offers every day. 350 offers on site, trusted by a community of thousands of users.</p>
                        </div>
                       </div>
                    </Col>
                </Row>
               </Col>
               <Col className='h-auto border-gray-400' sm={12} md={5} >
                <Row className='justify-center items-center h-64'>
                <Col className='h-auto '>
                       <div className="gap-4  p-1 flex">
                        <div className="box_1 gap-1 flex items-center">
                        <LuFileSpreadsheet size={50} />
                        </div>
                        <div className="box_2">
                        <h6 className='text-bold text-xl pt-3'>SERVICE & MAINTENANCE</h6>
                        <p className='text-slate-500 text-md font-sm pt-3'>Our stress-free finance department that can find financial solutions to save you money.</p>
                        </div>
                       </div>
                    </Col>
                </Row>
               </Col>

            </Row>
        </div>
    </>
  )
}
