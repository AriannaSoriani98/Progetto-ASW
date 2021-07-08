import './App.css';
import 'animate.css';

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
          <div class={"menu"}>
              <div className="menu-icon">
                        <div class="bar1"></div>
                        <div class="bar2"></div>
                        <div class="bar3"></div>
              </div>
              <div class={"menu-M"}> Menu </div>
          </div>
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
