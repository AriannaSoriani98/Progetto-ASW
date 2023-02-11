import styled, {css} from "styled-components";
import {IoArrowBack, IoArrowForward} from "react-icons/io5";
import {IoMdArrowRoundForward} from "react-icons/io";
import {Button} from "./Button";
import React,{useState,useRef,useEffect} from 'react'
import {Link} from "react-router-dom";
import GoogleMap from "./GoogleMap";
import {GiTable,AiFillInstagram, AiOutlineMail, FaFacebookSquare, GiPositionMarker, IoCallOutline, BiEuro, FaUmbrellaBeach} from "react-icons/all";
import "./contatti.css";

const HomeSection=styled.section`
  height: 100vh;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
  background-color: #FFFFFF;
`;
const HomeWrapper=styled.div`
  width: 60%;
  height: 80%;
  top:10%;
  left:20%;
  right:20%;
  bottom:10%;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;
const HomeSlide=styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
`;
const HomeSlider=styled.div`
  position: absolute;
  top:0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
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
    h1:hover;
  }
`;
const HomeContent=styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  max-width: 1600px;
  width: calc(100% - 100px);
  color:#fff;

  h1{
    font-size: clamp(1rem,8vw,10rem);
    font-weight: 400;
    text-transform: uppercase;
    text-shadow: 0px 0px 20px rgba(0,0,0,0.4);
    text-align: left;
    margin-bottom: 0.8rem;
  }

`;
const Arrow=styled(IoMdArrowRoundForward)`
  margin-left: 0.5rem;
`;

const SliderButtons=styled.div`
  position: absolute;
  bottom: 50px;
  right: 50px;
  display: flex;
  z-index: 10;
`;
const arrowButtons = css`
  height: 50px;
  width: 50px;
  color: #fff;
  cursor: pointer;
  background: #000d1a;
  border-radius: 50px;
  padding: 10px;
  margin-right: 1rem;
  user-select: none;
  transition: 0.3s;

  &:hover{
    background: #cd853f;
    transform: scale(1.05);
  }
`;
const PrevArrow=styled(IoArrowBack)`
  ${arrowButtons}
`;
const NextArrow=styled(IoArrowForward)`
  ${arrowButtons}
`;
const H1 = styled.h1`
  background-color: #060b26;
  
