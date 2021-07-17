import React from 'react';

const Help = () => {
    return ( 
        <div className="helpPage">
            <h1 style={{fontSize: "200%"}}>Help</h1>
            <br />
            
            <div className="help">
                <div className="helpP">
                    <h1>Navigation</h1>

                    <br />
                    <b>Home:</b>
                    <p>Learn more about the Dough Machine and find us through our contacts.</p>

                    <b>Pastries: </b>
                    <p>Browse our vast collection of products made by award winning bakers.</p>

                    <b>Best Rated: </b>
                    <p>View the our most delicious pastries picked by our customers.</p>

                    <b>Bakers Picks: </b>
                    <p>Explore all the bakers favorite pastries.</p>
    

                    <b>Contact: </b>
                    <p>Find our different locations and hours. Feel free to always call and email too!</p>

                    <b>View Order: </b>
                    <p>View the pasties you have picked and check-out.</p>
                    
                </div>
                <img src="https://eatingthroughto.com/wp-content/uploads/2020/03/IMG_8804-1024x768.jpg" width="40%"/>

                
            </div>
            <br />
            

        </div>

    );
}

export default Help;