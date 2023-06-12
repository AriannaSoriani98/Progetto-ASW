import React, { useRef, useEffect, useCallback, useState} from 'react';
import { useSpring, animated } from 'react-spring';
import styled from "styled-components";
import {MdClose} from "react-icons/md";
import moment from 'moment';

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;

const ModalWrapper = styled.div`
  width: 700px;
  height: max-content;
  ;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: flex;
  position: relative;
  z-index: 10;
  border-radius: 10px;
  flex-direction: row;
`;

const LeftBox = styled.div`
  display: flex;
  width: 350px;
  border-right: 0.2px solid #141414;
  justify-content: flex-start;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.4;
  color: #141414;
  margin: auto;
  p {
    margin-bottom: 1rem;
  }
  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`;

const CloseBookingButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
  
`;

const B = styled.b`
  color: red;
`;

export const Booking = ({showBooking, setShowBooking, requestedDates, requestedPlace, OnAddedAlbatros,data})=> {

    console.log(requestedDates);
    console.log(requestedPlace);
    console.log(data);

    const [lettino,setLettino] = useState('');
    const [ombrellone,setOmbrellone]= useState('');


    useEffect(()=> {
        if(requestedPlace[0]>3){
            setLettino(data[0].altri_lettino);
            setOmbrellone(data[0].altri_ombrellone);
        }
        else if((requestedPlace[0]==2)||(requestedPlace[0]==3)){
            setLettino(data[0].sec_terza_lettino);
            setOmbrellone(data[0].sec_terza_ombrellone);
        } else if(requestedPlace[0]=="1"){
            setLettino(data[0].prima_lettino);
            setOmbrellone(data[0].prima_ombrellone);
        }

    });


    const [fromDate,setFromDate] = useState('');
    const [toDate,setToDate] = useState('');
    const [fila,setFila] = useState('');
    const [postazione,setPostazione] = useState('');


    function FromDateHandler(event){
        setFromDate(event.target.value)
    }
    function ToDateHandler(event){
        setToDate(event.target.value)
    }
    function FilaHandler(event){
        setFila(event.target.value)
    }
    function PostazioneHandler(event){
        setPostazione(event.target.value)
    }
    function OmbrelloneHandler(event){
        setOmbrellone(event.target.value)
    }
    function LettinoHandler(event){
        setLettino(event.target.value)
    }

    const bookingRef = useRef();

    const animation = useSpring({
        config: {
            duration: 250
        },
        opacity: showBooking ? 1 : 0,
        transform: showBooking ? `translateY(0%)` : `translateY(-100%)`
    });

    const closeBooking = e => {
        if (bookingRef.current === e.target) {
            setShowBooking(false);
        }
    };

    const keyPress = useCallback(
        e => {
            if (e.key === 'Escape' && showBooking) {
                setShowBooking(false);
                console.log('I pressed');
            }
        },
        [setShowBooking, showBooking]
    );

    useEffect(
        () => {
            document.addEventListener('keydown', keyPress);
            return () => document.removeEventListener('keydown', keyPress);
        },
        [keyPress]
    );

    function SubmitHandler(event){
        event.preventDefault();
        const formData = {
            dataInizio: moment(requestedDates[0]).format("YYYY-MM-DD"),
            dataFine: moment(requestedDates[1]).format("YYYY-MM-DD"),
            fila: requestedPlace[0],
            postazione: requestedPlace[1],
        }
        console.log(formData);
        OnAddedAlbatros(formData);
        setShowBooking(prev => !prev);
    }


    return(
      <>
          {showBooking ? (
              <Background onClick={closeBooking} ref={bookingRef} className={"background"}>
                  <animated.div style={animation} className={"animation"}>
                      <ModalWrapper showBooking={showBooking}>

                          <LeftBox>
                              <div className="col-md-9">
                                  <h1>Booking details</h1>
                                  <hr/>
                                  <b>

                                          {" "}
                                          <B>From Date:</B> <span onChange={FromDateHandler}>{moment(requestedDates[0]).format("DD-MM-YYYY")} </span> <br/>
                                          <B>To Date: </B> <span onChange={ToDateHandler}> {moment(requestedDates[1]).format("DD-MM-YYYY")}</span> <br/>
                                          <B>Fila: </B> <span onChange={FilaHandler}> {requestedPlace[0]} </span> <br/>
                                          <B>Ombrellone:</B> <span onChange={PostazioneHandler}> {requestedPlace[1]} </span> <br/>
                                          <B>Prezzo ombrellone:</B> <span onChange={OmbrelloneHandler}> {ombrellone} </span> <br/>
                                          <B>Prezzo singolo lettino:</B> <span onChange={LettinoHandler}> {lettino} </span> <br/>

                                  </b>


                              </div>
                          </LeftBox>
                          <ModalContent>

                              {/*<Link to={"/booking/" + fromDate + "/" + toDate}>
                                        <button onClick={handleSelect}>Search</button>
                                    </Link>*/}
                              <button type="submit" className="btn btn-primary" onClick={SubmitHandler}>
                                  Conferma
                              </button>

                          </ModalContent>
                          <CloseBookingButton
                              aria-label='Close booking'
                              onClick={() => setShowBooking(prev => !prev)}
                          />

                      </ModalWrapper>
                  </animated.div>
                  </Background>
          ) : null}
      </>
  );
};