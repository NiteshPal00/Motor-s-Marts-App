import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const CartHeader = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [filepath, setfilePath] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));
  const usercart = user._id;

  const total = cartItems.reduce((total, item) => total + item.buy * item.quantity, 0);
  localStorage.setItem('totalData', JSON.stringify(total));
  // console.log(total);
  const onClickHandler = () => {
    navigate('/checkout');
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8001/get-cart-items/${usercart}`);
        setCartItems(response.data.data);
        // console.log(response.data.data);
        setfilePath(response.data.filepath);
      } catch (error) {
        console.error('Error fetching cart data:', error);
      }
    };

    fetchData();
  }, [usercart]);

  const handleRemoveProduct = (index) => {
    const updatedCart = [...cartItems];
    const removedItem = updatedCart[index];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
    axios.delete(`http://localhost:8001/delete-cart-item/${removedItem._id}`)
      .catch((error) => {
        console.error('Error deleting cart item:', error);
      });
  };

  const handleIncrement = (index) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity++;
    const productId = updatedCart[index]._id;
    const quantity = updatedCart[index].quantity;
    setCartItems(updatedCart);

    if (quantity > 10) {
      alert("Quantity cannot exceed 10");
      updatedCart[index].quantity = 10;
      setCartItems(updatedCart);
    } else {
      axios.put(`http://localhost:8001/update-quantity/${productId}?type=inc`, {
        quantity: quantity,
      })
        .catch((error) => {
          console.error('Error updating cart item quantity:', error);
        });
    }
  };

  const handleDecrement = (index) => {
    const updatedCart = [...cartItems];
    const updatedItem = updatedCart[index];

    if (updatedItem.quantity > 1) {
      updatedItem.quantity--;
      const productId = updatedItem._id;
      const quantity = updatedItem.quantity;
      setCartItems(updatedCart);
      axios.put(`http://localhost:8001/update-quantity/${productId}?type=desc`, {
        quantity: quantity,
      })
        .catch((error) => {
          console.error('Error updating cart item quantity:', error);
        });
    } else {
      updatedCart.splice(index, 1);
      setCartItems(updatedCart);
      axios.delete(`http://localhost:8001/delete-cart-item/${updatedItem._id}`)
        .catch((error) => {
          console.error('Error deleting cart item:', error);
        });
    }
  };

  return (
    <Container className='h-auto pt-2 mt-5 mb-5'>
      <Row className='justify-center'>
        <Col lg={12} sm={12} md={12}>
          {cartItems.length > 0 && (
            <Row className="justify-center">
              <table className='text-center' border='2'>
                <thead className='border-b-4 border-black'>
                  <tr className='font-bold text-xl'>
                    <th className='text-start'>Product Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody className='text-center font-md text-md flex-wrap'>
                  {cartItems.map((item, index) => (
                    <tr key={item._id} className=''>
                      <td className="flex pt-2 gap-2">
                        <img src={filepath + '/' + item.image} alt="" className='p-1 border-2 w-10 h-10' />
                        <p>{item.title}</p>
                      </td>
                      <td>{item.buy}</td>
                      <td>
                        <Button
                          variant="outline-secondary"
                          onClick={() => handleIncrement(index)}
                        >
                          +
                        </Button>
                        <span className='p-1'> {item.quantity} </span>
                        <Button
                          variant="outline-secondary"
                          onClick={() => handleDecrement(index)}
                        >
                          -
                        </Button>
                      </td>
                      <td>{item.buy * item.quantity}</td>
                      <td onClick={() => handleRemoveProduct(index)}>
                        X
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <Row className='mt-5'>
                <h1>CART TOTALS</h1>
                <Col className='border-2 h-52 pt-4 ' lg={6}>
                  <p className='text-gray-700 font-semibold'> Subtotal: ${cartItems.reduce((total, item) => total + item.buy * item.quantity, 0)} </p>
                  <p className='text-gray-950 font-semibold'>
                    Total Value: ${cartItems.reduce((total, item) => total + item.buy * item.quantity, 0)}
                  </p>
                  <Col>
                    <button className='border mt-2 px-3 text-white bg-blue-500 hover:bg-blue-600 font-bold rounded-md py-2' onClick={onClickHandler}>Proceed to Checkout</button>
                  </Col>
                </Col>
              </Row>
            </Row>
          )}
        </Col>
      </Row>
    </Container>
  );
};
