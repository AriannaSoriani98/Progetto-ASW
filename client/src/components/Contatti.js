import "./contatti.css"
import {FaFacebookSquare, AiFillInstagram, AiOutlineMail, IoCallOutline, GiPositionMarker} from "react-icons/all";
import GoogleMap from "./GoogleMap";
import {Link} from "react-router-dom";

function Contatti() {
    return (
        <body style={{overflowX: "auto"}}>
            <div className="contacts-container">

                    <Link to="/" className="close-btn">
                        x
                    </Link>

                <div className="contact-left">
                    <GoogleMap/>
                </div>
                <div className="contact-right">
                    <div className="contact">
                        <div className="contact-type">
                            <div className="contact-label">
                                <div className="icon">
                                    <IoCallOutline/>
                                </div>
                                Numeri di telefono:
                            </div>
                            <div className="content">
                                +053278988 <br/>
                                +39 3286669811 <br/>
                                +39 3390983321 <br/>
                            </div>
                        </div>
                        <div className="contact-type">
                            <div className="contact-label">
                                <div class={"icon"}>
                                    <AiOutlineMail/>
                                </div>
                                E-mail:
                            </div>
                            <div class="content">
                                info@playamayorca.com
                            </div>
                        </div>
                        <div className="contact-type">
                            <div className="contact-label">
                                Seguici sui social!
                            </div>
                            <div className="content">
                                <AiFillInstagram/>
                                Playa_Mayorca <br/>
                                <FaFacebookSquare/>
                                Playa Mayorca
                            </div>
                        </div>
                        <div className="contact-type">
                            <div className="contact-label">
                                <div className="icon">
                                    <GiPositionMarker/>
                                </div>
                                Indirizzo:
                            </div>
                            <div className="content">
                                Lungomare Claudio Tintori, 20,<br/>
                                47921 Rimini RN
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </body>
    )
}

export default Contatti;