import React from 'react'
import "./index.scss";
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <>
    <header>
        <div className='header_container'>
            <div className='header_content'>
                <Link to={"/"}>Selling<span>.</span></Link>
                <nav>
                    <ul>
                        <li>
                            <Link to={"/"}>Home</Link>
                        </li>
                        <li>
                            <Link to={"/add"}>Add</Link>
                        </li>
                        <li>
                            <Link to={"/basket"}>Basket</Link>
                        </li>
                        <li>
                            <Link to={"/wishlist"}>Wishlist</Link>
                        </li>
                        <li>
                            <Link>Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
    </>
  )
}

export default Navbar