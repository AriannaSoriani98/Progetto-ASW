import {General} from "../components/General";
import {CardsData} from "../data/CardsData";
import React, {useEffect} from 'react';

function HakunaMatataPage() {

    let data = [];

    useEffect(()=> {
        let i = 0;
        while ((CardsData[i].title != "HakunaMatata")&&(i<CardsData.length)) {
            i++;
        }
        data.push(CardsData[i]);
    });

    return (
        <General title={"HakunaMatata"} data={data}/>
    )
}

export default HakunaMatataPage;