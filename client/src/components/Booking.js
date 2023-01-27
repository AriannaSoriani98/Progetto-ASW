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

const P = styled.div`
  color: red;
`;


export const Booking = ({showBooking, setShowBooking, requestedDates, requestedPlace})=> {

    console.log(requestedDates);
    console.log(requestedPlace);

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
                                      <P>From Date:</P> {moment(requestedDates[0]).format("DD-MM-YYYY")}
                                      <P>To Date: {moment(requestedDates[1]).format("DD-MM-YYYY")} </P>
                                      <P>Fila: {requestedPlace[0]}</P>
                                      <P>Ombrellone: {requestedPlace[1]}</P>
                                  </b>


                              </div>
                          </LeftBox>
                          <ModalContent>
                              <h1>Are you ready?</h1>
                              {/*<Link to={"/booking/" + fromDate + "/" + toDate}>
                                        <button onClick={handleSelect}>Search</button>
                                    </Link>*/}
                              <button>
                                  Search
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