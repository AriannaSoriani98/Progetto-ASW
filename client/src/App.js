import './App.css';
import 'animate.css';
import {Route} from 'react-router-dom'
import CardsPage from "./pages/CardsPage";
import PlacePage from "./pages/PlacePage";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ReservationPage from "./pages/ReservationPage";
import AvailabilityPage from "./pages/AvailabilityPage";
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
            <Route path="/booking/:fromDate/:toDate"><AvailabilityPage/></Route>
            <Route path="/schede"><CardsPage /></Route>
            <Route path="/luogo"><PlacePage/></Route>
      </div>

  );
}

export default App;
