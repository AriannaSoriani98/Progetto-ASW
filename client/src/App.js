import './App.scss';
import {Route, Routes,Switch, BrowserRouter} from 'react-router-dom'
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
import React from "react";

//import { Helmet } from 'react-helmet';
//const TITLE = 'Benvenuto'
//<Helmet>
//    <title>{ TITLE }</title>
//</Helmet>

function App() {

  return (
      <div class="row-container">
        <Navbar/>

        <Routes>          
          <Route path="/" element={<HomePage/>}/>
          <Route path="/booking" element={<ReservationPage/>}/>
          <Route path="/booking/Albatros" element={<AlbatrosPage/>}/>
          <Route path="/booking/HakunaMatata" element={<HakunaMatataPage/>}/>
          <Route path="/booking/Faro" element={<FaroPage/>}/>
          <Route path="/booking/Marrakech" element={<MarrakechPage/>}/>
          <Route path="/booking/Granchio" element={<GranchioPage/>}/>
          <Route path="/booking/FloridaBeach" element={<FloridaBeachPage/>}/>
          <Route path="/booking/Oasi" element={<OasiPage/>}/>
          <Route path="/booking/Mexico" element={<MexicoPage/>}/>
          <Route path="/schede" element={<CardsPage/>} />
          <Route path="/luogo" element={<PlacePage/>}/>
         </Routes>

      </div>

  );
}

export default App;
