import './App.css';
import 'animate.css';
import Menu from "./components/Menu";

//import { Helmet } from 'react-helmet';
//const TITLE = 'Benvenuto'
//<Helmet>
//    <title>{ TITLE }</title>
//</Helmet>

function App() {
    const name = 'Playa Majorca'

  return (
      <body>
      <div class="row-container">
          <Menu/>

          <div class={"title"}>
              <h1 className="animate__animated animate__bounceInDown"> {name} </h1>
          </div>
          <div class={"right"}>
          </div>
      </div>
      <div className="container">
          <div className={"row"}>
              PRENOTA SUBITO <br/>
              IL TUO OMBRELLONE!
          </div>
      </div>
      </body>

  );
}

export default App;
