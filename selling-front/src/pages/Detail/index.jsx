import React, { useContext, useEffect, useState } from "react";
import "./index.scss";
import { useParams } from "react-router-dom";
import { BasketContext } from "../../context/BasketContext";
import { Helmet } from "react-helmet-async";
const Detail = () => {
    const {addBasket} = useContext(BasketContext)
  const { id } = useParams();
  const [detail, setDetail] = useState([]);
  async function Getfetch(id) {
    try {
      await fetch("http://localhost:3100/products/" + id)
        .then((res) => res.json())
        .then((data) => setDetail(data));
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    Getfetch(id);
  }, []);
  return (
    <>
    <Helmet>
        <title>Detail</title>
      </Helmet>
      <section id="detail">
        <div className="detail_container">
          <div className="detail_card">
            <div className="card_img">
                <img src={detail.img} alt="" />
            </div>
            <div className="card_text">
                <div className="card_text_content">
                  <h4>{detail.title}</h4>
                  <i class="fa-regular fa-heart"></i>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                  <button onClick={()=>addBasket(detail)}>Add Cart</button>
                </div>
              </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Detail;
