import {General} from "../components/General";
import {CardsData} from "../data/CardsData";
import React, {useEffect} from 'react';

function MarrakechPage() {

    let data = [];

    useEffect(()=> {
        let i = 0;
        while ((CardsData[i].title != "Marrakech")&&(i<CardsData.length)) {
            i++;
        }
        data.push(CardsData[i]);
    });

    return (
        <General title={"Marrakech"} data={data}/>
    )
}

export default MarrakechPage;