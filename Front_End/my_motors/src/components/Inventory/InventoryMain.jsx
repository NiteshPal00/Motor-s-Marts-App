import React, { useEffect, useState } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import axios from 'axios';
import { FaRoad } from "react-icons/fa";
import { GiAutomaticSas } from "react-icons/gi";
import { RiOilFill } from "react-icons/ri";
import { NavLink, useNavigate } from 'react-router-dom';
import Slider from '@mui/material/Slider';

export const InventoryMain = () => {
  const [homePro, setHomePro] = useState([]);
  const [path, setPath] = useState('');
  const [selectedBody, setSelectedBody] = useState('');
  const [selectedMake, setSelectedMake] = useState('');
  const [selectedCondition, setSelectedCondition] = useState('');
  const [selectedTransmission, setSelectedTransmission] = useState('');
  const [selectedFuelType, setSelectedFuelType] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedDrive, setSelectedDrive] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [priceRange, setPriceRange] = useState([0, 500000]);
  const [mileageRange, setSelectMileage] = useState([0, 250]);

  useEffect(() => {
    window.scrollTo(0, 0);
  })

  useEffect(() => {
    axios.get(`http://localhost:8001/get-getproductHomeDataAll`)
      .then((res) => {
        setHomePro(res.data.data);
        setPath(res.data.filepath);

      })
      .catch(err => console.log(err));
  }, []);

  const handleBodyChange = (e) => {
    setSelectedBody(e.target.value);
  };

  const handleMakeChange = (e) => {
    setSelectedMake(e.target.value);
  };

  const handleConditionChange = (e) => {
    setSelectedCondition(e.target.value);
  };

  const handleTransmissionChange = (e) => {
    setSelectedTransmission(e.target.value);
  };

  const handleFuelChange = (e) => {
    setSelectedFuelType(e.target.value);
  };

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  const handleDriveChange = (e) => {
    setSelectedDrive(e.target.value);
  };

  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
  };

  const handleMileageChange = (e, newValue) => {
    setSelectMileage(newValue);
  };

  const handlePriceRangeChange = (e, newValue) => {
    console.log(newValue);
    setPriceRange(newValue);
  };

  const resetFilters = () => {
    setSelectedBody('');
    setSelectedMake('');
    setSelectedCondition('');
    setSelectedTransmission('');
    setSelectedFuelType('');
    setSelectedYear('');
    setSelectedDrive('');
    setSelectedColor('');
    setPriceRange([0, 500000]);
    setSelectMileage([0, 500]);
  };

  const filteredHomePro = homePro.filter(elem => {
    const price = parseInt(elem.buy);
    if (price < priceRange[0] || price > priceRange[1]) {
      return false;
    }

    const mileage = parseInt(elem.mileage);
    if (mileage < mileageRange[0] || mileage > mileageRange[1]) {
      return false;
    }

    if (selectedBody && elem.body !== selectedBody) {
      return false;
    }
    if (selectedMake && elem.make !== selectedMake) {
      return false;
    }
    if (selectedCondition && elem.condition !== selectedCondition) {
      return false;
    }
    if (selectedTransmission && elem.transmission !== selectedTransmission) {
      return false;
    }
    if (selectedFuelType && elem.fuelType !== selectedFuelType) {
      return false;
    }
    if (selectedYear && elem.year !== selectedYear) {
      return false;
    }
    if (selectedDrive && elem.drive !== selectedDrive) {
      return false;
    }
    if (selectedColor && elem.exteriorColor !== selectedColor) {
      return false;
    }
    return true;
  });

  return (
    <>
      <div className="h-auto bg-black mt-5 w-full m-3 mx-auto pb-5">
        <div className='h-32 mb-4'></div>
        <Container fluid className='h-auto'>
          <Row className='justify-center h-auto gap-4'>
            <Col className=' h-auto' lg={8} md={12}>
              <h3 className=' text-white border-b-4 border-double font-bold text-start pb-2 m-1'>VEHICLES FOR SALE</h3>
              <Row className='justify-center'>
                {filteredHomePro.map((elem, index) => (
                  <React.Fragment key={index}>
                    <Col lg={4} md={5} sm={12} className='h-auto cursor-pointer mt-4 '>
                      <NavLink to={`/inventoryHead/${elem._id}`} className='no-underline'>
                        <div className="transition-all hover:translate-y-3 hov_1">
                          <div className="h-auto relative">
                            <img src={path + '/' + elem.images[1]} alt={elem.label} className='p-1 h-full w-full' />

                          </div>
                          <div className=" bg-gray-800 h-auto p-1">
                            <div className="border-b d-flex justify-content-center align-items-center flex-around h-30 p-4">
                              {elem && (
                                <>
                                  <p className='text-start h-20 text-md font-bold text-white mr-4 items-center flex uppercase'>{elem.title}</p>
                                  <div className='rounded-sm px-2 me-1 text-center bg-blue-600  hover:bg-blue-700'>
                                    <span className='text-gray-400 text-sm font-semibold'>Buy&nbsp;Online</span>
                                    <br />
                                    <span className='font-bold text-white'> ${elem.buy} </span>
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
                                  <span className='flex'> <GiAutomaticSas size={20} className='me-1' />{elem.transmission}</span>
                                  <span className='flex'> <RiOilFill size={20} className='me-1' />{elem.petrol}</span>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </Col>
                  </React.Fragment>
                ))}
              </Row>
            </Col>
            <Col className=' h-auto p-2' lg={2} md={6}>
              <Row className='justify-center'>
                <Col className='w-100 h-30'>
                  <h3 className=' text-white font-bold text-start'>Search Options</h3>
                  <select className='w-100 h-10 border-4 mt-4 border-blue-500 bg-black text-white font-semibold text-center' value={selectedBody} onChange={handleBodyChange}>
                    <option value="">Body</option>
                    {homePro.map((elem, ind) => (
                      <option key={ind} value={elem.body}>{elem.body}</option>
                    ))}
                  </select>
                  <select className='w-100 h-10 border-4  border-blue-500 mt-4 bg-black text-white font-semibold text-center' value={selectedMake} onChange={handleMakeChange}>
                    <option value="">Make</option>
                    {homePro.map((elem, ind) => (
                      <option key={ind} value={elem.make}>{elem.make}</option>
                    ))}
                  </select>
                  <select className='w-100 h-10 border-4  border-blue-500 mt-4 bg-black text-white font-semibold text-center' value={selectedCondition} onChange={handleConditionChange}>
                    <option value="">Condition</option>
                    {homePro.map((elem, ind) => (
                      <option key={ind} value={elem.condition}>{elem.condition}</option>
                    ))}
                  </select>
                  <div className="mt-4">
                    <h5 className="text-white mb-2 text-center">Price Range</h5>
                    <Slider
                      value={priceRange}
                      onChange={handlePriceRangeChange}
                      valueLabelDisplay="auto"
                      min={0}
                      max={500000}
                    />
                  </div>
                  <select className='w-100 h-10 border-4  border-blue-500 mt-4 bg-black text-white font-semibold text-center' value={selectedTransmission} onChange={handleTransmissionChange}>
                    <option value="">Transmission</option>
                    {homePro.map((elem, ind) => (
                      <option key={ind} value={elem.transmission}>{elem.transmission}</option>
                    ))}
                  </select>
                  <select className='w-100 h-10 border-4  border-blue-500 mt-4 bg-black text-white font-semibold text-center' value={selectedFuelType} onChange={handleFuelChange}>
                    <option value="">Fuel Type</option>
                    {homePro.map((elem, ind) => (
                      <option key={ind} value={elem.fuelType}>{elem.fuelType}</option>
                    ))}
                  </select>
                  <select className='w-100 h-10 border-4  border-blue-500 mt-4 bg-black text-white font-semibold text-center' value={selectedYear} onChange={handleYearChange}>
                    <option value="">Year</option>
                    {homePro.map((elem, ind) => (
                      <option key={ind} value={elem.year}>{elem.year}</option>
                    ))}
                  </select>
                  <select className='w-100 h-10 border-4  border-blue-500 mt-4 bg-black text-white font-semibold text-center' value={selectedDrive} onChange={handleDriveChange}>
                    <option value="">Drive</option>
                    {homePro.map((elem, ind) => (
                      <option key={ind} value={elem.drive}>{elem.drive}</option>
                    ))}
                  </select>
                  <div className="mt-4">
                    <h5 className="text-white text-center mb-2">Mileage Range</h5>
                    <Slider
                      value={mileageRange}
                      onChange={handleMileageChange}
                      valueLabelDisplay="auto"
                      min={0}
                      max={250}
                    />
                    <h6 className='text-white text-center'>  {mileageRange[0]} - {mileageRange[1]}</h6>
                  </div>
                  <select className='w-100 h-10 border-4  border-blue-500 mt-4 bg-black text-white font-semibold text-center' value={selectedColor} onChange={handleColorChange}>
                    <option value="">Exterior Color</option>
                    {homePro.map((elem, ind) => (
                      <option key={ind} value={elem.exteriorColor}>{elem.exteriorColor}</option>
                    ))}
                  </select>
                  <div className="justify-center flex items-center w-100 mt-4 border-white">
                    <button onClick={resetFilters} className='text-center bg-blue-600 px-4 rounded-sm py-2 font-bold text-white'>RESET ALL</button>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
