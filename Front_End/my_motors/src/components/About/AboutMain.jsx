import React, { useEffect } from 'react'
import { AboutHead } from './AboutHead'
import { MediaGalleryComp } from './MediaGalleryComp'
import { AccordionComp } from './AccordionComp'
import { OurTemComp } from './OurTemComp'

export const AboutMain = () => {
  useEffect(() =>{
    window.scrollTo(0,0);
  })
  return (
    <>
      <div className="h-28"></div>
        <AboutHead />
        <MediaGalleryComp/>
        <AccordionComp/>
        <OurTemComp/>
    </>
  )
}
