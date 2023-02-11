import Cards from "../components/Cards";
import {CardsData} from "../data/CardsData";

function CardsPage() {
    return (
        <Cards cards={CardsData}/>
    )
}

export default CardsPage;