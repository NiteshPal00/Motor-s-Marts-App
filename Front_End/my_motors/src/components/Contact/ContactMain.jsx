import React, { useEffect } from 'react'
import { ContactPage } from './ContactPage'
import '../Homes/home.css';
import { ContactDetail } from './ContactDetail';
import { MapComp } from './MapComp';

export const ContactMain = () => {
  useEffect(() =>{
    window.scrollTo(0,0);
  })
  return (
    <>
      <div className="h-24 border"></div>
      <ContactPage/>
      <ContactDetail/>
      <MapComp/>
    </>
  )
}
