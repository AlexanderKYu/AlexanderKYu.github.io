import React from 'react';

const Contact = () => {
    return ( 
        <div className="contactPage">
            <h1 style={{fontSize: "200%"}}>Contact</h1>
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
                <img src="https://www.flare.com/wp-content/uploads/2020/02/LOC_Bakeries_Inline-Roselle.jpg" width="40%"/>
            </div>
            <br />
            

        </div>

    );
}
 
export default Contact;