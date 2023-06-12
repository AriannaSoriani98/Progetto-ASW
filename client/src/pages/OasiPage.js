import {General} from "../components/General";
import {useEffect} from "react";
import {CardsData} from "../data/CardsData";
import React from "react";

function OasiPage() {

    let data = [];

    useEffect(()=> {
        let i = 0;
        while ((CardsData[i].title != "Oasi")&&(i<CardsData.length)) {
            i++;
        }
        data.push(CardsData[i]);
    });

    return (
        <General title={"Oasi"} data={data}/>
    )
}

export default OasiPage;