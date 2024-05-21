import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import '../Homes/home.css';
import axios from 'axios';

export const CompareInfoComp = () => {
    const [compare, setCompare] = useState([])
    const [filepath, setfilePath] = useState("");
    const user = JSON.parse(localStorage.getItem("user"));
    // console.log(user);
    const userCompare = user._id;
    // console.log(userCompare);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8001/get-getCompareData/${userCompare}`);
                console.log(response.data.data);
                setCompare(response.data.data);
                setfilePath(response.data.filepath);
            } catch (error) {
                console.error('Error fetching cart data:', error);
            }
        };

        fetchData();
    }, [userCompare]);

    const onClickCompare = (index) => {
        const removeCompare = [...compare];
        const removedItem = removeCompare[index];
        removeCompare.splice(index, 1);
        setCompare(removeCompare);
        axios.delete(`http://localhost:8001/delete-deleteCompareItem/${removedItem._id}`)
            .catch((error) => {
                console.error('Error deleting cart item:', error);
            });
    };

    return (
        <>
            <Container fluid className="h-auto mt-5 mb-4">
                <Row lg={5} className='border-black h-auto gap-5 justify-start mb-3' >
                    <Col className='text-center'>
                        <Row>
                            <Col className='h-52 items-center justify-center flex align-middle'>
                                <p className='font-bold text-4xl text-center'>COMPARE <span className='border-b-4 border-dashed border-blue-900'>VEHI</span>CLES</p>
                            </Col>
                            <p className='text-gray-500 font-sm text-sm pt-2 text-center'  >-</p>

                            <Row className='justify-center mt-5'>
                                <Col className='border-b' lg={12}>
                                    <p className='text-gray-500 font-sm text-sm pt-2'>BODY</p>
                                </Col>
                                <Col className='border-b' lg={12}>
                                    <p className='text-gray-500 font-sm text-sm pt-2'>MILEAGE</p>
                                </Col>
                                <Col className='border-b' lg={12}>
                                    <p className='text-gray-500 font-sm text-sm pt-2'>TRANSMISSION</p>
                                </Col>
                                <Col className='border-b' lg={12}>
                                    <p className='text-gray-500 font-sm text-sm pt-2'>FUEL TYPE</p>
                                </Col>
                                <Col className='border-b' lg={12}>
                                    <p className='text-gray-500 font-sm text-sm pt-2'>ENGINE</p>
                                </Col>
                                <Col className='border-b' lg={12}>
                                    <p className='text-gray-500 font-sm text-sm pt-2'>YEAR</p>
                                </Col>
                                <Col className='border-b' lg={12}>
                                    <p className='text-gray-500 font-sm text-sm pt-2'>DRIVE</p>
                                </Col>
                                <Col className='border-b' lg={12}>
                                    <p className='text-gray-500 font-sm text-sm pt-2'>EXTERIOR COLOR</p>
                                </Col>
                                <Col className='border-b' lg={12}>
                                    <p className='text-gray-500 font-sm text-sm pt-2'>INTERIOR  COLOR</p>
                                </Col>
                            </Row>
                        </Row>
                    </Col>

                    {
                        Array.isArray(compare) && compare.slice(0, 3).map((elem, ind) => (
                            <Col className='text-center' key={ind}>
                                <Row>
                                    <Col className=' comp_2 h-52 items-center relative  justify-center flex align-middle bg-gray-100'>
                                        <img src={filepath +'/' + elem.image} alt='' className='h-auto w-auto' />
                                        <div className="flex justify-center items-center">
                                            <h6
                                                onClick={() => onClickCompare(compare.indexOf(elem))}
                                                className='border-2 bg-blue-800 text-white font-semibold p-2 w-100 cursor-pointer rounded-full absolute top-32 transition-all left-0 comp_1 '
                                            >
                                                REMOVE FROM LIST
                                            </h6>

                                        </div>
                                    </Col>

                                    <p className='text-gray-500 font-sm text-sm pt-2 text-center'   >ADD CAR TO COMPARE</p>
                                    <Row className='justify-center mt-5'>
                                        <Col className='border-b' lg={12}>
                                            <p className='text-gray-500 font-sm text-sm pt-2'>{elem.body}</p>
                                        </Col>
                                        <Col className='border-b' lg={12}>
                                            <p className='text-gray-500 font-sm text-sm pt-2'>{elem.mileage}</p>
                                        </Col>
                                        <Col className='border-b' lg={12}>
                                            <p className='text-gray-500 font-sm text-sm pt-2'>{elem.transmission}</p>
                                        </Col>
                                        <Col className='border-b' lg={12}>
                                            <p className='text-gray-500 font-sm text-sm pt-2'>{elem.fuelType}</p>
                                        </Col>
                                        <Col className='border-b' lg={12}>
                                            <p className='text-gray-500 font-sm text-sm pt-2'>{elem.engine}</p>
                                        </Col>
                                        <Col className='border-b' lg={12}>
                                            <p className='text-gray-500 font-sm text-sm pt-2'>{elem.year}</p>
                                        </Col>
                                        <Col className='border-b' lg={12}>
                                            <p className='text-gray-500 font-sm text-sm pt-2'>{elem.drive}</p>
                                        </Col>
                                        <Col className='border-b' lg={12}>
                                            <p className='text-gray-500 font-sm text-sm pt-2'>{elem.exteriorColor}</p>
                                        </Col>
                                        <Col className='border-b' lg={12}>
                                            <p className='text-gray-500 font-sm text-sm pt-2'>{elem.interiorColor}</p>
                                        </Col>
                                    </Row>
                                </Row>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </>
    )
}