`;

const Cards =({cards})=> {
    const [current,setCurrent]=useState(0)
    const lenght= cards.length
    const timeout=useRef(null)


    const nextSlide=()=>{
        if(timeout.current) {
            clearTimeout(timeout.current)
        }
        setCurrent(current==lenght-1 ? 0 :  current+1) //se arriva a 0 ricomincia
    };

    const prevSlide=()=>{
        if(timeout.current) {
            clearTimeout(timeout.current)
        }
        setCurrent(current==0 ? lenght-1:current-1)
    };
    if(!Array.isArray(cards)|| cards.length<=0){
        return null
    }

    return (
        <body>
        {cards.map((card, index) => {
            return (
                <div className="contacts-container" key={index}>

                    {index === current && (
                        <div className="cards-container" key={index}>

                            <Link to="/" className="close-btn">
                                x
                            </Link>

                            <div className="card-left">
                                <h1>{card.title}</h1>
                                <HomeImage src={card.image}/>
                            </div>

                            <div className="contact-right">

                                <div className="contact">
                                    {/*<div className="contact-type">

                                        <div className="contact-label">
                                            <div className="icon">
                                                <BiEuro/>
                                            </div>
                                            Prezzi:
                                        </div>
                                        <div className="content">
                                            <ul>
                                                <li>Prima fila:
                                                    <ul>
                                                        <li>
                                                            Ombrellone : {card.prima_ombrellone}
                                                        </li>
                                                        <li>
                                                            Lettino : {card.prima_lettino}
                                                        </li>

                                                    </ul>
                                                </li>
                                                <li>Seconda e terza fila: </li>
                                                <ul>
                                                    <li>
                                                        Ombrellone : {card.sec_terza_ombrellone}
                                                    </li>
                                                    <li>
                                                        Lettino : {card.sec_terza_lettino}
                                                    </li>

                                                </ul>
                                                <li>Altre file: </li>
                                                <ul>
                                                    <li>
                                                        Ombrellone : {card.altri_ombrellone}
                                                    </li>
                                                    <li>
                                                        Lettino : {card.altri_lettino}
                                                    </li>

                                                </ul>

                                            </ul>
                                                </div>
                                    </div>*/}

                                    <table>
                                        <tr>
                                            <th width={"190px"}>
                                                <div className="contact-label">
                                                    <div className="icon">
                                                        <BiEuro/>
                                                    </div>
                                                    Prezzi:
                                                </div>
                                            </th>

                                        </tr>
                                        <tr>

                                            <td width={"200px"}>
                                                <div className="content">
                                                    Prima fila:
                                                        <ul>
                                                            <li>
                                                                Ombrellone : {card.prima_ombrellone}
                                                            </li>
                                                            <li>
                                                                Lettino : {card.prima_lettino}
                                                            </li>

                                                        </ul>

                                                </div>
                                            </td>
                                            <td width={"20px"}></td>
                                            <td width={"200px"}>
                                                <div className="content">
                                                    Seconda e terza fila:
                                                    <ul>
                                                        <li>
                                                            Ombrellone : {card.sec_terza_ombrellone}
                                                        </li>
                                                        <li>
                                                            Lettino : {card.sec_terza_lettino}
                                                        </li>

                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td width={"200px"}>
                                                <div className="content">
                                                    Altre file:
                                                    <ul>
                                                        <li>
                                                            Ombrellone : {card.altri_ombrellone}
                                                        </li>
                                                        <li>
                                                            Lettino : {card.altri_lettino}
                                                        </li>

                                                    </ul>
                                                </div>

                                            </td>
                                        </tr>
                                    </table>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <table>
                                        <tr>
                                            <th width={"190px"}>
                                                <div className="contact-label">
                                                    <div className="icon">
                                                        <IoCallOutline/>
                                                    </div>
                                                    Contatti:
                                                </div>
                                            </th>
                                            <th width={"40px"}>
                                            </th>
                                            <th width={"190px"}>
                                                <div className="contact-label">
                                                    <div className={"icon"}>
                                                        <AiOutlineMail/>
                                                    </div>
                                                    E-mail:
                                                </div>
                                            </th>
                                        </tr>
                                        <tr>
                                            <td width={"190px"}>
                                                <div className="content">
                                                    {card.telefono} <br/>

                                                </div>
                                            </td>
                                            <td width={"40px"}>
                                            </td>

                                            <td width={"190px"}>
                                                <div className="content">
                                                    {card.email}
                                                </div>
                                            </td>
                                        </tr>
                                    </table>
                                    <br/>
                                    <table>
                                        <tr>
                                            <th width={"190px"}>
                                                <div className="contact-label">
                                                    Seguici sui social!
                                                </div>
                                            </th>
                                            <th width={"40px"}>
                                            </th>
                                            <th width={"190px"}>
                                                <div className="contact-label">
                                                    <div className="icon">
                                                        <GiPositionMarker/>
                                                    </div>
                                                    Numero Bagno:
                                                </div>
                                            </th>
                                        </tr>
                                        <tr>
                                            <td width={"190px"}>
                                                <div className="content">
                                                    <AiFillInstagram/>
                                                    {card.instagram} <br/>
                                                    <FaFacebookSquare/>
                                                    {card.facebook}
                                                </div>
                                            </td>
                                            <td width={"40px"}>
                                            </td>
                                            <td width={"190px"}>
                                                <div className="content">
                                                    {card.numero}
                                                </div>
                                            </td>
                                        </tr>
                                    </table>
                                    {/*<div className="contact-type">

                                        <div className="contact-label">
                                            <div className="icon">
                                                <IoCallOutline/>
                                            </div>
                                            Contatti:
                                        </div>
                                        <div className="content">
                                            {card.telefono} <br/>

                                        </div>
                                    </div>
                                    <div className="contact-type">
                                        <div className="contact-label">
                                            <div className={"icon"}>
                                                <AiOutlineMail/>
                                            </div>
                                            E-mail:
                                        </div>
                                        <div className="content">
                                            {card.email}
                                        </div>
                                    </div>
                                    <div className="contact-type">
                                        <div className="contact-label">
                                            Seguici sui social!
                                        </div>
                                        <div className="content">
                                            <AiFillInstagram/>
                                            {card.instagram} <br/>
                                            <FaFacebookSquare/>
                                            {card.facebook}
                                        </div>
                                    </div>
                                    <div className="contact-type">
                                        <div className="contact-label">
                                            <div className="icon">
                                                <GiPositionMarker/>
                                            </div>
                                            Numero Bagno:
                                        </div>
                                        <div className="content">
                                            {card.numero}
                                        </div>

                                    </div>*/}
                                </div>

                            </div>

                        </div>
                    )}

                </div>
            )
        })}
        </body>
        /*<HomeSection>
        <HomeWrapper>
            {cards.map( (card, index)=>{
                return(
                    <HomeSlide key={index}>
                        {index===current&&(
                            <HomeSlider>
                                <HomeImage src={card.image}/>
                                <HomeContent>
                                    <h1>{card.title}</h1>
                                    <Button to={card.path}
                                            primary='true'
                                            css={`
                                                max-width: 160px;`}>
                                        {card.label}
                                        <Arrow/>
                                    </Button>
                                </HomeContent>
                            </HomeSlider>
                        )}
                    </HomeSlide>
                )
            })}
            <SliderButtons>
                <PrevArrow onClick={prevSlide}/>
                <NextArrow onClick={nextSlide}/>
            </SliderButtons>
        </HomeWrapper>
        </HomeSection>*/
        );
}

export default Cards;