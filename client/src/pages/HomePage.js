import Home from "../components/Home";
import {HomeData} from "../data/HomeData";

function HomePage() {
    return (
        <Home slides={HomeData}/>
    )
}

export default HomePage;