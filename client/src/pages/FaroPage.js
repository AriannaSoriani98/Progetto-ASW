import {General} from "../components/General";
import {CardsData} from "../data/CardsData";
import React, {useEffect} from 'react';

function FaroPage() {
    let data = [];

    useEffect(()=> {
        let i = 0;
        while ((CardsData[i].title != "Faro")&&(i<CardsData.length)) {
            i++;
        }
        data.push(CardsData[i]);
    });
    return (
        <General title={"Faro"} data={data}/>
    )
}

export default FaroPage;