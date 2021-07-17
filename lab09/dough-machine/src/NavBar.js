import React from 'react';
import { Link } from "react-router-dom";

const NavBar = () => {
    return ( 
        <nav className="navbar">
            <div className="navbarTitle">
                <img src="https://img.icons8.com/emoji/48/000000/money-with-wings-emoji.png" width="130px"/>
                <h1>Dough Machine</h1>
            </div>
            <br />
            <Link to="/"><img src="https://img.icons8.com/ios/50/000000/home--v3.png" width="30px" /> Home</Link>
            <br />
            <Link to="/Pastries"><img src="https://img.icons8.com/windows/32/000000/croissant.png" width="30px"/> Pastries</Link>
            <br />
            <Link to="/BestRated"><img src="https://img.icons8.com/ios-glyphs/30/000000/star--v2.png" width="30px"/> Best Rated</Link>
            <br />
            <Link to="/BakersPicks"><img src="https://img.icons8.com/ios/50/000000/sidebar-menu.png" width="30px"/> Bakers Picks</Link>
            <br />
            <Link to="/Bakers"><img src="https://img.icons8.com/ios/50/000000/chef-hat.png" width="30px"/> Bakers</Link>
            <br />
            <Link to="/Contact"><img src="https://img.icons8.com/ios/50/000000/phone.png" width="30px"/> Contact</Link>
            <br />
            <Link to="/Order"><img src="https://img.icons8.com/ios/50/000000/checkout.png" width="30px"/> View Order</Link>
            <br />
            <Link to="/Help"><img src="https://img.icons8.com/ios/50/000000/help.png" width="30px"/> Help</Link>
            <br />

            {/* <div className="footer">
                <h2>Location:</h2>
                <p>290 Bremner Blvd, Toronto, ON M5V 3L9</p>
                <p>100 Queens Park, Toronto, ON M5S 2C6</p>
                <p><br /></p>
                <h2>Hours:</h2>
                <p>Monday - Friday:</p>
                <p>9:00 AM - 5:00 PM</p>
                <p>Saturday:</p>
                <p>10:00 AM - 5:00 PM</p>
                <p>Sunday:</p>
                <b><p>Closed</p></b>
            </div> */}
        </nav>
    );
}
 
export default NavBar;