import React from 'react'
import "./index.scss";
import ServicesCard from '../ServicesCard';
const ServicesCards = () => {
  return (
    <>
    <div className='services_cards'>
        <ServicesCard/>
        <ServicesCard/>
        <ServicesCard/>
        <ServicesCard/>
        <ServicesCard/>
        <ServicesCard/>
    </div>
    </>
  )
}

export default ServicesCards