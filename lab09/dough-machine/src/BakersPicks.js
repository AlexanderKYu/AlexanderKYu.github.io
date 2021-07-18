import React from 'react';
import SearchField from 'react-search-field';

const BPicks = () => {

    function onEnter() {
        console.log("hit");
    }

    return ( 
        <div className="pastries">
            <h1 style={{fontSize: "200%"}}>Bakers Favorite Pastries</h1>
            <div className="searchAndcheck">
                <SearchField
                    placeholder="Search Pastries"
                    onEnter={ onEnter }
                />
            </div>
            <br />

            <div className="itemsContainer">

            <div className="item">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Croissant_photo_detouree_W_%28cropped%29.jpg/120px-Croissant_photo_detouree_W_%28cropped%29.jpg" width="25%"/>
                    <h1>Croissant</h1>
                    <p>A buttery flaky bread named for its distinctive crescent shape.</p>
                    <b>$ 2.99</b>
                    <br />
                    <button>Add to Order</button>
                </div>
                <div className="item">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Pecan_and_Maple_Danish.JPG/120px-Pecan_and_Maple_Danish.JPG" width="25%"/>
                    <h1>Danish pastry</h1>
                    <p>A sweet pastry, of Viennese origin, which has become a speciality of Denmark and neighboring Scandinavian countries.</p>
                    <b>$ 7.99</b>
                    <br />
                    <button>Add to Order</button>
                </div>
            </div>
            <br />
            <div className="itemsContainer">
                <div className="item">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Galette_des_Rois.png/120px-Galette_des_Rois.png" width="25%"/>
                    <h1>Galette</h1>
                    <p>Galette is a term used in French cuisine to designate various types of flat, round or freeform crusty cakes.</p>
                    <b>$ 18.99</b>
                    <br />
                    <button>Add to Order</button>
                </div>
                <div className="item">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Gibanica_single_slice_with_full_pie_in_background.jpg/120px-Gibanica_single_slice_with_full_pie_in_background.jpg" width="25%"/>
                    <h1>Gibanica</h1>
                    <p>A traditional Serbian pastry dish, usually made with white cheese, now popular throughout the Balkans.</p>
                    <b>$ 8.99</b>
                    <br />
                    <button>Add to Order</button>
                </div>
            </div>
            <br />
            <div className="itemsContainer">
                
                <div className="item">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Arc-en-ciel_comestible.jpg/120px-Arc-en-ciel_comestible.jpg" width="25%"/>
                    <h1>Macaron</h1>
                    <p>French macarons are made with a mixture of almond flour and confectioners' sugar which is folded into a meringue of stiffly beaten egg whites.</p>
                    <b>$ 15.99</b>
                    <br />
                    <button>Add to Order</button>
                </div>
                <div className="item">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Mille-feuille_20100916.jpg/120px-Mille-feuille_20100916.jpg" width="25%"/>
                    <h1>Mille-feuille</h1>
                    <p>a mille-feuille is made up of three layers of puff pastry, alternating with two layers of pastry cream, with whipped cream, or jam substitution.</p>
                    <b>$ 13.99</b>
                    <br />
                    <button>Add to Order</button>
                </div>
            </div>
            <br />
            <div className="footer">
                <div className="footerleft">
                    <h2>Location:</h2>
                    <p>290 Bremner Blvd, Toronto, ON M5V 3L9</p>
                    <p>100 Queens Park, Toronto, ON M5S 2C6</p>
                    <p><br /></p>
                </div>

                <div className="footerright">
                    <h2>Hours:</h2>
                    <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p>Saturday: 10:00 AM - 5:00 PM</p>
                    <p>Sunday: <b>Closed</b></p>
                    <p><br /></p>
                </div>
            </div>




        </div>

    );
}
 
export default BPicks;