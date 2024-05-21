import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import { Home } from './components/Homes/Home';
import { ServiceMain } from './components/Shop/ServiceMain';
import { InventoryMain } from './components/Inventory/InventoryMain';
import { AboutMain } from './components/About/AboutMain';
import { ContactMain } from './components/Contact/ContactMain';
import { CheckOutComp } from './components/CheckOut.jsx/CheckOutComp';
import { CartsComp } from './components/Carts/CartsComp';
import SignInComp from './components/LoginPage/SignInComp';
import SignUpComp from './components/LoginPage/SignUpComp';
import { PageNotComp } from './components/PageNotComp';
import { SinglePageInv } from './components/Homes/SinglePageInv';
import { CompareHeadComp } from './components/Compare/CompareHeadComp';
import { InventoryHeader } from './components/Inventory/InventoryHeader';
import { OrderDetails } from './components/CheckOut.jsx/OrderDetails';

const CustomRoute = () => {

  const isAuthenticated = !!localStorage.getItem('user');
  const router = useRoutes([
    {
      path: "/", element: <Home />
    },
    { path: "/service", element: < ServiceMain /> },
    { path: "/inventory", element: <InventoryMain /> },
    { path: "/about_us", element: <AboutMain /> },
    { path: "/contact_us", element: <ContactMain /> },
    { path: "/compare", element: <CompareHeadComp /> },
    { path: "/signIn", element: <SignInComp /> },
    { path: "/signUp", element: <SignUpComp /> },
    { path: '/singlePage/:id', element: <SinglePageInv /> },
    { path: "/inventoryHead/checkout", element: isAuthenticated ? <CheckOutComp /> : <Navigate to="/signIn" /> },
    { path: '/inventoryHead/:id', element: <InventoryHeader /> },
    { path: '/carts', element: isAuthenticated ? <CartsComp /> : <Navigate to="/signIn" /> },
    { path: '/checkout', element: isAuthenticated ? <CheckOutComp /> : <Navigate to="/signIn" /> },
    { path: '/checkout/checkoutDetails', element: isAuthenticated ? <OrderDetails /> : <Navigate to="/signIn" /> },
    { path: '/singlePage/compare', element: isAuthenticated ? <CompareHeadComp /> : <Navigate to="/signIn" /> },
    { path: "/singlePage/checkout", element: isAuthenticated ? <CheckOutComp /> : <Navigate to="/signIn" /> },
    { path: "*", element: <PageNotComp /> },
  ])
  return router;
}

export default CustomRoute;