import React, { useContext } from "react";
import "./index.scss";
import { BasketContext } from "../../context/BasketContext";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const Basket = () => {
  const { basket, removeBasket, increaseCount, decreaseCount } =
    useContext(BasketContext);
  return (
    <>
      <Helmet>
        <title>Basket</title>
      </Helmet>
      <section id="basket">
        <div className="basket_container">
          <div className="products_cards">
            {basket &&
              basket.map((x) => (
                <div className="products_card">
                  <div className="card_img">
                    <img src={x.img} alt="" />
                  </div>
                  <div className="card_text">
                    <div className="card_text_content">
                      <h4>{x.title}</h4>
                      <i class="fa-regular fa-heart"></i>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing.
                      </p>
                      <button onClick={() => increaseCount(x)}>+</button>
                      <span>{x.count}</span>
                      <button onClick={() => decreaseCount(x)}>-</button>
                      <button onClick={() => removeBasket(x)}>
                        Delete Cart
                      </button>
                      <Link to={"/detail/" + x._id}>
                        <button>View</button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Basket;
