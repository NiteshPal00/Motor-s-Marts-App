import React, { useEffect, useState } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import axios from 'axios';
import { FaRoad } from "react-icons/fa";
import { GiAutomaticSas } from "react-icons/gi";
import { RiOilFill } from "react-icons/ri";
import { NavLink } from 'react-router-dom';

export const RecentCars = () => {
  const [homePro, setHomePro] = useState([]);
  const [path, setPath] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:8001/get-getproductHomeDataAll`)
      .then((res) => {
        // console.log(res.data.data);
        setHomePro(res.data.data);
        setPath(res.data.filepath);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <div className="h-auto bg-white mt-5 w-full m-3 mx-auto">
        <div className='text-center'>
          <p className='font-bold text-5xl p-2'> RECENT <span className='text-yellow-500'>CARS</span> </p>
          <p className='text-xl font-lg mb-5'>Curabitur tellus leo, euismod sit amet gravida at, egestas sed commodo.</p>
        </div>
        <Container fluid className='h-auto'>
          <Row className='justify-center gap-4'>
            {homePro && homePro.slice(0,5).map((elem, index) => (
              <React.Fragment key={index}>
               <Col lg={3} md={6} sm={12} className='h-auto cursor-pointer'>
               <NavLink to={`/singlePage/${elem._id}`} className='no-underline' >
                 <div className="transition-all hover:translate-y-3">
                 <div className="h-auto">
                   <img src={path + '/' + elem.images[0]} alt={elem.label} className='p-1 w-full' />
                   
                  </div>
                  <div className=" bg-gray-800 h-auto p-1">
                    <div className="border-b d-flex justify-content-center align-items-center flex-around h-30 p-4">
                      {elem && (
                        <>
                          <p className='text-start h-20 text-md font-bold text-white mr-4 items-center flex uppercase'>{elem.title}</p>
                          <div className='rounded-sm px-2 me-1 text-center bg-blue-600  hover:bg-blue-700'>
                            <span className='text-gray-400 text-sm font-semibold'>Buy&nbsp;Online</span>
                            <br />
                            <span  className='font-bold text-white'> ${elem.buy} </span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                  <div className=" h-auto bg-gray-800 ">
                    <div className="h-16 flex justify-center items-center gap-4 text-white">
                      {elem && (
                        <>
                          <span className='flex'> <FaRoad size={20} className='me-1' /> {elem.mileage}</span>
                          <span className='flex'> <GiAutomaticSas  size={20} className='me-1' />{elem.transmission}</span>
                          <span className='flex'> <RiOilFill size={20} className='me-1' />{elem.petrol}</span>
                        </>
                      )}
                    </div>
                  </div>
                 </div>
                  </NavLink>
                  
                </Col>
            
                {(index + 1) % 4 === 0 && (
                  <Col lg={3} md={3} sm={1} className='h-auto cursor-pointer relative group skew-x-3'>
                    <div className="relative h-100 w-100">
                      <img src="https://motors.stylemixthemes.com/elementor-dealer-two/wp-content/uploads/sites/24/2021/03/cruze2x-350x356-1.jpg" alt="" className='h-100 w-100 group-hover:opacity-50' />
                      <div className="bg-black h-full w-full absolute top-0 left-0 opacity-0 group-hover:opacity-50 transition-opacity duration-300 ease-in-out"></div>
                    </div>
                  </Col>
                )}
              </React.Fragment>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};
