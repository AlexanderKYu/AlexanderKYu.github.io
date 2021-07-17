import React from 'react';
import SearchField from 'react-search-field';

const BRated = () => {

    function onEnter() {
        console.log("hit");
    }

    return ( 
        <div className="pastries">
            <h1 style={{fontSize: "200%"}}>Best Rated Pastries</h1>
            <div className="searchAndcheck">
                <SearchField
                    placeholder="Search Pastries"
                    onEnter={ onEnter }
                />
            </div>
            <br />

            <div className="itemsContainer">
                <div className="item">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Cream_horns_%2815466292759%29.jpg/120px-Cream_horns_%2815466292759%29.jpg" width="25%"/>
                    <h1>Cream horn</h1>
                    <p>A pastry made with flaky or puff pastry, filled with fruit or jam and whipped cream.</p>
                    <br />
                    <button>Add to Order</button>
                </div>
                <div className="item">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Eclairs_with_chocolate_icing_at_Cafe_Blue_Hills.jpg/120px-Eclairs_with_chocolate_icing_at_Cafe_Blue_Hills.jpg" width="25%"/>
                    <h1>Éclair</h1>
                    <p>An oblong pastry made with choux dough filled with a cream and topped with icing.</p>
                    <br />
                    <button>Add to Order</button>
                </div>
            </div>
            <br />
            <br />
            <div className="itemsContainer">
                <div className="item">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Gibanica_single_slice_with_full_pie_in_background.jpg/120px-Gibanica_single_slice_with_full_pie_in_background.jpg" width="25%"/>
                    <h1>Gibanica</h1>
                    <p>A traditional Serbian pastry dish, usually made with white cheese, now popular throughout the Balkans.</p>
                    <br />
                    <button>Add to Order</button>
                </div>
                <div className="item">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Arc-en-ciel_comestible.jpg/120px-Arc-en-ciel_comestible.jpg" width="25%"/>
                    <h1>Macaron</h1>
                    <p>French macarons are made with a mixture of almond flour and confectioners' sugar which is folded into a meringue of stiffly beaten egg whites.</p>
                    <br />
                    <button>Add to Order</button>
                </div>
            </div>
            <br />
            <div className="itemsContainer">
                <div className="item">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Mille-feuille_20100916.jpg/120px-Mille-feuille_20100916.jpg" width="25%"/>
                    <h1>Mille-feuille</h1>
                    <p>a mille-feuille is made up of three layers of puff pastry, alternating with two layers of pastry cream, with whipped cream, or jam substitution.</p>
                    <br />
                    <button>Add to Order</button>
                </div>
                <div className="item">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Caramel_Apple_Cheesecake_Bars_with_Streusel_Topping.jpg/120px-Caramel_Apple_Cheesecake_Bars_with_Streusel_Topping.jpg" width="25%"/>
                    <h1>Streusel</h1>
                    <p>In baking and pastry making, streusel is a crumb topping prepared with butter, flour, and sugar that is baked on top of muffins, breads, pies, cakes and crumbles.</p>
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
 
export default BRated;