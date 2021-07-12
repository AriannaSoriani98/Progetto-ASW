import Menu from "./menu";
import PrenotazioniPage from "../pages/PrenotazioniPage";
import ContattiPage from "../pages/ContattiPage";
import LuogoPage from "../pages/LuogoPage";
import {Link} from "react-router-dom";
import React from "react";

function Home() {
    const name = 'Playa Majorca'
    return (
        <body>
        <div className="row-container">
            <Menu/>
            <div className={"title"}>
                <h1 className="animate__animated animate__bounceInDown"> {name} </h1>
            </div>
            <div className={"right"}>
            </div>
        </div>
        <div className="container">
            <li className="nav-item">
            <Link to="/prenotazioni" className={"row"}>
                PRENOTA SUBITO <br/>
                IL TUO OMBRELLONE!
            </Link>
            </li>
        </div>
        </body>
    )
}

export default Home;