import React, { useRef, useEffect, useCallback, useState} from 'react';
import { useSpring, animated } from 'react-spring';
import styled from "styled-components";
import {MdClose} from "react-icons/md";
import moment from 'moment';
import { Popup } from "./Popup";

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

const P = styled.div`
  color: red;
`;




export const Booking = ({showBooking, setShowBooking, requestedDates, requestedPlace, OnAddedAlbatros})=> {

    console.log(requestedDates);
    console.log(requestedPlace);


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
                              <div className="col-md-7">
                                  <h1>Booking details</h1>
                                  <hr/>
                                  <b>

                                          {" "}
                                          <P>From Date:</P> <p onChange={FromDateHandler}>{moment(requestedDates[0]).format("DD-MM-YYYY")} </p>
                                          <P>To Date: </P> <p onChange={ToDateHandler}> {moment(requestedDates[1]).format("DD-MM-YYYY")}</p>
                                          <P>Fila: </P> <p onChange={FilaHandler}> {requestedPlace[0]} </p>
                                          <P>Ombrellone:</P> <p onChange={PostazioneHandler}> {requestedPlace[1]} </p>


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