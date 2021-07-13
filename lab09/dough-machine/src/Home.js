import React from 'react';

const Home = () => {
    return ( 
        <div className="home">
            <h1 style={{fontSize: "200%"}}>Home</h1>
            <br />
            <div className="about">
                <img src="https://media.blogto.com/articles/20170818-2048-SudForno17.jpg?w=2048&cmd=resize_then_crop&height=1365&quality=70" width="1000px"/>
                <div className="aboutP">
                    <h1>About Us</h1>
                    <br />
                    <p>We are award winning bakers who have perfected our skills and techniques in making pastries.
                        The pastries that leave our store is always at its best quality and ready for your satisfaction.
                    </p>
                </div>
            </div>
            <br />
            <br />
            <div className="contact">
                <div className="contactP">
                    <h1>Locations:</h1>
                    <p>Location 1: 290 Bremner Blvd, Toronto, ON M5V 3L9
                        <br />
                        Location 2: 100 Queens Park, Toronto, ON M5S 2C6
                    </p>
                    <br />
                    <h1>Hours:</h1>
                    <p>
                    Monday - Friday: 9:00 AM - 5:00 PM
                    <br />
                    Saturday: 10:00 AM - 5:00 PM
                    <br />
                    Sunday: <b>Closed</b> 
                    </p>
                    <br />
                    <h1>Contact:</h1>
                    <p>(647) 123-4567</p>
                    <p>Localbakers@dough.com</p>
                </div>
                <img src="https://www.flare.com/wp-content/uploads/2020/02/LOC_Bakeries_Inline-Roselle.jpg" />
            </div>
            <br />
            

        </div>
    );
}
 
export default Home;