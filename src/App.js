import './App.css';
import 'animate.css';
import HeaderName from "./HeaderName";
import './HeaderName.css';
import Body from "./Body";
//import { Helmet } from 'react-helmet';
//const TITLE = 'Benvenuto'
//<Helmet>
//    <title>{ TITLE }</title>
//</Helmet>

function App() {
    const name = 'Playa Majorca'

  return (
      <html>
        <HeaderName name={name}/>
        <Body/>

      </html>
  );
}

export default App;
