import React from "react";
import "./index.scss";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer_container">
          <div className="footer_content">
            <div className="about">
              <h4>ABOUT US</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                facere laudantium magnam voluptatum autem. Amet aliquid nesciunt
                veritatis aliquam.
              </p>
            </div>
            <div className="quick">
              <h4>QUICK LINKS</h4>
              <ul>
                <li>About Us</li>
                <li>Services</li>
                <li>Testimonials</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className="follow">
              <h4>Follow</h4>
              <i class="fa-brands fa-facebook-f"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-linkedin-in"></i>
            </div>
            <div className="featured_product">
              <div className="footer_img">
                <img
                  src="https://preview.colorlib.com/theme/selling/images/product_1_bg.jpg"
                  alt=""
                />
              </div>
              <h4>Leather Brown Shoe</h4>
              <p>$60.00</p>
              <button>Add Cart</button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
