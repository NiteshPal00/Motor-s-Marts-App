import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaCircleNotch } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaTelegramPlane } from "react-icons/fa";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { FaCalculator } from "react-icons/fa";
import { MediaGalleryComp } from '../About/MediaGalleryComp';
import { TbEngine } from "react-icons/tb";
import { CgPerformance } from "react-icons/cg";
import { GiMartyrMemorial } from "react-icons/gi";

export const SinglePageInv = () => {
  const [homePro, setHomePro] = useState({});
  const [path, setPath] = useState('');
  const [instantSavings, setInstantSavings] = useState(0);
  const { id } = useParams();
  const [vehiclePrice, setVehiclePrice] = useState('');
  const [downPayment, setDownPayment] = useState('350');
  const [interestRate, setInterestRate] = useState('3');
  const [loanTerm, setLoanTerm] = useState('24');
  const [monthlyPayment, setMonthlyPayment] = useState('');
  const [totalInterest, setTotalInterest] = useState('');
  const [totalAmount, setTotalAmount] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  const calculateInterest = () => {
    const principal = parseFloat(vehiclePrice);
    const downPaymentAmount = parseFloat(downPayment);
    const rate = parseFloat(interestRate);
    const term = parseFloat(loanTerm);

    const adjustedPrincipal = principal - downPaymentAmount;

    const interest = (adjustedPrincipal * rate * term) / 100;

    const monthlyPayment = (adjustedPrincipal + interest) / term;
    setMonthlyPayment(monthlyPayment.toFixed(5));

    const totalInterest = (monthlyPayment * parseFloat(loanTerm)) - parseFloat(vehiclePrice);
    setTotalInterest(totalInterest.toFixed(5));

    const totalAmount = monthlyPayment * parseFloat(loanTerm);
    setTotalAmount(totalAmount.toFixed(5));;
  };

  useEffect(() => {
    axios.get(`http://localhost:8001/get-getproductHomeData/${id}`)
      .then((res) => {
        // console.log(res.data.data);
        setHomePro(res.data.data);
        setPath(res.data.filepath)
        console.log("Image paths:", path, homePro.images);
        const savings = homePro.buy - homePro.msrp;
        setInstantSavings(savings);
        // console.log(savings);
      })
      .catch(err => console.log(err));
  }, [id]);

  console.log(homePro);
  useEffect(() => {
    const savings = homePro.buy - homePro.msrp;
    setInstantSavings(savings);
  }, [homePro]);

  const user = JSON.parse(localStorage.getItem('user'));
  // console.log(user)

  const cartNavigate = useNavigate();
  const onClickCart = (e) => {
    cartNavigate(`/singlePage/checkout`)
    e.preventDefault();
    const add = {
      productID: homePro._id,
      userID: user._id,
    };

    console.log(add);
    axios.post('http://localhost:8001/add-to-cart', add)
      .then((response) => {
        const userData = response.data.data;
        // console.log(userData);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const handleImageClick = (index) => {
    // Update the selectedImage state to the clicked image index
    setSelectedImage(index);
  };

  return (
    <>
      <div className="h-24"></div>
      <Container fluid className="h-auto bg-black">
        <Container className='h-auto p-2 pb-4 border-yellow-400 border-b-4 border-double'>
          <Row className='justify-content-center'>
            {/* First Col */}
            <Col className="bg-black" lg={9}>
              <div className="h-auto border-8 p-2">
                {homePro.images && homePro.images.length > 0 &&
                  <>
                    <img
                      src={`${path}/${homePro.images[selectedImage || 0]}`}
                      alt={homePro.label}
                      className='h-full w-full'
                    />
                    <Row className=" h-auto mt-4 ">
                      {homePro.images.slice(0, 4).map((image, index) => (
                        <Col key={index} className='' lg={3} md={5} sm={12}>
                          <img
                            src={`${path}/${image}`}
                            alt={homePro.label}
                            className='h-full w-full'
                            onClick={() => handleImageClick(index)}
                          />
                        </Col>
                      ))}
                    </Row>
                  </>
                }
              </div>
              <div className="h-auto">
                <Col className=''>
                  <div className='text-white text-start h-auto p-2'>
                    <h3 className='font-bold '>Vehicle overview</h3>
                    <p>Quisque imperdiet dignissim enim dictum finibus. Sed consectetutr convallis enim eget laoreet. Aenean vitae nisl mollis, porta risus vel, dapibus lectus. Etiam ac suscipit eros, eget maximus</p>
                    <p>Etiam sit amet ex pharetra, venenatis ante vehicula, gravida sapien. Fusce eleifend vulputate nibh, non cursus augue placerat pellentesque. Sed venenatis risus nec felis mollis, in pharetra urna euismod. Morbi aliquam ut turpis sit amet ultrices. Vestibulum mattis blandit nisl, et tristique elit scelerisque nec. Fusce eleifend laoreet dui eget aliquet. Ut rutrum risus et nunc pretium scelerisque. Fusce viverra, ligula quis pellentesque interdum, leo felis congue dui, ac accumsan sem nulla id lorem. Praesent ut tristique dui, nec condimentum lacus. Maecenas lobortis ante id egestas placerat. Nullam at ultricies lacus. Nam in nulla consectetur, suscipit mauris eu, fringilla augue. Phasellus gravida, dui quis dignissim tempus, tortor orci tristique leo, ut congue diam ipsum at massa. Pellentesque ut vestibulum erat. Donec a felis eget</p>
                    <p className='flex gap-4'> <FaCircleNotch size={50} className='text-yellow-400 rotate-90' /> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                    <p>Maecenas lobortis ante id egestas placerat. Nullam at ultricies lacus. Nam in nulla consectetur, suscipit mauris eu, fringilla augue. Phasellus gravida, dui quis dignissim tempus, tortor orci tristique leo, ut congue diam ipsum at massa. Pellentesque ut vestibulum erat. Donec a felis eget tellus laoreet ultrices.</p>
                  </div>
                </Col>
                {/* Engine */}
                <Row className='justify-center h-auto gap-5'>
                  <Col className=' text-white' lg={5}>
                    <p className='flex font-semibold text-md gap-2 items-center'> <TbEngine size={35} className='text-yellow-400' /> Engine </p>
                    <div className="border-b-2 border-gray-600 flex items-center p-2  justify-between">
                      <p className='text-wrap text-gray-500 font-semibold text-xs '> LAYOUT/NUMBER OF CYLINDERS </p>
                      <p> {homePro.layout} </p>
                    </div>
                    <div className="border-b-2 border-gray-600 flex items-center p-2 justify-between">
                      <p className='text-wrap text-gray-500 font-semibold text-xs '> DISPLACEMENT </p>
                      <p> {homePro.displacement} {homePro.engineVol} </p>
                    </div>
                    <div className="border-b-2 border-gray-600 flex items-center p-2 justify-between">
                      <p className='text-wrap text-gray-500 font-semibold text-xs '> ENGINE LAYOUT </p>
                      <p> {homePro.typeDrive} </p>
                    </div>
                    <div className="border-b-2 border-gray-600 flex items-center p-2 justify-between">
                      <p className='text-wrap text-gray-500 font-semibold text-xs '> HORESPOWER </p>
                      <p> {homePro.horsePower} </p>
                    </div>
                    <div className="border-b-2 border-gray-600 flex items-center p-2 justify-between">
                      <p className='text-wrap text-gray-500 font-semibold text-xs '> POWER </p>
                      <p> {homePro.power} </p>
                    </div>
                    <div className="border-b-2 border-gray-600 flex items-center p-2 justify-between">
                      <p className='text-wrap text-gray-500 font-semibold text-xs '> TORQUE </p>
                      <p> {homePro.torque} </p>
                    </div>
                    <div className="border-b-2 border-gray-600 flex items-center p-2 justify-between">
                      <p className='text-wrap text-gray-500 font-semibold text-xs '> COMPRESSION RATIO </p>
                      <p> {homePro.compRatio} </p>
                    </div>
                  </Col>
                  <Col className=' text-white' lg={5}>
                    <p className='flex font-semibold text-md gap-2 items-center'> <CgPerformance size={35} className='text-yellow-400' /> Performance </p>
                    <div className="border-b-2 border-gray-600 flex items-center p-2  justify-between">
                      <p className='text-wrap text-gray-500 font-semibold text-xs '> TOP TRACK SPEED </p>
                      <p> {homePro.layout} </p>
                    </div>
                    <div className="border-b-2 border-gray-600 flex items-center p-2 justify-between">
                      <p className='text-wrap text-gray-500 font-semibold text-xs '> 0 - 70 MPH </p>
                      <p> {homePro.mph} </p>
                    </div>
                    <div className='mt-4'>
                      <p className='flex font-semibold text-md gap-2 items-center'> <GiMartyrMemorial size={35} className='text-yellow-400' /> Transmission </p>
                      <div className="border-b-2 border-gray-600 flex items-center p-2  justify-between">
                        <p className='text-wrap text-gray-500 font-semibold text-xs '> TYPE </p>
                        <p> {homePro.transmission} </p>
                      </div>
                      <div className="border-b-2 border-gray-600 flex items-center p-2 justify-between">
                        <p className='text-wrap text-gray-500 font-semibold text-xs '> NUMBER OF GEARS </p>
                        <p> {homePro.displacement} {homePro.gears} </p>
                      </div>
                    </div>
                  </Col>
                </Row>
                {/* Features & Options */}
                <Row className='justify-center h-auto mt-5 text-white'>
                  <div className=' flex ps-3 items-center'>
                    <h3 className='font-bold text-start pt-2 pb-3'>Features & Options</h3>
                  </div>
                  <Col className='border-white' lg={6}>
                    <p className="flex gap-3"> <FaCheck size={20} className='text-yellow-400' />
                      Nulla consequat enim</p>
                    <p className="flex gap-3"> <FaCheck size={20} className='text-yellow-400' />
                      Sed venenatis risus eleifend solis nec felis mollis</p>
                    <p className="flex gap-3"> <FaCheck size={20} className='text-yellow-400' />
                      Fusce eleifend folla prente laoreet dui eget aliquet</p>
                    <p className="flex gap-3"> <FaCheck size={20} className='text-yellow-400' />
                      Sed venenatis risus nec osmet covar felis mollis</p>
                    <p className="flex gap-3"> <FaCheck size={20} className='text-yellow-400' />
                      Gusce eusce eleifend aet laoreet dui eget aliquet</p>
                    <p className="flex gap-3"> <FaCheck size={20} className='text-yellow-400' />
                      Teros eam in nulla consectetur, lonter guel suscipit</p>
                  </Col>
                  <Col className='border-white' lg={6}>
                    <p className="flex gap-3"> <FaCheck size={20} className='text-yellow-400' />
                      Consequat massa</p>
                    <p className="flex gap-3"> <FaCheck size={20} className='text-yellow-400' />
                      Sed venenatis risus eleifend solis nec felis mollis</p>
                    <p className="flex gap-3"> <FaCheck size={20} className='text-yellow-400' />
                      Fusce eleifend folla prente laoreet dui eget aliquet</p>
                    <p className="flex gap-3"> <FaCheck size={20} className='text-yellow-400' />
                      Sed venenatis risus nec osmet covar felis mollis</p>
                    <p className="flex gap-3"> <FaCheck size={20} className='text-yellow-400' />
                      Gusce eusce eleifend aet laoreet dui eget aliquet</p>
                    <p className="flex gap-3"> <FaCheck size={20} className='text-yellow-400' />
                      Teros eam in nulla consectetur, lonter guel suscipit</p>
                  </Col>
                </Row>
                {/* DESIGN */}
                <Row className='justify-center h-auto mt-5 text-white'>
                  <Col lg={3} className="h-auto border-white pb-3">
                    <div>
                      <h5 className='pb-2'> INTERIOR DESIGN</h5>
                      <p className="flex gap-3 text-gray-300 "> <FaCheckCircle size={20} className='text-yellow-400' />  ABS</p>
                      <p className="flex gap-3 text-gray-300"> <FaCheckCircle size={20} className='text-yellow-400' />Auxiliary heating</p>
                      <p className="flex gap-3 text-gray-300"> <FaCheckCircle size={20} className='text-yellow-400' />Bluetooth</p>
                      <p className="flex gap-3 text-gray-300"> <FaCheckCircle size={20} className='text-yellow-400' />CD player</p>
                      <p className="flex gap-3 text-gray-300"> <FaCheckCircle size={20} className='text-yellow-400' />Central locking</p>
                      <p className="flex gap-3 text-gray-300"> <FaCheckCircle size={40} className='text-yellow-400' />Driver and front-passenger advanced airbags</p>
                      <p className="flex gap-3 text-gray-300"> <FaCheckCircle size={20} className='text-yellow-400' />ESP</p>
                      <p className="flex gap-3 text-gray-300"> <FaCheckCircle size={20} className='text-yellow-400' />Full LED headlights</p>
                      <p className="flex gap-3 text-gray-300"> <FaCheckCircle size={40} className='text-yellow-400' />LED taillights with dynamic turn signals</p>
                      <p className="flex gap-3 text-gray-300"> <FaCheckCircle size={20} className='text-yellow-400' />Storage package</p>
                      <p className="flex gap-3 text-gray-300"> <FaCheckCircle size={40} className='text-yellow-400' />Tire pressure monitoring system</p>
                    </div>
                  </Col>
                  <Col lg={3} className="h-auto border-white pb-3">
                    <div>
                      <h5 className='pb-2'> SAFETY FEATURES </h5>
                      <p className="flex gap-3 text-gray-300"> <FaCheckCircle size={20} className='text-yellow-400' />  ABS</p>
                      <p className="flex gap-3 text-gray-300"> <FaCheckCircle size={20} className='text-yellow-400' />Auxiliary heating</p>
                      <p className="flex gap-3 text-gray-300"> <FaCheckCircle size={20} className='text-yellow-400' />Bluetooth</p>
                      <p className="flex gap-3 text-gray-300"> <FaCheckCircle size={20} className='text-yellow-400' />CD player</p>
                      <p className="flex gap-3 text-gray-300"> <FaCheckCircle size={20} className='text-yellow-400' />Central locking</p>
                      <p className="flex gap-3 text-gray-300"> <FaCheckCircle size={40} className='text-yellow-400' />Driver and front-passenger advanced airbags</p>
                      <p className="flex gap-3 text-gray-300"> <FaCheckCircle size={20} className='text-yellow-400' />ESP</p>
                      <p className="flex gap-3 text-gray-300"> <FaCheckCircle size={20} className='text-yellow-400' />Full LED headlights</p>
                      <p className="flex gap-3 text-gray-300"> <FaCheckCircle size={40} className='text-yellow-400' />LED taillights with dynamic turn signals</p>
                      <p className="flex gap-3 text-gray-300"> <FaCheckCircle size={20} className='text-yellow-400' />Storage package</p>
                      <p className="flex gap-3 text-gray-300"> <FaCheckCircle size={40} className='text-yellow-400' />Tire pressure monitoring system</p>
                    </div>
                  </Col>
                  <Col lg={3} className="h-auto border-white pb-3">
                    <div>
                      <h5 className='pb-2'> EXTERIOR FEATURES </h5>
                      <p className="flex gap-3 text-gray-300"> <FaCheckCircle size={20} className='text-yellow-400' />  ABS</p>
                      <p className="flex gap-3 text-gray-300"> <FaCheckCircle size={20} className='text-yellow-400' />Auxiliary heating</p>
                      <p className="flex gap-3 text-gray-300"> <FaCheckCircle size={20} className='text-yellow-400' />Bluetooth</p>
                      <p className="flex gap-3 text-gray-300"> <FaCheckCircle size={20} className='text-yellow-400' />CD player</p>
                      <p className="flex gap-3 text-gray-300"> <FaCheckCircle size={20} className='text-yellow-400' />Central locking</p>
                      <p className="flex gap-3 text-gray-300"> <FaCheckCircle size={40} className='text-yellow-400' />Driver and front-passenger advanced airbags</p>
                      <p className="flex gap-3 text-gray-300"> <FaCheckCircle size={20} className='text-yellow-400' />ESP</p>
                      <p className="flex gap-3 text-gray-300"> <FaCheckCircle size={20} className='text-yellow-400' />Full LED headlights</p>
                      <p className="flex gap-3 text-gray-300"> <FaCheckCircle size={40} className='text-yellow-400' />LED taillights with dynamic turn signals</p>
                      <p className="flex gap-3 text-gray-300"> <FaCheckCircle size={20} className='text-yellow-400' />Storage package</p>
                      <p className="flex gap-3 text-gray-300"> <FaCheckCircle size={40} className='text-yellow-400' />Tire pressure monitoring system</p>
                    </div>
                  </Col>
                  <Col lg={3} className="h-auto border-white pb-3">
                    <div>
                      <h5 className='pb-2'> EXTRA FEATURES </h5>
                      <p className="flex gap-3 text-gray-300"> <FaCheckCircle size={20} className='text-yellow-400' />  ABS</p>
                      <p className="flex gap-3 text-gray-300"> <FaCheckCircle size={20} className='text-yellow-400' />Auxiliary heating</p>
                      <p className="flex gap-3 text-gray-300"> <FaCheckCircle size={20} className='text-yellow-400' />Bluetooth</p>
                      <p className="flex gap-3 text-gray-300"> <FaCheckCircle size={20} className='text-yellow-400' />CD player</p>
                      <p className="flex gap-3 text-gray-300"> <FaCheckCircle size={20} className='text-yellow-400' />Central locking</p>
                      <p className="flex gap-3 text-gray-300"> <FaCheckCircle size={40} className='text-yellow-400' />Driver and front-passenger advanced airbags</p>
                      <p className="flex gap-3 text-gray-300"> <FaCheckCircle size={20} className='text-yellow-400' />ESP</p>
                      <p className="flex gap-3 text-gray-300"> <FaCheckCircle size={20} className='text-yellow-400' />Full LED headlights</p>
                      <p className="flex gap-3 text-gray-300"> <FaCheckCircle size={40} className='text-yellow-400' />LED taillights with dynamic turn signals</p>
                      <p className="flex gap-3 text-gray-300"> <FaCheckCircle size={20} className='text-yellow-400' />Storage package</p>
                      <p className="flex gap-3 text-gray-300"> <FaCheckCircle size={40} className='text-yellow-400' />Tire pressure monitoring system</p>
                    </div>
                  </Col>
                </Row>
                {/* Map */}
                <Row className='justify-center h-auto mt-5 text-white'>
                  <h2 className='font-bold pb-2 ps-2'>Location</h2>
                  <Col lg={12}>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d60275.41730275748!2d72.81098550619852!3d19.22952133809416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1707896105765!5m2!1sen!2sin"
                      width="100%"
                      height="425"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Google Map"
                    />
                  </Col>
                </Row>
                {/* Contact  */}
                <Row className='justify-center h-auto mt-5 text-white'>
                  <h2 className='font-bold pb-2 ps-2'>Contact</h2>
                  <Col lg={4} className="">
                    <div className=''>
                      <h5 className="flex gap-3 p-2"> <MdOutlineMessage size={30} className="text-yellow-500" />Contact Information</h5>
                      <p className='text-gray-400 pb-2'>
                        This vehicle has been inspected by an authorized Mercedes-Benz dealer or service partner and includes additional services.
                      </p>
                      <p className='text-gray-400 flex gap-3  pb-2'>
                        <FaLocationDot size={25} className="text-yellow-500" /> 1840 E Garvey Ave South West Covina, CA 91791
                      </p>
                      <p className='text-gray-400 flex gap-3 pb-2'>
                        <FaPhoneAlt size={25} className="text-yellow-500" />
                        <h6 className=''>PHONE :</h6>
                        <p>888-694-5544</p>
                      </p>
                      <p className='text-gray-400 flex gap-3 pb-2'>
                        <IoMdMail size={25} className="text-yellow-500" />
                        <h6>EMAIL:</h6>
                        <p>sales@cardealer.com </p>
                      </p>
                    </div>
                  </Col>
                  <Col lg={4} className="">
                    <h5 className='flex items-center gap-3'> <FaTelegramPlane size={35} className="text-blue-500" /> Message to vendor</h5>
                    <div className="mb-4">
                      <label htmlFor="inp_1" className="block text-sm font-medium text-gray-400">
                        YOUR NAME:
                      </label>
                      <input
                        type="text"
                        id="inp_1"
                        className="mt-1 p-2 border rounded-sm  focus:outline-none focus:ring focus:border-blue-300"
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="inp_2" className="block text-sm font-medium text-gray-400">
                        YOUR TELEPHONE NUMBER:
                      </label>
                      <input
                        type="text"
                        id="inp_2"
                        className="mt-1 p-2 border rounded-sm  focus:outline-none focus:ring focus:border-blue-300"
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="inp_3" className="block text-sm font-medium text-gray-400">
                        EMAIL:
                      </label>
                      <input
                        type="text"
                        id="inp_3"
                        className="mt-1 p-2 border rounded-sm  focus:outline-none focus:ring focus:border-blue-300"
                      />
                    </div>
                  </Col>
                  <Col lg={4} className="p-2">
                    <div className="mb-4 items-center mt-3">
                      <label htmlFor="inp_5" className="block text-sm font-medium pb-2 text-gray-400">
                        YOUR MESSAGE:
                      </label>
                      <textarea className=" p-2 border rounded-sm text-black font-semibold text-md  focus:outline-none focus:ring focus:border-blue-300" name="" id="inp_5" cols="30" rows="10"></textarea>
                    </div>
                    <button className='text-white bg-blue-500 px-4 rounded-sm font-bold text-md py-2 hover:bg-yellow-400'>Submit</button>
                  </Col>
                </Row>
              </div>
            </Col>
            {/* Second Col */}
            <Col className=" bg-black h-auto" lg={3}>
              {/* Price */}
              <Row className='justify-center pt-2 bg-blue-500 text-white p-2 cursor-pointer hover:bg-blue-600'>
                <Link to={'/singlePage/checkout'}>
                  <h6 onClick={onClickCart} className='text-center text-gray-900 text-md hover:text-gray-700 font-semibold'>BUY CAR ONLINE</h6></Link>

                <Col className='border-e h-20 flex  justify-center flex-col items-center' lg={5}>
                  <h6 className=' text-sm font-semibold' >OLD PRICE</h6>
                  <h6>${homePro.buy}</h6>
                </Col>
                <Col className='border-s  h-20 flex flex-col justify-center items-center' lg={5}>
                  <h6 className=' text-sm font-semibold' >NEW PRICE</h6>
                  <h6>${homePro.msrp}</h6>
                </Col>
                <div className='bg-gray-700 h-8 flex  justify-center items-center mt-2'>INSTANT SAVINGS : ${instantSavings} </div>
              </Row>
              {/* Dealer */}
              <Row className='justify-center pt-2 text-white p-2 h-auto items-center '>
                <Col className="">
                  <div className='border-b-4 border-blue-700 p-1 pt-2'>
                    <h6>DEALER INFO</h6>
                  </div>
                  <Col>
                    <div className='flex gap-4 justify-center items-center border-b-2 pt-4 cursor-pointer'>
                      <img src="https://motors.stylemixthemes.com/classified/wp-content/uploads/sites/2/2016/12/ava1-160x160-160x160.jpg" alt="" className='rounded-full h-10 w-10' />
                      <div className='pt-2'>
                        <h6> Stylemix Themere </h6>
                        <p>Private Seller</p>
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div className='flex  justify-center items-center pt-4 cursor-pointer'>
                      <div className='pt-2 flex gap-3'>
                        <FaPhoneAlt size={25} className="text-blue-500" />
                        <p>888-694-5544</p>
                      </div>
                    </div>
                  </Col>
                </Col>
              </Row>
              {/* Black Box */}
              <Row className='justify-center pt-2 mt-3 text-white p-2 h-auto bg-gray-800'>
                <Col className=''>
                  <div className='flex justify-around items-center border-b-2'>
                    <p className="text-xs font-semibold ">BODY</p>
                    <p className='font-semibold text-md'>{homePro.body}</p>
                  </div>
                  <div className='flex justify-around items-center  border-b-2'>
                    <p className='pt-3 text-xs font-semibold'>MILEAGE</p>
                    <p className='pt-3 font-semibold text-md'>{homePro.mileage}mi</p>
                  </div>
                  <div className='flex justify-around items-center  border-b-2'>
                    <p className='pt-3 text-xs font-semibold '>TRANMISSION</p>
                    <p className='pt-3 font-semibold text-md'>{homePro.transmission}</p>
                  </div>
                  <div className='flex justify-around items-center  border-b-2'>
                    <p className='pt-3 text-xs font-semibold'>FUEL TYPE</p>
                    <p className='pt-3 font-semibold text-md'>{homePro.fuelType}</p>
                  </div>
                  <div className='flex justify-around items-center  border-b-2'>
                    <p className='pt-3 text-xs font-semibold'>ENGINE</p>
                    <p className='pt-3 font-semibold text-md'>{homePro.engine}</p>
                  </div>
                  <div className='flex justify-around items-center  border-b-2'>
                    <p className='pt-3 text-xs font-semibold'>YEAR</p>
                    <p className='pt-3 font-semibold text-md'>{homePro.year}</p>
                  </div>
                  <div className='flex justify-around items-center  border-b-2'>
                    <p className='pt-3 text-xs font-semibold'>DRIVE</p>
                    <p className='pt-3 font-semibold text-md'>{homePro.drive}</p>
                  </div>
                  <div className='flex justify-around items-center  border-b-2'>
                    <p className='pt-3 text-xs font-semibold'>EXTERIOR COLOR</p>
                    <p className='pt-3 font-semibold text-md'>{homePro.exteriorColor}</p>
                  </div>
                  <div className='flex justify-around items-center  border-b-2'>
                    <p className='pt-3 text-xs font-semibold'>INTERIOR COLOR</p>
                    <p className='pt-3 font-semibold text-md'>{homePro.interiorColor}</p>
                  </div>
                  <div className='flex justify-around items-center  border-b-2'>
                    <p className='pt-3 text-xs font-semibold'>VIN</p>
                    <p className='pt-3 font-semibold text-md'>{homePro.vin}</p>
                  </div>
                </Col>
              </Row>
              {/* Icon's */}
              <Row className='justify-center pt-2 mt-3 text-white p-2  border h-32'>
                <Col className='flex justify-center items-center gap-3 text-center'>
                  <div className='text-center'>
                    <p className='font-bold text-4xl'>{homePro.cityMPG} </p>
                    <p className='font-semibold text-xs'> CITY MPG </p>
                  </div>
                  <div className=' rounded-full p-3 bg-yellow-500'>
                    <BsFillFuelPumpFill size={30} className='text-light ' />
                  </div>
                  <div>
                    <p className='font-bold text-4xl'>{homePro.hwyMPG} </p>
                    <p className='font-semibold text-xs'> HWY MPG </p>
                  </div>
                </Col>
              </Row>
              {/* Calculator */}
              <Row className='justify-center pt-2 mt-3 bg-gray-800 text-white p-2   h-auto pb-3'>
                <div className=" flex justify-center items-center gap-4">
                  <FaCalculator size={30} className='text-yellow-400' />
                  <p className='font-semibold text-lg pt-2'>
                    FINANCING CALCULATOR
                  </p>
                </div>
                <div className='text-black font-bold mt-4 pb-3'>
                  <label htmlFor="vehiclePrice" className='font-sm text-md flex text-white gap-2 pb-2'>
                    Vehicle price <span className='text-yellow-400'>($)</span>
                  </label>
                  <input
                    type="text"
                    id="vehiclePrice"
                    value={vehiclePrice}
                    onChange={(e) => setVehiclePrice(e.target.value)}
                    placeholder=""
                    className="mt-1 p-2 border rounded-sm focus:outline-none focus:ring focus:border-blue-300"
                  />
                </div>
                <div className='text-black font-bold mt-4 pb-3'>
                  <label htmlFor="interestRate" className='font-sm text-md flex text-white gap-2 pb-2'>
                    Interest Rate <span className='text-yellow-400'>(%)</span>
                  </label>
                  <input
                    type="text"
                    id="interestRate"
                    value={interestRate}
                    onChange={(e) => setInterestRate(e.target.value)}
                    className="mt-1 p-2 border rounded-sm focus:outline-none focus:ring focus:border-blue-300"
                  />
                </div>
                <div className='text-black font-bold mt-4 pb-3'>
                  <label htmlFor="loanTerm" className='font-sm text-md flex text-white gap-2 pb-2'>
                    Loan Term <span className='text-yellow-400'>(years)</span>
                  </label>
                  <input
                    type="text"
                    id="loanTerm"
                    value={loanTerm}
                    onChange={(e) => setLoanTerm(e.target.value)}
                    className="mt-1 p-2 border rounded-sm focus:outline-none focus:ring focus:border-blue-300"
                  />
                </div>
                <div className='text-black font-bold mt-4 pb-3'>
                  <label htmlFor="downPayment" className='font-sm text-md flex text-white gap-2 pb-2'>
                    Down Payment <span className='text-yellow-400'>($)</span>
                  </label>
                  <input
                    type="text"
                    id="downPayment"
                    value={downPayment}
                    onChange={(e) => setDownPayment(e.target.value)}
                    className="mt-1 p-2 border rounded-sm focus:outline-none focus:ring focus:border-blue-300"
                  />
                </div>
                <button className='font-bold text-lg hover:bg-blue-600 px-3 py-2 bg-blue-500'
                  onClick={calculateInterest}>Calculate</button>
                <Row className='justify-center mt-3'>
                  <Col className='flex justify-start pt-2 items-start flex-col'>
                    <div className=" text-start">
                      <h6>Monthly Payment</h6>
                      <p className='text-yellow-400 font-bold text-lg'> ${monthlyPayment}</p>
                    </div>
                    <div className="text-white">
                      <h6>Total Interest Payment</h6>
                      <p className='text-yellow-400 font-bold text-lg'>${totalAmount}</p>
                    </div>
                    <div className="">
                      <h6>Total Amount to Pay</h6>
                      <p className='text-yellow-400 font-bold text-lg'>${totalInterest}</p>
                    </div>
                  </Col>
                </Row>
              </Row>
            </Col>
          </Row>
        </Container>
        <MediaGalleryComp />
      </Container>
    </>
  );
}
