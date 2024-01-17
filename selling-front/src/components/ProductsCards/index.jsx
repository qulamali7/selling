import React, { useContext, useEffect, useState } from "react";
import "./index.scss";
import { BasketContext } from "../../context/BasketContext";
import { Link } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import { WishlistContext } from "../../context/WishlistContext";
const ProductsCards = () => {
  const [data, setData] = useState([]);
  const [sortproperty, setSortproperty] = useState(null);
  const { search, handleSearch } = useContext(SearchContext);
  const { addBasket } = useContext(BasketContext);
  const {handleWishlist} = useContext(WishlistContext)
  async function Getfetch() {
    try {
      await fetch("http://localhost:3100/products")
        .then((res) => res.json())
        .then((data) => setData(data));
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    Getfetch();
  }, []);

  return (
    <>
      <div>
        <input type="text" onChange={handleSearch} />
        <button
          onClick={() => setSortproperty({ property: "title", asc: true })}
        >
          A-Z
        </button>
        <button
          onClick={() => setSortproperty({ property: "title", asc: false })}
        >
          Z-A
        </button>
        <button onClick={() => setSortproperty(null)}>Default</button>
      </div>
      <div className="products_cards">
        {data &&
          data
            .filter((x) => x.title.toLowerCase().includes(search.toLowerCase()))
            .sort((a, b) => {
              if (sortproperty && sortproperty.asc) {
                return a[sortproperty.property].toLowerCase() > b[sortproperty.property].toLowerCase()
                  ? 1
                  : b[sortproperty.property].toLowerCase() > a[sortproperty.property].toLowerCase()
                  ? -1
                  : 0;
              } else if (sortproperty && sortproperty.asc === false) {
                return a[sortproperty.property].toLowerCase() < b[sortproperty.property].toLowerCase()
                  ? 1
                  : b[sortproperty.property].toLowerCase() < a[sortproperty.property].toLowerCase()
                  ? -1
                  : 0;
              } else {
                return 0;
              }
            })
            .map((x) => (
              <div className="products_card">
                <div className="card_img">
                  <img src={x.img} alt="" />
                </div>
                <div className="card_text">
                  <div className="card_text_content">
                    <h4>{x.title}</h4>
                    <i class="fa-regular fa-heart" onClick={()=>handleWishlist(x)}></i>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                    <button onClick={() => addBasket(x)}>Add Cart</button>
                    <Link to={"/detail/" + x._id}>
                      <button>View</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </>
  );
};

export default ProductsCards;
