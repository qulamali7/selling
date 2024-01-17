import React from 'react'
import "./index.scss";
import ProductsCards from '../ProductsCards';
const Products = () => {
  return (
    <>
    <section id='products'>
        <div className='products_container'>
            <div className='products_content'>
                <div className='products_title'>
                    <h5>POPULAR PRODUCTS</h5>
                    <h2>Our Products</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut consequatur laboriosam ipsam.</p>
                </div>
                <ProductsCards/>
            </div>
        </div>
    </section>
    </>
  )
}

export default Products