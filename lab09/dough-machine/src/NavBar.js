import React from 'react';

const NavBar = () => {
    return ( 
        <nav className="navbar">
            <h1>Dough Machine</h1>
            <br />
            <a href="/">Home</a>
            <br />
            <a href="/">Pastries</a>
            <br />
            <a href="/">Best Rated</a>
            <br />
            <a href="/">Bakers Picks</a>
            <br />
            <a href="/">Bakers</a>
            <br />
            <a href="/">Help</a>
            <br />

            <div className="footer">
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
                


            </div>
        </nav>
    );
}
 
export default NavBar;