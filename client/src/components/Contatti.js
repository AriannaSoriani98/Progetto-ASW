import "./contatti.css"
import {FaFacebookSquare} from "react-icons/fa";
import {AiFillInstagram, AiOutlineMail} from "react-icons/ai";
import {IoCallOutline} from "react-icons/io5";
import {GiPositionMarker} from "react-icons/gi";
// import Maps from "./GoogleMap";
import {Link} from "react-router-dom";
import React, {useState} from "react";
import lidorimini from "../images/lidorimini.jpg";
import styled from "styled-components";

const HomeImage=styled.img`
  position: absolute;
  top:0;
  left:0;
  width: 100%;
  height: 100%;
  object-fit: cover;

  &::before{
    content: '';
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100vh;
    bottom: 0vh;
    left: 0;
    overflow: hidden;
    opacity: 0.4;
    background: linear-gradient(
            0deg,
            rgba(0,0,0,0.2) 0%,
            rgba(0,0,0,0.2) 50%,
            rgba(0,0,0,0.6) 100%
    );
  }
`;
function Contatti() {
    return (
        <body style={{overflowX: "auto"}}>
            <div className="contacts-container">

                    <Link to="/" className="close-btn">
                        x
                    </Link>

                <div className="contact-left">
                    {/*<Maps/>*/}
                    <HomeImage src={lidorimini}/>
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
                                info@lidorimini.com
                            </div>
                        </div>
                        <div className="contact-type">
                            <div className="contact-label">
                                Seguici sui social!
                            </div>
                            <div className="content">
                                <AiFillInstagram/>
                                Lido_Rimini <br/>
                                <FaFacebookSquare/>
                                Lido Rimini
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