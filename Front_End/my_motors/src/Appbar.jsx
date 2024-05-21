import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useNavigate } from 'react-router-dom';
import { IoSpeedometerOutline } from "react-icons/io5";
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { CartItems } from './redux/Carts/CartsAction';
// import { CompareItems } from './redux/Compare/compareAction'

export function Appbar() {
    const cartNavigate = useNavigate();
    const onClickCart = () => {
        cartNavigate(`/carts`);
    };
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.carts.cartItems);
    const totalItem = cartItems && cartItems.length > 0 ? cartItems.length : 0
    
    const compareNavigate = useNavigate();
    const onCompare = () => {
        compareNavigate(`/compare`);
    };

    // const compareItems = useSelector((state) => state.compares.compareItems);
    // const totalCompare = compareItems && compareItems.length > 0 ? Math.min(compareItems.length, 3) : 0;

    useEffect(() => {
        dispatch(CartItems());
    }, [dispatch]);

    // useEffect(() => {
    //     dispatch(CompareItems());
    // }, [dispatch]);

    return (
        <Navbar expand="lg" className="appbar_1 p-4 bg-black fixed-top">
            <Container className='app_1'>
                <Navbar.Brand href="/">
                    <img
                        src="https://motors.stylemixthemes.com/elementor-dealer-two/wp-content/uploads/sites/24/2018/04/logo-1.png"
                        alt=""
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto d-flex gap-3">
                        <NavLink className="nav-link" to="/">
                            Home
                        </NavLink>
                        <NavLink className="nav-link" to="/inventory">
                            Inventory
                        </NavLink>
                        <NavLink className="nav-link" to="/service">
                            Services
                        </NavLink>
                        <NavLink className="nav-link" to="/about_us">
                            About Us
                        </NavLink>
                        <NavLink className="nav-link" to="/contact_us">
                            Contact Us
                        </NavLink>
                    </Nav>
                    <Nav className="ms-auto cursor-pointer">
                        <div className="flex justify-center items-center gap-3 flex-wrap">
                            <span
                                onClick={onCompare}
                                className='text-white flex items-center gap-1'
                            >
                                Compare <IoSpeedometerOutline size={25} className='text-blue-400' />
                                <p className='pt-2 text-white'></p>
                            </span>
                            <i
                                onClick={onClickCart}
                                className="bi bi-bag-fill flex items-center text-blue-600 text-xl cursor-pointer"
                            >
                                <p className='pt-2 ps-1 text-white text-sm'> {totalItem} </p>
                            </i>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
