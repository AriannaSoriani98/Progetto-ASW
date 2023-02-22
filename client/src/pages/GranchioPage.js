import {General} from "../components/General";
import {CardsData} from "../data/CardsData";
import React, {useEffect} from 'react';

function GranchioPage() {

    let data = [];

    useEffect(()=> {
        let i = 0;
        while ((CardsData[i].title != "Granchio")&&(i<CardsData.length)) {
            i++;
        }
        data.push(CardsData[i]);
    });

    return (
        <General title={"Granchio"} data={data}/>
    )
}

export default GranchioPage;