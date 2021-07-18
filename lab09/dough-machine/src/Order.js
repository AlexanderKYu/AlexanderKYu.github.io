import { React, useState }from 'react';

const Order = () => {

    // let macQuant = 1;
    const [table, setTable] = useState("");
    const [macQuant, setMacQuant] = useState("1");
    const [milQuant, setMilQuant] = useState("1");
    const [totalCost, setTotalCost] = useState("30.00");

    function incMac() {
        setMacQuant(parseInt(macQuant) + 1);
        setTotalCost((parseInt(totalCost) + 16).toFixed(2));
    }

    function decMac() {
        setMacQuant(parseInt(macQuant) - 1);
        setTotalCost((parseInt(totalCost) - 16).toFixed(2));
    }

    function incMil() {
        setMilQuant(parseInt(milQuant) + 1);
        setTotalCost((parseInt(totalCost) + 14).toFixed(2));
    }

    function decMil() {
        setMilQuant(parseInt(milQuant) - 1);
        setTotalCost((parseInt(totalCost) - 14).toFixed(2));
    }

    function check() {
        var nonDigits = /^[a-zA-Z_.+-]+$/;
        var tmp = document.getElementById("phone1").value;
        if (nonDigits.test(tmp)){
            alert("Please only enter digits into the first parameter of the phone number!");
            return;
        }
    }

    function help1() {

        alert(
            "The order information is needed to inform you about your order status. \n \nPlease provide a name, phone number and email for communication and pick up."
        );

    }

    function help2() {

        alert(
            "Please provide the name on the debit / credit card, card number, expiry date, and security code. \n\nName on Card can be found on the front of the card.\nThe card number and expiry date can also be found on the front of the card.\nThe security code is the three digit number found on the back of the card."
        );

    }

    function help3() {

        alert(
            "The pick up loaction is required to get your pastries ready on time. \n\nPlease enter the desired date and time for when you want to pick up your order at our locations."
        );

    }

    function cancel() {

    }

    function order() {
        alert(
            "Order Placed: \n\n2 Macaron \n1 Mille-feuille\nTotal: $ 46.00 \n\nPickup: \n\n100 Queens Park, Toronto, ON M5S 2C6 at 2:00 PM "
        );
        window.location.href = "http://localhost:3000/";

    }

    return (  
        <div className="orderPage">
            <h1 style={{fontSize: "200%"}}>Your Cart</h1>
            <br />

            <table width="100%">
                <tr>
                    <td><b>Pastry</b></td>
                    <td><b>Quantity</b></td>
                    <td><b>Total Cost</b></td>
                </tr>
                <tr>
                    <td>Macaron</td>
                    <td>
                        { macQuant } &nbsp;
                        <button onClick={ incMac }><img src="https://img.icons8.com/ios/50/000000/plus--v1.png" width="25px"/></button>
                        <button onClick={ decMac }><img src="https://img.icons8.com/ios/50/000000/minus.png" width="25px"/></button>
                    </td>
                    <td>${ totalCost }</td>
                </tr>
                <tr>
                    <td>Mille-feuille</td>
                    <td>
                        { milQuant } &nbsp;
                        <button onClick={ incMil }><img src="https://img.icons8.com/ios/50/000000/plus--v1.png" width="25px"/></button>
                        <button onClick={ decMil }><img src="https://img.icons8.com/ios/50/000000/minus.png" width="25px"/></button>
                    </td>
                </tr>
            </table>
            <br />

            <h1 style={{fontSize: "125%"}}>Step 1: Order Information <a onClick={ help1 }><img src="https://img.icons8.com/ios/50/000000/help.png" width="25px"/></a> </h1>
            <br />

            <p>First Name: <input type="text" placeholder = "John"/> Last Name: <input type="text" placeholder="Dough"/></p>
            <br />
            <p>Phone Number: (<input type="text" maxlength = "3" id="phone1" size="2" onChange={ check } placeholder="647"/>) <input type="text" maxlength = "3" size="2" placeholder="123"/> - <input type="text" maxlength = "4" size="3" placeholder="4567"/></p>
            <br />
            <p>Email: <input type="text" size="25" placeholder="Localbakers@dough.com"/></p>
            <br />
            <h1 style={{fontSize: "125%"}}>Step 2: Payment Information <a onClick={ help2 }><img src="https://img.icons8.com/ios/50/000000/help.png" width="25px"/></a></h1>
            <br />

            <p>Name on Card: <input type="text" placeholder = "John Dough"/></p>
            <br />
            <p>Card Number: <input type="text" maxlength="4" size="4" placeholder = "XXXX"/> - <input type="text" maxlength="4" size="4" placeholder = "XXXX"/> - <input type="text" maxlength="4" size="4" placeholder = "XXXX"/> - <input type="text" maxlength="4" size="4" placeholder = "XXXX"/></p>
            <br />
            <p>Expiry Date: <input type="text" maxlength="2" size="2" placeholder = "MM"/> / <input type="text" maxlength="2" size="2" placeholder = "YY"/></p>
            <br />
            <p>Security Code: <input type="text" maxlength="3" size="3" placeholder = "XXX"/></p>
            <br />

            <h1 style={{fontSize: "125%"}}>Step 3: Pick Up Location <a onClick={ help3 }><img src="https://img.icons8.com/ios/50/000000/help.png" width="25px"/></a> </h1>
            <br />

            <div className="step3Container">
                <div className="left">
                    <p>Date: <input type="date" id="start" name="trip-start" value="2020-07-16"></input></p>
                    <br />
                    <p>Time: <input type="time" id="appt" name="appt" min="09:00" max="18:00" required></input></p>
                    <br />
                    <p>Hours:</p>
                    <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p>Saturday: 10:00 AM - 5:00 PM</p>
                    <p>Sunday: <b>Closed</b></p>
                    <br />
                </div>
                <div className="right">

                    <form>
                        <p>Locations:</p>
                        <input type="radio" id="loc1"/>
                        <label> 290 Bremner Blvd, Toronto, ON M5V 3L9</label><br />
                        <input type="radio" id="loc2" />
                        <label> 100 Queens Park, Toronto, ON M5S 2C6</label><br />
                    </form>
                </div>
                <div className="spacer">

                </div>
                <div className="spacer">
                    
                </div>
            </div>

            <div className="finalButtons">
                <button className="CBtn" onClick={ cancel }>Cancel Order</button> &nbsp; &nbsp; &nbsp; &nbsp;
                <button className="PBtn" onClick={ order }>Place Order</button>
            </div>
            <br />
            <br />

        </div>
        
    );
}
 
export default Order;