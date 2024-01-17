import React from 'react'
import "./index.scss";
const About = () => {
  return (
    <>
    <section id='about'>
        <div className='about_container'>
            <div className='about_content'>
                <div className='about_img'>
                    <img src="https://preview.colorlib.com/theme/selling/images/about_1.jpg" alt="" />
                    <div className='about_img_text'>
                        <h2>Trusted Merchant</h2>
                        <p>FOR 50 YEARS</p>
                    </div>
                </div>
                <div  className='about_text'>
                    <span>MERCHANT COMPANY</span>
                    <h2>About Us</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui fuga ipsa, repellat blanditiis nihil, consectetur. Consequuntur eum inventore, rem maxime, nisi excepturi ipsam libero ratione adipisci alias eius vero vel!</p>
                    <button>Learn More</button>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default About