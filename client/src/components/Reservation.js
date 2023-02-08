import styled from "styled-components";

import React, {Component, useEffect, useState} from 'react'

import Albatros from "./Albatros";
import { Link } from 'react-router-dom';
import {GiPalmTree,GiSeagull,SiLighthouse, GiSurfBoard,GiSadCrab,GiAtSea,GiOasis,IoSunny} from "react-icons/all";

const Container = styled.div`
  display: flex;
  
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Column1 = styled.div`
  flex-direction: column;
  padding-left:100px;
  margin:0px;
  height:100%;
  width: 100%;
`;
const Column2 = styled.div`
  flex-direction: column;
  padding-right:100px;
  margin:0px;
  height:100%;
  width: 100%;
`;
const Button = styled.button`
  width: 280px;
  height: 100px;
  padding: 16px 20px;
  border-radius: 20px;
  border-color: #003580;
  background: #AACFEF;
  color: #003580;
  cursor: pointer;
  margin: auto;
`;

const Item = styled.li`
  display: flex;
  width: 100%;
  height:25%;
  background:none;
  border: none;
  align-items: center;
  justify-content: center;
  
`;





const Reservation = () =>{



    return(
        <body style={{overflowX: "auto", overflowY: "auto"}}>

        {/*<BookingCalendar />*/}

        <Container>
            <Column1>
                <Item>

                        <Link to="/booking/Albatros" >
                            <Button>
                                <GiSeagull/>
                                Albatros
                            </Button>


                        </Link>
                </Item>
                <Item>
                        <Link to="/booking/HakunaMatata" >
                            <Button>
                                <GiPalmTree/>
                                Hakuna Matata
                            </Button>
                        </Link>
                </Item>
                <Item>
                        <Link to="/booking/Faro" >
                            <Button>
                                <SiLighthouse/>
                                Faro
                            </Button>
                        </Link>

                </Item>
                <Item>
                        <Link to="/booking/Marrakech" >
                            <Button>
                                <GiSurfBoard/>
                                Marrakech
                            </Button>
                        </Link>


                </Item>
            </Column1>

            <Column2>
                <Item>
                        <Link to="/booking/Granchio" >
                            <Button>
                                <GiSadCrab/>
                                Granchio
                            </Button>
                        </Link>

                </Item>
                <Item>
                        <Link to="/booking/FloridaBeach" >
                            <Button>
                                <GiAtSea/>
                                Florida Beach
                            </Button>
                        </Link>

                </Item>
                <Item>
                        <Link to="/booking/Oasi" >
                            <Button>
                                <GiOasis/>
                                Oasi
                            </Button>
                        </Link>

                </Item>
                <Item>
                        <Link to="/booking/Mexico" >
                            <Button>
                                <IoSunny/>
                                Mexico
                            </Button>
                        </Link>

                </Item>
            </Column2>

        </Container>




        </body>


    );
};
export default Reservation;
