import Home from "../components/Home";
import {HomeData} from "../data/HomeData";
import React from "react";

function HomePage() {
    return (
        <Home slides={HomeData}/>
    )
}

export default HomePage;