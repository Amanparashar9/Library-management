import React from "react";
import "../home/home.css"
import image from "../images/library.gif"
//home page section
const Home = () => {
    return(
        <div className="container2">
            <h1>WELCOME TO THE LIBRARY</h1>
            <img src={image} alt="" /> 
        </div>
    );

};

export default Home;