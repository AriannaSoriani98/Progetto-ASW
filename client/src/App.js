import './App.css';
import 'animate.css';
import {Route} from 'react-router-dom'
import CardsPage from "./pages/CardsPage";
import PlacePage from "./pages/PlacePage";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ReservationPage from "./pages/ReservationPage";
import AlbatrosPage from "./pages/AlbatrosPage";
import HakunaMatataPage from "./pages/HakunaMatataPage";
import FaroPage from "./pages/FaroPage";
import MarrakechPage from "./pages/MarrakechPage";
import GranchioPage from "./pages/GranchioPage";
import FloridaBeachPage from "./pages/FloridaBeachPage";
import OasiPage from "./pages/OasiPage";
import MexicoPage from "./pages/MexicoPage";

//import { Helmet } from 'react-helmet';
//const TITLE = 'Benvenuto'
//<Helmet>
//    <title>{ TITLE }</title>
//</Helmet>

function App() {

  return (
      <div class="row-container">
          <Navbar/>
            <Route path="/" exact><HomePage/></Route>
            <Route path="/booking"><ReservationPage/></Route>
            <Route path="/booking/Albatros"><AlbatrosPage/></Route>
            <Route path="/booking/HakunaMatata"><HakunaMatataPage/></Route>
            <Route path="/booking/Faro"><FaroPage/></Route>
            <Route path="/booking/Marrakech"><MarrakechPage/></Route>
            <Route path="/booking/Granchio"><GranchioPage/></Route>
            <Route path="/booking/FloridaBeach"><FloridaBeachPage/></Route>
            <Route path="/booking/Oasi"><OasiPage/></Route>
            <Route path="/booking/Mexico"><MexicoPage/></Route>
            <Route path="/schede"><CardsPage /></Route>
            <Route path="/luogo"><PlacePage/></Route>
      </div>

  );
}

export default App;
