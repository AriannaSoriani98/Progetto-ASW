import React from "react";
import {Link} from 'react-router-dom'
function Menu() {
    return (
        <div className={"menu"}>
            <ul className="navbar-nav">
                <li className="nav-item">

                        <div className="menu-icon">
                            <div className="bar1"></div>
                            <div className="bar2"></div>
                            <div className="bar3"></div>
                        </div>
                        <div className={"menu-M"}> Menu</div>

                    <ul className="navbar-nav">
                        <li className="nav-item"><Link to="/prenotazioni" className="nav-link"> Prenota l'ombrellone</Link></li>
                        <li className="nav-item"><Link to="/luogo" className="nav-link">Dove trovarci</Link></li>
                        <li className="nav-item"><Link to="/contatti" className="nav-link">Contatti</Link></li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default Menu;