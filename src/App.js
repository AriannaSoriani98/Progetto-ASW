import './App.css';
import 'animate.css';
import {Route} from 'react-router-dom'
import Prenotazioni from "./components/Prenotazioni";
import ContattiPage from "./pages/ContattiPage";
import LuogoPage from "./pages/LuogoPage";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";

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
            <Route path="/prenotazioni"><Prenotazioni /></Route>
            <Route path="/luogo"><LuogoPage/></Route>
            <Route path="/contatti"><ContattiPage /></Route>
      </div>

  );
}

export default App;
