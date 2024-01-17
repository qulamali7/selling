import React, { useContext } from "react";
import "./index.scss";
import { WishlistContext } from "../../context/WishlistContext";
import { BasketContext } from "../../context/BasketContext";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
const Wishlist = () => {
  const { wishlist } = useContext(WishlistContext);
  const { addBasket } = useContext(BasketContext);
  const { handleWishlist } = useContext(WishlistContext);
  return (
    <>
      <Helmet>
        <title>Wishlist</title>
      </Helmet>
      <section id="basket">
        <div className="basket_container">
          <div className="products_cards">
            {wishlist &&
              wishlist.map((x) => (
                <div className="products_card">
                  <div className="card_img">
                    <img src={x.img} alt="" />
                  </div>
                  <div className="card_text">
                    <div className="card_text_content">
                      <h4>{x.title}</h4>
                      <i class="fa-solid fa-trash" onClick={()=>handleWishlist(x)}></i>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing.
                      </p>
                      <button onClick={() => addBasket(x)}>
                         Add Cart
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

export default Wishlist;
