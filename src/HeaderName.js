import './HeaderName.css';
import 'animate.css';

function HeaderName(props) {
    const name= 'Playa Majorca'
    return (
        <h1 className="animate__animated animate__bounceInDown"> {props.name} </h1>
    )
}
export default HeaderName;