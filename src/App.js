import './App.css';
import 'animate.css';
import {Route} from 'react-router-dom'
import Menu from "./components/menu";
import HomePage from "./pages/HomePage";
import PrenotazioniPage from "./pages/PrenotazioniPage";
import ContattiPage from "./pages/ContattiPage";
import LuogoPage from "./pages/LuogoPage";
import Home from "./components/Home";

//import { Helmet } from 'react-helmet';
//const TITLE = 'Benvenuto'
//<Helmet>
//    <title>{ TITLE }</title>
//</Helmet>

function App() {

  return (
      <div class="row-container">
          <Home/>
            <Route path="/prenotazioni"><PrenotazioniPage /></Route>
            <Route path="/luogo"><LuogoPage /></Route>
            <Route path="/contatti"><ContattiPage /></Route>
      </div>

  );
}

export default App;
