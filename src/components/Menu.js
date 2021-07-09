function Menu() {
    return (
        <div className={"menu"}>
            <ul>
                <li>
                    <a href={"/"}>
                        <div className="menu-icon">
                            <div className="bar1"></div>
                            <div className="bar2"></div>
                            <div className="bar3"></div>
                        </div>
                        <div className={"menu-M"}> Menu</div>
                    </a>
                    <ul>
                        <li><a href={"/Prenotazione"}> Prenota l'ombrellone</a></li>
                        <li><a href={"/Luogo"}>Dove trovarci</a></li>
                        <li><a href={"/Contatti"}>Contatti</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default Menu;