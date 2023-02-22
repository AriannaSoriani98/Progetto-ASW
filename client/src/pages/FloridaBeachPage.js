import {General} from "../components/General";
import {CardsData} from "../data/CardsData";
import React, {useEffect} from 'react';

function FloridaBeachPage() {

    let data = [];

    useEffect(()=> {
        let i = 0;
        while ((CardsData[i].title != "FloridaBeach")&&(i<CardsData.length)) {
            i++;
        }
        data.push(CardsData[i]);
    });

    return (
        <General title={"FloridaBeach"} data={data}/>
    )
}

export default FloridaBeachPage;