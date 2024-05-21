import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const OrderDetails = () => {
    const navigate = useNavigate();
    const [checkoutData, setCheckoutData] = useState([]);
    const [totalPrice, setTotalPrice] = useState(null);
    const onClickHandler = () => {
        navigate(`/`)
    }
    useEffect(() => {
        const totalPriceFromLocalStorage = JSON.parse(localStorage.getItem("totalData"));
        setTotalPrice(totalPriceFromLocalStorage);

        axios.get(`http://localhost:8001/getCheckouts`)
            .then((res) => {
                console.log(res.data);
                setCheckoutData(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <Container className=' h-auto mt-32 mb-2 bg-black'>
            <Row className="justify-content-center mt-5">
                <Col className=' h-auto pb-3 pt-4 mt-5 text-white' lg={8}>
                    {checkoutData && checkoutData.map((elem, ind) => (
                        <div key={ind}>
                            <div className="bg-black ">
                                <h4>Hii! {elem.first_name}{elem.last_name} </h4>
                                <h6>Your reference id no is  <span className='text-danger cursor-pointer'> #{elem._id}</span> </h6>
                                <h6>Total ${totalPrice}</h6>
                                <h6 className='text-green-600'>Happy Shopping!!!</h6>
                            </div>
                        </div>
                    ))}
                    <Col>
                        <button onClick={onClickHandler} className=' mt-2 px-3 text-white bg-red-500 hover:bg-blue-600 font-bold rounded-md py-2 '>Go Back To Home</button>
                    </Col>
                </Col>
            </Row>
        </Container>
    );
};
