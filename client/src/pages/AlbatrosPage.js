import {General} from "../components/General";
import {CardsData} from "../data/CardsData";
import React, {useEffect} from 'react';


function AlbatrosPage() {

    let data = [];

    useEffect(()=> {
        let i = 0;
        while ((CardsData[i].title != "Albatros")&&(i<CardsData.length)) {
            i++;
        }
        data.push(CardsData[i]);
    });


    return (
        <General title={"Albatros"} data={data}/>
    )
}

export default AlbatrosPage;