import {General} from "../components/General";
import {CardsData} from "../data/CardsData";
import React, {useEffect} from 'react';

function MexicoPage() {

    let data = [];

    useEffect(()=> {
        let i = 0;
        while ((CardsData[i].title != "Mexico")&&(i<CardsData.length)) {
            i++;
        }
        data.push(CardsData[i]);
    });

    return (
        <General title={"Mexico"} data={data}/>
    )
}

export default MexicoPage;