import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export const ContactDetail = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
        subscribe: false,
    });

    const [formErrors, setFormErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
        setFormErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
    };

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: checked }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        validateForm();
    };

    const validateForm = () => {
        const errors = {};

        if (!formData.firstName.trim()) {
            errors.firstName = 'First Name is required';
        }

        if (!formData.lastName.trim()) {
            errors.lastName = 'Last Name is required';
        }

        if (!formData.email.trim()) {
            errors.email = 'Email is required';
        } else if (!isValidEmail(formData.email)) {
            errors.email = 'Invalid email format';
        }

        // You can add more validation rules for other fields

        setFormErrors(errors);

        if (Object.keys(errors).length === 0) {
            console.log('Form submitted:', formData);
            // Handle further logic (e.g., form submission to server) here
        }
    };

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    return (
       <Container fluid className=''>
         <Container className="h-auto border border-zinc-900 p-4 shadow-lg z-40">
            <Row className='justify-content-center'>
                <Col lg={10}>
                    <div className='h-22 items-center flex'>
                        <h1 className='text-start text-black font-bold text-shadow-md'>CONTACT US</h1>
                    </div>
                </Col>
                <Col>
                    <div className='h-52 p-4'>
                        <Col lg={3} className='h-96 items-center justify-center flex flex-col w-100'>
                            <p className='text-black font-sm text-md'>First Name*</p>
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                className={`mb-10 p-2 placeholder-black font-sm bg-slate-200 border focus:outline-none focus:ring focus:border-blue-300 ${formErrors.firstName && 'border-red-500'}`}
                                placeholder='Enter your first name'
                            />
                            {formErrors.firstName && <p className="text-red-500 text-md">{formErrors.firstName}</p>}
                            <p className='text-black font-sm text-md'>Email*</p>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className={`p-2 placeholder-black font-sm bg-slate-200 border focus:outline-none focus:ring focus:border-blue-300 ${formErrors.email && 'border-red-500'}`}
                                placeholder='email@domain.com'
                            />
                            {formErrors.email && <p className="text-red-500 text-md">{formErrors.email}</p>}
                        </Col>
                    </div>
                </Col>
                <Col>
                    <div className='h-96 p-4'>
                        <Col lg={3} className='h-96 items-center justify-center flex flex-col w-100'>
                            <p className='text-black font-sm text-md'>Last Name*</p>
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleInputChange}
                                className={`mb-10 p-2 placeholder-black font-sm bg-slate-200 border focus:outline-none focus:ring focus:border-blue-300 ${formErrors.lastName && 'border-red-500'}`}
                                placeholder='Enter your last name'
                            />
                            {formErrors.lastName && <p className="text-red-500 text-md">{formErrors.lastName}</p>}
                            <p className='text-black font-sm text-md'>Phone</p>
                            <input
                                type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                className={`p-2 placeholder-black font-sm bg-slate-200 border focus:outline-none focus:ring focus:border-blue-300`}
                                placeholder='Phone number'
                            />
                        </Col>
                    </div>
                </Col>
                <Col>
                    <div className='h-96 p-4'>
                        <Col lg={3} className='h-96 items-center justify-center flex flex-col w-100'>
                            <p className='text-black font-sm text-md'>Message</p>
                            <textarea
                                type="text"
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                className={`p-4 bg-slate-200 text-black border focus:outline-none focus:ring focus:border-blue-300 text-left placeholder-black font-sm ${formErrors.message && 'border-red-500'}`}
                                placeholder='Enter your message...'
                            />
                            {formErrors.message && <p className="text-red-500 text-md">{formErrors.message}</p>}
                        </Col>
                    </div>
                </Col>
                <div className='h-auto items-center justify-center flex-wrap flex'>
                    <Col>
                        <div className='h-auto'>
                            <Col lg={4} className='items-center justify-around ps-3 flex flex-wrap w-auto'>
                                <div>
                                    <input
                                        type="checkbox"
                                        id="subscribe"
                                        name="subscribe"
                                        checked={formData.subscribe}
                                        onChange={handleCheckboxChange}
                                        className="ps-3"
                                    />
                                    <label htmlFor="subscribe" className="ps-3">Subscribe and Get the latest updates and offers by Email</label>
                                </div>
                                <button
                                    onClick={handleSubmit}
                                    className="bg-blue-500 hover:bg-yellow-400 text-white font-bold text-lg py-2 px-5 focus:outline-none focus:shadow-outline-blue rounded-sm"
                                >
                                    Submit
                                </button>
                            </Col>
                        </div>
                    </Col>
                </div>
            </Row>
        </Container>
       </Container>
    );
};

