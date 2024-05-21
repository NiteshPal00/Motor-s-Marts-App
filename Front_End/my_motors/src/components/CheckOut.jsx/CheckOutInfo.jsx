import React from 'react';
import { Formik } from 'formik';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CheckOutInfo = () => {
    const navigateDetails = useNavigate();
    const totalPrice = JSON.parse(localStorage.getItem("total"));
    console.log(totalPrice);
    
    const initialValues = {
        first_name: '',
        last_name: '',
        street_address: '',
        town: '',
        state: '',
        zip_code: '',
        phone: '',
        email: '',
        company_name: '',
        order_notes: '',
        total_price: totalPrice
    };
    
    return (
        <div>
            <Formik
                initialValues={{
                    initialValues
                }}
                validate={values => {
                    const errors = {};
                    if (!values.first_name) {
                        errors.first_name = 'Required';
                    }
                    if (!values.last_name) {
                        errors.last_name = 'Required';
                    }
                    if (!values.street_address) {
                        errors.street_address = 'Required';
                    }
                    if (!values.town) {
                        errors.town = 'Required';
                    }
                    if (!values.state) {
                        errors.state = 'Required';
                    }
                    if (!values.zip_code) {
                        errors.zip_code = 'Required';
                    } else if (!/^\d{5}$/.test(values.zip_code)) {
                        errors.zip_code = 'Invalid zip code';
                    }
                    if (!values.phone) {
                        errors.phone = 'Required';
                    } else if (!/^\d{10}$/.test(values.phone)) {
                        errors.phone = 'Invalid phone number';
                    }
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                        errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    axios.post('http://localhost:8001/addCheckout', values)
                        .then(response => {
                            console.log(response);
                            alert('Form submitted successfully!');
                        })
                        .catch(error => {
                            console.error('Error:', error);
                            alert('An error occurred while submitting the form.');
                        })
                        .finally(() => {
                            setSubmitting(false); 
                        });
                    navigateDetails(`/checkout/checkoutDetails`);
                }}
                
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                }) => (
                    <form onSubmit={handleSubmit}>
                        <Container className="mt-5 mb-4 pt-3">
                            <Row className='justify-content-center'>
                                <Col className='border-blue-400 border-3 h-16 flex justify-start items-center' lg={12}>
                                    <div className='flex gap-2'>
                                        <i className="bi bi-info-circle font-bold text-lg text-blue-800 ps-3"></i>
                                        <h6 className='font-bold text-md'>
                                            <span className='text-blue-800'>INFORMATIONAL.</span> HAVE A COUPON?
                                            <span className='cursor-pointer hover:text-yellow-400'> CLICK HERE TO ENTER YOUR CODE</span>
                                        </h6>
                                    </div>
                                </Col>
                            </Row>
                            <Row className='justify-content-center mt-5'>
                                <Col lg={6} className=''>
                                    <h6 className='font-bold text-md p-2'>BILLING DETAILS</h6>
                                    <Row className='justify-content-center'>
                                        <Col>
                                            {/* First Name */}
                                            <label htmlFor="first_name" className='text-gray-600 font-bold text-sm mt-3'>First Name</label>
                                            <br />
                                            <input
                                                type="text"
                                                id='first_name'
                                                name='first_name'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.first_name}
                                                className={`w-full h-12 ps-2 cursor-pointer border-2 bg-gray-300 rounded-md focus:outline-blue-500 ${errors.first_name && 'border-red-500'}`}
                                                required
                                            />
                                            {errors.first_name && <p className="text-red-500 text-center font-bold text-md">{errors.first_name}</p>}

                                            {/* Last Name */}
                                            <label htmlFor="last_name" className='text-gray-600 font-bold text-sm mt-3'>Last Name</label>
                                            <br />
                                            <input
                                                type="text"
                                                id='last_name'
                                                name='last_name'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.last_name}
                                                className={`w-full h-12 ps-2 cursor-pointer border-2 bg-gray-300 rounded-md focus:outline-blue-500 ${errors.last_name && 'border-red-500'}`}
                                                required
                                            />
                                            {errors.last_name && <p className="text-red-500 text-center font-bold text-md">{errors.last_name}</p>}

                                            {/* Company Name */}
                                            <label htmlFor="company_name" className='text-gray-600 font-bold text-sm mt-3'>Company Name</label>
                                            <br />
                                            <input
                                                type="text"
                                                id='company_name'
                                                name='company_name'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.company_name}
                                                className='w-full h-12 ps-2 cursor-pointer border-2 bg-gray-300 rounded-md focus:outline-blue-500'
                                            />

                                            {/* Street Address */}
                                            <label htmlFor="street_address" className='text-gray-600 font-bold text-sm mt-3'>Street Address</label>
                                            <br />
                                            <input
                                                type="text"
                                                id='street_address'
                                                name='street_address'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.street_address}
                                                className={`w-full h-12 ps-2 cursor-pointer border-2 bg-gray-300 rounded-md focus:outline-blue-500 ${errors.street_address && 'border-red-500'}`}
                                                required
                                            />
                                            {errors.street_address && <p className="text-red-500 text-center font-bold text-md">{errors.street_address}</p>}

                                            {/* Town */}
                                            <label htmlFor="town" className='text-gray-600 font-bold text-sm mt-3'>Town</label>
                                            <br />
                                            <input
                                                type="text"
                                                id='town'
                                                name='town'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.town}
                                                className={`w-full h-12 ps-2 cursor-pointer border-2 bg-gray-300 rounded-md focus:outline-blue-500 ${errors.town && 'border-red-500'}`}
                                                required
                                            />
                                            {errors.town && <p className="text-red-500 text-center font-bold text-md">{errors.town}</p>}

                                            {/* State */}
                                            <label htmlFor="state" className='text-gray-600 font-bold text-sm mt-3'>State</label>
                                            <br />
                                            <input
                                                type="text"
                                                id='state'
                                                name='state'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.state}
                                                className={`w-full h-12 ps-2 cursor-pointer border-2 bg-gray-300 rounded-md focus:outline-blue-500 ${errors.state && 'border-red-500'}`}
                                                required
                                            />
                                            {errors.state && <p className="text-red-500 text-center font-bold text-md">{errors.state}</p>}

                                            {/* Zip Code */}
                                            <label htmlFor="state" className='text-gray-600 font-bold text-sm mt-3'>Zip Code</label>
                                            <br />
                                            <input
                                                type="text"
                                                id='zip_code'
                                                name='zip_code'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.zip_code}
                                                className={`w-full h-12 ps-2 cursor-pointer border-2 bg-gray-300 rounded-md focus:outline-blue-500 ${errors.zip_code && 'border-red-500'}`}
                                                required
                                            />
                                            {errors.zip_code && <p className="text-red-500 text-center font-bold text-md">{errors.zip_code}</p>}

                                            {/* Phone */}
                                            <label htmlFor="phone" className='text-gray-600 font-bold text-sm mt-3'>Phone</label>
                                            <br />
                                            <input
                                                type="tel"
                                                id='phone'
                                                name='phone'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.phone}
                                                className={`w-full h-12 ps-2 cursor-pointer border-2 bg-gray-300 rounded-md focus:outline-blue-500 ${errors.phone && 'border-red-500'}`}
                                                required
                                                pattern="\d{10}"
                                            />
                                            {errors.phone && <p className="text-red-500 text-center font-bold text-md">{errors.phone}</p>}

                                            {/* Email */}
                                            <label htmlFor="email" className='text-gray-600 font-bold text-sm mt-3'>Email</label>
                                            <br />
                                            <input
                                                type="email"
                                                id='email'
                                                name='email'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.email}
                                                className={`w-full h-12 ps-2 cursor-pointer border-2 bg-gray-300 rounded-md focus:outline-blue-500 ${errors.email && 'border-red-500'}`}
                                                required
                                            />
                                            {errors.email && <p className="text-red-500 text-center font-bold text-md">{errors.email}</p>}
                                        </Col>
                                    </Row>
                                    <button className=' bg-blue-600 hover:bg-blue-800 px-3 py-2 text-white font-bold text-md rounded-sm mt-3' type="submit" disabled={isSubmitting}>
                            PLACE ORDER
                        </button>
                                </Col>

                                <Col lg={6} className=''>
                                    <Row>
                                        <Col>
                                            <p className='font-bold text-xl p-2'>Additional information</p>
                                            <p className='text-gray-500 text-sm font-md ps-2 '> Order notes (optional) </p>
                                            <textarea
                                                name="order_notes"
                                                id="order_notes"
                                                className='border-2 bg-gray-300 p-2 text-black font-semibold text-lg focus:outline-blue-500'
                                                cols={65}
                                                rows="10"
                                                value={values.order_notes}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            ></textarea>
                                        </Col>
                                    </Row>
                                    
                                </Col>
                                
                            </Row>
                        </Container>
                       
                    </form>
                )}
            </Formik>
        </div>
    );
};

export default CheckOutInfo;
