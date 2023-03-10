import styled from "styled-components";
import React from 'react'
import { Link } from 'react-router-dom';
import {GiPalmTree,GiSeagull,SiLighthouse, GiSurfBoard,GiSadCrab,GiAtSea,GiOasis,IoSunny} from "react-icons/all";
import "./home.css";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  
`;

const Column1 = styled.div`
  flex-direction: column;
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

const ItemSX = styled.li`
  display: flex;
  width: 100%;
  height:25%;
  background:none;
  border: none;
  align-items: center;
  justify-content: right;
  padding-right: 10%;
`;
const ItemDX = styled.li`
  display: flex;
  width: 100%;
  height:25%;
  background:none;
  border: none;
  align-items: center;
  justify-content: left;
  padding-left: 10%;
`;

const Title = styled.h1`
  padding-left:5%;
  padding-right:5%;
  text-align: center;
  padding-top: 5%;
  width: max-content;
  height: 100px;
  background:rgba(0, 0, 0, 0.4);
  color: white;
  border-radius: 100px;
`;





const Reservation = () =>{



    return(
        <body>


        {/*<BookingCalendar />*/}

        <Container style={{overflow:"auto"}}>
            <ItemDX>
                <Title >
                    Scegli il tuo bagno!
                </Title>
            </ItemDX>

            <Column1>
                <ItemSX>

                        <Link to="/booking/Albatros" >
                            <Button>
                                <GiSeagull/>
                                Albatros
                            </Button>


                        </Link>
                </ItemSX>
                <ItemSX>
                        <Link to="/booking/HakunaMatata" >
                            <Button>
                                <GiPalmTree/>
                                Hakuna Matata
                            </Button>
                        </Link>
                </ItemSX>
                <ItemSX>
                        <Link to="/booking/Faro" >
                            <Button>
                                <SiLighthouse/>
                                Faro
                            </Button>
                        </Link>

                </ItemSX>
                <ItemSX>
                        <Link to="/booking/Marrakech" >
                            <Button>
                                <GiSurfBoard/>
                                Marrakech
                            </Button>
                        </Link>


                </ItemSX>
            </Column1>




            <Column2>
                <ItemDX>
                        <Link to="/booking/Granchio" >
                            <Button>
                                <GiSadCrab/>
                                Granchio
                            </Button>
                        </Link>

                </ItemDX>
                <ItemDX>
                        <Link to="/booking/FloridaBeach" >
                            <Button>
                                <GiAtSea/>
                                Florida Beach
                            </Button>
                        </Link>

                </ItemDX>
                <ItemDX>
                        <Link to="/booking/Oasi" >
                            <Button>
                                <GiOasis/>
                                Oasi
                            </Button>
                        </Link>

                </ItemDX>
                <ItemDX>
                        <Link to="/booking/Mexico" >
                            <Button>
                                <IoSunny/>
                                Mexico
                            </Button>
                        </Link>

                </ItemDX>
            </Column2>

        </Container>




        </body>


    );
};
export default Reservation;
