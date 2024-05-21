import React, { useEffect } from 'react'
import { CarouselComp1 } from './CarouselComp1'
import './home.css';
import { WelcomeMotors } from './WelcomeMotors';
import { CarouselComp2 } from './CarouselComp2';
import { CarComp } from './CarComp';
import { RecentCars } from './RecentCars';
import { RecentBox2 } from './RecentBox2';
import { RecentCars3 } from './RecentCars3';

export const Home = () => {
  useEffect(() =>{
    window.scrollTo(0,0);
  })
  return (
    <>
      <CarouselComp1 />
      <RecentCars />
      <RecentBox2 />
      <RecentCars3 />
      <CarouselComp2 />
      <CarComp />
      <WelcomeMotors />
    </>
  )
}
