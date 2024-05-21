import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Appbar } from './Appbar';
import CustomRoute from './CustomRoute';
import { FooterComp } from './components/Footer/FooterComp';

const App = () => {

  return (
    <>
      <Router>
        <Appbar/>
       <CustomRoute/>
       <FooterComp/>
      </Router>
    </>
  );
};

export default App;
