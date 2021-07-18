import { React, useState } from 'react';
import { Link } from "react-router-dom";

const NavBar = () => {

    const[first, setFirst] = useState(" Home");
    const[sec, setSec]= useState(" Pastries");
    const[thi, setThi] = useState(" Best Rated");
    const[fou, setFou] = useState(" Bakers Picks");
    const[fiv, setFiv] = useState(" Bakers");
    const[six, setSix] = useState(" Contact");
    const[sev, setSev] = useState(" View Order");
    const[eig, setEig] = useState(" Help");
    const[nin, setNin] = useState(" French");

    function change() {
        setFirst(" Domicile");
        setSec(" Des pâtisseries");
        setThi(" Les mieux notés");
        setFou(" Choix de boulangers");
        setFiv(" Boulangers");
        setSix(" Contacter");
        setSev(" Ordre");
        setEig(" Aider");
        setNin(" Anglais");
    }
    return ( 
        <nav className="navbar">
            <div className="navbarTitle">
                <img src="https://img.icons8.com/emoji/48/000000/money-with-wings-emoji.png" width="130px"/>
                <h1>Dough Machine</h1>
            </div>
            <br />
            <Link to="/"><img src="https://img.icons8.com/ios/50/000000/home--v3.png" width="30px" />{ first }</Link>
            <br />
            <Link to="/Pastries"><img src="https://img.icons8.com/windows/32/000000/croissant.png" width="30px"/>{ sec }</Link>
            <br />
            <Link to="/BestRated"><img src="https://img.icons8.com/ios-glyphs/30/000000/star--v2.png" width="30px"/>{ thi }</Link>
            <br />
            <Link to="/BakersPicks"><img src="https://img.icons8.com/ios/50/000000/sidebar-menu.png" width="30px"/>{ fou }</Link>
            <br />
            <Link to="/Bakers"><img src="https://img.icons8.com/ios/50/000000/chef-hat.png" width="30px"/>{ fiv }</Link>
            <br />
            <Link to="/Contact"><img src="https://img.icons8.com/ios/50/000000/phone.png" width="30px"/>{ six }</Link>
            <br />
            <Link to="/Order"><img src="https://img.icons8.com/ios/50/000000/checkout.png" width="30px"/>{ sev }</Link>
            <br />
            <Link to="/Help"><img src="https://img.icons8.com/ios/50/000000/help.png" width="30px"/>{ eig }</Link>
            <br />
            <Link to="/FR" onClick={ change }><img src="https://img.icons8.com/windows/32/000000/language.png" width="30px"/>{ nin }</Link>
            <br />
        </nav>
    );
}
 
export default NavBar;