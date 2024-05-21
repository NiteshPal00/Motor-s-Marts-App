import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FcSearch } from 'react-icons/fc';
import { FaSearchDollar } from 'react-icons/fa';

export const RecentBox2 = () => {
    const navigate = useNavigate();

    const onClickHandler = () => {
        navigate(`/inventory`);
    };

    return (
        <>
            <div className='mt-5 bg-cover h-auto bg-center mb-3 recentbox2_1 sm:h-auto sm:p-10  md:h-auto'>
                <Row className='w-100 h-auto pb-3 justify-center items-center flex-wrap gap-4 '>
                    <Col className='h-auto bg-light ps-4 p-4' lg={5} sm={12} md={5}>
                        <div className='h-24 flex items-center ps-2'>
                            <FcSearch size={50} className='font-bold' />
                        </div>
                        <div className='h-auto sm:h-auto md:h-auto'>
                            <h3 className='text-3xl font-bold'>LOOKING FOR A CAR?</h3>
                            <p className='text-slate-600 text-xl'>
                                Our cars are delivered fully-registered with all requirements completed. We’ll deliver your car wherever you are.
                            </p>
                        </div>
                        <div className='h-32 sm:h-auto md:h-auto'>
                            <button
                                onClick={onClickHandler}
                                className='bg-blue-500 hover:bg-yellow-500 text-white font-bold text-md py-3 px-5 rounded'>
                                INVENTORY
                            </button>
                        </div>
                    </Col>
                    <Col className='h-auto bg-yellow-500 ps-4 p-3' lg={5} sm={12} md={5}>
                        <div className='h-24 flex items-center ps-2'>
                            <FaSearchDollar size={50} className='font-bold text-black' />
                        </div>
                        <div className='h-auto p-2 sm:h-auto md:h-auto'>
                            <h3 className='text-3xl font-bold'>WANT TO SELL A CAR?</h3>
                            <p className='text-light text-xl'>
                                Receive the absolute best value for your trade-in vehicle. We even handle all paperwork. Schedule an appointment!
                            </p>
                        </div>
                        <div className='h-32 sm:h-auto md:h-auto'>
                            <button className='bg-blue-500 hover:bg-black text-white font-bold text-md py-3 px-5 rounded'>
                                SELL YOUR CAR
                            </button>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    );
};
