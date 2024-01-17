import React from 'react'
import "./index.scss";
import ServicesCards from '../ServicesCards';
const Services = () => {
  return (
    <>
    <section id='services'>
        <div className='services_container'>
            <div className='services_content'>
                <div className='services_title'>
                    <p>OUR SERVICES</p>
                    <h2>We Offer Services</h2>
                </div>
                <ServicesCards/>
            </div>
        </div>
    </section>
    </>
  )
}

export default Services