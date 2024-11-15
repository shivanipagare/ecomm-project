import React from 'react';
import './Navbar.css';
import { FaShoppingCart } from 'react-icons/fa';
const Navbar = () => {
    return (
        <div>
            <section className='navbar' >
                <h3 style={{ padding: "10px 10px", color: "white", fontStyle: "italic", fontSize: "15px" }}>        <FaShoppingCart style={{ marginBottom: "10px", color: "orange", fontSize: "20px" }} />
                    SHOPPER's</h3>
                {/* <div className="logo">Logo</div> */}
                <div className='d-flex'>
                    <div className="login">
                        Welcome : Shivani
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Navbar;