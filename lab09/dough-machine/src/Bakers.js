import React from 'react';

const Bakers = () => {
    return (  

        <div className="bakersPage">
            <h1 style={{fontSize: "200%"}}>Meet our Bakers</h1>
            <br />

            <div className="baker">
                <img src="https://t3.ftcdn.net/jpg/03/14/25/46/360_F_314254659_gB8Z9NSEtQ6gvXdrIjC8R2vpxW7aJpFp.jpg" width="70%" />
                <div className="bakerP">
                    <h1>Natalia Holden</h1>
                    <br />
                    <p>Natalia is French Canadian born and raised in Montreal. As a young girl she always had a passion 
                        for cooking and challening herself to learn new recipies. Today she is one of the respectable bakers
                        in Toronto.
                        <br />
                        <br />
                        <i>"I love baking pastries for my customers. I hope that you can come and give them a try to see how much
                        work and passion we put in our pastries!"</i> - Natalia
                    </p>
                </div>
                
            </div>
            <br />
            <br />

            <div className="baker">
                <div className="bakerP">
                    <h1>Christopher Siu</h1>
                    <br />
                    <p>Christopher Siu is a very passionate baker with a very friendly personality. He won the title of Master Chef
                        Canada and continues to amaze his customers with his new pastries!
                        <br />
                        <br />
                        <i>"When I was young, my father used to make my brother and I Cheesecake. At the time, I felt the cheesecake 
                            was so life changing and meaningful to me, that I knew cooking would someday be part of my life."</i> - Christopher
                    </p>
                </div>
                <img src="https://eatnorth.com/sites/default/files/styles/article_freeheight/public/field/image/christopher_masterchef_canada_back_to_win_top_4_0.jpg?itok=Jd4L8TK5" width="50%" />
                
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
 
export default Bakers;