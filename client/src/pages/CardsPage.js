import Cards from "../components/Cards";
import {CardsData} from "../data/CardsData";
import React from "react";

function CardsPage() {
    return (
        <Cards cards={CardsData}/>
    )
}

export default CardsPage;