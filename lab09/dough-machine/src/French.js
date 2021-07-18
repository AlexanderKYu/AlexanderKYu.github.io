import React from 'react';

const FrenchHome = () => {
    return (  
        <div className="home">
            <h1 style={{fontSize: "200%"}}>Domicile</h1>
            <br />
            <div className="about">
                <img src="https://media.blogto.com/articles/20170818-2048-SudForno17.jpg?w=2048&cmd=resize_then_crop&height=1365&quality=70" width="50%"/>
                <div className="aboutP">
                    <h1>À propos de nous</h1>
                    <br />
                    <p>Nous sommes des boulangers primés qui ont perfectionné nos compétences et nos techniques de fabrication de pâtisseries.
                        Les pâtisseries qui quittent notre magasin sont toujours de la meilleure qualité et prêtes pour votre satisfaction.
                    </p>
                </div>
            </div>
            <br />
            <br />
            <div className="contact">
                <div className="contactP">
                    <h1>Emplacements:</h1>
                    <p>Emplacement 1: 290 Bremner Blvd, Toronto, ON M5V 3L9
                        <br />
                        Emplacement 2: 100 Queens Park, Toronto, ON M5S 2C6
                    </p>
                    <br />
                    <h1>Les heures:</h1>
                    <p>
                    Lundi - Vendredi: 9:00 AM - 5:00 PM
                    <br />
                    Samedi: 10:00 AM - 5:00 PM
                    <br />
                    Dimanche: <b>Fermé</b> 
                    </p>
                    <br />
                    <h1>Contacter:</h1>
                    <p>(647) 123-4567</p>
                    <p>Localbakers@dough.com</p>
                </div>
                <img src="https://www.flare.com/wp-content/uploads/2020/02/LOC_Bakeries_Inline-Roselle.jpg" width="40%"/>
            </div>
            <br />
            

        </div>
    );
}
 
export default FrenchHome;